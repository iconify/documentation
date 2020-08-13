```yaml
title: 'Iconify SVG Framework Function: getIcon'
types:
  IconifyIcon: '../../types/iconify-icon.md'
```

# SVG framework function: getIcon

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#getting-icons).

Function `[func]getIcon()` lists available icons.

## Usage

Function has the following parameter:

- `[prop]name`, `[type]string`. Icon name.

Function returns icon data in `[type]IconifyIcon` format, `null` if icon is not available.

## Examples

```yaml
src: implementations/iconify/get-icon.js
title: 'Code:'
extra:
  - src: implementations/iconify/get-icon.json
    title: 'Result:'
```

```yaml
src: implementations/iconify/get-icon2.js
title: 'Code:'
extra:
  - src: implementations/iconify/get-icon2.json
    title: 'Result:'
```

```js
Iconify.getIcon('no-such-icon');
// null
```
