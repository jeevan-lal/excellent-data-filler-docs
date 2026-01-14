# Field Settings

Field Settings provide comprehensive configuration options for individual form fields. When you **edit** a field, a sidebar opens containing all the available settings for that specific field. Some settings are specific to particular [field types](/documentation/form-fields/field-types), while others are universal across all field types.

<img src="/image/field-settings-01.png" width="500" height="500" alt="Field Settings">

## Basic Field Settings

### ⌨️ Fill the values like a typing tutor {#fill-the-values-like-a-typing-tutor}

This setting enables **human-like typing** behavior in input fields, simulating a typing tutor with configurable typing speed.

**Features:**

- **Realistic Typing** - Mimics human typing patterns
- **Speed Control** - Adjustable typing speed (slow, medium, fast)
- **Character-by-Character** - Types each character individually
- **Natural Delays** - Includes realistic pauses between keystrokes

**Use Cases:**

- Bypassing anti-bot detection
- Creating more natural form interactions
- Testing form validation with realistic input timing

---

### 🧹 Before filling the value in the field, clear the value of the field {#before-filling-the-value-in-the-field-clear-the-value-of-the-field}

Automatically clears existing field values before entering new data.

**Purpose:**

- **Clean Slate** - Ensures no residual data remains
- **Data Integrity** - Prevents mixing old and new values
- **Consistent Results** - Guarantees clean data entry

---

### 🎯 If excel column value is empty then fill this default value {#if-excel-column-value-is-empty-then-fill-this-default-value}

Sets a fallback value when the Excel column is empty or missing data.

**Configuration:**

- **Default Value** - Specify the fallback value
- **Visual Indicator** - Green edit button = default value set, Yellow = no default
- **Site-wide Override** - Can be disabled globally in Site Settings

**Visual Indicators:**

- 🟢 **Green Edit Button** - Default value is configured
- 🟡 **Yellow Edit Button** - No default value set

<img src="/image/field-settings-02.png" width="" height="" alt="Field Default Value">

**Removing Default Values:**

1. **Individual Field** - Edit the field and disable default settings
2. **Site-wide** - Enable `Ignore field default value` in Site Settings

<img src="/image/site-settings-01.png" width="400" height="400" alt="Site Settings">

---

### 🔗 Take the value of this field from another excel column {#take-the-value-of-this-field-from-another-excel-column}

Links field values to other Excel columns, eliminating data duplication.

**Benefits:**

- **Data Consistency** - Single source of truth for shared values
- **Reduced Redundancy** - No need to duplicate data in Excel
- **Easier Maintenance** - Update once, applies everywhere

**Example:** If both "First Name" and "Full Name" fields need the same value, create one Excel column and reference it in both fields.

---

## Data Processing Settings

### 🔄 Replace the field value according to the custom values {#replace-the-field-value-according-to-the-custom-values}

Transforms field values using custom mapping rules.

**Configuration:**

- **Field Value** - Original value from Excel
- **Custom Value** - Replacement value to use
- **Multiple Mappings** - Support for multiple value transformations

**Example Mapping:**

- `"Yes/Y"` → `"0"`
- `"No/N"` → `"1"`

<img src="/image/replace-field-value-01.png" width="400" height="400" alt="Replace Field Value">

**Excel Template Integration:**
Custom values appear in the `Field Custom Values` column in the `HELPING` sheet of the Excel template.

<img src="/image/field-settings-03.png" width="600" height="600" alt="Field Custom Values">

---

### 📋 Paste Copied Value {#paste-copied-value}

Pastes values copied using the [Copy Field Type](/documentation/field-types/copy).

**Prerequisites:**

- Must use Copy Field Type first
- Text modification options available before pasting

**Modification Options:**

- **Text Transformations** - Case changes, trimming, formatting
- **Custom Processing** - Apply custom text modifications
- **Validation** - Ensure copied data meets requirements

<img src="/image/field-settings-04.png" width="500" height="500" alt="Paste Settings">

---

## Element Detection Settings

### 🔍 Wait until element is found in the page {#wait-until-element-is-found-in-the-page}

