# Text Field

Text fields are the most commonly used field type for single-line text input in web forms. They handle plain text data and provide various configuration options for optimal form filling behavior.

<img src="./image/image-3.png" alt="text" height="300" width="300" />

## Basic Configuration

### Field Properties

| Property                 | Description                           | Example                             |
| ------------------------ | ------------------------------------- | ----------------------------------- |
| **Field Name**           | Unique identifier for the field       | `firstName`, `email`, `phone`       |
| **Field Type**           | Set to **Text** for text input fields | `Text`                              |
| **Field Selector Type**  | Method to locate the field element    | `Selector`, `Id`, `XPath`           |
| **Field Selector Query** | Unique address to locate the field    | `#firstName`, `input[name="email"]` |
| **Field Value**          | Data source for field content         | Excel column or default value       |

## Text Field Settings

### ⌨️ Fill the values like a typing tutor {#fill-the-values-like-a-typing-tutor}

Enable human-like typing behavior to simulate realistic user input patterns.

**Configuration:**

- **Toggle Switch**: Enable/disable typing tutor mode
- **Typing Time**: Set delay in milliseconds between keystrokes
  - Default: `100` milliseconds
  - Range: `50` - `2000` milliseconds
  - Higher values = slower typing

---

### 🧹 Before filling the value in the field, clear the value of the field {#before-filling-the-value-in-the-field-clear-the-value-of-the-field}

Automatically clears existing field values before entering new data.

**Configuration:**

- **Toggle Switch**: Enable/disable field clearing
- **Empty Value Field**: Specify what to fill when Excel data is not found

---

### 📋 If excel column value is empty then fill this default value {#if-excel-column-value-is-empty-then-fill-this-default-value}

Set fallback values when Excel column data is not available.

**Configuration:**

- **Toggle Switch**: "If excel column value is empty then fill this default value"
- **Default Value Input**: Enter the fallback value to use
- **Placeholder**: "Enter Field Default Value If Excel Data Not Found"

**Example Scenarios:** {#example-scenarios}

```
Excel Column Value: "John Doe" → Field gets "John Doe"
Excel Column Value: "" (empty) → Field gets default value
Excel Column Value: null → Field gets default value
```

---

### ⏳ Element Detection Settings {#element-detection-settings}

Configure how the extension waits for and interacts with form elements.

#### Wait until element is found in the page

- **Purpose**: Ensures element exists in DOM before interaction
- **Use Case**: Dynamic content, AJAX-loaded elements
- **Configuration**: Toggle ON/OFF

#### Wait until element is visible in the page

- **Purpose**: Ensures element is both found and visible
- **Use Case**: Hidden elements, CSS visibility controls
- **Configuration**: Toggle ON/OFF

### ⚡ Trigger Javascript Event {#javascript-event-triggering}

Configure JavaScript events to be triggered on the field element.

**Supported Events:**

- **change** - Triggers when field value changes
- **focus** - Triggers when field receives focus
- **blur** - Triggers when field loses focus
- **input** - Triggers on every character input
- **keydown** - Triggers on key press
- **keyup** - Triggers on key release

### 🔧 If Form is ASPX then Remove Input Behavior {#if-form-is-aspx-then-remove-input-behavior}

Special handling for ASPX (Active Server Pages Extended) forms.

**Configuration:**

- **Toggle Switch**: "If Form is ASPX then Remove Input Behavior"
- **Purpose**: Modifies input behavior specifically for ASPX forms
- **Use Case**: Compatibility with Microsoft ASP.NET web applications

## Troubleshooting {#troubleshooting}

### Field Not Filling

- Check selector accuracy
- Verify element visibility
- Test with different selectors

## Next Steps

- [Field Types](/documentation/field-types) - Learn about different field types
- [Field Response Actions](/documentation/field-types/field-response-action) - Configure response behaviors
- [Variables](/documentation/variable) - Use variables in field settings
- [Site Settings](/documentation/site/site-settings) - Configure site-wide settings
