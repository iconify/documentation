```yaml
title: 'Iconify Icon Finder: Configuration'
```

# Iconify Icon Finder configuration

This tutorial is part of [Svelte Components for Iconify Icon Finder tutorial](./index.md).

If you want to create your own project based on Iconify Icon Finder, you probably need to change configuration.

All configuration files are located in directory `[file]src/icon-finder/config`. There are multiple files, each is responsible for different part of configuration.

Why are there so many files? To prevent circular imports and unnecessary imports.

## Toggle features {#features}

You can toggle various features in `[file]components.ts`.

See contents of file. Each variable has comment with description of what it does.

Configuration for footer buttons is a bit complex, see `[file]src/icon-finder/footer/types.ts` for details. Each button has key (object key, such as `[attr]submit` and `[attr]cancel` in default config) and value. Key is used in [wrapper callback](./callback.md) when user clicks button, value is used to tell components when and how to render that button.

## Components

Some configuration files allow you to switch components:

- You can change container component in `[file]container.ts`.
- You can change footer component in `[file]footer.ts`.
- You can change various components used in footer in `[file]footer-components.ts`.

In some of those files you will find commented out alternative imports. Uncomment those imports by removing `[str]// `, comment out old component by adding `[str]// ` and rebuild project to see the difference.

## Phrases {#phrases}

In `[file]phrases.ts` you can change language pack.

How to do it? Create your own language pack by copying `[file]src/icon-finder/phrases/en.ts`, translate text, change import in `[file]phrases.ts` to your file.

All components should import phrases from `[file]src/icon-finder/config/phrases.ts`, so swapping language pack is as easy as changing just one file `[file]phrases.ts`.

## API

API configuration in `[file]api.ts` allows adding custom Iconify API providers.

This functionality is currently in development.

When ready, API providers functionality will make it possible for icon designers to use Icon Finder (and forks, such as Figma plug-in) with their icons, possibly with commercial icons. Icon Finder already fully supports it, but API with full search engine is not available yet.

## Theme {#theme}

Theme configuration is stored in `[file]theme.ts`. It is very important to make sure it matches stylesheet.

What is stored in theme configuration?

- Number of colors in color rotation.
- Custom icons.
- List of icons to use for various buttons.

### maxIndex {#max-index}

Variable `[var]maxIndex` is used for color rotation.

In default UI icon sets, categories, themes have different colors. It is done by rotating colors in stylesheet. Number of colors in rotation is limited.

For example of rotation configuration, see `[file]src/style/iconify/_rotation.scss`. Value of `[var]maxIndex` must match number of elements in `[var]$rotation` array minus `[num]1`.

Rotation does not include default color. For example, in Iconify theme rotation starts with purple color, but in icon sets list you see blue before purple. So actually there are `[num]13` colors in rotation (including default blue), but only `[num]12` in `[file]_rotation.scss` and `[num]11` in `[var]maxIndex`. Confusing? Maybe it will change in future to be less confusing.

Why not use `[prop]:nth-child()`? To make rotation consistent. Each icon set, each category, each theme is assigned its own index, so they have the same colors in different blocks on different pages. This cannot be achieved with `[prop]:nth-child()`.

### List of icons {#icons}

Variable `[var]icons` is a simple map of keywords to names of icons. To change search icon, change value for `[prop]search` key and all components that use search icon will render your icon.

If you want to render custom icons, add them to Iconify in `[file]theme.ts`. See [Iconify JSON format](../../../types/iconify-json.md).

## Wrapper

In file `[file]wrapper.ts` you can change default values for configuration that can be changed in run time, such as switching between list and grid modes, selected tab for code samples.

All configuration in other files can only be toggled before compilation.
