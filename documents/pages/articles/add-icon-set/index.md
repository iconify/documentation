```yaml
title: How to add icon set to Iconify
```

# How to add icon set to Iconify

If you have designed an icon set and you want to add it to Iconify. How to do it?

## Custom icon sets

Sometimes developers confuse adding an icon set to Iconify with using custom icon sets.

You can use custom icon sets with almost any software that uses Iconify icon sets: Iconify icon components, Unplugin Icons, UnoCSS. To use your icons with those tools, you do not need to add them to Iconify icon sets. All those tools have the option to load custom icon sets.

Adding your icon set to Iconify means publishing it to the community, making it available to everyone who uses Iconify. New icon sets are always welcome!

## Adding icon set

In the roadmap for Iconify, publishing icon sets can be done directly from Figma. However, that functionality is in development and it will take a long time to complete.

Until then, to add an icon set to Iconify you need to [open an issue on Iconify icon sets repository on GitHub](https://github.com/iconify/icon-sets). Post link to icon set source (see below), preferred icon set prefix.

Make sure your icon set matches these requirements:

### Open source

All icon sets must be open source and have a valid open source license.

### Useful to everyone

Icons must be useful to other developers.

Icon sets that are:

- Too niche, useful only for several websites
- Contain elements specific to a website

... are not accepted because they are useless for almost all developers.

### Can be updated

Icon sets are automatically updated several times a week. In order to update icon set, icons must be published and maintained by developer on one of the following sources:

- Public git repository (GitHub, GitLab, etc...).
- NPM package.
- Public Figma file.

Downloading an icon set from a third party website is not an option.

### No icon fonts

Icon sets exported from icon fonts are not accepted.

They are almost always badly aligned, not following any logical grid system. Overall they are very low quality and not usable as SVG.

There are currently several such icon sets in Iconify repository, but that is only because when Iconify project was in early development, there were very few icon sets to work with and icon fonts were dominating the UI world, so they were added. But today it is not acceptable.

### Icons, not pictures {#no-pictures}

Icon sets must contain only icons, which can be used as a small icon, not as a large image. Collections of high detail vector images that are meant to be used as large images are not acceptable.

### Quality

Additionally, an icon set might be denied on the basis of low quality.

If you are new to icon design, [Google Material Icons website has excellent guidelines for designing icons](https://material.io/design/iconography/system-icons.html#grid-and-keyline-shapes).

Those guidelines are specific to material design, but the same principles apply to most icons. Even though icons are vector images, displays are pixel devices and icon edges are blurred if shape is not aligned to the edge of a pixel. Icon sets that follow a specific grid, have padding, shapes aligned to pixel edges, are the best looking icon sets.

## Benefits

With that in mind, if you still want to add an icon set, what are the benefits of doing it?

- Iconify is open source, all icon sets are also open source and they are used by many open source projects. Do you feel like contributing to open source projects?
- Each icon set has an information section, which includes author name and link to repository. It is shown on websites that list icons, it is shown in Figma and Sketch plugin. It might get you some visitors, followers and links for search engines.

## Submit icon set

If the wall of text above was too big, you might have missed the link to submit an icon set. See "Adding icon set" section above.
