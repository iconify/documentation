```yaml
title: SVG in CSS
functions:
  getIconCSS: '../tools/utils/get-icon-css.md'
  getIconsCSS: '../tools/utils/get-icons-css.md'
```

# How to use SVG in CSS

You can use icons without any components.

Icon can be used as a background or mask image for any element, such as `[tag]span`. Then all you have to do in HTML is create a `[tag]span` tag with class name(s) used for icon:

```html
<span class="icon--mdi icon--mdi--home"></span>
```

Iconify offers several options to generate stylesheet:

- [Iconify API](../api/css.md). Dynamically generates CSS for icons. You can download CSS file or link to API.
- [UnoCSS](./unocss.md) automatically generates stylesheet during build process.
- For advanced users, [Iconify Utils](../tools/utils/index.md) offers `[func]getIconCSS()` and `[func]getIconsCSS()` functions. You can use it in your build process to generate CSS for icons.

## Details

How does it work?

There are several ways to use SVG in CSS:

- Content of pseudo-selector.
- Background image.
- Mask image, combined with background color set to `[prop]currentColor`.

First 2 methods can be used with icons that have hardcoded palette. If you use it with monotone icon that uses `[prop]currentColor`, it will be rendered black.

Last method can be used with monotone icons. Icon shape will be used as mask, which will be filled with `[prop]currentColor`, so it behaves similar to icon font, following text color.

```yaml
src: common/css-demo.html
title: 'HTML:'
css: common/css-demo.scss
cssTitle: 'Stylesheet:'
demo: true
demoTitle: 'Demo:'
class: css-demo css-demo-common
```

Below is detailed explanation of each method.

### Content in pseudo-selector

You can use SVG as `[prop]content` in pseudo-selector:

```css
/* SVG as pseudo element's content */
.test::after {
	content: url('https://api.iconify.design/bi/bell-fill.svg?height=16');
}
```

This method inserts SVG as external image, similar to `[html]<img />`.

Differences from other methods:

- Can be used for images with hardcoded palette.
- `[prop]currentColor` is ignored. You need icon to have hardcoded color, otherwise image will be black.
- Pseudo element is scaled to image dimensions. You should specify image dimensions in parameters when loading it from API.

### Background

You can use SVG as background image:

```css
/* SVG as pseudo element's background image */
.test::after {
	content: '';
	width: 1em;
	height: 1em;
	display: inline-block;
	background: url('https://api.iconify.design/bi/bell-fill.svg') no-repeat
		center center / 100% 100%;
}

/* SVG as background image */
.test {
	width: 1em;
	height: 1em;
	display: inline-block;
	background: url('https://api.iconify.design/bi/bell-fill.svg') no-repeat
		center center / 100% 100%;
}
```

Differences from other methods:

- Can be used for images with hardcoded palette.
- `[prop]currentColor` is ignored. You need icon to have hardcoded color, otherwise image will be black.
- You need to resize element (or pseudo element) to fit image.

### Mask

Mask, combined with background color set to `[prop]currentColor`, can be used to render monotone icons that use `[prop]currentColor` as icon color.

```css
/* SVG as pseudo element's mask image */
.test::after {
	content: '';
	width: 1em;
	height: 1em;
	display: inline-block;
	background-color: currentColor;
	-webkit-mask-repeat: no-repeat;
	mask-repeat: no-repeat;
	-webkit-mask-size: 100% 100%;
	mask-size: 100% 100%;
	-webkit-mask-image: url('https://api.iconify.design/bi/bell-fill.svg');
	mask-image: url('https://api.iconify.design/bi/bell-fill.svg');
}

/* SVG as mask image */
.test {
	width: 1em;
	height: 1em;
	display: inline-block;
	background-color: currentColor;
	-webkit-mask-repeat: no-repeat;
	mask-repeat: no-repeat;
	-webkit-mask-size: 100% 100%;
	mask-size: 100% 100%;
	-webkit-mask-image: url('https://api.iconify.design/bi/bell-fill.svg');
	mask-image: url('https://api.iconify.design/bi/bell-fill.svg');
}
```

Differences from other methods:

- Cannot be used for images with hardcoded palette because color is removed.
- `[prop]currentColor` is used to fill mask, so it can be used for monotone images without specifying color.
- You need to resize element (or pseudo element) to fit image.

## Demo

Why monotone icon cannot be used as background or content? Why icons with multiple colors cannot be used as mask? See demos below, which show what happens if you use icon incorrectly.

Various usages of monotone icon:

```yaml
src: common/css-demo-monotone.html
title: 'HTML:'
css: common/css-demo-monotone.scss
cssTitle: 'Stylesheet:'
demo: true
demoTitle: 'Demo:'
class: css-demo-monotone css-demo-common
```

Various usages of icon with hardcoded palette:

```yaml
src: common/css-demo-palette.html
title: 'HTML:'
css: common/css-demo-palette.scss
cssTitle: 'Stylesheet:'
demo: true
demoTitle: 'Demo:'
class: css-demo-palette css-demo-common
```
