---
prev:
  text: "Site"
  link: "/documentation/site/site"
next:
  text: "Scraper Data"
  link: "/documentation/site/site-scraper-data"
---

# Excel Template {#excel-template}

Manage your spreadsheet data source for automated form filling with native support for local Excel (`.xlsx`) files and Google Sheets integration.

<img src="/image/upload-excel-template.png" alt="Upload Excel Template Interface" style="max-width: 100%; border-radius: 8px; margin: 16px 0;" />

---

## Overview {#overview}

Excel templates serve as the primary data source for your automated workflows. Excellent Data Filler reads row records sequentially or randomly and fills target web form inputs accordingly.

The extension supports two Excel data source types:

- **Upload Excel File**: Upload local Excel (`.xlsx`) files directly into extension storage for fast, offline execution.
- **Google Sheet (Beta)**: Connect to Google Sheets for real-time cloud collaboration, automatic syncing, and multi-browser automation.

> [!IMPORTANT]
> **Strict `.xlsx` Format Requirement**: The extension exclusively supports `.xlsx` spreadsheet files. Other spreadsheet formats are not supported for uploads.

---

## Excel Source Type Selection {#excel-source-type-selection}

Within your Site workspace, open the **Upload Excel** tab. Use the **Excel Source Type** radio toggle to select your data source:

| Source Type | Description | Best For |
|---|---|---|
| **Upload Excel File** | Direct upload of a local `.xlsx` workbook into extension storage. | Fast execution, offline workflows, standalone automation tasks. |
| **Google Sheet (Beta)** | Live cloud connection via Google Sheets API (OAuth2 or Service Account). | Team collaboration, real-time data entry, multi-browser distributed processing. |

---

## Method 1: Upload Excel File {#upload-excel-file}

Follow these steps to upload and manage local Excel files:

### Step 1: Select Upload Excel File

1. Navigate to the **Upload Excel** tab in your site workspace.
2. Select the **Upload Excel File** option under **Excel Source Type**.

### Step 2: Upload Your `.xlsx` File

1. Under **Select Excel File (.xlsx) for Upload**, click inside the upload box or drag and drop your file.
2. Select your `.xlsx` workbook from your computer.
3. Click **Save Excel Template** to store the workbook in the extension.

<img src="/image/download-excel-template-01.png" alt="Download and Save Excel Template Interface" style="max-width: 100%; border-radius: 8px; margin: 16px 0;" />

### Available Toolbar Actions

| Action Button | Purpose | Details |
|---|---|---|
| **Save Excel Template** | Commit and save dataset | Saves the uploaded `.xlsx` data into local extension storage for the active site. |
| **Download Excel Template** | Generate `.xlsx` template | Creates a ready-to-fill `.xlsx` spreadsheet pre-populated with column headers matching your configured form fields. |
| **Delete Excel** (Trash Icon) | Clear uploaded data | Removes the current Excel dataset from extension storage. |

### Excel Data Status States

- **When No Excel File is Uploaded**:
  ```text
  Not Found
  Excel Data Not Available, Please Upload Excel File.
  ```
- **When Excel File is Successfully Uploaded**:
  - The records become immediately accessible for automation.
  - You can inspect loaded rows and column mappings under the **Excel Data** tab.
  - The extension tracks row indexes during automation runs.

---

## Method 2: Google Sheet (Beta) {#google-sheet-beta}

Connect directly to cloud spreadsheets in Google Drive for live data streaming and bidirectional sync.

### Connection Types {#connection-types}

Google Sheet integration supports two distinct authentication methods:

#### 1. OAuth2 (Login Required) {#oauth2-login}

Connect using your Google account via standard OAuth2 authentication.

- **Requirements**: Active Google account with access permissions to the target spreadsheet and an internet connection.
- **Setup**:
  1. Select the **Google Sheet (Beta)** radio button.
  2. Choose **OAuth2 (Login Required)**.
  3. Click **Check Account Connection**.
  4. Follow the Google OAuth popup prompt to sign in and grant spreadsheet read/write permissions.

#### 2. Client Service Account (No Login Required) {#service-account}

Connect securely via a Google Cloud Console service account without requiring browser user logins.

