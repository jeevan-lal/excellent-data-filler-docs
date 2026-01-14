# Search Strings and Execute Field Action

Execute field actions conditionally based on string matching in page elements.

## Overview

The "Search Strings and Execute Field Action" feature allows you to search for specific strings in page elements and execute field actions only when a match is found. This is useful for conditional form filling based on page content.

## Configuration Options

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| **Search Strings and Execute Field Action** | Toggle Switch | Enable/disable this feature | Yes |
| **Selector Query of those elements on which action is to be executed** | Text Input | CSS selector for action target elements | Yes |
| **When you want to use any element inside action elements** | Checkbox | Use child elements inside action elements | No |
| **Selector query of the elements on which the string will be matched** | Text Input | CSS selector for elements to search | Yes |
| **String Matching Value** | Text Input | The string value to search for | Yes |
| **Which part of the element is to match the string** | Dropdown | Element property to match against | Yes |
| **How to match String** | Dropdown | String matching method | Yes |
| **If matching string is multiline** | Toggle Switch | Enable multiline string matching | No |
| **Character that splits string into multiline** | Text Input | Character to split multiline strings | Conditional |
| **If matching string in multiple elements** | Toggle Switch | Enable matching across multiple elements | No |
| **Character that splits element** | Text Input | Character to split multiple elements | Conditional |

:::warning Important: Element Length Requirement
The number of elements matched by **"Selector Query of those elements on which action is to be executed"** must equal the number of elements matched by **"Selector query of the elements on which the string will be matched"**.

**Example:**
- Action Elements: `input.field` (finds 3 elements)
- Match Elements: `.status` (finds 3 elements)
- ✅ **Result:** Works correctly (3 = 3)

**If lengths don't match:**
- Action Elements: `input.field` (finds 3 elements)
- Match Elements: `.status` (finds 2 elements)
- ❌ **Result:** Error - element lengths don't match (3 ≠ 2)

**Solution:** Ensure both selectors return the same number of elements, or use the "If matching string in multiple elements" option for flexible matching.
:::

---

## Which Part of the Element is to Match the String

Select which property of the element to match against the search string.

**Available Options:**

| Option | Description | Use Case |
|--------|-------------|----------|
| **Element Text** | Match against the visible text content of the element | Search for text displayed on the page |
| **Element Value** | Match against the value attribute of the element | Search for input field values or hidden data |

**Example:**

```html
<!-- Element Text -->
<div>Welcome User</div>
<!-- Matches: "Welcome User" -->

<!-- Element Value -->
<input type="text" value="John Doe">
<!-- Matches: "John Doe" -->
```

---

## How to Match String

Select the method for matching the search string.

**Available Options:**

| Option | Description | Use Case |
|--------|-------------|----------|
| **Search String** | Partial match - finds string anywhere in the element | Flexible matching, finds substring |
| **Equal to String** | Exact match - entire element content must match exactly | Precise matching, no partial matches |

**Example:**

**Search String (Partial Match):**
```
Element Text: "Welcome to Excellent Data Filler"
Search String: "Excellent"
Result: ✅ Match Found
```

**Equal to String (Exact Match):**
```
Element Text: "Welcome to Excellent Data Filler"
Equal to String: "Welcome to Excellent Data Filler"
Result: ✅ Match Found

Element Text: "Welcome to Excellent Data Filler"
Equal to String: "Excellent"
Result: ❌ No Match
```

---

## Detailed Configuration

### Selector Query of Action Elements

**Field:** Text Input

**Description:** CSS selector for elements on which the field action will be executed when a match is found.

**Example:**
```css
input[name="username"]
.form-field
#submit-button
```

---

### When You Want to Use Any Element Inside Action Elements

**Field:** Checkbox

**Description:** Enable this option to use child elements inside the action target elements.

**Use Case:** When action elements contain nested elements that need to be targeted.

---

### Selector Query of Match Elements

**Field:** Text Input

**Description:** CSS selector for elements where the string will be searched.

**Example:**
```css
.message-text
div.notification
span.status
```

---

### String Matching Value

**Field:** Text Input

**Description:** The string value to search for in the selected elements.

**Example:**
```
Success
Error: Invalid input
User logged in
```

---

### If Matching String is Multiline

**Field:** Toggle Switch

**Description:** Enable when the string to match spans multiple lines.

**When Enabled:** Shows "Character that splits string into multiline" field.

**Example:**
```
Line 1
Line 2
Line 3
```

---

### Character that Splits String into Multiline

**Field:** Text Input

**Description:** Character used to split the string into multiple lines.

**Default:** `"` (double quote)

**Common Values:**
- `\n` - Newline character
- `|` - Pipe character
- `,` - Comma
- `;` - Semicolon

**Example:**
```
String Matching Value: Line 1"Line 2"Line 3
Character: "
Result: Matches each line separately
```

---

### If Matching String in Multiple Elements

**Field:** Toggle Switch

**Description:** Enable when searching for strings across multiple elements.

