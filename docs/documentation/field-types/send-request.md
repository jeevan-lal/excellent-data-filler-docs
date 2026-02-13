# Send Request

Send HTTP requests to external APIs and save the response data.

## Overview

The Send Request field type allows you to make HTTP requests to external servers and process the response. You can save the response in different formats and extract specific data using JSONPath.

## Configuration Options

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| **Request URL** | Text Input (via Default Value or Excel) | The URL to send the request to | Yes |
| **Request Method** | Dropdown | HTTP method for the request | Yes |
| **Content Type** | Dropdown | Content type for the request | Yes |
| **Do you want to set Headers in the request?** | Switch | Enable custom request headers | No |
| **Headers** | Textarea (JSON) | Custom headers in JSON format | No |
| **Do you want to set body payload in the request?** | Switch | Enable request body payload | No |
| **Payload** | Textarea (JSON) | Request body in JSON format | No |
| **Do you want to send request to the same site origin?** | Switch | Send request to same origin | No |
| **Retry request on Error?** | Switch | Enable retry mechanism on failure | No |
| **Max Retry (Times)** | Number | Maximum number of retry attempts | No |
| **Interval (Seconds)** | Number | Delay between retry attempts | No |
| **Are you using custom javascript function for return field responses?** | Switch | Enable custom JavaScript to modify response | No |
| **Request Output Type** | Dropdown | Format of the response data | Yes |
| **JSON Path Parameters** | Text Input | JSONPath expression to extract data | No |
| **Save Request Data** | Dropdown | Where to save the response data | Yes |


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

## Content Type

**Field:** Dropdown

**Description:** Specify the content type for the request. This determines how the request body is formatted and sent.

**Available Options:**

| Content Type | Value | Description | Use Case |
|--------------|-------|-------------|----------|
| **application/json** | json | Send data as JSON | API requests, structured data |
| **text/plain** | text | Send data as plain text | Simple text data |
| **multipart/form-data** | form-data | Send data as form data with files | File uploads, complex forms |
| **application/x-www-form-urlencoded** | form | Send data as URL-encoded form | Standard HTML forms |

**Example:**

```javascript
// JSON Content Type
Content Type: application/json
Payload: {"name": "John", "email": "john@example.com"}

// Form Data Content Type
Content Type: multipart/form-data
Payload: name=John&email=john@example.com

// Plain Text Content Type
Content Type: text/plain
Payload: Hello World
```

## Request Headers

**Field:** Switch + Textarea (JSON)

**Description:** Add custom HTTP headers to your request.

**Enable:** Turn on "Do you want to set Headers in the request?"

**Format:** JSON object with header key-value pairs

**Example:**

```json
{
  "Authorization": "Bearer YOUR_TOKEN_HERE",
  "X-Custom-Header": "custom-value",
  "Accept": "application/json"
}
```

**Common Headers:**

| Header | Description | Example |
|--------|-------------|---------|
| **Authorization** | Authentication token | `Bearer abc123...` |
| **Content-Type** | Request content type | `application/json` |
| **Accept** | Expected response type | `application/json` |
| **X-API-Key** | API key authentication | `your-api-key` |
| **User-Agent** | Client identification | `MyApp/1.0` |

**Use Cases:**
- API authentication with tokens
- Custom API headers
- Content negotiation
- CORS headers
- Rate limiting headers

## Request Payload

**Field:** Switch + Textarea (JSON)

**Description:** Send data in the request body (for POST, PUT, PATCH requests).

**Enable:** Turn on "Do you want to set body payload in the request?"

**Format:** JSON object or string depending on content type

