type CommonOptions = { name: string }
type JsonOptions = CommonOptions & {}
type TomlOptions = CommonOptions & {}

interface BuildEnvironment {
  [name: string]: string;
}
interface BuildProcessing {
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

interface Build {
  base?: string;
  // "dir"
  publish?: string;
  // "cmd"
  command?: string;
  environment?: BuildEnvironment;
  functions?: string,
  // "processing_settings"
  processing: BuildProcessing
}

interface NetlifyToml {
  build: Build
}

type toJson = (options: JsonOptions) => Promise<NetlifyToml>;
type toToml = (options: TomlOptions) => Promise<string>;

interface Netoml {
  toToml: toToml,
  toJson: toJson,
  isLoggedIn: boolean
}

interface CommandActionOptions {
  _: [],
  out: string,
  o: string,
  overwrite: boolean,
  w: boolean,
  console: boolean,
  c: boolean,
}

export {
  CommonOptions
  , JsonOptions
  , TomlOptions
  , BuildEnvironment
  , BuildProcessing
  , Build
  , NetlifyToml
  , toJson
  , toToml
  , Netoml
  , CommandActionOptions
}