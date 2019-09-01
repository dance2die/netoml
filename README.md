# Netoml

A library to build Netlify TOML

Also can be used a as a CLI.

## Usage

You can use Netoml as a CLI (command-line interface) or as a library.

### CLI

If using it as a CLI, you'd need to [login](https://cli.netlify.com/commands/login) using [Netlify-CLI](https://cli.netlify.com/) first.

Logging in via `netlify login` would creates an access token, which is used by `netoml`.

Running the following command will create `netlify.toml` in the current directory.

```bash
$ netoml --name site_name
```

The command above will generate `netlify.toml` in the current directory for the site specified as `site_name`.

### @TODO: find out how to get the site name........

You can get the site name from...

If you already have an existing `netlify.toml` file in the current directly, you will be prompted to overwrite or rename it.

```bash
$ netoml --name site_name
"Overwrite 'netlify.toml' in current directory?"
> Yes
> No
```

You can specify the output file name using `--out` (or `-o`).

```bash
netoml --name site_name --out private-netlify.toml
- or -
netoml --name site_name -o private-netlify.toml
```

Lastly, you can overwrite the existing `netlify.toml` without being prompted.

```bash
netoml --name site_name --ovewrite
- or -
netoml --name  site_name -ow
```

#### Flags

- --name | -n - Site name to generate the `netlify.toml` for.
  - If the name isn't found, you will get an exception
  - @todo: create a test for the exception........
- --out | -o - Name of output file (e.g. `netlify.toml` or `../../netlify.toml`)
- --overwrite | -ow - Overwrite existing `netlify.toml` file without prompt

_In later version, I might add a flag to pass the access token directly without having to login using `netlify-cli`._

### Library

If you'd like to create a website/server to generate Netlify.toml, you can use `Netoml` as a library.

```javascript
import Netoml from 'netoml';
// Or CommonJS
const Netoml = require('netoml');

const netoml = new Netoml({ accessToken: NETLIFY_ACCESS_TOKEN });

console.log(netoml.toString({ name: 'reactblocks' }));
```
