```yaml
title: Changing icon content
types:
  IconSet: '../icon-set/index.md'
  SVG: '../svg/index.md'
functions:
  cleanupSVG: './cleanup.md'
  runSVGO: './svgo.md'
  list: '../icon-set/list.md'
  forEach: '../icon-set/for-each.md'
```

# Changing icon content

Before exporting icons, you need to properly fix them. [Iconify Tools](./index.md) offers many functions for manipulating icon content: fixing icons, optimising icons, fixing palette.

## Usage

All functions listed below are asynchronous and work with `[type]SVG` instances.

### Async

If you are not familiar with asynchronous functions in JavaScript, read up on `[type]Promise` class, `[func]async` and `[func]await` keywords.

Simplest way to use asynchronous functions is to wrap all your code in anonymous asynchronous function, then `[func]await` functions:

```yaml
src: tools/tools2/icon/async.ts
```

To catch errors, use `[func]try` and `[func]catch`:

```yaml
src: tools/tools2/icon/async-errors.ts
```

Check out various tutorials for `[func]async` and `[func]await`. There are many free good tutorials on YouTube.

### Working with icon sets

How to use functions to parse all icons in an icon set?

It can be done by using `[func]forEach()` method:

```yaml
src: tools/tools2/icon/icon-set.ts
```

## Validating and cleaning up icon

Unfortunately many editors leave lots of junk in SVG files, sometimes multiplying icon file size several times.

SVG files might also contain scripts and links to external resources.

This is why after loading icon, it should be validated and cleaned up. See `[func]cleanupSVG()` function.

## Optimising icon

Cleanup process is very basic, it does bare minimum to get rid of bad stuff. However, icons often contain unnecessary or unused elements and attributes. To fix it, you can optimise icon.

To optimise icon run `[func]runSVGO()`.

## Fixing palette

Usually icons either do not have palette, relying on `[prop]fill` style or use black colors. Neither option is acceptable for using icons with Iconify.

In Iconify all icons that do not have hardcoded palette should use `[prop]currentColor`.

To fix palette run `[func]parseColors()`.

## Supporting old software

All browsers support modern SVG, which include compressed arcs in `[tag]path` elements. However, there is plenty of software that does not. Usually it is image editing software that rely on ancient SVG parsing libraries.

Iconify Tools has function to de-optimise icons to make them compatible with old software: `[func]deOptimisePaths()`.
