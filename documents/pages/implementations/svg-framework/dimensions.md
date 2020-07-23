```yaml
title: Changing Icon Dimensions in Iconify SVG Framework
```

# Icon dimensions

This tutorial is part of [Iconify SVG Framework tutorial](./index.md).

By default, icon height is set to `[str]"1em"`, icon width is changed dynamically based on the icon's width to height ratio.

This makes it easy to change icon size by changing `[attr]font-size` in the stylesheet or in style, just like icon fonts:

```yaml
src: implementations/iconify/size-demo.html
title: 'HTML:'
css: iconify/size-demo.scss
cssTitle: 'Stylesheet:'
demo: true
demoTitle: 'Demo:'
class: iconify2-size-demo
```

## data- attributes {#data}

You can also set dimensions by using `[attr]data-width` and `[attr]data-height` attributes. Then `[prop]font-size` will not have effect on icon, unless you set height in units that are relative to `[prop]font-size`, such as `[str]em`.

```yaml
src: implementations/iconify/size-demo-data.html
title: 'HTML:'
demo: true
demoTitle: 'Demo:'
```

In this example, first icon has height of `[num]24px`, second icon has height of `[num]36px` (`[num]2 * 18px`), third icon has height `[num]72px`.

## Setting only width or height

In examples above, all icons only use `[prop]height`.

What happens when only one dimension is set?

- If width is not set, but height is set, width is calculated using icon's width/height ratio.
- If height is not set, but width is set, height is calculated using icon's height/width ratio.
- If no dimensions are set in attributes, height is set to `[str]1em` and width is calculated using icon's width/height ratio. Then icon behaves like text and can be resized using `[prop]font-size` in stylesheet.

### Example

Many icons are square. For such icons if you set one dimension, other dimension will have the same value.

However, there are many icons that are not square. For example, icons imported from icon fonts and Font Awesome.

This is data for `[icon]fa-regular:address-book`:

```yaml
src: common/fa-address-book.json
title: 'fa-regular:address-book'
hint: Icon size is 448 x 512
```

If you do not set any dimensions, `[prop]height` will be set to `[str]1em` and `[prop]width` will be set to `[num]448 / 512` = `[str]0.875em`. However, SVG Framework rounds up values that are too long, so actual `[prop]width` will be `[str]0.88em`:

```html
<svg
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	aria-hidden="true"
	focusable="false"
	role="img"
	class="iconify iconify--fa-regular"
	width="0.88em"
	height="1em"
	preserveAspectRatio="xMidYMid meet"
	viewBox="0 0 448 512"
	style="transform: rotate(360deg);"
>
	<path d="..." fill="currentColor"></path>
</svg>
```

If you set `[prop]width` to `[num]56`, but do not set `[prop]height`, `[prop]height` will be set to `[num]56 * 512 / 448` = `[num]64`:

```html
<svg width="56" height="64" ...>
	...
</svg>
```

If you set both values: `[prop]width` to `[num]56` and `[prop]height` to `[num]128`, values will be as you set them (also see `[str]Alignment` section below):

```html
<svg width="56" height="128" ...>
	...
</svg>
```

## Alignment

What if you set both `[prop]width` and `[prop]height` and its ratio doesn't match icon's width/height ratio?

For example, what will happen if icon is 24x24, but you set one dimension to `[num]40` and other dimension to `[num]24`?

```yaml
src: implementations/iconify/alignment.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

SVG do not behave like other images. When you set wrong width/height ratio for other image formats, images get stretched. When you do that for SVG, bounding box is changed and image is aligned inside that bounding box.

In an example above, one icon is too wide and other icon is too tall. Browser will move icons to centre instead of stretching icon.

### Slice

Instead of adding space around icon to fit it in bounding box, browser can also cut parts of icon that do not fit.

To cut parts of icon, add `[attr]data-align="slice"` to icon:

```yaml
src: implementations/iconify/alignment-slice.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Horizontal alignment {#horizontal}

When...

- icon is too wide...
- icon is too tall and slice is enabled...

...you can align icon horizontally.

To align icon, you can add one of these 3 values to `[attr]data-align` attribute:

- `[str]left`
- `[str]center` (default)
- `[str]right`

Examples of aligning wide icon with slice disabled:

```yaml
src: implementations/iconify/alignment-horizontal.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning tall icon with slice enabled:

```yaml
src: implementations/iconify/alignment-horizontal-slice.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical alignment {#vertical}

When...

- icon is too tall...
- icon is too wide and slice is enabled...

...you can align icon vertically.

To align icon, you can add one of these 3 values to `[attr]data-align` attribute:

- `[str]top`
- `[str]middle` (default)
- `[str]bottom`

Examples of aligning tall icon with slice disabled:

```yaml
src: implementations/iconify/alignment-vertical.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

Examples of aligning wide icon with slice enabled:

```yaml
src: implementations/iconify/alignment-vertical-slice.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```

### Vertical and horizontal alignment {#full-alignment}

You can add both horizontal and vertical alignment to icon.

One of alignments will have no effect. For example, if icon is too tall, horizontal alignment is ignored because icon is already aligned to both left and right sides.

```yaml
src: implementations/iconify/alignment-both.html
demo: true
demoHint: Using box-shadow to show icon dimensions
class: highlight-box
```
