---
prev:
  text: "Gmail API Search Queries"
  link: "/documentation/field-types/google-service-gmail/gmail-api-search-queries"
next:
  text: "Fetch Google Sheet Data"
  link: "/documentation/field-types/google-service-sheet/fetch-google-sheet-data"
---

# Send Mail (Gmail) {#send-mail-gmail}

Send automated emails programmatically through Gmail with support for HTML templates, dynamic spreadsheet variables, file attachments, and multiple recipients.

---

## Overview {#overview}

The **Send Mail (Gmail)** field type enables automated outbound email communication directly from form routines. Whether dispatching confirmation receipts, notifying team members of form completion, or emailing generated `.xlsx` reports and PDF files, this field leverages the Google Gmail API to deliver messages securely.

---

## Configuration Options {#configuration-options}

| Option | Type | Description | Required |
|---|---|---|---|
| **Google Service Account** | Dropdown | Logged-in Google account used as the sender. | Yes |
| **To** | Input Tags | Comma-separated list of recipient email addresses. | Yes |
| **Subject** | Text Input | Email subject line (supports dynamic variables). | Yes |
| **Enable Attachments** | Toggle Switch | Enables sending one or more file attachments. | No |
| **Attachments URL/Path** | Text Input | Local file paths or URLs to attach (comma-separated). | When attachments enabled |
| **Enable Custom File Names** | Toggle Switch | Overrides raw attachment filenames with custom labels. | No |
| **Attachments File Name** | Text Input | Custom file names for attachments (comma-separated). | When custom names enabled |
| **Attachments File MIME Type** | Text Input | Explicit MIME types for attached files. | When custom names enabled |
| **Enable Retry on Failure** | Toggle Switch | Re-attempts sending if API connection errors occur. | No |
| **Max Retries** | Number Input | Maximum number of send retry attempts. | When retry enabled |
| **Email Body** | Default Value | Message content (supports plain text, HTML, and dynamic variables). | Yes |

---

## Detailed Configuration Breakdown {#option-details}

### Google Service Account

Select your authorized account from [Google Service](/documentation/services/google-service). Outbound emails are sent from this address.

### Recipient Addresses (`To`)

Specify destination addresses separated by commas:
```text
client@example.com, manager@company.com
```
You can also inject spreadsheet column values:
```text
{$CustomerEmail$}
```

### Subject Line

Define the message subject, which can incorporate dynamic row data:
```text
Order Confirmation - #{$OrderID$} for {$CustomerName$}
```

### Attachments

- **Attachments URL/Path**: Provide local paths (e.g., `C:\Reports\Invoice.pdf`) or web URLs.
- **Custom File Names**: Rename generated exports (e.g., `Billing_Report_{$Date$}.xlsx`) before dispatch.

### Email Body Templating

The email body supports HTML markup for branded formatting:

```html
<p>Hello <strong>{$Name$}</strong>,</p>
<p>Your application for <em>{$Service$}</em> was processed successfully.</p>
<br/>
<p>Confirmation Reference: <code>{$RefNumber$}</code></p>
```

---

## Practical Examples {#examples}

### Example 1: Customer Submission Confirmation

```text
Google Service Account: support@mybusiness.com
To: {$Email$}
Subject: Submission Received - Ref: {$ReferenceID$}
Email Body:
Thank you {$FullName$}, we have received your form details.
Your reference code is {$ReferenceID$}.
```

### Example 2: Dispatching Exported Report Attachment

```text
Google Service Account: automated@mybusiness.com
To: audit@company.com
Subject: Daily Automation Report - {$CurrentDate$}
Enable Attachments: ON
Attachments URL/Path: D:\Reports\Daily_Export.xlsx
Enable Custom File Names: ON
Attachments File Name: Daily_Export_{$CurrentDate$}.xlsx
```

---

## Best Practices {#best-practices}

### Do's

- **Use Column Variables**: Dynamically personalize messages using spreadsheet tags like `{$CustomerName$}` and `{$Email$}`.
- **Verify Attachment Paths**: Ensure local file paths exist before triggering execution.
- **Enable Retries on Network Dependencies**: Turn ON **Enable Retry on Failure** for resilient unattended workflows.

### Don'ts

- **Do Not Send Unvalidated Emails**: Test email templates with your own email before running large batch workflows.
- **Do Not Exceed Gmail API Quotas**: Adhere to standard Google Workspace daily sending quotas.

---

## Troubleshooting {#troubleshooting}

| Issue | Likely Cause | Solution |
|---|---|---|
| **Sending fails with 403 Forbidden** | Gmail API send scope not granted | Re-authenticate your Google account under [Google Service](/documentation/services/google-service). |
| **Attachment missing in delivered email** | Local file path invalid or file locked | Verify the absolute file path on disk. |
| **HTML tags visible as plain text** | Raw unescaped brackets in plain text mode | Ensure body is formatted with standard semantic HTML tags. |

---

## Related Documentation {#related}

- <img src="/svg/chat.svg" class="doc-icon" /> [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail)
- <img src="/svg/globe.svg" class="doc-icon" /> [Gmail API Search Queries](/documentation/field-types/google-service-gmail/gmail-api-search-queries)
- <img src="/svg/settings.svg" class="doc-icon" /> [Google Service Account Setup](/documentation/services/google-service)
- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template (.xlsx)](/documentation/site/site-excel-template)
