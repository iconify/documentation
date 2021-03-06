```yaml
title: Render event callback in Iconify Icon Finder Core
classes:
  IconFinderCore: ./core.md
  Registry: ./registry.md
types:
  PartialRoute: ./routes.md
  CollectionsFilterBlock: ./blocks.md#collections-filter
```

# Render event callback in Iconify Icon Finder Core

This tutorial is part of [Iconify Icon Finder Core tutorial](./index.md).

Render callback is the most important part of code. When there is something new to render, this callback is called. UI must create a function for callback and use it to update UI.

## Listening to "render" event {#listening}

There are two ways to work with Icon Finder Core: using `[class]IconFinderCore` class and using `[class]Registry` class.

Render callback is the same using both methods, except that if you use `[class]IconFinderCore` class, it has a second parameter that points to `[class]IconFinderCore` instance.

This is how you should create callback when using `[class]IconFinderCore`:

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

This is how you should create callback when using `[class]Registry`:

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

## Callback data {#router-event}

Parameter `[prop]data` of the callback contains data you should render. Data is an object, TypeScript type is `[type]RouterEvent`. It has the following properties:

- `[prop]viewChanged`, `[type]boolean`. `[bool]True` if the current view has changed since the previous callback call. Value is `true` on the first callback call. This attribute should be used by UI to check if the entire UI needs re-rendering, including the parent views list.
- `[prop]error`, `[type]string`. Possible values:
  - `[str]""`: no error, the view is safe to render.
  - `[str]loading`: the view is still loading. UI should render the generic `[str]Loading` page.
  - `[str]timeout`: API request timed out.
  - `[str]invalid_data`: API returned invalid data.
  - `[str]empty`: API returned empty data. This can happen if, for example, there are no search matches. This error is generated before applying view filters, so a lack of error does not guarantee that there are items to display.
  - `[str]not_found`: API returned `[str]not found` error.
- `[prop]route`, `[type]PartialRoute`. Current route. See [routes documentation](./routes.md).
- `[prop]blocks`. Blocks as object, where key is block name, value is block. See [blocks documentation](./blocks.md). If there is an error (see `[prop]error` property), blocks could be `null`.

## Blocks

Property `[prop]blocks` is a simple object.

Key is a name of block. It is unique and is always the same for block. Do not confuse it with block type: there can be multiple blocks of the same type. For example, theme prefix, theme suffix and categories all have block type `[type]CollectionsFilterBlock`.

Value is block data object. You can figure out block type using `[prop]type` property of value. See [blocks documentation](./blocks.md).

## Callback logic

First check for `[prop]viewChanged` property. If the value is `true`, it means route was changed. UI might need to render different components for different view types, change navigation, change parent views list, change the keyword in the search form.

Then check for an `[prop]error` property. If the value is not empty, the current view is not ready to be rendered. Display the appropriate error message. If the value is `[str]loading`, UI should show the `[str]loading` page.

If there is no error, you can access the `[prop]blocks` property. UI should be split into components of the same types as blocks. Render components in whatever order you want, use data blocks as parameters.

## Buttons and inputs

Render callback is responsible only for rendering current data. If a user clicks a button or changes input value, you need to run action. See [actions documentation](./actions.md).

## Example

This example shows a simple container that creates an Icon Finder Core instance, uses data from callback to change state and renders child components.

It decides what child component to show based on the current error message and route.

```jsx
import react, { Component } from 'react';
const { IconFinderCore } = require('@iconify/search-core');

class UI extends Component {
	constructor() {
		super();

		this.mounted = false;

		// Initial state: "Loading" page and collections list
		this.state = {
			search: '',
			error: 'loading',
			route: {
				type: 'collections',
			},
		};
	}

	componentDidMount() {
		// Mark as mounted
		this.mounted = true;

		// Create IconFinderCore instance
		this.core = new IconFinderCore({
			defaultRoute: {
				type: 'collections',
			},
			callback: (data, core) => this._updateState.bind(this),
		});
	}

	componentWillUnmount() {
		// Mark as unmounted
		this.mounted = false;

		// Destroy IconFinderCore instance (optional)
		this.core.destroy();
	}

	_updateState(data) {
		if (this.mounted) {
			// If current view changed to search results, copy current search keyword from route
			if (data.viewChanged && data.route.type === 'search') {
				this.setState({
					keyword: data.route.params.search,
				});
			}

			// Merge RouterEvent data with state
			this.setState(data);
		}
	}

	render() {
		const state = this.state;

		// Check of core is available
		if (this.core === void 0) {
			return <LoadingError />;
		}

		// Get child component
		let ChildComponent = LoadingError;
		const childProps = {
			// Search keyword
			search: state.search,

			// Route
			route: state.route,

			// Core id, can be used to get IconFinderCore instance and run action
			core: this.core.id,
		};

		let routeType = state.route.type;
		switch (state.error) {
			case '':
				// No error. Render child view based on current route
				switch (routeType) {
					case 'collections':
						ChildComponent = CollectionsViewContainer;
						break;

					case 'collection':
						ChildComponent = CollectionViewContainer;
						break;

					case 'search':
						ChildComponent = SearchViewContainer;
						break;

					case 'custom':
						ChildComponent = CustomViewContainer;
						break;

					default:
						// This code should be unreachable. If using TypeScript add check for "never" type here
						ChildComponent = GenericError;
						childProps.error = 'invalid_view';
				}

				// Expand blocks as various properties, ending with "Block", such as blocks.icons becomes iconsBlock
				Object.keys(state.blocks).forEach((key) => {
					childProps[key + 'Block'] = state.blocks[key];
				});
				break;

			case 'loading':
				// Render "Loading" page
				ChildComponent = LoadingError; // Redundant code
				break;

			default:
				// Render error component, use "error" prop to generate error message
				ChildComponent = GenericError;
				childProps.error = state.error;
		}

		// Render
		return <ChildComponent {...childProps} />;
	}
}
```

In child components to get `[class]IconFinderCore` instance, use property `[prop]core` passed from parent component:

```js
const { getCoreInstance } = require('@iconify/search-core');

// Example code inside component
// "core" was provided as property in a previous example. This example is an addition to previous example.
const id = this.props.core;
if (id !== null) {
	const core = getCoreInstance(this.props.core);
	core.router.action('pagination', 2);
}
```