- **Requirements**:
  - A Google Cloud Platform (GCP) project with the Google Sheets API enabled.
  - A Service Account with an exported JSON key file containing `client_email` and `private_key`.
  - The Google Sheet must be shared with the Service Account email address (`Editor` permissions).
- **Setup**:
  1. Select the **Google Sheet (Beta)** radio button.
  2. Choose **Client (Service Account, No Login Required)**.
  3. Click **Click to Upload JSON File** and select your downloaded service account `.json` key file.
  4. Ensure your Google Sheet is shared with the service account email.

> [!TIP]
> **Service Account Sharing**: Always open your Google Sheet, click **Share**, and paste the Service Account email (`...iam.gserviceaccount.com`) as an **Editor** to allow reading and updating rows.

---

## Google Sheet Configuration {#google-sheet-configuration}

### Required Connection Fields

| Field | Description | Example |
|---|---|---|
| **Spreadsheet URL** | Full web URL of the Google Spreadsheet. | `https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9.../edit` |
| **Spreadsheet Sheet Name** | Exact name of the sheet/tab containing your data (case-sensitive). | `Sheet1`, `Orders`, `FormData` |
| **How many rows of the sheet to fetch?** | Maximum number of rows to retrieve per batch. | `30`, `50`, `100` |

### Optional Advanced Features

#### Fetch Sheet Row Data Using Browser ID {#browser-id}

Enables running multiple browser instances or profiles concurrently against the same sheet without row collision.

- **How it works**:
  1. Toggle **Fetch Sheet Row Data Using Browser Id**.
  2. Enter identifier names in the Browser ID field (e.g., `browser-1`, `browser-2`).
  3. In your Google Sheet, create a column named `<code v-pre>{BROWSER-ID}</code>`.
  4. Assign the appropriate browser ID value to each row.
  5. The extension instance will only fetch and fill rows designated for its configured Browser ID.

> [!NOTE]
> The column header in your Google Sheet must be spelled exactly `<code v-pre>{BROWSER-ID}</code>` (including curly braces).

#### Ignore Column Values When Updating {#ignore-columns}

Protects specific columns from being overwritten when pushing site data updates back to the sheet.

- **How to use**:
  1. Toggle **Ignore column values when updating the sheet?**.
  2. Enter the column names you wish to preserve (e.g., `Status`, `Notes`, `DateAdded`), pressing Enter after each entry.
  3. These columns will be retained untouched during sync operations.

---

## Google Sheet Management Actions {#google-sheet-actions}

### Check Account Connection

Tests and confirms your Google account authentication or Service Account JSON validity.

- **OAuth2**: Triggers authentication verification with Google servers.
- **Service Account**: Validates the uploaded JSON key format and cryptographic credentials.

### Check Sheet Connection

Verifies network access, spreadsheet URL validity, and sheet tab existence. Confirms that headers and rows can be fetched properly.

### Update Sheet With Site Data

Synchronizes your configured form fields with the Google Sheet structure.

- Inspects all form fields registered in the active site.
- Generates or updates column headers in the target sheet to match field names.
- Configures schema alignment for seamless two-way data filling and status reporting.

### Clear Sheet Cache

Flushes locally cached Google Sheet data, forcing the extension to pull fresh records on the next automation cycle.

> [!IMPORTANT]
> Always click **Clear Sheet Cache** whenever you edit cell values, insert rows, or add new columns directly inside Google Sheets.

---

## Excel Template Download {#download-excel-template}

Generating an Excel template ensures your local `.xlsx` file matches your form field names with 100% precision:

1. Configure all form fields in your site.
2. Under the **Upload Excel** tab, click **Download Excel Template**.
3. The extension compiles an `.xlsx` workbook containing:
   - Header row matching every active field name.
   - Proper column sequencing.
   - Clean column layout ready for batch data entry.
4. Open the downloaded file in Microsoft Excel or compatible software, populate your rows, and upload it back into the extension.

- **Output File Naming Format**: `[SiteName]_Template_[Date].xlsx`

---

## Prerequisites {#prerequisites}

Before uploading data or downloading templates, ensure:

1. **Site Created**: A parent site container exists in the extension.
2. **Forms Registered**: At least one form page is added under the site.
3. **Fields Configured**: Form fields have assigned element selectors and field types.
4. **Valid Names**: Field names are clear and descriptive to generate readable `.xlsx` column headers.

