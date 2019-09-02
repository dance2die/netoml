// import NetlifyAPI from 'netlify'
import toml from 'toml-js'

import Auth from './auth';

const NetlifyAPI = require("netlify");

export type toJson = (obj?: object) => object;
export type toToml = (json?: object) => string;

console.log(`Auth.accessToken)===>`, Auth.accessToken)

const client = new NetlifyAPI(Auth.accessToken);
export interface Site {
  name: string
}

client.listSites().then((sites: any) => {
  console.log(`sites`, sites.filter((site: any) => site.name === "reactblocks"));
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
