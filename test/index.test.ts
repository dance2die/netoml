import Auth from '../src/auth'
import Netoml from '../src'

describe('Authentication', () => {
  test('user is logged in', () => {
    expect(Auth.isLoggedIn).toBe(true)
  });
});

// const site = {
//   "id": "1810f4ce-e66d-49d4-9053-9e42e636aec2",
//   "site_id": "1810f4ce-e66d-49d4-9053-9e42e636aec2",
//   "plan": "nf_team_dev",
//   "plan_data": {
//     "title": "Netlify Team Free",
//     "asset_acceleration": true,
//     "form_processing": true,
//     "cdn_propagation": "partial",
//     "build_gc_exchange": "buildbot-gc",
//     "build_node_pool": "buildbot-external-ssd",
//     "build_cluster": "buildbot-3",
//     "domain_aliases": true,
//     "secure_site": false,
//     "prerendering": true,
//     "proxying": true,
//     "ssl": "custom",
//     "rate_cents": 0,
//     "yearly_rate_cents": 0,
//     "cdn_network": "free_cdn_network",
//     "ipv6_domain": "cdn.makerloop.com",
//     "branch_deploy": true,
//     "managed_dns": true,
//     "geo_ip": true,
//     "split_testing": true,
//     "id": "nf_team_dev"
//   },
//   "ssl_plan": null,
//   "premium": false,
//   "claimed": true,
//   "name": "reactblocks",
//   "custom_domain": null,
//   "domain_aliases": [],
//   "password": null,
//   "notification_email": null,
//   "url": "http://reactblocks.netlify.com",
//   "admin_url": "https://app.netlify.com/sites/reactblocks",
//   "deploy_id": "5d65d0ae341fce0007ec29b3",
//   "build_id": "",
//   "deploy_url": "http://master.reactblocks.netlify.com",
//   "state": "current",
//   "screenshot_url": "https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d65d0ae341fce0007ec29b3/screenshot.png",
//   "created_at": "2019-08-01T00:30:59.890Z",
//   "updated_at": "2019-08-28T01:19:02.107Z",
//   "user_id": "5a273aeda114773ce21d7dc0",
//   "error_message": null,
//   "ssl": false,
//   "ssl_url": "https://reactblocks.netlify.com",
//   "force_ssl": null,
//   "ssl_status": null,
//   "max_domain_aliases": 100,
//   "build_settings": {
//     "cmd": "gatsby build",
//     "dir": "public/",
//     "env": {
//       "GITHUB_TOKEN": "secret",
//       "TWITTER_CONSUMER_KEY": "secret",
//       "TWITTER_CONSUMER_SECRET": "secret",
//       "TWITTER_ACCESS_TOKEN_KEY": "secret",
//       "TWITTER_ACCESS_TOKEN_SECRET": "secret",
//       "TWITTER_BEARER_TOKEN": "secret"
//     },
//     "created_at": "2019-08-01T00:30:59.934Z",
//     "updated_at": "2019-08-01T03:58:38.722Z",
//     "public_repo": false,
//     "private_logs": null,
//     "allowed_branches": ["master"],
//     "functions_dir": null,
//     "installation_id": 417909,
//     "skip_prs": null,
//     "review_untrusted_builds": null,
//     "provider": "github",
//     "repo_type": "git",
//     "repo_url": "https://github.com/dance2die/react-blocks",
//     "repo_branch": "master",
//     "repo_path": "dance2die/react-blocks",
//     "base": null,
//     "deploy_key_id": null
//   },
//   "processing_settings": {
//     "css": {
//       "bundle": true,
//       "minify": true
//     },
//     "js": {
//       "bundle": true,
//       "minify": true
//     },
//     "images": {
//       "optimize": true
//     },
//     "html": {
//       "pretty_urls": true
//     },
//     "skip": true
//   },
//   "prerender": null,
//   "prerender_headers": null,
//   "deploy_hook": "https://api.netlify.com/hooks/github",
//   "published_deploy": {
//     "id": "5d65d0ae341fce0007ec29b3",
//     "site_id": "1810f4ce-e66d-49d4-9053-9e42e636aec2",
//     "build_id": "5d65d0ae341fce0007ec29b4",
//     "state": "ready",
//     "name": "reactblocks",
//     "url": "http://reactblocks.netlify.com",
//     "ssl_url": "https://reactblocks.netlify.com",
//     "admin_url": "https://app.netlify.com/sites/reactblocks",
//     "deploy_url": "http://master.reactblocks.netlify.com",
//     "deploy_ssl_url": "https://master--reactblocks.netlify.com",
//     "created_at": "2019-08-28T00:54:06.629Z",
//     "updated_at": "2019-08-28T01:19:01.954Z",
//     "user_id": "5a273aeda114773ce21d7dc0",
//     "error_message": null,
//     "required": [],
//     "required_functions": [],
//     "commit_ref": "5099098ae103f9506214663ce5f472a4c4ce02a6",
//     "review_id": null,
//     "branch": "master",
//     "commit_url": "https://github.com/dance2die/react-blocks/commit/5099098ae103f9506214663ce5f472a4c4ce02a6",
//     "skipped": null,
//     "locked": null,
//     "log_access_attributes": {
//       "type": "firebase",
//       "url": "https://netlify-builds3.firebaseio.com/builds/5d65d0ae341fce0007ec29b4/log",
//       "endpoint": "https://netlify-builds3.firebaseio.com",
//       "path": "/builds/5d65d0ae341fce0007ec29b4/log",
//       "token": "tdzrkqHD5fgw8tGRytePPiRpzfNivfSRx08xHYKm"
//     },
//     "title": "Fixed card action background color",
//     "review_url": null,
//     "published_at": "2019-08-28T00:56:17.331Z",
//     "context": "production",
//     "deploy_time": 67,
//     "available_functions": [],
//     "summary": {
//       "status": "ready",
//       "messages": [
//         {
//           "type": "info",
//           "title": "15 new files uploaded",
//           "description": "1 generated page and 14 assets changed.",
//           "details": "New pages include:\n- index.html\n"
//         },
//         {
//           "type": "info",
//           "title": "No redirect rules processed",
//           "description": "This deploy did not include any redirect rules. [Learn more about redirects](https://www.netlify.com/docs/redirects/).",
//           "details": ""
//         },
//         {
//           "type": "info",
//           "title": "No header rules processed",
//           "description": "This deploy did not include any header rules. [Learn more about headers](https://www.netlify.com/docs/headers-and-basic-auth/).",
//           "details": ""
//         },
//         {
//           "type": "info",
//           "title": "All linked resources are secure",
//           "description": "Congratulations! No insecure mixed content found in your files.",
//           "details": null
//         }
//       ]
//     },
//     "screenshot_url": "https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d65d0ae341fce0007ec29b3/screenshot.png",
//     "site_capabilities": {
//       "title": "Netlify Team Free",
//       "asset_acceleration": true,
//       "form_processing": true,
//       "cdn_propagation": "partial",
//       "build_gc_exchange": "buildbot-gc",
//       "build_node_pool": "buildbot-external-ssd",
//       "build_cluster": "buildbot-3",
//       "domain_aliases": true,
//       "secure_site": false,
//       "prerendering": true,
//       "proxying": true,
//       "ssl": "custom",
//       "rate_cents": 0,
//       "yearly_rate_cents": 0,
//       "cdn_network": "free_cdn_network",
//       "ipv6_domain": "cdn.makerloop.com",
//       "branch_deploy": true,
//       "managed_dns": true,
//       "geo_ip": true,
//       "split_testing": true,
//       "id": "nf_team_dev"
//     },
//     "committer": "dance2die",
//     "skipped_log": null
//   },
//   "managed_dns": true,
//   "jwt_secret": null,
//   "jwt_roles_path": "app_metadata.authorization.roles",
//   "account_slug": "dance2die",
//   "account_name": "Sung Kim's team",
//   "account_type": "Starter",
//   "capabilities": {
//     "title": "Netlify Team Free",
//     "asset_acceleration": true,
//     "form_processing": true,
//     "cdn_propagation": "partial",
//     "build_gc_exchange": "buildbot-gc",
//     "build_node_pool": "buildbot-external-ssd",
//     "build_cluster": "buildbot-3",
//     "domain_aliases": true,
//     "secure_site": false,
//     "prerendering": true,
//     "proxying": true,
//     "ssl": "custom",
//     "rate_cents": 0,
//     "yearly_rate_cents": 0,
//     "cdn_network": "free_cdn_network",
//     "ipv6_domain": "cdn.makerloop.com",
//     "branch_deploy": true,
//     "managed_dns": true,
//     "geo_ip": true,
//     "split_testing": true,
//     "id": "nf_team_dev"
//   },
//   "active_subscription_ids": [],
//   "external_contributors_enabled": false,
//   "paid_individual_site_subscription": false,
//   "dns_zone_id": null,
//   "identity_instance_id": null,
//   "use_functions": null,
//   "parent_user_id": null,
//   "automatic_tls_provisioning": null,
//   "disabled": null,
//   "lifecycle_state": "active",
//   "id_domain": "1810f4ce-e66d-49d4-9053-9e42e636aec2.netlify.com",
//   "use_lm": null,
//   "build_image": "xenial",
//   "automatic_tls_provisioning_expired": false,
//   "analytics_instance_id": null
// }