---

## Automation Workflows {#workflows}

### Local Excel (`.xlsx`) Workflow

```text
[Configure Fields] ──> [Download .xlsx Template] ──> [Populate Rows] ──> [Upload .xlsx] ──> [Run Automation]
```

1. **Download Template**: Click **Download Excel Template** to obtain the current field schema.
2. **Populate Rows**: Fill records into the `.xlsx` sheet.
3. **Upload Workbook**: Upload via **Select Excel File (.xlsx) for Upload** and click **Save Excel Template**.
4. **Execute**: Trigger form filling with <kbd>Alt</kbd> + <kbd>Q</kbd> or on page load.

### Google Sheets Workflow

```text
[Connect OAuth2 / Service Account] ──> [Set URL & Sheet Name] ──> [Update Sheet With Site Data] ──> [Fill Rows] ──> [Run Automation]
```

1. **Authenticate**: Connect using OAuth2 or upload Service Account JSON.
2. **Configure**: Provide the Spreadsheet URL and Sheet Tab Name.
3. **Structure Sync**: Click **Update Sheet With Site Data** to create headers automatically.
4. **Input Data**: Enter data into the Google Sheet.
5. **Execute**: Run automation. If edits are made in the sheet, click **Clear Sheet Cache**.

---

## Troubleshooting {#troubleshooting}

### Local Excel Issues

| Problem | Cause | Solution |
|---|---|---|
| **Template not downloading** | Missing form fields or browser permission issue | Ensure at least one form with fields is configured. Check browser download settings. |
| **Excel file will not upload** | Unsupported file format or corrupted file | Ensure the file is strictly `.xlsx`. Re-save the file in Excel if needed. |
| **Data not filling into form** | Header mismatch with field names | Download a fresh template to verify column headers match field names exactly. |

### Google Sheet Issues

| Problem | Cause | Solution |
|---|---|---|
| **Cannot connect Google account** | Expired OAuth session or network block | Re-click **Check Account Connection** and complete the Google login prompt. |
| **Sheet connection failed** | Incorrect URL, sheet name mismatch, or missing permissions | Verify the URL and tab name (case-sensitive). For Service Accounts, verify the sheet is shared with the service account email as Editor. |
| **Data changes not appearing** | Local cache active | Click **Clear Sheet Cache** to fetch the latest cloud rows. |
| **Browser ID filtering not working** | Header misspelling or missing column | Confirm the column header is named `<code v-pre>{BROWSER-ID}</code>` and row values match the configured ID. |

---

## Best Practices {#best-practices}

### Do's

- **Download Fresh Templates**: Download a new `.xlsx` template whenever you add, rename, or remove form fields.
- **Match Header Names**: Ensure column names match field names accurately.
- **Clear Cache on Sheet Edits**: Always click **Clear Sheet Cache** after updating Google Sheet data.
- **Test with Sample Rows**: Test automation on 2-3 rows before processing large datasets.
- **Use Browser IDs for Scale**: Use `<code v-pre>{BROWSER-ID}</code>` when distributing work across multiple profiles or devices.

### Don'ts

- **Do Not Use Non-XLSX Formats**: Upload local data exclusively in `.xlsx` format.
- **Do Not Rename Headers Manually**: Avoid altering generated template column headers.
- **Do Not Leave Formulas Uncalculated**: If your spreadsheet uses complex formulas, ensure values are resolved before running automation.
- **Do Not Expose Service Account Keys**: Keep your Google Cloud JSON credentials safe and confidential.

---

## Related Documentation {#related-documentation}

- <img src="/svg/form.svg" class="doc-icon" /> [Site Management](/documentation/site/site)
- <img src="/svg/excel.svg" class="doc-icon" /> [Scraper Data](/documentation/site/site-scraper-data)
- <img src="/svg/settings.svg" class="doc-icon" /> [Site Settings](/documentation/site/site-settings)
- <img src="/svg/card.svg" class="doc-icon" /> [Form Fields](/documentation/form-fields/field)
- <img src="/svg/database.svg" class="doc-icon" /> [Field Types](/documentation/form-fields/field-types)
- <img src="/svg/beaker.svg" class="doc-icon" /> [Logs & Execution Tracking](/documentation/logs)
