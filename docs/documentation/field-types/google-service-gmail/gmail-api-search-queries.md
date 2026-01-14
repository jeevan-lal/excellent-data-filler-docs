# Gmail API Search Queries

Comprehensive guide to Gmail search query syntax for filtering and finding emails.

## Overview

Gmail search queries allow you to filter emails using powerful search operators. These queries can be used in the [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail) field type to retrieve specific emails based on various criteria.

## 📬 Common Gmail Query Examples

| Query | Meaning |
|-------|---------|
| `is:unread` | Shows only unread emails |
| `is:read` | Shows only read emails |
| `in:inbox` | Emails in Inbox |
| `in:sent` | Sent emails |
| `in:trash` | Emails in Trash |
| `in:spam` | Spam emails |
| `has:attachment` | Emails with attachments |
| `larger:5m` | Emails larger than 5 MB |
| `smaller:1m` | Emails smaller than 1 MB |

## 📧 Sender / Receiver Filters

| Query | Meaning |
|-------|---------|
| `from:abc@gmail.com` | Emails from specific sender |
| `to:me` | Emails sent directly to you |
| `cc:me` | Emails where you're in CC |
| `bcc:me` | Emails where you're in BCC |

## 🏷️ Label & Category Filters

| Query | Meaning |
|-------|---------|
| `label:inbox` | Inbox label |
| `label:unread` | Same as `is:unread` |
| `label:important` | Marked important |
| `category:primary` | Primary tab |
| `category:social` | Social tab |
| `category:promotions` | Promotions tab |
| `category:updates` | Updates tab |
| `category:forums` | Forums tab |

## ⏱️ Date / Time Filters

| Query | Meaning |
|-------|---------|
| `newer_than:1d` | Emails newer than 1 day |
| `older_than:7d` | Emails older than 7 days |
| `after:2025/01/01` | Emails after a specific date |
| `before:2025/01/31` | Emails before a specific date |

**Time Units:**
- `d` - days
- `m` - months
- `y` - years

**Examples:**
```
newer_than:2d    (Last 2 days)
older_than:1m    (Older than 1 month)
newer_than:1y    (Last year)
```

## 🧵 Thread / Conversation Filters

| Query | Meaning |
|-------|---------|
| `is:unread is:important` | Unread & important |
| `is:unread in:inbox` | Unread in Inbox |
| `is:unread from:no-reply@wavespb.com` | Unread OTP mails from sender |
| `is:unread subject:"OTP"` | Unread mails with "OTP" in subject |

## 🧪 OTP / Verification Use-Cases (Recommended)

| Use Case | Query |
|----------|-------|
| Latest unread OTP | `is:unread from:no-reply@wavespb.com` |
| OTP in inbox only | `is:unread from:no-reply@wavespb.com in:inbox` |
| OTP with keyword | `is:unread "verification code"` |

## Advanced Query Combinations

### Combining Multiple Conditions

Use **AND** logic by separating conditions with spaces:

```
is:unread from:noreply@example.com subject:verification
```

Use **OR** logic with curly braces:

```
from:{abc@gmail.com def@gmail.com}
subject:{OTP verification code}
```

### Negation (NOT)

Use `-` (minus) to exclude results:

```
-from:spam@example.com          (Exclude sender)
-subject:newsletter             (Exclude subject)
-has:attachment                 (Exclude attachments)
```

### Exact Phrase Matching

Use quotes for exact phrase matching:

```
subject:"Your verification code"
"password reset"
```

## Practical Examples

### Example 1: Fetch Verification Emails

```
is:unread from:noreply@service.com subject:"verification code"
```

### Example 2: Recent Unread Emails with Attachments

```
is:unread has:attachment newer_than:1d
```

### Example 3: Important Emails from Specific Sender

```
from:boss@company.com is:important
```

### Example 4: Emails in Date Range

```
after:2024/01/01 before:2024/12/31
```

### Example 5: Large Attachments from Last Week

```
has:attachment larger:10m newer_than:7d
```

### Example 6: Unread Promotional Emails

```
is:unread category:promotions
```

### Example 7: Exclude Spam and Get Unread

```
is:unread -in:spam -in:trash
```

## Best Practices

### ✅ Do's

- **Be specific** - Use multiple filters to narrow down results
- **Use date filters** - Limit search scope for better performance
- **Test queries** - Verify queries in Gmail search before using in automation
- **Use exact phrases** - Quote phrases for precise matching
- **Combine conditions** - Use multiple operators for accurate results

### ❌ Don'ts

- **Don't use overly broad queries** - Avoid fetching too many emails
- **Don't forget quotes** - Use quotes for multi-word phrases
- **Don't ignore case sensitivity** - Gmail search is case-insensitive, but be consistent
- **Don't overcomplicate** - Keep queries simple and readable

## Common Use Cases

### 1. Fetch OTP Codes

```
is:unread from:noreply@bank.com subject:OTP
```

### 2. Monitor Order Confirmations

```
is:unread subject:"order confirmation" newer_than:1d
```

### 3. Get Password Reset Emails

```
is:unread subject:"reset password" newer_than:1h
```

### 4. Fetch Invoices

```
has:attachment subject:invoice from:billing@company.com
```

### 5. Get Unread Important Emails

```
is:unread is:important in:inbox
```

## Troubleshooting

### No Results Found

**Solution:** Simplify your query and test each condition separately.

### Too Many Results

**Solution:** Add more specific filters like date range or sender.

### Query Not Working

**Solution:** Check for typos and ensure proper syntax (spaces, quotes, operators).

### Special Characters Issues

**Solution:** Use quotes around phrases containing special characters.

## Related Documentation

- [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail)
- [Google Service - Gmail](/documentation/field-types/google-service-gmail)
- [Gmail Search Operators](https://support.google.com/mail/answer/7190)
- [Gmail API Documentation](https://developers.google.com/gmail/api)
