import Auth from '../auth';
import { NetlifyToml, toJson } from '../types/index'
import buildProcessor from '../processors/build'

const NetlifyAPI = require("netlify");

const toJson: toJson = async options => {
  if (options === null) throw Error("Please pass JSON options")

  const { name } = options;
  const client = new NetlifyAPI(Auth.accessToken);
  const sites = await client.listSites();
  if (sites === null || sites.length === 0)
    throw Error(`Could not find any site!`)

  // const [site] = sites;
  const foundSites = sites.filter(({ name: siteName }: { name: string }) => siteName === name);
  if (foundSites.length <= 0)
    throw Error(`Could not find the site matching "${name}"!`)

  const build = buildProcessor(foundSites[0]);
  return { build } as NetlifyToml;
}

export default toJson;