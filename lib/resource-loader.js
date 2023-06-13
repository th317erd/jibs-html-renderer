const cacheMap          = new Map();
const resourceResolvers = new Set();
const resourceHandlers  = new Set();

export function addResourceResolver(callback) {
  resourceResolvers.add(callback);
}

export function removeResourceResolver(callback) {
  resourceResolvers.delete(callback);
}

export function addResourceHandler(test, callback) {
  let resourceObj = { test, callback };
  resourceHandlers.add(resourceObj);

  return resourceObj;
}

export function removeResourceHandler(resourceObj) {
  resourceHandlers.delete(resourceObj);
}

export function resolveResourcePath(resourcePath) {
  let currentPath = resourcePath;

  for (let resolver of resourceResolvers)
    currentPath = resolver(currentPath);

  return currentPath;
}

export function javascriptHandler(resourcePath) {
  // eslint-disable-next-line no-eval
  return eval(`(import('${resourcePath.replace(/'/g, '\\\'')}')).then((resource) => (resource.default || resource))`);
}

export function cssHandler(resourcePath, { media = 'screen' }) {
  return new Promise((resolve, reject) => {
    let linkTag = document.createElement('link');

    linkTag.onload = () => resolve(linkTag);
    linkTag.onerror = (error) => reject(error);

    linkTag.setAttribute('rel', 'stylesheet');
    linkTag.setAttribute('type', 'text/css');
    linkTag.setAttribute('media', media);
    linkTag.setAttribute('href', resourcePath);
    document.head.appendChild(linkTag);
  });
}

function handleResource(resourcePath, _options) {
  let options = _options || {};

  for (let handler of resourceHandlers) {
    let { test, callback } = handler;
    if (!test(resourcePath, options))
      continue;

    let result = callback(resourcePath, options);
    if (result)
      return result;
  }

  throw new Error(`jibs-html-renderer:load: Unknown resource "${resourcePath}". I don't know how to handle this resource type. Please add a resource handler to manage this resource type.`);
}

function load(_resourcePath, _options) {
  let options   = _options || {};
  let cacheName = options.cache;
  if (cacheName && cacheMap.has(cacheName))
    return cacheMap.get(cacheName);

  let resourcePath  = resolveResourcePath(_resourcePath);
  let cache         = cacheMap.get(resourcePath);

  if (cache)
    return cache;

  let promise = handleResource(resourcePath, options);

  // Set promise as cache so
  // all promises from multiple
  // load requests are consistent
  cacheMap.set(resourcePath, promise);
  if (cacheName)
    cacheMap.set(cacheName, promise);

  return promise;
}

Object.defineProperties(load, {
  addResolver: {
    writable:     true,
    enumerable:   false,
    configurable: true,
    value:        addResourceResolver,
  },
  removeResolver: {
    writable:     true,
    enumerable:   false,
    configurable: true,
    value:        removeResourceResolver,
  },
  resolve: {
    writable:     true,
    enumerable:   false,
    configurable: true,
    value:        resolveResourcePath,
  },
  javascriptHandler: {
    writable:     true,
    enumerable:   false,
    configurable: true,
    value:        javascriptHandler,
  },
  cssHandler: {
    writable:     true,
    enumerable:   false,
    configurable: true,
    value:        cssHandler,
  },
  _setResourceCache: {
    writable:     true,
    enumerable:   false,
    configurable: true,
    value:        (_resourcePath, resource) => {
      let resourcePath = resolveResourcePath(_resourcePath);
      cacheMap.set(resourcePath, resource);

      return resource;
    },
  },
});

addResourceHandler((resourcePath, options) => {
  if (options.type === 'javascript')
    return true;

  return (/\.[mc]?js$/i).test(resourcePath);
}, javascriptHandler);

addResourceHandler((resourcePath, options) => {
  if (options.type === 'css')
    return true;

  return (/\.css$/i).test(resourcePath);
}, cssHandler);

// 'https://cdn.jsdelivr.net/npm/jibs-html-renderer@1.1.0/dist/index.js'
addResourceResolver((resourcePath) => {
  if ((/^npm:\/\//i).test(resourcePath)) {
    let resourceID = resourcePath.replace(/^npm:\/\//i, '');
    return `https://cdn.jsdelivr.net/npm/${resourceID}/dist/index.js`;
  }

  return resourcePath;
});

export {
  load,
};
