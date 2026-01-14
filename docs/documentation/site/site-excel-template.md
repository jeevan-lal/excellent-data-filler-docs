---
prev:
  text: "Site"
  link: "/documentation/site/site"
next:
  text: "Scraper Data"
  link: "/documentation/site/site-scraper-data"
---

# Excel Template

Manage your Excel data source for automated form filling with support for both uploaded Excel files and Google Sheets integration.

<img src="/image/download-excel-template-01.png" width="350" height="350" alt="Download Excel Template Interface">

## Overview

Excel templates serve as the data source for your automation workflows. The extension supports two types of Excel sheet integration:

- **📤 Upload Excel Sheet** - Upload local Excel (.xlsx) files
- **📊 Google Sheet (Beta)** - Connect to Google Sheets for real-time data access

## Excel Sheet Type Selection

Choose between two methods for managing your Excel data:

### 📤 Upload Excel Sheet

Upload local Excel files directly to the extension.

**Features:**
- Upload .xlsx files from your computer
- Download template based on your form fields
- Delete uploaded Excel file
- Offline data access

### 📊 Google Sheet (Beta)

Connect to Google Sheets for cloud-based data management.

**Features:**
- Real-time data synchronization
- Two connection types: OAuth2 and Service Account
- Multi-browser support with Browser ID
- Automatic sheet updates
- Cloud-based data storage

---

## Method 1: Upload Excel Sheet

### Step 1: Select Excel Sheet Type

1. Navigate to **Upload Excel** tab
2. Select **Upload Excel Sheet** radio button

### Step 2: Upload Excel File

**Select excel (.xlsx) file for Upload:**

1. Click **"Choose File"** button
2. Select your Excel file (.xlsx format)
3. File will be uploaded automatically

**Available Actions:**

| Button | Description |
|--------|-------------|
| **📥 Download Excel Template** | Download template with your form field structure |
| **🗑️ Delete Excel** | Remove the currently uploaded Excel file |

### Step 3: Excel Data Status

**When No Excel File is Uploaded:**

The interface will display:
```
Not Found
Excel Data Not Available, Please Upload Excel File.
```

**When Excel File is Uploaded:**

- Excel data becomes available for form filling
- Data can be viewed in the **Excel Data** tab
- Form filling can begin using the uploaded data

---

## Method 2: Google Sheet (Beta)

### Connection Types

Google Sheet integration offers two connection methods:

#### 🔐 OAuth2 (Login Required)

Connect using your Google account with OAuth2 authentication.

**Requirements:**
- Google account login
- Permission to access Google Sheets
- Internet connection

**Setup:**
1. Select **Google Sheet (Beta)** radio button
2. Choose **OAuth2 (Login Required)** connection type
3. Click **"Check Account Connection"** to authenticate
4. Sign in with your Google account
5. Grant necessary permissions

#### 🔑 Client (Service Account, No Login Required)

Connect using a Google Cloud service account without login.

**Requirements:**
- Google Cloud Console service account
- JSON key file (private_key, client_email)
- Sheet shared with service account email

**Setup:**
1. Select **Google Sheet (Beta)** radio button
2. Choose **Client (Service Account, No Login Required)** connection type
3. Click **"Click to Upload JSON File"** button
4. Upload your service account JSON key file

:::tip Create Service Account
Create a service account in **Google Cloud Console**, download JSON key file (private_key, client_email), share the sheet with the service account email.
:::

---

## Google Sheet Configuration

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| **Spreadsheet URL** | Full URL of your Google Sheet | `https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0...` |
| **Spreadsheet Sheet Name (Sheet1)** | Name of the specific sheet tab | `Sheet1`, `Data`, `FormData` |
| **How many rows of the sheet to fetch?** | Number of rows to retrieve | `30`, `50`, `100` |

### Optional Features

#### 🆔 Fetch Sheet Row Data Using Browser Id

Enable this option to use different data for different browsers.

**How it works:**
1. Toggle **"Fetch Sheet Row Data Using Browser Id"** checkbox
2. Enter browser ID names in the input field
3. Create a column named `{BROWSER-ID}` in your sheet
4. Fill browser ID names in this column

**Example:**
```
Browser IDs: browser-1, browser-2, browser-3
```

:::info Use Browser ID
Use Browser ID if you use same sheet in multiple browser, create a new column with this name **{BROWSER-ID}** and fill the browser id name in this column.
:::

#### 🚫 Ignore Column Values When Updating

Prevent specific columns from being updated when syncing data.

**How to use:**
1. Toggle **"Ignore column values when updating the sheet?"** checkbox
2. Enter column names to ignore (press Enter after each)
3. These columns will be excluded from updates

**Example:**
```
title, description, notes
```

---

## Google Sheet Actions

### 🔍 Check Account Connection

Verify your Google account authentication status.

**For OAuth2:**
- Click **"Check Account Connection"** button
- Sign in if not already authenticated
- Verify connection status

**For Service Account:**
- Upload JSON key file first
- Click **"Check Account Connection"** button
- Verify service account credentials

### 📊 Check Sheet Connection

Verify connection to your Google Spreadsheet.

