```yaml
title: 'Iconify for React Function: addAPIProvider'
standalone: true
navigation: './index.md'
```

# Iconify for React function: addAPIProvider

This tutorial is part of [Iconify for React functions tutorial](./index.md#functions).

`include implementations/functions/add-api-provider/intro`

## API providers

`include implementations/api-providers`

## Usage

`include implementations/functions/add-api-provider/props`

## Example

```jsx
import { addAPIProvider, Icon } from '@iconify/react';

addAPIProvider('local', {
	// Array of host names
	resources: ['http://localhost:3000'],
});

// Demo using provider in icon name
export function renderHomeIcon() {
	return <Icon icon="@local:material-icons:home" />;
}
```

`include implementations/functions/add-api-provider/footer`
