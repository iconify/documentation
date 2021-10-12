```yaml
title: defaults in Iconify Utils
types:
  FullIconifyIconCustomisations: './icon-customisations.md'
functions:
  iconToSVG: './icon-to-svg.md'
```

# defaults

This constant is part of [Iconify Utils package](./index.md).

Constant `[func]defaults` is used for default `[type]FullIconifyIconCustomisations` values.

## Usage

```ts
import { defaults } from '@iconify/utils/lib/customisations';

const fullCustomisations = {
	...defaults,
	height: 'auto',
};
```

Usually it is used with `[func]iconToSVG()` function.
