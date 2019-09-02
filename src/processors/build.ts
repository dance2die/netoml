import { Build } from '../types/index'

export default (site: any): Build => {
  const { build_settings: buildSettings, processing_settings } = site;

  const defaultProcessing = {
    css: {
      bundle: true,
      minify: true
    },
    js: {
      bundle: true,
      minify: true
    },
    images: {
      optimize: true,
      compress: true
    },
    html: {
      pretty_urls: true
    },
    skip_processing: true
  }

  const processing = Object.assign(defaultProcessing, {
    css: {
      bundle: processing_settings.css.bundle,
      minify: processing_settings.css.minify
    },
    js: {
      bundle: processing_settings.js.bundle,
      minify: processing_settings.js.minify
    },
    images: {
      optimize: processing_settings.images.optimize,
      compress: processing_settings.images.compress || false,
    },
    html: {
      pretty_urls: processing_settings.html.pretty_urls
    },
    skip_processing: processing_settings.skip,
  })

  return {
    base: buildSettings.base,
    publish: buildSettings.dir,
    command: buildSettings.cmd,
    environment: buildSettings.env,
    functions: buildSettings.functions_dir,
    processing
  }
}
