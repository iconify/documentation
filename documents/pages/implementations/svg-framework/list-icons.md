```yaml
title: 'Iconify SVG Framework Function: listIcons'
```

# SVG Framework function: listIcons

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#getting-icons).

Function `[func]listIcons()` lists available icons.

## Usage

Function has the following optional parameters:

- `[prop]provider`, `[type]string`. Lists only icons from one API provider.
- `[prop]prefix`, `[type]string`. Lists only icons with specific prefix. Must be used in combination with provider (for Iconify public API provider is empty string `[str]""`).

Function returns array of icon names.

## Examples

```js
// List all icons
console.log(Iconify.listIcons());
```

```js
// List all loaded Material Design Icons
console.log(Iconify.listIcons('', 'mdi'));
// ["mdi:alert", "mdi:home", "mdi:account-box-outline", "mdi:eyedropper", "mdi:account-off", "mdi:account", "mdi:account-box", "mdi:account-cash"]
```
