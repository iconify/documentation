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

By default, Icon Finder relies on global `[func]fetch()` function. Node.js doesn't have built-in support for Fetch API, so external module is required.

Because of that, using Icon Finder Core with Node.js requires few additional steps to set up.

## Fetch API for Node.js {#fetch-api}

Icon Finder uses `[npm]cross-fetch` library to provide support for Fetch API in Node.js.

To set it as module, you need to get instance of `[class]Registry`. See [Icon Finder Core documentation](./index.md) on details. Then all you need to do is assign `[class]API` exported from API module (from `[file]lib/api/cross-fetch.js`) to `[var]registry.api`:

```js
const { IconFinderCore } = require('@iconify/search-core');
const { API } = require('@iconify/search-core/lib/api/cross-fetch');

const core = new IconFinderCore({
	// Parameters here
	// ...
	callback: (data, core) => {
		// Main callback where all stuff happens
	},
});

// Get Registry instance and assign API to registry.api
core.registry.api = API;
```

All API queries are asynchronous, so assigning API right after creating `[class]IconFinderCore` instance will work correctly.

## Axios module {#axios}

If you do not like `[npm]cross-fetch`, there is a module for `[npm]axios` available. You can find it in `[file]src-deprecated/api/axios.ts`.

Transpile it from TypeScript to JavaScript, import `[var]API` from it and use it exactly the same way as in example above.

## Custom module

If you want to use different method of fetching data from API instead of using `[npm]cross-fetch` or `[npm]axios`, you can easily do that by creating custom API module.

API module extends class `[class]BaseAPI` and should implement only 1 function: `[func]_query()` that sends API query, stores response and caches data.

See API examples in `[file]src/api/fetch.ts`, `[file]src/api/cross-fetch.ts` and `[file]src-deprecated/api/axios.ts`. Copy code from one of those modules, change it to use your preferred method of fetching data.

Assign your API class to `[prop]registry.api` before any API queries are sent to use it in Icon Finder Core.
