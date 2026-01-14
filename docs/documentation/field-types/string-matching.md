# String Matching

Match strings in page elements and execute field actions based on the result.

## Overview

The String Matching field type allows you to compare values or text of elements on a web page against specified strings. You can use various operators and matching types to create conditional logic for your automation workflows.

## Configuration Options

| Option | Type | Description | Required | Conditional |
|--------|------|-------------|----------|-------------|
| **Which option of the element to match** | Dropdown | Select which property of the element to match | Yes | - |
| **Element Attribute Name** | Text Input | Name of the attribute to match | Conditional | Shows when "Element Attribute" is selected |
| **Field Name** | Text Input | Field name to match against | Conditional | Shows when "Field Name" is selected |
| **Loop Field Name** | Text Input | Loop field name for iteration matching | Conditional | Shows when "Loop Index" is selected |
| **Store Key Name** | Text Input | Local storage key name | Conditional | Shows when "Local Data" is selected |
| **Operator** | Dropdown | Comparison operator for matching | Yes | - |
| **Matching Type** | Dropdown | Type of string matching to perform | Conditional | Only for `==` and `!=` operators |
| **String Matching Value** | Text Input | The value to match against | Yes | - |
| **Search string in the multiple element text** | Toggle Switch | Search across multiple elements | No | - |
| **Returns true if the string matches all element content** | Toggle Switch | Require match in all elements | No | - |
| **Convert the text into lowercase letters and then match the text** | Toggle Switch | Case-insensitive matching | No | - |
| **Remove extra space from text then match the text** | Toggle Switch | Normalize whitespace before matching | No | - |
| **Remove all space from text then match the text** | Toggle Switch | Remove all spaces before matching | No | - |
| **Wait until the string matches** | Toggle Switch | Wait for string to appear | No | - |

---

## String Matching Value

The **String Matching Value** field accepts the value to match against the element. You can use static text, Excel field columns, or variables.

### Using Static Text

Enter a static string value directly:

```
Success
Error: Invalid input
Active
```

### Using Excel Field Column

Reference data from your Excel sheet by using the field column name:

**Syntax:** `{$columnName$}`

**Example:**

```javascript
// Excel Column: "expectedStatus"
// Excel Data: "Active"

String Matching Value: {$expectedStatus$}
// Will match against: "Active"
```

**Use Case:** When the matching string varies per row in your Excel data.

### Using Variables

Use predefined variables or custom variables in the matching string:

**Example:**

```javascript
// Using predefined variables
String Matching Value: {$ENTRY_INDEX$}
// Matches against current row number

// Using custom variables
String Matching Value: {$customVariable$}
// Matches against custom variable value
```

### Using Default Value Field

You can also set the string matching value in the **Default Value** field option, which allows you to:
- Use complex expressions
- Combine multiple variables
- Apply functions to generate dynamic matching strings

**Example:**

```javascript
// In Default Value field
{$firstName$} {$lastName$}

// Result
String Matching Value: "John Doe"
```

:::tip Dynamic Matching
Use Excel field columns or variables when you need different matching strings for each row or when the matching string depends on other data.
:::

---

## Which Option of the Element to Match

Select which property of the element to use for string matching.

**Available Options:**

| Option | Description | Use Case |
|--------|-------------|----------|
| **Element Text/Value** | Match against both text and value | Default option, checks both properties |
| **Element Text** | Match against visible text content | Search for displayed text |
| **Element Value** | Match against the value attribute | Search for input values or hidden data |
| **Element HTML** | Match against the HTML content | Search within HTML markup |
| **Element Attribute** | Match against a specific attribute | Search for attribute values |
| **Entry Index** | Match against the current entry index | Compare with row number |
| **Field Name** | Match against the field name | Compare with field identifier |
| **Loop Index** | Match against the loop iteration index | Compare with loop counter |
| **Local Data** | Match against locally stored data | Compare with saved data |

**Example:**

```html
<!-- Element Text -->
<div>Welcome User</div>
<!-- Matches: "Welcome User" -->

<!-- Element Value -->
<input type="text" value="John Doe">
<!-- Matches: "John Doe" -->

<!-- Element HTML -->
<div><span>Hello</span> World</div>
<!-- Matches: "<span>Hello</span> World" -->

<!-- Element Attribute -->
<div data-status="active">Content</div>
<!-- Matches attribute: "active" -->
```

