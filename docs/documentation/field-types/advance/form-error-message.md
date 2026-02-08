# Form Error Message {#form-error-message}

This field type allows you to detect and handle error messages that appear on the page after form submission. It works similarly to [Form Error Response](/documentation/form-response/form-error-response), but **does not check URLs**.

:::tip Key Difference
Unlike Form Error Response, this field type:
- **Does NOT use** "Error Page URL" option
- **Does NOT use** "Match URL Types" option
- Works on the current page without URL validation
:::

## 🎯 When to Use {#when-to-use}

Use this field type when you want to:
- Detect error messages that appear on the same page (no redirect)
- Handle multiple error messages in different locations on the page
- Stop or save the entry based on error detection
- Use it as a field within your form configuration

:::info Multiple Error Messages
If multiple error messages can appear in different locations on the page, this field type can match **any of them** regardless of their position.
:::

## ⚙️ Field Options {#field-options}

| Option | Description |
| ------ | ----------- |
| [Error Response Type](#error-response-type) | The type of error message that appears on the page |
| [Enter Error Message](#enter-error-message) | The error message to match after form submission |
| [Entry Action Type](#entry-action-type) | What to do when error is detected (stop or save) |
| [Delay Time Before Run Action](#delay-time-before-run-action) | Time delay before the [action](#action) is executed |
| [Action](#action) | Action to execute when the error response matches |

## 📋 Additional Options {#additional-options}

| Option | Description |
| ------ | ----------- |
| If excel data is not found then don't execute the action | Prevents action execution when Excel data is empty |
| If last excel entry completed then don't execute the action | Prevents action execution after the last entry is completed |
| If there is no Excel data, update only scraper data in Excel | Saves only scraped data when no Excel template is used |
| Can error message be anything in this element | Matches any message in the given element (useful for dynamic messages) |
| Remove excel column value from current entry? | Removes column value from current entry after processing |
| Set custom message after error message matched? | Sets a custom short message instead of the full error message |

## 🔍 Error Response Type {#error-response-type}

Choose how the extension should detect the error response:

### 1. Matching Message In Page {#matching-message-in-page}

Searches for the error message anywhere in the page content.

**Options:**
- **Message Selector Query** (optional): Limit the search to a specific element

<img src="/image/entry-response-08.png" alt="Error Message in Page">

:::tip Multiple Locations
This is especially useful when error messages can appear in different locations on the page. The extension will search the entire page by default.
:::

### 2. Matching Message In Browser Alert {#matching-message-in-alert}

Detects error messages that appear in JavaScript alert dialogs.

:::tip
Enable [Hide JavaScript Dialog](/documentation/settings#hide-javascript-dialog) in settings to automatically handle alerts.
:::

<img src="/image/entry-response-09.png" alt="Alert Dialog">

### 3. Matching Message In Page Element Value {#matching-message-in-element-value}

Checks for the error message in a form field's value (e.g., input box).

**Required:**
- **Message Selector Query**: The selector of the input element

<img src="/image/entry-response-06.png" width="500" height="500" alt="Element Value">

### 4. Checking Element Exists In Page {#checking-element-exists}

Marks entry as having an error when a specific element appears on the page.

**Required:**
- **Message Selector Query**: The selector of the element to check

:::warning Important
The element should NOT be present before submission and should only appear after an error occurs.
:::

## 📝 Enter Error Message {#enter-error-message}

Enter the error message(s) to match. You can add multiple messages - if any matches, the extension will handle the error according to your [Entry Action Type](#entry-action-type).

**Features:**
- Support for multiple messages
- Dynamic message support using variables
- Partial message matching

**Example:**

<img src="/image/entry-response-10.png" alt="Error Messages">

::: details Dynamic Error Messages
Use Excel column variables in your error messages:

```
Error: {$Email$} is already registered
```

Or use partial matching:
```
already registered
```
This will match any error message containing "already registered".
:::

::: details Pre-existing Error Messages
If an error message is already present on the page **before** form submission, the extension will detect it and **will not fill the entry** to prevent duplicate submissions.
:::

## 🎬 Entry Action Type {#entry-action-type}

Choose what happens when an error message is detected:

### 1. Stop Entry
- Stops processing the current entry
- Entry is NOT marked as saved
- Useful when you want to manually fix the issue

### 2. Save Error in the Entry Data
- Marks the entry as saved
- Stores the error message in the Excel entry
- Continues to the next entry
- Useful for logging errors and reviewing later

## ⏱️ Delay Time Before Run Action {#delay-time-before-run-action}

Set a delay (in milliseconds) before executing the action.

<Badge type="tip" text="1 second = 1000 milliseconds" />

## 🚀 Action {#action}

Choose what happens after the error message is matched:

- **Redirect to Page** - Navigate to a different page
- **Re-Execute Form** - Fill the form again (useful for retrying)
- **Click on Button** - Click a specific button element
- **Page Reload** - Reload the current page
- **Execute Segment** - Run a specific segment of fields

## ⚠️ Important Notes {#important-notes}

:::danger Critical
When you use this field type, **all fields below it will NOT execute**. Always place this field type **at the end** of your field list.
:::

**Execution Flow:**
```
Field 1 ✅ Executes
Field 2 ✅ Executes
Field 3 ✅ Executes
Form Error Message ✅ Executes & Detects Error
Field 4 ❌ Does NOT Execute
Field 5 ❌ Does NOT Execute
```

## 💡 Use Cases {#use-cases}

### Handling Variable Error Locations

If your form shows errors in different places depending on the error type:

```
Login Error: Top of page
Validation Error: Next to field
Server Error: Modal popup
```

This field type can detect all of them without specifying exact locations.

### Logging Errors for Review

Set **Entry Action Type** to "Save Error in the Entry Data" to:
1. Continue processing all entries
2. Mark entries with errors
3. Review and fix them later in Excel

### Retry on Temporary Errors

Set **Action** to "Re-Execute Form" to automatically retry when temporary errors occur (e.g., network issues).

## 🔗 Related Documentation {#related}

- [Form Error Response](/documentation/form-response/form-error-response) - Similar functionality with URL checking
- [Current Entry as Saved](/documentation/field-types/advance/current-entry-as-saved) - Handle success responses
- [Form Success Response](/documentation/form-response/form-success-response) - Success handling with URL checking
