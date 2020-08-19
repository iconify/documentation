```yaml
title: Transforming Icon in Iconify for Svelte
```

# Transformations

This tutorial is part of [Iconify for Svelte tutorial](./index.md).

`include implementations/transform-intro`

## CSS vs Iconify transformations {#css}

`include implementations/transform-compare`

Example:

```yaml
src: implementations/common/rotate-comparison.svelte
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

In example above, first icon is rotated using `[attr]rotate` attribute, second icon is rotated using CSS. First icon kept its 1em height, second icon became taller than it should be.

Sometimes you do want behaviour that CSS transformations provide. Then you can still use CSS transformations by adding it to inline style.

## Flip

You can flip icon horizontally and/or vertically.

One way to do that is to add `[attr]flip` attribute with comma separated values. Possible values:

- `[str]horizontal`: flip icon horizontally.
- `[str]vertical`: flip icon vertically.

You can also do that by setting `[attr]hFlip` and / or `[attr]vFlip` attributes to `[bool]true`.

Example:

```yaml
src: implementations/common/flip.svelte
hint: Using "flip" attribute
demo: true
extra:
  - src: implementations/common/flip-alt.svelte
    hint: Using "hFlip" and "vFlip" attributes
```

## Rotation

You can rotate icon by `[num]90`, `[num]180` and `[num]270` degrees.

To do that, add `[attr]rotate` attribute. Possible values:

- `[str]90deg`, `[str]1`: rotate by `[num]90` degrees.
- `[str]180deg`, `[str]2`: rotate by `[num]180` degrees.
- `[str]270deg`, `[str]3`: rotate by `[num]270` degrees.

Example:

```yaml
src: implementations/common/rotate.svelte
demo: true
```

## Rotate and flip

You can use both rotation and flip on an icon. The icon is flipped first, then rotated.
