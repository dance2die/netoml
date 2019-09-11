# Netoml

A CLI to build to build Netlify TOML

Also can be used a as a JavaScript library.

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

Note that `site_name` is _**optional**_.  
If you do not specify it, the CLI will retrieve all of your Netlify site names, and let you select a site.

The command above will generate `netlify.toml` in the current directory for the site specified as `site_name`.  
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

You can overwrite the existing `netlify.toml` without being prompted.

```bash
netoml site_name --ovewrite
- or -
netoml site_name -ow
```

If you want to see the content of TOML without writing to a file, you can specify `--console | -c` flag to see the output in the console only.

```bash
netoml --console
- or -
ntml --console
```

#### Flags

| Short | Long        | Description                                                       |
| ----- | ----------- | ----------------------------------------------------------------- |
| -o    | --out       | Name of output file (e.g. `netlify.toml` or `../../netlify.toml`) |
| -w    | --overwrite | Overwrite existing `netlify.toml` file without prompt             |
| -c    | --console   | Writes TOML to console only (this does not write TOML to a file)  |
| -v    | --version   | Prints the CLI version                                            |
| -h    | --help      | Prints the CLI help message.                                      |

### Library

If you'd like to create a website/server to generate Netlify.toml, you can use `Netoml` as a library.

```javascript
import Netoml from 'netoml'
// Or CommonJS - Note the ".default"
const Netoml = require('netoml').default

const netoml = new Netoml({ accessToken: NETLIFY_ACCESS_TOKEN })

// Get raw JSON without transforming it to TOML
console.log(netoml.toJson({ name: 'reactblocks' }))
// This is TOML version of .`toJson` output
console.log(netoml.toToml({ name: 'reactblocks' }))
```
