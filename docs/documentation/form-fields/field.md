# Form Field {#form-field}

Form fields that can be automatically filled through Excel templates. Configure field properties, selectors, and timing to create powerful automation workflows.

<img src="/image/field-01.png" alt="Field">

## Field Options {#field-options}

Essential field configuration options required for automatic form filling.

| Field Options                                             | Required | Description                                                                                      | Example Values                                   |
| --------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| [**Field Name**](#field-name)                             | Yes      | Unique identifier for the field in Excel template                                                | `firstName`, `email`, `phone`                    |
| [**Field Type**](#field-type)                             | Yes      | Type of form field for data handling                                                             | **Text**, **Number**, **Date**, **Select**       |
| [**Field Selector Type**](#field-selector-type)           | Yes      | Method for locating the field element                                                            | **Selector**, **Id**, **XPath**                  |
| [**Field Selector Query**](#field-selector-query)         | Yes      | Unique address/query to locate the field                                                         | `#firstName`, `input[name="email"]`, `//input`   |
| [**Field Value**](#field-value)                           | Yes      | Two types of value to fill in the field <br> `1- field default value` `2- in excel column value` | `John Doe`, `john.doe@example.com`, `1234567890` |
| [**Active/Inactive**](#active-inactive)                   | Yes      | Enable or disable field processing                                                               | **Active**, **Inactive**                         |
| **Delay Time Before Running This Form**                   | No       | Wait time before field execution                                                                 | `0`, `500`, `1000` (milliseconds)                |
| **Delay Time After Running This Form**                    | No       | Wait time after field execution                                                                  | `0`, `500`, `1000` (milliseconds)                |
| **More Options**                                          |          |                                                                                                  |                                                  |

## Field Name {#field-name}

**Purpose:** Unique identifier that appears in your Excel template column headers.

**Important Notes:**

- Field names must be **unique** within each site.
- Names will appear exactly as entered in the Excel template.
- Use descriptive names for easy identification: `firstName`, `lastName`, `emailAddress`.
- Avoid special characters and spaces (unless using variables).

:::v-pre
**Using Variables in Field Name:**
You can use [Variables](/documentation/variable) within the Field Name to create dynamic identifiers. This is particularly useful for loop operations.
- Example: `field-{{loop.index[loop]}}`
- Resulting names: `field-1`, `field-2`, `field-3`, etc.
:::

## Field Type {#field-type}

**Purpose:** Defines how data is processed and validated for the field.

**Available Types:**

- **Text** - Plain text input
- **Number** - Numeric values only
- **Date** - Date format validation
- **Select** - Dropdown/select options
- **Checkbox** - Boolean true/false values
- **File** - File upload fields
- [More Types](/documentation/form-fields/field-types)

**How to Choose:**

1. Match the field type to the form element type
2. Consider data validation requirements
3. Ensure compatibility with Excel data format

## Field Selector Type {#field-selector-type}

**Purpose:** Determines the method used to locate the field element on the page.

| Selector Type | Description          | Use Case                  | Example                 |
| ------------- | -------------------- | ------------------------- | ----------------------- |
| **Selector**  | CSS selector query   | Most common, flexible     | `input[name="email"]`   |
| **Id**        | Element ID attribute | Fast, unique elements     | `#firstName`            |
| **XPath**     | XML Path Language    | Complex element selection | `//input[@type='text']` |

## Field Selector Query {#field-selector-query}

**Purpose:** The unique address/query used to locate the field element on the page.

**Basic Examples:**

```text
# CSS Selectors
input[name="firstName"]
#email
.form-control

# ID Selectors
#firstName
#email
#phone

# XPath Selectors
//input[@type='text']
//div[@class='form-group']//input
```

**Advanced JavaScript Path Support:**
You can use `JS Path` directly in the field selector query, starting with `$.`:

```js
$.document.querySelector("#container");
$.document.querySelector("#container").parentNode;
$.document.querySelector("#container").shadowRoot.querySelector("#full_name");
```

**Random Element Selection:**
For pages with multiple elements using the same selector:

```js
input:nth-child({{random.integer[1][3]}})
```

:::v-pre
**`{{random.integer[1][3]}}`** - This [variable](/documentation/variable) generates a random integer between `1` and `3`, useful for selecting random elements from a group.
:::

#### 🔧 How to Generate Field Selector Query {#how-to-generate-field-selector-query}

**Method 1: Browser Developer Tools**

1. Right-click on the field element
2. Select "Inspect Element"
3. Copy the selector from the highlighted element
4. Use the most specific selector available

**Method 2: Extension Helper**

Use the [Locate Element](/documentation/locate-element) tool

#### 📋 How to Copy Field Selector Query {#how-to-copy-field-selector-query}

After installing the extension, you can copy the Field Selector Query by right-clicking on the field:

<img src="/image/field-settings-10.png" alt="Field">

**Steps:**

1. Right-click on the target field
2. Select "`Copy Element Selector Address` / `Copy Element XPath Selector Address`" from context menu
3. Paste into the Field Selector Query field
4. Test the selector to ensure it works

## Field Value {#field-value}

**Purpose:** The value to fill in the field.

**Available Types:**
- **Field Default Value** - The value to fill in the field.
- **Excel Column Value** - The value to fill in the field from the Excel column.

:::info Note
- if field value not found in the excel column, then the field value will be set to the field default value.
- if field value is set to **Excel Column**, then the value will be taken from the Excel column with the same name as the Field Name.
:::

:::info Note
You can use [Variable](/documentation/variable) in the field value.
:::

---

:::info Pro Tip
Use the browser console to monitor field filling timing and adjust delays accordingly.
:::

## Active/Inactive {#active-inactive}

**Purpose:** Controls whether the field is processed during automation.

:::warning Important
Inactive fields will not appear in the Excel template and will not be processed during form filling.
:::

:::info Note
:::v-pre
For random time delay, you can use [Random Integer Variable](/documentation/variable#generate-random-value). Use variable `{{random.integer[1000][2000]}}` for random milliseconds.
:::
