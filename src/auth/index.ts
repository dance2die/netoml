// const BaseCommand = require("@netlify/cli-utils");
// import { BaseCommand } from "@netlify/cli-utils"
import BaseCommand from "@netlify/cli-utils"
// const cmd = new BaseCommand()

export interface Auth {
  accessToken: string;
  isLoggedIn: boolean;
  login: () => Promise<boolean>;
}

class AuthenticationCommand {
  constructor(private command: BaseCommand = new BaseCommand()) {
    this.command.init()
  }

  async login() {
    try {
      await this.command.expensivelyAuthenticate();
      // return this.exit();
      return true;
    } catch {
      return false;
    }
  }

  get accessToken() {
    return this.command.getConfigToken()[0];
  }
}

const authentication = new AuthenticationCommand()
// authentication.init()

export default {
  accessToken: authentication.accessToken,
  isLoggedIn: authentication.accessToken !== undefined,
  login: authentication.login
}