# Fetch Table Data in the Response Excel (Horizontal)

Extract data from HTML tables and store it horizontally in your Excel file, with each row of the table becoming a new column in a single Excel entry.

## Overview

The Fetch Table Data in the Response Excel (Horizontal) field type allows you to extract data from HTML tables on web pages. The data is stored **horizontally** in Excel, meaning each table row becomes a new **column** in your Excel file, all within a single row.

## Configuration Options

| Option | Description | Required |
|--------|-------------|----------|
| **Selector Type** | Type of selector (CSS or XPath) | Yes |
| **Selector Query** | The selector to locate the table element or rows | Yes |
| **Select Table Design Type** | Choose between Horizontal Table or Vertical Table | Yes |
| **Add Prefix in the Table Header Name** | Add a prefix to all column names | No |
| **Prefix of Prefix** | The prefix text to add before column names | No |
| **Select Prefix Numbering** | Numbering format for prefix (Ordinal Numbers, etc.) | No |
| **Suffix of Prefix** | Text to add after the prefix number | No |
| **Add Suffix in the Table Header Name** | Add a suffix to all column names | No |
| **Prefix of Suffix** | Text to add before the suffix number | No |
| **Select Suffix Numbering** | Numbering format for suffix (Numerical, Ordinal, Words Ordinal, Words) | No |
| **Suffix of Suffix** | Text to add after the suffix number | No |
| **Do we have to wait for the data to appear in the table?** | Wait for table data to load before scraping | No |
| **Waiting for total maximum table rows** | Specify the number of rows to wait for (if wait is enabled) | No |
| **If you want to take data only from the rows of the table** | Enable to provide a specific row selector instead of table selector | No |
| **Are you using custom javascript function for return field responses?** | Enable to modify fetched table data using custom JavaScript function | No |

:::warning Important
One of the **Prefix** or **Suffix** options must be enabled, otherwise only the data from the first row of the table will be fetched.
:::

:::info Row-Specific Scraping
When "If you want to take data only from the rows of the table" is enabled, you must provide the **selector query of the rows** of the table, not the selector query of the table itself.

**Example:**
- ❌ Table selector: `#product-details`
- ✅ Row selector: `#product-details tr` or `.detail-row`
:::

## 🛠️ Custom JavaScript Field Response Modification

If you enable **"Are you using custom javascript function for return field responses?"**, you can intercept and modify the fetched table data in your own way.

### Setup Instructions:

1. Add a **Javascript** field type **above** the `Fetch Table Data in the Response Excel (Horizontal)` field.
2. Use the following JavaScript code in that Javascript field:

```js
$fns.field.listener('EDF-FIELD-FETCH-TABLE-DATA-HORIZONTAL', (output, callback) => {
  console.log("TABLE DATA:", output.response);

  // use custom actions

  // return new data
  callback({ status: true, message: "DONE", data: output.response });
  // callback({ status: false, message: "ERROR" });
});

$fns.return("1");
```

:::tip Column Naming with Prefix/Suffix
When prefix or suffix is enabled, column names are generated as:
- **With Prefix**: `Prefix1TableHeaderName`, `Prefix2TableHeaderName`, etc.
- **With Suffix**: `TableHeaderNameSuffix1`, `TableHeaderNameSuffix2`, etc.

**Numbering Options:**
- **Numerical Numbers**: 1, 2, 3, 4...
- **Ordinal Numbers**: 1st, 2nd, 3rd, 4th...
- **Words Ordinal Numbers**: First, Second, Third, Fourth...
- **Words Numbers**: One, Two, Three, Four...
:::

## How Horizontal Format Works

In **horizontal format**, each row from the HTML table becomes a **new column** in your Excel file, all stored in a single Excel row.

### HTML Table Example:

```html
<table id="product-details">
  <tr>
    <td>Product Name</td>
    <td>Wireless Mouse</td>
  </tr>
  <tr>
    <td>Price</td>
    <td>$29.99</td>
  </tr>
  <tr>
    <td>Stock</td>
    <td>In Stock</td>
  </tr>
  <tr>
    <td>Rating</td>
    <td>4.5 Stars</td>
  </tr>
</table>
```

