```yaml
title: Configuration of Iconify Icon Finder Core
classes:
  IconFinderCore: ./core.md
  Registry: ./registry.md
  Router: ./router.md
```

# Configuration of Iconify Icon Finder Core

This tutorial is part of [Iconify Icon Finder Core tutorial](./index.md).

This tutorial lists configuration options for Icon Finder Core.

For default configuration values look in `[file]src/data/config.ts` of Icon Finder Core package.

## Changing configuration

If you want to change the configuration, you should do it when initialising instance.

If you are using `[class]IconFinderCore`, pass custom configuration as `[prop]config` property of first parameter to constructor:

```js
const { IconFinderCore } = require('@iconify/search-core');

const core = new IconFinderCore({
	config: {
		ui: {
			itemsPerPage: 32,
			viewUpdateDelay: 0,
		},
	},
	// Other parameters here
	// ...
	callback: (data, core) => {
		// Render callback where all stuff happens
	},
});
```

If you are using `[class]Registry`, change configuration synchronously immediately after creating registry:

```js
const { Registry } = require('@iconify/search-core/lib/registry');

// Create registry, get configuration and change it
const registry = new Registry();
const config = registry.config;
config.set({
	ui: {
		itemsPerPage: 32,
		viewUpdateDelay: 0,
	},
});

// Do other stuff
```

You can set only values that are modified. Values will be merged with the default configuration.

Important: make sure types are the same as in default configuration, otherwise things might break!

## Getting customised configuration

Sometimes UI needs to retrieve configuration values that were customised, so it could store it in some storage for next time.

This is possible only when using Registry class:

```js
const config = registry.config;
const customised = config.customised();
// Serialise (use JSON.stringify()) and store customised somewhere.
```

## Configuration sections

There are several types of configuration, split into different sections:

- `[prop]ui`: configuration rendering data.
- `[prop]router`: `[class]Router` configuration.

The detailed explanation of each configuration variable is available in `[file]src/data/config.ts`. Because configuration uses custom TypeScript interfaces instead of generic objects, VSCode should show you all available properties when you type.

### UI config

UI config is responsible for stuff used in UI, such as number of icons displayed per page.

### Router config

Router config has only one property: home route.

For more information about routes, see [routes documentation](./routes.md).
