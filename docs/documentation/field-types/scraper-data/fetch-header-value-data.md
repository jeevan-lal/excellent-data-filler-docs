---
prev:
  text: "Toast Notification"
  link: "/documentation/field-types/others/toast-notification"
next:
  text: "Fetch Multiple Data (Vertical)"
  link: "/documentation/field-types/scraper-data/fetch-multiple-data-vertical"
---

# Fetch Header-Value Data {#fetch-header-value-data}

Extract labeled key-value data pairs (such as specifications, user profile attributes, or definition lists) directly from web page structures into Excel (`.xlsx`) datasets.

---

## Overview {#overview}

The **Fetch Header-Value Data** field type automates the extraction of semi-structured text where data is organized as label/value pairs (e.g., `<dt>` / `<dd>`, labeled `<div>` blocks, or table rows with distinct header and value cells). The extension maps labels as `.xlsx` column headers and saves the corresponding text into rows under [Scraper Data](/documentation/site/site-scraper-data).

<img src="/image/scraper-data-01.png" alt="Fetch Header-Value Data Example" style="max-width: 360px; border-radius: 8px; margin: 16px 0;" />

---

## Configuration Options {#configuration-options}

| Option | Description | Required |
|---|---|---|
| **Selector Type** | Type of selector syntax (`CSS` or `XPath`). | Yes |
| **Selector Query** | Selector for the parent container enclosing the key-value pairs. | Yes |
| **If Header name is present then turn on the option** | Enables pairing header labels with values. | No |
| **Query of Headers** | Selector targeting the header/label nodes within the container. | When header enabled |
| **Query of Values** | Selector targeting the value nodes within the container. | Yes |
| **Wait until element is found in the page** | Pauses execution until target elements mount in the DOM. | No |

> [!NOTE]
> When **If Header name is present** is enabled, the extension dynamically matches each header with its adjacent value element to generate named columns in your spreadsheet. When disabled, values are harvested into default sequential columns.

---

## Supported DOM Layout Patterns {#patterns}

### Pattern 1: Definition Lists (`<dl>`, `<dt>`, `<dd>`)

```html
<dl class="product-specs">
  <dt>Brand</dt>
  <dd>TechCo</dd>
  <dt>Model</dt>
  <dd>XM-2000</dd>
  <dt>Warranty</dt>
  <dd>2 Years</dd>
</dl>
```

**Configuration**:
- **Selector Query**: `.product-specs`
- **If Header name is present**: Enabled
- **Query of Headers**: `dt`
- **Query of Values**: `dd`

**Extracted Output**:

| Brand | Model | Warranty |
|---|---|---|
| TechCo | XM-2000 | 2 Years |

---

### Pattern 2: Flexbox / Grid Key-Value Rows

```html
<div class="user-profile">
  <div class="row">
    <span class="label">Full Name:</span>
    <span class="val">Jane Doe</span>
  </div>
  <div class="row">
    <span class="label">Email:</span>
    <span class="val">jane@example.com</span>
  </div>
</div>
```

**Configuration**:
- **Selector Query**: `.user-profile`
- **If Header name is present**: Enabled
- **Query of Headers**: `.label`
- **Query of Values**: `.val`

---

## Practical Examples {#examples}

### Example 1: E-Commerce Product Attributes

```text
Selector Type: CSS
Selector Query: #technical-specifications
If Header name is present: Enabled
Query of Headers: table.specs th
Query of Values: table.specs td
Wait until element is found: Enabled
```

### Example 2: Unlabeled Value Sequence

```text
Selector Type: CSS
Selector Query: ul.summary-metrics
If Header name is present: Disabled
Query of Values: li.metric-item
```

---

## Troubleshooting {#troubleshooting}

| Issue | Likely Cause | Solution |
|---|---|---|
| **No data extracted** | Container selector failed to match | Inspect container with <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>. Add a delay before running the field if rendered via AJAX. |
| **Headers and values misaligned** | Extra DOM nodes or uneven count of headers and values | Ensure the header query and value query return matching counts within each container. |
| **Blank header columns** | Header element contains empty whitespace or icons | Refine header query to target the inner text node directly. |

---

## Related Documentation {#related}

- <img src="/svg/excel.svg" class="doc-icon" /> [Scraper Data Management Dashboard](/documentation/site/site-scraper-data)
- <img src="/svg/database.svg" class="doc-icon" /> [Scraping Data Field](/documentation/field-types/scraper-data/scraping-data)
- <img src="/svg/form.svg" class="doc-icon" /> [Fetch Multiple Data (Vertical)](/documentation/field-types/scraper-data/fetch-multiple-data-vertical)
- <img src="/svg/click.svg" class="doc-icon" /> [Fetch Table Data (Horizontal)](/documentation/field-types/scraper-data/fetch-table-data-horizontal)
