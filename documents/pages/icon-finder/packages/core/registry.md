```yaml
title: IconFinderCore class in Iconify Icon Finder
classes:
  IconFinderCore: ./core.md
  Router: ./router.md
types:
  CollectionInfo: ./types.md#collection-info
  IconifyInfo: ../../../types/iconify-json-metadata.md#iconify-info
  RouterEvent: ./render.md#router-event
```

# Registry class in Iconify Icon Finder

This tutorial is part of [Iconify Icon Finder Core tutorial](./index.md).

## When to use Registry?

`[class]Registry` class is more complex than `[class]IconFinderCore` class. It is not as straight forward as `[class]IconFinderCore` and requires reading documentation to understand how things work. So why would you want to use it? To access internal stuff directly, like events, configuration and API.

## Creating Registry instance

To create `[class]Registry` instance, you need to use import class `[prop]Registry` from `[file]lib/registry` and initialise it:

```js
const { Registry } = require('@iconify/icon-finder-core/lib/registry');

const registry = new Registry();
```

## Namespace

Icon Finder Core is designed to share data between various instances. What data is shared?

- API. This means if you run multiple instances, for each type of API query there is only one request. Why request data that has already been requested by another instance?
- Configuration. This allows you to set configuration once, then create multiple instances.
- Icon sets information. Since the API endpoint is the same, information about any icon set is the same, so why not share it between instances?

There are cases when you do not want to share information. Shared information is tied to a namespace. All you need to do is simply pass different namespace value to Registry constructor:

```js
const registry1 = new Registry('iconify');
const registry2 = new Registry('custom');
```

That's it. Those instances will no longer share information.

## Events

Icon Finder Core uses events to send messages across different parts. The event system is a very simple custom class that you can find in `[file]src/events.ts`. It is a custom class because Core is designed to work in both Node.js and the browser and be as small as possible.

To get events instance from `[class]Registry` instance, simply call `[prop]events` property:

```js
const events = registry.events;
const renderEventHandler = (data) => {
	// Render stuff
};

// Subscribe
events.subscribe('render', renderEventHandler);

// Unsubscrbe
events.unsubscribe('render', renderEventHandler);
```

You can have multiple subscribers for each event, so creating a new subscriber won't automatically unsubscribe the previous subscriber.

Each event has one parameter: payload. The type of payload depends on an event.

Available events:

- `[str]render`. Called when new data is available. The payload type is `[type]RouterEvent`. See [render callback documentation](./render.md).
- `[str]load-*`. Called when loading icons for a custom view. The event name starts with `[str]load-`, followed by the custom view's `[prop]customType` property value. The payload is a callback to call when a custom icons list is available. See [custom views documentation](./custom-view.md).

## Collections info

Icon Finder Core has storage for retrieved collections. It stores `[type]CollectionInfo` objects.

To get that storage, use Registry's `[prop]collections` property:

```js
const collections = registry.collections;

// Get collection information
const info = collections.get('', 'mdi'); // CollectionInfo | null

// Get collection title, returns prefix if title is not available
const title = collections.title('', 'fa-regular'); // string

// Set custom data
collections.set('', 'noto', {
	// ...
});
```

## API

The registry gives direct access to API class. API class is responsible for retrieving data from the Iconify API.

```js
const api = registry.api;
api.query(
	'/collection',
	{
		prefix: 'emojione',
	},
	(data, error, cached) => {
		// Data has been retrieved. Do something with it.
		if (data === null) {
			// 404 error message
			console.error('emojione does not exist');
			return;
		}

		// Do stuff
	}
);
```

## Router

To access `[class]Router` instance, use `[prop]router` property:

```js
const router = registry.router.router.home();
```

## Custom properties

You can also get and set custom data, which can be shared by multiple instances that use the same namespace.

To set custom data, use `[func]setCustom()`. Function has 3 parameters:

- `[prop]key`, `[type]string`. Custom data key. This is unique identifier of data, such as `[str]ui`.
- `[prop]value`. This is payload, any type.
- `[prop]local`, `[type]boolean`. If `false`, data will be shared with other Icon Finder instances that share namespace. Default value is `true`.

To get custom data, use `[func]getCustom()`. Function has 2 parameters:

- `[prop]key`, `[type]string`. Custom data key.
- `[prop]local`, `[type]boolean`.

Function will return `[type]undefined` if data for that `[prop]key` is not available.

If you want to set some data shared among instances, first check if it is available using `[func]getCustom()`, then, if data is not available, set it using `[func]setCustom()`.

Custom data is used by UI to set phrases, to set current component instance for render callback. See `[file]src/wrapper.ts` in components package for example and various components for usage.
