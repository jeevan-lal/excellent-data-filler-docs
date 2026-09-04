# Button Field

Button fields are used to interact with clickable elements on web pages, such as submit buttons, navigation buttons, or any clickable interface elements. They provide various configuration options for optimal button interaction behavior.

## Basic Configuration

### Field Properties

| Property                 | Description                              | Example                              |
| ------------------------ | ---------------------------------------- | ------------------------------------ |
| **Field Name**           | Unique identifier for the field          | `submitButton`, `nextButton`, `save` |
| **Field Type**           | Set to **Button** for clickable elements | `Button`                             |
| **Field Selector Type**  | Method to locate the field element       | `Selector`, `Id`, `XPath`            |
| **Field Selector Query** | Unique address to locate the field       | `#submit`, `button[type="submit"]`   |
| **Field Value**          | Data source for button interaction       | Excel (.xlsx) column or default value |

## Button Field Settings

### Button Click Behavior {#button-click-behavior}

Configure how the button interacts based on Excel (.xlsx) data values.

**Core Behavior:**

- **Excel Value Priority** - Button behavior depends on Excel (.xlsx) column value
- **Conditional Clicking** - Button only clicks when Excel value is not "not-click"
- **Skip Behavior** - Button is skipped when Excel value is "not-click"

**Configuration:**

- **Toggle Switch**: Enable/disable conditional button clicking
- **Excel Value Check**: System checks Excel (.xlsx) column for "not-click" value
- **Click Action**: Button clicks only when Excel value is not "not-click"

**Example Scenarios:**

```
Excel Column Value: "click" → Button gets clicked
Excel Column Value: "not-click" → Button is skipped
Excel Column Value: "" (empty) → Button gets clicked
Excel Column Value: "submit" → Button gets clicked
```

---

### Element Detection Settings {#element-detection-settings}

Configure how the extension waits for and interacts with button elements.

#### Wait until element is found in the page

- **Purpose**: Ensures button exists in DOM before interaction
- **Use Case**: Dynamic content, AJAX-loaded buttons
- **Configuration**: Toggle ON/OFF

#### Wait until element is visible in the page

- **Purpose**: Ensures button is both found and visible
- **Use Case**: Hidden buttons, CSS visibility controls
- **Configuration**: Toggle ON/OFF

### Trigger Javascript Event {#javascript-event-triggering}

Configure JavaScript events to be triggered on the button element.

**Supported Events:**

- **click** - Triggers when button is clicked
- **focus** - Triggers when button receives focus
- **blur** - Triggers when button loses focus
- **mousedown** - Triggers on mouse press
- **mouseup** - Triggers on mouse release
- **mouseover** - Triggers when mouse hovers over button

**Configuration:**

- **Toggle Switch**: Enable JavaScript event triggering
- **Event Selection**: Choose specific events to trigger
- **Multiple Events**: Can select multiple events simultaneously

:::tip Submit Form Without Clicking Submit Button
If you need to submit a form using `form.submit()` without clicking the submit button, use the **Button** field type with these settings:

1. Set the **form query** in the **Field Selector Query** option (e.g., `#myForm` or `form.login-form`)
2. Enable **Trigger Javascript Event** option
3. Select **submit** event from the event list

This will trigger the form's submit event programmatically without requiring a click on the submit button.

**Example:**
- **Field Selector Query**: `#loginForm`
- **Trigger Javascript Event**: Enabled
- **Event**: `submit`
:::

### Open Links in New Tab? {#open-links-in-new-tab}

Configure whether links clicked by the button open in a new tab.

**Configuration:**

- **Toggle Switch**: Enable/disable opening links in a new browser tab.

---

## Button Interaction Types

### Standard Click

- **Behavior**: Single click action
- **Use Case**: Submit buttons, navigation buttons
- **Configuration**: Default button behavior

### Skip Button

- **Behavior**: Button is ignored when Excel (.xlsx) value is "not-click"
- **Use Case**: Optional form steps, conditional workflows
- **Configuration**: Excel value "not-click" skips button

### Automatic Click Confirm Dialog {#automatic-click-confirm-dialog}

When executing a button field, a confirm dialog may appear asking: **"Do you want the button to be clicked automatically in the next entry?"** with two buttons:

- **No**: If you click **No**, then after page reload, this confirm dialog will appear again on the next entry.
- **Yes**: If you click **Yes**, then after page reload, the dialog will not appear and the button will be clicked directly.

:::note
If the user closes the tab or browser, this confirm dialog will appear again on restart.
:::

## Troubleshooting {#troubleshooting}

### Button Not Clicking

- Check selector accuracy
- Verify element visibility
- Test with different selectors
- Check Excel (.xlsx) value format

## Next Steps

- <img src="/svg/form.svg" class="doc-icon" /> [Field Types](/documentation/form-fields/field-types) — Learn about different field types
- <img src="/svg/settings.svg" class="doc-icon" /> [Field Response Actions](/documentation/form-fields/field-response-action) — Configure response behaviors
- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template](/documentation/site/site-excel-template) — Prepare Excel (.xlsx) templates
- <img src="/svg/browser.svg" class="doc-icon" /> [Site Settings](/documentation/site/site-settings) — Configure site-wide automation settings

