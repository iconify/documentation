```yaml
title: How to add icon set to Iconify
```

# How to add icon set to Iconify

If you have created an icon set, please consider sharing it with Iconify community.

## Benefits

What are the benefits of publishing an icon set to Iconify?

- Icons become available to thousands of users that use projects that get icon data from Iconify: [Iconify icon components](../../iconify-icon/index.md), [UnoCSS](../../icon-components/unocss.md), [Unplugin Icons](../../icon-components/unplugin-icons.md) and other projects.
- Iconify is open source, all icon sets are also open source and they are used by many open source projects. Do you feel like contributing to open source projects?
- Each icon set has an information section, which includes author name and link to repository. It is shown on websites that list icons, it is shown in Figma and Sketch plugin. It might get you some visitors, followers and links for search engines.

## Adding icon set

To add an icon set to Iconify you need to [open an issue on Iconify icon sets repository on GitHub](https://github.com/iconify/icon-sets). Post link to icon set source (see below), preferred icon set prefix.

In the roadmap for Iconify, publishing icon sets can be done directly from Figma. However, that functionality is in development and it will take a while to complete.

Make sure your icon set matches these requirements:

### Open source

All icon sets must be open source and have a valid open source license.

If you are not sure about licenses, [check out various icon sets](https://icon-sets.iconify.design/). Click any icon set, it will show license and link to license text.

Popular licenses:

- [MIT](https://opensource.org/licenses/MIT).
- [Apache 2.0](https://opensource.org/licenses/Apache-2.0).
- [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

See [Open Source Initiative](https://opensource.org/licenses) for more licenses.

### Useful to everyone

If icon set is specific to your website, it is not really useful to other developers.

You can use custom icon sets with almost any software that uses Iconify icon sets. To use your icons with those tools, you do not need to add them to Iconify icon sets. All those tools have possibility to load custom icon sets.

Adding your icon set to Iconify means publishing it to the community, making it available to everyone who uses Iconify. New icon sets are always welcome, but not ones that are useful only to you.

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

Icon sets must contain only icons, which can be used as a small icon, not as a large image. Collections of vector images with high details, that are meant to be used as large images are not acceptable.

### Quality

Additionally, addition of an icon set might be declined on the basis of low quality.

If you are new to icon design, [Google Material Icons website has excellent guidelines for designing icons](https://material.io/design/iconography/system-icons.html#grid-and-keyline-shapes).

Those guidelines are specific to material design, but the same principles apply to most icons. Even though icons are vector images, displays are pixel devices and icon edges are blurred if shape is not aligned to the edge of a pixel. Icon sets that follow a specific grid, have padding, shapes aligned to pixel edges, are the best looking icon sets.

## Submit icon set

If the wall of text above was too big, you might have missed the link to submit an icon set. See "Adding icon set" section above.
