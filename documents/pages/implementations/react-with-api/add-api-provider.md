```yaml
title: 'Iconify for React Function: addAPIProvider'
standalone: true
navigation: './index.md'
```

# Iconify for React function: addAPIProvider

`include notices/react-with-api`

This tutorial is part of [Iconify for React with API functions tutorial](./index.md#functions).

Function `[func]addAPIProvider()` adds API provider.

This is an experimental feature, function might change any time!

## API providers

`include implementations/api-providers`

## Usage

Function has the following parameters:

- `[prop]provider`, `[type]string`. Provider ID.
- `[prop]config`, `[type]APIConfig`. API configuration object.

## Example

```jsx
import { addAPIProvider, Icon } from '@iconify/react-with-api';

addAPIProvider('local', {
	// Array of host names.
	// Mutliple hosts allow redundancy: if one host is down, SVG framework will query another host.
	resources: ['http://localhost:3000'],
});

// Demo using provider in icon name
export function renderHomeIcon() {
	return <Icon icon="@local:material-icons:home" />;
}
```
