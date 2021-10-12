```yaml
title: IconifyIconCustomisations Type
standalone: true
navigation: './index.md'
types:
  IconifyIconSize: './icon-customisations.md#icon-size'
functions:
  defaults: './defaults.md'
  iconToSVG: './icon-to-svg.md'
```

# IconifyIconCustomisations type

`[type]IconifyIconCustomisations` type is used in [Iconify Utils](./index.md) in functions for generating SVG.

You can find this type in `[file]src/customisations/index.ts` of [Iconify Utils source code](https://github.com/iconify/iconify/tree/master/packages/utils).

Type is an object, with the following properties, split into groups:

## Display mode

Display mode has only one property:

- `[prop]inline`, `[type]boolean`. `true` if generated icon should have negative `[prop]verticalAlign`.

Adding `[str]verticalAlign: -0.125em` makes icon aligned below baseline, so it behaves like an icon font glyph instead of image.

## Dimensions {#icon-size}

Icon dimensions have 2 properties:

- `[prop]width`, `[type]IconifyIconSize` icon width.
- `[prop]height`, `[type]IconifyIconSize` icon height.

Type `[type]IconifyIconSize` is alias for `[type]null | string | number`. Possible values are:

- `[type]null` not set.
- `[type]number` number in pixels.
- `[type]string` number with units, such as `[str]1em`.
- `[str]auto` is a special keyword, which sets dimension to value from icon's `[attr]viewBox`. So if icon has `[attr]viewBox="0 0 24 24"`, setting `[prop]width` to `[str]auto` sets it to `[num]24`.

When calculating icon dimensions, setting one dimension (usually `[attr]height`) is enough. Another dimension will be automatically calculated using icon's proportions.

If both `[prop]width` and `[prop]height` are not set (or `null`), by default `[prop]height` will be set to `[str]1em`.

## Alignment

Unlike other images, if you use incorrect proportions for icon dimensions, SVG does not stretch.

So if you set both `[prop]width` and `[prop]height` with proportions that do not match icon's proportions, you can align icon using these properties:

- `[prop]hAlign` is for horizontal alignment. Possible values are `[str]left`, `[str]center` (default), `[str]right`.
- `[prop]vAlign` is for vertical alignment. Possible values are `[str]top`, `[str]middle` (default), `[str]bottom`.
- `[prop]slice`, `[type]boolean` tells browser how to fill icon. If `true`, icon will be resized to fill entire area, slicing parts that do not fit. If `false` (default), icon will be resized to fit, adding extra space on sides.

## Transformations

Icon can be transformed. Transformations are done by rotating or flipping content inside SVG, these are not CSS transformations. Properties for transforming icon:

- `[prop]hFlip`, `[type]boolean`. Flips icon horizontally.
- `[prop]vFlip`, `[type]boolean`. Flips icon vertically.
- `[prop]rotate`, `[type]number`. Rotates icon in 90 degrees steps. `[num]1` is `[prop]90deg`, `[num]2` is `[prop]180deg`, `[num]3` is `[prop]270deg`. Rotation is limited only to these angles because these angles guarantee that icon content does not go beyond `[prop]viewBox` boundaries. If you want to rotate using different angle, use CSS rotation that rotates an entire icon with bounding box.

## FullIconifyIconCustomisations type

Type `[type]FullIconifyIconCustomisations` is the same as `[type]IconifyIconCustomisations`, but all properties are required.

Use `[func]default` constant to get all default values and merged it with your values:

```ts
import { defaults } from '@iconify/utils/lib/customisations';

const fullCustomisations = {
	...defaults,
	hFlip: true,
};
```

Then result can be used with `[func]iconToSVG()` function.