**Example 1: JSON Payload**

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "age": 30,
  "active": true
}
```

**Example 2: Using Variables**

```json
{
  "name": "{$firstName$} {$lastName$}",
  "email": "{$email$}",
  "phone": "{$phone$}"
}
```

**Example 3: Nested Objects**

```json
{
  "user": {
    "name": "{$name$}",
    "contact": {
      "email": "{$email$}",
      "phone": "{$phone$}"
    }
  },
  "metadata": {
    "source": "extension",
    "timestamp": "{$currentTime$}"
  }
}
```

## Same Origin Request

**Field:** Switch

**Description:** Send the request to the same site origin as the current page.

**Enable:** Turn on "Do you want to send request to the same site origin?"

**Use Cases:**
- Internal API calls
- Same-domain requests
- Avoid CORS issues
- Session-based authentication

## Retry Mechanism

**Field:** Switch + Number Inputs

**Description:** Automatically retry failed requests with configurable attempts and intervals.

**Enable:** Turn on "Retry request on Error?"

**Configuration:**

| Option | Description | Default | Range |
|--------|-------------|---------|-------|
| **Max Retry (Times)** | Maximum number of retry attempts | 5 | 1-10 |
| **Interval (Seconds)** | Delay between retry attempts | 2 | 1-60 |

**Example:**

```
Retry request on Error: ✅ Enabled
Max Retry (Times): 5
Interval (Seconds): 2
```

**Behavior:**
1. Initial request fails
2. Wait 2 seconds
3. Retry request (attempt 1)
4. If fails, wait 2 seconds
5. Retry request (attempt 2)
6. Continue up to 5 retry attempts
7. If all retries fail, field returns error

**Use Cases:**
- Unstable network connections
- Rate-limited APIs
- Temporary server errors
- Timeout handling

## Custom JavaScript Function

**Field:** Switch

**Description:** Use custom JavaScript to modify the response before it's saved.

**Enable:** Turn on "Are you using custom javascript function for return field responses?"

**Setup:**
1. Add a **JavaScript Code** field type **above** the Send Request field
2. Enable the custom function option in Send Request field
3. Use the field listener to process the response

**JavaScript Code:**

```js
$fns.field.listener('EDF-FIELD-SEND-REQUEST', (output, callback) => {
  console.log("REQUEST:", output);
  
  // If custom function option is enabled, callback will work
  // You can set field error/success response like this
  
  // Success with modified data
  callback({ status: true, message: "DONE", data: output.response });
  
  // Or return error
  // callback({ status: false, message: "ERROR" });
});

$fns.return("1");
```

**Output Object Structure:**

```json
{
  "type": "EDF-FIELD-SEND-REQUEST",
  "response": {
    // The actual response from the API
  }
}
```

**Properties:**
- `type` - Listener type identifier
- `response` - Field type response data

**Example Use Cases:**

**1. Transform Response Data**
```js
$fns.field.listener('EDF-FIELD-SEND-REQUEST', (output, callback) => {
  // Extract specific field from response
  let userData = output.response.data.user;
  callback({ status: true, message: "User extracted", data: userData });
});
$fns.return("1");
```

**2. Validate Response**
```js
$fns.field.listener('EDF-FIELD-SEND-REQUEST', (output, callback) => {
  if (output.response.status === "success") {
    callback({ status: true, message: "Valid response", data: output.response });
  } else {
    callback({ status: false, message: "Invalid response" });
  }
});
$fns.return("1");
```

**3. Format Response**
```js
$fns.field.listener('EDF-FIELD-SEND-REQUEST', (output, callback) => {
  // Convert to uppercase
  let formatted = JSON.stringify(output.response).toUpperCase();
  callback({ status: true, message: "Formatted", data: formatted });
});
$fns.return("1");
```

**4. Combine Multiple Values**
```js
$fns.field.listener('EDF-FIELD-SEND-REQUEST', (output, callback) => {
  let fullName = output.response.firstName + " " + output.response.lastName;
  callback({ status: true, message: "Combined", data: fullName });
});
$fns.return("1");
```

## Request Output Type

**Field:** Dropdown

**Description:** Specify the format of the response data.

**Available Options:**

| Output Type | Description | Use Case |
|-------------|-------------|----------|
| **json** | Parse response as JSON | API responses, structured data |
| **text** | Treat response as plain text | Plain text responses |
| **xml** | Parse response as XML | XML API responses, SOAP services |
| **html** | Parse response as HTML | HTML pages, web scraping |
| **blob** | Treat response as binary data | File downloads, images, PDFs |

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

// XML response
Request Output Type: xml
Response: <?xml version="1.0"?><user><name>John</name></user>
Result: Parsed as XML document

// HTML response
Request Output Type: html
Response: <div class="content">Hello World</div>
Result: Parsed as HTML document

// Blob response
Request Output Type: blob
Response: Binary file data
Result: Treated as binary blob
```

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

