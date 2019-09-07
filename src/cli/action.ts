import chalk from "chalk";
import ora from "ora";
import fs from "fs-extra";
import path from "path";

import toToml from '../converters/toToml'
import { toml as tomlConfig } from './config';
import Auth from '../auth'
import { CommandActionOptions } from '../types/index';

const NetlifyAPI = require('netlify')
const { AutoComplete, Toggle } = require('enquirer')


const spin = async (message: string, fn: Function) => {
  const spinner = ora(message).start();
  const result = await fn();
  spinner.stop();
  return result;
}

const getDestinationPath = (options: CommandActionOptions) =>
  !!options.out ? path.resolve(process.cwd(), options.out) : tomlConfig.path;

function showNotLoggingMessage() {
  console.log(chalk.red(`Please login to Netlify to proceed! Exiting...`));
}

async function getSiteNames() {
  const client = new NetlifyAPI(Auth.accessToken);
  const sites = await client.listSites();
  return sites.map(({ name }: { name: string }) => name);
}

async function showSiteNames() {
  const siteNames = spin("Fetching site names from Netlify...", getSiteNames)

  const selectSite = new AutoComplete({
    name: "Netlify sites",
    message: "Choose a Netlify site name",
    limit: 5,
    choices: siteNames
  });

  const siteName = await selectSite.run();
  return siteName;
}

async function showOverwritePrompt(options: CommandActionOptions) {
  const destination = getDestinationPath(options);

  const overwritePrompt = new Toggle({
    message: `Overwrite "${destination}?`,
    enabled: "✔ Yes",
    disabled: "❌ No"
  });

  return await overwritePrompt.run();
}

async function writeToml(siteName: string, options: CommandActionOptions) {
  const toml = await toToml({ name: siteName })
  const destination = getDestinationPath(options);

  if (await fs.pathExists(destination)) {
    const shouldOverwrite = options.overwrite || await showOverwritePrompt(options);
    if (!shouldOverwrite) {
      console.info(chalk.blue(`Exiting without overwriting ${destination}...`))
    }
  }

  spin(``, () => {
    fs.outputFile(destination, toml);
    console.log(chalk.green(`Wrote settings in ${destination}...`), toml)
  })
}

/*
  1. Authenticate
  if not logged in, prompt to login
    if still not logged in, exit

  2. Get the site name
  if site name is NOT provided, go to interactive mode...
    Get the list of sites and create AutoComplete
    Get the selected site name

  3. Write the netlify.toml
  if TOML doesn't exist, write the file and exit.
  else
    if --overwrite=true, then write the file and exit
    else prompt to overwrite
*/
const action = async (siteName: string, options: CommandActionOptions) => {
  // 1. authenticate
  if (!(await Auth.isLoggedIn())) {
    try {
      const isLoggedIn = await Auth.login();
      if (!isLoggedIn) {
        showNotLoggingMessage();
        return;
      }
    } catch (error) {
      console.error(chalk.red(`Error occurred while logging in...`), error)
      return;
    }
  }

  // 2. Get the site name
  if (!siteName) {
    siteName = await showSiteNames();
  }

  // 3. Write the netlify.toml
  await writeToml(siteName, options);
};

export default action
