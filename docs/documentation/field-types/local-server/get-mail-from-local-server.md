# Get Mail from Local Server

Retrieve email content directly from a local server. This field type allows you to automate workflows that depend on incoming emails, such as extracting OTPs or verification links.

## Requirements {#requirements}

Before using this field type, ensure you have completed the following:
1.  **Install Local Server**: Download and run the Local Server on your PC as described in the **[Local Server Installation](/documentation/local-server/local-server#installation)** guide.
2.  **Add Account**: Add your email account in the Local Server dashboard as described in the **[Mail Accounts](/documentation/local-server/mail-accounts)** guide.
3.  **Verify Connection**: Use the **Test IMAP** button in the server dashboard to ensure that the server can successfully connect to your email provider.

Once the connection is verified, you can proceed with the field configuration below.

## Options

| Option | Description | Required |
|--------|-------------|----------|
| [**Mail Account Address**](#mail-account-address) | The email address configured on your local server. | Yes |
| [**Search Query**](#search-query) | Set the search criteria in the **Field Default Value**. | No |
| [**Filter with Regular Expression**](#filter-with-regular-expression) | Enable filtering the scraped mail data using a regex pattern. | No |
| **Regular Expression** | The regex pattern used to find specific data. | Conditional |
| **Regular Expression Replace** | Replace matched text with a specific string. | No |
| [**Remove mail from UNREAD label after it is read?**](#remove-mail-from-unread-label-after-it-is-read) | Automatically marks the mail as read or removes the unread flag. | No |
| [**Are you using custom javascript function for return field responses?**](#custom-javascript-function) | Enable advanced processing via a custom JavaScript listener. | No |

## Configuration Details

### Mail Account Address {#mail-account-address}
Enter the full email address that matches the account configured on your local server.
- **Example:** `customer-support@company.com`

### Search Query {#search-query}
You can control which emails are retrieved by setting a query in the **Field Default Value** of the configuration.
- **Example:** `UNSEEN`
- **Example:** `UNSEEN FROM:ctechhindi@gmail.com`

#### Common Search Queries

| Query | Description |
|-------|-------------|
| `UNSEEN` | Get unread emails |
| `SEEN` | Get read emails |
| `FROM:amazon.com` | Emails from amazon.com domain |
| `FROM:newsletter@example.com` | Emails from specific sender |
| `SUBJECT:invoice` | Emails with "invoice" in subject |
| `invoice` | Emails containing "invoice" anywhere |
| `SINCE 1-Feb-2026` | Emails since February 1st, 2026 |
| `BEFORE 1-Jan-2026` | Emails before January 1st, 2026 |

#### Combined Queries

| Query | Description |
|-------|-------------|
| `UNSEEN FROM:sender@example.com` | Unread emails from specific sender |
| `SEEN SUBJECT:order` | Read emails with "order" in subject |
| `UNSEEN SINCE 1-Mar-2026` | Unread emails since March 1st, 2026 |
| `FROM:amazon.com SUBJECT:delivery` | Emails from Amazon about delivery |


### Filter with Regular Expression {#filter-with-regular-expression}
When enabled, you can use standard Regex to extract parts of the email body, such as verification codes.
- **Regular Expression:** `OTP: (\d{4,6})`
- **Regular Expression Replace:** Use this to format the output if needed.

### Remove mail from UNREAD label after it is read? {#remove-mail-from-unread-label-after-it-is-read}

When enabled, the extension will automatically mark the email as read or remove the "UNREAD" label from the mail on the server after successful extraction.

### Custom JavaScript Function {#custom-javascript-function}
If you need complex logic (like parsing nested data or combining multiple fields), enable this option.

**Setup:**
1. Add a **JavaScript Code** field type **above** the `Get Mail from Local Server` field.
2. Toggle on the **"Are you using custom javascript function for return field responses?"** option.
3. Use the following code template:

```js
$fns.field.listener('EDF-FIELD-GET-MAIL-FROM-LOCAL-SERVER', (output, callback) => {
  console.log("REQUEST:", output);

  // Example: Post-process the retrieved mail content
  var returnText = "OTP: 1245";

  // Return the data to the extension
  callback({ status: true, message: "DONE", data: returnText });
  // Or handle errors: callback({ status: false, message: "ERROR" });
});

$fns.return("1");
```