## Save Request Data

**Field:** Dropdown

**Description:** Choose where to save the response data.

**Available Options:**

| Option | Description | Use Case |
|--------|-------------|----------|
| **Do nothing** | Don't save the response | When you only need to trigger the request |
| **Save in Field** | Save response in the field column | Store response as text in Excel column |
| **Save in Scraper Data** | Save response in scraper data format | Structured data extraction, further processing |

**Example:**

```javascript
// Do nothing
Response: {"name": "John", "age": 30}
Result: Request is sent but response is not saved

// Save in Field
Response: {"name": "John", "age": 30}
Saved as: '{"name": "John", "age": 30}' in the field's Excel column

// Save in Scraper Data
Response: {"name": "John", "age": 30}
Saved as: Structured data accessible by other fields
```

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

### Example 5: Advanced Request with All Features

This example demonstrates using headers, payload, retry mechanism, and custom JavaScript function together.

**Step 1: Add JavaScript Code Field (Above Send Request)**

```js
$fns.field.listener('EDF-FIELD-SEND-REQUEST', (output, callback) => {
  console.log("API Response:", output);
  
  // Validate response
  if (output.response && output.response.success) {
    // Extract user data
    let userData = {
      id: output.response.data.id,
      name: output.response.data.name,
      email: output.response.data.email
    };
    
    callback({ 
      status: true, 
      message: "User data extracted successfully", 
      data: JSON.stringify(userData) 
    });
  } else {
    callback({ 
      status: false, 
      message: "API returned error: " + (output.response.error || "Unknown error")
    });
  }
});

$fns.return("1");
```

**Step 2: Configure Send Request Field**

```javascript
// Configuration
Request URL: https://api.example.com/users
Request Method: POST
Content Type: application/json

// Headers
Do you want to set Headers in the request?: ✅ Enabled
Headers:
{
  "Authorization": "Bearer {$apiToken$}",
  "X-API-Key": "{$apiKey$}",
  "Content-Type": "application/json"
}

// Payload
Do you want to set body payload in the request?: ✅ Enabled
Payload:
{
  "username": "{$username$}",
  "email": "{$email$}",
  "firstName": "{$firstName$}",
  "lastName": "{$lastName$}",
  "metadata": {
    "source": "extension",
    "timestamp": "{$currentTimestamp$}"
  }
}

// Retry Settings
Retry request on Error?: ✅ Enabled
Max Retry (Times): 3
Interval (Seconds): 5

// Custom Function
Are you using custom javascript function for return field responses?: ✅ Enabled

// Output Settings
Request Output Type: json
JSON Path: $
Save Request Data: Save in Field
```

**API Response:**

```json
{
  "success": true,
  "data": {
    "id": 12345,
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

**Result:**

The custom JavaScript function extracts and formats the user data, saving:
```json
{"id":12345,"name":"John Doe","email":"john@example.com"}
```

**Behavior:**
1. Sends POST request with custom headers and payload
2. If request fails, retries up to 3 times with 5-second intervals
3. On success, custom JavaScript validates and extracts specific fields
4. Saves formatted data to Excel column


## Related Documentation

- [Field Settings](/documentation/form-fields/field-settings)
- [Default Value](/documentation/form-fields/field-settings#default-value)
- [Scraper Data](/documentation/form-fields/field-types#scraper-data)
- [HTTP Methods - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [JSONPath-Plus](https://github.com/JSONPath-Plus/JSONPath)

## Notes

- Requests are sent from the browser context
- CORS policies may restrict some requests
- Response size limits may apply
- JSONPath only works with JSON output type
- Empty JSONPath returns entire response
- Text output type returns raw response as string