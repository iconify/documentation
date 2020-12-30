```yaml
title: 'Iconify for React Function: getIcon'
types:
  IconifyIcon: '../../types/iconify-icon.md'
```

# Iconify for React function: getIcon

This tutorial is part of [Iconify for React with API functions tutorial](./index.md#functions).

Function `[func]getIcon()` retrieves icon data.

## Usage

Function has the following parameter:

- `[prop]name`, `[type]string`. Icon name.

Function returns icon data in `[type]IconifyIcon` format, `null` if icon is not available.

## Examples

```yaml
src: implementations/react-with-api/get-icon.js
title: 'Code:'
extra:
  - src: implementations/iconify/get-icon.json
    title: 'Result:'
```

```yaml
src: implementations/react-with-api/get-icon2.js
title: 'Code:'
extra:
  - src: implementations/iconify/get-icon2.json
    title: 'Result:'
```

```js
import { getIcon } from '@iconify/react-with-api';

// null
const data = getIcon('no-such-icon');
```
