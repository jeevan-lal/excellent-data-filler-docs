---
prev:
  text: "Structure"
  link: "/documentation/structure"
next:
  text: "Site Settings"
  link: "/documentation/site/site-settings"
---

# Site {#site}

A **Site** is the top-level container in Excellent Data Filler representing a web application or domain where you want to automate workflows. It acts as the central hub grouping together all related **Site Forms**, **Segments**, **Excel Data Templates**, **Scraper Results**, and **Site Settings**.

---

## Overview {#overview}

Sites serve as the foundational root of your automation projects:

- **Project Organization**: Keeps forms, fields, and routines grouped under a dedicated domain profile.
- **Centralized Control**: Manage site-wide environment variables, column mappings, and backup configurations in one location.
- **Multi-Page Coordination**: Link multiple sequential forms and segments together using the unique Site ID.

---

## Site Management Dashboard {#site-management-dashboard}

The site management interface provides a dashboard of all registered sites:

<img src="/image/site-01.png" alt="Site Management Interface" style="max-width: 100%; border-radius: 8px; margin: 16px 0;" />

Each site card displays its title, description, active status toggle, and quick-action buttons to access forms, settings, and templates.

---

## Insert Site (Auto vs. Manual Mode) {#insert-site}

Excellent Data Filler provides two primary workflows for registering and configuring websites: **Auto Mode** (instant automated DOM scanning) and **Manual Mode** (granular step-by-step custom creation).

### Overview Comparison

| Feature | Auto Mode (Right-Click Context Menu) | Manual Mode (Step-by-Step Custom Setup) |
|---|---|---|
| **Primary Action** | Right-click form &rarr; **Insert Site** (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>) | Dashboard &rarr; **Insert a new Site** (`+`) |
| **Site Container** | Created automatically using current page URL | Created manually with custom title and description |
| **Form Page Setup** | Automatically generated with matched page URL | Configured manually with custom URL pattern & delays |
| **Field Detection** | Automatically scans DOM tree for all form inputs | Configured manually field-by-field with chosen field types |
| **Element Inspection** | Automatic selector generation | Uses **Inspect Elements** and copy context helpers |
| **Best For** | Standard web forms, rapid bulk onboarding, full-form filling | Complex single-page apps, selective field filling, custom field types |

---

### Method 1: Auto Mode (Context Menu & Keyboard Shortcut) {#insert-site-auto}

Auto Mode is the quickest way to register a site. It extracts page metadata and scans all form inputs across the page automatically in seconds.

#### Step-by-Step Instructions

1. **Navigate to the Target Web Page**: Open the target website containing the form in your browser.
2. **Trigger Site Registration**:
   - Right-click anywhere inside the form area on the page and select **Insert Site**, or
   - Press the keyboard shortcut: <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>.
3. **Automatic Scanning & Configuration**:
   - The extension automatically creates the root **Site** container.
   - A **Site Form** is generated and mapped to the target page URL.
   - The extension traverses the DOM tree to locate all inputs, textareas, dropdowns, checkboxes, and radio buttons.
   - Selectors, field types, names, and initial default values are automatically configured and saved into the extension.
4. **Review Configuration**: Open the extension dashboard to review the generated fields, adjust default values, or map fields to Excel (`.xlsx`) columns.

