const BaseCommand = require("@netlify/cli-utils");
const cmd = new BaseCommand()

const auth = {
  isLoggedIn() {
    const [, accessToken] = cmd.getConfigToken()
    return accessToken !== undefined;
  }
}

export default auth