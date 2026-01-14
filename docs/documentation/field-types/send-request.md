# Send Request

Send HTTP requests to external APIs and save the response data.

## Overview

The Send Request field type allows you to make HTTP requests to external servers and process the response. You can save the response in different formats and extract specific data using JSONPath.

<img src="/image/send-request-01.png" width="400" alt="Send Request">

## Configuration Options

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| **Request URL** | Text Input (via Default Value or Excel) | The URL to send the request to | Yes |
| **Request Method** | Dropdown | HTTP method for the request | Yes |
| **Request Output Type** | Dropdown | Format of the response data | Yes |
| **JSON Path Parameters** | Text Input | JSONPath expression to extract data | No |
| **Save Request Data** | Dropdown | Where to save the response data | Yes |

---

## Request URL

**Set in:** Default Value field option or Excel column

**Description:** The URL endpoint to send the HTTP request to.

<img src="/image/field-default-value-option.png" width="400" alt="Request URL">

### Using Default Value

Set the URL directly in the **Default Value** field option.

**Example:**

```
https://api.example.com/users
```

### Using Excel Column

Reference URL from your Excel sheet using the field column name.

**Syntax:** `{$columnName$}`

**Example:**

```javascript
// Excel Column: "apiURL"
// Excel Data: "https://api.example.com/products/123"

// In Default Value field
{$apiURL$}

// Result: Sends request to https://api.example.com/products/123
```

### Using Variables

You can use variables to create dynamic URLs.

**Example:**

```javascript
// In Default Value field
https://api.example.com/users/{$userId$}/posts

// If userId = "456"
// Sends request to: https://api.example.com/users/456/posts
```

---

## Request Method

**Field:** Dropdown

**Description:** Select the HTTP method for the request.

**Available Methods:**

| Method | Description | Use Case |
|--------|-------------|----------|
| **GET** | Retrieve data from server | Fetch data, read resources |
| **POST** | Send data to server | Create new resources, submit forms |
| **PUT** | Update existing data | Update entire resource |
| **PATCH** | Partially update data | Update specific fields |
| **DELETE** | Remove data from server | Delete resources |
| **OPTIONS** | Get supported methods | Check API capabilities |
| **HEAD** | Get headers only | Check resource existence |

