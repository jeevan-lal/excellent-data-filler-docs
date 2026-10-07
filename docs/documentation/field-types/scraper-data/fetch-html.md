---
prev:
  text: "Fetch Text"
  link: "/documentation/field-types/scraper-data/fetch-text"
next:
  text: "Scraping Data"
  link: "/documentation/field-types/scraper-data/scraping-data"
---

# Fetch HTML {#fetch-html}

The **Fetch HTML** field type extracts the raw HTML markup and attributes of a specified DOM element and saves it into your site's [Scraper Data](/documentation/site/site-scraper-data) dataset.

Unlike plain text extraction, **Fetch HTML** preserves tags, inline styles, links, and element attributes, making it ideal for capturing structured web content for archiving or downstream parsing.

---

## Overview {#overview}

While [Fetch Text](/documentation/field-types/scraper-data/fetch-text) strips away all HTML tags to return plain text, **Fetch HTML** preserves the complete underlying HTML source code.

| Property | Behavior | Example Output |
|---|---|---|
| **Markup Preservation** | Retains all child tags, classes, attributes, and formatting. | `<div class="info"><p>ID: <b>12</b></p></div>` &rarr; `<p>ID: <b>12</b></p>` |
| **Data Storage** | Stored in the active row under the field's column in [Scraper Data](/documentation/site/site-scraper-data). | Saved in active `.xlsx` dataset row |
| **Variable Injection** | Can be referenced dynamically in later fields using `{$fieldName$}` syntax. | Passed to API or input field |

---

## Configuration Options {#configuration-options}

| Option | Type | Description | Required |
|---|---|---|:---:|
| **Selector Type** | Dropdown | Method used to locate the target element (`CSS Selector` or `XPath`). | Yes |
| **Selector Query** | Text Input | CSS selector or XPath query targeting the element whose HTML you want to extract. | Yes |
| **Wait until element is found in the page** | Toggle | Pauses automation until the element renders in the DOM. | No |

---

## Step-by-Step Usage {#usage}

1. Open your target **Site Form** or **Segment** in the Excellent Data Filler dashboard.
2. Click **Insert Field** (`+`) and choose **Fetch HTML** under the **Scraper Data** category.
3. Provide a clear field name (e.g., `ProductDescriptionMarkup` or `EmailTemplateHTML`).
4. Enter the **Selector Query** pointing to the target element:
   - Example CSS Selector: `.product-details .description-content`
   - Example XPath: `//div[@id='receipt-preview']`
5. *(Optional)* Enable **Wait until element is found in the page** if the target content renders dynamically.
6. Click **Save** to confirm.

---

## Example Scenario: Scraping Rich Formatted Content {#example}

Consider a web portal showing a generated certificate or verification box:

```html
<div class="verification-card">
  <span class="status-badge verified">Verified</span>
  <p>Issued to: <a href="/user/452" class="user-link">John Doe</a></p>
  <img src="/badges/gold.png" alt="Gold Badge" />
</div>
```

### Setup:

- **Field Name**: `VerificationBadgeHTML`
- **Field Type**: `Fetch HTML`
- **Selector Query**: `.verification-card`

### Execution Result:

1. The extension locates `.verification-card` and captures its inner HTML string:
   ```html
   <span class="status-badge verified">Verified</span>
   <p>Issued to: <a href="/user/452" class="user-link">John Doe</a></p>
   <img src="/badges/gold.png" alt="Gold Badge" />
   ```
2. The complete markup string is recorded into the **Scraper Data** table under `VerificationBadgeHTML`.
3. You can export the collected records at any time as an Excel (`.xlsx`) spreadsheet from the **Scraper Data** tab.

---

## Best Practices {#best-practices}

- **Container Selection**: Choose the exact parent container that encapsulates the HTML you need. Targeting too broad of a parent (such as `body` or `main`) can result in excessively large strings.
- **Excel Cell Limits**: Excel (`.xlsx`) cells have a maximum character limit of 32,767 characters per cell. When scraping extremely large HTML blocks, ensure the extracted content does not exceed spreadsheet boundaries.
- **Context Menu Shortcut**: Use <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> on any element to quickly copy its outer HTML to your clipboard for inspection before configuring the selector.
