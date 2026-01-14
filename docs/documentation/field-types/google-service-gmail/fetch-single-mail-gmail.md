# Fetch Single Mail (Gmail)

Retrieve a specific email from Gmail using message ID or search parameters.

## Overview

The Fetch Single Mail (Gmail) field type allows you to retrieve a single, specific email from your Gmail account. Unlike [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail) which returns multiple emails, this field type is optimized for fetching one email at a time, making it ideal for retrieving specific messages by ID or the most recent email matching your criteria.

## Configuration Options

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| [Google Service Account](#google-service-account) | Dropdown | Select logged-in Google account | **Yes** |
| [Enable Max Results](#enable-max-results) | Switch | Limit number of results | No |
| [Max Results Count](#max-results-count) | Input | Number of results to return | No |
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

### Enable Max Results {#enable-max-results}

Enable limiting the number of results returned.

**Type:** Switch

**Options:**
- **ON** - Limit number of results
- **OFF** - Return all matching results

**Note:** For single mail retrieval, it's recommended to set max results to 1.

---

### Max Results Count {#max-results-count}

Specify the maximum number of emails to return.

**Type:** Input

**Description:** Set how many emails should be fetched (Return Max Results).

**Recommended Value:**
```
1    (Return only 1 email - most recent)
```

**Note:** This option only works when [Enable Max Results](#enable-max-results) is turned ON.

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

## Differences from Fetch Mail (Gmail)

| Feature | Fetch Single Mail | Fetch Mail |
|---------|------------------|------------|
| **Purpose** | Retrieve one specific email | Retrieve multiple emails |
| **Mail Parts Selection** | Returns complete email | Select specific parts (body, subject, etc.) |
| **Use Case** | Get latest/specific message | Search and filter multiple messages |
| **Performance** | Faster for single email | Better for bulk operations |

## Use Cases

- **Fetch latest verification code** - Get the most recent OTP email
- **Retrieve specific email by ID** - Fetch email using message ID
- **Get confirmation email** - Wait for and retrieve confirmation messages
- **Extract single data point** - Get one specific piece of information
- **Monitor for specific message** - Poll for expected email

## Practical Examples

### Example 1: Get Latest OTP Email

**Search Query:**
```
is:unread from:noreply@bank.com subject:OTP
```

**Max Results:** `1`

**Regex Pattern:** `\d{6}`

**Remove UNREAD:** `ON`

---

### Example 2: Wait for Verification Email

**Search Query:**
```
is:unread subject:"verify your email"
```

**Retry Until Received:** `ON`

**Max Retries:** `20`

**Timeout:** `10` seconds

---

### Example 3: Get Password Reset Link

**Search Query:**
```
is:unread from:noreply@service.com subject:"reset password"
```

**Regex Pattern:** `https://[^\s]+`

**Max Results:** `1`

---

## Custom Filter {#custom-filter}

If you want to apply custom filtering on the fetched mail, you can use a JavaScript event listener in a separate **JavaScript Code** field type.

### How It Works

The `Fetch Single Mail (Gmail)` field type triggers a custom event `EDF-SINGLE-GMAIL-RESPONSE` when an email is found. You can listen to this event and apply your own custom logic to filter or process the email data.

### Setup

1. Add a **Fetch Single Mail (Gmail)** field type
2. Add a **JavaScript Code** field type after it
3. Use the following script in the JavaScript Code field:

```js
// RECEIVER: Listen for Gmail response and apply custom filtering
window.addEventListener('EDF-SINGLE-GMAIL-RESPONSE', (e) => {
  if (e && e.detail) {
    console.log(e.detail);
    
    // Apply your custom filtering logic here
    // Example: Check if email contains specific text
    if (e.detail.body && e.detail.body.includes('verification code')) {
      // Process the email
      console.log('Verification email found!');
      
      // Extract data or perform actions
      // ...
    }
  }
});
```

### Event Data Structure

The event detail (`e.detail`) contains the complete email data:

```js
{
  id: "message-id",
  threadId: "thread-id",
  subject: "Email subject",
  from: "sender@example.com",
  to: "recipient@example.com",
  body: "Email body content",
  snippet: "Email preview text",
  date: "2024-01-15T10:30:00Z",
  // ... other email properties
}
```

### Use Cases

- **Custom validation** - Verify email content before processing
- **Complex filtering** - Apply filters beyond regex patterns
- **Data transformation** - Transform email data before using
- **Conditional actions** - Trigger different actions based on email content
- **Multi-step processing** - Chain multiple processing steps

### Example: Extract and Validate OTP

```js
window.addEventListener('EDF-SINGLE-GMAIL-RESPONSE', (e) => {
  if (e && e.detail && e.detail.body) {
    // Extract OTP code
    const otpMatch = e.detail.body.match(/\d{6}/);
    
    if (otpMatch) {
      const otp = otpMatch[0];
      console.log('OTP found:', otp);
      
      // Validate OTP format
      if (otp.length === 6) {
        // Store in variable or use directly
        // $fns.return(otp);
      }
    } else {
      console.log('No OTP found in email');
    }
  }
});
```

### Example: Filter by Sender and Subject

```js
window.addEventListener('EDF-SINGLE-GMAIL-RESPONSE', (e) => {
  if (e && e.detail) {
    const { from, subject, body } = e.detail;
    
    // Check if email is from trusted sender
    if (from.includes('noreply@bank.com') && 
        subject.includes('Transaction Alert')) {
      
      // Extract transaction amount
      const amountMatch = body.match(/\$(\d+\.\d{2})/);
      
      if (amountMatch) {
        console.log('Transaction amount:', amountMatch[1]);
      }
    }
  }
});
```

---

## Best Practices

### ✅ Do's

- **Set max results to 1** - Optimize for single email retrieval
- **Use specific search queries** - Ensure you get the right email
- **Enable retry for expected emails** - Use retry mechanism for verification emails
- **Mark as read after processing** - Prevent duplicate processing
- **Use regex for data extraction** - Extract specific patterns like codes or URLs

### ❌ Don'ts

- **Don't fetch multiple emails** - Use Fetch Mail (Gmail) for bulk operations
- **Don't set excessive retries** - Balance between reliability and performance
- **Don't ignore timeout settings** - Set appropriate timeout for retry scenarios
- **Don't process without validation** - Verify email content before processing

## Troubleshooting

### No Email Found

**Solution:** Verify your search query is correct and the email exists.

### Wrong Email Retrieved

**Solution:** Make your search query more specific with additional filters.

### Timeout Errors

**Solution:** Increase timeout duration or reduce max retry attempts.

### Regex Not Matching

**Solution:** Test your regex pattern and ensure it matches the email content format.

## Related Documentation

- [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail)
- [Gmail API Search Queries](/documentation/field-types/google-service-gmail/gmail-api-search-queries)
- [Google Service - Gmail](/documentation/field-types/google-service-gmail)
- [Field Types](/documentation/form-fields/field-types)
- [Gmail API Documentation](https://developers.google.com/gmail/api)
