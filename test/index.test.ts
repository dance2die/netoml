import { AuthenticationCommand } from '../src/auth'
import { convertToToml } from '../src/converters/toml'
import buildProcessor from '../src/processors/build'
import { site, siteWithoutBuild } from './input'


describe('Authentication', () => {
  test('AuthenticationCommand accepts an access token', () => {
    const expected: string = 'expected access token';
    const sut = new AuthenticationCommand(expected)
    expect(sut.accessToken).toBe(expected)
  });
});


describe('JSON', () => {
  describe('Build', () => {
    it('renders Build configuration correctly', async () => {
      const actual = buildProcessor(site);
      // const actual = await Netoml.toJson(options)
      // console.log(`actual ==>`, actual)
      // console.log(`actual ==>`, JSON.stringify(actual, null, 2))

      expect(actual).toHaveProperty('publish')
      expect(actual).toHaveProperty('command')
      expect(actual).toHaveProperty('functions')
      expect(actual).toHaveProperty('environment')
      expect(actual).toHaveProperty('environment.GITHUB_TOKEN')
      expect(actual).toHaveProperty('environment.TWITTER_CONSUMER_KEY')
      expect(actual).toHaveProperty('environment.TWITTER_CONSUMER_SECRET')
      expect(actual).toHaveProperty('environment.TWITTER_ACCESS_TOKEN_KEY')
      expect(actual).toHaveProperty('environment.TWITTER_ACCESS_TOKEN_SECRET')
      expect(actual).toHaveProperty('environment.TWITTER_BEARER_TOKEN')
      expect(actual).toHaveProperty('processing')
      expect(actual).toHaveProperty('processing.css')
      expect(actual).toHaveProperty('processing.css.bundle')
      expect(actual).toHaveProperty('processing.css.minify')
      expect(actual).toHaveProperty('processing.js')
      expect(actual).toHaveProperty('processing.js.bundle')
      expect(actual).toHaveProperty('processing.js.minify')
      expect(actual).toHaveProperty('processing.images.optimize')
      expect(actual).toHaveProperty('processing.images.compress')
      expect(actual).toHaveProperty('processing.html.pretty_urls')
      expect(actual).toHaveProperty('processing.skip_processing')

      const expected = {
        "base": "/",
        "publish": "/public/",
        "command": "gatsby build",
        "environment": {
          "GITHUB_TOKEN": "secret",
          "TWITTER_CONSUMER_KEY": "secret",
          "TWITTER_CONSUMER_SECRET": "secret",
          "TWITTER_ACCESS_TOKEN_KEY": "secret",
          "TWITTER_ACCESS_TOKEN_SECRET": "secret",
          "TWITTER_BEARER_TOKEN": "secret"
        },
        "functions": "./netlify-functions",
        "processing": {
          "css": {
            "bundle": true,
            "minify": true
          },
          "js": {
            "bundle": true,
            "minify": true
          },
          "images": {
            "optimize": true,
            "compress": false
          },
          "html": {
            "pretty_urls": true
          },
          "skip_processing": true
        }
      }

      expect(actual).toEqual(expected)
    })
  })
})

describe('TOML', () => {
  test('Build', async () => {
    const actual = await convertToToml({ build: buildProcessor(site) });
    // console.log(actual)
    const expected = `[build]
base = "/"
publish = "/public/"
command = "gatsby build"
functions = "./netlify-functions"

[build.environment]
GITHUB_TOKEN = "secret"
TWITTER_CONSUMER_KEY = "secret"
TWITTER_CONSUMER_SECRET = "secret"
TWITTER_ACCESS_TOKEN_KEY = "secret"
TWITTER_ACCESS_TOKEN_SECRET = "secret"
TWITTER_BEARER_TOKEN = "secret"

[build.processing]
skip_processing = true

[build.processing.css]
bundle = true
minify = true

[build.processing.js]
bundle = true
minify = true

[build.processing.images]
optimize = true
compress = false

[build.processing.html]
pretty_urls = true`

    expect(actual).toBe(expected)
  })

  /**
   * Site created from Netlify Drop doesn't contain build settings by default.
   * https://app.netlify.com/drop
   * 
   * Just create an empty `[build]` without any content underneath.
   */
  test('Site without build using Netlify Drop', async () => {
    const actual = await convertToToml({ build: buildProcessor(siteWithoutBuild) });
    // console.log(actual)
    const expected = `[build.processing]
skip_processing = true

[build.processing.css]
bundle = true
minify = true

[build.processing.js]
bundle = true
minify = true

[build.processing.images]
optimize = true
compress = false

[build.processing.html]
pretty_urls = true`

    expect(actual).toBe(expected)
  })
})