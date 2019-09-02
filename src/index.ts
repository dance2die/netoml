// import NetlifyAPI from 'netlify'
import toml from 'toml-js'

import Auth from './auth';

const NetlifyAPI = require("netlify");

export type CommonOptions = { name: string }
export type JsonOptions = CommonOptions & {}
export type TomlOptions = CommonOptions & {}

export interface BuildEnvironment {
  [name: string]: string;
}
export interface BuildProcessing {
  css: {
    bundle: boolean;
    minify: boolean
  };
  js: {
    bundle: boolean;
    minify: boolean
  };
  images: {
    optimize: boolean
  };
  html: {
    pretty_urls: boolean
  };
  skip_processing: boolean
}

export interface Build {
  base?: string;
  // "dir"
  publish?: string;
  // "cmd"
  command?: string;
  environment?: BuildEnvironment;
  // "processing_settings"
  processing: BuildProcessing
}

export interface NetlifyToml {
  build: Build
}

export type toJson = (options?: JsonOptions) => NetlifyToml;
export type toToml = (options?: TomlOptions) => string;

export interface Netoml {
  toToml: toToml
}

const client = new NetlifyAPI(Auth.accessToken);
client.listSites().then((sites: any) => {
  const site = sites.filter((site: any) => site.name === "reactblocks")
  console.log(JSON.stringify(site, null, 2));
}).catch((error: any) => console.log(error))


const toToml: toToml = json => {
  if (json === undefined) return "";
  return toml.dump(json);
}

const Netoml = {
  toToml
}

export default Netoml;
