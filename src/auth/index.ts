// const BaseCommand = require("@netlify/cli-utils");
import { BaseCommand } from "@netlify/cli-utils"
// const cmd = new BaseCommand()

export interface Auth {
  accessToken: string;
  isLoggedIn: boolean;
  login: () => Promise<boolean>;
}

class AuthenticationCommand extends BaseCommand {
  // constructor() {
  //   super();
  //   super.init();
  // }

  async login() {
    await this.expensivelyAuthenticate();
    // return this.exit();
  }

  get accessToken() {
    return this.getConfigToken()[0];
  }
}

const authentication = new AuthenticationCommand()
authentication.init()

export default {
  accessToken: authentication.accessToken,
  isLoggedIn: authentication.accessToken !== undefined,
  login: authentication.login
}