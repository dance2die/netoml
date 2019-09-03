import { version } from "../../package.json"
import action from './action'
import { toml } from './config'
const sade = require('sade')

const initializeCli = () => sade("netoml [siteName]", true)
  .version(version)
  .example(`netoml reactblocks`)
  .example(`netoml reactblocks --overwrite`)
  .example(`netoml reactblocks --out reactblocks.netlify.toml`)
  .example(`netoml reactblocks --out reactblocks.netlify.toml --overwrite`)
  .option("--out, -o", `output ${toml.name} file name`, toml.name)
  .option("--overwrite, -w", `Overwrite existing ${toml.name}`, false)
  .action(action)
  .parse(process.argv);

export { initializeCli }