Prevents field action execution until the target element is located on the page.

**Use Cases:**

- **Dynamic Content** - Wait for AJAX-loaded elements
- **Page Transitions** - Ensure elements are present before interaction
- **Reliability** - Prevents errors from missing elements

---

### 👁️ Wait until element is visible in the page {#wait-until-element-is-visible-in-the-page}

Waits for elements to be both found and visible before proceeding.

**Enhanced Detection:**

- **Element Exists** - Element is present in DOM
- **Element Visible** - Element is actually visible to users
- **Interaction Ready** - Element is ready for user interaction

---

## JavaScript Event Settings

### ⚡ Trigger Javascript Event {#trigger-javascript-event}

Executes JavaScript events when keyboard or mouse actions occur.

**Supported Events:**

- **Keyboard Events** - keydown, keyup, keypress
- **Mouse Events** - click, mousedown, mouseup
- **Form Events** - focus, blur, change, submit

**Configuration:**

- **Event Type** - Select specific JavaScript event
- **Element Targeting** - Apply to specific elements
- **Event Parameters** - Customize event properties

<img src="/image/field-settings-05.png" width="500" height="500" alt="JavaScript Events">

---

### 🖱️ Trigger Javascript Mouse Event {#trigger-javascript-mouse-event}

Specialized mouse event triggering for enhanced interaction simulation.

**Mouse Events:**

- **Click Events** - Single, double, right-click
- **Hover Events** - Mouse enter, leave, over
- **Drag Events** - Drag start, drag end, drop

<img src="/image/field-settings-06.png" width="500" height="500" alt="Mouse Events">

---

## Conditional Logic Settings

### ⏭️ Skip field action if any condition is true {#skip-field-action-if-any-condition-is-true}

Skips field execution when specified conditions are met.

**Condition Types:**

- **Element Visibility** - Skip if element is visible/not visible
- **Element Existence** - Skip if element exists/doesn't exist
- **Value Matching** - Skip based on element values
- **Text Matching** - Skip based on element text content
- **Attribute Matching** - Skip based on element attributes
- **HTML Matching** - Skip based on element HTML content
- **Image Matching** - Skip based on image file names

<img src="/image/field-settings-07.png" width="500" height="500" alt="Skip Conditions">

---

### 🔄 Wait until the response status of the given element change fields comes {#wait-until-the-response-status-of-the-given-element-change-fields-comes}

Waits for [Element Change](/documentation/field-types/element-change) field status before proceeding.

**Configuration:**

- **Field Reference** - Specify Element Change field name
- **Status Check** - Before Field or After Field status
- **Conditional Proceeding** - Only proceeds when status is true

<img src="/image/field-settings-11.png" alt="Element Change Wait">

---

### 📡 Wait until the response status of the given request monitor fields comes {#wait-until-the-response-status-of-the-given-request-monitor-fields-comes}

Waits for [Request Monitor](/documentation/field-types/request-monitor) field status before proceeding.

**Use Cases:**

- **API Responses** - Wait for server responses
- **Network Requests** - Monitor HTTP request completion
- **Data Loading** - Ensure data is fully loaded

<img src="/image/field-settings-12.png" alt="Request Monitor Wait">

---

### ✅ If element value matches then fill the value otherwise skip the field {#if-element-value-matches-then-fill-the-value-otherwise-skip-the-field}

Conditional field execution based on element value matching.

**Logic:**

- **Value Match** - Execute field action if values match
- **Value Mismatch** - Skip field if values don't match
- **Empty Value Check** - Use `''` to check for empty values

<img src="/image/field-settings-08.png" width="500" height="500" alt="Value Matching">

:::info
To check for empty values, use `''` (empty string) in the configuration.
:::

---

### 🚫 Skip field action if condition is true {#skip-field-action-if-condition-is-true}

Advanced conditional skipping with multiple condition types.

**Available Conditions:**

