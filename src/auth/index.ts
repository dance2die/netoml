const BaseCommand = require("@netlify/cli-utils");
const cmd = new BaseCommand()

export interface Auth {
  accessToken: string;
  isLoggedIn: boolean;
}

const Auth = {
  accessToken: cmd.getConfigToken()[1],
  isLoggedIn: cmd.getConfigToken()[1] !== undefined
  //   // "getConfigToken" https://github.com/netlify/cli-utils/blob/master/src/index.js#L140
  //   const [, accessToken] = cmd.getConfigToken()
  //   return accessToken !== undefined;
  // }
}

export default Auth