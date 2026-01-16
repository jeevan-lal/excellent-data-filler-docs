# Check Downloads

Monitor and verify download status in the browser's download list with support for filename pattern matching and custom filtering.

## Configuration Options

| Option | Description | Required |
|--------|-------------|----------|
| **Run the action process in the background?** | If enabled, this field runs in background while next field executes | No |
| **Filename** | Check specific file name in browser download list using regex patterns | No |
| **Downloads Item Status** | Desired download status to check for | Yes |
| **Wait until the download items status matches** | Wait until specified status is reached | No |

---

### Run in Background

**Toggle:** Run the action process in the background?

**Description:** When enabled, this field action runs in the background and the next field action executes immediately without waiting for download completion.

**Use Case:** When you want to continue automation while monitoring downloads in parallel.

---

### Filename

**Set in:** Field Default Value or Excel Field Column

**Description:** Check for specific file name in the browser's download list (not in PC download folder). Uses regex patterns for flexible matching.

:::info Important
If you don't set a filename, the field type will check the status of **all files** in the download list.
:::

#### Regex Pattern Examples

| Example Path / Filename | Regex Pattern | Description |
|------------------------|---------------|-------------|
| `report.pdf` | `.*report\.pdf$` | Exact file name ending with `report.pdf` |
| `monthly-report.pdf` | `.*-report\.pdf$` | Hyphenated report file |
| `annual_report.pdf` | `.*_report\.pdf$` | Underscore-separated report |
| `Reports/2025/report.pdf` | `Reports/2025/.*\.pdf$` | Any PDF inside `Reports/2025` folder |
| `Downloads/report_2024.pdf` | `.*report_\d{4}\.pdf$` | Report with 4-digit year |
| `finance-report-v2.pdf` | `.*report-v\d+\.pdf$` | Versioned report files |
| `report(1).pdf` | `.*report\(\d+\)\.pdf$` | Duplicate download naming |
| `FINAL_REPORT.PDF` | `.*final_report\.pdf$` *(i)* | Case-insensitive final report |
| `invoice_12345.pdf` | `.*invoice_\d+\.pdf$` | Invoice with numeric ID |
| `Invoices/Jan/invoice.pdf` | `Invoices/.*/invoice\.pdf$` | Invoice inside any subfolder |
| `notice_SH_151_196.pdf` | `.*notice_SH_\d+_\d+\.pdf$` | Structured notice file |
| `SH_151_196_SHRD_14581300.pdf` | `.*SH_\d+_\d+_SHRD_\d+\.pdf$` | Election-style reference file |
| `formA-2025-01.pdf` | `.*formA-\d{4}-\d{2}\.pdf$` | Date-formatted form |
| `backup/report_old.pdf` | `.*report_.*\.pdf$` | Report with suffix |
| `Reports/finance.xlsx` | `Reports/.*\.xlsx$` | Any Excel file in Reports folder |
| `statement.csv` | `.*(csv\|xlsx)$` | CSV or Excel file |
| `docs/report.pdf` | `.*/report\.pdf$` | `report.pdf` in any folder |
| `report.pdf` | `^report\.pdf$` | Only root-level filename |
| `2025_report_final.pdf` | `.*\d{4}_report_.*\.pdf$` | Year-prefixed report |
| `summary-notice.pdf` | `.*(summary\|notice).pdf$` | Summary OR notice files |

**Common Regex Patterns:**

- `.*` - Match any characters
- `\.` - Match literal dot (escape the dot)
- `\d` - Match any digit (0-9)
- `\d{4}` - Match exactly 4 digits
- `\d+` - Match one or more digits
- `$` - End of string
- `^` - Start of string
- `(a|b)` - Match 'a' OR 'b'
- `[abc]` - Match any character in brackets

---

### Downloads Item Status

**Options:**
- **Progress** - The download is in progress
- **Complete** - The download is complete
- **Broke Connection** - The download encountered a broken connection

**Description:** Specify the desired download status you want to check for.

---

### Wait Until Status Matches

**Toggle:** Wait until the download items status matches

**Description:** When enabled, the field waits until the specified download status is reached. If disabled, the field reports the current status without pausing execution.

---

## Custom Filter

For advanced filtering of download items, use a JavaScript event listener in a separate **JavaScript Code** field type.

### Implementation Steps

Use three field types in sequence:
1. **JavaScript Code** - Add event listener
2. **Check Downloads** - Trigger event and pass download details
3. **getLocalStorage** function - Check if filter is complete

### JavaScript Event Listener

```js
// Listen Event
window.addEventListener('EDF-CHECK-DOWNLOADS-RESPONSE', (e) => {
  if (e && e.detail && e.detail.response) {

    // Use for loop to search and match item details according to your needs
    for (let i = 0; i < e.detail.response.length; i++) {
      const item = e.detail.response[i];
      console.log("Item", item)
      
      // Example: Check if specific file exists
      if (item.filename.includes('report.pdf') && item.state === 'complete') {
        // If match found, store value in local storage
        $fns.setLocalStorage("is-found-download", "1");
        break;
      }
    }
  }
});

// RETURN - if don't use this line then extension will pause on this field
$fns.return("1");
```

