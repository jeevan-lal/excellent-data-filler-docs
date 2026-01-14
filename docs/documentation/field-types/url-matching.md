# URL Matching

Match and validate the current page URL against specified patterns.

## Overview

The URL Matching field type allows you to verify that the current page URL matches your expected URL pattern. You can match against the full URL, pathname, or hostname, and use Excel data or variables for dynamic URL matching.

## Configuration Options

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| **Select URL Type** | Dropdown | Choose which part of the URL to match | Yes |
| **URL Value** | Text Input (via Default Value or Excel) | The URL pattern to match against | Yes |

---

## Select URL Type

**Field:** Dropdown

**Description:** Choose which part of the current page URL to match against your specified URL pattern.

**Available Options:**

| URL Type | Description | What it Matches | Example |
|----------|-------------|-----------------|---------|
| **Match with Full URL** | Match the complete URL including protocol, hostname, pathname, and query | Entire URL string | `https://example.com/page?id=123` |
| **Match with URL pathname** | Match only the path portion of the URL | Path after hostname | `/page` or `/products/item` |
| **Match with URL hostname** | Match only the hostname/domain | Domain name only | `example.com` or `www.example.com` |

---

### Match with Full URL

**Description:** Matches the complete URL including protocol, hostname, pathname, query parameters, and hash.

**URL Structure:**
```
https://example.com/products/item?id=123#section
└─────────────────────────────────────────────┘
              Full URL
```

**Example:**

```javascript
Current URL: https://example.com/products/item?id=123
URL Type: Match with Full URL
URL Value: https://example.com/products/item?id=123
Result: ✅ Match

Current URL: https://example.com/products/item?id=123
URL Type: Match with Full URL
URL Value: https://example.com/products/item
Result: ❌ No Match (query parameters don't match)
```

**Use Case:** When you need exact URL matching including all parameters.

---

### Match with URL pathname

**Description:** Matches only the pathname portion of the URL (the path after the hostname).

**URL Structure:**
```
https://example.com/products/item?id=123#section
                    └──────────┘
                      Pathname
```

**Pathname Reference:** [MDN - URL.pathname](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname)

**Example:**

```javascript
Current URL: https://example.com/products/item?id=123
URL Type: Match with URL pathname
URL Value: /products/item
Result: ✅ Match

Current URL: https://example.com/products/item
URL Type: Match with URL pathname
URL Value: /products
Result: ❌ No Match (pathname doesn't match exactly)
```

**Use Case:** When you want to match the page path regardless of domain or query parameters.

---

### Match with URL hostname

**Description:** Matches only the hostname/domain portion of the URL.

**URL Structure:**
```
https://example.com/products/item?id=123#section
        └─────────┘
         Hostname
```

**Hostname Reference:** [MDN - URL.hostname](https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname)

**Example:**

```javascript
Current URL: https://example.com/products/item?id=123
URL Type: Match with URL hostname
URL Value: example.com
Result: ✅ Match

Current URL: https://www.example.com/page
URL Type: Match with URL hostname
URL Value: example.com
Result: ❌ No Match (www. subdomain doesn't match)
```

**Use Case:** When you want to verify the domain regardless of the specific page.

---

## URL Value

The URL value to match against can be set using Excel data or the Default Value field option.

### Using Excel Column

Reference URL data from your Excel sheet using the field column name.

**Syntax:** `{$columnName$}`

**Example:**

```javascript
// Excel Column: "expectedURL"
// Excel Data: "https://example.com/products/item"

URL Type: Match with Full URL
URL Value (from Excel): {$expectedURL$}
// Will match against: "https://example.com/products/item"
```

**Use Case:** When the expected URL varies per row in your Excel data.

---

### Using Default Value Field

Set the URL value in the **Default Value** field option.

**Example:**

```
// In Default Value field
https://example.com/page
```

**With Variables:**

```javascript
// In Default Value field
https://example.com/products/{$productId$}

// If productId = "123"
// Matches against: https://example.com/products/123
```

---

### Using Variables

