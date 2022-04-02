```yaml
title: Cleaning up icons
```

# Cleaning up icons

All icon sets available with Iconify pass validation and clean up process.

What exactly is happening and why is it needed? This article explains process in details.

When using Iconify with custom icons, consider using similar clean up process. All tools you need are available in [Iconify Tools](../../tools/tools2/index.md).

## Clean up and validation {#code}

First part is code clean up and validation.

When a designer exports icon from an editor, often SVG contains a lot of extra code that is not needed to display an icon.

Icons can also contain dangerous elements, such as scripts or external resources. Icons are validated to make sure they do not contain anything other than vector shapes.

See [example of bad code](./cleanup.md) and [explanation of how SVG validation works](./validate.md).

## Palette changes {#palette}

After initial clean up and validation, icon palette is changed.

For monotone icons, color is changed to `[prop]currentColor` to make sure icon follows text color. This way it is easy to change color for any icon, regardless if icon uses `[prop]fill` or `[prop]stroke`.

For icons with hardcoded palette, validator checks that icon does not use system default colors or `[prop]currentColor`.

See [article explaining palette changes](./palette.md).

## Optimisation {#optimisation}

Last step is optimisation. It reduces icon size by removing unnecessary code and optimising paths.

See [a very short article explaining icon optimisation](./optimise.md).
