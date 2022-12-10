```yaml
title: getIconCSS() in Iconify Utils
functions:
  getIconsCSS: './get-icons-css.md'
types:
  IconifyIcon: '../../types/iconify-icon.md'
  IconCSSIconOptions: './get-icon-css.md#options'
```

# getIconCSS()

This function is part of [Iconify Utils package](./index.md).

Function `[func]getIconCSS()` generates stylesheet to render icon as background image or mask image.

It generates code only for one icon. To generate code for multiple icons at the same time, see `[func]getIconsCSS()`.

To use icon in HTML, all you need to do is create any element, such as `[tag]span` with class name that you passed in `[prop]iconSelector` option.

## Color

Monotone icons are rendered as mask image with background color set to `[prop]currentColor`. That means icon will use same color as text.

To change icon color, simply change text color.

```yaml
include: common/css-demo
```

Icons with palette are rendered as background image.

## Usage

Function has the following parameters:

- `[prop]icon`, `[type]IconifyIcon`. Icon data.
- `[prop]options`, `[type]IconCSSIconOptions`. Options object, optional.

Function returns `[type]string` with stylesheet for icon.

## Options

Options object has the following properties:

- `[prop]iconSelector`, `[type]string`. Selector for icon, defaults to `[str].icon`.
- `[prop]pseudoSelector`, `[type]boolean`. Set it to `true` if selector for icon is a pseudo-selector, such as `[str].icon-home:after`.
- `[prop]varName`, `[type]string`. Name for variable to use for icon, defaults ti `[str]svg`. Set to `null` to disable.
- `[prop]forceSquare`, `[type]boolean`. Forces icon to have width of `[num]1em`.
- `[prop]mode`: `[str]mask` or `[str]background`. Forces icon to render as mask image or background image. If not set, mode will be detected from icon content: icons that contain `[prop]currentColor` will be rendered as mask image, other icons as background image.
- `[prop]format`. Stylesheet formatting option. Matches options used in Sass. Supported values: `[str]expanded`, `[str]compact`, `[str]compressed`.

## Result

Example of generated stylesheet:

```css
.icon {
	display: inline-block;
	width: 1em;
	height: 1em;
	background-color: currentColor;
	-webkit-mask: no-repeat center / 100%;
	mask: no-repeat center / 100%;
	-webkit-mask-image: var(--svg);
	mask-image: var(--svg);
	--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='%23000' d='M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z'/%3E%3C/svg%3E");
}
```

That code can be used in HTML with any element, such as `[tag]span` with class name that you passed in `[prop]iconSelector` option:

```html
<span class="icon"></span>
```

## Examples

Generating CSS for a monotone icon:

```yaml
src: tools/utils/get-icon-css.ts
title: 'generate-css.ts'
extra:
  - src: tools/utils/get-icon-css.css
    title: 'Result:'
  - src: tools/utils/get-icon-css.html
    title: 'Usage in HTML:'
```

Generating CSS for an icon with palette:

```yaml
src: tools/utils/get-icon-css2.ts
title: 'generate-css.ts'
extra:
  - src: tools/utils/get-icon-css2.css
    title: 'Result:'
  - src: tools/utils/get-icon-css2.html
    title: 'Usage in HTML:'
```

Using pseudo-element for icon:

```yaml
src: tools/utils/get-icon-css3.ts
title: 'generate-css.ts'
extra:
  - src: tools/utils/get-icon-css3.css
    title: 'Result:'
  - src: tools/utils/get-icon-css3.html
    title: 'Usage in HTML:'
```
