```yaml
title: Split Icon Packages
types:
  IconifyIcon: '../types/iconify-icon.md'
functions:
  exportIconPackage: '../tools/tools2/export/icon-package.md'
```

# Split icon packages

There are several packages available that contain all icons, see [icon sets documentation](./index.md).

This article describes split icons packages.

## Packages

Each icon set is available as a separate NPM package. Package name is `[npm]@iconify-icons/{prefix}`, where `[str]{prefix}` is icon set prefix.

These packages are available only on NPM. They are automatically generated from [big icon sets package](./all.md) whenever it is updated.

## Contents

Each package contains one icon set, with separate files for each icon (`[str]{name}` is icon name):

- `[file]{name}.js` contains icon data in `[type]IconifyIcon` format as default export.
- `[file]{name}.d.ts` contains type definition.

Icon data in `[type]IconifyIcon` format looks like this:

```json
{
	"body": "<path d=\"M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2h-7m-8-5V5h10v10H7z\" fill=\"currentColor\"/>",
	"width": 24,
	"height": 24
}
```

You can import data for any icon using default import from file, like this:

```js
import mdiHome from '@iconify-icons/mdi/home';
```

Example of React component using icon from such package:

```yaml
src: icon-components/common/offline.jsx
```

## CommonJS packages

Packages `[npm]@iconify-icons/{prefix}` use ES modules.

However, some outdated software still does not support ES modules. To support that software, CommonJS packages are also available. They are identical to ES modules, but icon files export CommonJS:

```js
const mdiHome = require('@iconify/icons-mdi/home');
```

Format for icon data packages:

- ES package: `[npm]@iconify-icons/{prefix}`
- CommonJS package: `[npm]@iconify/icons-{prefix}`

where `[str]{prefix}` is an icon set prefix. Use ES package whenever possible, switch to CommonJS package if your bundler does not support ES modules or if you need to use it in Node.js.

## Creating packages

If you want to create a package for your icon set, see `[func]exportIconPackage()` of [Iconify Tools](../tools/tools2/index.md).
