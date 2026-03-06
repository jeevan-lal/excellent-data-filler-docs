# Scraping Data

Extract specific data from web page elements and store it in your Excel file for later use or analysis.

## Overview

The Scraping Data field type allows you to extract various types of information from HTML elements on a web page. This is useful for collecting data, monitoring changes, or gathering information that can be used in subsequent fields or saved to Excel.

## Configuration Options

| Option | Description | Required |
|--------|-------------|----------|
| **Selector Type** | Type of selector (CSS or XPath) | Yes |
| **Selector Query** | The selector to locate the element | Yes |
| [**Which Element Option Scraping**](#which-element-option-scraping) | Type of data to extract from the element | Yes |
| **Wait until element is found in the page** | Wait for the element to appear before scraping | No |
| [**Are you using custom javascript function for return field responses?**](#example-5-custom-javascript-function-to-modify-scraped-data) | Enable custom JavaScript to modify the scraped data | No |
| [**Download a file with scraped data?**](#download-a-file-with-scraped-data) | Enable downloading the scraped data as a file | No |
| **File Type** | Choose between Text File, CSV File, or JSON File | No |
| [**Wait, the unit file download is complete?**](#wait-the-unit-file-download-is-complete) | Wait for the file download to finish before proceeding | No |
| [**Do you want to set the custom name of the file?**](#do-you-want-to-set-the-custom-name-of-the-file) | Enable setting a custom name for the file | No |
| **Enter file name** | Specify the name for the downloaded file | No |

---

## Which Element Option Scraping

Choose what type of data you want to extract from the target element:

**Available Options:**
- [Element Text](#element-text)
- [Element Text Content](#element-text-content)
- [Element Value](#element-value)
- [Element HTML](#element-html)
- [Element Attribute](#element-attribute)
- [Element Selected Option Text](#element-selected-option-text)
- [Element Selected Option Value](#element-selected-option-value)
- [Set Field Default Value](#set-field-default-value)

---

### Element Text

Extracts the **visible text content** of an element.

**Example:**
```html
<div class="username">John Doe</div>
```
- **Selector:** `.username`
- **Scraped Value:** `John Doe`

---

### Element Text Content

Extracts the **text content** including hidden text and text from child elements.

**Example:**
```html
<div class="message">
  Hello <span style="display:none;">Hidden</span> World
</div>
```
- **Selector:** `.message`
- **Element Text:** `Hello World`
- **Element Text Content:** `Hello Hidden World`

---

### Element Value

Extracts the **value attribute** of form input elements.

**Example:**
```html
<input type="text" id="email" value="user@example.com">
```
- **Selector:** `#email`
- **Scraped Value:** `user@example.com`

---

### Element HTML

Extracts the **inner HTML** of an element, including all child elements and tags.

**Example:**
```html
<div class="content">
  <h2>Title</h2>
  <p>Description</p>
</div>
```
- **Selector:** `.content`
- **Scraped Value:** `<h2>Title</h2><p>Description</p>`

---

### Element Attribute

Extracts a **specific attribute value** from an element.

**Configuration:**
- You need to specify which attribute to extract (e.g., `href`, `src`, `data-id`, `class`)

**Example:**
```html
<a href="https://example.com" class="link">Click here</a>
```
- **Selector:** `.link`
- **Attribute:** `href`
- **Scraped Value:** `https://example.com`

---

### Element Selected Option Text

Extracts the **visible text** of the currently selected option in a dropdown/select element.

**Example:**
```html
<select id="country">
  <option value="us">United States</option>
  <option value="uk" selected>United Kingdom</option>
  <option value="ca">Canada</option>
</select>
```
- **Selector:** `#country`
- **Scraped Value:** `United Kingdom`

---

### Element Selected Option Value

Extracts the **value attribute** of the currently selected option in a dropdown/select element.

**Example:**
```html
<select id="country">
  <option value="us">United States</option>
  <option value="uk" selected>United Kingdom</option>
  <option value="ca">Canada</option>
</select>
```
- **Selector:** `#country`
- **Scraped Value:** `uk`

---

### Set Field Default Value

Stores a **default value or Excel column value** directly to the specified column name without requiring any element selector query.

**Key Features:**
- ✅ **No element selector required** - This option doesn't need a selector query
- ✅ **Variable support** - Use variables like `{$fieldName$}` in the value
- ✅ **Excel column support** - Reference Excel column values
- ✅ **Direct storage** - Value is stored directly to the column name

**Configuration:**
- **Column Name:** The Excel column where the value will be stored
- **Default Value:** The value to store (supports variables and Excel column references)

**Example 1: Static Default Value**
```
Field Type: Scraping Data
Which Element Option: Set Field Default Value
Column Name: status
Default Value: pending
```
**Result:** Stores "pending" in the "status" column.

**Example 2: Using Variables**
```
Field Type: Scraping Data
Which Element Option: Set Field Default Value
Column Name: fullName
Default Value: {$firstName$} {$lastName$}
```
**Result:** Combines firstName and lastName variables and stores in "fullName" column.

**Example 3: Excel Column Reference**
```
Field Type: Scraping Data
Which Element Option: Set Field Default Value
Column Name: processedEmail
Default Value: {$email$}
```
**Result:** Stores the value from the "email" Excel column into "processedEmail" column.

## File Download Options

These options allow you to save the scraped data directly to your local machine as a file.

### Download a file with scraped data?
When enabled, the extension will download the scraped content. You can choose from several file formats to store your data.

**File Types:**
- **Text File**: Saves the data as a `.txt` file.
- **CSV File**: Saves the data in Comma-Separated Values format (`.csv`).
- **JSON File**: Saves the data as a structured JSON object (`.json`).

### Wait, the unit file download is complete?
If this option is enabled, the automation will pause and wait for the browser to confirm that the file download has successfully completed before proceeding to the next field or action.

### Do you want to set the custom name of the file?
By default, the extension generates a filename automatically. Enable this option if you want to provide a specific name for the downloaded file.

**Enter file name:**
Enter the desired filename (e.g., `extracted_data`). Note that the appropriate file extension will be added automatically based on the selected **File Type**.

## Usage Examples

### Example 1: Scrape User Profile Name

```
Field Type: Scraping Data
Selector Type: CSS Selector
Selector Query: .profile-name
Which Element Option: Element Text
```

**Result:** Extracts the user's name from the profile page.

---

### Example 2: Scrape Product Price

```
Field Type: Scraping Data
Selector Type: CSS Selector
Selector Query: .product-price
Which Element Option: Element Text
Wait until element is found in the page: ✅ Enabled
```

**Result:** Waits for the price element to load, then extracts the price value.

---

### Example 3: Scrape Image URL

```
Field Type: Scraping Data
Selector Type: CSS Selector
Selector Query: .product-image
Which Element Option: Element Attribute
Attribute Name: src
```

**Result:** Extracts the image source URL from the `src` attribute.

---

### Example 4: Scrape Form Input Value

```
Field Type: Scraping Data
Selector Type: XPath
Selector Query: //input[@name='email']
Which Element Option: Element Value
```

**Result:** Extracts the current value from the email input field.

---

### Example 5: Custom JavaScript Function to Modify Scraped Data

You can use a custom JavaScript function to modify the scraped data before it's stored.

**Setup:**
1. Add a **JavaScript Code** field type **above** the Scraping Data field
2. Enable the option: **"Are you using custom javascript function for return field responses?"** in the Scraping Data field
3. Use the field listener to modify the scraped data

**JavaScript Code:**
```js
$fns.field.listener('EDF-FIELD-SCRAPING-DATA', (output, callback) => {
  console.log("REQUEST:", output);

  // Use custom actions - Example: Convert to lowercase
  let newText = output.response.toLocaleLowerCase();

  // Return modified data
  callback({ status: true, message: "DONE", data: newText });
  // Or return error: callback({ status: false, message: "ERROR" });
});

$fns.return("1");
```

**Configuration:**
```
Field Type: Scraping Data
Selector Type: CSS Selector
Selector Query: .product-name
Which Element Option: Element Text
Are you using custom javascript function: ✅ Enabled
```

**HTML:**
```html
<div class="product-name">LAPTOP PRO 2024</div>
```

**Result:** Stores `laptop pro 2024` (converted to lowercase) in Excel column

**Use Cases:**
- Format scraped text (uppercase, lowercase, title case)
- Clean and sanitize data (remove extra spaces, special characters)
- Parse and extract specific patterns (emails, phone numbers)
- Transform data format (date formatting, number formatting)
- Validate and filter scraped content
- Combine multiple scraped values

---

## Use Cases

### Data Collection
Extract product information, prices, descriptions, or any other data from web pages for analysis or record-keeping.

### Form Validation
Scrape values from form fields to verify that data was entered correctly before submission.

### Dynamic Content Monitoring
Extract data from dynamically loaded content and store it in Excel for tracking changes over time.

### Multi-Step Forms
Scrape data from one step of a form to use in subsequent steps or for verification purposes.

### API Response Data
Extract data from elements that display API responses or dynamically generated content.

---

## Tips

:::tip Storing Scraped Data
Scraped data is automatically stored in the Excel column that corresponds to the field name. Make sure your Excel template has a column with the same name as your scraping field.
:::

:::warning Wait for Dynamic Content
If scraping dynamically loaded content, enable "Wait until element is found in the page" to ensure the element is present before attempting to scrape.
:::

:::info Using Variables
You can use the scraped data in subsequent fields by referencing it as a variable: `{$fieldName$}`
:::

---

## Related Field Types

- [Scraping Page URL](/documentation/field-types/scraper-data/scraping-page-url) - Extract the current page URL
- [Fetch Header-Value Data](/documentation/field-types/scraper-data/fetch-header-value-data) - Extract key-value pairs
- [Fetch Table Data](/documentation/field-types/scraper-data/fetch-table-data-vertical) - Extract data from tables
