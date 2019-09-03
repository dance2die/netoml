import Auth from './auth';
import toJson from './converters/toJson'
import toToml from './converters/toToml'
import { initializeCli } from './cli'

initializeCli();

const Netoml = {
  toToml,
  toJson,
  isLoggedIn: Auth.isLoggedIn
}

export default Netoml;
