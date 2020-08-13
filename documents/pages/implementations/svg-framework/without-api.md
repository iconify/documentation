```yaml
title: Using Iconify SVG Framework Without API
replacements:
  - code: '/2/2.0.0/'
    value: '/${iconify2.version.major}/${iconify2.version.full}/'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '@iconify/iconify@2'
    value: '${iconify2.import}'
```

# SVG framework without API

This tutorial is part of [Iconify SVG Framework tutorial](./index.md).

Iconify SVG framework retrieves icon data from Iconify API. That makes it very easy to use because developer does not need to prepare icon data. Downside is, visitor must be online to retrieve icon data.

However, SVG framework can also work without API.

## Bundle without API

Iconify SVG framework offers bundle without API support. You do not need to use it, you can use full bundle without relying on API, however there are advantages of using bundle without API support:

- It is smaller than full bundle.
- You will immediately see missing icons. If you use full bundle, some icons could be left in `[prop]localStorage` or `[prop]sessionStorage` cache. Bundle without API does not support storage.

To switch from full bundle to bundle without API support, add `[str].without-api` to script URL:

```html
<script src="https://code.iconify.design/2/2.0.0/iconify.without-api.min.js"></script>
```

If you are using NPM package `[npm]@iconify/iconify@2`, import `[file]dist/iconify.without-api.min.js`:

```js
import Iconify from '@iconify/iconify/dist/iconify.without-api.min.js';
```

## Adding icons

When API is disabled, you need to make sure to provide data for all used icon to SVG framework.

There are two ways of doing it:

- [Importing icon bundles](./add-collection.md).
- [Importing icons from NPM](./add-icon.md).

Make sure you bundle those icons with Iconify SVG framework.
