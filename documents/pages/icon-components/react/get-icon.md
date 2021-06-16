```yaml
title: 'Iconify for React Function: getIcon'
types:
  IconifyIcon: '../../types/iconify-icon.md'
```

# Iconify for React function: getIcon

This tutorial is part of [Iconify for React functions tutorial](./index.md#functions).

`include icon-components/functions/get-icon/intro`

## Usage

`include icon-components/functions/get-icon/props`

## Examples

```yaml
src: icon-components/react/get-icon.js
title: 'Code:'
extra:
  - src: icon-components/iconify/get-icon.json
    title: 'Result:'
```

```yaml
src: icon-components/react/get-icon2.js
title: 'Code:'
extra:
  - src: icon-components/iconify/get-icon2.json
    title: 'Result:'
```

```js
import { getIcon } from '@iconify/react';

// null
const data = getIcon('no-such-icon');
```
