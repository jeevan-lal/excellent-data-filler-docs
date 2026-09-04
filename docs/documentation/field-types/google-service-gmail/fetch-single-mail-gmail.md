---
prev:
  text: "Fetch Mail (Gmail)"
  link: "/documentation/field-types/google-service-gmail/fetch-mail-gmail"
next:
  text: "Gmail API Search Queries"
  link: "/documentation/field-types/google-service-gmail/gmail-api-search-queries"
---

# Fetch Single Mail (Gmail) {#fetch-single-mail-gmail}

Retrieve a single, specific email from Gmail using a message ID or targeted search query, optimized for fast OTP extraction, authentication links, and single-record parsing.

---

## Overview {#overview}

While [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail) is engineered for processing email collections, **Fetch Single Mail (Gmail)** is tailored for point-to-point verification where you need exactly one targeted message (e.g., retrieving the latest two-factor authentication code or password reset token).

---

## Configuration Options {#configuration-options}

| Option | Type | Description | Required |
|---|---|---|---|
| **Google Service Account** | Dropdown | Authorized Google account with Gmail permissions. | Yes |
| **Enable Max Results** | Toggle Switch | Restricts results to a single message (recommended ON). | No |
| **Max Results Count** | Number Input | Set to `1` for single-message workflows. | No |
| **Include Spam/Trash** | Toggle Switch | Checks Spam and Trash folders. | No |
| **Enable Retry on Failure** | Toggle Switch | Re-attempts execution on transient API connectivity errors. | No |
| **Max Retries (Failure)** | Number Input | Number of network retry attempts. | When retry enabled |
| **Retry Until Mail Received** | Toggle Switch | Polls the inbox until the expected email arrives. | No |
| **Max Retries (Until Received)** | Number Input | Number of polling checks before timing out. | When polling enabled |
| **Timeout** | Number Input | Seconds to pause between polling checks. | No |
| **Enable Regex Filter** | Toggle Switch | Extracts targeted tokens or numbers using regex patterns. | No |
| **Regular Expression** | Text Input | Regex query (e.g., `\b\d{6}\b`). | When regex enabled |
| **Regex Replace** | Text Input | Optional replacement string for matched pattern. | No |
| **Remove UNREAD Label** | Toggle Switch | Automatically marks email as read upon retrieval. | No |
| **Search Query** | Default Value | Gmail query syntax to locate the target message. | No |

---

## Targeted OTP & Verification Workflows {#otp-workflows}

Extracting an automated one-time password during form execution:

1. **Trigger the Code**: Form action submits an input triggering an email dispatch from the target website.
2. **Configure Single Fetch**:
   - **Search Query**: `from:accounts@service.com is:unread`
   - **Retry Until Mail Received**: `ON`
   - **Max Retries**: `8`
   - **Timeout**: `5` seconds
   - **Enable Regex Filter**: `ON` (`\b\d{6}\b`)
   - **Remove UNREAD Label**: `ON`
3. **Execution**: The extension polls Gmail until the message arrives, isolates the 6 digits, and passes them directly to the subsequent OTP form field.

---

## Practical Examples {#examples}

### Example 1: Extracting Latest Security Passcode

```text
Google Service Account: user@example.com
Enable Max Results: ON
Max Results Count: 1
Retry Until Mail Received: ON
Max Retries (Until Received): 6
Timeout: 5
Enable Regex Filter: ON
Regular Expression: (?<=Your code is )\d{6}
Remove UNREAD Label: ON
Search Query: from:security@bank.com is:unread
```

### Example 2: Extracting Account Activation URL

```text
Google Service Account: user@example.com
Enable Regex Filter: ON
Regular Expression: https://app\.domain\.com/activate\?key=[A-Za-z0-9]+
Search Query: subject:"Activate your account" newer_than:1d
```

---

## Best Practices {#best-practices}

- **Combine `is:unread` with `newer_than`**: Always add `newer_than:1d` or `newer_than:1h` to ensure outdated historical emails are never matched accidentally.
- **Always Mark as Read**: Keep **Remove UNREAD Label** enabled so subsequent test runs or loop iterations don't re-read past tokens.
- **Use Lookbehind in Regex**: Regex lookarounds like `(?<=code:\s*)\d{6}` allow you to isolate raw numeric tokens cleanly.

---

## Related Documentation {#related-documentation}

- <img src="/svg/chat.svg" class="doc-icon" /> [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail)
- <img src="/svg/globe.svg" class="doc-icon" /> [Gmail API Search Queries Guide](/documentation/field-types/google-service-gmail/gmail-api-search-queries)
- <img src="/svg/click.svg" class="doc-icon" /> [Send Mail (Gmail)](/documentation/field-types/google-service-gmail/send-mail-gmail)
- <img src="/svg/settings.svg" class="doc-icon" /> [Google Service Account Setup](/documentation/services/google-service)
