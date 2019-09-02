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
    optimize: boolean,
    compress?: boolean
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

export type toJson = (options: JsonOptions) => Promise<NetlifyToml>;
export type toToml = (options: TomlOptions) => Promise<string>;

export interface Netoml {
  toToml: toToml,
  toJson: toJson,
  isLoggedIn: boolean
}

const client = new NetlifyAPI(Auth.accessToken);
// client.listSites().then((sites: any) => {
//   const site = sites.filter((site: any) => site.name === "reactblocks")
//   console.log(JSON.stringify(site, null, 2));
// }).catch((error: any) => console.log(error))

const toJson: toJson = async options => {
  if (options === null) throw Error("Please pass JSON options")

  const { name } = options;
  const sites = await client.listSites();
  if (sites === null || sites.length === 0)
    throw Error(`Could not find the site matching "${name}"!`)

  const [site] = sites;
  const { build_settings: buildSettings, processing_settings: processing } = site;

  const build: Build = {
    base: buildSettings.base,
    publish: buildSettings.dir,
    command: buildSettings.cmd,
    environment: buildSettings.env,
    processing
  }

  return { build } as unknown as NetlifyToml;
}

const toToml: toToml = async options => {
  if (options === null) return "";

  const json = toJson(options)
  return toml.dump(json);
}

const Netoml = {
  toToml,
  toJson,
  isLoggedIn: Auth.isLoggedIn
}

export default Netoml;
