# Javascript Dialog

Run and hide native JavaScript dialogs (`alert`, `confirm`, `prompt`) on the page.

## Alert Dialog

Triggers an `alert()` dialog on the page. You can set the message string directly in the field's default value or populate it dynamically from an Excel (.xlsx) column.

## Confirm Dialog

Triggers a `confirm()` dialog on the page. You can configure the confirmation prompt text in the field's default value or populate it from an Excel (.xlsx) column.

## Prompt Dialog

Triggers a `prompt()` dialog on the page. You can specify the prompt's default response value in the field's default value or map it from an Excel (.xlsx) column.

### Prompt String

Specify the text message displayed inside the prompt dialog.

## Hide Alert Dialog

Automatically intercepts and dismisses `alert()` dialogs that appear on the page without blocking automation.

## Get Alert Dialog Message

Captures the message text from incoming alert dialogs on the page.

### Alert Dialog Message

The message string to match against incoming alerts can be defined in the field's default value or mapped from an Excel (.xlsx) column.

### Wait until the alert message is received

Keeps the automation waiting until an alert dialog with the expected text is intercepted.

### Delete the message after getting the alert message

Clears the captured alert message once processed so subsequent checks can receive new alerts.

## Hide Confirm Dialog

To automatically click the **OK** button on a confirm dialog, provide the target confirm message in the field's default value. You can specify multiple messages separated by double commas (`,,`). If you leave the message empty, the extension will automatically click **OK** on any confirm dialog that appears.

## Next Steps

- <img src="/svg/form.svg" class="doc-icon" /> [Javascript Events](/documentation/field-types/javascript-events) — Programmatically trigger DOM events
- <img src="/svg/form.svg" class="doc-icon" /> [Field Settings](/documentation/form-fields/field-settings) — Advanced field configuration
- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template](/documentation/site/site-excel-template) — Prepare Excel (.xlsx) templates
- <img src="/svg/browser.svg" class="doc-icon" /> [Site Settings](/documentation/site/site-settings) — Configure site-wide automation settings