::: tip Right-Click Protected Pages
If a web page blocks right-clicking, ensure **Allow Right Click?** is turned ON in <img src="/svg/settings.svg" class="doc-icon" width="16" height="16" alt="Settings" /> [Extension Settings](/documentation/settings#advanced-options), or use the keyboard shortcut <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>.
:::

---

### Method 2: Manual Mode (Step-by-Step Custom Setup) {#insert-site-manually}

Manual Mode provides granular control over site containers, URL patterns, execution delays, and custom field types.

#### Step 1: Create the Site Container

1. Open the extension popup and navigate to the **Sites** dashboard.
2. Click the **Insert a new Site** button (`+`).
3. Fill in the site details:
   - **Site Title**: A descriptive name identifying the project (e.g., `Customer Registration Portal`).
   - **Site Description**: Optional notes explaining the automation goal.
   - **Active Status**: Enable or disable execution for this site.
4. Click **Save** to create the site container.

<img src="/image/insert-site-manually-01.png" alt="Manual Site Creation Interface" style="max-width: 480px; border-radius: 8px; margin: 16px 0;" />

| Field | Required | Description |
|---|---|---|
| **Site Title** | Yes | Descriptive project name (up to 100 characters). |
| **Site Description** | No | Optional notes explaining the automation goal. |
| **Active Status** | Yes | Toggle switch to activate or pause the site. |

#### Step 2: Add a Site Form Page

1. Inside your newly created site, open the **Site Form Pages** tab.
2. Click **Insert Form** (or press <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> while on the target page).
3. Specify the form parameters:
   - **Page URL**: Enter the target form URL (e.g., `https://example.com/apply`).
   - **URL Match Type**: Choose **Full URL**, **Pathname**, **Hostname**, or **RegEx**.
   - **Delays**: Configure **Delay Before Running** (e.g., `500 ms`) to allow dynamic components to render.
4. Click **Save** to create the form.

#### Step 3: Add Individual Form Fields

1. Open the form's **Form Fields** tab and click **Insert Field** (`+`).
2. Select the specific **Field Type** required for that input:
   - Standard: `Text`, `Select`, `Radio`, `Checkbox`, `Textarea`
   - Advanced: `Date Picker`, `Upload File`, `Button`, `JavaScript Code`, `CKEditor`, `Send Request`
3. Enter the **Target Element Selector** (CSS selector or XPath).
4. Assign the field value, dynamic variable, or Excel column header.
5. Save the field and repeat for any remaining inputs you wish to automate.

---

### Context Menu Helpers for Manual Setup {#context-menu-helpers}

While configuring fields in Manual Mode, you do not need to inspect page source code manually. Excellent Data Filler provides integrated context menu helpers directly on the target web page (<img src="/svg/browser.svg" class="doc-icon" width="16" height="16" alt="Context Menu" /> [Context Menu Guide](/documentation/extension/context-menu)):

#### Interactive Element Inspection

- **Inspect Elements** (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>):
  - Right-click any element on the page and select **Inspect Elements**.
  - Opens the interactive element inspection modal to test selectors, inspect element attributes, examine bounding boxes, and confirm selector uniqueness in real time.

#### Selector & Path Copy Helpers

Right-click any target form input to copy its exact identifier directly to your clipboard:

- **Copy Element Selector Address** (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>):
  - Copies the optimized CSS selector for the selected element.
  - Paste directly into the field's **Target Element Selector** input.
- **Copy Element XPath Selector Address** (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>):
  - Copies the XPath expression of the right-clicked element.
  - Recommended for elements with dynamic IDs or deeply nested structures.

#### Value & Text Helpers

- **Copy text of selected element** (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>T</kbd>):
  - Copies the visible text content of the element (ideal for string matching rules or assertions).
- **Copy html of selected element** (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd>):
  - Copies the outer HTML markup of the selected element.

#### Dropdown Select Helpers

When dealing with `<select>` dropdowns:

- **Copy name of selected option** (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd>):
  - Copies the visible display text of a dropdown option.
- **Copy value of selected option** (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>):
  - Copies the underlying `value` attribute of a dropdown option.
- **Download select box options**:
  - Downloads all available options within the dropdown for reference or spreadsheet mapping.

#### Field Reusability & Responses

- **Copy Field** (<kbd>Alt</kbd> + <kbd>C</kbd>):
  - Copies an entire field configuration to duplicate or reuse across multiple forms.
- **Copy Form Response** (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>):
  - Captures element text, selector, XPath, and URL to quickly construct success or error response rules.

::: tip Workflow Recommendation
Use **Auto Mode** initially to capture all basic inputs on the page, then switch to **Manual Mode** techniques (using **Inspect Elements** and copy context helpers) to fine-tune complex selectors, add conditional delays, or configure custom field types like `Date Picker` and `Upload File`.
:::

---

## Site Management Controls {#site-controls}

Each site entry in the dashboard provides management actions:

### Site Title & Description

- **Site Title**: Identifies the project across extension views and export files.
- **Site Description**: Provides context for team members or future reference.

### Active / Inactive Toggle

- **Status Toggle**: Quickly enable or pause automation for the entire site without deleting any forms, fields, or templates.

### Edit Site

- Opens the site workspace, containing tabs for:
  - **Site Pages (Forms)**: Manage target URLs and page-level automation.
  - **Segments**: Build on-demand, reusable field routines.
  - **Excel Template**: Download/upload `.xlsx` batch data and sync Google Sheets.
  - **Site Settings**: Toggle execution flags, define site environment variables, and export backup files.
  - **Scraper Data**: Inspect and export extracted page data.

### Duplicate Site

- Creates an instant clone of the site, including all configured forms, segments, fields, and timing rules. Useful for staging vs. production environments.

### Copy Site ID

- Copies the unique internal alphanumeric ID for this site to your clipboard.
- **Use Case**: When browsing to subsequent pages of a multi-step form, press <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> (or select **Insert Form** from the context menu) and paste the Site ID to link the new page to this site.

### Delete Site

- Permanently removes the site container and all associated forms, segments, and field configurations.
- **Recommendation**: Export a site backup via [Site Settings](/documentation/site/site-settings#export-site-data) before performing permanent deletions.

---

## Troubleshooting {#troubleshooting}

### Site Not Created from Context Menu

- **Extension Disabled**: Verify that the extension is toggled **ON** in the browser toolbar.
- **Restricted Pages**: Browser extensions cannot execute on internal pages (such as `chrome://` or `edge://`) or web store listings.
- **Right-Click Blocked**: If the page prevents context menus via JavaScript, use the shortcut <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> or enable **Allow Right Click?** in [Settings](/documentation/settings#advanced-options).
- **Diagnostics**: Check the built-in [Logs](/documentation/logs) dashboard for execution details.

---

## Next Steps

- <img src="/svg/settings.svg" class="doc-icon" /> [Site Settings](/documentation/site/site-settings) — Configure execution toggles, site environment variables, and exports  
- <img src="/svg/form.svg" class="doc-icon" /> [Insert Site Form](/documentation/form/form#insert-site-form) — Add form pages and URL matching rules  
- <img src="/svg/system.svg" class="doc-icon" /> [Segments](/documentation/segment) — Build on-demand, reusable field routines  
- <img src="/svg/code.svg" class="doc-icon" /> [Form Fields Configuration](/documentation/form-fields/field#insert-field) — Set up individual form field selectors  
- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template Management](/documentation/site/site-excel-template) — Download and upload `.xlsx` spreadsheets  

