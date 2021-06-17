```yaml
title: 'Iconify for Svelte Offline Use'
functions:
  addCollection: './add-collection.md'
  addIcon: './add-icon.md'
```

# Iconify for Svelte offline use

```yaml
include: icon-components/components/intro-offline
```

See [icon bundles for Iconify for Svelte](../../sources/bundles/react.md) documentation.

## Offline component

Additionally, if you do not want to include API functionality, you can import component without API support. It is a bit smaller than full component.

In your code replace:

```js
import Icon from '@iconify/svelte';
```

with

```js
import Icon from '@iconify/svelte/dist/offline';
```

or, if you want to link to uncompiled component instead of compiled bundle, use

```js
import Icon from '@iconify/svelte/dist/OfflineIcon.svelte';
```

Offline component has only the following functions available:

- `[func]addIcon()`. Adds one icon.
- `[func]addCollection()`. Adds an icon set.

```yaml
src: icon-components/common/offline.svelte
```
