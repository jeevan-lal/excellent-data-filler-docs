---
prev:
  text: "Field Settings"
  link: "/documentation/form-fields/field-settings"
next:
  text: "String Matching"
  link: "/documentation/field-types/string-matching"
---

# Search Strings and Execute Field Action {#search-strings-and-execute-field-action}

Execute field actions conditionally based on live text or value string matching within target web page elements.

---

## Overview {#overview}

The **Search Strings and Execute Field Action** feature allows the extension to inspect target web page elements (such as notification banners, status tags, table cells, or alert dialogs) and conditionally execute an action only when a matching text or value pattern is detected.

This is particularly useful for:
- Detecting success or error messages before proceeding.
- Clicking action buttons (like "Approve" or "Retry") based on dynamic row status.
- Bypassing or triggering steps based on multiline messages or multi-element conditions.

---

## Configuration Options {#configuration-options}

| Option | Type | Description | Required |
|---|---|---|---|
| **Search Strings and Execute Field Action** | Toggle Switch | Enables or disables this feature for the field. | Yes |
| **Selector Query of those elements on which action is to be executed** | Text Input | CSS selector or XPath for the elements where the action will be performed (e.g. click, input). | Yes |
| **When you want to use any element inside action elements** | Checkbox | Evaluates actions on child elements nested within the target action elements. | No |
| **Selector query of the elements on which the string will be matched** | Text Input | CSS selector or XPath for the elements to inspect for the search string. | Yes |
| **String Matching Value** | Text Input | The target text or pattern to match against. | Yes |
| **Which part of the element is to match the string** | Dropdown | Determines whether to inspect `Element Text` or `Element Value`. | Yes |
| **How to match String** | Dropdown | Match evaluation logic: `Search String` (partial) or `Equal to String` (exact). | Yes |
| **If matching string is multiline** | Toggle Switch | Splits the search string across multiple lines for composite matching. | No |
| **Character that splits string into multiline** | Text Input | Delimiter used to split multiline patterns (default: `"`). | Conditional |
| **If matching string in multiple elements** | Toggle Switch | Evaluates strings across multiple matched elements. | No |
| **Character that splits element** | Text Input | Delimiter used to split and evaluate multiple elements (default: `\|\|`). | Conditional |

> [!IMPORTANT]
> **Element Length Requirement**:
> The number of elements returned by **"Selector Query of those elements on which action is to be executed"** must match the number of elements returned by **"Selector query of the elements on which the string will be matched"** unless using the multiple elements splitting option.
>
> - **Valid**: Action elements count (3) == Match elements count (3)
> - **Invalid**: Action elements count (3) ≠ Match elements count (2)

---

## Which Part of the Element to Match {#match-target-part}

Configure which property of the inspected element is compared against your search string:

| Option | Description | Target Use Case |
|---|---|---|
| **Element Text** | Compares against visible text (`innerText` / `textContent`). | Searching page headings, status labels, alert notices, and table text. |
| **Element Value** | Compares against the input `value` attribute. | Inspecting text inputs, hidden inputs, or dropdown values. |

### DOM Example

```html
<!-- Element Text Target -->
<div class="notification-banner">Payment Successful</div>
<!-- Evaluates text content: "Payment Successful" -->

<!-- Element Value Target -->
<input type="hidden" name="order_status" value="APPROVED" />
<!-- Evaluates attribute value: "APPROVED" -->
```

---

## How to Match the String {#how-to-match-string}

Select the evaluation algorithm for string comparison:

| Match Method | Algorithm | Example Evaluation |
|---|---|---|
| **Search String** | Partial match (substring check). | Target: `"Order #4928 - Success"`<br>Query: `"Success"`<br>Result: **Match Found** |
| **Equal to String** | Strict exact match (case-sensitive complete equality). | Target: `"Active"`<br>Query: `"Active"` → **Match Found**<br>Query: `"active"` → **No Match** |

---

## Detailed Configuration Breakdown {#detailed-configuration}

### Selector Query of Action Elements

- **Input Type**: Text Input
- **Description**: Defines the DOM selector where the action (e.g. typing, clicking, selecting) will be dispatched once a string match succeeds.
- **Example**:
  ```css
  button.btn-proceed
  input[name="confirmation_code"]
  ```

### When You Want to Use Any Element Inside Action Elements

- **Input Type**: Checkbox
- **Description**: When enabled, allows the action to target nested descendant nodes inside the matched action container.
- **Use Case**: When targeting a parent card or table row container, but needing to interact with a specific button or input within it.

### Selector Query of Match Elements

- **Input Type**: Text Input
- **Description**: Specifies the DOM elements inspected for the string value.
- **Example**:
  ```css
  .alert.alert-success
  table tr td.status-col
  span#verification-badge
  ```

### String Matching Value

