---
prev:
  text: "Home"
  link: "/"
next:
  text: "Icon"
  link: "/documentation/icon"
---

# Introduction

**Excellent Data Filler** is a modern, privacy-focused browser extension designed to automate repetitive data entry, bulk form submissions, and web data extraction with spreadsheet integration.

Whether you need to fill hundreds of survey responses, populate CRM fields from an Excel sheet, or automate multi-step web workflows, Excellent Data Filler provides an intelligent, flexible, and robust automation engine directly within your browser.

---

## Key Features {#key-features}

<style>
.key-features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0 2.5rem 0;
}

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 14px;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.feature-card:hover {
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-2);
  background-color: var(--vp-c-bg-elv);
}

.feature-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.feature-card:hover .feature-icon-wrapper {
  transform: scale(1.08);
}

.feature-content {
  flex: 1;
}

.feature-title {
  font-family: var(--vp-font-family-heading);
  font-size: 1.02rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.35rem 0;
  line-height: 1.35;
}

.feature-desc {
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.5;
}
</style>

<div class="key-features-grid">

<div class="feature-card">
  <div class="feature-icon-wrapper">
    <img src="/svg/form.svg" width="22" height="22" alt="Form" />
  </div>
  <div class="feature-content">
    <div class="feature-title">Intelligent Form Auto-Fill</div>
    <div class="feature-desc">Automatically detect and populate input fields with predefined values, dynamic variables, or spreadsheet rows.</div>
  </div>
</div>

<div class="feature-card">
  <div class="feature-icon-wrapper">
    <img src="/svg/excel.svg" width="22" height="22" alt="Excel" />
  </div>
  <div class="feature-content">
    <div class="feature-title">Excel Integration</div>
    <div class="feature-desc">Upload and import data directly from <code>.xlsx</code> files and automatically iterate through records row-by-row.</div>
  </div>
</div>

<div class="feature-card">
  <div class="feature-icon-wrapper">
    <img src="/svg/click.svg" width="22" height="22" alt="Click" />
  </div>
  <div class="feature-content">
    <div class="feature-title">Smart Action Triggers</div>
    <div class="feature-desc">Automate button clicks, modal interactions, tab navigation, and form submissions effortlessly.</div>
  </div>
</div>

<div class="feature-card">
  <div class="feature-icon-wrapper">
    <img src="/svg/code.svg" width="22" height="22" alt="Code" />
  </div>
  <div class="feature-content">
    <div class="feature-title">Custom JavaScript Execution</div>
    <div class="feature-desc">Execute custom JavaScript formulas and conditions to transform data and handle complex workflows dynamically.</div>
  </div>
</div>

<div class="feature-card">
  <div class="feature-icon-wrapper">
    <img src="/svg/database.svg" width="22" height="22" alt="Database" />
  </div>
  <div class="feature-content">
    <div class="feature-title">Response Capture & Logging</div>
    <div class="feature-desc">Record submission results, track errors, and export detailed logs for auditing and reporting.</div>
  </div>
</div>

<div class="feature-card">
  <div class="feature-icon-wrapper">
    <img src="/svg/globe.svg" width="22" height="22" alt="Globe" />
  </div>
  <div class="feature-content">
    <div class="feature-title">Universal Compatibility</div>
    <div class="feature-desc">Works across Google Forms, Microsoft Forms, internal enterprise portals, and standard HTML web forms.</div>
  </div>
</div>

<div class="feature-card">
  <div class="feature-icon-wrapper">
    <img src="/svg/template.svg" width="22" height="22" alt="Template" />
  </div>
  <div class="feature-content">
    <div class="feature-title">Reusable Site Configurations</div>
    <div class="feature-desc">Save form field mappings into persistent templates to reuse across multiple sessions or team members.</div>
  </div>
</div>

<div class="feature-card">
  <div class="feature-icon-wrapper">
    <img src="/svg/settings.svg" width="22" height="22" alt="Settings" />
  </div>
  <div class="feature-content">
    <div class="feature-title">Comprehensive Field Support</div>
    <div class="feature-desc">Native support for text, email, numbers, dropdown selects, radio buttons, checkboxes, dates, and file uploads.</div>
  </div>
