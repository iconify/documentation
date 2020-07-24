```yaml
title: Iconify SVG Framework Optimizations
replacements:
  - code: '22kb'
    value: '${iconify2.size}'
```

# SVG framework optimizations

This tutorial is part of [Iconify SVG Framework tutorial](./index.md).

## Placing script in head section or footer? {#header-vs-footer}

Most site optimization tutorials tell you that you should put scripts in footer before `[tag]</body>`. What about Iconify? You can put Iconify script in head section (between `[tag]<head>` and `[tag]</head>`) or in footer before `[tag]</body>`.

So what's the difference?

### Putting Iconify in footer {#script-footer}

If you put link to Iconify in footer before `[tag]</body>`, it will load after entire page has been loaded, not blocking rendering. That's good for page loading speed.

However, it also means icon placeholders won't be replaced until entire page has been loaded. Iconify cannot start doing its thing until it has loaded.

### Putting Iconify in head section {#script-header}

If you put link to Iconify in head section (between `[tag]<head>` and `[tag]</head>`), it will load immediately. Downside is, any script tag placed in head section blocks page rendering until script has loaded.

Iconify SVG framework is rather small (about 22kb uncompressed), delivered from fast CloudFlare CDN. It takes fraction of second to load.

Benefit of placing Iconify script in head section is, it can start replacing icons right away. That means, if you have a large page, icons will be replaced as soon as part of document loads instead of waiting for an entire document to load.

### Conclusion {#script-conclusion}

There are pros and cons for each method. You should decide for yourself instead of blindly relying on recommendations from online website checkers. Online website checkers don't know what script does and how it works, so they always recommend putting all scripts in footer.

If your pages are small, probably better to put script in footer before `[tag]</body>`. For example, this website has it in footer.

If your pages are large, dynamically generated, such as forum pages, it might be better to put script in head section. Forum pages might take several seconds to load, by placing script in head section, you make sure visitors see icons as soon as possible.

If you are experiencing flickering during load (page loads, then renders, then icons are replaced), you probably should move Iconify SVG framework script to head section.
