// import NetlifyAPI from 'netlify'
import toml from 'toml-js'

import Auth from './auth';

const NetlifyAPI = require("netlify");

export type CommonOptions = { name: string }
export type JsonOptions = CommonOptions & {}
export type TomlOptions = CommonOptions & {}

export type toJson = (options?: JsonOptions) => object;
export type toToml = (options?: TomlOptions) => string;

const client = new NetlifyAPI(Auth.accessToken);
client.listSites().then((sites: any) => {
  const site = sites.filter((site: any) => site.name === "reactblocks")
  console.log(JSON.stringify(site, null, 2));
}).catch((error: any) => console.log(error))


const toToml: toToml = json => {
  if (json === undefined) return "";
  return toml.dump(json);
}


export interface Netoml {
  toToml: toToml
}
const Netoml = {
  toToml
}

export default Netoml;
