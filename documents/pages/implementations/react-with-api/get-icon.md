```yaml
title: 'Iconify for React Function: getIcon'
types:
  IconifyIcon: '../../types/iconify-icon.md'
```

# Iconify for React function: getIcon

`include notices/react-with-api`

This tutorial is part of [Iconify for React with API functions tutorial](./index.md#functions).

`include implementations/functions/get-icon/intro`

## Usage

`include implementations/functions/get-icon/props`

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
