const BaseCommand = require("@netlify/cli-utils");
const cmd = new BaseCommand()

export interface Auth {
  accessToken: string;
  isLoggedIn: boolean;
}

const Auth = {
  accessToken: cmd.getConfigToken()[0],
  isLoggedIn: cmd.getConfigToken()[0] !== undefined
}

export default Auth