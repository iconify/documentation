```yaml
title: Icon Bundle Examples
```

# Example of generating icon bundles

This tutorial is a part of [Iconify icon bundles tutorial](../index.md).

Below are several examples of scripts that generate icon bundles. You can use code from these examples to create your own bundle script.

All examples assume you either:

- Understand basic JavaScript, have Node.js installed on your computer and you know how to use it.
- Know PHP and have it installed on your computer.

Preferred method is JavaScript. If you are creating web pages, you are working with JavaScript anyway, so why not use it to build stuff?

## SVG Framework

Examples for creating bundles for SVG Framework:

- [Basic bundle example](./svg-framework-simple.md) (Node.js and PHP).
- [Bundling custom icons](./svg-framework-custom.md) (Node.js and PHP).
- [Bundling custom icons using Iconify Tools](./svg-framework-custom-tools.md) (Node.js only).
- [Advanced bundler example](./svg-framework-full.md) (Node.js only).

## Components

Examples for creating bundles for various Iconify components (React, Vue):

- [Basic bundle example](./component-simple.md) (Node.js and PHP).
- [Bundling custom icons](./component-custom.md) (Node.js and PHP).
- [Bundling custom icons using Iconify Tools](./component-custom-tools.md) (Node.js only).
- [Advanced bundler example](./component-full.md) (Node.js only).

## Code differences

What's different in SVG framework and component bundle scripts?

- Header. In bundle for a component code starts with an import statement.
- Function. In SVG framework code uses `[func]Iconify.addCollection()`, in component code uses imported `[func]addCollection()`.
- Examples for SVG framework that use `[var]IconifyPreload` are not usable with components.
