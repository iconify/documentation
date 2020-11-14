```yaml
title: 'Iconify Icon Finder Components: Wrapper'
classes:
  Wrapper: ./wrapper.md
  Registry: ../core/registry.md
  Router: ../core/router.md
types:
  IconFinderEvent: ./callback.md#event
  IconFinderState: ./types.md#icon-finder-state
  PartialIconCustomisations: ./types.md#icon-customisations
  Icon: ../core/types.md#icon
  PartialRoute: ../core/types.md#route
  IconFinderCustomSets: ./wrapper.md#icon-finder-custom-sets
  IconifyJSON: ../../../types/iconify-json.md
functions:
  getState: ./wrapper.md#get-state
  getStatus: ./wrapper.md#get-status
  show: ./wrapper.md#show-hide
  hide: ./wrapper.md#show-hide
  destroy: ./wrapper.md#destroy
  setRoute: ./wrapper.md#set-route
  selectIcon: ./wrapper.md#select-icon
  setCustomisations: ./wrapper.md#set-customisations
```

# Wrapper class

This tutorial is part of [Svelte Components for Iconify Icon Finder tutorial](./index.md).

`[class]Wrapper` is the main class that creates Icon Finder Core instance, renders container component, manages state and parameters.

It uses callback to notify implementation of any changes (such as new icon was selected or button was clicked) and has several functions that can be used to control Icon Finder instance.

You can import `[class]Wrapper` class from `[file]src/icon-finder/wrapper.ts`.

Look in `[file]src/icon-finder/index.ts` for example:

```js
import { Wrapper } from './wrapper';

const container = document.getElementById('container');
if (container) {
	const wrapper = new Wrapper({
		container,
		callback: (event) => {
			console.log('Event:', event);
		},
	});
}
```

Constructor for `[class]Wrapper` has only one parameter: object `[type]IconFinderWrapperParams` that has the following mandatory properties:

- `[prop]container`, `[type]HTMLElement`. Container element where Icon Finder instance should be rendered.
- `[prop]callback`, `[type]IconFinderEvent`. Callback function that will be called whenever something happens.

Then there are several optional properties:

- `[prop]iconSets`, `[type]IconFinderCustomSets | IconifyJSON[]`. Custom icon sets.
- `[prop]state`, `[type]IconFinderState`. Current state. This can be used to restore state from previous instance.

## Callback

Callback is used to notify you on various events.

For more details see [callback documentation](./callback.md).

## Custom sets

You can use `[prop]iconSets` property to display your custom icons. It can be used to display one or more icon sets. Icon sets can be merged with icon sets retrieved from API or you can choose to display only your icon sets.

Value can be either array of icon sets in `[type]IconifyJSON` format. It can also be `[type]IconFinderCustomSets` object, which also contains array of icon sets in `[type]IconifyJSON` format, but has few extra properties.

Example:

```ts
import { Wrapper } from './wrapper';
import type { IconFinderEvent } from './wrapper/events';

// Create instance
const wrapper = new Wrapper({
	container: document.getElementById('icon-finder'),
	callback: (event: IconFinderEvent) => {
		console.log('Event:', event);
	},
	iconSets: [
		{
			prefix: 'test',
			info: {
				name: 'Test',
			},
			icons: {
				// List of icons here
			},
		},
	],
});
```

### IconFinderCustomSets type {#icon-finder-custom-sets}

Type `[type]IconFinderCustomSets` has the following properties:

- `[prop]iconSets`, `[type]IconifyJSON[]`. Array of icon sets.
- `[prop]info`, `[type]Record<string, IconifyInfo>`. Metadata for icon sets. If icon set already has metadata, this will override data from icon set.
- `[prop]provider`, `[type]string`. API provider. If set, all icon sets in `[prop]iconSets` will be treated as if they belong to that API provider.
- `[prop]merge`, `[type]string`. Merge method:
  - `[str]only-custom`: Icon Finder will display only custom icon sets.
  - `[str]custom-first`: Icon Finder will display both custom icon sets and icon sets from Iconify API. Custom sets will be listed first.
  - `[str]custom-last`: Icon Finder will display both custom icon sets and icon sets from Iconify API. Custom sets will be listed last.

When displaying both custom and default icon sets, when searching all icon sets, Icon Finder will display results only from default icon sets. Search for custom icon sets will work only when browsing that icon set.

Example above using `[type]IconFinderCustomSets`:

```ts
import { Wrapper } from './wrapper';
import type { IconFinderEvent } from './wrapper/events';

// Create instance
const wrapper = new Wrapper({
	container: document.getElementById('icon-finder'),
	callback: (event: IconFinderEvent) => {
		console.log('Event:', event);
	},
	iconSets: {
		iconSets: [
			{
				prefix: 'test',
				info: {
					name: 'Test',
				},
				icons: {
					// List of icons here
				},
			},
		],
		merge: 'only-custom',
	},
});
```

### Info property

Icon sets must have `[prop]info` property with icon set name. If missing, Icon Finder will not display that icon set.

