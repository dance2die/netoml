import Auth from '../src/auth'
// import Netoml from '../src'

describe('Authentication', () => {
    test('user is logged in', () => {
        expect(Auth.isLoggedIn).toBe(true)
    });
});

// const data: object = {
//   // "build_settings"
//   build: {
//     // "base"
//     base: "/",
//     // "dir"
//     publish: "public/",
//     // "cmd"
//     command: "gatsby build",
//     environment: {
//       GITHUB_TOKEN: "github token",
//       TWITTER_CONSUMER_KEY: "twitter consumer key",
//       TWITTER_CONSUMER_SECRET: "twitter consumer secret",
//       TWITTER_ACCESS_TOKEN_KEY: "twitter access tokeh key",
//       TWITTER_ACCESS_TOKEN_SECRET: "twitter access token secret",
//       TWITTER_BEARER_TOKEN: "twitter bearer token"
//     },
//     // "processing_settings"
//     processing: {
//       css: {
//         bundle: false,
//         minify: true
//       },
//       js: {
//         bundle: true,
//         minify: true
//       },
//       images: {
//         optimize: true
//       },
//       html: {
//         pretty_urls: true
//       },
//       skip_processing: true
//     }
//   }
// };

// const toml = `[build]
// base = "/"
// publish = "public/"
// command = "gatsby build"

// [build.environment]
// GITHUB_TOKEN = "github token"
// TWITTER_CONSUMER_KEY = "twitter consumer key"
// TWITTER_CONSUMER_SECRET = "twitter consumer secret"
// TWITTER_ACCESS_TOKEN_KEY = "twitter access tokeh key"
// TWITTER_ACCESS_TOKEN_SECRET = "twitter access token secret"
// TWITTER_BEARER_TOKEN = "twitter bearer token"

// [build.processing]
// skip_processing = true

// [build.processing.css]
// bundle = false
// minify = true

// [build.processing.js]
// bundle = true
// minify = true

// [build.processing.images]
// optimize = true

// [build.processing.html]
// pretty_urls = true

// `

// describe('toToml', () => {
//   test('Happy path', () => {
//     // console.log(Netoml.toToml(data))
//     expect(Netoml.toToml(data)).toBe(toml)
//   })
//   xtest('', () => { })
//   xtest('', () => { })
// })