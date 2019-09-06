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
      await this.command.expensivelyAuthenticate();
      return true;
    } catch {
      return false;
    }
  }

  async isLoggedIn() {
    // const files = await this.command.netlify.api.listSiteAssets({ site_id: '1810f4ce-e66d-49d4-9053-9e42e636aec2' });
    // console.log(`assets===>`, files)
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