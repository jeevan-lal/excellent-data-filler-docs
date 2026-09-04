---
prev:
  text: "Settings"
  link: "/documentation/settings"
next:
  text: "Keyboard Shortcuts"
  link: "/documentation/extension/keyboard-shortcuts"
---

# Context Menu {#context-menu}

Access core extension actions, DOM element inspection tools, and selector copy helpers directly from your browser's right-click context menu.

## Overview

The Excellent Data Filler context menu is accessible in two distinct contexts:
1. **Page Context Menu**: Right-click anywhere on an active web page to inspect elements, configure forms, or copy element selectors.
2. **Toolbar Icon Context Menu**: Right-click the extension icon in the browser toolbar for quick status controls, permission management, and right-click unblocking.

<div style="display: flex; gap: 20px; flex-wrap: wrap; margin: 20px 0;">
  <div style="flex: 1; min-width: 280px;">
    <h4 style="margin: 0 0 8px 0;">Web Page Context Menu</h4>
    <img src="/image/context-menu-page.png" alt="Page Context Menu" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
  </div>
  <div style="flex: 1; min-width: 280px;">
    <h4 style="margin: 0 0 8px 0;">Toolbar Icon Context Menu</h4>
    <img src="/image/context-menu-toolbar.png" alt="Toolbar Icon Context Menu" style="width: 100%; border-radius: 8px; border: 1px solid var(--vp-c-divider);" />
  </div>
</div>

---

## Context Menu Actions Reference {#menu-actions-reference}

| Action | Location | Shortcut | Description |
| --- | --- | --- | --- |
| **Extension is ON** | Page & Toolbar | <kbd>Alt</kbd> + <kbd>Q</kbd> | Master toggle showing active status (`✓`). Click to toggle automation on or off. |
| **Allow Right Click?** | Toolbar Only | — | Forcefully re-enables right-click menus on sites that disable right-clicking. |
| **Inspect Elements** | Page & Toolbar | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> | Launches the interactive Element Details inspection modal. |
| **Open Sidebar** | Page & Toolbar | — | Opens the extension sidebar *(Under Development)*. |
| **Insert Site** | Page Only | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | Registers the active website as a new automation site. |
| **Insert Form** | Page Only | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> | Adds a new form to the current active site. |
| **Copy Field** | Page Only | <kbd>Alt</kbd> + <kbd>C</kbd> | Copies selected field(s) configuration from the extension. |
| **Copy Form Response** | Page Only | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> | Copies element text, selector, XPath, and URL for response rules. |
| **Copy Element Selector Address** | Page Only | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> | Copies the CSS selector of the right-clicked element. |
| **Copy Element XPath Selector Address** | Page Only | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> | Copies the XPath expression of the right-clicked element. |
| **Copy text of selected element** | Page Only | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd> | Copies the visible text content of the element. |
| **Copy html of selected element** | Page Only | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> | Copies the outer HTML source code of the element. |
| **Copy name of selected option** | Page Only | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> | Copies the visible text label of a `<select>` option. |
| **Copy value of selected option** | Page Only | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> | Copies the `value` attribute of a `<select>` option. |
| **Download select box options** | Page Only | — | Downloads all options of a dropdown menu as a data file. |

::: info Open Sidebar Under Development
The **Open Sidebar** menu item is currently **under active development** and will be fully enabled in an upcoming version.
:::

---

## <img src="/svg/browser.svg" class="doc-icon" width="20" height="20" alt="Inspect Elements" /> Inspect Elements {#inspect-elements}

The **Inspect Elements** tool (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>) provides a built-in DOM inspector designed specifically for form automation setup without requiring browser DevTools.

### 1. Info Tab {#inspector-info}

Inspect DOM element metrics, hierarchical positions, and structural breadcrumb paths.

<img src="/image/element-inspector-info.png" alt="Element Inspector Info Tab" style="max-width: 480px; width: 100%; border-radius: 8px; margin: 12px 0;" />

