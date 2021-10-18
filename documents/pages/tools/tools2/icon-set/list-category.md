```yaml
title: List icons in category in icon set
types:
  IconSet: './index.md'
  IconifyJSON: '../../../types/iconify-json.md'
```

# listCategory()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]listCategory()` lists icons that belong to a category.

Categories are used to filter icons when displayng icon set.

## Usage

Function has the following parameter:

- `[prop]category`, `[type]string`. Category name.

Function returns `[type]string[]` array of icon names.

Result does not include:

- Hidden icons (and their variations).
- Aliases.

For function parameter you can also use `[type]IconCategory` type instead of category name. This is internal type, you can find it in `[prop]categories` property in `[type]IconSet` instance.

## Example

```yaml
src: tools/tools2/icon-set/list-category.ts
title: 'example.ts'
```
