# Site Form {#site-form}

A **Site Form** defines a specific page or workflow step within your website automation. Each form contains page URL matching rules, execution timing delays, and individual form field definitions.

<img src="/image/form-01.png" alt="Form Management Interface" style="max-width: 100%; border-radius: 8px; margin: 16px 0;" />

---

## Form Options {#form-options}

Essential form configuration options for automated form filling:

| Form Option | Required | Description | Example Values |
|---|---|---|---|
| **Page URL** | Yes | Target page URL for form execution | `https://example.com/contact` |
| [**URL Match Type**](#form-url-match-types) | Yes | Method used to match the target page URL | **Full URL**, **Pathname**, **Hostname**, **RegEx** |
| **Description** | No | Optional note for form identification | `Contact Form`, `Registration Page` |
| **Active/Inactive** | Yes | Enable or disable form processing | **Active**, **Inactive** |
| [**Delay Time Before Running This Form**](#form-timing-configuration) | No | Wait time before form execution begins | `0`, `500`, `1000` (milliseconds) |
| [**Delay Time After Running This Form**](#form-timing-configuration) | No | Wait time after form execution completes | `0`, `500`, `1000` (milliseconds) |

---

## Insert Site Form {#insert-site-form}

To create and configure a new form within a registered site:

### Step-by-Step Process

1. Register or select a site from the [Site Management Dashboard](/documentation/site/site#insert-site).
2. Click the **Edit Site** button (pencil icon) to open site settings.
3. Open the **Site Form Pages** tab.
4. Click the **Insert Form** button (located to the left of the delete button).
5. Fill in the **Page URL** and choose the appropriate [**URL Match Type**](#form-url-match-types).
6. Click **Save** to confirm.

<img src="/image/insert-site-form.gif" width="650" height="650" alt="Insert Site Manually" style="max-width: 100%; border-radius: 8px; margin: 16px 0;" />

> **Shortcut:** You can also insert a form directly from the active tab by pressing <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> or right-clicking on the page and choosing **Insert Form**.

### Form Management Controls

| Control | Description | Purpose |
|---|---|---|
| **Page URL** | Target URL address | Defines where the extension executes |
| **Match URL Types** | Matching method | Target specific URLs or broad patterns |
| **Description** | Label / Notes | Distinguish between multiple forms |
| **Active / Inactive** | Status toggle | Temporarily pause a form without deleting it |
| **Move Up / Down** | Drag or arrow buttons | Change the sequential execution order |
| **Form Fields** | Field count button | Open and manage field configurations |
| **Edit Form** | Settings icon | Update page URL or match type |
| **Duplicate Form** | Row action | Clone form settings and all fields |
| **Copy Form** | Row action | Copy form schema to clipboard |
| **Paste Form** | Row action | Import form schema from clipboard |
| **Delete Form** | Trash icon | Permanently remove the form |

---

## Form URL Match Types {#form-url-match-types}

URL matching rules determine when the extension should activate on the browser tab:

| Match Type | Description | Best Use Case | Example |
|---|---|---|---|
| **Match with Full URL** | Exact match including query strings | Strict single-page targeting | `https://example.com/contact?ref=web` |
| **Match with URL pathname** | Matches the path only, ignoring domain and queries | Same path across multiple domains/environments | `/contact`, `/register` |
| **Match with URL hostname** | Matches the root domain only | Execute across all pages on a website | `example.com` |
| **Match with RegEx** | Regular expression pattern matching | Dynamic URLs with variable IDs or tokens | `.*\/user\/\d+\/edit` |

### RegEx Matching Examples {#regex-matching-examples}

The extension provides helper syntax tokens alongside standard JavaScript regular expressions:

| Pattern | Description | Matches |
|---|---|---|
| `(:any)` | Matches any sequence of characters | `abc`, `123`, `xyz` |
| `(:any(:end))` | Matches any sequence of characters up to the end of the URL *(do not place in the middle)* | `abc`, `123xyz` |

**URL Matching Comparison:**

| Site Form URL with RegEx | Tested Page URL | Match Status |
|---|---|:---:|
| `http://demo.in/new/(:any)/edit` | `http://demo.in/new/jK33k3ui/edit` | Matched |
| `http://demo.in/new/(:any(:end))` | `http://demo.in/new/jK33k3ui` | Matched |

<img src="/image/form-url-with-regex.png" width="500" height="500" alt="RegEx URL Matching" style="max-width: 100%; border-radius: 8px; margin: 16px 0;" />

:::tip Testing RegEx Patterns
You can test your regular expressions using the extension's built-in [RegEx Tester](/documentation/regex).
:::

---

## Form Timing Configuration {#form-timing-configuration}

Timing settings control execution pauses to accommodate slow network responses, animations, or dynamic page rendering:

| Setting | Description | Default | Impact |
|---|---|---|---|
| **Delay Time Before Running This Form** | Milliseconds to wait after page load before starting automation | `0 ms` | Allows client-side single-page apps (SPAs) to finish rendering |
| **Delay Time After Running This Form** | Milliseconds to wait after all fields complete | `0 ms` | Ensures AJAX submissions or redirects complete smoothly |

:::v-pre
### Randomized Delays

To prevent bot-detection algorithms from spotting consistent automation intervals, you can specify randomized time ranges using variables:

```text
{{random.integer[1000][2500]}}
```

This instructs the extension to generate a fresh delay between 1000ms and 2500ms on each run.
:::

---

## Insert Multiple Forms {#insert-multiple-forms}

For complex multi-page workflows (such as step-by-step registration wizards or checkout funnels), you can register multiple forms under a single site configuration.

### Copy Site ID

1. Open the extension popup and locate the parent site in your site list.
2. Click the **Copy Site ID** icon next to the site title.
3. The unique site ID is copied to your clipboard.

<img src="/image/copy_site_id.png" width="350" height="350" alt="Copy Site ID" style="max-width: 350px; border-radius: 8px; margin: 16px 0;" />

### Adding Forms via Context Menu

1. Navigate to the next page of your multi-step form in your browser.
2. Right-click on the extension toolbar icon or anywhere on the page.
3. Select **Insert Form** (or press <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>).
4. When prompted, paste the copied **Site ID** and confirm.
5. The new page is instantly linked to the existing site configuration.

<img src="/image/insert-site-form-01.png" width="350" height="350" alt="Insert Additional Form" style="max-width: 350px; border-radius: 8px; margin: 16px 0;" />

---

## Next Steps: Configuring Form Fields {#insert-form-fields}

Once your form page is registered, configure the individual input fields to automate:

1. Click on the form's **Fields** button in the extension.
2. Add input fields matching your elements and `.xlsx` spreadsheet headers.
3. Define selectors, field types, and default fallback values.

For complete field setup instructions, see the [Form Field Guide](/documentation/form-fields/field) and the [Field Types Catalog](/documentation/form-fields/field-types).

