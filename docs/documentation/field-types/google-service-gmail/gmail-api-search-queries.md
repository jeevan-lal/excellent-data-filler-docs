---
prev:
  text: "Fetch Single Mail (Gmail)"
  link: "/documentation/field-types/google-service-gmail/fetch-single-mail-gmail"
next:
  text: "Send Mail (Gmail)"
  link: "/documentation/field-types/google-service-gmail/send-mail-gmail"
---

# Gmail API Search Queries {#gmail-api-search-queries}

Comprehensive reference guide to Gmail search operators and syntax for filtering messages in automated workflows.

---

## Overview {#overview}

Gmail queries allow you to isolate exact messages based on sender, subject, date, read status, and attachment attributes. These query expressions are configured in the **Search Query** parameter of [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail) and [Fetch Single Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-single-mail-gmail).

---

## Common Gmail Query Operators {#common-examples}

| Query | Function | Example |
|---|---|---|
| `is:unread` | Matches only unread messages. | `is:unread from:billing@service.com` |
| `is:read` | Matches read messages. | `is:read subject:statement` |
| `in:inbox` | Scopes search to the Inbox. | `in:inbox is:unread` |
| `in:sent` | Scopes search to Sent mail. | `in:sent to:client@company.com` |
| `in:trash` | Searches deleted items in Trash. | `in:trash` |
| `in:spam` | Searches messages in Spam. | `in:spam` |
| `has:attachment` | Matches messages containing files. | `has:attachment filename:pdf` |
| `larger:5m` | Messages with total size over 5 megabytes. | `larger:5m` |
| `smaller:1m` | Messages with total size under 1 megabyte. | `smaller:1m` |

---

## Sender & Recipient Filters {#sender-receiver-filters}

| Operator | Syntax | Description |
|---|---|---|
| `from:` | `from:support@domain.com` | Matches emails from a specific sender address or domain. |
| `to:` | `to:user@domain.com` | Matches emails sent directly to the specified recipient. |
| `cc:` | `cc:manager@domain.com` | Matches emails where the address is CC'd. |
| `bcc:` | `bcc:audit@domain.com` | Matches emails where the address is BCC'd. |

---

## Label & Category Filters {#label-category-filters}

| Operator | Target | Description |
|---|---|---|
| `label:` | `label:important`, `label:finance` | Scopes query to a specific system or user label. |
| `category:primary` | Primary Inbox tab | Filters emails categorized as Primary by Gmail. |
| `category:social` | Social tab | Notifications from social networks. |
| `category:promotions` | Promotions tab | Marketing and commercial emails. |
| `category:updates` | Updates tab | Receipts, statements, and bills. |
| `category:forums` | Forums tab | Discussion boards and mailing lists. |

---

## Date & Time Filters {#date-time-filters}

| Operator | Format | Description |
|---|---|---|
| `newer_than:` | `newer_than:1d`, `newer_than:2h` | Matches emails received within the last relative time window (`d` = days, `h` = hours, `m` = months). |
| `older_than:` | `older_than:7d` | Matches emails older than the specified relative duration. |
| `after:` | `after:2025/01/01` | Absolute date lower bound (YYYY/MM/DD). |
| `before:` | `before:2025/12/31` | Absolute date upper bound (YYYY/MM/DD). |

---

## Attachment Filters {#attachment-filters}

| Operator | Syntax | Description |
|---|---|---|
| `has:attachment` | `has:attachment` | Requires at least one attachment present. |
| `filename:` | `filename:pdf`, `filename:invoice.pdf` | Matches specific file extensions or file names. |

---

## Content & Keyword Matching {#content-search}

| Operator | Syntax | Description |
|---|---|---|
| `subject:` | `subject:"Verification Code"` | Matches exact subject line text when quoted. |
| Exact phrase | `"account created"` | Matches the exact phrase anywhere in subject or body. |
| Negation | `-from:spam.com` | Excludes matching messages using the `-` prefix. |

---

## Combining Operators {#combining-queries}

Multiple operators can be chained with spaces (equivalent to logical `AND`) or grouped with `OR`:

### Compound AND
```text
from:security@bank.com is:unread newer_than:1h
```
*Matches unread messages from `security@bank.com` received within the last hour.*

### Compound OR
```text
from:(auth@service.com OR noreply@service.com) subject:OTP
```
*Matches messages from either sender containing "OTP" in the subject.*

---

## Automation Best Practices {#automation-tips}

1. **Always Use `newer_than` for OTPs**: Add `newer_than:1h` or `newer_than:1d` to ensure past authentication emails are not returned.
2. **Combine `is:unread` with Read Flagging**: Use `is:unread` alongside the **Remove UNREAD Label** setting in the field configuration to guarantee one-time processing.
3. **Quote Multi-Word Phrases**: Wrap phrases in double quotes (`subject:"Your Security Code"`).

---

## Related Documentation {#related}

- <img src="/svg/chat.svg" class="doc-icon" /> [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail)
- <img src="/svg/globe.svg" class="doc-icon" /> [Fetch Single Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-single-mail-gmail)
- <img src="/svg/click.svg" class="doc-icon" /> [Send Mail (Gmail)](/documentation/field-types/google-service-gmail/send-mail-gmail)
