```yaml
title: 'Iconify Icon Finder Components: Callback'
types:
  IconFinderEvent: ./callback.md#event
  IconFinderState: ./types.md#icon-finder-state
  PartialIconCustomisations: ./types.md#icon-customisations
  Icon: ../core/types.md#icon
  PartialRoute: ../core/types.md#route
```

# Components wrapper callback

This tutorial is part of [Iconify Icon Finder components tutorial](./index.md).

Callback must be provided as parameter to `[class]Wrapper` constructor. It is used to notify your code whenever something changes in Icon Finder instance.

Callback is a function with only one parameter: `[var]event`, `[type]IconFinderEvent`.

## Payload {#event}

Payload has type `[type]IconFinderEvent`, which you can find in `[file]src/wrapper/events.ts` of components package (to import type in your TypeScript code, use `[file]@iconify/search-components/lib/wrapper/events`).

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

## Icon

Icon event is sent when new icon has been selected.

Event has property `[prop]icon`, `[type]Icon | null` that contains new selected icon as object. If icon has been deselected, value is `null`.

Callback payload examples:

```json
{
	"type": "icon",
	"icon": {
		"provider": "",
		"prefix": "mdi",
		"name": "account-lock"
	}
}
```

```json
{
	"type": "icon",
	"icon": null
}
```

You can use function `[func]iconToString` from Icon Finder Core to convert icon object to string:

```js
import { Wrapper } from '@iconify/search-components/lib/wrapper';
import { IconFinderEvent } from '@iconify/search-components/lib/wrapper/events';
import { iconToString } from '@iconify/search-core';

// ...
const wrapper = new Wrapper({
	// ...
	callback: (event: IconFinderEvent) => {
		switch (event.type) {
			case 'icon':
				if (event.icon) {
					console.log('New icon selected:', iconToString(event.icon));
				} else {
					console.log('Icon has been deselected');
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
import { Wrapper } from '@iconify/search-components/lib/wrapper';
import { IconFinderEvent } from '@iconify/search-components/lib/wrapper/events';

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

- `[prop]button`, `[type]string`. Key of button that has been clicked. It is the same key as in `[prop]components.footer.buttons` object in configurator.
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
