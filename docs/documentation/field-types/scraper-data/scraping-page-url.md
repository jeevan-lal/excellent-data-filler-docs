---
prev:
  text: "Scraping Data"
  link: "/documentation/field-types/scraper-data/scraping-data"
next:
  text: "Scraper Data Dashboard"
  link: "/documentation/site/site-scraper-data"
---

# Scraping Page URL {#scraping-page-url}

Capture the active web page URL dynamically during automation and log it to your Excel (`.xlsx`) report or state variables.

---

## Overview {#overview}

The **Scraping Page URL** field type records the full web address (`window.location.href`) of the active browser tab. This is useful for auditing form transitions, recording redirection confirmation addresses with transaction tokens, tracking multi-page workflows, and capturing final landing URLs.

---

## Configuration Options {#configuration-options}

| Option | Description | Required |
|---|---|---|
| **Field Default Value** | Optional fallback URL. If left blank, captures the active page URL automatically. | No |
| **Are you using custom javascript function for return field responses?** | Intercepts and transforms the captured URL before committing. | No |

---

## How It Works {#how-it-works}

The field evaluates URL values using the following logic:
1. **Empty / Undefined Default Value**: Automatically reads the live browser address (`https://domain.com/path?param=val#hash`).
2. **Specified Default Value**: Overrides dynamic detection with a fixed string or pre-computed template variable.

---

## Custom JavaScript URL Transformation {#custom-javascript}

Modify or filter URL parameters using a custom JavaScript interceptor:

1. Add a **JavaScript Code** field positioned directly **above** this field.
2. Enable **Are you using custom javascript function for return field responses?**.
3. Register the event listener:

```javascript
$fns.field.listener('EDF-FIELD-SCRAPING-PAGE-URL', (output, callback) => {
  console.log('Raw URL:', output.response);

  // Example: Extract clean path without query parameters
  const urlObj = new URL(output.response);
  const cleanPath = urlObj.origin + urlObj.pathname;

  // Return cleaned URL
  callback({ status: true, message: 'DONE', data: cleanPath });
});

$fns.return('1');
```

---

## Practical Examples {#examples}

### Example 1: Capture Active Page Address

```text
Field Type: Scraping Page URL
Field Name: FinalPageURL
Default Value: (empty)
```
*Stores the current URL (e.g., `https://portal.service.com/dashboard/confirmed`) directly into the `FinalPageURL` column.*

### Example 2: Dynamic Template URL with Base Variable

```text
Field Type: Scraping Page URL
Field Name: TargetAuditURL
Default Value: {$BaseDomain$}/orders/archive
```

---

## Related System Variables {#related-variables}

You can also reference individual URL components directly in other fields using built-in system variables:

| Variable | Output Description | Example Value |
|---|---|---|
| `{$location.href$}` | Full URL address | `https://example.com/checkout?step=2` |
| `{$location.hostname$}` | Domain hostname | `example.com` |
| `{$location.pathname$}` | URL path segment | `/checkout` |
| `{$location.search$}` | Query parameters | `?step=2` |

---

## Related Documentation {#related}

- <img src="/svg/excel.svg" class="doc-icon" /> [Scraper Data Management Dashboard](/documentation/site/site-scraper-data)
- <img src="/svg/database.svg" class="doc-icon" /> [Scraping Data Field](/documentation/field-types/scraper-data/scraping-data)
- <img src="/svg/code.svg" class="doc-icon" /> [Variables Reference](/documentation/variable)
- <img src="/svg/browser.svg" class="doc-icon" /> [URL Matching Field](/documentation/field-types/url-matching)
