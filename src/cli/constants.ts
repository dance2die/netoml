import path from 'path'

const tomlFileName = `netlify.toml`;
const tomlPath = path.resolve(__dirname, tomlFileName);

const toml = {
  name: tomlFileName,
  path: tomlPath
};

export default toml
