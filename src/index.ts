import Auth from './auth';
import {
  NetlifyToml
  , toJson
  , toToml
  , Netoml
} from './types/index'
import buildProcessor from './processors/build'
import { convertToToml } from './converters/toml'
import { initializeCli } from './cli'

initializeCli();

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

const toToml: toToml = async options => {
  if (options === null) return "";

  const json = await toJson(options)
  return convertToToml(json);
}

const Netoml = {
  toToml,
  toJson,
  isLoggedIn: Auth.isLoggedIn
}

export default Netoml;
