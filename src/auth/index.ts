const BaseCommand = require("@netlify/cli-utils");
const cmd = new BaseCommand()

const auth = {
  isLoggedIn() {
    // "getConfigToken" https://github.com/netlify/cli-utils/blob/master/src/index.js#L140
    const [, accessToken] = cmd.getConfigToken()
    return accessToken !== undefined;
  }
}

export default auth