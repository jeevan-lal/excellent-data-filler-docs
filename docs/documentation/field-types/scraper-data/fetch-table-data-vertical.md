# Fetch Table Data in Scraper Data (Vertical)

Extract data from HTML tables and store it vertically in your Excel file, with each row of the table becoming a separate Excel entry.

## Overview

The Fetch Table Data in Scraper Data (Vertical) field type allows you to extract data from HTML tables on web pages. The data is stored **vertically** in Excel, meaning each table row becomes a new row in your Excel file.

## Configuration Options

| Option | Description | Required |
|--------|-------------|----------|
| **Selector Type** | Type of selector (CSS or XPath) | Yes |
| **Selector Query** | The selector to locate the table element | Yes |
| **Select Table Design Type** | Choose between Horizontal Table or Vertical Table | Yes |
| **Do we have to wait for the data to appear in the table?** | Wait for table data to load before scraping | No |
| **Waiting for total maximum table rows** | Specify the number of rows to wait for (if wait is enabled) | No |
| **If you want to take data only from the rows of the table** | Enable to provide a specific row selector instead of table selector | No |
| **Are you using custom javascript function for return field responses?** | Enable to modify fetched table data using custom JavaScript function | No |

:::info Row-Specific Scraping
When "If you want to take data only from the rows of the table" is enabled, you must provide the **selector query of the rows** of the table, not the selector query of the table itself.

**Example:**
- ❌ Table selector: `#users-table`
- ✅ Row selector: `#users-table tbody tr` or `.data-row`
:::

## 🛠️ Custom JavaScript Field Response Modification

If you enable **"Are you using custom javascript function for return field responses?"**, you can intercept and modify the fetched table data in your own way.

### Setup Instructions:

1. Add a **Javascript** field type **above** the `Fetch Table Data in Scraper Data (Vertical)` field.
2. Use the following JavaScript code in that Javascript field:

```js
$fns.field.listener('EDF-FIELD-FETCH-TABLE-DATA-VERTICAL', (output, callback) => {
  console.log("TABLE DATA:", output.response);

  // use custom actions

  // return new data
  callback({ status: true, message: "DONE", data: output.response });
  // callback({ status: false, message: "ERROR" });
});

$fns.return("1");
```

## How Vertical Format Works

In **vertical format**, each row from the HTML table becomes a **new row** in your Excel file.

### HTML Table Example:

```html
<table id="users">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>555-0001</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>555-0002</td>
    </tr>
    <tr>
      <td>Bob Johnson</td>
      <td>bob@example.com</td>
      <td>555-0003</td>
    </tr>
  </tbody>
</table>
```

### Excel Output (Vertical):

| Name | Email | Phone |
|------|-------|-------|
| John Doe | john@example.com | 555-0001 |
| Jane Smith | jane@example.com | 555-0002 |
| Bob Johnson | bob@example.com | 555-0003 |

Each table row becomes a new Excel row with columns for each cell.

---

## Configuration Steps

### Step 1: Locate the Table

Use a CSS selector or XPath to target the table element or table rows.

**For Table Selector:**
- CSS: `#users` or `.data-table`
- XPath: `//table[@id='users']`

**For Row Selector (when "take data only from rows" is enabled):**
- CSS: `#users tbody tr` or `.data-row`
- XPath: `//table[@id='users']//tbody/tr`

### Step 2: Select Table Design Type

Choose **Vertical Table** to extract each table row as a new Excel row.

### Step 3: Configure Wait Options (Optional)

If the table data loads dynamically:

1. Enable "Do we have to wait for the data to appear in the table?"
2. Set "Waiting for total maximum table rows" to the expected number of rows (e.g., `2` to wait for at least 2 rows)

### Step 4: Row-Specific Scraping (Optional)

If you want to scrape only specific rows:

1. Enable "If you want to take data only from the rows of the table"
2. Update the selector query to target rows instead of the table (e.g., `#users tbody tr` instead of `#users`)

---

## Usage Examples

