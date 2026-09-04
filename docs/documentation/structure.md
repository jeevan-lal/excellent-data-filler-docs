---
prev:
  text: "Introduction"
  link: "/documentation/"
next:
  text: "Site"
  link: "/documentation/site/site"
---

<script setup>
import StructureAnimation from '../components/StructureAnimation.vue'
</script>

# Structure

Understanding the architecture of Excellent Data Filler is essential for building robust automation workflows. The extension follows a modular, hierarchical structure that allows you to manage everything from simple single-page forms to complex multi-step enterprise workflows.

---

## Overview {#overview}

Excellent Data Filler organizes your automation workspace into a clear hierarchical tree:

<StructureAnimation />

---

## Core Components {#core-components}

### Site {#site}

A **Site** is the top-level container that represents a target website or web application where you want to automate tasks.

**Key Characteristics:**

- **Container for Forms & Segments**: Groups multiple related forms and on-demand workflows under a common domain.
- **Site-Wide Settings**: Configure 10 granular execution toggles, delays, and behavior rules that apply to all forms within the site.
- **Environment Variables**: Define site-scoped variables (`{$variable_name$}`) that dynamically inject values into field selectors or URLs.
- **Data Source Management**: Manages uploaded `.xlsx` spreadsheet rows and Google Sheets synchronization.

<img src="/image/site-01.png" alt="Site Management Interface" style="max-width: 100%; border-radius: 8px; margin: 16px 0;" />

For complete site setup instructions, see the [Site Overview](/documentation/site/site) and [Site Settings](/documentation/site/site-settings) guides.

---

### Site Form (Pages) {#site-form}

A **Site Form** represents a specific web page or form within a site. Each form defines URL matching rules and initiates automated data filling upon page load.

**Key Characteristics:**

- **URL-Based Activation**: Target pages using **Full URL**, **URL pathname**, **URL hostname**, or **RegEx** matching.
- **Automatic Trigger**: Executes automatically on page load or refresh when the page URL matches and the extension is ON.
- **Execution Timing**: Configurable delay pauses before starting form execution and after completing form fields.
- **Multi-Form Workflows**: Chain multiple forms under one site using the site ID to automate multi-page wizards.

<img src="/image/form-01.png" alt="Form Configuration Interface" style="max-width: 100%; border-radius: 8px; margin: 16px 0;" />

For configuration details, see the [Site Form Guide](/documentation/form/form).

---

### Segments {#segments}

A **Segment** is an independent, reusable collection of fields. Unlike Site Forms, segments **do not trigger automatically on page load**.

**Key Characteristics:**

- **On-Demand Execution**: Triggered explicitly by unique name through [Field Response Actions](/documentation/form-fields/field-response-action), [Loop](/documentation/field-types/loop) iterations, or the floating [Status Bar](/documentation/settings#status-bar) (`{MARK AS SAVED}`).
- **Cross-Page Reusability**: Call the same segment from multiple forms or execute segments across modal popups.
- **Tab Targeting ("View Field Element in Tab")**: Configure target page URLs to inspect and test field selectors directly in open tabs.

<img src="/image/segment-list.png" alt="Segment Management Interface" style="max-width: 350px; border-radius: 8px; margin: 16px 0;" />

For step-by-step instructions, see the [Segment Documentation](/documentation/segment).

---

### Site Form Fields {#site-form-fields}

**Form Fields** are the individual input and action elements targeted within a Form Page or Segment.

**Key Characteristics:**

- **Flexible Locators**: Locate elements using CSS Selectors, element IDs, XPath queries, or native JS Paths (`$.document...`).
- **50+ Specialized Field Handlers**: Support for Text, Select, Checkboxes, File Uploads, Date Pickers, Loops, JavaScript code, and Scraper extraction.
- **Data Source Priority**: Seamlessly populates from Excel (`.xlsx`) columns, with automatic fallback to configured default values.
- **Response Logic**: Attach success, error, or skip response actions to handle dynamic page feedback.

<img src="/image/field-01.png" alt="Field Configuration Interface" style="max-width: 100%; border-radius: 8px; margin: 16px 0;" />

For complete field settings, see [Form Field Setup](/documentation/form-fields/field) and the [Field Types Catalog](/documentation/form-fields/field-types).

---

### Excel Template & Data Management {#excel-template-management}

Spreadsheets provide structured batch data feeds for multi-entry automation.

:::tip Spreadsheet Compatibility
Exclusively **`.xlsx`** files are supported for spreadsheet uploads. You can also connect directly to **Google Sheets** via OAuth2 or Service Account credentials.
:::

#### Download Excel Template {#download-excel-template}

Once you have configured fields in your form, the extension can generate a tailored `.xlsx` template containing column headers corresponding exactly to your field names:

<img src="/image/download-excel-template-01.png" alt="Download Excel Template Interface" style="max-width: 100%; border-radius: 8px; margin: 16px 0;" />

#### Upload Excel Template {#upload-excel-template}

Upload your populated `.xlsx` file into the site configuration. The extension processes rows sequentially, advancing row by row upon each successful form submission:

<img src="/image/upload-excel-template.png" alt="Upload Excel Template Interface" style="max-width: 100%; border-radius: 8px; margin: 16px 0;" />

For detailed spreadsheet guidelines, see [Excel Template Management](/documentation/site/site-excel-template).

---

## Automation Workflow Lifecycle {#automation-workflow}

A complete automation project typically progresses through this lifecycle:

1. **Site Registration**: Create a top-level site record for the target web application.
2. **Form / Segment Setup**: Define target page URLs, matching patterns, and timing delays.
3. **Field Mapping**: Inspect DOM elements (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>) and configure selectors.
4. **Template Preparation**: Download the matching `.xlsx` template and populate batch data rows.
5. **Automation Execution**: Navigate to the form and run automation (<kbd>Alt</kbd> + <kbd>Q</kbd>).
6. **Response & Status Tracking**: Monitor execution row progress via the Status Bar and review diagnostics in the [Logs](/documentation/logs).

---

## Next Steps

<img src="/svg/globe.svg" class="doc-icon" /> [How to insert a site](/documentation/site/site#insert-site) — Register your first site configuration  
<img src="/svg/form.svg" class="doc-icon" /> [How to insert a site form](/documentation/form/form#insert-site-form) — Add form pages and URL matching rules  
<img src="/svg/system.svg" class="doc-icon" /> [How to use segments](/documentation/segment) — Build on-demand, reusable field routines  
<img src="/svg/code.svg" class="doc-icon" /> [How to configure form fields](/documentation/form-fields/field#insert-field) — Map selectors, types, and values  
<img src="/svg/excel.svg" class="doc-icon" /> [Excel Template Integration](/documentation/site/site-excel-template) — Master batch data handling  

---

## Troubleshooting & Verification

- **Form Not Triggering**: Verify the URL Match Type and ensure the extension toggle is **ON** (<kbd>Alt</kbd> + <kbd>Q</kbd>).
- **Element Not Found**: Use the [Inspect Elements](/documentation/extension/context-menu#inspect-elements-tool) tool (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>) or refer to [Locate Element](/documentation/locate-element).
- **Template Errors**: Ensure you are uploading a valid `.xlsx` file matching your field names.
- **Execution Diagnostics**: Open the built-in [Logs Viewer](/documentation/logs) to inspect real-time action steps and errors.

