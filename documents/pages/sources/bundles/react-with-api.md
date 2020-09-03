```yaml
title: Icon Bundles for Iconify for React
types:
  IconifyJSON: '../../types/iconify-json.md'
```

# Icon bundles for Iconify for React

This tutorial is a part of [Iconify icon bundles tutorial](./index.md) and [Iconify for React with API documentation](../../implementations/react-with-api/index.md).

Icon bundles make it easy to:

- Use icons offline.
- Preload frequently used icons, so icon data is available immediately and icons render instantly.

## Generating data

```yaml
include: sources/bundles/component-intro2
replacements:
  - search: Iconify for React
    replace: Iconify for React with API
  - search: '/react/'
    replace: '/react-with-api/'
```

## React components {#components}

There are two React components:

- [Basic React component](../../implementations/react/index.md).
- [React component with API support](../../implementations/react-with-api/index.md).

This documentation is for React component with API support. Documentation for basic React component is [available here](./react.md).

## Difference with SVG framework {#difference}

```yaml
include: sources/bundles/component-differences
```

## Bundle example

```yaml
include: sources/bundles/component-bundle
replacements:
  - search: iconify/react
    replace: iconify/react-with-api
```

## How to automate build process? {#automation}

```yaml
include: sources/bundles/automation
```
