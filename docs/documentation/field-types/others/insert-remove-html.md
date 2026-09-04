---
prev:
  text: "Fetch Google Sheet Data"
  link: "/documentation/field-types/google-service-sheet/fetch-google-sheet-data"
next:
  text: "Page Loading"
  link: "/documentation/field-types/others/page-loading"
---

# Insert & Remove HTML {#insert-remove-html}

Dynamically inject new HTML elements or strip unwanted DOM nodes from target web pages during form automation.

---

## Overview {#overview}

The **Insert & Remove HTML** field type provides direct DOM tree manipulation capabilities. It can be used to insert custom helper buttons, dynamic verification notices, or inject missing form controls, as well as remove obstructive overlays, popups, or banners that hinder automated interaction.

---

## Configuration Options {#configuration-options}

| Option | Type | Description | Required | Disabled When |
|---|---|---|---|---|
| **Selector Query** | Text Input | CSS selector or XPath targeting the reference DOM element. | Yes | — |
| **Position of New HTML Content** | Dropdown | Relative position where new HTML is inserted. | When inserting | When "Remove element" is ON |
| **Remove exist element html before insert html** | Toggle Switch | Clears existing children before injecting content. | No | When "Remove element" is ON |
| **Remove element** | Toggle Switch | Deletes the matched target element from the DOM. | No | — |

> [!IMPORTANT]
> **Remove Element Priority**: When **Remove element** is turned ON, all insertion settings are deactivated. The field executes an immediate node deletion (`element.remove()`).

---

## Insertion Positions {#positions}

Select where to inject markup relative to the target element:

| Position | Description | DOM Structure |
|---|---|---|
| **beforebegin** | Inserts immediately before the element itself (as preceding sibling). | `[NEW] <element>...</element>` |
| **afterbegin** | Inserts inside the element, before its first child node. | `<element>[NEW] existing...</element>` |
| **beforeend** | Inserts inside the element, after its last child node. | `<element>existing... [NEW]</element>` |
| **afterend** | Inserts immediately after the element itself (as following sibling). | `<element>...</element> [NEW]` |
| **innerHTML** | Completely replaces all inner content of the target element. | `<element>[NEW]</element>` |

---

## Detailed Configuration Breakdown {#configuration-details}

### Selector Query

Defines the target element used as the reference anchor:
```css
#content-wrapper
div.main-container
form#registration-form
.modal-overlay
```

### HTML Content Payload

Provide the HTML markup either in the **Default Value** field or via an Excel column:
```html
<div class="custom-alert alert-info">
  <span>Automated step running: <strong>{$BatchName$}</strong></span>
</div>
```

---

## Practical Examples {#examples}

### Example 1: Inserting Alert Banner

```text
Selector Query: .main-container
Position: afterbegin
HTML Content: <div class="alert alert-success">Form verified successfully!</div>
Remove exist element html: OFF
Remove element: OFF
```

### Example 2: Purging Obstruction Overlay / Popup

```text
Selector Query: .popup-overlay, #cookie-consent-banner
Remove element: ON
```

### Example 3: Injecting Dynamic Profile Card

```text
Selector Query: #user-profile-section
Position: beforeend
HTML Content:
  <div class="profile-card">
    <h4>{$FullName$}</h4>
    <p>Account ID: {$AccountID$}</p>
  </div>
```

---

## Best Practices {#best-practices}

### Do's

- **Use Precise Selectors**: Target specific containers to avoid altering unintended page regions.
- **Validate HTML Syntax**: Ensure all tags are properly closed to prevent breaking page layout.
- **Prefer `afterbegin` / `beforeend`**: Use child insertion rather than `innerHTML` when you wish to preserve existing buttons and listeners.

### Don'ts

- **Do Not Remove Critical Elements**: Ensure elements targeted with **Remove element** do not contain essential page scripts or state stores.
- **Do Not Insert Unsanitized External Script Tags**: Keep injected markup restricted to standard semantic presentation elements.

---

## Troubleshooting {#troubleshooting}

| Issue | Likely Cause | Solution |
|---|---|---|
| **Content does not appear** | Selector query failed to locate element | Confirm element exists with <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>. Add a delay before running the field if dynamically rendered. |
| **Element not removing** | Target rendered inside an iframe or loaded late | Ensure the form page matches the active iframe URL or add a pre-delay. |
| **Duplicate content created** | Form re-executed or looped without clearing | Turn ON **Remove exist element html before insert html** or use `innerHTML`. |

---

## Related Documentation {#related}

- <img src="/svg/code.svg" class="doc-icon" /> [JavaScript Code Field](/documentation/field-types/javascript-code)
- <img src="/svg/form.svg" class="doc-icon" /> [Form Fields Overview](/documentation/form-fields/field)
- <img src="/svg/settings.svg" class="doc-icon" /> [Field Settings](/documentation/form-fields/field-settings)
- <img src="/svg/click.svg" class="doc-icon" /> [Locate Element](/documentation/locate-element)
