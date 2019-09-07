import { Build } from '../types/index'

export default (site: any): Build => {
  const { build_settings, processing_settings } = site;

  const base = build_settings.base || null;
  const publish = build_settings.dir || null;
  const command = build_settings.cmd || null;
  const environment = build_settings.env || null;
  const functions = build_settings.functions_dir || null;

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
    base,
    publish,
    command,
    environment,
    functions,
    processing
  }
}
