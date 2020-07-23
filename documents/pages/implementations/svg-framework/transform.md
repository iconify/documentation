```yaml
title: Transforming Icons in Iconify SVG Framework
```

# Transformations

This tutorial is part of [Iconify SVG Framework tutorial](./index.md).

An icon can be rotated and flipped horizontally and/or vertically. All transformations are done relative to the center of the icon.

There are two types of transformations:

- Horizontal and vertical flip.
- Rotation by 90, 180 and 270 degrees.

## CSS vs Iconify transformations {#css}

These are not CSS transformations, transformations are applied inside SVG.

What's the difference from CSS transformations?

- If you rotate an icon by 90 degrees in CSS, icon's bounding box remains the same. 16x24 icon still takes space for 16x24, but might overlap elements around it.
- If you rotate an icon by 90 degrees in SVG Framework, icon's dimensions swap places. 16x24 icon becomes 24x16 icon and it does not affect elements around it.

Example:

```yaml
src: implementations/iconify/rotate-comparison.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

In example above, first icon is rotated using `[attr]data-rotate` attribute, second icon is rotated using CSS. First icon kept its 1em height, second icon became taller than it should be.

Sometimes you do want behaviour that CSS transformations provide. Then you can still use CSS transformations by adding it to inline style. If you are using stylesheet, add `[str]important!` after rule because `[tag]svg` already has a dummy transformation that fixes SVG rendering bug in Firefox.

## Flip

You can flip icon horizontally and/or vertically.

To do that, add `[attr]data-flip` attribute with comma separated values. Possible values:

- `[str]horizontal`: flip icon horizontally.
- `[str]vertical`: flip icon vertically.

Example:

```yaml
src: implementations/iconify/flip.html
demo: true
```

## Rotation

You can rotate icon by 90, 180 and 270 degrees.

To do that, add `[attr]data-rotate` attribute. Possible values:

- `[str]90deg`, `[str]1`: rotate by 90 degrees.
- `[str]180deg`, `[str]2`: rotate by 180 degrees.
- `[str]270deg`, `[str]3`: rotate by 270 degrees.

Example:

```yaml
src: implementations/iconify/rotate.html
demo: true
```

## Rotate and flip

You can use both rotation and flip on an icon. The icon is flipped first, then rotated.