### Event Variable Structure

**Event Variable:** `e.detail.response`

**Data Type:** Array of download item objects

**Example Response:**

```json
[
  {
    "bytesReceived": 707486,
    "canResume": false,
    "danger": "accepted",
    "endTime": "2026-01-15T08:16:17.120Z",
    "exists": true,
    "fileSize": 707486,
    "filename": "C:\\Users\\xyz\\Downloads\\dev-example.pdf",
    "finalUrl": "https://example.com/downloads/pdf/dev-example.pdf",
    "id": 113,
    "incognito": false,
    "mime": "application/pdf",
    "paused": false,
    "referrer": "https://example.com/downloads/pdf/",
    "startTime": "2026-01-15T08:15:51.970Z",
    "state": "complete",
    "totalBytes": 707486,
    "url": "https://example.com/downloads/pdf/dev-example.pdf"
  }
]
```

### Download Item Properties

| Property | Type | Description |
|----------|------|-------------|
| `bytesReceived` | number | Number of bytes received so far |
| `canResume` | boolean | Whether download can be resumed |
| `danger` | string | Danger type (e.g., "accepted", "file", "url") |
| `endTime` | string | ISO timestamp when download completed |
| `exists` | boolean | Whether file still exists |
| `fileSize` | number | Total file size in bytes |
| `filename` | string | Full path to downloaded file |
| `finalUrl` | string | Final URL after redirects |
| `id` | number | Unique download ID |
| `incognito` | boolean | Whether downloaded in incognito mode |
| `mime` | string | MIME type of file |
| `paused` | boolean | Whether download is paused |
| `referrer` | string | Referrer URL |
| `startTime` | string | ISO timestamp when download started |
| `state` | string | Download state: "in_progress", "complete", "interrupted" |
| `totalBytes` | number | Total file size in bytes |
| `url` | string | Original download URL |

---

## Usage Examples

### Example 1: Wait for Specific File Download

```
Field Type: Check Downloads
Filename: .*report\.pdf$
Downloads Item Status: Complete
Wait until status matches: ✅ Enabled
```

**Result:** Waits until any file matching "report.pdf" is completely downloaded.

---

### Example 2: Check All Downloads (No Filename)

```
Field Type: Check Downloads
Filename: (empty)
Downloads Item Status: Complete
Wait until status matches: ✅ Enabled
```

**Result:** Waits until all downloads are complete.

---

### Example 3: Background Download Monitoring

```
Field Type: Check Downloads
Run in background: ✅ Enabled
Filename: .*invoice_\d+\.pdf$
Downloads Item Status: Complete
Wait until status matches: ✅ Enabled
```

**Result:** Monitors invoice downloads in background while next field executes.

---

### Example 4: Custom Filter Workflow

**Field 1 - JavaScript Code:**
```js
window.addEventListener('EDF-CHECK-DOWNLOADS-RESPONSE', (e) => {
  if (e && e.detail && e.detail.response) {
    for (let i = 0; i < e.detail.response.length; i++) {
      const item = e.detail.response[i];
      
      // Check for PDF files over 1MB
      if (item.mime === 'application/pdf' && item.fileSize > 1000000) {
        $fns.setLocalStorage("large-pdf-found", "1");
        break;
      }
    }
  }
});
$fns.return("1");
```

**Field 2 - Check Downloads:**
```
Downloads Item Status: Complete
Wait until status matches: ✅ Enabled
```

**Field 3 - getLocalStorage Function:**
```
Function Value: [large-pdf-found][true][true]
```

**Result:** Waits for large PDF download, stores result, and verifies completion.

---

### Example 5: Pattern Matching with Variables

```
Field Type: Check Downloads
Filename (from Excel): {$expectedFilename$}
Downloads Item Status: Complete
Wait until status matches: ✅ Enabled
```

**Excel Data:**
- expectedFilename: `.*report_2025.*\.pdf$`

**Result:** Dynamically matches files based on Excel data.

---

## Use Cases

#### Verify File Download Completion

**Scenario:** Ensure a specific file has finished downloading before proceeding.

**Configuration:**
- Filename: `.*contract\.pdf$`
- Status: Complete
- Wait: Enabled

---

#### Monitor Multiple Downloads

**Scenario:** Check if all downloads are complete.

**Configuration:**
- Filename: (empty)
- Status: Complete
- Wait: Enabled

---

#### Custom Validation

**Scenario:** Verify downloaded file meets specific criteria (size, type, etc.).

**Configuration:**
- Use custom filter with JavaScript
- Check file properties in event listener
- Store validation result in localStorage

---

#### Background Download Check

**Scenario:** Continue automation while monitoring downloads.

**Configuration:**
- Run in background: Enabled
- Filename: `.*data\.csv$`
- Status: Complete

## Related Field Types

- [JavaScript Code](/documentation/field-types/javascript-code) - For custom filtering logic
- [getLocalStorage](/documentation/functions) - To retrieve filter results
- [setLocalStorage](/documentation/functions) - To store filter results