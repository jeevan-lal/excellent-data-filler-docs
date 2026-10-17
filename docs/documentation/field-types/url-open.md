# URL Open {#url-open}

The **URL Open** field type navigates the current browser tab to a target web address.

## Field Configuration {#field-configuration}

| Field Option | Required | Description | Example Values |
|---|---|---|---|
| **Default Value** / **Field Value** | Yes | Target URL to open in the active tab. Supports static URLs, Excel variables, and location variables. | `https://example.com/login`<br>`https://example.com/item/{$productId$}` |

::: info No Extra Configuration Required
The **URL Open** action navigates immediately upon execution. Simply define the destination address in the field's **Default Value** or map it to an **Excel (.xlsx)** column.
:::

---

## Setting the Target URL {#setting-target-url}

### 1. Static URL
Enter a fixed web address directly in the **Default Value** field:

```
https://example.com/dashboard
```

### 2. Dynamic URL from Excel Data
Map the URL or URL parameters to Excel column names using `{$columnName$}`:

```
https://example.com/products/{$productId$}
```

### 3. Using Page Location Variables
Combine destination URLs with built-in location variables from the current page:

| Variable | Description | Example Output |
|---|---|---|
| `{$PAGE_URL$}` | Current full URL | `https://example.com/page?id=123` |
| `{$PAGE_HOSTNAME$}` | Current domain/hostname | `example.com` |
| `{$PAGE_PATHNAME$}` | Current URL path | `/products/item` |
| `{$PAGE_SEARCH$}` | Current URL query parameters | `?id=123` |
| `{$PAGE_HASH$}` | Current URL hash fragment | `#section` |

**Example with Referrer:**
```
https://destination.com/portal?ref={$PAGE_HOSTNAME$}&redirect={$PAGE_PATHNAME$}
```

---

## Important Notes {#important-notes}

- **Active Tab Navigation**: Opens the URL in the **current active tab**, navigating away from the existing page.
- **Workflow Continuity**: Subsequent form fields in the execution queue will run against the newly loaded page.
- **New Tab / Window Navigation**: To open web pages without leaving the current tab, use [Open a new Tab](/documentation/field-types/browser-actions#open-a-new-tab) or [Open a new Window](/documentation/field-types/browser-actions#open-a-new-window).

---

## Related Documentation {#related-documentation}

- <img src="/svg/form.svg" class="doc-icon" /> [Page Location Variables](/documentation/variable#page-location-variable) — Full list of predefined location variables
- <img src="/svg/browser.svg" class="doc-icon" /> [URL Matching](/documentation/field-types/url-matching) — Trigger forms by matching URL patterns
- <img src="/svg/browser.svg" class="doc-icon" /> [Browser Actions](/documentation/field-types/browser-actions) — Tab and window automation controls
- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template](/documentation/site/site-excel-template) — Excel (.xlsx) template structure
