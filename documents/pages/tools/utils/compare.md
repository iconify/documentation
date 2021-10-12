```yaml
title: compare() in Iconify Utils
types:
  FullIconCustomisations: './icon-customisations.md'
```

# compare()

This function is part of [Iconify Utils package](./index.md).

Function `[func]compare()` imported from `[file]customisations/compare` is used for comparing 2 `[type]FullIconCustomisations` objects.

This function is meant to be used by icon components to detect changes in icon customisations generated from component properties.

## Usage

Function has the following parameters:

- `[prop]item1`, `[type]FullIconCustomisations`. First item.
- `[prop]item2`, `[type]FullIconCustomisations`. Second item.
- `[prop]compareDimensions`, `[type]boolean`. Optional. If `false`, properties `[prop]width` and `[prop]height` are not compared.

Function returns `true` if items match, `false` if not.

## Example

```yaml
src: tools/utils/compare.ts
title: 'example.ts'
```
