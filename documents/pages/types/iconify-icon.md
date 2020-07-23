```yaml
title: Iconify Icon Type
types:
  IconifyAlias: './iconify-alias.md'
  IconifyJSON: './iconify-json.md'
```

# IconifyIcon type

All Iconify libraries share common object structures. They are described as types in `[npm]@iconify/types` NPM package.

For description of types and short explanation of TypeScript see [types documentation](./index.md).

This article explains `[type]IconifyIcon` type.

## Structure

Type `[type]IconifyIcon` is a simple object. It has two parts:

- `[type]IconifyOptional` that describes all optional properties.
- `[prop]body` property that contains icon body. Type is `[type]string`.

Example of a basic icon:

```json
{
	"body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z\"/>"
}
```

## Body

Body contains contents of `[tag]svg`, without `[tag]svg` tag.

Why not store entire `[tag]svg`? Because:

- Contents can be manipulated, such as rotating or flipping an icon. This is much easier to do when there is no need to strip `[tag]svg` tag.
- It gives components full control over `[tag]svg` tag, allowing addition/removal of custom attributes.

What if you need to set custom attributes to `[tag]svg`? You shouldn't need to do that. Components should have full control over `[tag]svg`, setting all events, ids, titles, customizing `[attr]viewBox`, appending additional shapes. If you want to set something like `[attr]fill` or `[attr]stroke`, wrap contents in `[tag]g` tag with those attributes.

## Optional properties {#iconify-optional}

There are several properties that are shared in multiple types. They are described in `[type]IconifyOptional` type.

`include types/iconify-optional`

Example of typical icon data:

```json
{
	"body": "<path d=\"M7 6v12l10-6z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
}
```
