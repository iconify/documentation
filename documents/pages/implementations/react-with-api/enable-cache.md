```yaml
title: 'Iconify for React Function: enableCache'
functions:
  disableCache: './disable-cache.md'
  addIcon: './add-icon.md'
  addCollection: './add-collection.md'
```

# Iconify for React function: enableCache

`include notices/react-with-api`

This tutorial is part of [Iconify for React with API functions tutorial](./index.md#functions).

Function `[func]enableCache()` enables or toggles caching in `[prop]localStorage` and `[prop]sessionStorage`.

When component retrieves new icons from API, icon data is stored in browser storage. Cache makes rendering faster because component can retrieve icons from cache instead of sending API query. Unlike API queries, cache is instant.

By default, `[prop]localStorage` is enabled, `[prop]sessionStorage` is disabled.

## Usage

Function has the following parameter:

- `[prop]storage`. Storage to enable.

## Storage types

First parameter can be one of the following:

- `[str]local` for `[prop]localStorage`.
- `[str]session` for `[prop]sessionStorage`.
- `[str]all` for both `[prop]localStorage` and `[prop]sessionStorage`.

## Examples

```js
import { enableCache } from '@iconify/react-with-api';

// Enable caching in localStorage
enableCache('local');
```

## Notes

`include implementations/cache-notes`
