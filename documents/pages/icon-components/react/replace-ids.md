```yaml
title: 'Iconify for React Function: replaceIDs'
functions:
  getIcon: './get-icon.md'
```

# Iconify for React function: replaceIDs

This tutorial is part of [Iconify for React functions tutorial](./index.md#functions).

`include icon-components/functions/replace-ids/intro-component`

## Usage

`include icon-components/functions/replace-ids/props`

## Example

`include icon-components/functions/replace-ids/example-component`

```js
import { replaceIDs, getIcon } from '@iconify/react';

// Get icon data
const data = getIcon('carbon:deploy');

// Get content
const body = replaceIDs(data.body);

console.log('Icon content:', body);
```
