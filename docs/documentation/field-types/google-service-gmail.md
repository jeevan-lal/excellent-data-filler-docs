# Google Service - Gmail

Integrate with Gmail API to manage emails, fetch messages, and send emails directly from your automation workflows.

## Overview

The Google Service - Gmail field types allow you to interact with Gmail, enabling you to read, send, and manage emails as part of your automation processes. This integration provides powerful email automation capabilities with support for search queries, filtering, and message parsing.

## Field Types

### [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail)

Retrieve multiple emails from Gmail based on search criteria and filters.

**Features:**
- Search emails using Gmail query syntax
- Filter by labels, dates, and senders
- Extract specific email parts (body, subject, from, etc.)
- Support for retry mechanisms
- Regex filtering for data extraction
- Automatic mark as read functionality

**Learn More:** [Gmail API Search Queries](/documentation/field-types/google-service-gmail/gmail-api-search-queries)

---

### [Fetch Single Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-single-mail-gmail)

Retrieve a specific email from Gmail using message ID or search parameters.

**Features:**
- Optimized for single email retrieval
- Search using Gmail query syntax
- Support for retry mechanisms
- Regex filtering for data extraction
- Automatic mark as read functionality
- Wait for expected emails

---

### [Send Mail (Gmail)](/documentation/field-types/google-service-gmail/send-mail-gmail)

Send emails through Gmail programmatically.

**Features:**
- Send emails with custom content
- Support for multiple recipients
- File attachments support
- Custom file names and MIME types
- HTML and plain text formats
- Retry mechanism on failure
- Variable support for dynamic content

---

## Key Features

- **Gmail API Integration** - Direct connection to Gmail services
- **Email Retrieval** - Fetch emails based on various criteria
- **Email Sending** - Send emails programmatically
- **Message Parsing** - Extract data from email content
- **Attachment Handling** - Work with email attachments
- **Advanced Search** - Use Gmail's powerful search syntax
- **Label Management** - Filter by Gmail labels and categories
- **Retry Mechanisms** - Automatic retry on failure
- **Regex Support** - Extract data using regular expressions

## Use Cases

- **Fetch verification codes from emails** - Extract OTP codes for automation
- **Monitor inbox for specific messages** - Wait for confirmation emails
- **Send automated email notifications** - Trigger email sending based on events
- **Extract data from email content for form filling** - Parse structured data from emails
- **Process email attachments in automation workflows** - Download and process attachments

## Related Documentation

- [Fetch Mail (Gmail)](/documentation/field-types/google-service-gmail/fetch-mail-gmail)
- [Gmail API Search Queries](/documentation/field-types/google-service-gmail/gmail-api-search-queries)
- [Field Types](/documentation/form-fields/field-types)
- [Variables](/documentation/variable)
- [Gmail API Documentation](https://developers.google.com/gmail/api)
