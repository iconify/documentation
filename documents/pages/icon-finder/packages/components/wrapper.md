```yaml
title: 'Iconify Icon Finder Components: Wrapper'
wip: true
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
```

# Components wrapper

This tutorial is part of [Iconify Icon Finder components tutorial](./index.md).

Main entry point of components package is `[file]wrapper`. It creates Icon Finder instance, renders container component, uses callback to notify implementation of any changes (such as new icon was seleted or button was clicked) and has several functions that can be used to control Icon Finder instance.

To import `[class]Wrapper` class, use this:

```js
import { Wrapper } from '@iconify/search-components/lib/wrapper';
```

Constructor for `[class]Wrapper` has only one parameter: object `[type]IconFinderWrapperParams` that has the following mandatory properties:

- `[prop]container`, `[type]HTMLElement`. Container element where Icon Finder instance should be rendered.
- `[prop]component`. Main Svelte component to render.
- `[prop]callback`, `[type]IconFinderEvent`. Callback function that will be called whenever something happens.

Then there are several optional properties:

- `[prop]iconSet`, `[type]IconFinderCustomSets | IconifyJSON[]`. Custom icon sets.
- `[prop]state`, `[type]IconFinderState`. Current state. This can be used to restore state from previous instance.
- `[prop]phrases`. Custom phrases.

## Component

You can use `[prop]component` property to render custom container or to render default container.

Example of rendering default container:

```js
import { Wrapper } from '@iconify/search-components/lib/wrapper';
import Container from '@iconify/search-components/lib/ui/Container.svelte';

// Create instance
const wrapper = new Wrapper({
	container: document.getElementById('icon-finder'),
	component: Container,
	callback: (event: IconFinderEvent) => {
		console.log('Event:', event);
	},
});
```

## Callback

Callback is used to notify implementation of various events.

For more details see [callback documentation](./callback.md).

## Custom sets

TODO...

### IconFinderCustomSets type {#icon-finder-custom-sets}

TODO...

## Restoring state

TODO...
