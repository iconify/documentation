```yaml
title: 'Iconify SVG Framework Function: disableCache'
functions:
  enableCache: './enable-cache.md'
  addIcon: './add-icon.md'
  addCollection: './add-collection.md'
```

# SVG framework function: disableCache

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#api).

This function is part of API module and is not available in [bundle without API support](./without-api.md).

Function `[func]disableCache()` disables caching in `[prop]localStorage` and `[prop]sessionStorage`.

When SVG framework retrieves new icons from API, icon data is stored in browser storage. Cache makes rendering faster because SVG framework can retrieve icons from cache instead of sending API query. Unlike API queries, cache is instant.

By default, `[prop]localStorage` is enabled, `[prop]sessionStorage` is disabled.

## Usage

Function has the following parameter:

- `[prop]storage`. Storage to disable.

## Storage types

First parameter can be one of the following:

- `[str]local` for `[prop]localStorage`.
- `[str]session` for `[prop]sessionStorage`.
- `[str]all` for both `[prop]localStorage` and `[prop]sessionStorage`.

## Examples

```js
// Disable caching in localStorage
Iconify.disableCache('local');
```

```js
// Disable all caching
Iconify.disableCache('all');
```

## Notes

- Enabling or disabling cache will not affect icon data already stored in cache. Icon data will always be loaded, regardless of setting. Setting affects only storing new icon data retrieved from API.
- Setting affects only icon data loaded from API. Icon data loaded with `[func]addIcon()` or `[func]addCollection()` is not cached.
- When both `[prop]localStorage` and `[prop]sessionStorage` are enabled, icon data is cached only in `[prop]localStorage`.
