import Auth from '../auth';
import { NetlifyToml, toJson } from '../types/index'
import buildProcessor from '../processors/build'

const NetlifyAPI = require("netlify");
const client = new NetlifyAPI(Auth.accessToken);

const toJson: toJson = async options => {
  if (options === null) throw Error("Please pass JSON options")

  const { name } = options;
  const sites = await client.listSites();
  if (sites === null || sites.length === 0)
    throw Error(`Could not find the site matching "${name}"!`)

  const [site] = sites;
  const build = buildProcessor(site);

  return { build } as unknown as NetlifyToml;
}

export default toJson;