```yaml
title: mergeCustomisations() in Iconify Utils
types:
  FullIconCustomisations: './icon-customisations.md'
functions:
  validateIcon: './validate-icon.md'
```

# mergeCustomisations()

This function is part of [Iconify Utils package](./index.md).

Function `[func]mergeCustomisations()` converts object to `[type]FullIconCustomisations` type. It also validates types, so it can be used to clean up user input.

## Usage

Function has the following parameters:

- `[prop]value`, `[type]string`. Icon name.
- `[prop]validate`, `[type]boolean`. Optional. If `true`, icon name will be validated using `[func]validateIcon()`.
- `[prop]allowSimpleName`, `[type]boolean`. Optional. If `true`, simple names without prefix are considered valid.
- `[prop]provider`, `[type]string`. Optional. API provider to add to icon name if provider is missing.

Function returns icon name with type `[type]IconifyIconName` on success, `[type]null` on failure.

## Example

```yaml
src: tools/utils/string-to-icon.ts
title: 'examples.ts'
```
