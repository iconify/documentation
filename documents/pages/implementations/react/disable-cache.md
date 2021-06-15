```yaml
title: 'Iconify for React Function: disableCache'
functions:
  enableCache: './enable-cache.md'
  addIcon: './add-icon.md'
  addCollection: './add-collection.md'
```

# Iconify for React function: disableCache

This tutorial is part of [Iconify for React functions tutorial](./index.md#functions).

`include implementations/functions/cache/intro-disable`

## Usage

`include implementations/functions/cache/props`

## Storage types

`include implementations/functions/cache/storage-types`

## Examples

```js
import { disableCache } from '@iconify/react';

// Disable caching in localStorage
disableCache('local');
```

```js
import { disableCache } from '@iconify/react';

// Disable all caching
disableCache('all');
```

## Notes

`include implementations/functions/cache/notes`
