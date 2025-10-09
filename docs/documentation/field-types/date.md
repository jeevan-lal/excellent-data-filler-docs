# Date Field

Date fields are specialized input fields designed for date and time data entry in web forms. They provide enhanced functionality for date format conversion, validation, and user-friendly date picker interactions.

## Basic Configuration

### Field Properties

| Property                 | Description                           | Example                                   |
| ------------------------ | ------------------------------------- | ----------------------------------------- |
| **Field Name**           | Unique identifier for the field       | `birthDate`, `appointmentDate`, `dueDate` |
| **Field Type**           | Set to **Date** for date input fields | `Date`                                    |
| **Field Selector Type**  | Method to locate the field element    | `Selector`, `Id`, `XPath`                 |
| **Field Selector Query** | Unique address to locate the field    | `#datePicker`, `input[type="date"]`       |
| **Field Value**          | Data source for field content         | Excel column or default value             |

## Date Field Settings

### 📅 Convert Date Format {#convert-date-format}

Transform date values between different formats to match the target form's requirements.

**Configuration:**

- **Toggle Switch**: Enable/disable date format conversion
- **Source Format**: Input date format from Excel data
  - Common formats: `DD-MM-YYYY`, `MM/DD/YYYY`, `YYYY-MM-DD`
  - Custom formats supported
- **Target Format**: Output date format for the form field
  - Common formats: `YYYY-MM-DD`, `DD/MM/YYYY`, `MM-DD-YYYY`
  - Must match form field expectations

**Example Conversion:**

```
Excel Data: "25-12-2023" (DD-MM-YYYY)
Target Format: "YYYY-MM-DD"
Result: "2023-12-25"
```

---

### 🧹 Before filling the value in the field, clear the value of the field {#before-filling-the-value-in-the-field-clear-the-value-of-the-field}

Automatically clears existing field values before entering new date data.

**Configuration:**

- **Toggle Switch**: Enable/disable field clearing
- **Empty Value Field**: Specify what to fill when Excel data is not found

---

### 📋 If excel column value is empty then fill this default value {#if-excel-column-value-is-empty-then-fill-this-default-value}

Set fallback date values when Excel column data is not available.

**Configuration:**

- **Toggle Switch**: "If excel column value is empty then fill this default value"
- **Default Value Input**: Enter the fallback date value to use

---

### ⏳ Element Detection Settings {#element-detection-settings}

Configure how the extension waits for and interacts with date form elements.

#### Wait until element is found in the page

- **Purpose**: Ensures date element exists in DOM before interaction
- **Use Case**: Dynamic content, AJAX-loaded date pickers
- **Configuration**: Toggle ON/OFF

#### Wait until element is visible in the page

- **Purpose**: Ensures date element is both found and visible
- **Use Case**: Hidden date fields, CSS visibility controls
- **Configuration**: Toggle ON/OFF

### ⚡ Trigger Javascript Event {#javascript-event-triggering}

Configure JavaScript events to be triggered on the date field element.

**Supported Events:**

- **change** - Triggers when date field value changes
- **focus** - Triggers when date field receives focus
- **blur** - Triggers when date field loses focus
- **input** - Triggers on every character input
- **keydown** - Triggers on key press
- **keyup** - Triggers on key release
- **datechange** - Triggers when date picker value changes (if supported)

## Supported Date Picker

**Supported Date Picker Types:**

- HTML5 `<input type="date">`
- jQuery UI Datepicker
- Bootstrap Datepicker
- Flatpickr
- Material Design Datepicker

## Troubleshooting {#troubleshooting}

### Date Field Not Filling

- Check date format compatibility
- Verify selector accuracy for date picker elements
- Test with different date formats
- Ensure date picker is fully loaded

### Date Format Issues

- Verify source and target format patterns
- Check for locale-specific date formats
- Test with sample data
- Ensure Excel date column format consistency

## Best Practices

### Date Format Conversion

1. **Consistent Source Format**: Ensure Excel data uses consistent date format
2. **Target Format Matching**: Match target format to form field requirements
3. **Validation**: Test date conversion with various date values
4. **Error Handling**: Set appropriate default values for invalid dates

### Performance Optimization

1. **Element Detection**: Use appropriate wait settings for dynamic date pickers
2. **Event Triggering**: Only trigger necessary JavaScript events
3. **Format Conversion**: Enable only when needed to avoid unnecessary processing

## Next Steps

- [Field Types](/documentation/form-fields/field-types) - Learn about different field types
- [Field Response Actions](/documentation/form-fields/field-response-action) - Configure response behaviors
- [Variables](/documentation/variable) - Use variables in field settings
- [Site Settings](/documentation/site/site-settings) - Configure site-wide settings
