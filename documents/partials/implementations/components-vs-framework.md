Unlike SVG framework, components are designed for specific frameworks:

- Components use syntax familiar to developers.
- Some components use framework's native code when possible.
- Components correctly bind event handlers and dynamic properties. SVG framework cannot do that.
- Components render icons regardless of parent element, making it perfect for use in things like Shadow DOM. SVG framework only scans placeholders in `[prop]document.body` (unless configured otherwise, but components do that without additional configuration).
