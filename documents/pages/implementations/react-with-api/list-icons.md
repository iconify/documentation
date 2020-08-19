```yaml
title: 'Iconify for React Function: listIcons'
```

# Iconify for React function: listIcons

This tutorial is part of [Iconify for React with API functions tutorial](./index.md#functions).

Function `[func]listIcons()` lists available icons.

## Usage

Function has the following optional parameters:

- `[prop]provider`, `[type]string`. Lists only icons from one API provider.
- `[prop]prefix`, `[type]string`. Lists only icons with specific prefix. Must be used in combination with provider (for Iconify public API provider is empty string `[str]""`).

Function returns array of icon names.

## Examples

```js
import { listIcons } from '@iconify/react-with-api';

// List all icons
console.log(listIcons());
```

```js
import { listIcons } from '@iconify/react-with-api';

// List all loaded Material Design Icons
console.log(listIcons('', 'mdi'));
// ["mdi:alert", "mdi:home", "mdi:account-box-outline", "mdi:eyedropper", "mdi:account-off", "mdi:account", "mdi:account-box", "mdi:account-cash"]
```