**Steps:**
1. Enter Spreadsheet URL
2. Enter Sheet Name
3. Click **"Check Sheet Connection"** button
4. Verify sheet access and data availability

### 📤 Update Sheet With Site Data

Sync your form field structure with Google Sheet.

**Purpose:**
For updating google sheet with your extension site data. this will insert columns and create database sheet.

**How it works:**
1. Click **"Update Sheet With Site Data"** button
2. Extension reads your form field configuration
3. Creates/updates columns in Google Sheet
4. Generates database structure based on field types

**What gets updated:**
- Column headers matching field names
- Data validation rules
- Field type formatting
- Required field indicators

### 🗑️ Clear Sheet Cache

Clear cached Google Sheet data to fetch fresh data.

**When to use:**
If you have changed any data in the sheet or added new columns, it is essential to clear the cache before using the sheet.

**Steps:**
1. Click **"Clear Sheet Cache"** button
2. Cache will be cleared immediately
3. Next data fetch will retrieve fresh data from Google Sheet

---

## Excel Template Download

### 📥 Download Excel Template

Generate and download an Excel template based on your form fields.

**How it works:**
1. Click **"Download Excel Template"** button
2. Extension generates template with:
   - Column headers matching field names
   - Sample data for guidance
   - Proper formatting for each field type
3. File downloads to your default download folder

**File naming:** `[SiteName]_Template_[Date].xlsx`

---

## Prerequisites

Before using Excel templates, ensure you have:

1. **✅ Site Created** - A site must be set up in the extension
2. **✅ Form Added** - At least one form must be added to the site
3. **✅ Fields Configured** - Form fields must be properly configured
4. **✅ Field Types Set** - Each field must have a defined field type

---

## Workflow Integration

### Upload Excel Sheet Workflow

1. **Download Template** - Get the latest template structure
2. **Fill Data** - Enter your data in Excel
3. **Upload File** - Upload the filled Excel file
4. **Run Automation** - Execute automated form filling

### Google Sheet Workflow

1. **Connect Account** - Authenticate with Google
2. **Configure Sheet** - Set spreadsheet URL and sheet name
3. **Update Structure** - Sync form fields with sheet columns
4. **Fill Data** - Enter data in Google Sheet
5. **Run Automation** - Execute automated form filling
6. **Clear Cache** - Clear cache when data changes

---

## Troubleshooting

### Upload Excel Sheet Issues

**Issue:** Template not downloading

**Solutions:**
- Ensure all form fields are properly configured
- Check if the site has at least one form
- Verify browser download permissions
- Try refreshing the extension options page

**Issue:** Excel file not uploading

**Solutions:**
- Verify file format is .xlsx
- Check file size is reasonable
- Ensure file is not corrupted
- Try a different Excel file

---

### Google Sheet Issues

**Issue:** Cannot connect to Google account

**Solutions:**
- Check internet connection
- Verify Google account credentials
- Clear browser cache and cookies
- Try re-authenticating

**Issue:** Sheet connection failed

**Solutions:**
- Verify spreadsheet URL is correct
- Check sheet name matches exactly (case-sensitive)
- Ensure sheet is shared with service account (for Client connection)
- Verify permissions are granted

**Issue:** Data not updating

**Solutions:**
- Click "Clear Sheet Cache" button
- Verify sheet has data in correct format
- Check column names match field names
- Ensure row count is set correctly

**Issue:** Browser ID not working

**Solutions:**
- Verify `{BROWSER-ID}` column exists in sheet
- Check browser ID names are entered correctly
- Ensure browser ID values match in sheet
- Clear cache and try again

---

## Best Practices

### ✅ Do's

- **Use descriptive sheet names** - Make sheet names clear and meaningful
- **Keep data organized** - Maintain consistent data formatting
- **Regular backups** - Backup your Excel files and Google Sheets
- **Clear cache after changes** - Always clear cache when updating Google Sheets
- **Test with small datasets** - Verify automation works before bulk processing
- **Use Browser ID for multi-browser** - Implement Browser ID when using same sheet across browsers

### ❌ Don'ts

- **Don't modify column headers** - Keep column names matching field names
- **Don't use special characters** - Avoid special characters in sheet names
- **Don't forget to clear cache** - Always clear cache after Google Sheet updates
- **Don't share sensitive data** - Be cautious with service account credentials
- **Don't exceed row limits** - Keep row count reasonable for performance

---

## Related Documentation

- [Site Management](/documentation/site/site)
- [Excel Data](/documentation/site/site-excel-template)
- [Form Fields](/documentation/form-fields/field)
- [Field Types](/documentation/form-fields/field-types)
- [Google Service](/documentation/services/google-service)
- [Automation Workflow](/documentation/structure)

---

## Support and Help

If you need assistance with Excel templates:

- Check the [Log](/documentation/log) for detailed error information
- Review [Field Types](/documentation/form-fields/field-types) for configuration help
- Visit our [Support Channels](/documentation/#need-help) for community assistance
- Report issues on our [GitHub Repository](https://github.com/jeevan-lal/excellent-data-filler-docs/issues)