- **Element Tag & Classes**: Identifies the HTML element tag (e.g., `<li/>`) and active classes.
- **Breadcrumb Navigation**: Shows full DOM hierarchy (`body > div#app > div.Layout > div#VPContent`) with directional step navigation buttons (`↑`, `↓`, `←`, `→`).
- **Text Content**: Real-time extracted text content of the element.
- **Dimensions & Positioning**: Displays pixel dimensions (`Width: 707px`, `Height: 26px`) and CSS positioning (`Position: static`, `Top`, `Left`, `Z-Index`).
- **Header Actions**: Quick controls to **Hide**, **Copy HTML**, Download element, Delete, or **Clear**.
- **Docked Toolbar Controls**:
  - **Pause / Freeze** (<kbd>⏸</kbd>): Freezes dynamic page states (tooltips, dropdowns) for inspection.
  - **Element Picker** (<kbd>✦</kbd>): Click to highlight and inspect any other element on the page.
  - **Grid Overlay**: Toggles alignment grid overlays.
  - **Edit**: Edit element attributes directly.
  - **Close** (<kbd>✕</kbd>): Dismisses the inspector overlay.

---

### 2. Selector Tab {#inspector-selector}

Generate, test, and copy unique CSS selectors and XPath expressions.

<img src="/image/element-inspector-selector.png" alt="Element Inspector Selector Tab" style="max-width: 480px; width: 100%; border-radius: 8px; margin: 12px 0;" />

- **Live Selector / XPath Tester**: Enter any custom selector query or XPath expression and click **Find** to verify matches in real-time.
- **Real-Time Selector Filter**: Search and filter through all discovered selectors with category counts (e.g., `All (112)`).
- **Recommended Selectors**: Displays high-priority selectors optimized for uniqueness and stability, complete with match count badges (e.g., `1 match`) and a one-click clipboard copy button.

---

### 3. Settings Tab {#inspector-settings}

Customize the appearance and behavior of the inspector overlay.

<img src="/image/element-inspector-settings.png" alt="Element Inspector Settings Tab" style="max-width: 480px; width: 100%; border-radius: 8px; margin: 12px 0;" />

- **Panel Width**: Customize the inspector modal width in pixels (default: `420px`).
- **Font Size**: Increase or decrease inspector text sizing with `-`, `+`, and `Reset` controls.
- **Modal Zoom**: Adjust inspector magnification percentage with `-`, `+`, and `Reset` controls.
- **Selector Test Trigger**: Configure how selectors are tested (default: `Click only (Default)`).

---

## <img src="/svg/settings.svg" class="doc-icon" width="20" height="20" alt="Allow Right Click" /> Allow Right Click? {#allow-right-click}

Some protected or restricted websites use custom JavaScript event listeners to disable right-clicking, preventing users from opening browser context menus or inspecting form elements.

### How to Bypass Right-Click Restrictions

1. Right-click the **Excellent Data Filler** icon in the browser toolbar.
2. Click **Allow Right Click?** (a checkmark `✓` confirms activation).
3. The extension overrides hostile event handlers, allowing you to right-click and use extension features freely on the page.

::: tip Global Configuration in Settings
You can also permanently automate right-click bypasses across all sites by configuring **Allow Right-Click** and **Force Allow Right-Click** under <img src="/svg/settings.svg" class="doc-icon" width="16" height="16" alt="Settings" /> [Global Settings &gt; Advanced Parsing Filters](/documentation/settings#advanced-options).
:::

---

## <img src="/svg/code.svg" class="doc-icon" width="20" height="20" alt="Copy Operations" /> Copy Operations & Quick Actions {#copy-operations}

### Copy Form Response (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>)

Captures the complete diagnostic payload of an element to configure form submission response rules:

```json
{
  "text": "Success",
  "selector": "#status-message",
  "xpath": "//div[@id='status-message']",
  "url": "https://example.com/form"
}
```

### Copy Field (<kbd>Alt</kbd> + <kbd>C</kbd>)

Copies one or multiple field configurations directly from the extension interface to paste into another form or site.

### Dropdown Option Helpers

- **Copy name of selected option** (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>): Copies the user-facing option label.
- **Copy value of selected option** (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>): Copies the underlying form submission `value`.
- **Download select box options**: Exports all dropdown entries from a `<select>` element into a structured file for template building.

---

## Related Documentation

- <img src="/svg/click.svg" class="doc-icon" width="16" height="16" alt="Keyboard Shortcuts" /> [Keyboard Shortcuts Reference](/documentation/extension/keyboard-shortcuts)
- <img src="/svg/settings.svg" class="doc-icon" width="16" height="16" alt="Settings" /> [Extension Settings](/documentation/settings)
- <img src="/svg/form.svg" class="doc-icon" width="16" height="16" alt="Field Types" /> [Field Types](/documentation/form-fields/field-types)
