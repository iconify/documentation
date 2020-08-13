```yaml
title: 'Iconify SVG Framework Function: addIcon'
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  addCollection: './add-collection.md'
```

# SVG framework function: addIcon

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#adding-icons).

Function `[func]addIcon()` add one icon to SVG framework storage.

## Usage

Function has the following parameters:

- `[prop]name`, `[type]string`. Icon name.
- `[prop]data`, `[type]IconifyIcon`. Icon data.

Function returns `[type]boolean` value: `[bool]true` on success, `[bool]false` if something is wrong with data.

## Examples

```js
Iconify.addIcon('mdi:account-box', {
	body:
		'<path d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" fill="currentColor"/>',
	width: 24,
	height: 24,
});
```

## Notes

- Icons added by this function are not cached in `[prop]localStorage` and `[prop]sessionStorage`.
- Calling this function will trigger re-scan of DOM on the next tick.

## API provider

API provider can be used to load custom icons asynchronously without triggering API queries.

Each API provider has its own API endpoint, so if you are using custom API provider that SVG framework doesn't have configuration for (currently by default SVG framework has no API providers configured), SVG framework will not attempt to load missing icons from an unknown API provider.

Example:

```js
Iconify.addIcon('@custom:md:test', {
	body: '<path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z" fill="currentColor"/>',
	width: 24,
	height: 24,
});
```

Code above adds the following icon:

- `[prop]provider` is `[str]custom`.
- `[prop]prefix` is `[str]md`.
- `[prop]name` is `[str]test`.

In HTML code this icon can be used like this:

```html
<span class="iconify" data-icon="@custom:md:test"></span>
```

Syntax is similar to default icon syntax, but with addition of provider `[str]@custom` before icon name. Provider in icon name always starts with `[str]@`.

## One icon

This function adds one icon set in `[type]IconifyIcon` format.

If you want to add several icons or you have `[type]IconifyJSON` data, use function `[func]addCollection()` instead.
