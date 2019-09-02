import Auth from '../src/auth'
// import Netoml from '../src'
import buildProcessor from '../src/processors/build'
import { site } from './input'


describe('Authentication', () => {
  test('user is logged in', () => {
    expect(Auth.isLoggedIn).toBe(true)
  });
});


describe('JSON', () => {
  describe('Build', () => {
    it('renders Build configuration correctly', async () => {
      const actual = buildProcessor(site);
      // const actual = await Netoml.toJson(options)
      console.log(`actual ==>`, actual)

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