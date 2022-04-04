```yaml
title: Iconify Components
replacements:
  - code: '/2/2.0.0/'
    value: '/${iconify2.version.major}/${iconify2.version.full}/'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '70+'
    value: '${counters.sets}+'
```

# Iconify components

Iconify was originally designed to replace outdated icon fonts with modern SVG framework, while offering ease of use that icon fonts are famous for. Since then Iconify has evolved. It offers more icons than any other solution and various components for web app frameworks.

## Icon components

Icon components are used to render icons.

At first, there were only [Iconify icon components](../icon-components/index.md), but later, as project evolved, multiple third party components have been created.

Data for 70+ icon sets and utilities to work with that data are all open source and can be used by anyone, allowing developers to create components for various frameworks.

### Iconify icon components

[Iconify icon components](../icon-components/index.md) rely on [Iconify API](../api/index.md) to dynamically load icon data as needed. That makes them easy to use, without any configuration.

Available components:

`include icon-components/components`

These components are easy to use: import icon component and pass parameter with icon name. Component will dynamically load data for icon from API and render it.

```svelte
<script>
  import Icon from '@iconify/svelte';
</script>

<div>
  <Icon icon="mdi:home-outline" />
  <Icon icon="tabler:building-pavilon" style="color: red; font-size: 24px" />
</div>
```

Where `[str]mdi` is name of icon set, `[str]home-outline` is name of icon.

For more details, see [Iconify icon components](../icon-components/index.md).

#### SVG framework

Additionally, [Iconify SVG framework](../icon-components/svg-framework/index.md) is available. It is similar to components listed above (and shares common code), but works as simple script without any UI framework. It is a modern replacement for outdated icon fonts.

It offers all the advantages of icons fonts:

- Syntax is very simple and similar to icon fonts: it uses a placeholder element with `[attr]class` set to `[str]iconify` and `[attr]data-icon` attribute with icon name. SVG framework searches for those elements in DOM and replaces them with `[tag]svg`.
- You can change size and color by changing `[attr]font-size` and `[attr]color` in stylesheet.

It does not have disadvantages of icons fonts:

- SVG framework renders pixel-perfect SVG, not blurred glyphs.
- Only icons that are used on page are loaded. This means no bandwidth wasted on loading icons you do not need. This also made it possible to offer over 60k icons.

```yaml
src: icon-components/iconify/script.html
```

```html
<span class="iconify" data-icon="mdi:home-outline"></span>
<span
	class="iconify"
	data-icon="tabler:building-pavilon"
	style="color: red; font-size: 24px"
></span>
```

For more details, see [Iconify SVG framework](../icon-components/svg-framework/index.md).

### Unplugin Icons

[unplugin-icons](../icon-components/unplugin-icons.md) generates icon components on demand, developed by Anthony Fu.

It does not use Iconify API, instead it bundles icon data during build time, so everything is contained within generated bundle.

It generates icon components for the following frameworks:

`include icon-components/unplugin-icons-frameworks`

```jsx
import IconAccessibility from '~icons/carbon/accessibility';
import IconAccountBox from '~icons/mdi/account-box';

function App() {
	return (
		<div>
			<IconAccessibility />
			<IconAccountBox style={{ fontSize: '2em', color: 'red' }} />
		</div>
	);
}
```

Latest documentation is available at [unplugin-icons GitHub repository](https://github.com/antfu/unplugin-icons).

### UnoCSS

[UnoCSS](../icon-components/unocss.md) is similar to Windi CSS, Tailwind CSS, Twind, but it generates stylesheet on demand. Among its features, it has `[npm]@unocss/preset-icons` package, which generates icons and uses Iconify for icon data.

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

### Astro Icon

Astro Icon is a component for Astro static site builder.

Usage example:

```jsx
---
import { Icon } from 'astro-icon';
---

<Icon pack="mdi" name="account" />
<Icon name="mdi:account" />
```

For more information see [Astro Icon GitHub repository](https://github.com/natemoo-re/astro-icon).

## Icon finder

[Iconify Icon Finder](../icon-finder/index.md) is currently in development.

Icon Finder is a component for searching icons. It can be used add icon search functionality to various tools, such as website builders, tools for customizing UI and so on. If you want your users to be able to pick icons, Icon Finder can be adapted to your needs.

It uses [Iconify API](../api/index.md) to get list of icons, icon data and to search for icons.

Early development version of Icon Finder is used in [Figma plug-in](../design/figma/index.md), [Sketch plug-in](../design/sketch/index.md) and [icon sets website](https://icon-sets.iconify.design/).
