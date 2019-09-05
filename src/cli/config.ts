import path from 'path'

const tomlFileName = `netlify.toml`;
const tomlPath = path.resolve(process.cwd(), tomlFileName);

const toml = {
  name: tomlFileName,
  path: tomlPath
};

export { toml }
