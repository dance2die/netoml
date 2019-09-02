import Auth from '../src/auth'
import Netoml from '../src'

const options = { name: 'reactblocks' }

describe('Authentication', () => {
  test('user is logged in', () => {
    expect(Auth.isLoggedIn).toBe(true)
  });
});

describe('JSON', () => {
  xdescribe('Edge cases', () => {
    it('throws error if not authenticated', () => {
      // @todo: aaaarg. I don't know how to mock and Typescript is getting in the way...
      // const mock: { isLoggedIn: boolean } = jest.fn<{ isLoggedIn: boolean }, { isLoggedIn: boolean }[]>()
      // mock.isLoggedIn = false;

      // expect(!Netoml.isLoggedIn).toThrowError();
    })
  })

  describe('Build', () => {
    it('renders Build configuration correctly', async () => {
      const actual = await Netoml.toJson(options)
      // console.log(`actual ==>`, actual)

      expect(actual).toHaveProperty('build')
      expect(actual).toHaveProperty('build.publish')
      expect(actual).toHaveProperty('build.command')
      expect(actual).toHaveProperty('build.environment')
      expect(actual).toHaveProperty('build.environment.GITHUB_TOKEN')
      expect(actual).toHaveProperty('build.environment.TWITTER_CONSUMER_KEY')
      expect(actual).toHaveProperty('build.environment.TWITTER_CONSUMER_SECRET')
      expect(actual).toHaveProperty('build.environment.TWITTER_ACCESS_TOKEN_KEY')
      expect(actual).toHaveProperty('build.environment.TWITTER_ACCESS_TOKEN_SECRET')
      expect(actual).toHaveProperty('build.environment.TWITTER_BEARER_TOKEN')
      expect(actual).toHaveProperty('build.processing')
      expect(actual).toHaveProperty('build.processing.css')
      expect(actual).toHaveProperty('build.processing.css.bundle')
      expect(actual).toHaveProperty('build.processing.css.minify')
      expect(actual).toHaveProperty('build.processing.js')
      expect(actual).toHaveProperty('build.processing.js.bundle')
      expect(actual).toHaveProperty('build.processing.js.minify')
      expect(actual).toHaveProperty('build.processing.images.optimize')
      expect(actual).toHaveProperty('build.processing.images.compress')
      expect(actual).toHaveProperty('build.processing.html.pretty_urls')
      expect(actual).toHaveProperty('build.processing.skip_processing')
    })
  })
})


// describe('TOML', () => {
//   test('Build', async () => {
//     // console.log(Netoml.toToml(data))
//     const actual = await Netoml.toToml(options)
//     console.log(`TOML actual`, actual)
//   })
//   xtest('', () => { })
//   xtest('', () => { })
// })