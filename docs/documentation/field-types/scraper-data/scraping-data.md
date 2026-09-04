---
prev:
  text: "Fetch Table Data (Vertical)"
  link: "/documentation/field-types/scraper-data/fetch-table-data-vertical"
next:
  text: "Scraping Page URL"
  link: "/documentation/field-types/scraper-data/scraping-page-url"
---

# Scraping Data {#scraping-data}

Extract specific data from web page elements into your `.xlsx` report or export directly as structured output files.

---

## Overview {#overview}

The **Scraping Data** field type targets individual DOM nodes to extract text, HTML attributes, form values, or selected dropdown options. Extracted values are saved directly under the field's column header in [Scraper Data](/documentation/site/site-scraper-data) and can be referenced dynamically by subsequent fields using `{$fieldName$}` variable syntax.

---

## Configuration Options {#configuration-options}

| Option | Description | Required |
|---|---|---|
| **Selector Type** | Syntax type (`CSS Selector` or `XPath`). | Yes |
| **Selector Query** | Target element selector query. | Yes |
| **Which Element Option Scraping** | Target property to extract from the element. | Yes |
| **Wait until element is found in the page** | Pauses execution until the element mounts in the DOM. | No |
| **Are you using custom javascript function for return field responses?** | Enables custom post-processing via a JavaScript listener. | No |
| **Download a file with scraped data?** | Saves extracted data directly as a downloadable file. | No |
| **File Type** | Output format when downloading a file (`Text File`, `CSV File`, `JSON File`). | When download enabled |
| **Wait, the unit file download is complete?** | Pauses automation until the browser download finishes. | No |
| **Do you want to set the custom name of the file?** | Enables naming the exported download file. | No |
| **Enter file name** | Custom filename string (without extension). | When custom name enabled |

---

## Element Scraping Targets {#which-element-option-scraping}

| Property | Extraction Target | HTML Example |
|---|---|---|
| **Element Text** | Visible text (`innerText`). | `<div class="tag">Active</div>` → `Active` |
| **Element Text Content** | Raw text including hidden descendants (`textContent`). | `<div style="display:none">123</div>` → `123` |
| **Element Value** | Input or textarea `value`. | `<input value="USR-99" />` → `USR-99` |
| **Element HTML** | Inner markup (`innerHTML`). | `<p><strong>Bold</strong></p>` → `<strong>Bold</strong>` |
| **Element Attribute** | Value of any specific attribute (e.g., `href`, `data-id`). | `<a href="/doc.pdf">` → `/doc.pdf` |
| **Element Selected Option Text** | Visible label of active `<option>` in a `<select>`. | `<option selected>California</option>` → `California` |
| **Element Selected Option Value** | Value attribute of active `<option>` in a `<select>`. | `<option value="CA" selected>` → `CA` |

---

## Custom JavaScript Processing {#custom-javascript}

Transform or sanitize scraped values before committing them:

1. Add a **JavaScript Code** field positioned directly **above** this field.
2. Enable **Are you using custom javascript function for return field responses?**.
3. Register a listener:

```javascript
$fns.field.listener('EDF-FIELD-SCRAPING-DATA', (output, callback) => {
  console.log('Raw Scraped Data:', output.response);

  // Normalize string to uppercase and trim whitespace
  const sanitized = output.response.trim().toUpperCase();

  // Return cleaned value
  callback({ status: true, message: 'DONE', data: sanitized });
});

$fns.return('1');
```

---

## Practical Examples {#examples}

### Example 1: Scrape Order Confirmation Number

```text
Selector Type: CSS Selector
Selector Query: span#order-confirmation-number
Which Element Option: Element Text
Wait until element is found: Enabled
```

### Example 2: Extract Selected Dropdown Value

```text
Selector Type: CSS Selector
Selector Query: select#billing-state
Which Element Option: Element Selected Option Value
```

### Example 3: Extract Image Link

```text
Selector Type: CSS Selector
Selector Query: .avatar-profile img
Which Element Option: Element Attribute
Element Attribute Name: src
```

---

## Best Practices {#best-practices}

- **Wait for Dynamic Elements**: Always enable **Wait until element is found in the page** when scraping elements hydrated asynchronously by client-side frameworks.
- **Reference as Variables**: Use `{$fieldName$}` in subsequent form steps to input the scraped value into downstream forms.
- **Use Stable Selectors**: Inspect elements with <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> to ensure selectors avoid dynamic ephemeral class names.

---

## Related Documentation {#related}

- <img src="/svg/excel.svg" class="doc-icon" /> [Scraper Data Management Dashboard](/documentation/site/site-scraper-data)
- <img src="/svg/globe.svg" class="doc-icon" /> [Scraping Page URL](/documentation/field-types/scraper-data/scraping-page-url)
- <img src="/svg/form.svg" class="doc-icon" /> [Fetch Header-Value Data](/documentation/field-types/scraper-data/fetch-header-value-data)
- <img src="/svg/database.svg" class="doc-icon" /> [Fetch Table Data (Vertical)](/documentation/field-types/scraper-data/fetch-table-data-vertical)