---

### Conditional Fields

Some options require additional configuration fields:

#### Element Attribute Name

**Appears when:** "Element Attribute" is selected

**Field:** Text Input

**Description:** Enter the name of the attribute to match against.

**Example:**

```html
<div data-status="active" class="item">Content</div>

Which option: Element Attribute
Element Attribute Name: data-status
String Matching Value: active
Result: ✅ Match (attribute value is "active")
```

**Common Attributes:**
- `data-*` - Custom data attributes
- `class` - CSS class names
- `id` - Element ID
- `href` - Link URLs
- `src` - Image/script sources
- `title` - Tooltip text
- `aria-*` - Accessibility attributes

---

#### Field Name

**Appears when:** "Field Name" is selected

**Field:** Text Input

**Description:** Enter the field name to match against.

**Example:**

```javascript
Which option: Field Name
Field Name: emailField
String Matching Value: email
Result: Matches if current field name contains "email"
```

**Use Case:** Conditional logic based on which field is being processed.

---

#### Loop Field Name

**Appears when:** "Loop Index" is selected

**Field:** Text Input

**Description:** Enter the loop field name to match against the loop iteration index.

**Example:**

```javascript
Which option: Loop Index
Loop Field Name: itemLoop
String Matching Value: 3
Result: Matches when loop iteration is 3
```

**Use Case:** Execute actions only on specific loop iterations.

---

#### Store Key Name

**Appears when:** "Local Data" is selected

**Field:** Text Input with Prefix

**Prefix:** `CTH_EDF_DB_LOCAL_`

**Description:** Enter the key name for locally stored data to match against.

**Example:**

```javascript
Which option: Local Data
Store Key Name: CTH_EDF_DB_LOCAL_userStatus
String Matching Value: active
Result: Matches if stored data equals "active"
```

**Use Case:** Match against data stored in browser's local storage.

**Note:** The prefix `CTH_EDF_DB_LOCAL_` is automatically added to the key name.

