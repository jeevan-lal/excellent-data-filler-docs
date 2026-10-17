---
prev:
  text: "Fetch Google Sheet Data"
  link: "/documentation/field-types/google-service-sheet/fetch-google-sheet-data"
next:
  text: "Page Loading"
  link: "/documentation/field-types/others/page-loading"
---

# Insert & Remove HTML {#insert-remove-html}

The **Insert & Remove HTML** field type allows direct DOM tree manipulation—either injecting custom HTML elements into a target web page or removing unwanted overlays, popups, and banners during automation.

---

## Configuration Options {#configuration-options}

| Option | Type | Description |
|---|---|---|
| **Selector Query** | Text | CSS selector or XPath targeting the reference DOM element. |
| **Position of New HTML Content** | Dropdown | Where new HTML is injected relative to the target element. |
| **Field Value / Default Value** | Text / HTML | The HTML markup to insert (supports static text or Excel `{$Column$}` variables). |
| **Remove exist element html before insert html** | Switch | Clears the target element's existing inner HTML before inserting new content. |
| **Remove element** | Switch | Completely removes the targeted element from the DOM (`element.remove()`). Disables insertion options when active. |

---

## Insertion Positions {#positions}

| Position | Relative Placement | DOM Result |
|---|---|---|
| **beforebegin** | Outside the element, immediately before it. | `[NEW] <element>...</element>` |
| **afterbegin** | Inside the element, as its first child. | `<element>[NEW] existing...</element>` |
| **beforeend** | Inside the element, as its last child. | `<element>existing... [NEW]</element>` |
| **afterend** | Outside the element, immediately after it. | `<element>...</element> [NEW]` |
| **innerHTML** | Replaces all inner content of the target element. | `<element>[NEW]</element>` |

---

## Common Use Cases {#examples}

### 1. Adding a New Option to a `<select>` Dropdown
Inject a missing `<option>` into an existing dropdown so it can be selected in subsequent steps:
- **Selector Query**: `select[name="category"]`
- **Position**: `beforeend`
- **Field Default Value**: `<option value="1000">1000</option>`

### 2. Removing Popups, Cookie Banners & Overlays
Remove intrusive overlays or modal backdrops that block automated clicks:
- **Selector Query**: `.modal-backdrop, #cookie-banner, .popup-overlay`
- **Remove element**: **ON**

### 3. Injecting a Status or Alert Banner
Add helper notifications or instructions inside a page container:
- **Selector Query**: `#main-container`
- **Position**: `afterbegin`
- **Field Default Value**: `<div class="alert alert-info">Processing batch: {$BatchId$}</div>`

---

## Troubleshooting {#troubleshooting}

| Issue | Likely Cause | Solution |
|---|---|---|
| **Content does not appear** | Selector failed to locate element or loaded late | Inspect element using <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>. Add a delay before this field if element renders via AJAX. |
| **Element not removed** | Target is inside an iframe or selector didn't match | Ensure selector accurately matches and active iframe context is configured. |
| **Duplicate content on replay** | Looping or re-running without clearing previous content | Turn ON **Remove exist element html before insert html** or use **innerHTML** position. |

---

## Related Documentation {#related}

- <img src="/svg/form.svg" class="doc-icon" /> [Select Field](/documentation/field-types/select) — Dropdown automation and option management
- <img src="/svg/code.svg" class="doc-icon" /> [JavaScript Code Field](/documentation/field-types/javascript-code) — Advanced DOM scripting
- <img src="/svg/settings.svg" class="doc-icon" /> [Field Settings](/documentation/form-fields/field-settings) — Advanced execution options
- <img src="/svg/click.svg" class="doc-icon" /> [Locate Element](/documentation/locate-element) — Element selector tools
