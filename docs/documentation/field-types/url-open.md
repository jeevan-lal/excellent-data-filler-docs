# URL Open

Open URLs in the current tab or window.

## Overview

The URL Open field type allows you to navigate to a specified URL. The URL can be set using Excel data or the Default Value field option, and you can use variables to create dynamic URLs.

:::info No Configuration Options
This field type has no additional configuration options. Simply set the URL in the Default Value field or Excel column.
:::

---

## How It Works

When this field executes, it opens the specified URL in the current browser tab/window.

**URL Source:** The URL to open is set in:
- **Default Value** field option
- **Excel column** data

**Variable Support:** You can use [page location variables](/documentation/variable#page-location-variable) and other variables in the URL.

---

## Setting the URL

### Using Excel Column

Reference URL data from your Excel sheet using the field column name.

**Syntax:** `{$columnName$}`

**Example:**

```javascript
// Excel Column: "targetURL"
// Excel Data: "https://example.com/products/item"

// In Default Value field
{$targetURL$}

// Result: Opens https://example.com/products/item
```

**Use Case:** When the URL to open varies per row in your Excel data.

---

### Using Default Value Field

Set the URL directly in the **Default Value** field option.

**Example:**

```
// In Default Value field
https://example.com/page
```

**Result:** Opens https://example.com/page

---

### Using Variables

You can use [page location variables](/documentation/variable#page-location-variable) and other predefined variables in the URL.

**Available Variables:**

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `{$PAGE_URL$}` | Current page full URL | `https://example.com/page?id=123` |
| `{$PAGE_HOSTNAME$}` | Current page hostname | `example.com` |
| `{$PAGE_PATHNAME$}` | Current page pathname | `/page` |
| `{$PAGE_SEARCH$}` | Current page query string | `?id=123` |
| `{$PAGE_HASH$}` | Current page hash | `#section` |

**Example:**

```javascript
// In Default Value field
https://example.com/products/{$productId$}?ref={$PAGE_HOSTNAME$}

// If productId = "123" and current hostname = "source.com"
// Opens: https://example.com/products/123?ref=source.com
```

---

### Combining Excel Data and Variables

You can combine Excel column data with variables for complex URL patterns.

**Example:**

```javascript
// In Default Value field
https://{$domain$}/users/{$userId$}/profile?tab={$tabName$}

// Excel Data:
// domain = "example.com"
// userId = "456"
// tabName = "settings"

// Result: Opens https://example.com/users/456/profile?tab=settings
```

---

## Use Cases

### Open Product Pages from Excel

**Scenario:** Open different product pages based on Excel data.

**Configuration:**
- **Default Value:** `https://example.com/products/{$productId$}`
- **Excel Column:** productId = "12345"

**Result:** Opens https://example.com/products/12345

---

### Navigate to Dynamic Dashboard

**Scenario:** Open user-specific dashboard.

**Configuration:**
- **Default Value:** `https://dashboard.example.com/user/{$userId$}`
- **Excel Column:** userId = "789"

**Result:** Opens https://dashboard.example.com/user/789

---

### Open URL with Query Parameters

**Scenario:** Open page with multiple query parameters from Excel.

**Configuration:**
- **Default Value:** `https://example.com/search?q={$searchTerm$}&category={$category$}`
- **Excel Data:** 
  - searchTerm = "laptop"
  - category = "electronics"

**Result:** Opens https://example.com/search?q=laptop&category=electronics

---

### Open External Link with Referrer

**Scenario:** Open external link with current page as referrer.

**Configuration:**
- **Default Value:** `https://external.com/page?ref={$PAGE_URL$}`

**Result:** Opens external page with current URL as referrer parameter

---

## Best Practices

### ✅ Do's

- **Use HTTPS protocol** - Always include `https://` in URLs
- **Encode special characters** - URL-encode special characters in parameters
- **Use variables for dynamic URLs** - Make URLs data-driven
- **Test URLs before deployment** - Verify URLs open correctly
- **Use absolute URLs** - Include full URL with protocol and domain
- **Validate Excel data** - Ensure Excel contains valid URL components

### ❌ Don'ts

- **Don't forget protocol** - Always include `https://` or `http://`
- **Don't use relative URLs** - Use full URLs, not `/page` or `../page`
- **Don't hardcode sensitive data** - Use variables for user-specific data
- **Don't open untrusted URLs** - Validate URL sources
- **Don't forget to encode** - Special characters need URL encoding
- **Don't use broken variables** - Verify variable names are correct

---

## URL Structure

Understanding URL components helps create proper URLs:

```
https://www.example.com:443/products/item?id=123&cat=electronics#reviews
└─┬─┘  └──────┬───────┘└┬┘ └─────┬─────┘ └──────────┬──────────┘ └──┬──┘
protocol   hostname   port  pathname        query parameters      hash

Full URL: https://www.example.com:443/products/item?id=123&cat=electronics#reviews
```

**Components:**
- **Protocol:** `https://` or `http://`
- **Hostname:** `www.example.com`
- **Port:** `:443` (optional, default for HTTPS)
- **Pathname:** `/products/item`
- **Query:** `?id=123&cat=electronics`
- **Hash:** `#reviews`

---

## Troubleshooting

### URL Not Opening

**Solutions:**
- Verify URL is set in Default Value or Excel
- Check if protocol (`https://`) is included
- Ensure variables have values
- Verify Excel column names match variable syntax
- Check browser console for errors
- Test with a simple static URL first

---

### Variables Not Replacing

**Solutions:**
- Verify variable syntax `{$variableName$}`
- Check if variable is defined in Excel
- Ensure variable name matches Excel column name exactly
- Test with predefined variables like `{$PAGE_URL$}`
- Check for typos in variable names

---

### Invalid URL Error

**Solutions:**
- Include protocol (`https://` or `http://`)
- Check for spaces in URL
- Verify special characters are encoded
- Ensure domain is valid
- Test URL manually in browser
- Check Excel data for invalid characters

---

### URL Opens Wrong Page

**Solutions:**
- Verify Excel data is correct
- Check variable values
- Ensure URL pattern is correct
- Test with static URL first
- Verify no extra spaces in Excel data
- Check for case sensitivity in URLs

---

## Examples

### Example 1: Static URL

```javascript
// Configuration
Default Value: https://example.com/dashboard

// Result
Opens: https://example.com/dashboard
```

### Example 2: URL from Excel

```javascript
// Configuration
Default Value: {$pageURL$}

// Excel Column: pageURL
// Excel Data: https://example.com/products/laptop

// Result
Opens: https://example.com/products/laptop
```

### Example 3: Dynamic URL with Multiple Variables

```javascript
// Configuration
Default Value: https://{$domain$}/users/{$userId$}/posts/{$postId$}

// Excel Data:
// domain = "blog.example.com"
// userId = "123"
// postId = "456"

// Result
Opens: https://blog.example.com/users/123/posts/456
```

### Example 4: URL with Query Parameters

```javascript
// Configuration
Default Value: https://example.com/search?q={$keyword$}&sort={$sortOrder$}&page={$pageNum$}

// Excel Data:
// keyword = "laptop"
// sortOrder = "price"
// pageNum = "2"

// Result
Opens: https://example.com/search?q=laptop&sort=price&page=2
```

### Example 5: URL with Page Variables

```javascript
// Configuration
Default Value: https://example.com/redirect?from={$PAGE_PATHNAME$}&host={$PAGE_HOSTNAME$}

// Current Page: https://source.com/products/item

// Result
Opens: https://example.com/redirect?from=/products/item&host=source.com
```

---

## Related Documentation

- [Page Location Variables](/documentation/variable#page-location-variable)
- [Field Settings](/documentation/form-fields/field-settings)
- [Default Value](/documentation/form-fields/field-settings#default-value)
- [URL Matching](/documentation/field-types/url-matching)

---

## Notes

- URL opens in the **current tab/window** (not a new tab)
- Navigation happens immediately when field executes
- Subsequent fields in the workflow will execute on the new page
- Use this field type for page navigation within automation workflows
- For opening URLs in new tabs, use browser action field types
