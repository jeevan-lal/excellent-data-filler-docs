---
prev:
  text: "Fetch Table Data (Horizontal)"
  link: "/documentation/field-types/scraper-data/fetch-table-data-horizontal"
next:
  text: "Scraping Data"
  link: "/documentation/field-types/scraper-data/scraping-data"
---

# Fetch Table Data (Vertical) {#fetch-table-data-vertical}

Extract records from HTML tables and store each table row as a separate data row in your Excel (`.xlsx`) report.

---

## Overview {#overview}

The **Fetch Table Data (Vertical)** field type extracts tabular data structured across `<thead>`, `<tbody>`, and `<tr>` elements. Every row in the web table is mapped to a new spreadsheet row under [Scraper Data](/documentation/site/site-scraper-data). It supports advanced data extraction including cell hyperlinks, image sources, input/select values, and merging with the active site's spreadsheet rows.

---

## Configuration Options {#configuration-options}

| Option | Description | Required |
|---|---|---|
| **Selector Type** | CSS Selector or XPath syntax. | Yes |
| **Selector Query** | Selector targeting the table or tbody element. | Yes |
| **Select Table Design Type** | Layout configuration mode (`Vertical Table` or `Horizontal Table`). | Yes |
| **Do we have to wait for the data to appear in the table?** | Pauses execution until rows finish rendering. | No |
| **Waiting for total maximum table rows** | Number of rows expected before scraping commences. | When wait enabled |
| **If you want to take data only from the rows of the table** | Targets specific `tr` nodes instead of the entire table container. | No |
| **Rename table headers based on excel data?** | Resolves column header conflicts with existing template columns. | No |
| **Combine the site's Excel data with the data from the table rows?** | Merges current spreadsheet row data into each extracted table record. | No |
| **Exclude table column data using the table column name** | Filters out unwanted columns by header name (comma-separated). | No |
| **Should hyperlinks also be extracted from the table?** | Extracts `href` attributes alongside anchor text. | No |
| **Should image url also be extracted from the table?** | Extracts `src` attributes from `<img>` elements within cells. | No |
| **Should input's value also be extracted from the table?** | Captures input box `value` attributes inside table cells. | No |
| **Should select's value also be extracted from the table?** | Captures dropdown selection values inside table cells. | No |
| **Are you using custom javascript function for return field responses?** | Custom interceptor to modify extracted records via JavaScript. | No |

---

## Advanced Extraction Capabilities {#advanced-features}

### Hyperlinks, Images, and Interactive Inputs

Standard HTML tables frequently embed action links, status icons, or inputs:
- **Hyperlinks**: Captures both link text and destination URL.
- **Images**: Extracts image URLs (e.g., user avatars or product thumbnails).
- **Form Inputs & Selects**: Gathers active user selections from embedded dropdowns or inputs.

### Merging with Active Excel Data

When **Combine the site's Excel data with the data from the table rows?** is enabled:
- The extension prepends current `.xlsx` row attributes (e.g., `Customer ID`, `Batch Code`) to every extracted row.
- Creates unified datasets that link input parameters directly with scraped table results.

---

## Custom JavaScript Interceptor {#custom-javascript}

Modify or filter rows before writing to the spreadsheet:

1. Add a **JavaScript Code** field positioned directly **above** this field.
2. Register an event listener:

```javascript
$fns.field.listener('EDF-FIELD-FETCH-TABLE-DATA-VERTICAL', (output, callback) => {
  console.log('Extracted Table Rows:', output.response);

  // Perform custom data transformations or filtering
  
  // Return updated data
  callback({ status: true, message: 'DONE', data: output.response });
});

$fns.return('1');
```

---

## Practical Examples {#examples}

### Example 1: Transaction History Table

```text
Selector Type: CSS
Selector Query: table#transactions-table
Select Table Design Type: Vertical Table
Do we have to wait for data to appear: Enabled
Waiting for total maximum table rows: 10
Should hyperlinks also be extracted: Enabled
```

### Example 2: Scrape Rows with Active Input Values

```text
Selector Type: CSS
Selector Query: .editable-grid tbody
Select Table Design Type: Vertical Table
Should input's value also be extracted: Enabled
Should select's value also be extracted: Enabled
Exclude table column data: Actions, Checkbox
```

---

## Troubleshooting {#troubleshooting}

| Issue | Likely Cause | Solution |
|---|---|---|
| **Table extracted with 0 rows** | Table loaded via AJAX after field triggered | Enable **Do we have to wait for data to appear** and set expected row count. |
| **Column names overlap with template** | Header collision with active Excel sheet | Enable **Rename table headers based on excel data?**. |
| **Input values missing from cells** | Inputs embedded in cells ignored by default | Enable **Should input's value also be extracted from the table?**. |

---

## Related Documentation {#related}

- <img src="/svg/excel.svg" class="doc-icon" /> [Scraper Data Management Dashboard](/documentation/site/site-scraper-data)
- <img src="/svg/click.svg" class="doc-icon" /> [Fetch Table Data (Horizontal)](/documentation/field-types/scraper-data/fetch-table-data-horizontal)
- <img src="/svg/database.svg" class="doc-icon" /> [Fetch Multiple Data (Vertical)](/documentation/field-types/scraper-data/fetch-multiple-data-vertical)
- <img src="/svg/code.svg" class="doc-icon" /> [JavaScript Code Field](/documentation/field-types/javascript-code)
