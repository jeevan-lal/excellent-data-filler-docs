# Google Service

Connect multiple Google accounts with different permissions for Sheets and Gmail integration.

## Overview

The Google Service feature allows you to connect and manage multiple Google accounts within the extension. You can grant specific permissions for Google Sheets and Gmail access, enabling seamless integration with Google's services for automation workflows.

## Key Features

- **Multiple Account Support** - Connect multiple Google accounts simultaneously
- **Granular Permissions** - Choose specific permissions for each account
- **Google Sheets Access** - Read and write spreadsheet data
- **Gmail Access** - Send and read emails programmatically
- **Account Management** - Easy connection and disconnection of accounts
- **Permission Control** - Enable/disable permissions as needed

## Connecting a Google Account

### Step 1: Access Google Service Settings

1. Navigate to **Services** in the sidebar
2. Click on **Google Service**
3. You'll see the Google Services page

### Step 2: Select Permissions

Choose the permissions you want to grant to your Google account. At least one permission must be selected.

#### Available Permissions:

**Google Sheets Access**
- **Permission**: Read and write spreadsheets
- **Use Case**: Fetch data from Google Sheets, write automation results
- **Field Types**: Fetch Google Sheet Data

**Gmail Access**
- **Permission**: Send and read emails
- **Use Case**: Fetch emails, send automated emails, extract verification codes
- **Field Types**: Fetch Mail (Gmail), Fetch Single Mail (Gmail), Send Mail (Gmail)

### Step 3: Connect Account

1. Select the desired permissions (Google Sheets Access and/or Gmail Access)
2. Click the **"Connect Google Account"** button
3. You'll be redirected to Google's authentication page
4. Sign in with your Google account
5. Grant the requested permissions
6. You'll be redirected back to the extension

## Connected Accounts

Once connected, your accounts will appear in the **Connected Accounts** section.

### Account Information

Each connected account displays:

- **Profile** - Profile picture and initial
- **Account** - Name and email address
- **Permissions** - Active permissions (Sheets, Gmail)
- **Connected** - Connection date and time, expiration status
- **Actions** - Reconnect or disconnect options

### Account Status

**Active Account:**
- Shows connection date and time
- Displays active permissions as badges
- Available for use in field types

**Expired Account:**
- Shows "Expired" status
- Requires reconnection
- Click reconnect button to refresh permissions

## Managing Accounts

### Reconnect Account

If an account expires or loses permissions:

1. Click the **reconnect button** (green icon) next to the account
2. Re-authenticate with Google
3. Grant permissions again
4. Account will be refreshed

### Disconnect Account

To remove an account:

1. Click the **disconnect button** (red icon) next to the account
2. Confirm disconnection
3. Account will be removed from the list

### Disconnect All Accounts

To remove all connected accounts at once:

1. Click the **"Disconnect All Accounts"** button (top right)
2. Confirm the action
3. All accounts will be disconnected

## Using Google Service in Field Types

### Google Sheets Integration

**Field Types:**
- [Fetch Google Sheet Data](/documentation/field-types/google-service-sheet/fetch-google-sheet-data)

**Requirements:**
- Connected Google account with **Google Sheets Access** permission
- Spreadsheet ID
- Sheet name and range

**Example Use Cases:**
- Import data from Google Sheets for form filling
- Sync spreadsheet data with web forms
- Use Google Sheets as a data source

### Gmail Integration

**Field Types:**
- [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail)
- [Fetch Single Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-single-mail-gmail)
- [Send Mail (Gmail)](/documentation/field-types/google-service-gmail/send-mail-gmail)

**Requirements:**
- Connected Google account with **Gmail Access** permission
- Search queries for fetching emails
- Email content for sending

**Example Use Cases:**
- Fetch verification codes from emails
- Monitor inbox for specific messages
- Send automated email notifications
- Extract data from email content

## Permission Scopes

### Google Sheets Access

**Scopes Granted:**
- `https://www.googleapis.com/auth/spreadsheets` - Read and write spreadsheets
- `https://www.googleapis.com/auth/drive.readonly` - View Google Drive files

**What You Can Do:**
- Read data from any spreadsheet you have access to
- Write data to spreadsheets
- Create new spreadsheets
- Update existing spreadsheet content

### Gmail Access

**Scopes Granted:**
- `https://www.googleapis.com/auth/gmail.readonly` - Read emails
- `https://www.googleapis.com/auth/gmail.send` - Send emails
- `https://www.googleapis.com/auth/gmail.modify` - Modify email labels

**What You Can Do:**
- Read emails from inbox
- Search emails with queries
- Send emails programmatically
- Mark emails as read/unread
- Manage email labels

## Security & Privacy

### Data Security

- **OAuth 2.0 Authentication** - Secure authentication using Google's OAuth 2.0
- **Token Storage** - Tokens are stored securely in the extension
- **No Password Storage** - Your Google password is never stored
- **Revocable Access** - You can revoke access anytime from Google Account settings

### Privacy

- **Minimal Permissions** - Only request permissions you need
- **User Control** - You control which accounts to connect
- **No Data Sharing** - Your data is not shared with third parties
- **Local Processing** - Data processing happens locally in your browser

### Revoking Access

To revoke extension access from Google:

1. Go to [Google Account Permissions](https://myaccount.google.com/permissions)
2. Find "Excellent Data Filler" in the list
3. Click **Remove Access**
4. Confirm revocation

## Best Practices

### ✅ Do's

- **Use separate accounts** - Use different Google accounts for different purposes
- **Grant minimal permissions** - Only enable permissions you need
- **Monitor expiration** - Reconnect accounts before they expire
- **Test connections** - Verify account access before automation
- **Keep accounts organized** - Use descriptive account names

### ❌ Don'ts

- **Don't share accounts** - Each user should use their own Google account
- **Don't grant unnecessary permissions** - Only enable required permissions
- **Don't ignore expiration** - Reconnect expired accounts promptly
- **Don't use personal accounts for automation** - Consider using dedicated accounts
- **Don't forget to disconnect** - Remove unused accounts

## Troubleshooting

### Cannot Connect Account

**Solution:** 
- Check your internet connection
- Ensure pop-ups are allowed for the extension
- Try a different browser or incognito mode
- Clear browser cache and cookies

### Permission Denied Errors

**Solution:**
- Verify the account has the required permissions
- Reconnect the account to refresh permissions
- Check if the account has access to the resource (spreadsheet/email)

### Account Shows as Expired

**Solution:**
- Click the reconnect button
- Re-authenticate with Google
- Grant permissions again

### Cannot Access Spreadsheet/Email

**Solution:**
- Verify the Google account has access to the resource
- Check if the correct account is selected in field settings
- Ensure permissions are granted correctly

## Related Documentation

- [Google Service - Sheet](/documentation/field-types/google-service-sheet)
- [Google Service - Gmail](/documentation/field-types/google-service-gmail)
- [Fetch Google Sheet Data](/documentation/field-types/google-service-sheet/fetch-google-sheet-data)
- [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail)
- [Fetch Single Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-single-mail-gmail)
- [Send Mail (Gmail)](/documentation/field-types/google-service-gmail/send-mail-gmail)
- [Field Types](/documentation/form-fields/field-types)