### Excel Output (Horizontal):

| Product Name | Price | Stock | Rating |
|--------------|-------|-------|--------|
| Wireless Mouse | $29.99 | In Stock | 4.5 Stars |

Each table row becomes a column in a single Excel row.

---

## Column Naming

The extension creates Excel column names based on the prefix/suffix configuration:

### With Prefix Enabled

Column names follow the pattern: `[Prefix of Prefix][Number][Suffix of Prefix][Table Header Name]`

**Examples:**
- Prefix: `Spec`, Numbering: `Ordinal Numbers` → `Spec1stBrand`, `Spec2ndPrice`, `Spec3rdStock`
- Prefix: `Detail`, Numbering: `Numerical Numbers` → `Detail1Name`, `Detail2Email`, `Detail3Phone`
- Prefix: `Item`, Numbering: `Words Numbers` → `ItemOneName`, `ItemTwoPrice`, `ItemThreeQty`

### With Suffix Enabled

Column names follow the pattern: `[Table Header Name][Prefix of Suffix][Number][Suffix of Suffix]`

**Examples:**
- Suffix: `Info`, Numbering: `Numerical Numbers` → `BrandInfo1`, `PriceInfo2`, `StockInfo3`
- Suffix: `Data`, Numbering: `Ordinal Numbers` → `NameData1st`, `EmailData2nd`, `PhoneData3rd`
- Suffix: `Field`, Numbering: `Words Ordinal Numbers` → `BrandFieldFirst`, `PriceFieldSecond`

### Without Prefix or Suffix

If neither prefix nor suffix is enabled, **only the first row** of the table will be fetched.

**Excel Columns:** Based on first cell content of each row (e.g., `Name`, `Email`, `Phone`)

---

## Usage Examples

### Example 1: Product Details with Prefix

```
Field Type: Fetch Table Data in the Response Excel (Horizontal)
Selector Type: CSS Selector
Selector Query: .product-specs
Select Table Design Type: Horizontal Table
Add Prefix in the Table Header Name: ✅ Enabled
Prefix of Prefix: Spec
Select Prefix Numbering: Ordinal Numbers
Suffix of Prefix: (leave empty)
```

**HTML:**
```html
<table class="product-specs">
  <tr><td>Brand</td><td>TechCo</td></tr>
  <tr><td>Model</td><td>XM-2000</td></tr>
  <tr><td>Warranty</td><td>2 Years</td></tr>
</table>
```

**Excel Output:**

| Spec1stBrand | Spec2ndModel | Spec3rdWarranty |
|--------------|--------------|-----------------|
| TechCo | XM-2000 | 2 Years |

---

### Example 2: User Profile with Suffix

```
Field Type: Fetch Table Data in the Response Excel (Horizontal)
Selector Type: XPath
Selector Query: //table[@class='user-info']
Select Table Design Type: Horizontal Table
Add Suffix in the Table Header Name: ✅ Enabled
Prefix of Suffix: Info
Select Suffix Numbering: Numerical Numbers
Suffix of Suffix: (leave empty)
Do we have to wait for the data to appear in the table?: ✅ Enabled
Waiting for total maximum table rows: 2
```

**HTML:**
```html
<table class="user-info">
  <tr><td>Username</td><td>johndoe123</td></tr>
  <tr><td>Member Since</td><td>2020-01-15</td></tr>
  <tr><td>Status</td><td>Active</td></tr>
</table>
```

**Excel Output:**

| UsernameInfo1 | Member SinceInfo2 | StatusInfo3 |
|---------------|-------------------|-------------|
| johndoe123 | 2020-01-15 | Active |

---

### Example 3: Order Summary with Row-Specific Scraping

```
Field Type: Fetch Table Data in the Response Excel (Horizontal)
Selector Type: CSS Selector
Selector Query: #order-summary tr.summary-row
Select Table Design Type: Horizontal Table
Add Prefix in the Table Header Name: ✅ Enabled
Prefix of Prefix: Order
Select Prefix Numbering: Words Numbers
If you want to take data only from the rows of the table: ✅ Enabled
```

