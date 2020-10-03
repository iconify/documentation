```yaml
title: 'Iconify Icon Finder Components: Types'
types:
  IconCustomisations: ./types.md#icon-customisations
  PartialIconCustomisations: ./types.md#icon-customisations
  IconFinderState: ./types.md#icon-finder-state
```

# Components wrapper callback

This tutorial is part of [Iconify Icon Finder components tutorial](./index.md).

These types are used in components package.

## IconCustomisations {#icon-customisations}

Type `[type]IconCustomisations` represents icon customisations. It is a simple object with few properties:

- `[prop]color`, `[type]string`. Icon color.
- `[prop]width`, `[type]string`. Icon width.
- `[prop]height`, `[type]string`. Icon height.
- `[prop]rotate`, `[type]number`. Rotation. `[num]1` = `[num]90deg`, `[num]2` = `[num]180deg`, `[num]3` = `[num]270deg`.
- `[prop]hFlip`, `[type]boolean`. Horizontal flip.
- `[prop]vFlip`, `[type]boolean`. Vertical flip.

Type `[type]PartialIconCustomisations` is identical to `[type]IconCustomisations`, but all properties are optional.

You can find source code in `[file]src/misc/customisations.ts` of components package. To import type in your TypeScript code, use `[file]@iconify/search-components/lib/misc/customisations`.

## IconFinderState {#icon-finder-state}

Type `[type]IconFinderState` is used to send full state of Icon Finder instance. It is used in `[str]button` event. Value is a simple object with few properties:

- `[prop]icon`, `[type]Icon | null`. Selected icon.
- `[prop]route`, `[type]PartialRoute`. Current route.
- `[prop]customisation`, `[type]PartialIconCustomisations`. Customisations for selected icon.
- `[prop]config`, `[type]IconFinderConfig`. Icon Finder configuration.

All properties, except for `[prop]icon` are optional.

All values contain only modified elements. For example, if icon is not rotated, `[prop]customisation` will not have property `[prop]rotate`.

You can find source code in `[file]src/wrapper/state.ts` of components package. To import type in your TypeScript code, use `[file]@iconify/search-components/lib/wrapper/state`.