**Reference:** [HTTP Methods - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

**Example:**

```javascript
// GET request
Request Method: GET
Request URL: https://api.example.com/users/123

// POST request
Request Method: POST
Request URL: https://api.example.com/users
```

---

## Request Output Type

**Field:** Dropdown

**Description:** Specify the format of the response data.

**Available Options:**

| Output Type | Description | Use Case |
|-------------|-------------|----------|
| **json** | Parse response as JSON | API responses, structured data |
| **text** | Treat response as plain text | HTML, XML, plain text responses |

**Example:**

```javascript
// JSON response
Request Output Type: json
Response: {"name": "John", "age": 30}
Result: Parsed as JSON object

// Text response
Request Output Type: text
Response: <html><body>Hello</body></html>
Result: Treated as plain text string
```

---

## JSON Path Parameters

**Field:** Text Input

**Description:** Extract specific data from JSON responses using JSONPath expressions.

**Library:** [JSONPath-Plus](https://github.com/JSONPath-Plus/JSONPath)

**When to use:** When you need to extract specific values from a JSON response instead of saving the entire response.

**Syntax:** JSONPath expression

### JSONPath Basics

| Expression | Description | Example |
|------------|-------------|---------|
| `$` | Root object | `$` |
| `$.property` | Direct property access | `$.name` |
| `$[0]` | Array element by index | `$[0]` |
| `$[*]` | All array elements | `$[*]` |
| `$.property[*]` | All elements in nested array | `$.users[*]` |
| `$..property` | Recursive descent | `$..email` |
| `$[?(@.property)]` | Filter expression | `$[?(@.age > 18)]` |

### Examples

**Example 1: Extract Single Value**

```javascript
// Response
{
  "user": {
    "name": "John Doe",
    "email": "john@example.com"
  }
}

// JSON Path
$.user.name

// Result
"John Doe"
```

**Example 2: Extract Array Element**

```javascript
// Response
{
  "users": [
    {"name": "John", "age": 30},
    {"name": "Jane", "age": 25}
  ]
}

// JSON Path
$.users[0].name

// Result
"John"
```

**Example 3: Extract All Elements**

```javascript
// Response
{
  "products": [
    {"id": 1, "name": "Product A"},
    {"id": 2, "name": "Product B"}
  ]
}

// JSON Path
$.products[*].name

// Result
["Product A", "Product B"]
```

**Example 4: Filter Data**

```javascript
// Response
{
  "users": [
    {"name": "John", "age": 30},
    {"name": "Jane", "age": 17},
    {"name": "Bob", "age": 25}
  ]
}

// JSON Path
$.users[?(@.age >= 18)].name

// Result
["John", "Bob"]
```

**Example 5: Recursive Search**

```javascript
// Response
{
  "company": {
    "departments": [
      {
        "name": "IT",
        "employees": [
          {"email": "john@example.com"},
          {"email": "jane@example.com"}
        ]
      }
    ]
  }
}

// JSON Path
$..email

// Result
["john@example.com", "jane@example.com"]
```

**Reference:** [JSONPath-Plus Documentation](https://github.com/JSONPath-Plus/JSONPath)

---

## Save Request Data

**Field:** Dropdown

**Description:** Choose where to save the response data.

**Available Options:**

| Option | Description | Use Case |
|--------|-------------|----------|
| **Save in Text Format** | Save response as plain text | Simple text responses, debugging |
| **Save in Scraper Data** | Save response in scraper data format | Structured data extraction, further processing |

**Example:**

```javascript
// Save in Text Format
Response: {"name": "John", "age": 30}
Saved as: '{"name": "John", "age": 30}'

// Save in Scraper Data
Response: {"name": "John", "age": 30}
Saved as: Structured data accessible by other fields
```

---

## Use Cases

### Fetch User Data from API

**Scenario:** Get user information from an external API.

**Configuration:**
- **Request URL:** `https://api.example.com/users/{$userId$}`
- **Request Method:** GET
- **Request Output Type:** json
- **JSON Path:** `$.user.name`
- **Save Request Data:** Save in Scraper Data

**Result:** Extracts and saves user name from API response.

---

### Submit Form Data to API

**Scenario:** Send form data to external API.

**Configuration:**
- **Request URL:** `https://api.example.com/submit`
- **Request Method:** POST
- **Request Output Type:** json
- **JSON Path:** `$.response.status`
- **Save Request Data:** Save in Text Format

**Result:** Submits data and saves response status.

---

### Extract Product List

**Scenario:** Get all product names from API.

**Configuration:**
- **Request URL:** `https://api.example.com/products`
- **Request Method:** GET
- **Request Output Type:** json
- **JSON Path:** `$.products[*].name`
- **Save Request Data:** Save in Scraper Data

**Result:** Extracts all product names as array.

---

### Verify API Response

**Scenario:** Check if API returns success status.

**Configuration:**
- **Request URL:** `https://api.example.com/status`
- **Request Method:** GET
- **Request Output Type:** json
- **JSON Path:** `$.status`
- **Save Request Data:** Save in Text Format

**Result:** Saves status value for verification.

---

## Best Practices

### ✅ Do's

- **Use HTTPS** - Always use secure HTTPS endpoints
- **Test JSONPath** - Verify JSONPath expressions before deployment
- **Handle errors** - Plan for failed requests
- **Use appropriate methods** - GET for reading, POST for creating
- **Validate responses** - Check response format and structure
- **Use variables** - Make URLs dynamic with Excel data

### ❌ Don'ts

- **Don't expose sensitive data** - Keep API keys secure
- **Don't use wrong methods** - Don't use POST for reading data
- **Don't ignore errors** - Handle failed requests properly
- **Don't use complex JSONPath unnecessarily** - Keep expressions simple
- **Don't forget output type** - Match output type with actual response
- **Don't hardcode URLs** - Use variables for flexibility

---

## Troubleshooting

### Request Failing

**Solutions:**
- Verify URL is correct and accessible
- Check if API endpoint is available
- Ensure request method is appropriate
- Verify network connectivity
- Check browser console for errors
- Test URL in browser or Postman first

---

### JSONPath Not Working

**Solutions:**
- Verify JSONPath syntax is correct
- Check if response is valid JSON
- Ensure output type is set to "json"
- Test JSONPath expression online
- Check for typos in property names
- Verify response structure matches expression

---

### Response Not Saving

**Solutions:**
- Verify "Save Request Data" option is selected
- Check if response is in expected format
- Ensure output type matches response
- Verify JSONPath extracts valid data
- Check browser console for errors

---

### Wrong Data Extracted

**Solutions:**
- Verify JSONPath expression is correct
- Check response structure
- Test JSONPath with sample response
- Ensure array indices are correct
- Verify filter expressions work as expected

---

## Examples

### Example 1: Simple GET Request

```javascript
// Configuration
Request URL: https://api.example.com/users/123
Request Method: GET
Request Output Type: json
JSON Path: $.name
Save Request Data: Save in Text Format

// Response
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com"
}

// Result: Saves "John Doe"
```

### Example 2: POST Request with Dynamic URL

```javascript
// Configuration
Request URL: https://api.example.com/users/{$userId$}/posts
Request Method: POST
Request Output Type: json
JSON Path: $.response.id
Save Request Data: Save in Scraper Data

// Excel Data
userId: "456"

// Result: Sends POST to https://api.example.com/users/456/posts
```

### Example 3: Extract Array Data

```javascript
// Configuration
Request URL: https://api.example.com/products
Request Method: GET
Request Output Type: json
JSON Path: $.products[*].name
Save Request Data: Save in Scraper Data

// Response
{
  "products": [
    {"id": 1, "name": "Laptop"},
    {"id": 2, "name": "Mouse"}
  ]
}

// Result: Saves ["Laptop", "Mouse"]
```

### Example 4: Filter and Extract

```javascript
// Configuration
Request URL: https://api.example.com/orders
Request Method: GET
Request Output Type: json
JSON Path: $.orders[?(@.status == 'completed')].id
Save Request Data: Save in Scraper Data

// Response
{
  "orders": [
    {"id": 1, "status": "completed"},
    {"id": 2, "status": "pending"},
    {"id": 3, "status": "completed"}
  ]
}

// Result: Saves [1, 3]
```

---

## Related Documentation

- [Field Settings](/documentation/form-fields/field-settings)
- [Default Value](/documentation/form-fields/field-settings#default-value)
- [Scraper Data](/documentation/form-fields/field-types#scraper-data)
- [HTTP Methods - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [JSONPath-Plus](https://github.com/JSONPath-Plus/JSONPath)

---

## Notes

- Requests are sent from the browser context
- CORS policies may restrict some requests
- Response size limits may apply
- JSONPath only works with JSON output type
- Empty JSONPath returns entire response
- Text output type returns raw response as string