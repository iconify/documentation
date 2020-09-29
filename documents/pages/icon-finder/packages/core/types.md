```yaml
title: Types in Iconify Icon Finder Core
classes:
  IconFinderCore: ./core.md
  Registry: ./registry.md
  Router: ./router.md
types:
  IconifyInfo: ../../../types/iconify-json-metadata.md#iconify-info
  RouterEvent: ./render.md#router-event
```

# Types in Iconify Icon Finder Core

This tutorial is part of [Iconify Icon Finder Core tutorial](./index.md).

Iconify Icon Finder Core is written in TypeScript. This has several major advantages:

- You can easily look up properties for objects, parameters for callbacks.
- When using a library written in TypeScript, editors such as VSCode will give you hints and autofill properties, making it much easier to use that library.
- Easier to avoid bugs. While core does have unit tests, TypeScript provides an additional layer of code checking, reducing the chance of bugs.

## Icon {#icon}

Each icon is represented by the `[type]Icon` type.

It has the following required properties:

- `[prop]provider`, `[type]string`. API provider, empty string for icons from Iconify Public API.
- `[prop]prefix`, `[type]string`. Icon prefix.
- `[prop]name`, `[type]string`. Icon name.

Other properties that represent icon metadata and are used only when displaying the collection:

- `[prop]tags`, `[type]string[]`. List of tags. In many icon sets tags (or categories) are used to categorise icons.
- `[prop]aliases`, `[type]string[]`. List of aliases. Some icons have several names, for example, `[str]home` and `[str]house`.
- `[prop]chars`, `[type]string[]`. List of characters. This is used when an icon is imported from icon font or has metadata for exporting an icon set to a font. An icon can have multiple characters, so this attribute is an array. Values are hexadecimal strings, such as `[str]f000`.
- `[prop]themePrefix`, `[type]string`. Theme prefix.
- `[prop]themeSuffix`, `[type]string`. Theme suffix. Prefix and suffix are used in some icon sets to create variations of the same icon, such as `[str]-solid` and `[str]-outline`. Value contains the title of prefix/suffix used to display prefix/suffix filter, such as `[str]Outline`.

To validate and compare icons, following functions are available:

- `[func]validateIcon(icon: Icon | null): boolean`. Returns `true` if icon is valid, `false` if invalid.
- `[func]compareIcons(icon1: Icon | null, icon2: Icon : null): boolean`. Returns `true` if both icons are valid and identical. This function does not take into account metadata.

To convert icon from/to string, the following functions are available:

- `[func]iconToString(icon: Icon): string`. Return string representation of icon, such as `[str]fa-solid:home`.
- `[func]stringToIcon(icon: string): Icon | null`. Returns `[type]Icon` object, `null` if it fails to convert.

## IconsList {#icons-list}

Type `[type]IconsList` is used to set icons for a [custom view](./custom-view.md).

It is an array of icon names. Each array entry can be one of the following types:

- `[type]Icon`. Icon name as object.
- `[type]string`. Icon name as string, such as `[icon]mdi:home`.

You can mix those types if you want to, function will convert all entries to `[type]Icon` type.

Example:

```js
const icons: IconsList = [
	'bi:bag',
	'bi:bell-fill',
	{
		provider: '',
		prefix: 'bi',
		name: 'stopwatch',
	},
];

core.router.setCustomIcons('recent', icons);
```

## Route {#route}

Route is represented by several types:

- `[type]CollectionsRoute`. Collections list route (browsing all icon sets).
- `[type]CollectionRoute`. Collection view route (browsing one icon set).
- `[type]SearchRoute`. Search results.
- `[type]CustomRoute`. Custom icons list.

There are generic types that represent any route:

- `[type]Route`. Any route mentioned above.
- `[type]PartialRoute`. `[type]Route` with all parameters being optional.

When rendering UI, Icon Finder Core provides data as `[type]PartialRoute`, so route parameters include only properties that are different from the default and include parent route only if the parent route exists.

For more information about routes, see [routes documentation](./routes.md).

## CollectionInfo {#collection-info}

This type is used to show information about an icon set.

It extends type `[type]IconifyInfo` from `[npm]@iconify/types` package.

`include types/iconify-info`

`include types/collection-info`

## RouterEvent {#router-event}

Type `[type]RouterEvent` is an object contains data needed to update UI. It is used in the render callback.

See [render callback documentation](./render.md) for details.