describe('JSON', () => {
  describe('Edge cases', () => {
    it('throws error if not authenticated', () => {
      // @todo: aaaarg. I don't know how to mock and Typescript is getting in the way...
      // const mock: { isLoggedIn: boolean } = jest.fn<{ isLoggedIn: boolean }, { isLoggedIn: boolean }[]>()
      // mock.isLoggedIn = false;

      // expect(!Netoml.isLoggedIn).toThrowError();
    })
  })

  describe('Build', () => {
    it('renders Build configuration correctly', async () => {
      // const expected = {
      //   build: {
      //     base: "/",
      //     publish: "public/",
      //     command: "gatsby build",
      //     environment: {
      //       GITHUB_TOKEN: "aaa",
      //       TWITTER_CONSUMER_KEY: "aaa",
      //       TWITTER_CONSUMER_SECRET: "aaa",
      //       TWITTER_ACCESS_TOKEN_KEY: "aaa",
      //       TWITTER_ACCESS_TOKEN_SECRET: "aaa",
      //       TWITTER_BEARER_TOKEN: "aaa",
      //     },
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
      //         optimize: true,
      //         compress: true,
      //       },
      //       html: {
      //         pretty_urls: true
      //       },
      //       skip_processing: true
      //     }
      //   }
      // };

      const actual = await Netoml.toJson({ name: 'reactblocks' })
      // console.log(`actual ==>`, actual)
      // expect(actual).toMatchObject(expected);

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


// describe('toToml', () => {
//   test('Happy path', () => {
//     // console.log(Netoml.toToml(data))
//     expect(Netoml.toToml(data)).toBe(toml)
//   })
//   xtest('', () => { })
//   xtest('', () => { })
// })