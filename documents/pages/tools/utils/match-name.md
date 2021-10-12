```yaml
title: matchName in Iconify Utils
types:
  IconifyIconName: './icon-name.md'
functions:
  validateIcon: './validate-icon.md'
```

# matchName

This constant is part of [Iconify Utils package](./index.md).

Constant `[func]matchName` is used to validate all parts of icon name.

The only exception is provider. API provider can be empty, so additional check for empty provider is needed.

This constant is used by `[func]validateIcon()`.

## Usage

```ts
import { matchName } from '@iconify/utils/lib/icon';

function checkIcon(name: string): boolean {
	return !!name.match(matchName);
}

console.log(checkIcon('test-icon') ? 'passed' : 'failed');
```