**Related:** Use the [Set Local Data](/documentation/field-types/browser-actions#set-local-data) field type to store data in local storage.

---

## Operator

Select the comparison operator for string matching.

**Available Operators:**

| Operator | Description | Use Case |
|----------|-------------|----------|
| **==** | Equal to | Check if strings are equal |
| **!=** | Not equal to | Check if strings are different |
| **>** | Greater than | Compare string length or numeric values |
| **<** | Less than | Compare string length or numeric values |
| **>=** | Greater than or equal to | Compare string length or numeric values |
| **<=** | Less than or equal to | Compare string length or numeric values |

**Note:** The **Matching Type** option is only available when using `==` or `!=` operators.

**Example:**

```javascript
// Equal to (==)
Element Text: "Success"
Operator: ==
String Value: "Success"
Result: ✅ Match

// Not equal to (!=)
Element Text: "Error"
Operator: !=
String Value: "Success"
Result: ✅ Match

// Greater than (>)
Element Text: "100"
Operator: >
String Value: "50"
Result: ✅ Match (100 > 50)

// Less than (<)
Element Text: "25"
Operator: <
String Value: "50"
Result: ✅ Match (25 < 50)
```

---

## Matching Type

Select the type of string matching to perform. This option is **only available** when using `==` or `!=` operators.

**Available Options:**

| Matching Type | Description | Use Case |
|---------------|-------------|----------|
| **Search String in Any Position** | Find substring anywhere in the element | Flexible matching, partial matches |
| **Match String from Start-End Position** | Match substring at specific positions | Positional matching with start/end indices |
| **Equal to String** | Exact match of entire string | Precise matching, no partial matches |

:::info Conditional Availability
The **Matching Type** option only appears when **Operator** is set to `==` or `!=`. For other operators (`>`, `<`, `>=`, `<=`), matching type is not applicable.
:::

---

### Search String in Any Position

**Description:** Searches for the string anywhere within the element content.

**Example:**

```javascript
Element Text: "Welcome to Excellent Data Filler"
Matching Type: Search String in Any Position
String Value: "Excellent"
Result: ✅ Match Found (substring exists)

Element Text: "Hello World"
Matching Type: Search String in Any Position
String Value: "World"
Result: ✅ Match Found (substring exists)
```

---

### Match String from Start-End Position

**Description:** Matches the string from the beginning to the end of the element content using regex pattern matching.

**How it works:** Uses a regular expression pattern `^matchingString$` where:
- `^` - Matches the start of the string
- `$` - Matches the end of the string
- The matching string must appear from start to end (anchored match)

**RegEx Pattern:**
```javascript
// Pattern: /^matchingString$/
var reg = new RegExp("^" + escapeRegExp(matchingString) + "$", 
    ((options.isConvertStringLowercase) ? "gi" : "g"));

// Returns true if element string matches the pattern
if (elementString.match(reg) !== null) {
    return { status: true, elementString: elementString, matchingString: matchingString };
}
```

**Example:**

```javascript
Element Text: "Option"
Matching Type: Match String from Start-End Position
String Value: "Option"
Pattern: /^Option$/
Result: ✅ Match Found (exact match from start to end)

Element Text: "Option 1"
Matching Type: Match String from Start-End Position
String Value: "Option"
Pattern: /^Option$/
Result: ❌ No Match (doesn't match from start to end)

Element Text: "My Option"
Matching Type: Match String from Start-End Position
String Value: "Option"
Pattern: /^Option$/
Result: ❌ No Match (doesn't start with "Option")
```

**Use Case:** When you need to ensure the string matches from the very beginning to the very end of the element content, similar to an exact match but using regex anchors.

---

### Equal to String

**Description:** Requires exact match of the entire element content.

**Example:**

```javascript
Element Text: "Welcome to Excellent Data Filler"
Matching Type: Equal to String
String Value: "Welcome to Excellent Data Filler"
Result: ✅ Match Found (exact match)

Element Text: "Welcome to Excellent Data Filler"
Matching Type: Equal to String
String Value: "Excellent"
Result: ❌ No Match (not exact match)
```

---

## Additional Options

### Search String in the Multiple Element Text

**Toggle Switch**

**Description:** Search for the string across multiple elements on the page.

**Use Case:** When you need to find a string in any of several elements.

**Example:**
```javascript
Elements: [".status-1", ".status-2", ".status-3"]
String Value: "Active"
Result: Matches if "Active" is found in any element
```

---

### Returns True if the String Matches All Element Content

**Toggle Switch**

**Description:** Require the string to match in all selected elements, not just one.

**Use Case:** When all elements must contain the matching string.

**Example:**
```javascript
Elements: [".item-1", ".item-2", ".item-3"]
String Value: "Complete"
Result: Matches only if all elements contain "Complete"
```

---

### Convert the Text into Lowercase Letters and Then Match the Text

**Toggle Switch**

**Description:** Perform case-insensitive string matching by converting both strings to lowercase.

**Use Case:** When case doesn't matter for matching.

**Example:**
```javascript
Element Text: "SUCCESS"
String Value: "success"
Convert to lowercase: ON
Result: ✅ Match (both become "success")
```

---

### Remove Extra Space from Text Then Match the Text

**Toggle Switch**

**Description:** Normalize whitespace by removing extra spaces before matching.

**Use Case:** Handle inconsistent spacing in text.

**Example:**
```javascript
Element Text: "Hello    World"
String Value: "Hello World"
Remove extra space: ON
Result: ✅ Match (extra spaces removed)
```

---

### Remove All Space from Text Then Match the Text

**Toggle Switch**

**Description:** Remove all spaces from both strings before matching.

**Use Case:** Match strings regardless of spacing.

**Example:**
```javascript
Element Text: "Hello World"
String Value: "HelloWorld"
Remove all space: ON
Result: ✅ Match (all spaces removed)
```

---

### Wait Until the String Matches

**Toggle Switch**

**Description:** Wait for the string to appear in the element before proceeding.

**Use Case:** Handle dynamic content that loads after page load.

**Example:**
```javascript
Element Text: (initially empty, then "Loaded")
String Value: "Loaded"
Wait until matches: ON
Result: Waits until "Loaded" appears, then matches
```

---

## Use Cases

### Conditional Form Filling

**Scenario:** Fill a field only if a status message shows "Ready".

**Configuration:**
- **Which option:** Element Text
- **Operator:** ==
- **Matching Type:** Equal to String
- **String Value:** Ready

**Result:** Field action executes only when element text equals "Ready".

---

### Case-Insensitive Search

**Scenario:** Match "success" regardless of case.

**Configuration:**
- **Which option:** Element Text
- **Operator:** ==
- **Matching Type:** Search String in Any Position
- **String Value:** success
- **Convert to lowercase:** ON

**Result:** Matches "SUCCESS", "Success", "success", etc.

---

### Numeric Comparison

**Scenario:** Execute action if value is greater than 100.

**Configuration:**
- **Which option:** Element Value
- **Operator:** >
- **String Value:** 100

**Result:** Matches when element value > 100.

---

### Multiple Element Search

**Scenario:** Check if any status element contains "Complete".

**Configuration:**
- **Which option:** Element Text
- **Operator:** ==
- **Matching Type:** Search String in Any Position
- **String Value:** Complete
- **Search in multiple elements:** ON

**Result:** Matches if any element contains "Complete".

---

## Best Practices

### ✅ Do's

- **Use appropriate operators** - Choose the right operator for your comparison
- **Enable case-insensitive matching** - When case doesn't matter
- **Remove extra spaces** - For consistent matching with dynamic content
- **Use "Equal to String"** - For exact matching requirements
- **Use "Search String"** - For flexible partial matching
- **Wait for dynamic content** - Enable "Wait until matches" for AJAX content

### ❌ Don'ts

- **Don't use wrong operator** - `>` and `<` are for numeric/length comparisons
- **Don't forget case sensitivity** - String matching is case-sensitive by default
- **Don't use complex regex** - Use simple string matching when possible
- **Don't match constantly changing content** - Avoid matching timestamps or random values
- **Don't use "Equal to String" with extra spaces** - Enable space removal options

---

## Troubleshooting

### String Not Matching

**Solutions:**
- Check for case sensitivity - enable lowercase conversion
- Remove extra spaces - enable space removal options
- Verify element property - ensure correct "Which option" is selected
- Check operator - ensure correct operator for your use case
- Use browser DevTools to inspect actual element content

---

### Operator Not Working

**Solutions:**
- Verify operator is appropriate for comparison type
- For numeric comparisons, ensure values are numbers
- Check if "Matching Type" is needed (only for `==` and `!=`)
- Verify element contains expected data type

---

### Wait Not Working

**Solutions:**
- Ensure "Wait until matches" is enabled
- Check if element eventually contains the string
- Verify element selector is correct
- Check browser console for timeout errors

---

## Related Documentation

- [Field Settings](/documentation/form-fields/field-settings)
- [Search Strings and Execute Field Action](/documentation/field-options/search-and-action)
- [Locate Element](/documentation/locate-element)
- [Testing Site](/documentation/testing-site)

---

## Examples

### Example 1: Exact Match

```javascript
// Configuration
Which option: Element Text
Operator: ==
Matching Type: Equal to String
String Value: "Success"

// Element
<div class="message">Success</div>

// Result: ✅ Match
```

### Example 2: Partial Match

```javascript
// Configuration
Which option: Element Text
Operator: ==
Matching Type: Search String in Any Position
String Value: "Error"

// Element
<div class="alert">Error: Invalid input</div>

// Result: ✅ Match (contains "Error")
```

### Example 3: Numeric Comparison

```javascript
// Configuration
Which option: Element Value
Operator: >
String Value: "50"

// Element
<input type="number" value="75">

// Result: ✅ Match (75 > 50)
```

### Example 4: Case-Insensitive Match

```javascript
// Configuration
Which option: Element Text
Operator: ==
Matching Type: Equal to String
String Value: "complete"
Convert to lowercase: ON

// Element
<span class="status">COMPLETE</span>

// Result: ✅ Match (both become "complete")
```