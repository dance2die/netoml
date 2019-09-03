import * as types from '../types/index'
import { convertToToml } from '../converters/toml'
import toJson from './toJson'

const toToml: types.toToml = async options => {
  if (options === null) return "";

  const json = await toJson(options)
  return convertToToml(json);
}

export default toToml;