If your JSON data does not have `[prop]info` property, you must use `[type]IconFinderCustomSets` object and must include information for icon set in `[type]IconFinderCustomSets`'s `[prop]info` property.

Example:

```ts
import { Wrapper } from './wrapper';
import type { IconFinderEvent } from './wrapper/events';

// Create instance
const wrapper = new Wrapper({
	container: document.getElementById('icon-finder'),
	callback: (event: IconFinderEvent) => {
		console.log('Event:', event);
	},
	iconSets: {
		// Icon sets without metadata
		iconSets: [
			{
				prefix: 'test',
				icons: {
					// List of icons here
				},
			},
		],
		// Missing metadata for icon sets
		info: {
			// Info for 'test' icon set
			test: {
				title: 'Test',
			},
		},
	},
});
```

### Examples

For usage example, take a look at [Material Line Icons website](https://cyberalien.github.io/line-md/). It uses Icon Finder with `[prop]iconSets` property to display only custom icon set. See [`[file]src/icon-finder/index.ts` of Material Line Icons repository](https://github.com/cyberalien/line-md/blob/master/src/icon-finder/index.ts).

## Restoring state

State is provided as property in `[str]button` event, triggered when button in footer has been clicked. See [callback documentation](./callback.md) for details. You can also retrieve current state using wrapper's `[func]getState()` function.

You can save that state in application's memory or in cookies and use `[prop]state` property of `[class]Wrapper` constructor to restore state.

```ts
import { Wrapper } from './wrapper';
import type { IconFinderEvent } from './wrapper/events';
import type { IconFinderState } from './wrapper/state';

// Get last saved state
let lastSavedState: Partial<IconFinderState>;
if (/* some condition that checks if state is saved */) {
  // Retrieve state from somewhere
  // lastSavedState =
}

// Create instance
const wrapper = new Wrapper({
	container: document.getElementById('icon-finder'),
	callback: (event: IconFinderEvent) => {
		console.log('Event:', event);
	},
	state: lastSavedState,
});
```

You can also use it to set initial page:

```ts
import { Wrapper } from './wrapper';
import type { IconFinderEvent } from './wrapper/events';

// Create instance
const wrapper = new Wrapper({
	container: document.getElementById('icon-finder'),
	callback: (event: IconFinderEvent) => {
		console.log('Event:', event);
	},
	state: {
		// Set Material Design Icons as home route
		config: {
			router: {
				// Option value is a JSON string, so stringify route
				home: JSON.stringify({
					type: 'collection',
					params: {
						prefix: 'mdi',
					},
				}),
			},
		},
	},
});
```

## Hide and show {#show-hide}

You can show and hide UI using functions `[func]show()` and `[func]hide()` of wrapper instance.

```js
const wrapper = new Wrapper({
	// ...
});

wrapper.hide();
```

## Get state {#get-state}

Function `[func]getState()` returns current state in `[type]IconFinderState` format.

See [`[type]IconFinderState` documentation](./types.md#icon-finder-state).

```js
const wrapper = new Wrapper({
	// ...
});

const state = wrapper.getState();
```

## Get status {#get-status}

Function `[func]getStatus()` returns status of Icon Finder instance as string. Possible values:

- `[str]` (empty string): default status.
- `[str]loading`: instance is loading.
- `[str]hidden`: instance is hidden.
- `[str]destroyed`: instance has been destroyed.

## Destroy

Function `[func]destroy()` destroys instance. All data stored in memory gets destroyed. Use this function if your UI no longer needs Icon Finder instance.

```js
const wrapper = new Wrapper({
	// ...
});

// Destroy instance
wrapper.destroy();
```

## setRoute {#set-route}

This function changes current route.

This function should not be used to set initial route. You should set initial route using constructor's `[prop]state.route` property. This function should be used to change route after some action, for example a button has been clicked.

```js
const wrapper = new Wrapper({
	// ...
});

// Navigate to an icon set
wrapper.setRoute({
	type: 'collection',
	params: {
		prefix: 'mdi',
	},
	parent: {
		type: 'collections',
	},
});
```

You can retrieve current route as part of state using `[func]getState()`.

## selectIcons {#select-icon}

This function changes currently selected icon(s).

Value must be an array of icons as `[type]Icon` or `[type]string`.

```js
const wrapper = new Wrapper({
	// ...
});

// Select "mdi:home"
wrapper.selectIcons(['mdi:home']);
```

This function will trigger callback, so make sure you are not calling it in response to `[str]selection` event or you might trigger an infinite loop.

If you try to select multiple icons, but option to select multiple icons is not enabled, only last icon will be selected.

You can retrieve currently selected icon(s) as part of state using `[func]getState()`.

## setCustomisations {#set-customisations}

This function changes current icon customisations, such as color, dimensions, transformations.

```js
const wrapper = new Wrapper({
	// ...
});

// Rotate currently selected icon by 90 degrees
wrapper.setCustomisations({
	rotate: 1,
});
```

You can retrieve list of active icon customisations as part of state using `[func]getState()`.
