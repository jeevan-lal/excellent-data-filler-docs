---
prev:
  text: "Form Error Message"
  link: "/documentation/field-types/advance/form-error-message"
next:
  text: "2Captcha"
  link: "/documentation/field-types/captcha-solution/2captcha"
---

# Check Downloads {#check-downloads}

Monitor, verify, and synchronize browser download tasks during automated workflows, with support for automated click triggers, regex filename matching, and custom status event listeners.

---

## Overview {#overview}

Web automation frequently involves generating and exporting files (such as reports, PDFs, exported spreadsheets, or invoices). The **Check Downloads** field type interacts directly with the browser's download manager, enabling you to:

- Click download buttons or links automatically.
- Detect when specific files begin downloading.
- Pause execution until downloads reach completion (`complete`) or detect broken network connections.
- Run download monitoring asynchronously in the background while subsequent fields proceed.

---

## Configuration Options {#configuration-options}

| Option | Description | Required |
|---|---|---|
| **Run the action process in the background?** | Runs monitoring in the background while immediately executing the next form field. | No |
| **Do you want to click on an element?** | Simulates a click on a target button or link before monitoring downloads. | No |
| **Enter Element Selector/Xpath** | CSS selector or XPath targeting the download trigger button. | When click enabled |
| **Filename** | Regex pattern used to identify specific files in the browser download list. | No |
| **Downloads Item Status** | Target status to check (`Progress`, `Complete`, `Broke Connection`). | Yes |
| **Wait until the download items status matches** | Blocks subsequent execution until the specified download status is achieved. | No |

---

## Detailed Settings Breakdown {#detailed-settings}

### Run in Background

- **Toggle**: `Run the action process in the background?`
- **Behavior**: When enabled, the field initiates download tracking in a non-blocking background thread. The extension proceeds immediately to the next form field without pausing.
- **Use Case**: Downloading large files in parallel while continuing form data entry.

---

### Click on Element

- **Toggle**: `Do you want to click on an element?`
- **Behavior**: Dispatches an authentic click event on the specified selector before initiating download checks.
- **Selector Types**:
  - **CSS Selector**: `#download-btn`, `button.export-pdf`, `a[data-action="download"]`
  - **XPath**: `//button[contains(text(), 'Export Report')]`, `//a[contains(@href, '.pdf')]`

---

### Filename Pattern Matching

- **Input Location**: Field Default Value or Excel Column variable
- **Behavior**: Evaluates files in the active browser download queue using Regular Expressions (RegEx). If left empty, the field monitors all active downloads.

#### Common Regex Examples

| Target Filename / Directory | Regex Pattern | Description |
|---|---|---|
| `report.pdf` | `.*report\.pdf$` | Matches any file ending with `report.pdf` |
| `monthly-report.pdf` | `.*-report\.pdf$` | Hyphenated report naming |
| `invoice_2025_101.pdf` | `.*invoice_\d{4}_\d+\.pdf$` | Invoice containing year and dynamic ID |
| `export_data.xlsx` | `.*export_data\.xlsx$` | Excel spreadsheet export |
| `statement(1).pdf` | `.*statement\(\d+\)\.pdf$` | Handles duplicate browser download naming |
| `REPORT_FINAL.PDF` | `.*report_final\.pdf$` *(i)* | Case-insensitive match |

---

### Downloads Item Status

Select the target condition to evaluate:

- **Progress**: The file is actively transferring bytes over the network.
- **Complete**: The download has completed and the file exists on local storage.
- **Broke Connection**: The download stalled, timed out, or encountered an interrupted network socket.

---

### Wait Until Status Matches

- **Toggle**: `Wait until the download items status matches`
- **Behavior**: When enabled, execution pauses until the file matches the desired status. If disabled, the field checks the instantaneous status once and proceeds immediately.

---

## Advanced Custom Filter via JavaScript {#custom-filter}

For complex criteria (e.g., verifying file size thresholds, inspecting MIME types, or handling multiple files), use a **JavaScript Code** field that subscribes to the `EDF-CHECK-DOWNLOADS-RESPONSE` event.

### Implementation Pattern

1. **Step 1: JavaScript Code Field**: Attach an event listener for `EDF-CHECK-DOWNLOADS-RESPONSE`.
2. **Step 2: Check Downloads Field**: Trigger the download check to dispatch the event payload.
3. **Step 3: getLocalStorage Function**: Read validation flags stored by the listener.

### Event Listener Script

```javascript
// Register event listener
window.addEventListener('EDF-CHECK-DOWNLOADS-RESPONSE', (e) => {
  if (e && e.detail && e.detail.response) {
    const downloads = e.detail.response;
    
    for (let i = 0; i < downloads.length; i++) {
      const item = downloads[i];
      
      // Example: Check for completed PDFs over 500 KB
      if (item.filename.endsWith('.pdf') && item.state === 'complete' && item.fileSize > 500000) {
        $fns.setLocalStorage('download-verified', '1');
        break;
      }
    }
  }
});

// Always return a value to advance execution
$fns.return('1');
```

### Download Item Object Schema

| Property | Type | Description |
|---|---|---|
| `filename` | string | Full local absolute path of the downloaded file. |
| `state` | string | Download state: `"in_progress"`, `"complete"`, or `"interrupted"`. |
| `fileSize` | number | Total file size in bytes. |
| `bytesReceived` | number | Bytes downloaded so far. |
| `mime` | string | MIME type (e.g., `application/pdf`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`). |
| `url` | string | Original source URL of the download. |
| `finalUrl` | string | Final download destination URL after redirects. |
| `canResume` | boolean | Indicates if an interrupted download can resume. |

---

## Practical Examples {#usage-examples}

### Example 1: Trigger Export and Wait for PDF

```text
Field Type: Check Downloads
Do you want to click on an element?: Enabled
Enter Element Selector/Xpath: button#btn-export-pdf
Filename: .*monthly_summary\.pdf$
Downloads Item Status: Complete
Wait until status matches: Enabled
```

### Example 2: Dynamic Filenames from Excel

```text
Field Type: Check Downloads
Filename (Spreadsheet Column): {$InvoiceNumber$}
Downloads Item Status: Complete
Wait until status matches: Enabled
```

### Example 3: Background Batch Download Monitoring

```text
Field Type: Check Downloads
Run the action process in the background?: Enabled
Filename: .*archive_.*\.zip$
Downloads Item Status: Complete
```

---

## Best Practices {#best-practices}

- **Test Selectors First**: Ensure the button selector triggers the native browser download prompt.
- **Escape Regex Characters**: Remember to escape dots (`\.`) and parentheses (`\(` and `\)`) when targeting filenames.
- **Account for Network Latency**: When triggering large file exports, ensure sufficient timeouts or enable **Wait until status matches**.
- **Inspect Browser Permissions**: Ensure the browser is configured to allow automatic downloads without blocking consecutive files.

---

## Related Documentation {#related-documentation}

- <img src="/svg/code.svg" class="doc-icon" /> [JavaScript Code Field](/documentation/field-types/javascript-code)
- <img src="/svg/form.svg" class="doc-icon" /> [Form Fields Overview](/documentation/form-fields/field)
- <img src="/svg/settings.svg" class="doc-icon" /> [Field Settings](/documentation/form-fields/field-settings)
- <img src="/svg/beaker.svg" class="doc-icon" /> [Execution Logs](/documentation/logs)