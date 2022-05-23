```yaml
title: Iconify Icon Web Component
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '0.0.4'
    value: '${iconify-icon.version}'
types:
  IconifyIcon: '../types/iconify-icon.md'
functions:
  addCollection: './add-collection.md'
  addIcon: './add-icon.md'
  iconExists: './icon-exists.md'
  listIcons: './list-icons.md'
  loadIcons: './load-icons.md'
  loadIcon: './load-icon.md'
  getIcon: './get-icon.md'
  enableCache: './enable-cache.md'
  disableCache: './disable-cache.md'
  addAPIProvider: './add-api-provider.md'
  buildIcon: './build-icon.md'
  setFetch: './set-fetch.md'
```

# Iconify icon web component

Iconify icon web component renders icons.

## Usage

It is designed to be as easy to use as possible.

```yaml
src: icon-components/icon/usage.html
demo: true
class: sample-big
```

## Icon data on demand

Instead of embedding an entire icon, all you need to do is provide an icon name in `[prop]icon` attribute.

Web component will retrieve icon data from [Iconify API](../api/index.md), then will render SVG in shadow DOM.

Don't want to rely on third party API servers? You can [use web component without API](./without-api.md) or you can [host your own Iconify API](../api/hosting.md).

## Shadow DOM

Icon is rendered in shadow DOM. What does that mean?

- HTML for icon is hidden, not part of main document.
- It simplifies hydration when web component is used in a UI framework with server side rendering. See below.
- Stylesheet used in document does not affect icons, preventing potential conflicts.

In some cases this can be a disadvantage, for example, if you do want to access icon content to perform CSS or JavaScript based animations. If you do not want a web component that uses shadow DOM, take a look at [Iconify icon components](../icon-components/index.md).

### SSR hydration {#ssr}

One of issues web component solves is hydration, which is used by many modern UI frameworks.

Server side rendering is becoming more and more popular, hydration is complex and can easily be broken by a mismatched DOM.

What is hydration? It happens when bare document is generated on server, sent to browser, in browser UI framework makes it interactive by attaching event liseners to HTML generated on server instead of rendering new application. It is actually more complex than that, see various articles on SSR hydration.

There are several issues with hydrating icons:

- Icons might have unique IDs in elements, such as masks and clip paths. Using multiple icons on the same page requires using different IDs (or randomising them), which usually breaks hydration process.
- Dynamically loaded icon data cannot be rendered before hydration ends. This can be solved by rendering icon only after component has been mounted, but that might cause rendering delays and other issues.

Shadow DOM used by web components solves hydration problems. When UI framework renders icon on server, it only renders `[tag]iconify-icon` element. During hydration process, UI framework only checks `[tag]iconify-icon` element, but not actual icon. This means:

- Server side can generate only `[html]<iconify-icon icon="mdi:home"></iconify-icon>`, reducing document size.
- Web component can load icon data and render it immediately and independant from UI framework, not waiting for UI framework to mount component.
- No issues with duplicate unique IDs. Each icon has its own document, so no need to change IDs of icon elements.
- Faster hydration. Icons can be complex, not checking icon content means less work for UI framework.

Using shadow DOM to render icon leads to better experience for developers. No need to configure anything, no need to worry about icon data, no need to worry about conflicts. It just works.

## Why not use icon font? {#icon-font}

Shadow DOM used by web component has big advantages over usual SVGs or framework specific components, but what about icon fonts?

Do not use icon fonts!!!

- Icon fonts are ugly. Browser renders icons using font rendering methods, which causes blurred icon edges and icons lose their sharpness.
- Icons rendered from icon fonts are often hard to align, resulting in misaligned icons.
- Browsers load huge fonts just to render few icons. This can be solved by using custom icon fonts, but doesn't solve other issues.
- No colored icons, only monotone. No SVG animations.

Icon fonts do not belong in modern web. They were a great solution when Internet Explorer was popular, web components did not exist and SVG support was buggy. Those bad times are over.

## Registering web component

For web component to work, it needs to be registered. `[npm]iconify-icon` package does that automatically. All you need to do is include it on page.

If you are building a project with a bundler, you can include the script by installing `[npm]iconify-icon` as a dependency and importing it in your project:

```js
import 'iconify-icon';
```

If you are not using bundles or want icon web component to be imported separately, add script to your document:

```html
<script src="https://code.iconify.design/iconify-icon/0.0.4/iconify-icon.min.js"></script>
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/iconify-icon@0.0.4/dist/iconify-icon.min.js"></script>
```

## Attributes

There are several attributes to customise icon appearance.

To change color (color can be changed only for monotone icons) or size, use style:

```yaml
src: icon-components/icon/color-size.html
demo: true
class: sample-big
```

You can also change size using `[attr]width` and/or `[attr]height` attributes:

```yaml
src: icon-components/icon/size.html
demo: true
```

If only one size attribute is set, another attribute is calculated using icon's width/height ratio.

You can also transform icon. Unlike CSS transformations, these transformations are done inside icon, which also affects icon's `[prop]viewBox`:

```yaml
src: icon-components/icon/transform.html
demo: true
```

### Attributes list

All attributes are also available as properties, so you can access them easy in JavaScript when working with elements.

Required attribute:

- `[prop]icon`, `[type]IconifyIcon | string` icon name or icon data. Because attributes can only be strings, if you want to provide `[type]IconifyIcon` data, you need to either use property or `[js]JSON.stringify()` it. See [icon data](./icon.md).

Optional attributes:

- `[prop]mode`, `[type]string` sets icon rendering mode. Seee [rendering modes](./modes.md).
- `[prop]inline`, `[type]boolean` toggles inline or block mode. See [inline mode](./inline.md).
- `[prop]width`, `[type]string | number` icon width. See [icon dimensions](./dimensions.md).
- `[prop]height`, `[type]string | number` icon height. See [icon dimensions](./dimensions.md).
- `[prop]flip`, `[type]string` flip icon. See [icon transformations](./transform.md).
- `[prop]rotate`, `[type]number | string` rotates icon. See [icon transformations](./transform.md).

## Functions

In addition to properties, web component offers several functions to control it.

Functions can be imported from:

- `[npm]iconify-icon` package, which also bundles web component. Usable in browser and Node.js.
- Web component class as static methods, which is available after component is registered.
- `[tag]iconify-icon` node as methods, which are available after component is registered and new elements are created.

First method is the most reliable because it is a simple import. It is used in all examples:

```js
import { iconExists } from 'iconify-icon';
console.log(iconExists('mdi:home'));
```

For second method, class can be retrieved from custom elements registry:

```js
const IconifyIcon = window.customElements.get('iconify-icon');
console.log(IconifyIcon.iconExists('mdi:home'));
```

Third method can be used after creating a new icon element or accessing an existing element:

```js
const node = document.createElement('iconify-icon');
console.log(node.iconExists('mdi:home'));
```

Functions are split in several groups (click function name to see more details and examples):

### Check available icons {#getting-icons}

```yaml
include: icon-components/components/functions-list/getting-icons
```

### Adding icons {#adding-icons}

```yaml
include: icon-components/components/functions-list/adding-icons
```

### Helper functions {#helper}

```yaml
include: icon-components/components/functions-list/helpers
```

### API functions {#api}

```yaml
include: icon-components/components/functions-list/api
```

### Internal API functions {#internal}

```yaml
include: icon-components/components/functions-list/internal
```
