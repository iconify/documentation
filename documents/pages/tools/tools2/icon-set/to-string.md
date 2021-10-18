```yaml
title: Convert icon to string in icon set
types:
  IconSet: './index.md'
```

# toString()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]toString()` exports icon as string.

## Usage

Function has the following parameter:

- `[prop]name`, `[type]string`. Icon name.

Function returns rendered icon as `[type]string` on success, `[type]null` if icon does not exist.

## Example

```yaml
src: tools/tools2/icon-set/to-string.ts
title: 'example.ts'
extra:
  - src: tools/tools2/icon-set/to-string.svg
    title: 'Result:'
```
