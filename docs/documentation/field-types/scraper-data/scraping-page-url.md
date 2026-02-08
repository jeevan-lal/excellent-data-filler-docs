# Scraping Page URL

Extract the current page URL and store it in your Excel file.

## Overview

The Scraping Page URL field type allows you to capture the current web page's URL. This is useful for tracking which pages were visited, logging navigation paths, or using the URL in subsequent automation steps.

## Configuration Options

| Option | Description | Required |
|--------|-------------|----------|
| **Field Default Value** | Optional default URL value | No |

---

## How It Works

The Scraping Page URL field type has smart logic for determining what URL to capture:

1. **If field value is undefined or empty**: Scrapes the current page URL
2. **If field value is defined**: Uses the defined default value instead

This allows you to either dynamically capture the current URL or use a predefined URL value.

---

## URL Components

When scraping the page URL, you get the complete URL including:

- **Protocol**: `https://` or `http://`
- **Domain**: `example.com`
- **Path**: `/products/item-123`
- **Query Parameters**: `?id=456&category=electronics`
- **Hash/Fragment**: `#section-2`

**Example Full URL:**
```
https://example.com/products/item-123?id=456&category=electronics#section-2
```

---

## Usage Examples

### Example 1: Capture Current Page URL

```
Field Type: Scraping Page URL
Field Name: pageURL
Default Value: (empty)
```

**Current Page:** `https://formfiller.ctechhindi.in/example/form.php`

**Result:** Stores `https://formfiller.ctechhindi.in/example/form.php` in Excel column `pageURL`

---

### Example 2: Use Predefined URL

```
Field Type: Scraping Page URL
Field Name: targetURL
Default Value: https://example.com/default-page
```

**Result:** Stores `https://example.com/default-page` in Excel column `targetURL` (ignores current page URL)

---

### Example 3: Track Navigation Path

**Workflow:**
1. **Field 1** - Scraping Page URL (Start Page)
2. **Field 2** - Click Button to Navigate
3. **Field 3** - Scraping Page URL (End Page)

**Result:** Track the before and after URLs to verify navigation worked correctly.

---

### Example 4: Dynamic URL with Variables

```
Field Type: Scraping Page URL
Field Name: currentURL
Default Value: {$baseURL$}/page
```

**Excel Column `baseURL`:** `https://example.com`

**Result:** Stores `https://example.com/page` in Excel column `currentURL`

---

## Use Cases

### Navigation Tracking
Record which pages were visited during form filling for audit trails or debugging.

### URL Verification
Verify that navigation to the correct page occurred before proceeding with form filling.

### Dynamic URL Capture
Capture URLs with dynamic parameters (like session IDs or tracking codes) for later reference.

### Multi-Page Forms
Track progress through multi-page forms by recording the URL at each step.

### Error Logging
Store the URL where an error occurred to help with troubleshooting and debugging.

### Success Confirmation
Capture the final URL after form submission to confirm successful completion.

---

## Storing URL Data

The scraped URL is automatically stored in your Excel file in the column that matches the field name.

**Example:**
- **Field Name:** `submissionURL`
- **Excel Column:** `submissionURL`
- **Stored Value:** `https://example.com/success?id=12345`

---

## Using Scraped URLs

You can reference the scraped URL in subsequent fields using variables:

```
{$pageURL$}
```

**Example Use Cases:**
- Compare URLs to verify navigation
- Extract URL parameters using string manipulation
- Log URLs for reporting purposes
- Use URLs in API requests or custom JavaScript

---

## Tips

:::tip Automatic vs Manual URL
Leave the default value empty to automatically capture the current page URL. Only set a default value if you want to override the automatic behavior.
:::

:::info URL Components
If you need specific parts of the URL (like just the hostname or pathname), consider using [variables](/documentation/variable) like `{$location.hostname$}` or `{$location.pathname$}` instead.
:::

:::warning Dynamic URLs
Be aware that some websites use dynamic URLs with session tokens or timestamps. These URLs may change on each visit.
:::

---

## Related Field Types

- [Scraping Data](/documentation/field-types/scraper-data/scraping-data) - Extract data from page elements
- [URL Matching](/documentation/field-types/url-matching) - Match and validate URL patterns
- [URL Open](/documentation/field-types/url-open) - Navigate to specific URLs

---

## Related Variables

- `{$location.href$}` - Current page URL
- `{$location.hostname$}` - Domain name only
- `{$location.pathname$}` - Path portion only
- `{$location.search$}` - Query parameters only

See [Variables Documentation](/documentation/variable) for more details.
