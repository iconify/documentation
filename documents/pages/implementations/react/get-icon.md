```yaml
title: 'Iconify for React Function: getIcon'
types:
  IconifyIcon: '../../types/iconify-icon.md'
```

# Iconify for React function: getIcon

This tutorial is part of [Iconify for React functions tutorial](./index.md#functions).

`include implementations/functions/get-icon/intro`

## Usage

`include implementations/functions/get-icon/props`

## Examples

```yaml
src: implementations/react/get-icon.js
title: 'Code:'
extra:
  - src: implementations/iconify/get-icon.json
    title: 'Result:'
```

```yaml
src: implementations/react/get-icon2.js
title: 'Code:'
extra:
  - src: implementations/iconify/get-icon2.json
    title: 'Result:'
```

```js
import { getIcon } from '@iconify/react';

// null
const data = getIcon('no-such-icon');
```
