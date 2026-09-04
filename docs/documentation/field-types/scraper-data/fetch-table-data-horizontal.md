---
prev:
  text: "Fetch Multiple Data (Vertical)"
  link: "/documentation/field-types/scraper-data/fetch-multiple-data-vertical"
next:
  text: "Fetch Table Data (Vertical)"
  link: "/documentation/field-types/scraper-data/fetch-table-data-vertical"
---

# Fetch Table Data (Horizontal) {#fetch-table-data-horizontal}

Extract HTML table records and pivot them horizontally into columns within a single Excel (`.xlsx`) row.

---

## Overview {#overview}

The **Fetch Table Data (Horizontal)** field type extracts data from HTML tables where each table row represents an attribute of a single entity (such as a receipt summary, product specification sheet, or user profile table). The extension converts table rows into horizontal spreadsheet columns for the active record under [Scraper Data](/documentation/site/site-scraper-data).

---

## Configuration Options {#configuration-options}

| Option | Description | Required |
|---|---|---|
| **Selector Type** | CSS Selector or XPath. | Yes |
| **Selector Query** | Selector targeting the table element or its row collection. | Yes |
| **Select Table Design Type** | Table layout mode (`Horizontal Table` or `Vertical Table`). | Yes |
| **Add Prefix in the Table Header Name** | Prepends a prefix string or counter to generated column names. | Conditional |
| **Select Prefix Numbering** | Format style for prefix numbers (Ordinal, Numerical, etc.). | No |
| **Add Suffix in the Table Header Name** | Appends a suffix string or counter to generated column names. | Conditional |
| **Select Suffix Numbering** | Format style for suffix numbers (Numerical, Ordinal, Words). | No |
| **Do we have to wait for the data to appear in the table?** | Pauses until rows finish rendering. | No |
| **Waiting for total maximum table rows** | Expected count of rows to wait for before extraction. | When wait enabled |
| **If you want to take data only from the rows of the table** | Switches selector scope to individual `tr` elements rather than `table`. | No |
| **Are you using custom javascript function for return field responses?** | Enables custom post-processing of extracted rows via JavaScript. | No |

> [!IMPORTANT]
> **Prefix or Suffix Requirement**: You must enable either **Add Prefix** or **Add Suffix** in the Table Header configuration when parsing multi-row tables horizontally to avoid column name collisions.

---

## Custom JavaScript Response Interceptor {#custom-javascript}

When **Are you using custom javascript function for return field responses?** is enabled, you can transform or clean table data before it commits to the spreadsheet:

1. Add a **JavaScript Code** field positioned directly **above** this field.
2. Register an event listener:

```javascript
$fns.field.listener('EDF-FIELD-FETCH-TABLE-DATA-HORIZONTAL', (output, callback) => {
  console.log('Raw Table Data:', output.response);

  // Perform custom data transformations or cleaning here
  
  // Return updated payload
  callback({ status: true, message: 'DONE', data: output.response });
});
```

---

## Table Structure Compatibility {#table-structure}

This field type is optimized for two-column key-value tables:

```html
<table class="specs-table">
  <tr><td>Model Name</td><td>HyperDrive-X</td></tr>
  <tr><td>Storage Capacity</td><td>1 TB</td></tr>
  <tr><td>Interface</td><td>USB-C 3.2</td></tr>
</table>
```

### Resulting Horizontal Excel (.xlsx) Row

| Model Name | Storage Capacity | Interface |
|---|---|---|
| HyperDrive-X | 1 TB | USB-C 3.2 |

---

## Practical Examples {#examples}

### Example 1: Order Checkout Summary

```text
Selector Type: CSS
Selector Query: table.order-summary-table
Select Table Design Type: Horizontal Table
Add Prefix in Table Header Name: Enabled
Prefix of Prefix: Order_
Do we have to wait for the data to appear?: Enabled
Waiting for total maximum table rows: 4
```

### Example 2: Row-Specific Target

```text
Selector Type: CSS
Selector Query: .profile-attributes tbody tr
If you want to take data only from the rows: Enabled
Add Suffix in Table Header Name: Enabled
Select Suffix Numbering: Numerical
```

---

## Troubleshooting {#troubleshooting}

| Issue | Likely Cause | Solution |
|---|---|---|
| **Only first row extracted** | Neither Prefix nor Suffix option was enabled | Enable **Add Prefix** or **Add Suffix** to allow multi-column mapping. |
| **Table element missing** | Dynamic AJAX rendering or iframe nesting | Enable the wait option and verify iframe context. |
| **Columns contain raw HTML tags** | Table cells contain nested markup | Enable the custom JavaScript listener to extract `innerText` cleanly. |

---

## Related Documentation {#related}

- <img src="/svg/excel.svg" class="doc-icon" /> [Scraper Data Management Dashboard](/documentation/site/site-scraper-data)
- <img src="/svg/database.svg" class="doc-icon" /> [Fetch Table Data (Vertical)](/documentation/field-types/scraper-data/fetch-table-data-vertical)
- <img src="/svg/form.svg" class="doc-icon" /> [Fetch Header-Value Data](/documentation/field-types/scraper-data/fetch-header-value-data)
- <img src="/svg/code.svg" class="doc-icon" /> [JavaScript Code Field](/documentation/field-types/javascript-code)
