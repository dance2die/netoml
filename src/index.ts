import toJson from './converters/toJson'
import toToml from './converters/toToml'
import { initializeCli } from './cli/index'

import { JsonOptions, TomlOptions } from './types/index'

class Netoml {
  async toJson(options: JsonOptions) {
    return toJson(options)
  }
  async toToml(options: TomlOptions) {
    return toToml(options)
  }
}

export { initializeCli }
export default Netoml;
