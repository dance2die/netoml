import toml from 'toml-js'

// Note: `trimEnd` as `toml-js` adds empty new lines for some reason...
const convertToToml = async (site: any) => toml.dump(site).trimEnd()

export { convertToToml }
