```yaml
title: 'Iconify for React Function: listIcons'
```

# Iconify for React function: listIcons

This tutorial is part of [Iconify for React functions tutorial](./index.md#functions).

`include implementations/functions/list-icons/intro`

## Usage

`include implementations/functions/list-icons/props`

## Examples

```js
import { listIcons } from '@iconify/react';

// List all icons
console.log(listIcons());
```

```js
import { listIcons } from '@iconify/react';

// List all loaded Material Design Icons
console.log(listIcons('', 'mdi'));
// ["mdi:alert", "mdi:home", "mdi:account-box-outline", "mdi:eyedropper", "mdi:account-off", "mdi:account", "mdi:account-box", "mdi:account-cash"]
```
