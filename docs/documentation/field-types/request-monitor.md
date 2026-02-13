# Request Monitor

The request running in the background of the page can be detected through this field type.

## Options

| Option                                                                                        |
| --------------------------------------------------------------------------------------------- |
| [Request URL](#request-url)                                                                   |
| [Request URL Type](#request-url-type)                                                         |
| [Request Method](#request-method)                                                             |
| [Timeout to Monitor Request](#timeout-to-monitor-request)                                     |
| [If you want to check the Request Status Code](#if-you-want-to-check-the-request-status-code) |
| [Monitor Request in the background process](#monitor-request-in-the-background-process)       |
| [Do you want to click on an element?](#do-you-want-to-click-on-an-element)                    |
| [Enter Element Selector/Xpath](#enter-element-selector-xpath)                                 |
| [Save to Excel](#save-to-excel)                                                               |

## Request URL

The URL of the request is given in the value of this field. You can also give the URL in the **default value** of the field.

## Request URL Type

The type of the given URL is given in this option.

- **Match with Full URL**: Matches the complete URL including protocol, domain, path, and query parameters
  - Example: `https://formfiller.ctechhindi.in/example/example-8.php?id=123`
  - Use this when you need to match the exact complete URL
  
- **Match with URL pathname**: Matches only the path portion of the URL (everything after the domain)
  - Example: `/example/example-8.php`
  - This will match any request with this pathname, regardless of the domain or query parameters
  - **Use case**: When the same API endpoint is used across different domains or environments
  - Full URL: `https://formfiller.ctechhindi.in/example/example-8.php?id=123`
  - Pathname to match: `/example/example-8.php`
  
- **Match with URL hostname**: Matches only the domain/hostname portion of the URL
  - Example: `formfiller.ctechhindi.in`
  - This will match any request to this domain, regardless of the path or query parameters
  - **Use case**: When you want to monitor all requests going to a specific domain
  - Full URL: `https://formfiller.ctechhindi.in/example/example-8.php?id=123`
  - Hostname to match: `formfiller.ctechhindi.in`
  
- **Match with RegEx**: Use regular expressions for advanced URL matching patterns
  - Example: `^https://.*\.ctechhindi\.in/api/.*$`
  - Provides flexible pattern matching for complex URL structures
  - [Test your RegEx patterns in real-time](/documentation/regex)

## Request Method

The type of method of the request is given in it.

- GET
- POST
- PUT
- PATCH
- DELETE
- OPTIONS
- HEAD

## Timeout to Monitor Request

After completion of the time given in this, this field returns false. In this the time is given in **seconds**.

## If you want to check the Request Status Code

After the request is completed, you can check the status code of that request through that option.

## Monitor Request in the background process

By default this field waits for the request to be completed and the filler does not proceed until something changes to the element. But after turning on this option, it checks the completion of the request in the **background** and executes the filler next field.

::: details After turning on this option, it checks the request in the background, then how to check whether the request has completed or not?

Next in which field do you want to check whether the request has been completed or not, you can use the option given below in the settings of the field in which you want to check.


[Wait until the response status of the given request monitor fields comes](/documentation/form-fields/field-settings#wait-until-the-response-status-of-the-given-request-monitor-fields-comes)
:::

## Do you want to click on an element?

This is a **switch field** that allows you to trigger a click action on a specific element before monitoring for requests. When enabled, the extension will click on the specified element and then wait for the network request to occur.

This is useful when:
- You need to trigger an action (like clicking a button) that initiates a network request
- The request only occurs after user interaction
- You want to automate the click and monitor the request in a single field

## Enter Element Selector/Xpath

When the **"Do you want to click on an element?"** option is enabled, this field becomes available. Here you can specify the target element that should be clicked using either:

- **CSS Selector**: e.g., `#submitButton`, `.load-data-btn`, `button[type="submit"]`
- **XPath**: e.g., `//button[@id='submitButton']`, `//div[@class='load-data-btn']`

The extension will locate this element and click it before starting to monitor the network requests.

## Save to Excel

This option allows you to **automatically save the request response data to an Excel sheet**. When enabled, the response from the monitored request will be captured and saved to your Excel file.

### Column Naming Convention

The data is saved using the following naming pattern:

```
options.fieldName + "||REQUEST-DATA"
```

**Example:**
- If your field name is `userDataRequest`, the Excel column will be named: `userDataRequest||REQUEST-DATA`
- If your field name is `apiResponse`, the Excel column will be named: `apiResponse||REQUEST-DATA`

This makes it easy to identify which field captured the request data and allows you to use this data in subsequent fields or for record-keeping purposes.

### Use Cases

- Capturing API responses for verification
- Storing dynamic data returned from server requests
- Logging request data for debugging or analysis
- Extracting specific information from network responses

## Related Documentation

For advanced request monitoring using JavaScript code, see:
- [JavaScript Code - Request Monitoring](/documentation/field-types/javascript-code.html#request-monitoring)
