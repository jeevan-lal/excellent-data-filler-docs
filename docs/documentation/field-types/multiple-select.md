# Multiple Select Field

Multiple Select fields are used for dropdown menus where users can choose one or more options from a list of available choices. They provide extensive configuration options for optimal multi-selection behavior, especially when dealing with data from external sources like Excel.

## Basic Configuration

### Field Properties

| Property                 | Description                                           | Example                               |
| ------------------------ | ----------------------------------------------------- | ------------------------------------- |
| **Field Name**           | Unique identifier for the field                       | `hobbies`, `skills`, `favoriteColors` |
| **Field Type**           | Set to **Multiple Select** for multi-choice dropdowns | `Multiple Select`                     |
| **Field Selector Type**  | Method to locate the field element                    | `Selector`, `Id`, `XPath`             |
| **Field Selector Query** | Unique address to locate the field                    | `select[name="hobbies"]`, `#skills`   |
| **Field Value**          | Data source for field content (e.g., Excel column)    | Excel column or default value         |

## Multiple Select Field Settings

### ⚙️ Option Matching Configuration {#option-matching-configuration}

These settings control how the values provided (e.g., from your Excel sheet) are matched against the available options in the multiple-select dropdown.

#### Match options as

This dropdown defines the strategy for matching the input value to the options within the select element.

**Available Matching Strategies:**

- **Through Name/Value (Default)**: The extension will attempt to match the input value against both the visible text (name) of each option and its underlying `value` attribute. This provides flexibility in matching, as some dropdowns use descriptive text while others rely on specific values.

- **Equal to Name**: The provided value must exactly match the visible text (name) of an `<option>` element. This is useful when you want to match based on the displayed text only.

- **Search Name in Any Position**: The system will search for the provided value as a substring within the visible text (name) of any `<option>` element. A partial match anywhere in the name will be considered valid.

- **Match Name from Start-End Position**: The provided value must match a substring of the visible text (name) of an `<option>` element, either starting from the beginning of the name or ending at the end of the name.

- **Equal to Value**: The provided value must exactly match the `value` attribute of an `<option>` element. This is useful when you want to match based on the underlying value only.

- **Through Option Serial Number**: This option allows selecting an item based on its numerical position (index) in the dropdown list. For example, `1` would select the first option, `2` the second, and so on.

#### Separator to Split Value

When providing multiple values for a multi-select field (e.g., from a single Excel cell), this character is used to split the string into individual values.

- **Default Value**: `"` (double quote)
- **Usage**: If your Excel cell contains `"Option1" "Option2"`, the extension will split this into "Option1" and "Option2" using the double quote as a separator, and then attempt to select both.

#### Wait until max options in the dropdown element

This toggle controls whether the extension should wait for a minimum number of options to be loaded in the dropdown before attempting to make selections. This is useful for dynamically loaded dropdowns.

- **Enabled**: The extension will wait until at least the specified number of options are present.
- **Disabled**: The extension will attempt to select options immediately without waiting.

- **Input Field (Default: 2)**: Specifies the minimum number of options to wait for. For example, if set to `2`, the extension will wait until at least two options are available in the dropdown.

### 📝 Text Normalization for Matching {#text-normalization-for-matching}

These settings help standardize the text used for matching, improving the reliability of selections.

#### Convert the text into lowercase letters and then match the text

This toggle ensures that both the input value (from Excel) and the dropdown option text are converted to lowercase before comparison.

- **Enabled**: Enables case-insensitive matching. For example, "Apple" will match "apple". (Recommended for robust matching)
- **Disabled**: Matching will be case-sensitive.

#### Remove extra space from option text then match the text

This toggle removes leading and trailing whitespace from both the input value and the dropdown option text before matching.

- **Enabled**: Trims whitespace. For example, " Option1 " will match "Option1". (Recommended for robust matching)
- **Disabled**: Whitespace will be considered during matching.

#### Remove all space from option text then match the text

This toggle removes all spaces (including internal spaces) from both the input value and the dropdown option text before matching.

- **Enabled**: Removes all spaces. For example, "Option One" will match "OptionOne".
- **Disabled**: Spaces within the text are preserved during matching. (Default and generally recommended unless specific matching requires removing all spaces)

## Example Usage

Imagine you have a multiple-select dropdown for "Skills" and your Excel column `Skills` contains `"JavaScript" "Python" "CSS"`.

1.  **Field Type**: `Multiple Select`
2.  **Field Selector Query**: `select[name="skills"]`
3.  **Field Value**: `JavaScript,CSS`
4.  **Separator to Split Value**: `,`
5.  **Convert to lowercase**: `ON`
6.  **Remove extra space**: `ON`

The extension will:

- Read `"JavaScript,CSS"` from Excel.
- Split it into `JavaScript`, `CSS`.
- Convert these to lowercase (`javascript`, `css`).
- Trim any extra spaces.
- Then, it will find and select the corresponding options in the dropdown, matching them case-insensitively and ignoring extra spaces.

## Troubleshooting {#troubleshooting}

### Multiple Select Field Not Working

- Check the field selector query
- Check the field value
- Check the separator to split value
- Check the convert to lowercase
- Check the remove extra space
- Check the remove all space

## Next Steps {#next-steps}

- [Field Types](/documentation/form-fields/field-types) - Learn about different field types
- [Field Response Actions](/documentation/form-fields/field-response-action) - Configure response behaviors
- [Variables](/documentation/variable) - Use variables in field settings
- [Site Settings](/documentation/site/site-settings) - Configure site-wide settings
