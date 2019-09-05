// const BaseCommand = require("@netlify/cli-utils");
// import { BaseCommand } from "@netlify/cli-utils"
import BaseCommand from "@netlify/cli-utils"
// const cmd = new BaseCommand()

export interface Auth {
  accessToken: string;
  isLoggedIn: Promise<boolean>;
  login: () => Promise<boolean>;
}

class AuthenticationCommand {
  constructor(private command: BaseCommand = new BaseCommand()) {
    this.command.init()
  }

  async login() {
    try {
      console.log(`loging in... expensively...`)
      await this.command.expensivelyAuthenticate();
      return this.command.exit();
      return true;
    } catch {
      return false;
    }
  }

  async isLoggedIn() {
    return await this.command.isLoggedIn()
  }

  get accessToken() {
    return this.command.getConfigToken()[0];
  }
}

const authentication = new AuthenticationCommand()
// authentication.init()
export default authentication;
// export default {
//   accessToken: authentication.accessToken,
//   isLoggedIn: authentication.isLoggedIn,
//   login: authentication.login
// }