```yaml
title: APICore class in Iconify Icon Finder
```

# APICore class in Iconify Icon Finder

This tutorial is part of [Iconify Icon Finder Core tutorial](../index.md).

APICore class makes it easy to interact with Iconify Icon Finder Core.

All configuration values, initial route, and callbacks are set in the constructor. Then all you need to do is react to the main callback.

```js
const { APICore } = require('@iconify/icon-finder-core');

const core = new APICore({
	// Configuration
	config: {
		display: {
			itemsPerPage: 32,
		},
	},
	// Default route. If default route fails, script will navigate to home page
	route: {
		type: 'collection',
		params: {
			prefix: 'mdi',
		},
		parent: {
			type: 'collections',
		},
	},
	callback: (data, core) => {
		// Main callback where all stuff happens
	},
});
```

## Callback

`[prop]callback` is the main property of the Iconify Core constructor. It is called whenever something needs to be rendered and includes everything you need to render UI.

See [render event documentation](./render.md) for description and code example.

## Instance ID

If you do not want to pass an entire `[class]APICore` instance to child components, you can use instance ID.

Each `[class]APICore` instance has a unique identifier. It makes it possible to pass `[class]APICore` instance as a string instead of an object to child components.

```jsx
import { APICore, getAPICoreInstance } from '@iconify/icon-finder-core';

// Container component: create core
class Container extends Component {
	constructor() {
		super();

		this.core = new APICore({
			callback: (data) => {
				// Change state on each render
				this.setState(data);
			},
		});
	}

	render() {
		<ChildComponent {...this.state} core={this.core.id} />;
	}
}

// Child component: use core passed as string
class ChildComponent extends Component {
	constructor(props) {
		super(props);

		this.core = getAPICoreInstance(props.core);
	}
}
```

## Destroying instance

When you no longer need `[class]APICore` instance, you should destroy it. That will remove all references to instance, allowing JavaScript garbage collector to remove it from memory.

```js
core.destroy();
```

## getCollection

If you need to retrieve information about an icon set, you can use `[func]getCollection()` method.

Parameters:

- `[prop]provider`, `[type]string`. API provider name.
- `[prop]prefix`, `[type]prefix`. Icon set prefix.

Returns:

- `null` if information for icon set is not available.
- `[type]CollectionInfo` object if information is available.

Type `[type]CollectionInfo` is an extension of `[type]IconifyInfo` type, with few extra properties:

## Router

All communication is done via router: changing and retrieving route, applying actions.

To get `[class]Router` instance, use `[func]getRouter()` method:

```js
const router = core.getRouter();

// View Material Design Icons with collections list as parent view
router.route = {
	type: 'collection',
	params: {
		prefix: 'mdi',
	},
	parent: {
		type: 'collections',
	},
};
```

### Routes

Current view is stored in the route. You can save current route or set a new route.

To get or set route, use router's `[prop]route` getter or setter (see code example above).

See [routes documentation](./routes.md) for list of routes.

### Actions

If you want to change something, for example, a current page, you should use actions.

```js
core.getRouter().action('pagination', 1);
```

See [actions documentation](./actions.md) for list of actions.
