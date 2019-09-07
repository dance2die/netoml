import BaseCommand from "@netlify/cli-utils"

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
    return await this.command.isLoggedIn()
  }

  get accessToken() {
    return this.command.getConfigToken()[0];
  }
}

const authentication = new AuthenticationCommand()
export default authentication;