</div>

</div>

---

## Browser Availability & Download {#download-extension}

Excellent Data Filler is built using Manifest V3 and is officially supported across all major Chromium and Gecko browsers:

| ![Chrome](/logo/icons8-chrome-64.svg) | ![Firefox](/logo/icons8-firefox-48.png) | ![Edge](/logo/icons8-edge-48.svg) | ![Opera](/logo/icons8-opera-48.svg) | ![Safari](/logo/icons8-safari-48.svg) |
| :---: | :---: | :---: | :---: | :---: |
| **Google Chrome** | **Mozilla Firefox** | **Microsoft Edge** | **Opera Browser** | **Apple Safari** |
| Latest <img src="/svg/check.svg" class="doc-icon" width="14" height="14" alt="Supported" /> | Latest <img src="/svg/check.svg" class="doc-icon" width="14" height="14" alt="Supported" /> | Latest <img src="/svg/check.svg" class="doc-icon" width="14" height="14" alt="Supported" /> | Latest <img src="/svg/check.svg" class="doc-icon" width="14" height="14" alt="Supported" /> | Coming Soon |

### Direct Store Links

- <img src="/svg/globe.svg" class="doc-icon" width="16" height="16" alt="Chrome" /> [Chrome Web Store (Official Release)](https://chrome.google.com/webstore/detail/excellent-data-filler-cth/abafaagbfhobgjkcepckbnadafflkdea)
- <img src="/svg/code.svg" class="doc-icon" width="16" height="16" alt="Dev" /> [Chrome Web Store (Developer / Beta Version)](https://chromewebstore.google.com/detail/excellent-data-filler-dev/pkcdniljhopkooejgnidnfahljpnopgn)
- <img src="/svg/globe.svg" class="doc-icon" width="16" height="16" alt="Firefox" /> [Firefox Add-ons (Official Release)](https://addons.mozilla.org/en-US/firefox/addon/excellent-data-filler/)

---

## Quick Start Guide {#quick-start}

Follow these 4 simple steps to automate your first web form in under 2 minutes:

### Step 1: Install & Pin the Extension

1. Install the extension from your browser's web store using the links above.
2. Pin the **Excellent Data Filler** icon to your browser toolbar for quick 1-click access.

### Step 2: Register a New Site Configuration

1. Open the target web page containing the form you want to automate.
2. Click the extension toolbar icon or right-click anywhere on the form.
3. Select **"Insert Site"** from the context menu. The extension will automatically detect the page URL and prepare the field mapping schema.

![Insert Site](/image/insert-site-01.png)

### Step 3: Configure Form Fields & Data Sources

1. Open the **Site Configuration** dashboard from the extension popup.
2. Match each detected field to your desired data source:
   - **Static Values**: Fixed text, default choices, or boilerplate content.
   - **Excel Rows (.xlsx)**: Map columns (e.g. `Column A`, `Column B`) from your uploaded `.xlsx` file directly to form inputs.
   - **Dynamic Variables**: Timestamps, random numbers, UUIDs, or counter loops.
   - **Custom Scripting**: Apply JavaScript conditions or calculations before insertion.

### Step 4: Run Automation & Review Results

1. Refresh or navigate to the form page — the extension will automatically detect the site configuration and fill the form fields.
2. You can quickly start or pause automation anytime using the keyboard shortcut <kbd>Alt</kbd> + <kbd>Q</kbd>, or by toggling the extension icon.
3. If any field or action needs troubleshooting, open the built-in [Extension Logs](/documentation/logs) to review detailed execution steps and error diagnostics.

> **<img src="/svg/bulb.svg" class="doc-icon" width="18" height="18" alt="Tip" /> Pro Tip:** When working with large multi-page forms, configure small sections first to verify selector accuracy before running bulk batch imports.

---

## Common Use Cases {#common-use-cases}

### <img src="/svg/form.svg" class="doc-icon" width="20" height="20" alt="Data Entry" /> Bulk Data Entry Automation {#data-entry-automation}

- **Customer Registration & Onboarding** — Rapidly fill out account creation forms and onboarding portals.
- **Survey Submissions** — Streamline responses across Google Forms, Microsoft Forms, and SurveyMonkey.
- **Support Ticket Creation** — Auto-populate repetitive fields in helpdesk systems like Zendesk or Jira.
- **Job & College Applications** — Save hours by filling identical background questions automatically.

### <img src="/svg/excel.svg" class="doc-icon" width="20" height="20" alt="Data Management" /> Spreadsheet & Database Workflows {#data-management}

- **Row-by-Row Batch Processing** — Automatically advance through spreadsheet rows after each successful form submission.
- **Data Migration** — Migrate legacy spreadsheet records into web-based ERP and CRM applications without manual copy-pasting.
- **Automated Report Generation** — Extract and assemble periodic form responses into structured Excel reports.

### <img src="/svg/browser.svg" class="doc-icon" width="20" height="20" alt="Workflow Automation" /> Quality Assurance & Testing {#workflow-automation}

- **Form Validation & Stress Testing** — Test edge-case inputs, special characters, and boundary conditions automatically.
- **Regression Testing** — Validate form submission flows during web application release cycles.
- **Web Scraping & Extraction** — Extract structured tabular data from web pages into exportable formats.

---

## Need Help & Support? {#need-help}

### <img src="/svg/book.svg" class="doc-icon" width="20" height="20" alt="Documentation" /> Documentation Guides {#documentation}

- Explore the complete [Documentation Overview](/documentation/) for in-depth setup instructions.
- Learn about supported [Field Types & Selectors](/documentation/form-fields/field-types).
- Master dynamic automation with [Functions and Variables](/documentation/functions).

### <img src="/svg/support.svg" class="doc-icon" width="20" height="20" alt="Support" /> Support Channels {#support-channels}

- <img src="/svg/youtube.svg" class="doc-icon" width="16" height="16" alt="YouTube" /> [YouTube Channel](https://www.youtube.com/@ctechhindi) - Video tutorials and feature demos
- <img src="/svg/chat.svg" class="doc-icon" width="16" height="16" alt="Google Group" /> [Google Group Forum](https://groups.google.com/g/excellent-data-filler) - Community discussions and tips
- <img src="/svg/whatsapp.svg" class="doc-icon" width="16" height="16" alt="WhatsApp" /> [WhatsApp Group](https://chat.whatsapp.com/F2AdHoZRvr8HiAbvWqKlVS) - Real-time user support
- <img src="/svg/bug.svg" class="doc-icon" width="16" height="16" alt="Report Issues" /> [GitHub Issues](https://github.com/jeevan-lal/excellent-data-filler-docs/issues) - Report bugs and request new features

### <img src="/svg/beaker.svg" class="doc-icon" width="20" height="20" alt="Testing" /> Interactive Sandbox {#testing-development}

- <img src="/svg/code.svg" class="doc-icon" width="16" height="16" alt="Testing Site" /> [Interactive Testing Site](/documentation/testing-site) - Test your extension rules with live sample forms.
- <img src="/svg/settings.svg" class="doc-icon" width="16" height="16" alt="Development Version" /> [Developer Build Channel](https://chromewebstore.google.com/detail/excellent-data-filler-dev/pkcdniljhopkooejgnidnfahljpnopgn) - Try the latest features and pre-release updates.

### <img src="/svg/card.svg" class="doc-icon" width="20" height="20" alt="Support Project" /> Support the Project {#support-the-project}

- <img src="/svg/card.svg" class="doc-icon" width="16" height="16" alt="PayPal" /> [PayPal Donation](https://www.paypal.com/paypalme/ctechhindi) - Support ongoing development and maintenance.
- <img src="/svg/star.svg" class="doc-icon" width="16" height="16" alt="Star" /> Star the [GitHub Repository](https://github.com/jeevan-lal/excellent-data-filler-docs) to show your support!
