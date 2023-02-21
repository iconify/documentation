```yaml
title: Unplugin Icons
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '60k'
    value: '${counters.icons-short}'
```

# Unplugin Icons

Unplugin Icons is a plug-in that dynamically generates icon components.

You can use it to render icons if you are building app using one of the following UI frameworks:

- React, Preact
- Vue 2.7+, Vue 3
- Svelte
- Solid
- Astro
- Qwik

With Unplugin Icons you can easily use [over 60,000 open source icons](../../../icons/icon-data.md) and custom icons with minimal code.

## How does it work? {#process}

It is a plug-in that works with practically all modern build tools, generating components dynamically as needed.

## React example {#react}

```tsx
import HomeIcon from '~icons/mdi/home';

function Demo() {
	return (
		<p>
			Home icon: <HomeIcon />
		</p>
	);
}
```

## Vue example {#vue}

Example of Vue template:

```vue
<script setup lang="ts">
import MdiHome from 'virtual:icons/mdi/home';
</script>

<template>
	<p>Home icon: <MdiHome /></p>
</template>
```

## Installation and usage

Installation and usage instructions depend on what build tools and UI framework you are using.

See [Unplugin Icons readme](https://github.com/antfu/unplugin-icons) for instructions.

## Examples

If you want to see full examples, which include both configuration and templates, check out [Unplugin Icons examples](https://github.com/antfu/unplugin-icons/tree/main/examples).
