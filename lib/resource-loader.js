const cacheMap          = new Map();
const resourceResolvers = new Set();
const resourceHandlers  = new Set();

export function addResourceResolver(callback) {
  resourceResolvers.add(callback);
}

export function removeResourceResolver(callback) {
  resourceResolvers.delete(callback);
}

export function addResourceHandler(callback) {
  resourceHandlers.add(callback);
}

export function removeResourceHandler(callback) {
  resourceHandlers.delete(callback);
}

export function resolveResourcePath(resourcePath) {
  let currentPath = resourcePath;

  for (let resolver of resourceResolvers)
    currentPath = resolver(currentPath);

  return currentPath;
}

export function javascriptHandler(resourcePath) {
  if (!(/\.[mc]?js$/i).test(resourcePath))
    return;

  // eslint-disable-next-line no-eval
  return eval(`(import('${resourcePath.replace(/'/g, '\\\'')}'))`);
}

export function cssHandler(resourcePath) {
  if (!(/\.css$/i).test(resourcePath))
    return;

  return new Promise((resolve, reject) => {
    fetch(resourcePath, {
      method:       'GET',
      mode:         'cors',
      credentials:  'same-origin',
    }).then(async (response) => {
      let content = await response.text();
      let styleTag = document.createElement('style');
      styleTag.innerHTML = content;
      document.head.appendChild(styleTag);
      resolve(styleTag);
    }).catch(reject);
  });
}

function handleResource(resourcePath) {
  for (let handler of resourceHandlers) {
    let result = handler(resourcePath);
    if (result)
      return result;
  }

  throw new Error(`jibs-html-renderer:load: Unknown resource "${resourcePath}". I don't know how to handle this resource type. Please add a resource handler to manage this resource type.`);
}

function load(_resourcePath) {
  let resourcePath  = resolveResourcePath(_resourcePath);
  let cache         = cacheMap.get(resourcePath);

  if (cache)
    return cache;

  let promise = handleResource(resourcePath).then((_resource) => {
    let resource = _resource;
    if (resource && resource.default)
      resource = resource.default;

    cacheMap.set(resourcePath, resource);

    return resource;
  });

  // Set promise as cache so
  // all promises from multiple
  // load requests are consistent
  cacheMap.set(resourcePath, promise);

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
});

addResourceHandler(javascriptHandler);
addResourceHandler(cssHandler);

export {
  load,
};
