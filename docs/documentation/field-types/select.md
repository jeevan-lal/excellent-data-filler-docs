# Select Field

Select fields are used for single-selection dropdown menus in web forms, where users can choose one option from a list of available choices. They provide various configuration options for optimal dropdown selection behavior.

## Basic Configuration

### Field Properties

| Property                 | Description                             | Example                               |
| ------------------------ | --------------------------------------- | ------------------------------------- |
| **Field Name**           | Unique identifier for the field         | `country`, `category`, `priority`     |
| **Field Type**           | Set to **Select** for dropdown elements | `Select`                              |
| **Field Selector Type**  | Method to locate the field element      | `Selector`, `Id`, `XPath`             |
| **Field Selector Query** | Unique address to locate the field      | `select[name="country"]`, `#category` |
| **Field Value**          | Data source for option selection        | Excel (.xlsx) column or default value |

## Select Field Settings

### Match options as {#match-options-as}

Configure how dropdown options are identified and matched with Excel (.xlsx) data.

**Available Matching Strategies:**

- **Through Name/Value (Default)** - Match options using visible text (name) or underlying value attribute. This provides flexibility in matching, as some dropdowns use descriptive text while others rely on specific values.

- **Equal to Name** - The provided value must exactly match the visible text (name) of an `<option>` element. This is useful when you want to match based on the displayed text only.

- **Search Name in Any Position** - The system will search for the provided value as a substring within the visible text (name) of any `<option>` element. A partial match anywhere in the name will be considered valid.

- **Match Name from Start-End Position** - The provided value must match a substring of the visible text (name) of an `<option>` element, either starting from the beginning of the name or ending at the end of the name.

- **Equal to Value** - The provided value must exactly match the `value` attribute of an `<option>` element. This is useful when you want to match based on the underlying value only.

- **Through Option Serial Number** - This option allows selecting an item based on its numerical position (index) in the dropdown list. For example, `1` would select the first option, `2` the second, and so on.

**Configuration:**

- **Dropdown Selection**: Choose matching strategy
- **Default**: "Through Name/Value" (most flexible)
- **Value Priority**: Value attribute takes precedence over visible text

**Example Scenarios:**

```
Excel Column Value: "United States" → Matches option with text "United States"
Excel Column Value: "US" → Matches option with value "US"
Excel Column Value: "usa" → Matches option with text "USA" (case-insensitive)
Excel Column Value: "1" → Selects first option (serial number)
Excel Column Value: "states" → Matches option containing "states" (search in any position)
```

---

### Wait until max options in the dropdown element {#wait-until-max-options-in-the-dropdown-element}

Configure the system to wait until a minimum number of options are loaded in the dropdown.

**Purpose:**

- **Dynamic Loading** - Handle dropdowns that load options via AJAX
- **Content Validation** - Ensure sufficient options are available
- **Timing Control** - Prevent premature selection attempts

**Configuration:**

- **Toggle Switch**: Enable/disable option count waiting
- **Option Count Input**: Specify minimum number of options to wait for
- **Default Value**: 2 options minimum

**Use Cases:**

- **AJAX Dropdowns** - Options loaded dynamically
- **Conditional Dropdowns** - Options depend on other selections
- **Large Datasets** - Options loaded in batches

---

### Wait until the dropdown option is selected {#wait-until-the-dropdown-option-is-selected}

Configure the system to wait until a specific option is successfully selected.

**Purpose:**

- **Selection Confirmation** - Ensure option selection is complete
- **Timing Control** - Wait for selection to be processed
- **Validation** - Confirm selection was successful

**Configuration:**

- **Toggle Switch**: Enable/disable selection waiting
- **Selection Timeout**: Maximum time to wait for selection
- **Success Criteria**: Option must be selected and visible

**Use Cases:**

- **Slow Dropdowns** - Dropdowns with delayed selection processing
- **Validation Required** - Dropdowns that validate selections
- **Dynamic Updates** - Dropdowns that update other fields

