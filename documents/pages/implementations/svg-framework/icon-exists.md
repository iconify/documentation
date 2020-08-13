```yaml
title: 'Iconify SVG Framework Function: iconExists'
```

# SVG framework function: iconExists

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#getting-icons).

Function `[func]iconExists()` checks if icon is available.

## Usage

Function has the following parameter:

- `[prop]name`, `[type]string`. Icon name.

Function returns `[type]boolean` value: `[bool]true` if icon is available, `[bool]false` if icon is not available.

## Example

```js
function renderLeftArrow() {
	// Check if 'bi:arrow-left' is available
	if (Iconify.iconExists('bi:arrow-left')) {
		// Return HTML for 'bi:arrow-left'
		return Iconify.renderHTML('bi:arrow-left');
	} else {
		// Load icon. Bad example because this should use a callback to re-render arrow, but
		// this code example is about iconExists(), not loadIcons()
		Iconify.loadIcons(['bi:arrow-left']);

		// Return '<'
		return '&lt;';
	}
}
```
