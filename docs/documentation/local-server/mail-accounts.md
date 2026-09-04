# Mail Accounts {#mail-accounts}

Configure and manage the email accounts used for automated mail operations through the Local Server.

---

## Adding an Account {#adding-account}

To add a new email account, click the **+ Add Account** button in the Local Server dashboard. You will need to provide the following details:

| Field | Description | Example |
|---|---|---|
| **Account Name** | A friendly name to identify the account | `Primary Gmail`, `Support Desk` |
| **IMAP Host** | The IMAP server address | `imap.gmail.com` |
| **IMAP Port** | The port for secure IMAP connections | `993` |
| **SMTP Host** | The SMTP server address | `smtp.gmail.com` |
| **SMTP Port** | The port for secure SMTP connections | `587` or `465` |
| **Email Address** | The full email address of the account | `user@gmail.com` |
| **App Password** | Application-specific password (required for 2FA providers) | Generated App Password |

### Common Email Provider Settings

Use these configurations for standard email services:

| Provider | IMAP Host | IMAP Port | SMTP Host | SMTP Port |
|---|---|---|---|---|
| **Gmail** | `imap.gmail.com` | `993` | `smtp.gmail.com` | `587` / `465` |
| **Yahoo** | `imap.mail.yahoo.com` | `993` | `smtp.mail.yahoo.com` | `465` / `587` |
| **Outlook / Office 365** | `outlook.office365.com` | `993` | `smtp.office365.com` | `587` |
| **iCloud** | `imap.mail.me.com` | `993` | `smtp.mail.me.com` | `587` |

:::tip IMAP Requirement
Ensure that **IMAP Access** is enabled in your email provider's account security settings before attempting to connect. For accounts with Two-Factor Authentication (2FA) enabled (such as Gmail), generate an **App Password** instead of using your primary login password.
:::

---

## Account Management {#account-management}

Once an account is created, it will appear as an active card in the **Mail Accounts** list:

| Action | Purpose |
|---|---|
| **Test IMAP** | Verifies inbox connection by attempting to authenticate with the IMAP server. |
| **Test SMTP** | Verifies mail transmission by attempting a handshake with the SMTP server. |
| **Edit Account** | Opens the account modal to modify host, port, or credential settings. |
| **Delete Account** | Removes the email account from the Local Server. |
| **View Emails** | Opens the built-in email viewer for this specific inbox. |

---

## Other Actions {#other-actions}

- **Compose**: Opens a composer window to manually draft and send an email through the selected account.

