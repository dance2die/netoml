import BaseCommand from "@netlify/cli-utils"

export interface Auth {
  accessToken: string | undefined;
  isLoggedIn: () => Promise<boolean>;
  login: () => Promise<boolean>;
}

class AuthenticationCommand implements Auth {
  constructor(
    private _accessToken = "",
    private command: BaseCommand = new BaseCommand()) {
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
    return this._accessToken === '' ? this.command.getConfigToken()[0] : this._accessToken
  }

  set accessToken(value: string) {
    this._accessToken = value
  }
}

const authentication = new AuthenticationCommand()
export default authentication;