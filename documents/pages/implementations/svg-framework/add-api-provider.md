```yaml
title: 'Iconify SVG Framework Function: addAPIProvider'
standalone: true
navigation: './functions.md'
```

# SVG framework function: addAPIProvider

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#api).

This function is part of API module and is not available in [bundle without API support](./without-api.md).

```yaml
include: implementations/functions/add-api-provider/intro
replacements:
  - search: component
    replace: SVG framework
```

## API providers

`include implementations/api-providers`

## Usage

`include implementations/functions/add-api-provider/props`

## Example

```js
Iconify.addAPIProvider('local', {
	// Array of host names
	resources: ['http://localhost:3000'],
});
```

```html
<span class="iconify" data-icon="@local:material-icons:home"></span>
```

`include implementations/functions/add-api-provider/footer`
