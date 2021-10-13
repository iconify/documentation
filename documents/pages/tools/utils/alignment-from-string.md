```yaml
title: alignmentFromString() in Iconify Utils
types:
  IconCustomisations: './icon-customisations.md'
```

# alignmentFromString()

This function is part of [Iconify Utils package](./index.md).

Function `[func]alignmentFromString()` applies `[prop]align` shorthand property to `[type]IconCustomisations` object.

## Usage

Function has the following parameters:

- `[prop]custom`, `[type]IconCustomisations`. Customisations.
- `[prop]value`, `[type]string`. Value to parse.

Function does not return anything, it applies changes to object passed in first parameter.

## Value

Value can be set of the following strings, separated by space and/or comma:

- `[str]left`, `[str]center`, `[str]right` sets `[prop]hAlign` value.
- `[str]top`, `[str]middle`, `[str]bottom` sets `[prop]vAlign` value.
- `[str]slice` sets `[prop]slice` to `true`.
- `[str]meet` sets `[prop]slice` to `false`.

## Example

```yaml
src: tools/utils/alignment-from-string.ts
title: 'demo.ts'
```
