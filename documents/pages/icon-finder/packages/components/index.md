```yaml
title: 'Iconify Icon Finder Components'
classes:
  Wrapper: ./wrapper.md
  Registry: ../core/registry.md
  Router: ../core/router.md
types:
  Registry: ../core/registry.md
  Icon: ../core/types.md#icon
  PartialRoute: ../core/types.md#route
  IconCustomisations: ./types.md#icon-customisations
```

# Components

This tutorial is part of [Iconify Icon Finder packages tutorial](../index.md).

Components package is a set of reusable Svelte components.

Main entry points are `[file]src/wrapper.ts` for `[class]Wrapper` and `[file]src/ui/Container.svelte` for container component.

## Wrapper and Container

`[class]Wrapper` class creates instance of container component and renders it inside DOM node that you specify. Then it handles events, it has functions to set and get config, route, selected icon, customisations.

Container component is needed to be passed as parameter to `[class]Wrapper` instance. This allows you to swap container with another component, for example, one that renders your custom header, footer or navigation.

## Example

Basic example:

```js
// Import Wrapper class and container component
import { Wrapper } from '@iconify/search-components/lib/wrapper';
import Container from '@iconify/search-components/lib/ui/Container.svelte';

// DOM element to append icon finder to
const container = document.getElementById('container');

// Create instance
new Wrapper({
	container,
	component: Container,
	callback: (event) => {
		console.log('Event:', event);
	},
});
```

For more information about `[class]Wrapper` class, take a look at [Wrapper class documentation](./wrapper.md).

For more information about callback, take a look at [Wrapper callback documentation](./callback.md).

## Swapping components

You can swap components with custom components during build process.

To do that, put custom component in a directory within your implementation source that has structure similar to directory `[file]src` of components package, add `[prop]common.components.customDir` to configuration and run build process. For more information about custom components, see [custom components documentation](../build/custom-components.md).

## Exports

There are several variables used in most components that are exported:

- `[var]registry`, `[type]Registry`. This is an instance of `[class]Registry` class. It never changes. It is used to retrieve static stuff that does not change, such as phrases, configuration, API providers.
- `[var]selectedIcon`, `[type]Icon | null`. Selected icon as object.
- `[var]route`, `[type]PartialRoute`. Current route, contains only parameters that are not default.

Additional exported variables that exist only in some components, but are still quite common:

- `[var]iconCustomisations`, `[type]IconCustomisations`. List of icon customisations, such as color, dimensions, transformations. See `[file]src/misc/customisations.ts` for type description.
- `[var]blocks`. List of blocks, specific to view. Used in view specific pages, so type is always known.
- `[var]block`. Block data, used in blocks. Type is specific to block.
- `[var]name`, `[type]string`. Block name, used in blocks.

## Actions, Routes {#core-stuff}

Actions in components, such as clicking page in pagination block, are handled by `[class]Router`. So are routes.

Router is static, it can be retrieved from `[class]Registry` instance.

Example:

```js
registry.router.action('pagination', value);
```

```js
registry.route = {
	type: 'collection',
	params: {
		prefix: 'mdi',
	},
	parent: {
		type: 'collections',
	},
};
```

## Other stuff

Everything else is specific to component. See various components for code examples.

## TypeScript

If you are using TypeScript, you can import types for various objects directly from Core by referencing `[npm]@iconify/search-core` package. Do not import files from relative directory, use package names instead. Lerna will handle all links to packages.

If you are experiencing errors in VSCode, such as VSCode telling you that imported type does not exist, run `[bash]npm run link` in root directory to fix symbolic links. If that does not help, edit import line once (cut and paste it to the same place, so code is not changed) to force VSCode to refresh import. It should fix VSCode glitch that sometimes happens when working with monorepo.
