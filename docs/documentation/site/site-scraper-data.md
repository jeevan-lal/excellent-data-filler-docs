---
prev:
  text: "Excel Template"
  link: "/documentation/site/site-excel-template"
next:
  text: "Site Settings"
  link: "/documentation/site/site-settings"
---

# Scraper Data {#scraper-data}

The **Scraper Data** workspace stores and manages datasets extracted from web pages using scraper field types during automated form workflows.

---

## Overview {#overview}

When automating complex web portals, workflows often require extracting live data from web pages (such as order numbers, confirmation IDs, table entries, or verification codes) alongside filling inputs.

Whenever forms or segments execute with scraper field types enabled, the extracted records are automatically captured and organized within the **Scraper Data** tab of the active site:

- **Structured Storage**: Catalogs extracted text, HTML elements, and table cells under structured field names.
- **Excel Export**: Download datasets directly as `.xlsx` spreadsheets for analysis, archiving, or feeding into subsequent automation steps.
- **Session Control**: View live records, refresh in-memory datasets, and purge old data to start fresh.

---

## When Scraper Data Appears {#when-scraper-data-appears}

The Scraper Data interface and records become active when the following prerequisites are met:

1. **Scraper Fields Configured**: The active site has one or more fields assigned to a scraper field type (e.g., text scraper, attribute extractor, or table scraper).
2. **Form Automation Executed**: The target web page has been processed with automation enabled (<kbd>Alt</kbd> + <kbd>Q</kbd> or page-load trigger).
3. **Data Captured**: Elements matching your selectors were located in the DOM and values were retrieved.

> [!NOTE]
> If no scraper field types are configured for the site, or if the form has not been executed yet, the tab will display:
> ```text
> Scraper Data Not Available
> ```
> Learn more about configuring scraper field types in [Supported Field Types](/documentation/form-fields/field-types).

---

## Available Actions {#available-actions}

The Scraper Data toolbar provides export and management actions:

| Action Button | Output / Behavior | Best For |
|---|---|---|
| **Download Scraper Data** | Multi-sheet `.xlsx` workbook | Comprehensive data export containing dedicated sheets for distinct scraped forms and entity groups. |
| **Download Scraper Data Single Sheet** | Consolidated single-sheet `.xlsx` | Quick reviews, flat data tables, or spreadsheets requiring straightforward row-by-row filtering. |
| **Refresh Data** | Re-queries stored memory | Updates the on-screen display if new records were scraped while the tab remained open. |
| **Delete Data** | Clears scraped records | Permanently removes current scraped records from the extension storage for this site. |

---

## How to Generate and Export Scraper Data {#how-to-generate-scraper-data}

Follow this complete step-by-step workflow:

### Step 1: Configure Scraper Fields

1. Open your **Site** and select the target **Form** or **Segment**.
2. Add a new field and select the appropriate scraper field type.
3. Configure the DOM selector (CSS Selector or XPath) matching the target text or table element on the web page.
4. Set any required [Timing Delays](/documentation/form-fields/field-settings#timing-settings) if the target content loads asynchronously via JavaScript.

### Step 2: Run Form Automation

1. Navigate to the target web page.
2. Ensure the extension is enabled and trigger automation using <kbd>Alt</kbd> + <kbd>Q</kbd>.
3. The extension processes form steps, locates the scraper target elements, and extracts their values into memory.

### Step 3: Inspect and Export Scraped Data

1. Open the extension popup or options dashboard.
2. Navigate to your **Site** workspace and select the **Scraper Data** tab.
3. Review the extracted records displayed in the table.
4. Click **Download Scraper Data** or **Download Scraper Data Single Sheet** to export the data into a clean `.xlsx` file.

---

## Troubleshooting {#troubleshooting}

### Common Extraction Issues

| Problem | Likely Cause | Solution |
|---|---|---|
| **"Scraper Data Not Available" message** | No scraper fields configured, or automation hasn't run | Ensure at least one scraper field exists in the active form/segment and execute the workflow. |
| **Empty or null values captured** | Target element rendered after extraction attempt | Add a delay in **Delay Time Before Running This Field** (e.g., `1000ms` or `2000ms`) to allow dynamic content to load. |
| **Incorrect element scraped** | Non-unique CSS selector or dynamic DOM IDs | Inspect the element using <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> and use a stable class or XPath expression. |
| **Download does not start** | Browser download permission prompt blocked | Check browser permissions for extension downloads or check browser download shelf. |

---

## Best Practices {#best-practices}

- **Use Stable Selectors**: Avoid auto-generated selectors with dynamic numerical IDs; use semantic class names, data attributes, or precise XPath queries.
- **Account for Dynamic Rendering**: Use appropriate before/after delays for AJAX or Single Page Application (SPA) elements.
- **Clear Old Data Between Runs**: Click **Delete Data** before initiating a new batch if you do not want previous session records mixed with fresh results.
- **Validate Selectors with Inspect Element**: Use <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> on the target page to confirm your selector matches the exact node containing text.

---

## Related Documentation {#related-documentation}

- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template](/documentation/site/site-excel-template)
- <img src="/svg/form.svg" class="doc-icon" /> [Site Management](/documentation/site/site)
- <img src="/svg/settings.svg" class="doc-icon" /> [Site Settings](/documentation/site/site-settings)
- <img src="/svg/database.svg" class="doc-icon" /> [Field Types Guide](/documentation/form-fields/field-types)
- <img src="/svg/beaker.svg" class="doc-icon" /> [Execution Logs](/documentation/logs)
- <img src="/svg/template.svg" class="doc-icon" /> [Segments Routine Automation](/documentation/segment)