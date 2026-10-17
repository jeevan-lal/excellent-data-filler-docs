# Select Field {#select-field}

The **Select** field type automates single-choice dropdown menus (`<select>`) by matching options against Excel (`.xlsx`) row values or static default text.

---

## Basic Configuration {#basic-configuration}

| Property | Description | Example |
|---|---|---|
| **Field Name** | Unique identifier for the field in the workflow | `country`, `department` |
| **Field Type** | Set to **Select** | `Select` |
| **Field Selector Type** | Element locator method | `Selector`, `XPath`, `Id` |
| **Field Selector Query** | CSS selector or XPath targeting the `<select>` element | `select[name="country"]`, `#category` |
| **Field Value** | Option text, value, or column to match | Excel (`.xlsx`) column name or static value |

---

## Matching Strategies {#match-options-as}

Under **Match options as**, choose how the extension identifies which `<option>` to select:

| Strategy | Description | Example |
|---|---|---|
| **Through Name/Value (Default)** | Matches either visible label text or underlying `value=""` attribute. | `US` or `United States` |
| **Equal to Name** | Matches only against the visible option text (exact label). | `United States` |
| **Equal to Value** | Matches only against the HTML `value` attribute. | `value="US"` |
| **Search Name in Any Position** | Matches if the search term appears anywhere inside option text. | `States` matches `United States` |
| **Match Name from Start-End** | Matches if option text starts or ends with the provided value. | `United` or `States` |
| **Through Option Serial Number** | Selects an option by its 1-based numerical index. | `1` selects the 1st option |

---

## Field Settings {#select-field-settings}

Configure dropdown-specific behaviors to handle dynamic lists and text variations:

### Dynamic Loading & Timing
- **Wait until max options in the dropdown element**: Waits until the dropdown contains at least the specified number of options (default: `2`). Useful for AJAX-loaded or cascading dropdowns.
- **Wait until the dropdown option is selected**: Pauses until the selected option is confirmed active before advancing to subsequent fields.

### Text Normalization
- **Convert the text into lowercase letters and then match the text**: Enables case-insensitive matching (`united states` matches `United States`).
- **Remove extra space from option text then match the text**: Trims leading/trailing whitespace and normalizes multiple spaces into a single space.
- **Remove all space from option text then match the text**: Strips all whitespace for strict comparison (`UnitedStates` matches `United States`).

---

## Modifying & Adding Dropdown Options {#managing-options}

In dynamic workflows, you may need to update an existing choice or inject a new option into the `<select>` element before making a selection.

### How to Edit an Existing Option (`<option>`) {#how-to-edit-option}

To update an existing option's attributes (such as changing its `value` attribute), use the [`insertElementAttribute`](/documentation/functions#insertelementattribute) predefined function:

| Property | Value / Setting | Description |
|---|---|---|
| **Field Type** | **Function** | Set to predefined function runner |
| **Function Name** | `insertElementAttribute` | Updates or adds element attributes |
| **Selector Type** | `XPath` | Pinpoints the specific `<option>` node |
| **Selector Query** | `//select/option[@value="100"]` | Targets `<option>` with `value="100"` inside the `<select>` |
| **Field Value** | `value,1000` | Format: `attributeName,attributeValue` (updates `value="100"` to `value="1000"`) |

> [!WARNING]
> **Required Setting**:
> Because `<option>` elements inside a standard `<select>` dropdown have no visible layout box when the dropdown is closed, you **MUST turn OFF** the field option:
> **`Wait until element is visible in the page.`** in [Field Settings](/documentation/form-fields/field-settings).
>
> Leaving this option ON will cause a visibility timeout error.

---

### How to Add a New Option (`<option>`) {#how-to-add-option}

To dynamically insert a new choice into an existing dropdown, use the [**Insert & Remove HTML**](/documentation/field-types/others/insert-remove-html) field type:

| Property | Value / Setting | Description |
|---|---|---|
| **Field Type** | **Insert & Remove HTML** | Direct DOM element injection |
| **Selector Type** | `Selector` or `XPath` | Targets the parent `<select>` element |
| **Selector Query** | `select#country` or `//select[@name="category"]` | The target dropdown container |
| **Position of New HTML Content** | `beforeend` | Inserts the new option at the end of the dropdown list |
| **Field Default Value** | `<option value="1000">1000</option>` | Raw HTML markup for the new option |

> [!TIP]
> - Use **`beforeend`** to append the option at the bottom of the list.
> - Use **`afterbegin`** to insert the option as the very first item in the dropdown.

---

## Troubleshooting {#troubleshooting}

| Issue | Likely Cause | Solution |
|---|---|---|
| **Option not found** | Capitalization mismatch or extra spacing | Turn ON lowercase matching or space normalization. |
| **Dropdown empty when field runs** | Options load asynchronously via AJAX | Turn ON **Wait until max options in the dropdown element** and set count to `2` or higher. |
| **Selection doesn't trigger page updates** | Custom UI library (e.g. React/Vue/Material select) | Use [Material Single Select](/documentation/field-types/material-single-select) or trigger events using [JavaScript Events](/documentation/field-types/javascript-events). |

---

## Next Steps

- <img src="/svg/form.svg" class="doc-icon" /> [Multiple Select Field](/documentation/field-types/multiple-select) — Automate multi-choice dropdowns
- <img src="/svg/settings.svg" class="doc-icon" /> [Field Settings](/documentation/form-fields/field-settings) — Advanced field execution options
- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template](/documentation/site/site-excel-template) — Prepare Excel (.xlsx) templates
- <img src="/svg/browser.svg" class="doc-icon" /> [Site Settings](/documentation/site/site-settings) — Configure site-wide automation settings

