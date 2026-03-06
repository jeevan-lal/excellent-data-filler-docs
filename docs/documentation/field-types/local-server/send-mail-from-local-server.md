# Send Mail from Local Server

Send emails directly from your local server. This field type is useful for automated notifications, sharing scraped results, or triggering email-based workflows.

## Requirements {#requirements}

Before using this field type, ensure you have completed the following:
1.  **Install Local Server**: Download and run the Local Server on your PC as described in the **[Local Server Installation](/documentation/local-server/local-server#installation)** guide.
2.  **Add Account**: Add your email account in the Local Server dashboard as described in the **[Mail Accounts](/documentation/local-server/mail-accounts)** guide.
3.  **Verify Connection**: Use the **Test SMTP** and **Test IMAP** buttons in the server dashboard to ensure that the server can successfully communicate with your email provider.

Once the connection is verified, you can proceed with the field configuration below.

## Options

| Option | Description | Required |
|--------|-------------|----------|
| [**Mail Account Address**](#mail-account-address) | The email address configured on your local server. | Yes |
| [**To**](#to) | The recipient's email address. | Yes |
| [**Subject**](#subject) | The subject line of the email. | Yes |
| [**Mail Body**](#mail-body) | Set the email content in the **Field Default Value**. | Yes |
| [**Are you using HTML in mail body text?**](#are-you-using-html-in-mail-body-text) | Enable this if your mail body contains HTML tags. | No |

## Configuration Details

### Mail Account Address {#mail-account-address}
Enter the full email address of the sender account as configured on your local server.
- **Example:** `noreply@yourdomain.com`

### To {#to}
Specify the recipient's email address. You can use fixed addresses or [Variables](/documentation/variable) to dynamically set the recipient.
- **Example:** `recipient@example.com`

### Subject {#subject}
Enter the subject of the email.
- **Example:** `Automation Update: Form Successfully Filled`

### Mail Body {#mail-body}
The content of the email is taken from the **Field Default Value** of this field configuration. You can include plain text or variables here.
- **Example:** `Hello, the process is complete.`

### Are you using HTML in mail body text? {#are-you-using-html-in-mail-body-text}
If you want to send formatted emails (with bold text, links, or tables), enable this option and provide HTML code in the **Mail Body** (Field Default Value). You can also use [Variables](/documentation/variable) within your HTML code for dynamic content.

**Example HTML Body:**
```html
<p>Hello <b>{$firstName$}</b>,</p>
<p>Your application has been processed.</p>
<a href="https://example.com">View Details</a>
```