### Example 1: Basic Table Scraping

```
Field Type: Fetch Table Data in Scraper Data (Vertical)
Selector Type: CSS Selector
Selector Query: #users-table
Select Table Design Type: Vertical Table
```

**Result:** Extracts all data rows from the table and stores each row as a new Excel entry.

---

### Example 2: Table with Row-Specific Scraping

```
Field Type: Fetch Table Data in Scraper Data (Vertical)
Selector Type: CSS Selector
Selector Query: .product-table tbody tr.product-row
Select Table Design Type: Vertical Table
If you want to take data only from the rows of the table: ✅ Enabled
```

**Result:** Only extracts rows with class "product-row" from the table body.

---

### Example 3: Dynamic Table with Wait

```
Field Type: Fetch Table Data in Scraper Data (Vertical)
Selector Type: XPath
Selector Query: //table[@class='dynamic-data']
Select Table Design Type: Vertical Table
Do we have to wait for the data to appear in the table?: ✅ Enabled
Waiting for total maximum table rows: 2
```

**Result:** Waits for at least 2 rows to appear in the dynamically loaded table, then extracts all data rows.

---

## Column Mapping

The extension automatically maps table columns to Excel columns based on:

1. **Header Row Text** (if headers are present)
2. **Column Index** (Column 1, Column 2, etc.)

### With Headers:

```html
<tr>
  <th>Product Name</th>
  <th>Price</th>
  <th>Stock</th>
</tr>
```

**Excel Columns:** `Product Name`, `Price`, `Stock`

### Without Headers:

**Excel Columns:** `Column1`, `Column2`, `Column3`

---

## Use Cases

### Product Catalog Scraping
Extract product listings from e-commerce sites with names, prices, and descriptions.

### User Directory Extraction
Scrape user information from directory tables for contact lists or databases.

### Report Data Collection
Extract data from report tables for analysis or archival purposes.

### Comparison Shopping
Scrape pricing tables from multiple websites to compare products and prices.

### Inventory Management
Extract inventory data from web-based systems for tracking and reporting.

---

## Vertical vs Horizontal Format

### Vertical Format (This Field Type)
- Each **table row** → New **Excel row**
- Best for: Multiple records, lists, directories
- Example: User list, product catalog, transaction history

### Horizontal Format
- Each **table row** → New **Excel column**
- Best for: Single record with multiple attributes
- Example: Product details, user profile, configuration settings

---

## Tips

:::tip Table Design Type
Always select **Vertical Table** for this field type to ensure each table row becomes a new Excel row.
:::

:::warning Dynamic Tables
For tables loaded via JavaScript or AJAX, enable "Do we have to wait for the data to appear in the table?" and set the expected number of rows to wait for.
:::

:::info Row-Specific Scraping
When scraping only specific rows, enable "If you want to take data only from the rows of the table" and provide the row selector instead of the table selector.
:::

:::tip Empty Cells
Empty table cells will be stored as empty values in Excel. Make sure your Excel template can handle empty values appropriately.
:::

---

## Troubleshooting

### Table Not Found
- Verify the selector is correct
- Enable wait option for dynamic content
- Check if the table is inside an iframe

### Wrong Data Extracted
- Verify you selected "Vertical Table" as the design type
- Check if row-specific scraping is configured correctly
- Ensure you're using the correct selector (table vs rows)

### Incomplete Data
- Increase the "Waiting for total maximum table rows" value
- Ensure all table rows are visible (not paginated)
- Check if lazy loading is used and scroll to load all rows first
- Verify no rows are hidden with CSS

---

## Related Field Types

- [Fetch Table Data (Horizontal)](/documentation/field-types/scraper-data/fetch-table-data-horizontal) - Extract table data in horizontal format
- [Scraping Data](/documentation/field-types/scraper-data/scraping-data) - Extract data from individual elements
- [Fetch Multiple Data (Vertical)](/documentation/field-types/scraper-data/fetch-multiple-data-vertical) - Extract multiple data points vertically