**When Enabled:** Shows "Character that splits element" field.

**Use Case:** When you need to match strings in different elements and combine results.

---

### Character that Splits Element

**Field:** Text Input

**Description:** Character used to split multiple elements.

**Default:** `||` (double pipe)

**Common Values:**
- `||` - Double pipe
- `|` - Single pipe
- `,` - Comma
- `;` - Semicolon

**Example:**
```
Selector: .item
Character: ||
Result: Searches in multiple .item elements
```

---

## Use Cases

### Conditional Form Filling Based on Page Content

**Scenario:** Fill a form only if a success message is displayed.

**Configuration:**
- **Selector Query (Action):** `input[name="email"]`
- **Selector Query (Match):** `.message`
- **String Matching Value:** `Success`
- **Which part:** Element Text
- **How to match:** Search String

**Result:** Email field is filled only when "Success" appears in `.message` element.

---

### Execute Action Based on Element Value

**Scenario:** Click a button only if an input field has a specific value.

**Configuration:**
- **Selector Query (Action):** `button[type="submit"]`
- **Selector Query (Match):** `input[name="status"]`
- **String Matching Value:** `approved`
- **Which part:** Element Value
- **How to match:** Equal to String

**Result:** Submit button is clicked only when status input value equals "approved".

---

### Multiline String Matching

**Scenario:** Match against a multiline error message.

**Configuration:**
- **Selector Query (Action):** `.error-handler`
- **Selector Query (Match):** `.error-message`
- **String Matching Value:** `Error: Invalid input"Please try again"Contact support`
- **Which part:** Element Text
- **How to match:** Search String
- **If multiline:** ON
- **Split character:** `"`

**Result:** Action executes when any line of the error message matches.

---

### Multiple Element Matching

**Scenario:** Execute action when string is found in any of multiple elements.

**Configuration:**
- **Selector Query (Action):** `#next-button`
- **Selector Query (Match):** `.status-item`
- **String Matching Value:** `Complete`
- **Which part:** Element Text
- **How to match:** Search String
- **If multiple elements:** ON
- **Split character:** `||`

**Result:** Next button action executes when "Complete" is found in any `.status-item` element.

---

## Best Practices

### ✅ Do's

- **Use specific selectors** - Target exact elements to avoid false matches
- **Test string matching** - Verify strings match correctly before deployment
- **Use "Equal to String" for precision** - When exact matching is required
- **Use "Search String" for flexibility** - When partial matching is acceptable
- **Enable multiline for complex strings** - When matching multi-part messages
- **Document your logic** - Comment why specific strings are being matched

### ❌ Don'ts

- **Don't use overly broad selectors** - Avoid selectors that match too many elements
- **Don't forget case sensitivity** - String matching is case-sensitive
- **Don't use complex multiline without testing** - Test multiline splitting thoroughly
- **Don't match dynamic content** - Avoid matching strings that change frequently
- **Don't use special characters without escaping** - Escape special characters properly

---

## Troubleshooting

### Action Not Executing

**Solutions:**
- Verify selector query matches target elements
- Check if string exists in the matched element
- Ensure "Which part" is set correctly (Text vs Value)
- Verify "How to match" setting (Search vs Equal)
- Check browser console for errors

---

### String Not Matching

**Solutions:**
- Check for extra whitespace in string
- Verify case sensitivity
- Use browser DevTools to inspect element content
- Try "Search String" instead of "Equal to String"
- Check if element is loaded before matching

---

### Multiline Not Working

**Solutions:**
- Verify split character is correct
- Check if "If matching string is multiline" is enabled
- Ensure string format matches expected pattern
- Test with simple strings first

---

### Multiple Elements Not Matching

**Solutions:**
- Verify "If matching string in multiple elements" is enabled
- Check split character is correct
- Ensure selector matches multiple elements
- Verify at least one element contains the string

---

## Related Documentation

- [Field Settings](/documentation/form-fields/field-settings)
- [Field Types](/documentation/form-fields/field-types)
- [Locate Element](/documentation/locate-element)
- [Testing Site](/documentation/testing-site)

---

## Examples

### Example 1: Success Message Detection

```javascript
// Configuration
Selector Query (Action): input[name="next-step"]
Selector Query (Match): .alert-success
String Matching Value: "Operation completed successfully"
Which part: Element Text
How to match: Search String

// Result: Fills next-step input only when success message appears
```

### Example 2: Exact Value Match

```javascript
// Configuration
Selector Query (Action): button.submit
Selector Query (Match): input[name="agreement"]
String Matching Value: "accepted"
Which part: Element Value
How to match: Equal to String

// Result: Clicks submit button only when agreement value is exactly "accepted"
```

### Example 3: Multiline Error Handling

```javascript
// Configuration
Selector Query (Action): .error-reset
Selector Query (Match): .error-display
String Matching Value: "Error 404"Not Found"Please refresh"
Which part: Element Text
How to match: Search String
If multiline: ON
Split character: "

// Result: Executes error-reset action when any line of error message matches
```
