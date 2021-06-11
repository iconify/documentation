Unlike SVG framework, components are designed for specific frameworks:

- Components use syntax familiar to developers.
- Components use framework's native code to render icons.
- Most components correctly bind event handlers and dynamic properties. SVG framework cannot do that.
- Components render icons regardless of parent element, making it perfect for use in things like Shadow DOM. SVG framework only scans placeholders in `[prop]document.body` (unless configured otherwise, but components do that without additional configuration).
