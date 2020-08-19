```yaml
title: 'Iconify for React Function: loadIcons'
functions:
  scan: './scan.md'
types:
  IconifyIconName: './icon-name.md'
```

# Iconify for React function: loadIcons

This tutorial is part of [Iconify for React with API functions tutorial](./index.md#functions).

Function `[func]loadIcons()` retrieves icons from Iconify API.

When to use this function:

- To preload multiple icons that you will use later. This will make sure icon data is available when needed and it will load faster.

## Usage

Function has the following parameters:

- `[prop]icons`, `[type](string | IconifyIconName)[]`. List of icons to load.
- `[prop]callback`, `[type]function`. Optional callback to call. Callback is called not only when all icons have been retrieved, but also when part of icons have been retrieved.

Function returns `[type]function` you can use to stop loading icons. It is needed when, for example, you are loading icons in a custom component, but component's life cycle ended before icons have loaded, so you need to remove callback.

## Icons list

Icons list is an array. Each element can be a string, such as `[icon]mdi:home` or a `[type]IconifyIconName` object.

## Callback

Optional callback has the following parameters:

- `[prop]loaded`, `[type]IconifyIconName[]`. List of icons that have been loaded.
- `[prop]missing`, `[type]IconifyIconName[]`. List of icons that are not available on API.
- `[prop]pending`, `[type]IconifyIconName[]`. List of icons that are still loading.
- `[prop]unsubscribe`, `[type]function`. Function to call to cancel loading. It is the same as result of `[func]loadIcons()` call.

## IconifyIconName type

`include types/iconify-icon-name`

## Examples

This function is mostly intended to be used for [SVG framework](../svg-framework/index.md), however it is available in this component too in case if someone needs it. Component uses it internally to toggle `[var]loaded` state when rendering icon. Examples below are more generic, not made specifically for component.

Simple callback that loads one icon:

```js
import { loadIcons, iconExists } from '@iconify/react-with-api';

const iconName = 'mdi:home';
let loaded = iconExists(iconName);

if (!loaded) {
	loadIcons([iconName], (loaded, missing, pending, unsubscribe) => {
		if (loaded.length) {
			loaded = true;
			console.log(
				`Icon ${iconName} have been loaded and is ready to be renderered.`
			);
			return;
		}

		if (missing.length) {
			console.log(`Icon ${iconName} does not exist.`);
			return;
		}

		if (pending.length) {
			// Pending icons array will always be empty because in this example there is only one icon to load.
			// Callback is called when something changes, with 1 icon there can only be 2 type of changes: icon has loaded or icon is missing.
		}
	});
}
```

Promise version of `[func]loadIcons()`:

```js
import { loadIcons } from '@iconify/react-with-api';

/**
 * Function to load icons, returns Promise
 */
function loadTestIcons(icons) {
	return new Promise((fulfill, reject) => {
		loadIcons(icons, (loaded, missing, pending, unsubscribe) => {
			if (pending.length) {
				// Icons are pending, wait for all to load/fail
				return;
			}
			if (missing.length) {
				reject({
					loaded,
					missing,
				});
			} else {
				fulfill({
					loaded,
				});
			}
		});
	});
}

/**
 * Usage example in async function
 */
async function test() {
	await loadTestIcons(['jam:info', 'cil:locomotive', 'cil:paper-plane']).catch(
		(err) => {
			console.error('Failed to load icons:', err.missing);
		}
	);

	// Do stuff with loaded icons
	console.log('Loaded!');
}
test();
```
