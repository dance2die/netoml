# Netoml

A library to build Netlify TOML

Also can be used a as a CLI.

## Usage

You can use Netoml as a CLI (command-line interface) or as a library.

## Installation

To install it globally, run the following command.

```
npm install -g netoml
```

### CLI

#### Simpliest case - without any arguments

You can run without any arguments to the CLI, which lets you select the site deployed on Netlify and write the TOML in the current directory (Bug: It writes to where current CLI is installed. Requires a fix...)

Simply run `netoml` (or an alias, `ntml`).

```
$ netoml
- or -
$ ntml
```

When you are not logged into Netlify, you will be prompted to log in on Netlify authentication site.

One you are logged in, you can search/select the deployed site.

```bash
λ netoml
? Choose a Netlify site name ...
reactblocks
angry-swanson-bba4f2
zealous-benz-8d2f91
regular-peace-828b5
svelte-typeahead-dropdown
```

You can use arrow keys to select the site, or search by typing.

#### Running by passing the site name

Running the following command will create `netlify.toml` in the current directory.

```bash
$ netoml site_name
```

The command above will generate `netlify.toml` in the current directory for the site specified as `site_name`.  
_Note that it still saves it to where CLI is installed_

_To get around, use the option `--out ~/netlify.toml`_

If you already have an existing `netlify.toml` file in the current directly, you will be prompted to overwrite or rename it.

```bash
λ ntml
√ Choose a Netlify site name · reactblocks
? Overwrite "C:\misc\src\github\dance2die\cli\netoml\dist\netlify.toml? » ❌ No / ✔ Yes
```

You can specify the output file name using `--out` (or `-o`).

```bash
netoml site_name --out private-netlify.toml
- or -
netoml site_name -o private-netlify.toml
```

Lastly, you can overwrite the existing `netlify.toml` without being prompted.

```bash
netoml site_name --ovewrite
- or -
netoml site_name -ow
```

#### Flags

- --out | -o - Name of output file (e.g. `netlify.toml` or `../../netlify.toml`)
- --overwrite | -ow - Overwrite existing `netlify.toml` file without prompt

_In later version, I might add a flag to pass the access token directly without having to login using `netlify-cli`._

### Library

If you'd like to create a website/server to generate Netlify.toml, you can use `Netoml` as a library.

```javascript
import Netoml from 'netoml'
// Or CommonJS
const Netoml = require('netoml')

const netoml = new Netoml({ accessToken: NETLIFY_ACCESS_TOKEN })

// Get raw JSON without transforming it to TOML
console.log(netoml.toJson({ name: 'reactblocks' }))
// This is TOML version of .`toJson` output
console.log(netoml.toToml({ name: 'reactblocks' }))
```
