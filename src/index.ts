import toml from 'toml-js'

export type toToml = (json?: object) => string;
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
