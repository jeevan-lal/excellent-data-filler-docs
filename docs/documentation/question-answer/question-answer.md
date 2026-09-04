---
prev:
  text: "Browser Bus"
  link: "/documentation/browser-bus"
---

# Frequently Asked Questions (FAQ) {#faq}

Find answers to common questions about installing, configuring, automating, and troubleshooting Excellent Data Filler V4.

---

## General Overview {#general-overview}

### What is Excellent Data Filler?

**Excellent Data Filler** is an enterprise-grade browser extension designed for automated web form filling, data scraping, and workflow automation across modern web browsers. It eliminates repetitive manual data entry by extracting records from spreadsheets or APIs and accurately populating complex web forms with granular timing delays, custom validations, and conditional logic.

### Which browsers are supported, and how do I install it?

Excellent Data Filler is available on both Chrome Web Store and Firefox Add-ons, and works across all major Chromium and Gecko browsers:

| Browser | Installation Source | Direct Link |
|---|---|---|
| **Google Chrome** | Chrome Web Store | [Install for Chrome](https://chrome.google.com/webstore/detail/excellent-data-filler-cth/abafaagbfhobgjkcepckbnadafflkdea) |
| **Mozilla Firefox** | Firefox Add-ons | [Install for Firefox](https://addons.mozilla.org/en-US/firefox/addon/excellent-data-filler/) |
| **Microsoft Edge** | Chrome Web Store | [Install for Edge](https://chrome.google.com/webstore/detail/excellent-data-filler-cth/abafaagbfhobgjkcepckbnadafflkdea) |
| **Brave / Opera / Vivaldi** | Chrome Web Store | [Install for Chromium](https://chrome.google.com/webstore/detail/excellent-data-filler-cth/abafaagbfhobgjkcepckbnadafflkdea) |

**Installation Steps:**
1. Open the installation link for your browser above.
2. Click **Add to Chrome** (or **Add to Firefox**).
3. Confirm permissions in the browser prompt.
4. Pin the extension icon to your browser toolbar for quick access.

### What makes Excellent Data Filler different from basic autofill tools?

Unlike simple password or profile autofill tools, Excellent Data Filler provides:
- **Full Spreadsheet Integration**: Feed dynamic rows from local `.xlsx` files or real-time Google Sheets.
- **Complex UI Control**: Supports standard inputs, textareas, native select dropdowns, Material UI search-and-select menus, radio groups, checkboxes, custom click triggers, and date pickers.
- **Multi-Step Workflows**: Automate multi-page wizard forms and re-usable on-demand routines with [Segments](/documentation/segment).
- **Embedded Web Scraping**: Extract confirmation numbers, generated IDs, and table data back into `.xlsx` reports with [Scraper Data](/documentation/site/site-scraper-data).
- **Custom Scripting**: Run isolated JavaScript code directly within the page context.

---

## Getting Started & Workflow {#getting-started}

### How do I automate my first form?

Follow these core steps:

1. **Register the Site**:
   - Navigate to your target web form.
   - Press <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> or right-click the page and choose **Insert Site**.
2. **Add Fields**:
   - Press <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> on any input element to open the **DOM Element Inspector**.
   - Copy or assign the CSS Selector / XPath to your form configuration.
3. **Attach Data**:
   - Download the pre-built template via **Download Excel Template**.
   - Populate your records in `.xlsx` format and upload it back, or connect a Google Sheet.
4. **Run Automation**:
   - Trigger execution with <kbd>Alt</kbd> + <kbd>Q</kbd> or simply refresh the page when the extension is ON.

### What is the difference between a Site, a Form, and a Segment?

- **Site**: The top-level domain or project container holding forms, data sources, segments, and site-wide settings.
- **Site Form**: A URL-specific automation routine that runs automatically when a matching web page loads.
- **Segment**: An on-demand, modular routine of fields that can be triggered programmatically, across pages, or executed repeatedly in loops.

---

## Data Sources & Spreadsheets {#data-sources}

### Which spreadsheet formats are supported for upload?

> [!IMPORTANT]
> **Strict `.xlsx` Support**: Excellent Data Filler exclusively supports Microsoft Excel (`.xlsx`) files for local spreadsheet data uploads. Other formats such as `.csv` or `.xls` are not supported.

You can also connect cloud spreadsheets directly using **Google Sheets (Beta)** via OAuth2 or a Google Cloud Service Account JSON key.

### How does Google Sheets (Beta) integration work?

Google Sheets integration allows real-time cloud data access without manual file uploads:
1. In your Site workspace, open the **Upload Excel** tab and choose **Google Sheet (Beta)**.
2. Authenticate using either:
   - **OAuth2 (Login Required)**: Sign in with your Google account.
   - **Client Service Account (No Login Required)**: Upload a GCP Service Account JSON key file and share your sheet with the service account email.
3. Paste the Spreadsheet URL and Sheet Tab Name.
4. Click **Update Sheet With Site Data** to automatically synchronize field headers with sheet columns.
5. If you edit cell values in Google Sheets, click **Clear Sheet Cache** to fetch fresh records.

### How can I distribute data rows across multiple browsers?

Use the **Browser ID** feature in Google Sheets:
1. Toggle **Fetch Sheet Row Data Using Browser Id** in the Google Sheet configuration.
2. Enter your assigned browser identifier (e.g., `browser-1`).
3. Add a column named `<code v-pre>{BROWSER-ID}</code>` to your Google Sheet.
4. Assign corresponding browser IDs to your data rows. Each browser instance will only process rows matching its assigned ID.

---

## Keyboard Shortcuts & Controls {#shortcuts-controls}

### What are the default keyboard shortcuts?

| Action | Shortcut | Description |
|---|---|---|
| **Start / Pause Automation** | <kbd>Alt</kbd> + <kbd>Q</kbd> | Starts or pauses current form automation |
| **Inspect Elements** | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> | Opens DOM element selector inspector |
| **Insert Site** | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | Registers a new site from the active page |
| **Insert Form** | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> | Adds a new form to the active site |
| **Copy Field** | <kbd>Alt</kbd> + <kbd>C</kbd> | Copies selected field configuration |
| **Copy Form Response** | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> | Copies element text, selector, XPath, and URL |
| **Copy Element Selector** | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> | Copies CSS selector of selected element |
| **Copy Element XPath** | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> | Copies XPath of selected element |
| **Copy Element Text** | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd> | Copies text content of selected element |
| **Copy Element HTML** | <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> | Copies HTML markup of selected element |

> [!NOTE]
> Shortcuts can be customized in your browser at `chrome://extensions/shortcuts`. Note that <kbd>Alt</kbd> + <kbd>F</kbd> does not exist in this extension.

---

## Troubleshooting & Diagnostics {#troubleshooting}

### Why is data not filling into my form?

If automation does not trigger or skip inputs, check the following:

1. **Extension Status**: Verify that the extension is toggled **ON** in the popup toolbar.
2. **URL Matching**: Check if the target page URL matches the Form URL rule (ensure regex matches query parameters if the URL is dynamic).
3. **Element Selectors**: Inspect the input using <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>. Dynamic web frameworks often randomize IDs (e.g., `id="input-8472"`), requiring you to use stable attributes like `name="email"` or `input[type="email"]`.
4. **Timing Delays**: If elements render asynchronously, add a delay in **Delay Time Before Running This Field** (e.g., `500ms` or `1500ms`).
5. **Execution Logs**: Open the extension [Logs](/documentation/logs) dashboard to see exact error messages, missing column notices, or unlocated selectors.

### What should I do if a web page disables right-clicking?

Some websites block context menus via JavaScript. To enable the context menu:
1. Open the extension **Settings** tab.
2. Toggle ON **Allow Right Click?**.
3. Alternatively, use keyboard shortcuts directly:
   - <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> to insert the site.
   - <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd> to inspect elements.

### How do I scrape data from a web page?

1. Add a field to your Form or Segment with a scraper field type (e.g., text scraper, table scraper).
2. Set the CSS selector or XPath pointing to the data you want to harvest.
3. Run the automation workflow.
4. Navigate to the **Scraper Data** tab under your Site workspace and download your results as a multi-sheet or single-sheet `.xlsx` workbook.

---

## Community & Support Channels {#community-support}

Need assistance, want to suggest a feature, or looking for video walkthroughs?

- <img src="/svg/book.svg" class="doc-icon" /> [Documentation Portal](/documentation/) - Complete guides, field types, and architecture walkthroughs
- <img src="/svg/youtube.svg" class="doc-icon" /> [YouTube Channel (C Tech Hindi)](https://www.youtube.com/@ctechhindi) - Video tutorials and walkthrough guides
- <img src="/svg/chat.svg" class="doc-icon" /> [Google Group Community](https://groups.google.com/g/excellent-data-filler) - User discussions, tips, and troubleshooting
- <img src="/svg/whatsapp.svg" class="doc-icon" /> [WhatsApp Group](https://chat.whatsapp.com/F2AdHoZRvr8HiAbvWqKlVS) - Community chat and real-time support
- <img src="/svg/bug.svg" class="doc-icon" /> [GitHub Issues](https://github.com/jeevan-lal/excellent-data-filler-docs/issues) - Bug reports and technical issue tracking
