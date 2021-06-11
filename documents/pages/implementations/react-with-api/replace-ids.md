```yaml
title: 'Iconify for React Function: replaceIDs'
functions:
  getIcon: './get-icon.md'
```

# Iconify for React function: replaceIDs

`include notices/react-with-api`

This tutorial is part of [Iconify for React with API functions tutorial](./index.md#functions).

Function `[func]replaceIDs()` finds IDs in SVG and replaces them with unique random IDs.

This function is meant to be used when you generate `[tag]svg` element yourself using data provided by `[func]getIcon()`.

## Usage

Function has the following parameters:

- `[prop]data`, `[type]string`. Icon content.
- `[prop]prefix`, `[type]string | function`. Optional prefix for generated IDs. It can be a `[type]string` or a callback that returns `[type]string`.

Function returns `[type]string` containing icon data with IDs replaced.

## Example

This is a rather useless example. In real core this function is used when generating SVG code samples in Icon Finder, which is not as simple as this example.

```js
import { replaceIDs, getIcon } from '@iconify/react-with-api';

// Get icon data
const data = getIcon('carbon:deploy');

// Get content
const body = replaceIDs(data.body);

console.log('Icon content:', body);
```
