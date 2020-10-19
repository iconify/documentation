```yaml
title: 'Iconify Icon Finder Package: Core'
classes:
  IconFinderCore: ./core.md
  Registry: ./registry.md
  Router: ./router.md
types:
  PartialRoute: ./routes.md
```

# Iconify Icon Finder package: Core

This tutorial is part of [Iconify Icon Finder packages tutorial](../index.md).

Icon Finder Core is doing all the heavy stuff. It takes route object, retrieves data from API, filters data and returns simple objects that can be displayed by UI without any additional steps.

Everything is asynchronous. Icon Finder Core uses events to react to requests.

Code is written in TypeScript to provide types for all data, so editors such as VSCode will give you types and object keys for data provided by core.

## Requirements

This documentation is very technical. To understand this tutorial you need:

- Good JavaScript knowledge, including browser and Node.js.
- Good TypeScript knowledge. Core is entirely written in TypeScript.
- Understanding of asynchronous development.

## Building

To build Icon Finder Core, navigate to `[file]packages/core` of [GitHub repository](https://github.com/iconify/icon-finder), install dependencies and run `[bash]npm run build`.

To run unit tests, run `[bash]npm run test`.

## How does it work

All you need to do is create `[class]IconFinderCore` instance and provide the callback among other parameters.

All communication from `[class]IconFinderCore` to UI is done via callback. When new set of data is ready to be rendered, Core will prepare that data for rendering and call the callback. If there is an error or a loading screen (caused by API delay or internet connection problems), core will call the callback.

In the callback you should render data provided as callback parameter. See [render event callback](./render.md).

To change something, for example, a page, you can do one of two things:

1. Apply action using `[func]action` function. Icon Finder Core will apply that change to the current route, retrieve data (if needed), filter data and call your callback with updated data.
2. Change route by writing to `[prop]partialRoute` property of the router. You can access `[class]Router` instance using `[prop]router` property.

```js
// Change page
core.action('pagination', 1); // Second page. First page is 0.
```

```js
// Change route to MDI
core.router.partialRoute = {
	// Collection route, prefix is set in params object.
	type: 'collection',
	params: {
		prefix: 'mdi',
	},
	// Collections list as the parent route.
	// If not set, UI will not have link to return to collections list.
	parent: {
		type: 'collections',
	},
};
```

## IconFinderCore and Registry

There are two ways to work with Icon Finder Core: using `[class]IconFinderCore` class and using `[class]Registry`.

`[class]IconFinderCore` class is accessed by importing `[prop]IconFinderCore` from package's main file:

```js
const { IconFinderCore } = require('@iconify/search-core');

const core = new IconFinderCore({
	// Parameters here
	// ...
	callback: (data, core) => {
		// Main callback where all stuff happens
	},
});
```

`[class]Registry` class gives full access to all internal stuff. You can also access it from `[class]IconFinderCore` instance by accessing `[func]registry` property.

To create a `[class]Registry` instance, import `[prop]Registry` class from `[file]lib/registry` and create new instance:

```js
const { Registry } = require('@iconify/search-core/lib/registry');

// Create registry, get router and events
const registry = new Registry();
const router = registry.router;
const events = registry.events;

// Subscribe to render event, same as using callback in IconFinderCore example above
events.subscribe('render', (data) => {
	// Same as callback in example above.
});

// Navigate to home
router.home();
```

For more examples of code, see `[class]IconFinderCore` class or `[class]Registry` class.

## Routes

Every request and response has a route associated with it. `[type]PartialRoute` is a simple object describing the current view.

For description of routes see [routes documentation](./routes.md).

## Views

View is script's internal presentation of the route. For each route type, there is a view type.

View does all heavy lifting:

- It takes route
- Sends API request
- Parses API response
- Applies filters
- Renders blocks
- Handles all actions

Views are not supposed to be used by external scripts. They are mentioned here to make it easier to understand how Icon Finder Core works.

## Blocks

When your callback is called, it includes a list of blocks that UI should display.

Each block represents one set of data.

For description of all available blocks see [blocks documentation](./blocks.md).

## Actions

When a user clicks something in UI, UI should send action to Icon Finder Core.

For list of actions see [actions documentation](./actions.md).

## Types

Icon Finder Core is written in TypeScript. This has several major advantages:

- You can easily look up properties for objects, parameters for callbacks.
- When using a library written in TypeScript, editors such as VSCode will give you hints and autofill properties, making it much easier to use the library.
- Easier to avoid bugs. While core does have unit tests, TypeScript provides an additional layer of code checking, reducing chances of bugs.

For description of types that are relevant to implementing UI, see [types documentation](./types.md).
