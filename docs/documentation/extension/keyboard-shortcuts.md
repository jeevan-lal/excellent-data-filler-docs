# Keyboard Shortcuts

Trigger extension actions instantly using keyboard shortcuts for faster workflow automation and improved productivity.

## Overview

Excellent Data Filler provides comprehensive keyboard shortcuts for all major actions. You can customize these shortcuts via Chrome's extension shortcuts page at `chrome://extensions/shortcuts`.

---

## Configuring Shortcuts

### Access Shortcuts Settings

1. Open Chrome and navigate to: `chrome://extensions/shortcuts`
2. Find **"Excellent Data Filler"** in the list
3. Click on the pencil icon next to any shortcut to customize it
4. Press your desired key combination
5. Click outside the input to save

:::tip Customization
All shortcuts can be customized to your preference. The shortcuts listed below are the default configurations.
:::

---

## Available Shortcuts

### Extension Control

| Action | Default Shortcut | Description |
|--------|------------------|-------------|
| **Start/Pause** | `Alt + Q` | Start or pause the form automation process |

**Use Case:** Quickly start or pause automation without clicking the extension icon.

---

### Form & Site Management

| Action | Default Shortcut | Description |
|--------|------------------|-------------|
| **Insert Site** | `Alt + Shift + S` | Add a new site configuration |
| **Insert Form** | `Alt + Shift + F` | Add a new form to the current site |

**Use Case:** Rapidly create new site and form configurations while building automation workflows.

---

### Element Inspection

| Action | Default Shortcut | Description |
|--------|------------------|-------------|
| **Inspect Elements** | `Alt + Shift + I` | Open the element inspector tool |

**Use Case:** Quickly inspect page elements to identify selectors and XPaths for field configuration.

---

### Copy Operations

#### Field & Response

| Action | Default Shortcut | Description |
|--------|------------------|-------------|
| **Copy Field** | `Alt + C` | Copy selected field(s) configuration |
| **Copy Form Response** | `Alt + Shift + R` | Copy element text, selector, XPath, and URL |

**Use Case:** Duplicate field configurations or capture element details for response validation.

---

#### Element Properties

| Action | Default Shortcut | Description |
|--------|------------------|-------------|
| **Copy Element Selector** | `Alt + Shift + C` | Copy CSS selector of selected element |
| **Copy Element XPath** | `Alt + Shift + X` | Copy XPath of selected element |
| **Copy Element Text** | `Alt + Shift + T` | Copy text content of selected element |
| **Copy Element HTML** | `Alt + Shift + H` | Copy HTML content of selected element |

**Use Case:** Quickly extract element properties for field configuration or debugging.

---

#### Select Options

| Action | Default Shortcut | Description |
|--------|------------------|-------------|
| **Copy Option Name** | `Alt + Shift + N` | Copy the name/label of a select option |
| **Copy Option Value** | `Alt + Shift + M` | Copy the value attribute of a select option |

**Use Case:** Extract dropdown option details for form automation configuration.

---

## Complete Shortcuts Reference

| Action | Shortcut | Category |
|--------|----------|----------|
| **Start/Pause** | `Alt + Q` | Control |
| **Inspect Elements** | `Alt + Shift + I` | Inspection |
| **Insert Site** | `Alt + Shift + S` | Management |
| **Insert Form** | `Alt + Shift + F` | Management |
| **Copy Field** | `Alt + C` | Copy |
| **Copy Form Response** | `Alt + Shift + R` | Copy |
| **Copy Element Selector** | `Alt + Shift + C` | Copy |
| **Copy Element XPath** | `Alt + Shift + X` | Copy |
| **Copy Element Text** | `Alt + Shift + T` | Copy |
| **Copy Element HTML** | `Alt + Shift + H` | Copy |
| **Copy Option Name** | `Alt + Shift + N` | Copy |
| **Copy Option Value** | `Alt + Shift + M` | Copy |

---

## Shortcut Patterns

### Modifier Keys

All shortcuts use **Alt** as the primary modifier key:
- `Alt + [Key]` - Primary actions (Start/Pause, Copy Field)
- `Alt + Shift + [Key]` - Secondary actions (Inspect, Insert, Copy Element Properties)

:::info Consistency
The shortcut pattern is designed for easy memorization:
- **Alt + Q** - Quick start/pause
- **Alt + C** - Copy field
- **Alt + Shift + [Letter]** - Specific copy actions (C=Selector, X=XPath, T=Text, etc.)
:::

---

## Tips & Best Practices

:::tip Memorization
Focus on learning the most frequently used shortcuts first:
1. `Alt + Q` - Start/Pause
2. `Alt + Shift + I` - Inspect Elements
3. `Alt + Shift + C` - Copy Selector
4. `Alt + Shift + X` - Copy XPath
:::

:::warning Conflicts
If a shortcut conflicts with another extension or browser feature, customize it at `chrome://extensions/shortcuts`.
:::

:::info Global vs In-Extension
Some shortcuts work globally (anywhere in Chrome), while others only work when the extension popup is open or when inspecting elements.
:::

:::tip Workflow Efficiency
Combine shortcuts with the [Context Menu](./context-menu.md) for maximum productivity. Use shortcuts for frequent actions and context menu for occasional tasks.
:::

---

## Common Workflows

### Quick Element Inspection

1. Press `Alt + Shift + I` to open inspector
2. Hover over target element
3. Press `Alt + Shift + C` to copy selector
4. Or press `Alt + Shift + X` to copy XPath
5. Paste into field configuration

---

### Rapid Form Building

1. Press `Alt + Shift + S` to insert new site
2. Press `Alt + Shift + F` to insert new form
3. Configure fields using element inspection
4. Press `Alt + C` to copy fields for reuse
5. Press `Alt + Q` to start automation

---

### Response Validation Setup

1. Submit a test form
2. Press `Alt + Shift + R` on success/error message
3. Paste captured data into response settings
4. Configure validation rules
5. Test with `Alt + Q`

---

## Troubleshooting

### Shortcut Not Working

**Possible Causes:**
- Shortcut conflicts with another extension
- Browser focus is not on the correct element
- Shortcut is disabled in Chrome settings

**Solutions:**
1. Check `chrome://extensions/shortcuts` for conflicts
2. Ensure the extension is enabled
3. Try customizing the shortcut to a different key combination
4. Restart Chrome if shortcuts stop working

---

### Customizing Shortcuts

**Steps:**
1. Navigate to `chrome://extensions/shortcuts`
2. Find "Excellent Data Filler"
3. Click the pencil icon next to the shortcut
4. Press your desired key combination
5. Ensure no conflicts with existing shortcuts
6. Click outside to save

**Recommendations:**
- Use modifier keys (Alt, Ctrl, Shift) to avoid conflicts
- Keep shortcuts memorable and related to their function
- Test shortcuts after customization

---

## Related Documentation

- [Context Menu](./context-menu.md) - Right-click menu actions
