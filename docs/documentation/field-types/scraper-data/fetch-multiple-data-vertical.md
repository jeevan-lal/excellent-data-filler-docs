---
prev:
  text: "Fetch Header-Value Data"
  link: "/documentation/field-types/scraper-data/fetch-header-value-data"
next:
  text: "Fetch Table Data (Horizontal)"
  link: "/documentation/field-types/scraper-data/fetch-table-data-horizontal"
---

# Fetch Multiple Data (Vertical) {#fetch-multiple-data-vertical}

Harvest repeating item collections (such as product grids, catalog cards, or search results) from web pages into vertical `.xlsx` row datasets.

---

## Overview {#overview}

The **Fetch Multiple Data (Vertical)** field type extracts repeating occurrences of web elements across a page. For every matching node found, the extension captures the chosen property (text, attribute, href, or image URL) and appends it as a distinct row under [Scraper Data](/documentation/site/site-scraper-data).

---

## Configuration Options {#configuration-options}

| Option | Description | Required |
|---|---|---|
| **Selector Type** | Syntax type (`CSS` or `XPath`). | Yes |
| **Selector Query** | Target query matching all repeating items on the page. | Yes |
| **Which Element Option Scraping** | The specific property to extract from each matched node. | Yes |
| **Element Attribute Name** | Attribute to extract when `Element Attribute` is selected (e.g., `data-id`). | Conditional |
| **Wait until element is found in the page** | Pauses execution until at least one matching node appears. | No |

---

## Scraping Property Options {#scraping-options}

| Option | Extraction Target | Typical Use Case |
|---|---|---|
| **Element Text** | Visible text (`innerText` / `textContent`). | Titles, prices, descriptions, ratings. |
| **Element Value** | Input field `value` attribute. | Form inputs, hidden tokens, counters. |
| **Element HTML** | Inner markup (`innerHTML`). | Formatted HTML blocks or styled badges. |
| **Element Attribute** | Value of any arbitrary HTML attribute. | IDs (`data-sku`), stock status (`data-stock`). |
| **Element Text/Value** | Auto-detects text or input value. | Mixed lists of static text and inputs. |
| **Element Link** | Hyperlink URL (`href` attribute). | Product links, article URLs. |
| **Element Image Link** | Image source URL (`src` attribute). | Thumbnails, gallery images. |

---

## Extraction Flow & Multi-Column Workflows {#workflow-details}

Each **Fetch Multiple Data (Vertical)** field generates one dedicated column of vertical rows. To extract multi-dimensional datasets (e.g., Product Title, Price, and Product Link together into one Excel row per item):

1. **Field 1 (Product Name)**:
   - Selector: `.product-card .product-title`
   - Property: `Element Text`
2. **Field 2 (Product Price)**:
   - Selector: `.product-card .price-tag`
   - Property: `Element Text`
3. **Field 3 (Product URL)**:
   - Selector: `.product-card a.product-link`
   - Property: `Element Link`

During execution, the extension aligns row indexes across fields to assemble a clean tabular `.xlsx` spreadsheet.

---

## Practical Examples {#examples}

### Example 1: Extracting Search Result Titles

```text
Selector Type: CSS
Selector Query: div.search-result h2.title
Which Element Option Scraping: Element Text
Wait until element is found: Enabled
```

### Example 2: Extracting Product Image URLs

```text
Selector Type: CSS
Selector Query: .product-grid img.thumbnail
Which Element Option Scraping: Element Image Link
```

### Example 3: Extracting Custom Data Attribute

```text
Selector Type: CSS
Selector Query: tr.order-row
Which Element Option Scraping: Element Attribute
Element Attribute Name: data-order-id
```

---

## Best Practices {#best-practices}

- **Test Selectors with `querySelectorAll`**: Verify in DevTools console (`document.querySelectorAll('.item').length`) that the selector captures the intended count.
- **Ensure Count Alignment**: When scraping multiple columns for the same entities, verify all selectors return identical element lengths.
- **Handle Infinite Scroll**: If the target page lazy-loads items upon scrolling, combine with page scroll actions or [Loop](/documentation/field-types/loop) before triggering the scraper.

---

## Related Documentation {#related}

- <img src="/svg/excel.svg" class="doc-icon" /> [Scraper Data Management Dashboard](/documentation/site/site-scraper-data)
- <img src="/svg/click.svg" class="doc-icon" /> [Fetch Table Data (Horizontal)](/documentation/field-types/scraper-data/fetch-table-data-horizontal)
- <img src="/svg/database.svg" class="doc-icon" /> [Fetch Table Data (Vertical)](/documentation/field-types/scraper-data/fetch-table-data-vertical)
- <img src="/svg/form.svg" class="doc-icon" /> [Fetch Header-Value Data](/documentation/field-types/scraper-data/fetch-header-value-data)
- <img src="/svg/template.svg" class="doc-icon" /> [Loop Field Type](/documentation/field-types/loop)