- **Element Visible** - Skip if element is visible
- **Element Not Visible** - Skip if element is hidden
- **Element Exists** - Skip if element exists in DOM
- **Element Not Exists** - Skip if element is missing
- **Element Value Matched** - Skip if element value matches
- **Element Text Matched** - Skip if element text matches
- **Element Attribute Matched** - Skip if element attribute matches
- **Element HTML Matched** - Skip if element HTML matches
- **Image File Name Matched** - Skip if image filename matches

<img src="/image/field-settings-09.png" width="500" height="500" alt="Advanced Skip Conditions">

---

### 🔍 Skip field action if given field value matches {#skip-field-action-if-given-field-value-matches}

Skips field execution when specific field values are present.

**Configuration:**

- **Field Reference** - Specify which field to check
- **Value List** - Values that trigger skipping
- **Empty Value Handling** - Use `''` for blank/empty values

**Example:** Skip field if "Does the Beneficiary have Aadhaar Card?" is "No/N"

<img src="/image/skip-field-01.png" width="500" height="500" alt="Field Value Skip">

:::info
Use `''` to represent blank/empty values in the configuration.
:::

:::warning Note
This option check field value according to excel sheet. if you are using variable or multiple values in single row then this option will not work.
:::

---

### 🔍 Skip field action if field value matches {#skip-field-action-if-field-value-matches}

Skips field execution when specific field values are present.

**Configuration Options:**

- **Toggle Switch** - Enable/disable the skip field functionality
- **Field Values** - Enter specific values that trigger field skipping
  - Add multiple values by pressing Enter after each value
- **Convert to lowercase** - Enable case-insensitive matching by converting text to lowercase before comparison

**Usage:**

- When enabled, the field will be skipped if its current value matches any of the specified field values
- The comparison can be case-sensitive or case-insensitive based on the lowercase conversion setting
- Multiple values can be configured to trigger the skip action

**Example:** Skip field if "Does the Beneficiary have Aadhaar Card?" is "No", "N", or any case variation

---

## Field Validation Settings

### ⭐ Is this field Required {#is-this-field-required}

Marks field as mandatory for form submission.

**Integration with Public Keys:**

- **{FORM-FILLED} Key** - Only checks required fields
- **Form Submission** - Prevents submission if required fields are empty
- **Validation Logic** - Ensures all required fields are completed

---

## Response Action Settings

### ✅ Field Success Response Action {#field-success-response-action}

Executes specific actions when field operation succeeds.

**Configuration:**

- **Action Selection** - Choose from available response actions
- **Success Handling** - Define behavior on successful completion
- **Workflow Control** - Control automation flow based on success

