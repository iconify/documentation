```yaml
title: Custom views in Iconify Icon Finder
classes:
  IconFinderCore: ./core.md
  Registry: ./registry.md
  Router: ./router.md
types:
  Icon: ./types.md#icon
  IconsList: ./types.md#icons-list
```

# Custom views in Iconify Icon Finder

This tutorial is part of [Iconify Icon Finder Core tutorial](./index.md).

The custom view is similar to the search results view, except that it uses custom source for icons list. You must set the icons list when the view is being initialised. You can do that asynchronously, similar to querying API for search results.

The custom view is used for things like bookmarked icons, recent icons list.

## Creating a custom view

To create any view in Icon Finder, you need to change the route. This is a basic route for a custom view:

```json
{
	"type": "custom",
	"params": {
		"customType": "recent"
	}
}
```

See [routes documentation](./routes.md) for more information about routes.

## customType

In a custom view route, `[prop]customType` parameter is very important. It defines the type of custom view. It is used to tell the difference between various custom views.

Value can be any string, for example, `[str]recent` for recent icons list or `[str]bookmarks` for bookmarked icons.

## How to set icons

Setting icons is done by creating a callback (if you are using `[class]IconFinderCore` class or an event listener (if you are using `[class]Registry` class).

Example with `[class]IconFinderCore`:

```js
const { IconFinderCore } = require('@iconify/search-core');

const core = new IconFinderCore({
	// List of custom
	custom: {
		// Callback name matches "customType" attribute value.
		recent: (callback) => {
			// Load icons from somewhere, call callback.
			callback(['mdi-home']);
		},
		bookmarks: (callback) => {
			// It can be done asynchronously as well, for example if loading data from external resource
			setTimeout(() => {
				callback(['ic:baseline-home']);
			}, 100);
		},
	},
	// Other parameters here
	// ...
	callback: (data, core) => {
		// Render callback where all stuff happens
	},
});
```

If you are using `[class]Registry` class, you need to use an event listener:

```js
const { Registry } = require('@iconify/search-core/lib/registry');

// Create registry, set event listeners to loading custom icons
const registry = new Registry();
const events = registry.events;

// Event name starts with "load-", followed by "customType" value.
events.subscribe('load-recent', (callback) => {
	// Load icons from somewhere, call callback.
	callback(['mdi-home']);
});

// Event name starts with "load-", followed by "customType" value.
events.subscribe('load-bookmarks', (callback) => {
	// It can be done asynchronously as well, for example if loading data from external resource
	setTimeout(() => {
		callback(['ic:baseline-home']);
	}, 100);
});
```

## How to change icons

If you want to change icons list at any point after an initial callback, for example, if you add `[str]Delete` button to the custom view in UI and user clicked that button, there are several ways to do it:

### "set" action {#set-action}

The easiest way is to use `[str]set` action on a custom view.

See ["set" action documentation](./actions.md#custom-set).

Action is always performed on the currently visible view. So using `[str]set` action requires the custom view to be visible when you use that action. Changing the icons list is most likely a result of a user action in UI, done while the custom view is rendered.

### Using router

You can also use Router instance's `[func]setCustomIcons(customType: string, icons: IconsList)` method. Unlike `[str]set` action, `[class]Router` will first check if the currently visible view is a custom view with correct `[prop]customType`. If not, it will also check a pending view. A view can be pending if, for example, you have just changed route, but the new view hasn't loaded yet.

An example using `[class]IconFinderCore` instance:

```js
core.router.setCustomIcons('recent', ['mdi:home']);
```

An example using `[class]Registry` instance:

```js
registry.router.setCustomIcons('recent', ['mdi:home']);
```

## How to get full icons list

Icons are retrieved from UI using callback (or event), so UI should have access to the original icons list for a custom view.

Because of that, you shouldn't need to get a list of icons. However, if for some reason you do need to do it, you can use router's `[func]getCustomIcons(customType: string): Icon[] | null` function.

`[func]getCustomIcons` function is similar to `[func]setCustomIcons` function in examples above, but instead of taking icons list as an argument, it returns icons list. If a matching custom view is not found, the function returns null.

An example using `[class]IconFinderCore` instance:

```js
const icons = core.router.getCustomIcons('bookmarks');
```

An example using `[class]Registry` instance:

```js
const icons = registry.router.getCustomIcons('bookmarks');
```

Function returns array of `[type]Icon` objects.

## Rendering custom view

Rendering custom view is the same as rendering collection view or search results. It displays icons list.

You might want to add custom buttons, such as `[str]Delete` button. Check route type and `[prop]customType` of the current route to see if button should be displayed.