---

### Convert the text into lowercase letters and then match the text {#convert-the-text-into-lowercase-letters-and-then-match-the-text}

Enable case-insensitive matching for dropdown options.

**Purpose:**

- **Case Flexibility** - Match options regardless of case
- **Data Consistency** - Handle inconsistent capitalization
- **User-Friendly** - More forgiving matching behavior

**Configuration:**

- **Toggle Switch**: Enable/disable case-insensitive matching
- **Text Processing**: Converts both Excel (.xlsx) value and option text to lowercase
- **Matching Logic**: Compares lowercase versions

**Example Scenarios:**

```
Excel Column Value: "united states" → Matches "United States"
Excel Column Value: "UNITED STATES" → Matches "United States"
Excel Column Value: "United States" → Matches "united states"
```

---

### Remove extra space from option text then match the text {#remove-extra-space-from-option-text-then-match-the-text}

Normalize spacing in dropdown option text before matching.

**Purpose:**

- **Space Normalization** - Handle inconsistent spacing
- **Data Cleaning** - Remove leading/trailing spaces
- **Matching Accuracy** - Improve match success rate

**Configuration:**

- **Toggle Switch**: Enable/disable space normalization
- **Space Processing**: Removes leading, trailing, and multiple internal spaces
- **Text Cleaning**: Normalizes option text before matching

**Example Scenarios:**

```
Excel Column Value: "United States" → Matches "  United States  "
Excel Column Value: "United  States" → Matches "United States"
Excel Column Value: " United States " → Matches "United States"
```

---

### Remove all space from option text then match the text {#remove-all-space-from-option-text-then-match-the-text}

Remove all spaces from dropdown option text before matching.

**Purpose:**

- **Strict Matching** - Match options without any spaces
- **Data Normalization** - Handle options with spaces in values
- **Exact Matching** - More precise matching criteria

**Configuration:**

- **Toggle Switch**: Enable/disable complete space removal
- **Space Processing**: Removes all spaces from option text
- **Matching Logic**: Compares space-free versions

**Example Scenarios:**

```
Excel Column Value: "UnitedStates" → Matches "United States"
Excel Column Value: "UnitedStates" → Matches "United  States"
Excel Column Value: "UnitedStates" → Matches "UnitedStates"
```
## Excel (.xlsx) Value Handling

### Text Matching

- **"United States"** - Matches option with text "United States"
- **"Canada"** - Matches option with text "Canada"
- **"United Kingdom"** - Matches option with text "United Kingdom"

### Value Matching

- **"US"** - Matches option with value "US"
- **"CA"** - Matches option with value "CA"
- **"UK"** - Matches option with value "UK"

### Case-Insensitive Matching

- **"united states"** - Matches "United States"
- **"CANADA"** - Matches "Canada"
- **"united kingdom"** - Matches "United Kingdom"

## Troubleshooting {#troubleshooting}

### Option Not Found

- Check Excel (.xlsx) value format
- Verify case sensitivity settings
- Test with different matching strategies
- Check option text for extra spaces

### Selection Not Working

- Verify dropdown selector accuracy
- Check element visibility
- Test with different selectors
- Verify option count settings

### Dynamic Loading Issues

- Increase option count wait time
- Check AJAX loading completion
- Test with different timing settings
- Verify dropdown state

### Text Matching Problems

- Enable case-insensitive matching
- Enable space normalization
- Test with different text formats
- Check for hidden characters

## Next Steps

- <img src="/svg/form.svg" class="doc-icon" /> [Field Types](/documentation/form-fields/field-types) — Learn about different field types
- <img src="/svg/settings.svg" class="doc-icon" /> [Field Response Actions](/documentation/form-fields/field-response-action) — Configure response behaviors
- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template](/documentation/site/site-excel-template) — Prepare Excel (.xlsx) templates
- <img src="/svg/browser.svg" class="doc-icon" /> [Site Settings](/documentation/site/site-settings) — Configure site-wide automation settings

