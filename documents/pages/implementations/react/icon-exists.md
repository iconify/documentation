```yaml
title: 'Iconify for React Function: iconExists'
```

# Iconify for React function: iconExists

This tutorial is part of [Iconify for React functions tutorial](./index.md#functions).

Function `[func]iconExists()` checks if icon is available.

## Usage

Function has the following parameter:

- `[prop]name`, `[type]string`. Icon name.

Function returns `[type]boolean` value: `[bool]true` if icon is available, `[bool]false` if icon is not available.

## Example

```jsx
import { iconExists, loadIcons, Icon } from '@iconify/react';

function renderLeftArrow() {
	// Check if 'bi:arrow-left' is available
	if (iconExists('bi:arrow-left')) {
		// Return HTML for 'bi:arrow-left'
		return <Icon icon="bi:arrow-left" />;
	}

	// Load icon. Bad example because this should use a callback to re-render arrow in a stateful
	// component, but this code example is about iconExists(), not loadIcons()
	loadIcons(['bi:arrow-left']);

	// Return '<'
	return <span>&lt;</span>;
}
```