[Field Response Action](/documentation/form-fields/field-response-action#field-success-response-action)

---

### ❌ Field Error Response Action {#field-error-response-action}

Handles field operation failures with custom actions.

**Error Management:**

- **Error Handling** - Define behavior on field failure
- **Recovery Actions** - Attempt recovery or alternative actions
- **Logging** - Record error details for debugging

[Field Response Action](/documentation/form-fields/field-response-action#field-error-response-action)

---

### ⏭️ Field Skip Response Action {#field-skip-response-action}

Manages field skipping scenarios with appropriate actions.

**Skip Handling:**

- **Skip Logic** - Define behavior when field is skipped
- **Workflow Continuation** - Ensure automation continues smoothly
- **Skip Tracking** - Monitor and log skipped fields

[Field Skip Action](/documentation/form-fields/field-response-action#field-skip-response-action)

---

## Automation Control Settings

### 🛑 If error response is coming in the field then stop filler {#if-error-response-is-coming-in-the-field-then-stop-filler}

Halts the entire automation process when field errors occur.

**Use Cases:**

- **Critical Fields** - Stop on essential field failures
- **Error Prevention** - Prevent cascading errors
- **Manual Intervention** - Allow manual error resolution

---

### ✅ If success response is coming in the field then stop filler {#if-success-response-is-coming-in-the-field-then-stop-filler}

Stops automation after successful field completion.

**Scenarios:**

- **Single Operation** - Complete one task and stop
- **Conditional Completion** - Stop based on specific success criteria
- **Workflow Control** - Manage automation flow

---

## Advanced Settings

### 🔍 Search Strings and Execute Field Action {#search-strings-and-execute-field-action}

Executes field actions based on text search results.

**Functionality:**

- **Text Search** - Search for specific strings on the page
- **Conditional Execution** - Execute actions based on search results
- **Pattern Matching** - Use regex or exact matching

More details in [Search Strings and Execute Field Action](/documentation/field-options/search-and-action)

---

### 📊 Execute Action on fields like Row Type {#execute-action-on-fields-like-row-type}

Applies actions to multiple fields of the same type.

**Benefits:**

- **Bulk Operations** - Apply settings to multiple similar fields
- **Consistency** - Ensure uniform behavior across field types
- **Efficiency** - Reduce configuration time

---

### 🔄 If this field is being used in a loop and the field has multiple elements {#if-this-field-is-being-used-in-a-loop-and-the-field-has-multiple-elements}

Handles multiple elements in loop scenarios using index-based selection.

**Loop Integration:**

- **Index Selection** - Select specific element by loop index
- **Multiple Elements** - Handle multiple matching elements
- **Loop Context** - Work within loop iteration context

---

### 🎨 Do not fill the Status Color, element of this field {#do-not-fill-the-status-color-element-of-this-field}

Excludes field from status color updates.

**Purpose:**

- **Visual Control** - Prevent status color changes
- **Custom Styling** - Maintain custom element appearance
- **UI Consistency** - Keep specific elements unchanged

---

### 📋 Ignore this field details in the Excel Template {#ignore-this-field-details-in-the-excel-template}

Excludes field from Excel template generation.

**Use Cases:**

- **Internal Fields** - Hide fields not needed in Excel
- **Temporary Fields** - Exclude test or temporary fields
- **Template Cleanup** - Keep templates focused on essential data

---

## Timing Settings

### ⏱️ Delay Time Before this field is Run {#delay-time-before-this-field-is-run}

Adds delay before field execution (in milliseconds).

**Configuration:**

- **Fixed Delay** - Set specific delay time
- **Random Delay** - Use random delay for natural behavior
- **Variable Delay** - Use variables for dynamic timing

**Random Delay Example:**

```
// Random delay between 1-2 seconds
{{random.integer[1000][2000]}}
```

---

### ⏱️ Delay Time After this field is Run {#delay-time-after-this-field-is-run}

Adds delay after field execution (in milliseconds).

**Benefits:**

- **Page Loading** - Allow time for page updates
- **Animation Completion** - Wait for UI animations
- **Natural Behavior** - Simulate human-like pauses

**Random Delay Example:**

```
// Random delay between 1-2 seconds
{{random.integer[1000][2000]}}
```

---

## Specialized Settings

### 🚫 If Form is ASPX then Remove Input Behavior {#if-form-is-aspx-then-remove-input-behavior}

Removes element behavior in ASPX forms for compatibility.

**Purpose:**

- **ASPX Compatibility** - Handle ASP.NET form behaviors
- **Element Control** - Override default form behaviors
- **Cross-Platform** - Ensure consistent behavior across form types

## Best Practices

### 🎯 Configuration Tips {#configuration-tips}

1. **Test Settings** - Always test field settings with sample data
2. **Use Defaults Wisely** - Set appropriate default values for reliability
3. **Conditional Logic** - Use skip conditions to handle edge cases
4. **Timing Considerations** - Add appropriate delays for dynamic content
5. **Error Handling** - Configure proper error response actions

### 🔧 Troubleshooting {#troubleshooting}

1. **Element Detection** - Use wait settings for dynamic content
2. **Value Matching** - Check exact value formats in conditions
3. **Timing Issues** - Adjust delay settings for slow-loading content
4. **Error Responses** - Monitor field response actions for debugging

## Next Steps {#next-steps}

- [Field Types](/documentation/form-fields/field-types) - Learn about different field types
- [Field Response Actions](/documentation/form-fields/field-response-action) - Configure response behaviors
- [Variables](/documentation/variable) - Use variables in field settings
- [Site Settings](/documentation/site/site-settings) - Configure site-wide settings
