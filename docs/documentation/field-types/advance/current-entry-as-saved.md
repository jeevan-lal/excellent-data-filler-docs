# Current Entry as Saved {#current-entry-as-saved}

This field type allows you to mark the current Excel entry as **saved/completed** based on matching a success message or element in the page. It works similarly to [Form Success Response](/documentation/form-response/form-success-response), but **does not check URLs**.

:::tip Key Difference
Unlike Form Success Response, this field type:
- **Does NOT use** "Success Page URL" option
- **Does NOT use** "Match URL Types" option
- Works on the current page without URL validation
:::

## 🎯 When to Use {#when-to-use}

Use this field type when you want to:
- Mark an entry as saved based on a success message appearing on the page
- Complete the entry without checking if the URL has changed
- Handle success responses that appear on the same page (no redirect)
- Use it as a field within your form configuration

## ⚙️ Field Options {#field-options}

| Option | Description |
| ------ | ----------- |
| [Success Response Type](#success-response-type) | The type of success message that appears on the page |
| [Enter Success Message](#enter-success-message) | The success message to match after the entry is processed |
| [Delay Time Before Run Action](#delay-time-before-run-action) | Time delay before the [action](#action) is executed |
| [Action](#action) | Action to execute when the success response matches |

## 📋 Additional Options {#additional-options}

| Option | Description |
| ------ | ----------- |
| If excel data is not found then don't execute the action | Prevents action execution when Excel data is empty |
| If last excel entry completed then don't execute the action | Prevents action execution after the last entry is completed |
| If there is no Excel data, update only scraper data in Excel | Saves only scraped data when no Excel template is used |
| Can success message be anything in this element | Matches any message in the given element (useful for dynamic messages) |
| Remove excel column value from current entry? | Removes column value from current entry after processing |
| Set custom message after success message matched? | Sets a custom short message instead of the full success message |

## 🔍 Success Response Type {#success-response-type}

Choose how the extension should detect the success response:

### 1. Matching Message In Page {#matching-message-in-page}

Searches for the success message anywhere in the page content.

**Options:**
- **Message Selector Query** (optional): Limit the search to a specific element

<img src="/image/entry-response-05.png" alt="Success Message in Page">

### 2. Matching Message In Browser Alert {#matching-message-in-alert}

Detects success messages that appear in JavaScript alert dialogs.

:::tip
Enable [Hide JavaScript Dialog](/documentation/settings#hide-javascript-dialog) in settings to automatically handle alerts.
:::

<img src="/image/js-alert-dialog.png" alt="Alert Dialog">

### 3. Matching Message In Page Element Value {#matching-message-in-element-value}

Checks for the success message in a form field's value (e.g., input box).

**Required:**
- **Message Selector Query**: The selector of the input element

### 4. Checking Element Exists In Page {#checking-element-exists}

Marks entry as saved when a specific element appears on the page.

**Required:**
- **Message Selector Query**: The selector of the element to check

:::warning Important
The element should NOT be present before the action and should only appear after success.
:::

## 📝 Enter Success Message {#enter-success-message}

Enter the success message(s) to match. You can add multiple messages - if any matches, the entry will be marked as saved.

**Features:**
- Support for multiple messages
- Dynamic message support using variables
- Partial message matching

**Example:**

<img src="/image/entry-response-07.png" alt="Success Messages">

::: details Dynamic Success Messages
Use Excel column variables in your success messages:

```
Thank you {$Name$}, your form has been submitted!
```

Or use partial matching:
```
Thank you
```
This will match "Thank you, your form has been submitted!" or any message containing "Thank you".
:::

## ⏱️ Delay Time Before Run Action {#delay-time-before-run-action}

Set a delay (in milliseconds) before executing the action.

<Badge type="tip" text="1 second = 1000 milliseconds" />

## 🚀 Action {#action}

Choose what happens after the success message is matched:

- **Redirect to Page** - Navigate to a different page
- **Re-Execute Form** - Fill the form again with the next entry
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
Current Entry as Saved ✅ Executes & Marks Entry as Saved
Field 4 ❌ Does NOT Execute
Field 5 ❌ Does NOT Execute
```

## 🔗 Related Documentation {#related}

- [Form Success Response](/documentation/form-response/form-success-response) - Similar functionality with URL checking
- [Form Error Message](/documentation/field-types/advance/form-error-message) - Handle error responses
- [Form Error Response](/documentation/form-response/form-error-response) - Error handling with URL checking
