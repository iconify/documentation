```yaml
title: validateIconSet() in Iconify Utils
types:
  IconifyJSON: '../../types/iconify-json.md'
```

# validateIconSet()

This function is part of [Iconify Utils package](./index.md).

Function `[func]validateIconSet()` validates icon set, returning cleaned up `[type]IconifyJSON` object.

If there are errors in provided data:

- If error is critical, function will throw an exception.
- If error can be fixed, function will throw an exception, unless `[prop]fix` option is provided.

## Usage

Function has the following parameters:

- `[prop]data`, `[type]object`. Data to validate.
- `[prop]options`, `[type]object`. Optional options object.

### Options

Options object has the following properties:

- `[prop]fix`, `[type]boolean`. If set to `true`, function will attempt to fix errors whenver possible instead of throwing exception. Default value is `false`.
- `[prop]prefix`, `[type]string`. Default value for `[prop]prefix` property of icon set. If set, function will overwrite `[prop]prefix` in icon set with your value.
- `[prop]provider`, `[type]string`. Default value for `[prop]provider` property of icon set. If set, function will overwrite `[prop]provider` in icon set with your value.

## Example

```yaml
src: tools/utils/validate.ts
title: 'usage.ts'
```
