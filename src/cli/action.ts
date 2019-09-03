/// <reference path="../types.d.ts" />
import { AutoComplete } from 'enquirer'
import BaseCommand from "@netlify/cli-utils";
import chalk from "chalk";
import ora from "ora";
import NetlifyAPI from "netlify";
// import fs from "fs-extra";
// import path from "path";

class AuthenticationCommand extends BaseCommand {
  constructor(...args: any[]) {
    super(...args);
    super.init();
  }

  async login() {
    await this.expensivelyAuthenticate();
    return this.exit();
  }

  get accessToken() {
    return this.getConfigToken()[0];
  }
}

const authentication = new AuthenticationCommand();

function showNotLoggingMessage() {
  console.log(chalk.red(`Please login to Netlify to proceed! Exiting...`));
}

async function getSiteNames() {
  const client = new NetlifyAPI(authentication.accessToken);
  const sites = await client.listSites();
  return sites.map(_ => _.name);
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

const action = async (siteName, options) => {
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

  // 1. authenticate
  if (await !authentication.isLoggedIn()) {
    const isLoggedIn = await authentication.login();
    if (!isLoggedIn) {
      showNotLoggingMessage();
      return;
    }
  }

  // 2. Get the site name
  if (!siteName) {
    // @todo: Show loading screen using ORA.
    siteName = await showSiteNames();
  }

  // 3. Write the netlify.toml
  // writeToml(siteName, options);
  console.log(`siteName, options`, siteName, options);
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
