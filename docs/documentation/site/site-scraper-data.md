---
prev:
  text: "Download Excel Template"
  link: "/documentation/site/site-excel-template"
next:
  text: "Site Settings"
  link: "/documentation/site/site-settings"
---

# Scraper Data

Scraper Data is a specialized section that stores and manages data collected from scraper field types. When you use scraper field types in your forms, the extracted data is automatically stored here and can be downloaded for further use or analysis.

## Overview

The Scraper Data section provides:

- **📊 Data Storage** - Stores scraped data from scraper field types
- **📥 Download Options** - Multiple download formats for scraped data
- **🔄 Data Management** - View, refresh, and delete scraped data
- **📋 Data Organization** - Organize scraped data for easy access

## When Scraper Data Appears

### 🎯 Prerequisites

Scraper Data section becomes available when:

- **✅ Scraper Field Types Used** - You have configured scraper field types in your forms
- **✅ Data Successfully Scraped** - The scraper field types have successfully extracted data
- **✅ Data Storage Enabled** - The extension has stored the scraped data
- **✅ Site Configuration Complete** - Your site and forms are properly configured

:::info INFO
if using [Supported Field Types](/documentation/form-fields/field-types#scraper-data) then Scraper Data section will be available.
:::

## Scraper Data Interface

### 🖥️ Interface Overview

The Scraper Data section provides a clean interface for managing your scraped data:

- **📊 Data Display** - View all scraped data in an organized format
- **📥 Download Buttons** - Multiple download options for different needs
- **🔄 Management Tools** - Refresh and delete data as needed
- **📋 Status Information** - Clear indication of data availability

## Download Options

### 📥 Download Scraper Data

**Purpose:** Download all scraped data in a comprehensive format
**Format:** Complete dataset with all scraped information
**Use Case:** Full data analysis and comprehensive reporting

### 📥 Download Scraper Data Single Sheet

**Purpose:** Download scraped data in a simplified single-sheet format
**Format:** Condensed data in a single Excel sheet
**Use Case:** Quick data review and simple analysis

### 🔄 Refresh Data

**Purpose:** Update scraped data with the latest information
**Action:** Re-runs scraper field types to get fresh data
**Use Case:** When source data has changed or been updated

### 🗑️ Delete Data

**Purpose:** Remove all scraped data from storage
**Action:** Permanently deletes stored scraper data
**Use Case:** Clearing old data or starting fresh

## How to Generate Scraper Data

### 🔧 Prerequisites

Before you can access scraper data, you need to:

1. **Configure Scraper Field Types** - Set up scraper field types in your forms
2. **Run Form Automation** - Execute the form filling process to scrape data
3. **Verify Data Extraction** - Ensure scraper field types successfully extracted data
4. **Check Data Storage** - Confirm data is stored in the scraper data section

## Troubleshooting

### ❌ Common Issues

**Issue:** "Scraper Data Not Available" message appears
**Solutions:**

- Ensure you have configured scraper field types in your forms
- Run the form automation process to generate scraped data
- Check if scraper field types are properly configured
- Verify that data extraction was successful

**Issue:** No data appears after running automation
**Solutions:**

- Check scraper field type configuration
- Verify CSS selectors or XPath expressions are correct
- Test scraper field types individually
- Check the extension log for error messages

**Issue:** Download buttons are not working
**Solutions:**

- Ensure data is available in the scraper data section
- Check browser download permissions
- Try refreshing the page and data
- Verify data storage is working properly

### 🔧 Data Issues

**Issue:** Incomplete or missing data
**Solutions:**

- Review scraper field type selectors
- Check if source page structure has changed
- Verify data extraction patterns
- Test with different data sources

**Issue:** Data formatting problems
**Solutions:**

- Check data processing rules in scraper field types
- Verify data type configurations
- Review data cleaning settings
- Test with sample data first

## Support and Help

If you need assistance with scraper data:

- Check the [Log](/documentation/log) for detailed error information
- Review [Field Types](/documentation/form-fields/field-types) for scraper field configuration
- Visit our [Support Channels](/documentation/#need-help) for community assistance
- Report issues on our [GitHub Repository](https://github.com/jeevan-lal/excellent-data-filler-docs/issues)

## Next Steps

After setting up scraper data:

- [Field Types Guide](/documentation/form-fields/field-types) - Learn about different field types
- [Form Configuration](/documentation/form/form) - Configure forms to use scraper data
- [Data Management](/documentation/functions) - Advanced data processing functions
- [Automation Workflow](/documentation/structure) - Set up complete automation workflows