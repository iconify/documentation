```yaml
title: 'Iconify Icon Finder Components Callback'
types:
  IconFinderEvent: ./callback.md#event
  IconFinderState: ./types.md#icon-finder-state
  PartialIconCustomisations: ./types.md#icon-customisations
  Icon: ../core/types.md#icon
  PartialRoute: ../core/types.md#route
```

# Components wrapper callback

This tutorial is part of [Svelte Components for Iconify Icon Finder tutorial](./index.md).

Class `[class]Wrapper` uses callback to notify your code of any changes, such as change in route, change in selected icon or when user clicks button in footer.

Callback must be provided as parameter to `[class]Wrapper` constructor. It is a function with only one parameter: `[var]event`, `[type]IconFinderEvent`.

## Payload {#event}

Payload has type `[type]IconFinderEvent`, which you can find in `[file]src/icon-finder/wrapper/events.ts`.

It is a simple object with multiple properties. Property `[prop]type` defines type of event, other properties are specific to that type.

## Load

Load event is sent when Icon Finder has loaded.

Callback payload example:

```json
{
	"type": "load"
}
```

## Route

Route event is sent when current page has changed.

Event has property `[prop]route`, `[type]PartialRoute` that contains new route.

Callback payload examples:

```json
{
	"type": "route",
	"route": {
		"type": "collections"
	}
}
```

```json
{
	"type": "route",
	"route": {
		"type": "collection",
		"params": {
			"prefix": "mdi",
			"page": 1
		},
		"parent": {
			"type": "collections"
		}
	}
}
```

## Selection

Selection event is sent when new icons have been selected.

Event has property `[prop]icons`, `[type]Icon[]` that contains array of selected icons as objects.

Callback payload examples:

```json
{
	"type": "selection",
	"icons": [
		{
			"provider": "",
			"prefix": "mdi",
			"name": "account-lock"
		}
	]
}
```

```json
{
	"type": "selection",
	"icons": []
}
```

You can use function `[func]iconToString` from Icon Finder Core to convert icon object to string:

```js
import { iconToString } from '@iconify/search-core';
import { Wrapper } from './wrapper';
import type { IconFinderEvent } from './wrapper/events';

// ...
const wrapper = new Wrapper({
	// ...
	callback: (event: IconFinderEvent) => {
		switch (event.type) {
			case 'selection':
				switch (event.icons.length) {
					case 0:
						console.log('No icons selected');
						break;

					case 1:
						console.log('Selected icon:', iconToString(event.icons[0]));
						break;

					default:
						console.log(
							'Multiple icons selected:',
							event.icons.map(iconToString).join(', ')
						);
				}
				break;
		}
	},
	// ...
});
// ...
```

Usually user cannot deselect current icon. To deselect icon, use `[class]Wrapper`'s `[func]selectIcon(null)` function as response to clicking button.

```js
import { Wrapper } from './wrapper';
import type { IconFinderEvent } from './wrapper/events';

// ...
const wrapper = new Wrapper({
	// ...
	callback: (event: IconFinderEvent) => {
		switch (event.type) {
			case 'button':
				switch (event.button) {
					case 'reset':
						// Deselect current icon
						wrapper.selectIcon(null);
						break;

					// ...
				}
				break;
		}
	},
	// ...
});
// ...
```

## Customisations

Customisations event it sent when icon customisations have changed. For example, when user has changed icon color or rotated icon.

Event has property `[prop]customisations`, `[type]PartialIconCustomisations` that contains list of customisations.

Callback payload examples:

```json
{
	"type": "customisations",
	"customisations": {
		"color": "#f20"
	}
}
```

```json
{
	"type": "customisations",
	"customisations": {
		"hFlip": true,
		"color": "#f20",
		"height": "24"
	}
}
```

## Button

Button event is sent when button in footer has been clicked. Event has 2 properties:

- `[prop]button`, `[type]string`. Key of button that has been clicked. It is the same key as in `[var]footerButtons` [config variable](./components-config.md).
- `[prop]state`, `[type]IconFinderState`. Current state.

Callback payload example:

```json
{
	"type": "button",
	"button": "submit",
	"state": {
		"icon": {
			"provider": "",
			"prefix": "mdi",
			"name": "account-box-outline"
		},
		"route": {
			"type": "collection",
			"params": {
				"prefix": "mdi"
			},
			"parent": {
				"type": "collections"
			}
		},
		"config": {
			"components": {
				"list": true
			}
		},
		"customisations": {
			"color": "#f20"
		}
	}
}
```

## Link

Link event is sent when external link has been clicked. Event has 2 properties:

- `[prop]href`, `[type]string`. Link URL.
- `[prop]event`, `[type]MouseEvent`. Mouse event.

Callback payload example:

```json
{
	"type": "link",
	"href": "https://raw.githubusercontent.com/Templarian/MaterialDesign/master/LICENSE",
	"event": /* MouseEvent instance */
}
```

This event can be used to prevent external links from being clicked or handle links differently.

For example, [Sketch plug-in](../../../design/sketch/index.md) uses this event. Links do not work in Sketch plug-ins, but using this event, Sketch plug-in captures all links clicked in Icon Finder and tells Sketch to open a new browser window.

```js
import { Wrapper } from './wrapper';
import type { IconFinderEvent } from './wrapper/events';

// ...
const wrapper = new Wrapper({
	// ...
	callback: (event: IconFinderEvent) => {
		switch (event.type) {
			case 'link':
				// Stop default event handler
				event.event.preventDefault();

				// Send message to script running in Sketch to open link
				// Internal event used by Sketch plug-in, not to be confused with Icon Finder event
				window.postMessage('iconify', {
					action: 'link',
					href: event.href,
				});
				break;
		}
	},
	// ...
});
// ...
```
