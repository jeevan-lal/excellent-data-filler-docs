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

## Insert Site {#insert-site}

There are two primary methods to register a new site in Excellent Data Filler:

### Method 1: Context Menu & Keyboard Shortcut (Recommended)

The quickest way to register a site while browsing:

1. **Navigate to the Target Page**: Open the target website in your browser.
2. **Trigger Site Registration**:
   - Press the keyboard shortcut <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>, or
   - Right-click anywhere on the page and select **Insert Site** from the context menu.
3. **Automatic Configuration**: The extension automatically captures the current page URL, creates the root site record, and registers the initial form page schema.
4. **Configure Settings**: Open the extension popup to customize field mappings and timing delays.

> **Tip:** If a web page blocks right-clicking, ensure **Allow Right Click?** is turned ON in [Extension Settings](/documentation/settings#advanced-options), or use the keyboard shortcut <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>.

### Method 2: Manual Site Creation

If you prefer to create a site manually before navigating to the target website:

1. Open the extension popup and navigate to the **Sites** dashboard.
2. Click the **Insert a new Site** button (`+`).
3. Fill in the site details:
   - **Site Title**: A descriptive name identifying the project (e.g., `Customer Registration Portal`).
   - **Site Description**: Optional notes about the site's purpose and forms.
   - **Active Status**: Enable or disable execution for this site.
4. Click **Save** to create the site container.

<img src="/image/insert-site-manually-01.png" alt="Manual Site Creation Interface" style="max-width: 480px; border-radius: 8px; margin: 16px 0;" />

| Field | Required | Description |
|---|---|---|
| **Site Title** | Yes | Descriptive project name (up to 100 characters). |
| **Site Description** | No | Optional notes explaining the automation goal. |
| **Active Status** | Yes | Toggle switch to activate or pause the site. |

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

<img src="/svg/settings.svg" class="doc-icon" /> [Site Settings](/documentation/site/site-settings) — Configure execution toggles, site environment variables, and exports  
<img src="/svg/form.svg" class="doc-icon" /> [Insert Site Form](/documentation/form/form#insert-site-form) — Add form pages and URL matching rules  
<img src="/svg/system.svg" class="doc-icon" /> [Segments](/documentation/segment) — Build on-demand, reusable field routines  
<img src="/svg/code.svg" class="doc-icon" /> [Form Fields Configuration](/documentation/form-fields/field#insert-field) — Set up individual form field selectors  
<img src="/svg/excel.svg" class="doc-icon" /> [Excel Template Management](/documentation/site/site-excel-template) — Download and upload `.xlsx` spreadsheets  

