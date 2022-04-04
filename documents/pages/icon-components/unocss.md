```yaml
title: UnoCSS with Iconify
```

# UnoCSS with Iconify

UnoCSS is similar to Windi CSS, Tailwind CSS, Twind, but it generates stylesheet on demand. Among its features, it has `[npm]@unocss/preset-icons` package, which generates icons and uses Iconify for icon data.

## Usage

If you use this in your UI:

```html
<div class="i-carbon-logo-github" />
```

UnoCSS will generate stylesheet for it:

```css
.i-carbon-logo-github {
	--un-icon: url("data:image/svg+xml;utf8,%3Csvg preserveAspectRatio='xMidYMid meet' viewBox='0 0 32 32' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z'/%3E%3C/svg%3E");
	mask: var(--un-icon) no-repeat;
	mask-size: 100% 100%;
	-webkit-mask: var(--un-icon) no-repeat;
	-webkit-mask-size: 100% 100%;
	background-color: currentColor;
	width: 1em;
	height: 1em;
}
```

For monotone icons it uses `[attr]mask` (as you can see from example above), which renders icon with text color, for icons with palette it uses `[attr]background`.

For more information see [UnoCSS GitHub repository](https://github.com/unocss/unocss) and [preset-icons package](https://github.com/unocss/unocss/tree/main/packages/preset-icons/).

## Custom icons

You can use UnoCSS with custom icons. During build process you can import, clean up and optimise icons using [Iconify Tools](../tools/tools2/index.md).

See [demo from Iconify Tools package](https://github.com/iconify/tools/tree/main/%40iconify-demo/unocss). Configuration is in `[file]unocss.config.ts`.
