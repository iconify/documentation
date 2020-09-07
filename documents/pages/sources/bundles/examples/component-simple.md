```yaml
title: 'Icon Bundle Examples: Components'
navigation: ./index.md
standalone: true
```

# Simple icon bundle for Iconify components

This article is a part of [Iconify icon bundles code examples](./index.md).

These examples show how to create icon bundles for Iconify components from icon sets available in Iconify. These are very basic examples, for more advanced stuff look in [code examples list](./index.md).

## Instructions

Installation:

```bash
# Node.js
npm install --save-dev @iconify/json-tools @iconify/json
# PHP
composer require iconify/json-tools iconify/json
```

PHP version assumes you are using Composer to manage dependencies.

Usage:

- Change value of `[var]component` to correct component. See below.
- Change value of `[var]target` to correct location of bundle.
- Change list of icons in variable `[var]icons` to icons you want to bundle.
- Run script.

### Components

```yaml
include: sources/bundles/example-components
```

## Bundle script {#add-collection}

Example below create JavaScript files with icon data loaded with `[func]addCollection` function that is imported from a component package.

```yaml
src: sources/bundles/bundle-component-simple.js
title: Node.js
extra:
  - src: sources/bundles/bundle-component-simple.php
    title: PHP
```

Bundle generated by script above must be imported in your application:

```js
import './icons-bundle.js';
```