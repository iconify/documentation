```yaml
title: 'Iconify SVG Framework Functions: renderSVG'
functions:
  renderHTML: './render-html.md'
  renderIcon: './render-icon.md'
```

# SVG Framework functions: renderSVG

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#render).

Function `[func]renderSVG()` creates `[tag]svg` element.

## Usage

Function has the following parameters:

- `[prop]name`, `[type]string`. Icon name.
- `[prop]customisations`. Optional customizations object.

Function returns `[tag]svg` element, `null` if icon is not available.

## Examples

```yaml
src: implementations/iconify/render-svg.js
title: 'Code:'
demo: true
demoTitle: 'Demo:'
extra:
  - src: implementations/iconify/render-svg.html
    title: 'HTML:'
```

```js
const node = document.createElement('div');
const icon = Iconify.renderSVG('bi:stopwatch', { rotate: 1, height: 'auto' });
node.appendChild(icon);
```

## Customizations

Second parameter is optional icon customizations. Do not confuse it with placeholder `[attr]data-` attributes.

Available customizations:

`include implementations/customisations`

For more details about dimensions and alignment see [icon dimensions documentation](./dimensions.md).

For more details about transformations see [icon transformations documentation](./transform.md).

## Rendering HTML

This function creates `[tag]svg` element. If you want to get `[type]string`, use `[func]renderHTML()` instead.
