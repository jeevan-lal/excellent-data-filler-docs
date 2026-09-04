---
prev:
  text: "Send Mail (Gmail)"
  link: "/documentation/field-types/google-service-gmail/send-mail-gmail"
next:
  text: "Insert / Remove HTML"
  link: "/documentation/field-types/others/insert-remove-html"
---

# Fetch Google Sheet Data {#fetch-google-sheet-data}

Retrieve real-time data from cloud-hosted Google Spreadsheets using the Google Sheets API for automated form input population.

---

## Overview {#overview}

The **Fetch Google Sheet Data** field type queries specific cell ranges from a Google Sheet and populates retrieved values directly into form fields or variables. It provides built-in browser caching, automatic retry handling, and formatting controls for dates and numbers.

---

## Configuration Options {#configuration-options}

| Option | Type | Description | Required |
|---|---|---|---|
| **Google Service Account** | Dropdown | Authorized Google account with Google Sheets API access. | Yes |
| **Spreadsheet ID** | Text Input | Unique identifier string extracted from the Google Sheet URL. | Yes |
| **Sheet Name** | Text Input | Specific tab name within the spreadsheet (e.g., `Sheet1`, `Inventory`). | Yes |
| **Output Range** | Text Input | A1-notation cell coordinate or range (e.g., `B2`, `A2:D2`). | Yes |
| **Value Render Option** | Dropdown | Formats values: `FORMATTED_VALUE` (as displayed) or `UNFORMATTED_VALUE` (raw values). | No |
| **Date Time Render Option** | Dropdown | Formats dates: `SERIAL_NUMBER` or `FORMATTED_STRING`. | No |
| **Enable Caching** | Toggle Switch | Caches retrieved values locally to minimize API quota usage. | No |
| **Cache Duration** | Number Input | Lifetime of cached records in seconds. | When caching enabled |
| **Enable Retry** | Toggle Switch | Re-attempts queries if temporary network errors occur. | No |
| **Maximum Retries** | Number Input | Maximum number of retry attempts. | When retry enabled |

---

## Detailed Settings Breakdown {#option-details}

### Google Service Account

Select the Google account registered in [Google Service](/documentation/services/google-service). The account must hold read permissions on the target sheet.

### Locating the Spreadsheet ID

Extract the ID token directly from your browser address bar:

```text
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
                                        └─────────────────── SPREADSHEET ID ───────────────────┘
```

In this example, the Spreadsheet ID is: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`.

### Output Range (A1 Notation)

Specify the cell or range to fetch:
- `A2`: Single cell value.
- `B2:E2`: Multiple columns from row 2.
- `Data!C5`: Specific sheet and cell reference.

### Caching for High Performance

- **Enable Caching**: Stores retrieved cell values in browser memory for the specified **Cache Duration** (e.g., `300` seconds).
- **Benefit**: Greatly accelerates repetitive executions and prevents hitting Google Sheets API rate limits.

---

## Practical Examples {#examples}

### Example 1: Fetching Single User Record

```text
Google Service Account: team@company.com
Spreadsheet ID: 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
Sheet Name: Users
Output Range: B2
Value Render Option: FORMATTED_VALUE
Enable Caching: ON
Cache Duration: 300
```

### Example 2: Real-Time Dynamic Price Lookup

```text
Google Service Account: finance@company.com
Spreadsheet ID: 1a2b3c4d5e6f7g8h9i0...
Sheet Name: Rates
Output Range: C10
Enable Caching: OFF
Enable Retry: ON
Maximum Retries: 3
```

---

## Best Practices {#best-practices}

- **Use Formatted Values**: Choose `FORMATTED_VALUE` when you want currency symbols, commas, or custom decimal places preserved.
- **Enable Caching for Static Tables**: If data rarely updates during an automation session, set Cache Duration to `600` (10 minutes).
- **Verify Sheet Sharing**: Make sure the target Google Sheet is shared with the authorized Google Service account.

---

## Related Documentation {#related}

- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template & Google Sheets (Beta)](/documentation/site/site-excel-template)
- <img src="/svg/settings.svg" class="doc-icon" /> [Google Service Account Setup](/documentation/services/google-service)
- <img src="/svg/form.svg" class="doc-icon" /> [Form Fields Overview](/documentation/form-fields/field)