You can use [page location variables](/documentation/variable#page-location-variable) and other predefined variables in the URL value.

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
// Match if current pathname starts with /products/
URL Type: Match with URL pathname
URL Value: /products/{$categoryId$}

// If categoryId = "electronics"
// Matches against: /products/electronics
```

---

## Use Cases

### Verify Correct Page Navigation

**Scenario:** Ensure automation is on the correct page before proceeding.

**Configuration:**
- **URL Type:** Match with Full URL
- **URL Value:** `https://example.com/dashboard`

**Result:** Field action executes only when on the dashboard page.

---

### Match Dynamic Product Pages

**Scenario:** Verify product page with dynamic ID from Excel.

**Configuration:**
- **URL Type:** Match with URL pathname
- **URL Value (Excel):** `/products/{$productId$}`
- **Excel Data:** productId = "12345"

**Result:** Matches `/products/12345`

---

### Domain Verification

**Scenario:** Ensure automation runs only on specific domain.

**Configuration:**
- **URL Type:** Match with URL hostname
- **URL Value:** `example.com`

**Result:** Matches any page on example.com domain.

---

### Path Pattern Matching

**Scenario:** Match any page in a specific section.

**Configuration:**
- **URL Type:** Match with URL pathname
- **URL Value:** `/admin/users`

**Result:** Matches exact path `/admin/users`

---

## Best Practices

### ✅ Do's

- **Use appropriate URL type** - Choose the right matching type for your use case
- **Use pathname for flexibility** - When domain or parameters don't matter
- **Use hostname for domain checks** - When verifying the site
- **Use full URL for exact matching** - When all URL parts must match
- **Use variables for dynamic URLs** - Make URL matching data-driven
- **Test URL patterns** - Verify patterns match expected URLs

### ❌ Don'ts

- **Don't forget protocol** - Include `https://` when using full URL matching
- **Don't forget leading slash** - Pathname should start with `/`
- **Don't include query in pathname** - Query parameters are not part of pathname
- **Don't mix URL types** - Use consistent matching type
- **Don't use regex** - URL matching is exact string matching
- **Don't forget www subdomain** - `www.example.com` ≠ `example.com`

---

## URL Structure Reference

Understanding URL components helps choose the right matching type:

```
https://www.example.com:443/products/item?id=123&cat=electronics#reviews
└─┬─┘  └──────┬───────┘└┬┘ └─────┬─────┘ └──────────┬──────────┘ └──┬──┘
protocol   hostname   port  pathname        search (query)        hash

Full URL: https://www.example.com:443/products/item?id=123&cat=electronics#reviews
Hostname: www.example.com
Pathname: /products/item
```

---

## Troubleshooting

### URL Not Matching

**Solutions:**
- Verify URL type is correct for your use case
- Check if URL value matches exactly (case-sensitive)
- Ensure protocol is included for full URL matching
- Verify pathname starts with `/`
- Check for extra spaces in URL value
- Use browser DevTools to inspect current URL

---

### Variable Not Working

**Solutions:**
- Verify variable syntax `{$variableName$}`
- Check if variable has a value
- Ensure variable is defined in Excel or predefined
- Test with static URL first
- Check variable documentation

---

### Hostname Mismatch

**Solutions:**
- Include or exclude `www.` as needed
- Verify subdomain matches exactly
- Check for trailing dots
- Use browser console to check `window.location.hostname`

---

### Pathname Mismatch

**Solutions:**
- Ensure leading `/` is included
- Don't include query parameters in pathname
- Check for trailing slashes
- Verify case sensitivity
- Use browser console to check `window.location.pathname`

---

## Examples

### Example 1: Exact Full URL Match

```javascript
// Configuration
URL Type: Match with Full URL
URL Value: https://example.com/products/item?id=123

// Current URL
https://example.com/products/item?id=123

// Result: ✅ Match
```

### Example 2: Pathname Match with Variable

```javascript
// Configuration
URL Type: Match with URL pathname
URL Value: /users/{$userId$}

// Excel Data
userId: "456"

// Current URL
https://example.com/users/456

// Result: ✅ Match (pathname is /users/456)
```

### Example 3: Hostname Match

```javascript
// Configuration
URL Type: Match with URL hostname
URL Value: www.example.com

// Current URL
https://www.example.com/any/page?param=value

// Result: ✅ Match (hostname is www.example.com)
```

### Example 4: Dynamic URL from Excel

```javascript
// Configuration
URL Type: Match with Full URL
URL Value (from Default Value): {$expectedURL$}

// Excel Column: expectedURL
// Excel Data: https://example.com/dashboard

// Current URL
https://example.com/dashboard

// Result: ✅ Match
```

---

## Related Documentation

- [Page Location Variables](/documentation/variable#page-location-variable)
- [Field Settings](/documentation/form-fields/field-settings)
- [Default Value](/documentation/form-fields/field-settings#default-value)
- [String Matching](/documentation/field-types/string-matching)

---

## Notes

- URL matching is **case-sensitive**
- Matching is **exact string comparison** (not regex or pattern matching)
- Query parameters order matters for full URL matching
- Trailing slashes matter: `/page` ≠ `/page/`
- Protocol matters for full URL: `http://` ≠ `https://`
