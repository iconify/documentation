```yaml
title: Using Icon Finder with Node.js
classes:
  IconFinderCore: ./core.md
  Registry: ./registry.md
  Router: ./router.md
types:
  Icon: ./types.md#icon
  IconsList: ./types.md#icons-list
```

# Using Icon Finder with Node.js

This tutorial is part of [Iconify Icon Finder Core tutorial](./index.md).

If you want to work with Icon Finder Core in Node.js, you need to enable API module.

## Why is it disabled? {#disabled}

API module for Node.js is disabled by default. This is because it requires a lot of useless dependencies that over 90% of projects based on Icon Finder Core will never need.

Because of that, using Icon Finder Core with Node.js requires few additional steps to set up.

## Usage

Steps:

1. Add the following dependencies: `[npm]axios`, `[npm]@cyberalien/redundancy`, `[npm]@iconify/search-core`.
2. Copy `[file]src-deprecated/api/axios.ts` to your project.
3. Transpile it from TypeScript to JavaScript.
4. Set it as module.

To set it as module, you need to get instance of `[class]Registry`. See [Icon Finder Core documentation](./index.md) on details. Then all you need to do is assign `[class]API` exported from API module (from `[file]src-deprecated/api/axios.ts`) to `[var]registry.api`:

```js
registry.api = API;
```

## Custom module

If you want to use different method of fetching data from API instead of using Axios, you can easily do that by creating custom API module.

API module extends class `[class]BaseAPI` and should implement only 1 function: `[func]_query()` that sends API query, stores response and caches data.

See API examples in `[file]src/api/fetch.ts` and `[file]src-deprecated/api/axios.ts`. Copy code from one of those modules, change it to use your preferred method of fetching data.

Assign your API class to `[prop]registry.api` before any API queries are sent to use it in Icon Finder Core.
