```yaml
title: getIconData() in Iconify Utils
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyIcon: '../../types/iconify-icon.md'
  FullIconifyIcon: './full-iconify-icon.md'
```

# getIconData()

This function is part of [Iconify Utils package](./index.md).

Function `[func]getIconData()` retrieves data for one icon from icon set.

## Usage

Function has the following parameters:

- `[prop]data`, `[type]IconifyJSON`. Icon set data.
- `[prop]name`, `[type]string`. Icon name.
- `[prop]full`, `[type]boolean`. Optional. If set, result will include full icon data `[type]FullIconifyIcon`, which is needed for functions such as `[func]iconToSVG()`.

## Example

```yaml
src: tools/utils/get-icon.ts
title: 'usage.ts'
demo: tools/utils/get-icon.html
demoTitle: 'Result:'
```
