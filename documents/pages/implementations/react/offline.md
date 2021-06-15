```yaml
title: 'Iconify for React Offline Use'
functions:
  addCollection: './add-collection.md'
  addIcon: './add-icon.md'
```

# Iconify for React offline use

```yaml
include: implementations/components/intro-offline
```

See [icon bundles for Iconify for React](../../sources/bundles/react.md) documentation.

## Offline component

Additionally, if you do not want to include API functionality, you can import component without API support. It is a bit smaller than full component.

In your code replace:

```js
import { Icon } from '@iconify/react';
```

with

```js
import { Icon } from '@iconify/react/dist/offline';
```

Offline component has only the following functions available:

- `[func]addIcon()`. Adds one icon.
- `[func]addCollection()`. Adds an icon set.

```js
import { Icon, addIcon, addCollection } from '@iconify/react/dist/offline';
import bellFill from '@iconify/icons-bi/bell-fill';

// Set alias for icon data
addIcon('bell', bellFill);

// Test component
export function iconDemo() {
	return (
		<div>
			<div>
				Icon referenced by name: <InlineIcon icon="bell" />
			</div>
			<div>
				Icon referenced by object: <InlineIcon icon={bellFill} />
			</div>
		</div>
	);
}
```