**HTML:**
```html
<table id="order-summary">
  <tr class="summary-row"><td>Subtotal</td><td>$99.99</td></tr>
  <tr class="summary-row"><td>Tax</td><td>$8.00</td></tr>
  <tr class="summary-row"><td>Total</td><td>$107.99</td></tr>
</table>
```

**Excel Output:**

| OrderOneSubtotal | OrderTwoTax | OrderThreeTotal |
|------------------|-------------|-----------------|
| $99.99 | $8.00 | $107.99 |

---

## Vertical vs Horizontal Format

### Horizontal Format (This Field Type)
- Each **table row** → New **Excel column**
- All data in **one Excel row**
- Best for: Single record details, specifications, profiles
- Example: Product details, user profile, order summary

### Vertical Format
- Each **table row** → New **Excel row**
- Multiple Excel rows created
- Best for: Multiple records, lists, directories
- Example: User list, product catalog, transaction history

---

## Use Cases

### Product Specifications
Extract detailed product specifications from e-commerce sites where each spec is a table row.

### User Profile Data
Scrape user profile information displayed in key-value table format.

### Order Summaries
Extract order details like subtotal, tax, shipping, and total from checkout pages.

### Configuration Settings
Scrape system or account configuration settings displayed in table format.

### Comparison Data
Extract comparison data for a single item from comparison tables.

---

## Tips

:::tip Table Design Type
Always select **Horizontal Table** for this field type to ensure each table row becomes a new Excel column.
:::

:::tip Prefix or Suffix Required
Remember to enable either **Prefix** or **Suffix** options. Without them, only the first row of data will be extracted!
:::

:::warning Column Limits
Excel has a maximum of 16,384 columns. Ensure your table doesn't exceed this limit.
:::

:::info Dynamic Content
For dynamically loaded tables, enable "Do we have to wait for the data to appear in the table?" and set the expected number of rows to wait for.
:::

:::tip Column Naming Strategy
Choose meaningful prefix/suffix text and appropriate numbering formats to make your Excel columns easy to identify and work with.
:::

---

## Table Structure Requirements

The horizontal format works best with tables structured as **key-value pairs**:

### ✅ Good Structure:
```html
<table>
  <tr><td>Label 1</td><td>Value 1</td></tr>
  <tr><td>Label 2</td><td>Value 2</td></tr>
</table>
```

### ❌ Not Ideal:
```html
<table>
  <tr><td>Value 1</td><td>Value 2</td><td>Value 3</td></tr>
  <tr><td>Value 4</td><td>Value 5</td><td>Value 6</td></tr>
</table>
```
*For multi-row, multi-column tables, use [Vertical Format](/documentation/field-types/scraper-data/fetch-table-data-vertical) instead.*

---

## Troubleshooting

### Only First Row Extracted
- **Solution**: Enable either "Add Prefix in the Table Header Name" or "Add Suffix in the Table Header Name"
- This is the most common issue with horizontal table scraping

### Table Not Found
- Verify the selector is correct
- Enable wait option for dynamic content
- Check if the table is inside an iframe

### Incorrect Column Names
- Verify you selected "Horizontal Table" as the design type
- Check the prefix/suffix configuration
- Ensure the first cell of each row contains meaningful text
- Verify numbering format matches your needs

### Missing Data
- Increase the "Waiting for total maximum table rows" value
- Ensure all table rows are visible (not hidden with CSS)
- Verify the row selector targets all desired rows (if row-specific scraping is enabled)
- Check if the table uses non-standard HTML structure

---

## Related Field Types

- [Fetch Table Data (Vertical)](/documentation/field-types/scraper-data/fetch-table-data-vertical) - Extract table data in vertical format
- [Fetch Header-Value Data](/documentation/field-types/scraper-data/fetch-header-value-data) - Extract key-value pairs from non-table elements
- [Scraping Data](/documentation/field-types/scraper-data/scraping-data) - Extract data from individual elements
