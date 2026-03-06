# Mail Accounts {#mail-accounts}

Configure and manage the email accounts used for automated mail operations through the Local Server.

## ➕ Adding an Account {#adding-account}

To add a new email account, click the **+ Add Account** button. You will need to provide the following details:

| Field | Description |
|-------|-------------|
| **Account Name** | A friendly name to identify the account (e.g., "Primary Gmail"). |
| **IMAP Host** | The IMAP server address (e.g., `imap.gmail.com`). |
| **IMAP Port** | The port for IMAP connections (e.g., `993`). |
| **SMTP Host** | The SMTP server address (e.g., `smtp.gmail.com`). |
| **SMTP Port** | The port for SMTP connections (e.g., `587`). |
| **Email Address** | The full email address of the account. |
| **App Password** | The application-specific password (required for Gmail and other providers). |

### Common Email Provider Settings

Use these settings for popular email services. Note that for most services, you must use an **App Password** instead of your regular password.

| Provider | IMAP Host | IMAP Port | SMTP Host | SMTP Port |
|----------|-----------|-----------|-----------|-----------|
| **Gmail** | `imap.gmail.com` | `993` | `smtp.gmail.com` | `587` or `465` |
| **Yahoo** | `imap.mail.yahoo.com` | `993` | `smtp.mail.yahoo.com` | `465` or `587` |
| **Outlook** | `outlook.office365.com` | `993` | `smtp.office365.com` | `587` |
| **iCloud** | `imap.mail.me.com` | `993` | `smtp.mail.me.com` | `587` |

:::tip
Always ensure that **IMAP Access** is enabled in your email provider's settings before attempting to connect. Search `"How to enable IMAP on gmail account"`
:::

## 🛠️ Account Management {#account-management}

Once an account is added, it will appear as a card in the **Mail Accounts** list. Each card features several actions on the right side:

| Action | Icon | Description |
|--------|------|-------------|
| **Test IMAP** | 🔄 | Verifies the receiving settings by attempting to connect to the IMAP server. |
| **Test SMTP** | 🚀 | Verifies the sending settings by attempting to connect to the SMTP server. |
| **Edit Account** | ✏️ | Opens the account configuration modal to update settings. |
| **Delete Account** | 🗑️ | Removes the account from the Local Server. |
| **View Emails** | ➡️ | Opens the email viewer for this specific account. |

## 📝 Other Actions {#other-actions}

- **Compose**: Opens a window to manually write and send an email through the selected account.
