import chalk from "chalk";
import ora from "ora";
import fs from "fs-extra";
// import path from "path";

import toToml from '../converters/toToml'
import { toml as tomlConfig } from './config';

// import NetlifyAPI from "netlify";
const NetlifyAPI = require('netlify')
const { AutoComplete, Toggle } = require('enquirer')

import Auth from '../auth'
import { CommandActionOptions } from '../types/index';

function showNotLoggingMessage() {
  console.log(chalk.red(`Please login to Netlify to proceed! Exiting...`));
}

async function getSiteNames() {
  const client = new NetlifyAPI(Auth.accessToken);
  const sites = await client.listSites();
  return sites.map(({ name }: { name: string }) => name);
}

async function showSiteNames() {
  const spinner = ora("Fetching site names from Netlify...").start();
  const siteNames = await getSiteNames();
  spinner.stop();

  const selectSite = new AutoComplete({
    name: "Netlify sites",
    message: "Choose a Netlify site name",
    limit: 5,
    choices: siteNames
  });

  const siteName = await selectSite.run();
  return siteName;
}

async function showOverwritePrompt() {
  const overwritePrompt = new Toggle({
    message: `Overwrite "${tomlConfig.path}?`,
    enabled: "✔ Yes",
    disabled: "❌ No"
  });

  return await overwritePrompt.run();
}

async function writeToml(siteName: string, options: CommandActionOptions) {
  /*
    if TOML doesn't exist, write the file and exit.
    else
      if --overwrite=true, then write the file and exit
      else prompt to overwrite
  */

  const toml = await toToml({ name: siteName })

  if (await fs.pathExists(tomlConfig.path)) {
    fs.outputFile(tomlConfig.path, toml)
  } else {
    const shouldOverwrite = options.overwrite || await showOverwritePrompt();
    if (shouldOverwrite) {
      fs.outputFile(tomlConfig.path, toml)
    }
  }

}

const action = async (siteName: string, options: CommandActionOptions) => {
  // console.log(chalk.blue(`siteName=${siteName} & options`), options);
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

  console.info(chalk.blue(`Auth.isLoggedIn()=${await Auth.isLoggedIn()}`))
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
    console.info(chalk.blue(`siteName = "${siteName}"`))
    // @todo: Show loading screen using ORA.
    siteName = await showSiteNames();
  }

  // 3. Write the netlify.toml
  await writeToml(siteName, options);
};

// class AuthenticationCommand extends BaseCommand {
//   constructor(...args) {
//     super(...args);
//     super.init();
//   }

//   async login() {
//     await this.expensivelyAuthenticate();
//     return this.exit();
//   }

//   get accessToken() {
//     return this.getConfigToken()[0];
//   }
// }

// const cmd = new AuthenticationCommand();
// console.log(chalk.bgBlue.white("Hello world!"));

// (async () => {
//   if (!(await cmd.isLoggedIn())) {
//     const loginPrompt = new Toggle({
//       message: "Login to Netlify?",
//       enabled: "✔ Yes",
//       disabled: "❌ No"
//     });

//     const shouldLogin = await loginPrompt.run();
//     if (shouldLogin) {
//       class LoginCommand extends BaseCommand {
//         constructor(...args) {
//           super(...args);
//           super.init();
//         }

//         async run() {
//           await this.expensivelyAuthenticate();

//           return this.exit();
//         }
//       }
//     }
//   }

//   const selectSite = new AutoComplete({
//     name: "Netlify sites",
//     message: "Choose the Netlify Site Name",
//     limit: 5,
//     choices: [
//       "reactblocks",
//       "sungkimv4",
//       "react-router-v4-to-deploy-to-netlify-with-redirects"
//     ]
//   });

//   const site = await selectSite.run();
//   console.log(chalk.blue(`Selected "${site}"`));

//   // const tomlFile = `C:\\misc\\src\\throwaway\\temp\\netlify\\openapi\\src\\netlify.toml`;
//   const tomlFileExists = await fs.pathExists(tomlPath);
//   console.log(chalk.blue(`${tomlPath} exists?`, tomlFileExists));

//   if (tomlFileExists) {
//     const overwritePrompt = new Toggle({
//       message: `Overwrite "${tomlPath}?`,
//       enabled: "✔ Yes",
//       disabled: "❌ No"
//     });

//     const shouldOverwrite = await overwritePrompt.run();
//     if (shouldOverwrite) {
//       await fs.outputFile(tomlPath, "TOML STUFF 3333333!!!");
//       console.log(chalk.red(`Overwrote "${tomlPath}!!!"`));
//     }
//   }
// })();

// // (async () => {
// // const questions = [
// //   {
// //     type: "select",
// //     name: "color",
// //     message: "Favorite color?",
// //     initial: 1,
// //     choices: [
// //       { name: "red", message: "Red", value: "#ff0000" }, //<= choice object
// //       { name: "green", message: "Green", value: "#00ff00" }, //<= choice object
// //       { name: "blue", message: "Blue", value: "#0000ff" } //<= choice object
// //     ]
// //   }
// // ];
// // let answers = await prompt(questions);
// // console.log("Answer:", answers.color);
// // })();

// // (async () => {
// //   const response = await prompt([
// //     {
// //       type: "input",
// //       name: "name",
// //       message: "What is your name?"
// //     },
// //     {
// //       type: "input",
// //       name: "username",
// //       message: "What is your username?"
// //     }
// //   ]);

// //   console.log(response); // { username: 'jonschlinkert' }
// // })();

// // const confirm = new Confirm({
// //   name: "question",
// //   message: "Did you like enquirer?"
// // });

// // confirm.run().then(answer => console.log("Answer:", answer));

export default action
