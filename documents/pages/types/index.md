```yaml
title: Iconify Types
types:
  IconifyIcon: './iconify-icon.md'
  IconifyAlias: './iconify-alias.md'
  IconifyJSON: './iconify-json.md'
  IconifyInfo: './iconify-info.md'
```

# Iconify types

All Iconify libraries share common object structures. They are described as types in `[npm]@iconify/types` NPM package.

## TypeScript

All types are described with TypeScript.

If you are not familiar with TypeScript, but are familiar with JavaScript, it should not be hard to understand this documentation because it is mostly just basic types.

Few things that you need to know to understand types:

### object

Some Iconify code is written in PHP, yet refers to this documentation for description of types.

Object in JavaScript is the same as associative array in PHP. That is every entry has unique key and value.

### Record

Type `[type]Record<string, number>` is an object, where key is `[type]string`, value is `[type]number`.

For PHP developers it is an associative array.

### unknown

Type `[type]unknown` means value can be any type.

### extends

```ts
interface Foo extends Bar, Baz {}
```

This means one type extends another type. In the example above, type `[type]Foo` has all properties of types `[type]Bar` and `[type]Baz`.

## Main types

There are two main types that are used in Iconify ecosystem:

Type `[type]IconifyIcon` is used for representing one icon.

Type `[type]IconifyJSON` is used for representing an entire icon set. It stores icons, aliases and various metadata.

## Additional types

Type `[type]IconifyAlias` is used for icon aliases.

Type `[type]IconifyInfo` is used for icon set information.
