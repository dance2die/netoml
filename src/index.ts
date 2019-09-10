import toJson from './converters/toJson'
import toToml from './converters/toToml'
import { initializeCli } from './cli/index'
import Auth from './auth'

import { JsonOptions, TomlOptions } from './types/index'

export interface NetomlOptions {
  accessToken: string
}

class Netoml {
  constructor(public options: NetomlOptions) {
    Auth.accessToken = options.accessToken
  }

  get accessToken() {
    return this.options.accessToken;
  }

  async toJson(options: JsonOptions) {
    return toJson(options)
  }
  async toToml(options: TomlOptions) {
    return toToml(options)
  }
}

export { initializeCli }
export default Netoml;