- **Input Type**: Text Input
- **Description**: The literal string token, status phrase, or pattern to detect.
- **Examples**: `Success`, `Application Approved`, `Payment Completed`.

### Multiline String Matching

- **Toggle Switch**: `If matching string is multiline`
- **Split Character**: Default delimiter is `"` (double quote). You can specify custom delimiters such as `\n`, `|`, or `,`.
- **Behavior**: Splits the configured matching value into separate sub-strings, evaluating whether any or all segments match.

### Multiple Elements Matching

- **Toggle Switch**: `If matching string in multiple elements`
- **Split Character**: Default delimiter is `||` (double pipe).
- **Behavior**: Concatenates and evaluates content across multiple elements matched by the selector query.

---

## Practical Scenarios {#use-cases}

### Scenario 1: Fill Field Only on Success Message

- **Action Element**: `input[name="next_step_notes"]`
- **Match Element**: `.alert-box`
- **String Value**: `Success`
- **Which Part**: `Element Text`
- **How to Match**: `Search String`
- **Behavior**: The notes input will only be populated if the alert box contains the word "Success".

### Scenario 2: Click Submit Only When Status is Approved

- **Action Element**: `button#submit-application`
- **Match Element**: `input[name="approval_status"]`
- **String Value**: `APPROVED`
- **Which Part**: `Element Value`
- **How to Match**: `Equal to String`
- **Behavior**: Dispatches a click on the submit button only when the hidden status input is exactly equal to "APPROVED".

### Scenario 3: Multiline Error Detection

- **Action Element**: `button.retry-btn`
- **Match Element**: `.system-error-log`
- **String Value**: `Timeout Error"Connection Lost"Gateway Unavailable`
- **If Multiline**: Enabled
- **Split Character**: `"`
- **Behavior**: Triggers the retry button if any of the three configured error messages are found.

---

## Best Practices {#best-practices}

### Do's

- **Use Precise Selectors**: Target unique container classes or semantic IDs to prevent false matches on unrelated elements.
- **Inspect Exact Whitespace**: Check browser DevTools to ensure hidden spaces or line breaks are accounted for in exact match mode.
- **Use "Search String" for Dynamic Content**: When text contains dynamic IDs (e.g., `Order 1234 Complete`), use partial matching for `Complete`.
- **Test with Single Fields First**: Confirm your selectors return identical node counts before running production batch automation.

### Don'ts

- **Do Not Use Overly Broad Selectors**: Avoid generic tags like `div` or `span` without distinguishing class or attribute filters.
- **Do Not Forget Case Sensitivity**: String evaluations are strictly case-sensitive.
- **Do Not Ignore Asynchronous Delays**: If the match element loads via AJAX, ensure the field has an appropriate Before Delay configured in [Field Settings](/documentation/form-fields/field-settings#timing-position-settings).

---

## Troubleshooting {#troubleshooting}

| Issue | Likely Cause | Solution |
|---|---|---|
| **Action does not execute** | String mismatch or selector not found | Inspect the element with <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>. Confirm whether text is in `innerText` or `value`. |
| **Element count mismatch error** | Action selector returns different node count than match selector | Ensure both selectors return the same number of elements, or enable `If matching string in multiple elements`. |
| **Partial text match fails** | "Equal to String" is selected instead of "Search String" | Switch the matching mode dropdown to **Search String** for substring matching. |
| **Multiline match not triggering** | Incorrect delimiter character specified | Confirm the split character matches what separates your patterns in the string input. |

---

## Configuration Examples {#examples}

### Example 1: Success Message Detection

```text
Selector Query (Action): input[name="confirmation_id"]
Selector Query (Match): .alert-success
String Matching Value: "Operation completed successfully"
Which part: Element Text
How to match: Search String
```

### Example 2: Exact Value Approval

```text
Selector Query (Action): button.submit-order
Selector Query (Match): input[name="kyc_status"]
String Matching Value: "VERIFIED"
Which part: Element Value
How to match: Equal to String
```

### Example 3: Multiline Error Fallback

```text
Selector Query (Action): button#recovery-btn
Selector Query (Match): .error-container
String Matching Value: "Error 500"Service Unavailable"Bad Gateway"
Which part: Element Text
How to match: Search String
If multiline: ON
Split character: "
```

---

## Related Documentation {#related-documentation}

- <img src="/svg/settings.svg" class="doc-icon" /> [Field Settings](/documentation/form-fields/field-settings)
- <img src="/svg/database.svg" class="doc-icon" /> [Field Types](/documentation/form-fields/field-types)
- <img src="/svg/click.svg" class="doc-icon" /> [Locate Element](/documentation/locate-element)
- <img src="/svg/beaker.svg" class="doc-icon" /> [Testing Site](/documentation/testing-site)
- <img src="/svg/template.svg" class="doc-icon" /> [Segments Routine Automation](/documentation/segment)
