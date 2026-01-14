# Send Mail (Gmail)

Send emails through Gmail programmatically with support for attachments and custom formatting.

## Overview

The Send Mail (Gmail) field type allows you to send emails directly from your automation workflows using Gmail. You can send emails with custom content, attachments, and multiple recipients, making it perfect for automated notifications, confirmations, and communication tasks.

## Configuration Options

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| [Google Service Account](#google-service-account) | Dropdown | Select logged-in Google account | **Yes** |
| [To](#to) | Input Tags | Recipient email addresses | **Yes** |
| [Subject](#subject) | Input | Email subject line | **Yes** |
| [Enable Attachments](#enable-attachments) | Switch | Send email with attachments | No |
| [Attachments URL/Path](#attachments-url-path) | Input | File URLs or paths (comma separated) | No |
| [Enable Custom File Names](#enable-custom-file-names) | Switch | Set custom file names and MIME types | No |
| [Attachments File Name](#attachments-file-name) | Input | Custom file names (comma separated) | No |
| [Attachments File MIME Type](#attachments-file-mime-type) | Input | File MIME types (comma separated) | No |
| [Enable Retry on Failure](#enable-retry-on-failure) | Switch | Retry if sending fails | No |
| [Max Retries](#max-retries) | Input | Maximum retry attempts | No |
| [Email Body](#email-body) | Default Value | Email body content | **Yes** |

---

## Option Details

### Google Service Account {#google-service-account}

Select the Google account you want to use for sending emails.

**Type:** Dropdown

**Description:** Choose from your logged-in Google accounts. Emails will be sent from this account.

**Example:**
- `user@gmail.com`
- `work@company.com`

---

### To {#to}

Recipient email addresses.

**Type:** Input Tags

**Description:** Enter one or more email addresses to send the email to. You can add multiple recipients.

**Format:**
```
recipient@example.com
user1@gmail.com, user2@gmail.com
contact@company.com
```

**Example:**
```
john@example.com
support@company.com, admin@company.com
customer@domain.com
```

---

### Subject {#subject}

Email subject line.

**Type:** Input

**Description:** The subject line of your email.

**Example:**
```
Order Confirmation
Your Verification Code
Password Reset Request
Welcome to Our Service
```

**Tips:**
- Keep it clear and concise
- Use variables for dynamic content: `Order #{orderId} Confirmed`
- Avoid spam trigger words

---

### Enable Attachments {#enable-attachments}

Enable sending email with file attachments.

**Type:** Switch

**Options:**
- **ON** - Include attachments
- **OFF** - Send without attachments

---

### Attachments URL/Path {#attachments-url-path}

File URLs or local paths to attach to the email.

**Type:** Input

**Description:** Provide file URLs or paths, separated by commas.

**Format:**
```
https://example.com/file1.pdf, https://example.com/file2.jpg
C:\Documents\invoice.pdf, C:\Images\logo.png
/path/to/file1.pdf, /path/to/file2.doc
```

**Supported Sources:**
- HTTP/HTTPS URLs
- Local file paths
- Cloud storage URLs

**Example:**
```
https://cdn.example.com/invoice.pdf
C:\Reports\monthly-report.xlsx
https://storage.googleapis.com/bucket/document.pdf, C:\Files\attachment.zip
```

**Note:** This option only works when [Enable Attachments](#enable-attachments) is turned ON.

---

### Enable Custom File Names {#enable-custom-file-names}

Set custom file names and MIME types for attachments.

**Type:** Switch

**Description:** Override default file names and specify MIME types for attachments.

**Options:**
- **ON** - Use custom names and MIME types
- **OFF** - Use original file names

**Note:** This option only works when [Enable Attachments](#enable-attachments) is turned ON.

---

### Attachments File Name {#attachments-file-name}

Custom file names for attachments.

**Type:** Input

**Description:** Provide custom names for each attachment, separated by commas. Order must match attachment URLs.

**Format:**
```
invoice.pdf, receipt.jpg
monthly-report.xlsx
document1.pdf, document2.docx, image.png
```

**Example:**
```
Invoice_Jan2024.pdf
Order_12345_Receipt.jpg
Report.xlsx, Summary.pdf
```

**Note:** This option only works when [Enable Custom File Names](#enable-custom-file-names) is turned ON.

---

### Attachments File MIME Type {#attachments-file-mime-type}

MIME types for attachments.

**Type:** Input

**Description:** Specify MIME type for each attachment, separated by commas. Order must match attachment URLs.

**Common MIME Types:**

| File Type | MIME Type |
|-----------|-----------|
| PDF | `application/pdf` |
| JPEG Image | `image/jpeg` |
| PNG Image | `image/png` |
| Word Document | `application/vnd.openxmlformats-officedocument.wordprocessingml.document` |
| Excel Spreadsheet | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` |
| Text File | `text/plain` |
| ZIP Archive | `application/zip` |
| CSV File | `text/csv` |

**Example:**
```
application/pdf
image/jpeg, application/pdf
application/pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
```

**Note:** This option only works when [Enable Custom File Names](#enable-custom-file-names) is turned ON.

---

### Enable Retry on Failure {#enable-retry-on-failure}

Automatically retry sending if it fails.

**Type:** Switch

**Description:** When enabled, the system will retry sending the email if an error occurs.

**Options:**
- **ON** - Enable retry on failure
- **OFF** - Don't retry on failure

**Use Cases:**
- Network connectivity issues
- Temporary API errors
- Rate limiting scenarios

---

### Max Retries {#max-retries}

Maximum number of retry attempts if sending fails.

**Type:** Input

**Description:** Specify how many times the system should retry before giving up.

**Example:**
```
3    (Retry up to 3 times)
5    (Retry up to 5 times)
10   (Retry up to 10 times)
```

**Note:** This option only works when [Enable Retry on Failure](#enable-retry-on-failure) is turned ON.

---

### Email Body {#email-body}

The content of your email.

**Type:** Default Value Field

**Description:** The main body content of the email. Supports both plain text and HTML.

:::tip Set Body in Default Value
You can set the body of the mail in the **"If excel column value is empty then fill this default value"** field option.

**Plain Text Example:**
```
Hello {$name$},

Thank you for your order {$orderId$}.
Your order has been confirmed and will be shipped soon.

Best regards,
The Team
```

**HTML Example:**
```html
<html>
<body>
  <h1>Order Confirmation</h1>
  <p>Hello {$name$},</p>
  <p>Your order <strong>{$orderId$}</strong> has been confirmed.</p>
  <p>Thank you for your purchase!</p>
</body>
</html>
```
:::

**Formatting Options:**
- **Plain Text** - Simple text without formatting
- **HTML** - Rich formatting with HTML tags
- **Variables** - Use `{$columnName$}` for dynamic content

---

## Use Cases

- **Send order confirmations** - Notify customers about successful orders
- **Send verification emails** - Send OTP or verification links
- **Send automated notifications** - Trigger emails based on events
- **Send reports** - Email automated reports with attachments
- **Send password reset emails** - Automated password reset workflow
- **Send welcome emails** - Onboard new users with welcome messages

## Practical Examples

### Example 1: Send Order Confirmation

**To:** `{$customerEmail$}`

**Subject:** `Order {$orderId$} Confirmed`

**Body:**
```
Hello {$customerName$},

Thank you for your order!

Order Details:
- Order ID: {$orderId$}
- Total Amount: {$totalAmount$}
- Estimated Delivery: {$deliveryDate$}

We'll send you a tracking number once your order ships.

Best regards,
Customer Support
```

---

### Example 2: Send Invoice with Attachment

**To:** `{$clientEmail$}`

**Subject:** `Invoice for {$month$} - {$companyName$}`

**Enable Attachments:** `ON`

**Attachments URL:** `https://storage.example.com/invoices/{$invoiceId$}.pdf`

**Custom File Name:** `Invoice_{$invoiceId$}.pdf`

**MIME Type:** `application/pdf`

**Body:**
```html
<html>
<body>
  <h2>Invoice Attached</h2>
  <p>Dear {$clientName$},</p>
  <p>Please find attached the invoice for {$month$}.</p>
  <p>Amount Due: {$amount$}</p>
  <p>Due Date: {$dueDate$}</p>
  <p>Thank you for your business!</p>
</body>
</html>
```

---

### Example 3: Send Verification Code

**To:** `{$userEmail$}`

**Subject:** `Your Verification Code`

**Body:**
```
Hello,

Your verification code is: {$verificationCode$}

This code will expire in 10 minutes.

If you didn't request this code, please ignore this email.

Best regards,
Security Team
```

---

### Example 4: Send Report with Multiple Attachments

**To:** `manager@company.com, team@company.com`

**Subject:** `Monthly Report - {$month$}`

**Enable Attachments:** `ON`

**Attachments URL:**
```
https://reports.example.com/sales.xlsx, https://reports.example.com/summary.pdf
```

**Custom File Names:**
```
Sales_Report_{$month$}.xlsx, Summary_{$month$}.pdf
```

**MIME Types:**
```
application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/pdf
```

**Body:**
```
Hi Team,

Please find attached the monthly reports for {$month$}.

Key Highlights:
- Total Sales: {$totalSales$}
- New Customers: {$newCustomers$}
- Growth Rate: {$growthRate$}%

Let me know if you have any questions.

Best regards
```

---

## Best Practices

### ✅ Do's

- **Use clear subject lines** - Make it easy to understand the email purpose
- **Personalize content** - Use variables for recipient-specific information
- **Test email templates** - Verify formatting before automation
- **Use HTML for rich formatting** - Enhance readability with HTML
- **Enable retry for important emails** - Ensure critical emails are sent
- **Validate email addresses** - Check recipient addresses are valid
- **Use appropriate MIME types** - Ensure attachments open correctly

### ❌ Don'ts

- **Don't send spam** - Only send emails to consenting recipients
- **Don't use misleading subjects** - Be honest about email content
- **Don't send large attachments** - Keep file sizes reasonable
- **Don't forget to test** - Always test before production use
- **Don't hardcode sensitive data** - Use variables for dynamic content
- **Don't ignore errors** - Monitor sending failures and retry

## Troubleshooting

### Email Not Sent

**Solution:** Check Google account permissions and verify recipient email addresses.

### Attachment Not Included

**Solution:** Verify file URLs are accessible and Enable Attachments is turned ON.

### Formatting Issues

**Solution:** Check HTML syntax and test email rendering in different clients.

### Rate Limit Errors

**Solution:** Enable retry mechanism and reduce sending frequency.

### Invalid MIME Type

**Solution:** Use correct MIME type for file format (see MIME types table above).

## Related Documentation

- [Google Service - Gmail](/documentation/field-types/google-service-gmail)
- [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail)
- [Field Types](/documentation/form-fields/field-types)
- [Variables](/documentation/variable)
- [Gmail API Documentation](https://developers.google.com/gmail/api)
- [MIME Types Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
