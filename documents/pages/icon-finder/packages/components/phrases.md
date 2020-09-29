```yaml
title: Phrases in Iconify Icon Finder
```

# Phrases in Iconify Icon Finder

Icon Finder UI is designed to be easy to customise. That includes the possibility of translation.

By default, Icon Finder UI uses English phrases. Phrases are written in TypeScript and are located in `[file]src/phrases/en.ts` or components package.

Components package is located in `[file]packages/components/` of [Icon Finder repository](https://github.com/iconify/icon-finder).

## Creating a language pack

To create language pack, go to `[file]src/phrases/` of components package and copy `[file]en.ts`. Filename must end with `[file].ts`.

Edit text in a new file.

## Changing language pack

To change the default language pack, open `[file]configurator.json` of UI package and change the value of property `[prop]language`:

```json
{
	"language": "de"
}
```

Language value is the name of your language pack file, without `[file].ts` extension.

After changing the language pack, rebuild UI.

Important: file `[file]configurator.json` is not in components package, it is in package with Icon Finder UI. See [build process documentation](../build/index.md) for details.

## Variables

Some phrases contain variables.

For example, `[prop]search.placeholder.collection` has value `[str]Search {name}`.

In this case, `[str]{name}` is a variable. It will be replaced by icon set name, such as `[str]Material Design Icons`, resulting in `[str]Search Material Design Icons`.

Variables should not be changed:

- Do not translate variables. They are keywords, not words to translate.
- Do not add new variables, it won't work.
- Do not remove variables from phrases.

## Special characters

In some phrases you'll see strange things like this: `[js]String.fromCharCode(0x00b0)`. Those are characters that cannot be reliably saved in a text file, such as degrees character.

Use basic set of characters in phrases. If you need to use a special character, use `[js]String.fromCharCode()` function.

## Rebuilding UI

This is specific to UI. Usually, you need to run `[bash]npm run build` for UI after changing `[file]configurator.json`.

See [build process documentation](../build/index.md) for details.
