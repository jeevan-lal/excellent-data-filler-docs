# Fetch Mail (Gmail)

Retrieve multiple emails from Gmail based on search criteria and filters.

## Overview

The Fetch Mail (Gmail) field type allows you to search and retrieve emails from your Gmail account using powerful search queries and filters. You can fetch specific parts of emails, filter by labels, apply regular expressions, and automatically mark emails as read.

## Configuration Options

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| [Google Service Account](#google-service-account) | Dropdown | Select logged-in Google account | **Yes** |
| [Mail Parts](#mail-parts) | Input Tags | Select which mail parts to fetch | **Yes** |
| [Enable Max Results](#enable-max-results) | Switch | Limit number of results | No |
| [Max Results Count](#max-results-count) | Input | Number of results to return | No |
| [Use Gmail Labels](#use-gmail-labels) | Switch | Search in specific Gmail labels | No |
| [Gmail Label IDs](#gmail-label-ids) | Dropdown Multiple | Select Gmail labels to search | No |
| [Include Spam/Trash](#include-spam-trash) | Switch | Include spam and trash in results | No |
| [Enable Retry on Failure](#enable-retry-on-failure) | Switch | Retry if request fails | No |
| [Max Retries (Failure)](#max-retries-failure) | Input | Maximum retry attempts on failure | No |
| [Retry Until Mail Received](#retry-until-mail-received) | Switch | Keep retrying until mail is found | No |
| [Max Retries (Until Received)](#max-retries-until-received) | Input | Maximum retry attempts until mail received | No |
| [Timeout](#timeout) | Input | Timeout duration in seconds | No |
| [Enable Regex Filter](#enable-regex-filter) | Switch | Filter data with regular expression | No |
| [Regular Expression](#regular-expression) | Input | Regex pattern to match | No |
| [Regex Replace](#regex-replace) | Input | Replacement string for regex matches | No |
| [Remove UNREAD Label](#remove-unread-label) | Switch | Mark email as read after fetching | No |
| [Search Query](#search-query) | Default Value | Gmail search query | No |

---

## Option Details

### Google Service Account {#google-service-account}

Select the Google account you want to use for accessing Gmail.

**Type:** Dropdown

**Description:** Choose from your logged-in Google accounts. Make sure the selected account has Gmail access enabled.

**Example:**
- `user@gmail.com`
- `work@company.com`

---

### Mail Parts {#mail-parts}

Select which parts of the email you want to retrieve.

**Type:** Input Tags

**Available Parts:**
- `body` - Email body content
- `subject` - Email subject line
- `from` - Sender email address
- `snippet` - Short preview of email content
- `to` - Recipient email address(es)

**Example:**
```
body, subject, from
subject, snippet
body, from, to
```

---

### Enable Max Results {#enable-max-results}

Enable limiting the number of results returned.

**Type:** Switch

**Options:**
- **ON** - Limit number of results
- **OFF** - Return all matching results

---

### Max Results Count {#max-results-count}

Specify the maximum number of emails to return.

**Type:** Input

**Description:** Set how many emails should be fetched (Return Max Results).

**Example:**
```
1    (Return only 1 email)
5    (Return up to 5 emails)
10   (Return up to 10 emails)
50   (Return up to 50 emails)
```

**Note:** This option only works when [Enable Max Results](#enable-max-results) is turned ON.

---

### Use Gmail Labels {#use-gmail-labels}

Search emails in specific Gmail labels.

**Type:** Switch

**Description:** Enable this to filter emails by Gmail labels.

**Options:**
- **ON** - Search in selected labels only
- **OFF** - Search in all emails

---

### Gmail Label IDs {#gmail-label-ids}

Select which Gmail labels to search in.

**Type:** Dropdown Multiple

**Available Labels:**
- `INBOX` - Inbox emails
- `SPAM` - Spam folder
- `TRASH` - Trash/Deleted emails
- `UNREAD` - Unread emails
- `STARRED` - Starred/Important emails
- `SENT` - Sent emails
- `IMPORTANT` - Important emails
- `DRAFT` - Draft emails

**Example:**
```
INBOX, UNREAD
STARRED, IMPORTANT
SENT
```

**Note:** This option only works when [Use Gmail Labels](#use-gmail-labels) is turned ON.

---

### Include Spam/Trash {#include-spam-trash}

Include emails from Spam and Trash folders in the results.

**Type:** Switch

**Options:**
- **ON** - Include spam and trash
- **OFF** - Exclude spam and trash (default)

---

### Enable Retry on Failure {#enable-retry-on-failure}

Automatically retry the request if it fails.

**Type:** Switch

**Description:** When enabled, the system will retry fetching emails if an error occurs.

**Options:**
- **ON** - Enable retry on failure
- **OFF** - Don't retry on failure

**Use Cases:**
- Network connectivity issues
- Temporary API errors
- Rate limiting scenarios

---

### Max Retries (Failure) {#max-retries-failure}

Maximum number of retry attempts if the request fails.

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

### Retry Until Mail Received {#retry-until-mail-received}

Keep retrying until the expected email is received.

**Type:** Switch

**Description:** Useful for waiting for verification emails, OTPs, or confirmation messages.

**Options:**
- **ON** - Retry until mail is found
- **OFF** - Don't retry if mail not found

**Use Cases:**
- Waiting for verification codes
- Expecting confirmation emails
- Polling for specific messages

---

### Max Retries (Until Received) {#max-retries-until-received}

Maximum number of retry attempts when waiting for mail.

**Type:** Input

**Description:** Specify how many times to retry before giving up.

**Example:**
```
10   (Retry up to 10 times)
20   (Retry up to 20 times)
50   (Retry up to 50 times)
```

**Note:** This option only works when [Retry Until Mail Received](#retry-until-mail-received) is turned ON.

---

### Timeout {#timeout}

Timeout duration in seconds between retry attempts.

**Type:** Input

**Description:** Specify how long to wait between each retry attempt.

**Example:**
```
5     (Wait 5 seconds between retries)
10    (Wait 10 seconds between retries)
30    (Wait 30 seconds between retries)
```

**Note:** This option only works when [Retry Until Mail Received](#retry-until-mail-received) is turned ON.

---

### Enable Regex Filter {#enable-regex-filter}

Filter email data using regular expressions.

**Type:** Switch

**Description:** Apply regex patterns to extract or transform email content.

**Options:**
- **ON** - Enable regex filtering
- **OFF** - Return raw email data

---

### Regular Expression {#regular-expression}

Regular expression pattern to match in email content.

**Type:** Input

**Description:** Define a regex pattern to extract specific data from emails.

**Example:**
```
\d{6}                    (Match 6-digit codes)
[A-Z0-9]{8}              (Match 8-character alphanumeric codes)
verification code: (\d+) (Extract verification code)
```

**Note:** This option only works when [Enable Regex Filter](#enable-regex-filter) is turned ON.

---

### Regex Replace {#regex-replace}

Replacement string for regex matches.

**Type:** Input

**Description:** Define what to replace matched patterns with. Use `$1`, `$2` for capture groups.

**Example:**
```
$1                (Use first capture group)
Code: $1          (Prefix with "Code: ")
$1-$2             (Combine capture groups)
```

**Note:** This option only works when [Enable Regex Filter](#enable-regex-filter) is turned ON.

---

### Remove UNREAD Label {#remove-unread-label}

Automatically mark email as read after fetching.

**Type:** Switch

**Description:** Remove the UNREAD label from emails after they are retrieved.

**Options:**
- **ON** - Mark as read after fetching
- **OFF** - Keep email as unread

**Use Cases:**
- Prevent duplicate processing
- Clean up inbox automatically
- Track processed emails

---

### Search Query {#search-query}

Gmail search query to filter emails.

**Type:** Default Value Field

**Description:** Use Gmail's powerful search syntax to find specific emails.

:::tip Set Query in Default Value
You can set the search query in the **"If excel column value is empty then fill this default value"** field option.

**Example:**
```
from:noreply@example.com subject:verification
is:unread after:2024/01/01
has:attachment larger:5M
```
:::

**Learn More:** See [Gmail API Search Queries](/documentation/field-types/google-service-gmail/gmail-api-search-queries) for detailed search syntax and examples.

---

## Use Cases

- **Fetch verification codes from emails** - Extract OTP codes for automation
- **Monitor inbox for specific messages** - Wait for confirmation emails
- **Extract data from email content** - Parse structured data from emails
- **Process email attachments** - Retrieve emails with specific attachments
- **Automate email-based workflows** - Trigger actions based on received emails

## Best Practices

### ✅ Do's

- **Use specific search queries** - Narrow down results with precise filters
- **Enable retry for verification emails** - Use retry mechanism for expected emails
- **Use regex for data extraction** - Extract specific patterns like codes or URLs
- **Mark emails as read** - Prevent duplicate processing
- **Limit max results** - Improve performance by fetching only needed emails

### ❌ Don'ts

- **Don't fetch all emails** - Use search queries to filter results
- **Don't set excessive retries** - Balance between reliability and performance
- **Don't ignore timeout settings** - Set appropriate timeout for retry scenarios
- **Don't process spam unnecessarily** - Exclude spam unless specifically needed

## Troubleshooting

### No Emails Found

**Solution:** Verify your search query is correct and emails matching the criteria exist.

### Permission Denied

**Solution:** Ensure the selected Google account has Gmail API access enabled.

### Timeout Errors

**Solution:** Increase timeout duration or reduce max retry attempts.

### Regex Not Working

**Solution:** Test your regex pattern and ensure it matches the email content format.

### Too Many Results

**Solution:** Enable max results limit and refine your search query.

## Related Documentation

- [Gmail API Search Queries](/documentation/field-types/google-service-gmail/gmail-api-search-queries)
- [Google Service - Gmail](/documentation/field-types/google-service-gmail)
- [Field Types](/documentation/form-fields/field-types)
- [Variables](/documentation/variable)
- [Gmail API Documentation](https://developers.google.com/gmail/api)
