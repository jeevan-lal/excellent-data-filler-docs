# Fetch Google Sheet Data

Retrieve data from Google Sheets to use in your automation workflows.

## Overview

The Fetch Google Sheet Data field type allows you to interact with Google Sheets, enabling you to fetch data from spreadsheets and use it in your form automation processes. This integration provides direct access to your Google Sheets data with support for caching, retry mechanisms, and flexible data formatting options.

## Configuration Options

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| [Google Service Account](#google-service-account) | Dropdown | Select logged-in Google account | **Yes** |
| [Spreadsheet ID](#spreadsheet-id) | Input | Unique identifier of the Google Sheet | **Yes** |
| [Sheet Name](#sheet-name) | Input | Name of the specific sheet tab | **Yes** |
| [Output Range](#output-range) | Input | Cell range to fetch data from | **Yes** |
| [Value Render Option](#value-render-option) | Dropdown | How values should be rendered | No |
| [Date Time Render Option](#date-time-render-option) | Dropdown | How dates and times should be rendered | No |
| [Enable Caching](#enable-caching) | Switch | Cache data in browser for faster access | No |
| [Cache Duration](#cache-duration) | Input | Duration (seconds) cached data remains valid | No |
| [Enable Retry](#enable-retry) | Switch | Retry on failure | No |
| [Maximum Retries](#maximum-retries) | Input | Maximum number of retry attempts | No |

---

## Option Details

### Google Service Account {#google-service-account}

Select the Google account you want to use for accessing Google Sheets.

**Type:** Dropdown

**Description:** Choose from your logged-in Google accounts. Make sure the selected account has access to the spreadsheet you want to read.

**Example:**
- `user@gmail.com`
- `work@company.com`

---

### Spreadsheet ID {#spreadsheet-id}

The unique identifier of your Google Spreadsheet.

**Type:** Input

**Description:** You can find the Spreadsheet ID in the URL of your Google Sheet.

**How to Find:**
```
https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
```

**Example:**
```
1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

---

### Sheet Name {#sheet-name}

The name of the specific sheet tab within your spreadsheet.

**Type:** Input

**Description:** Specify which sheet tab to fetch data from. This is the name visible at the bottom of your Google Sheet.

:::tip Set Range in Default Value
You can set the range in the **field default value** of this field.

**Example:**
```
Sheet1!A1:D10
MyData!B2:F100
```
:::

**Example:**
```
Sheet1
Data
Sales Report
```

---

### Output Range {#output-range}

Specify the cell range to fetch data from.

**Type:** Input

**Description:** Define which cells to retrieve using A1 notation.

**Format:**
- Single cell: `A1`
- Range: `A1:D10`
- Entire column: `A:A`
- Entire row: `1:1`
- Multiple ranges: `A1:B2,D4:E5`

**Example:**
```
A1:D10
B2:F100
A:Z
```

---

### Value Render Option {#value-render-option}

Determines how values should be rendered in the output.

**Type:** Dropdown

**Options:**

| Option | Description |
|--------|-------------|
| **Formatted Value** | Values will be calculated and formatted as displayed in the UI |
| **Unformatted Value** | Values will be calculated but not formatted |
| **Formula** | Values will not be calculated; formulas will be returned as-is |

**Example:**
- **Formatted Value**: `$1,000.00`
- **Unformatted Value**: `1000`
- **Formula**: `=SUM(A1:A10)`

---

### Date Time Render Option {#date-time-render-option}

Determines how dates and times should be rendered.

**Type:** Dropdown

**Options:**

| Option | Description |
|--------|-------------|
| **Date Time** | Dates and times are rendered as formatted strings |
| **Serial Number** | Dates and times are rendered as serial numbers |

**Example:**
- **Date Time**: `2024-01-15 10:30:00`
- **Serial Number**: `45307.4375`

---

### Enable Caching {#enable-caching}

Cache fetched data in the browser for faster subsequent access.

**Type:** Switch

**Description:** When enabled, the data will be stored in browser cache, reducing API calls and improving performance.

**Options:**
- **ON** - Enable caching
- **OFF** - Disable caching (fetch fresh data every time)

**Benefits:**
- Faster data retrieval
- Reduced API quota usage
- Better performance for frequently accessed data

---

### Cache Duration {#cache-duration}

Duration (in seconds) that cached data remains valid.

**Type:** Input

**Description:** Specify how long the cached data should be considered valid before fetching fresh data.

**Example:**
```
300    (5 minutes)
1800   (30 minutes)
3600   (1 hour)
86400  (24 hours)
```

**Note:** This option only works when [Enable Caching](#enable-caching) is turned ON.

---

### Enable Retry {#enable-retry}

Automatically retry the request if it fails.

**Type:** Switch

**Description:** When enabled, the system will automatically retry fetching data if an error occurs.

**Options:**
- **ON** - Enable retry on failure
- **OFF** - Don't retry on failure

**Use Cases:**
- Network connectivity issues
- Temporary API errors
- Rate limiting scenarios

---

### Maximum Retries {#maximum-retries}

Maximum number of retry attempts if the request fails.

**Type:** Input

**Description:** Specify how many times the system should retry before giving up.

**Example:**
```
3    (Retry up to 3 times)
5    (Retry up to 5 times)
10   (Retry up to 10 times)
```

**Note:** This option only works when [Enable Retry](#enable-retry) is turned ON.

---

## Use Cases

- **Import data from Google Sheets for form filling** - Use spreadsheet data to populate form fields
- **Sync spreadsheet data with web forms** - Keep forms synchronized with Google Sheets
- **Use Google Sheets as a data source for automation** - Centralize data management in Google Sheets
- **Retrieve configuration or reference data from sheets** - Store settings and reference data in spreadsheets

## Best Practices

### ✅ Do's

- **Use caching for static data** - Enable caching for data that doesn't change frequently
- **Set appropriate cache duration** - Balance between freshness and performance
- **Enable retry for reliability** - Use retry mechanism for critical data fetching
- **Use specific ranges** - Fetch only the data you need to improve performance
- **Verify account permissions** - Ensure the selected account has access to the spreadsheet

### ❌ Don'ts

- **Don't cache frequently changing data** - Disable caching for real-time data
- **Don't set excessive retry attempts** - Too many retries can slow down automation
- **Don't fetch entire sheets unnecessarily** - Use specific ranges to optimize performance
- **Don't share Spreadsheet IDs publicly** - Keep your spreadsheet information secure

## Troubleshooting

### Permission Denied Error

**Solution:** Verify that the selected Google account has access to the spreadsheet.

### Invalid Spreadsheet ID

**Solution:** Double-check the Spreadsheet ID from the Google Sheets URL.

### Sheet Not Found

**Solution:** Ensure the sheet name exactly matches the tab name in your spreadsheet (case-sensitive).

### Empty Data Returned

**Solution:** Verify the output range contains data and the range notation is correct.

### API Quota Exceeded

**Solution:** Enable caching to reduce API calls or wait for quota reset.

## Related Documentation

- [Google Service - Sheet](/documentation/field-types/google-service-sheet)
- [Field Types](/documentation/form-fields/field-types)
- [Variables](/documentation/variable)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
