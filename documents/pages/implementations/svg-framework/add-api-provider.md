```yaml
title: 'Iconify SVG Framework Function: addAPIProvider'
standalone: true
navigation: './functions.md'
```

# SVG framework function: addAPIProvider

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#api).

This function is part of API module and is not available in [bundle without API support](./without-api.md).

Function `[func]addAPIProvider()` adds API provider.

This is an experimental feature, function might change any time!

## API providers

`include implementations/api-providers`

## Usage

Function has the following parameters:

- `[prop]provider`, `[type]string`. Provider ID.
- `[prop]config`, `[type]APIConfig`. API configuration object.

## Example

```js
Iconify.addAPIProvider('local', {
	// Array of host names.
	// Mutliple hosts allow redundancy: if one host is down, SVG framework will query another host.
	resources: ['http://localhost:3000'],
});
```

```html
<span class="iconify" data-icon="@local:material-icons:home"></span>
```
