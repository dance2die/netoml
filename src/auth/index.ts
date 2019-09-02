const BaseCommand = require("@netlify/cli-utils");
const cmd = new BaseCommand()

export interface Auth {
  accessToken: string;
  isLoggedIn: boolean;
}

const Auth = {
  accessToken: cmd.getConfigToken()[1],
  isLoggedIn: cmd.getConfigToken()[1] !== undefined
}

export default Auth