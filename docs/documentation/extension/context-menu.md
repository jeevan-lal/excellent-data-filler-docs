# Context Menu

Access powerful extension features directly from the browser's right-click context menu for quick and efficient workflow automation.

## Overview

The Excellent Data Filler extension provides a comprehensive context menu that allows you to quickly access common actions without opening the extension interface. Right-click on any page element or in the extension interface to access these features.

---

## Context Menu Actions

**Quick Reference:**
- [Extension is ON](#extension-status)
- [Inspect Elements](#inspect-elements)
- [Open Sidebar](#open-sidebar)
- [Insert Site](#insert-site)
- [Insert Form](#insert-form)
- [Copy Field](#copy-field)
- [Copy Form Response](#copy-form-response)
- [Copy Element Selector Address](#copy-element-selector-address)
- [Copy Element XPath Selector Address](#copy-element-xpath-selector-address)
- [Copy text of selected element](#copy-text-of-selected-element)
- [Copy html of selected element](#copy-html-of-selected-element)
- [Copy name of selected option](#copy-name-of-selected-option)
- [Copy value of selected option](#copy-value-of-selected-option)
- [Download select box options](#download-select-box-options)
- [Allow Right Click?](#allow-right-click)

---

### Extension is ON {#extension-status}

**Description:** Displays the current status of the extension (ON/OFF).

**How to Use:**
- This is a status indicator at the top of the context menu
- Shows a checkmark (✓) when the extension is active
- Click to toggle extension status

**Use Case:** Quickly verify if the extension is enabled on the current page.

---

### Inspect Elements

**Description:** Open the element inspector tool to identify selectors and XPaths.

**How to Use:**
1. Right-click anywhere on the page
2. Select **"Inspect Elements"** from the context menu
3. Hover over elements to see their selectors and XPaths
4. Click to select and copy element details

**Use Case:** Quickly inspect page elements to identify selectors for field configuration.

**Keyboard Shortcut:** `Alt + Shift + I`

---

### Open Sidebar

**Description:** Open the extension sidebar panel.

**How to Use:**
1. Right-click anywhere on the page
2. Select **"Open Sidebar"**
3. The extension sidebar opens on the right side of the page

**Use Case:** Access extension features without opening the popup.

---

### Insert Site

**Description:** Add a new site configuration.

**How to Use:**
1. Right-click in the extension interface
2. Select **"Insert Site"**
3. Configure the new site settings

**Use Case:** Quickly create new site configurations.

**Keyboard Shortcut:** `Alt + Shift + S`

---

### Insert Form

**Description:** Add a new form to the current site.

**How to Use:**
1. Right-click in the extension interface
2. Select **"Insert Form"**
3. Configure the new form settings

**Use Case:** Rapidly add forms to your automation workflow.

**Keyboard Shortcut:** `Alt + Shift + F`

---

### Copy Field

**Description:** Copy one or multiple fields from your form configuration.

**Improvements:**
- Now supports copying **multiple fields at once**
- Preserves field configuration and settings
- Can be pasted into other forms or sites

**How to Use:**
1. Select one or more fields in the extension interface
2. Right-click on the selected field(s)
3. Choose **"Copy Field"** from the context menu
4. Paste the field(s) into another form or site

**Use Case:** Duplicate field configurations across multiple forms or sites without manual recreation.

**Keyboard Shortcut:** `Alt + C`

---

### Copy Form Response

**Description:** Copies selected element text, selector, XPath, and page URL to be pasted into the extension's response settings.

**How to Use:**
1. Right-click on any element on a web page
2. Select **"Copy Form Response"** from the context menu
3. The following data is copied to clipboard:
   - Element text content
   - CSS selector
   - XPath
   - Current page URL

**Use Case:** Quickly capture element details for configuring form response validation or conditional logic.

**Keyboard Shortcut:** `Alt + Shift + R`

**Example Output:**
```json
{
  "text": "Success",
  "selector": "#status-message",
  "xpath": "//div[@id='status-message']",
  "url": "https://example.com/form"
}
```

---

### Copy Element Selector Address

**Description:** Copy the CSS selector of the selected element.

**How to Use:**
1. Right-click on any element on a web page
2. Select **"Copy Element Selector Address"**
3. CSS selector is copied to clipboard

**Use Case:** Extract CSS selectors for field configuration.

**Keyboard Shortcut:** `Alt + Shift + C`

**Example Output:** `#username-input`

---

### Copy Element XPath Selector Address

**Description:** Copy the XPath of the selected element.

**How to Use:**
1. Right-click on any element on a web page
2. Select **"Copy Element XPath Selector Address"**
3. XPath is copied to clipboard

**Use Case:** Extract XPath expressions for field configuration.

**Keyboard Shortcut:** `Alt + Shift + X`

**Example Output:** `//input[@id='username-input']`

---

### Copy text of selected element

**Description:** Copy the text content of the selected element.

**How to Use:**
1. Right-click on any element on a web page
2. Select **"Copy text of selected element"**
3. Text content is copied to clipboard

**Use Case:** Extract visible text from elements for validation or testing.

**Keyboard Shortcut:** `Alt + Shift + T`

---

### Copy html of selected element

**Description:** Copy the HTML content of the selected element.

**How to Use:**
1. Right-click on any element on a web page
2. Select **"Copy html of selected element"**
3. HTML content is copied to clipboard

**Use Case:** Extract HTML structure for analysis or debugging.

**Keyboard Shortcut:** `Alt + Shift + H`

---

### Copy name of selected option

**Description:** Copy the name/label of a select option element.

**How to Use:**
1. Right-click on a dropdown option
2. Select **"Copy name of selected option"**
3. Option name is copied to clipboard

**Use Case:** Extract option labels for documentation or testing.

**Keyboard Shortcut:** `Alt + Shift + N`

---

### Copy value of selected option

**Description:** Copy the value attribute of a select option element.

**How to Use:**
1. Right-click on a dropdown option
2. Select **"Copy value of selected option"**
3. Option value is copied to clipboard

**Use Case:** Extract option values for form automation configuration.

**Keyboard Shortcut:** `Alt + Shift + M`

---

### Download select box options

**Description:** Download all options from a select dropdown as a file.

**How to Use:**
1. Right-click on a dropdown/select element
2. Select **"Download select box options"**
3. A file containing all options is downloaded

**Use Case:** Extract all dropdown options for analysis, documentation, or bulk processing.

**Output Format:** CSV or JSON file with option names and values

---

### Allow Right Click?

**Description:** Forcefully enables the right-click context menu on websites that have disabled it using JavaScript or other techniques.

**How to Use:**
1. Right-click on the browser's extension icon or within the extension interface
2. Select **"Allow Right Click?"**
3. The extension will re-enable the context menu functionality for the current page

**Use Case:** Use this when a website blocks the standard right-click menu, preventing you from using extension features like "Inspect Elements" or "Copy Field Selector Address."

---

## Tips

:::tip Quick Access
Use the context menu for rapid element inspection and data extraction without switching between browser tabs or opening developer tools.
:::

:::info Keyboard Shortcuts
All context menu actions also have keyboard shortcuts for even faster access. See [Keyboard Shortcuts](./keyboard-shortcuts.md) for the complete list.
:::

:::tip Multiple Fields
When copying multiple fields, select them using Ctrl+Click (Windows/Linux) or Cmd+Click (Mac) before right-clicking.
:::

---

## Use Cases

### Rapid Form Configuration

Quickly copy element selectors and XPaths while building form automation workflows.

**Workflow:**
1. Navigate to target form
2. Right-click elements to copy selectors
3. Paste into field configuration
4. Test and refine

---

### Response Validation Setup

Use "Copy Form Response" to capture success/error message details for response validation.

**Workflow:**
1. Submit a test form
2. Right-click on the success/error message
3. Select "Copy Form Response"
4. Paste into response settings
5. Configure validation rules

---

### Field Duplication

Copy fields from one form and paste into another to save time on similar configurations.

**Workflow:**
1. Configure a field in Form A
2. Right-click and copy the field
3. Navigate to Form B
4. Paste the field
5. Adjust as needed

---

## Related Documentation

- [Keyboard Shortcuts](./keyboard-shortcuts.md) - Complete list of keyboard shortcuts
- [Field Types](../form-fields/field-types.md) - Overview of all field types
