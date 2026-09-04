# Predefined Function

You can use validation and condition while filling the form using predefined function. The predefined function can be added to the field of the form.

You can also use [variables](variable) in the value of predefined functions. like this

```
{$excel_column_name$}
```

## checkAttributeExists

If you want to check [attribute](https://www.w3schools.com/html/html_attributes.asp) in the html element whether the attribute is in the element or not also check attribute value match or not match, then you can use it.

| Options                  | Required | Description               | Value                                          |
| ------------------------ | -------- | ------------------------- | ---------------------------------------------- |
| Selector Type            | true     | Element Selector Type     |                                                |
| Selector Query           | true     | Element Selector Query    |                                                |
| Field Value              | true     | Fill Value with Condition | [attribute_name][attribute_value][force_check] |
| Wait until element is found in the page. | false    |                           |                                                |

- **Field Value** - [string][string][boolean]

## checkAttributeNotExists

If you want to check [attribute](https://www.w3schools.com/html/html_attributes.asp) in the html element not exists also check attribute value match or not match, then you can use it.

| Options                  | Required | Description               | Value                                          |
| ------------------------ | -------- | ------------------------- | ---------------------------------------------- |
| Selector Type            | true     | Element Selector Type     |                                                |
| Selector Query           | true     | Element Selector Query    |                                                |
| Field Value              | true     | Fill Value with Condition | [attribute_name][attribute_value][force_check] |
| Wait until element is found in the page. | false    |                           |                                                |

- **Field Value** - [string][string][boolean]
- `[name][][true]`, if name attribute not exists in element then return true
- `[name][username][true]`, if name attribute exists in element but attribute value is not username then return true

## checkElementText

To match the **text/value** of an element according to the condition, then you can use this function.

| Options                                                 | Required | Description               | Value                                     |
| ------------------------------------------------------- | -------- | ------------------------- | ----------------------------------------- |
| Selector Type                                           | true     | Element Selector Type     |                                           |
| Selector Query                                          | true     | Element Selector Query    |                                           |
| Field Value                                             | true     | Fill Value with Condition | [comparison_operators][text][force_check] |
| Wait until element is found in the page.                                | false    |                           |                                           |
| Execute the action of the function on multiple elements | false    |                           |                                           |

### Structure of Field Value

- **[parameter-1][parameter-2][parameter-3]**
- **[comparison operators][text][wait until text matches]**
- **[operator][string][boolean]**

:::info
[Comparison Operators](https://www.w3schools.com/js/js_comparisons.asp) (==, !=, >, <, <=, >=)
:::

## checkElementLength

To match the **length** of an element according to the condition, then you can use this function.

| Options                  | Required | Description               | Value                                              |
| ------------------------ | -------- | ------------------------- | -------------------------------------------------- |
| Selector Type            | true     | Element Selector Type     |                                                    |
| Selector Query           | true     | Element Selector Query    |                                                    |
| Field Value              | true     | Fill Value with Condition | [comparison_operators][length_number][force_check] |
| Wait until element is found in the page. | false    |                           |                                                    |

### Structure of Field Value

- **[parameter-1][parameter-2][parameter-3]**
- **[comparison operators][length_number][wait until length matches]**
- **[operator][string][boolean]**

:::info
[Comparison Operators](https://www.w3schools.com/js/js_comparisons.asp) (==, !=, >, <, <=, >=)
:::

### Value Example

- [==][20][true]
- [>][3][false]

## checkElementExists {#checkelementexists}

Checks whether a target element exists in the DOM of the active web page.

| Options | Required | Description | Values / Types |
| --- | --- | --- | --- |
| **Selector Type** | `true` | Element locator type. Supports both CSS selectors and XPath addresses. | `Selector`, `XPath` |
| **Selector Query** | `true` | The CSS selector query or XPath address targeting the element. | e.g., `#username`, `//input[@id='username']` |
| **Wait until element is found in the page (`isForceCheck`)** | `false` | When enabled, waits continuously until the element is found in the DOM without timing out. | Toggle ON / OFF (`true` / `false`) |

### Behavior

- **When `isForceCheck` is `true` (Wait until element is found)**: The function continuously monitors the DOM and waits until the target element appears and matches. **It does not time out**, ensuring subsequent actions pause safely until dynamic asynchronous elements are rendered.
- **When `isForceCheck` is `false`**: Performs an immediate check. If the element is present in the DOM, it returns `true`; if not found, it returns `false` immediately without waiting.

---

## checkElementDestroy {#checkelementdestroy}

Checks whether a specified element has been **removed / destroyed** from the DOM. This is especially useful for waiting until a loading spinner, overlay, or progress modal disappears before proceeding.

| Options | Required | Description | Values / Types |
| --- | --- | --- | --- |
| **Selector Type** | `true` | Element locator type. Supports both CSS selectors and XPath addresses. | `Selector`, `XPath` |
| **Selector Query** | `true` | The CSS selector query or XPath address targeting the element. | e.g., `.spinner-border`, `//div[@id='loading-mask']` |
| **Wait until element is destroy in the page (`isForceCheck`)** | `false` | When enabled, waits continuously until the element disappears from the DOM without timing out. | Toggle ON / OFF (`true` / `false`) |

### Behavior

- **When `isForceCheck` is `true` (Wait until element is destroy)**: The function waits continuously until the element is completely removed/destroyed from the page DOM. **It does not time out**, executing subsequent fields only after the element has vanished.
- **When `isForceCheck` is `false`**: Immediately checks if the element is absent. Returns `true` if the element is not found (destroyed), or `false` if it still exists in the DOM.

---

## checkElementVisible {#checkelementvisible}

Checks whether a target element exists in the DOM **and is visible** to the user (i.e. not hidden with `display: none`, `visibility: hidden`, or zero dimensions).

| Options | Required | Description | Values / Types |
| --- | --- | --- | --- |
| **Selector Type** | `true` | Element locator type. Supports both CSS selectors and XPath addresses. | `Selector`, `XPath` |
| **Selector Query** | `true` | The CSS selector query or XPath address targeting the element. | e.g., `.modal.show`, `//div[contains(@class,'alert-success')]` |
| **Wait until element is found in the page (`isForceCheck`)** | `false` | When enabled, waits continuously until the element becomes visible without timing out. | Toggle ON / OFF (`true` / `false`) |

### Behavior

- **When `isForceCheck` is `true` (Wait until element is visible)**: The function continuously monitors the element and waits until it is fully visible on the screen. **It does not time out**, making it ideal for waiting on dialog popups, confirmation prompts, or interactive cards that animate into view.
- **When `isForceCheck` is `false`**: Immediately checks visibility. If the element is absent or currently invisible, it returns `false` without waiting.

---

## checkElementInvisible {#checkelementinvisible}

Checks whether a target element is invisible or hidden from view on the page (e.g. styled with `display: none`, `visibility: hidden`, or removed from visible flow).

| Options | Required | Description | Values / Types |
| --- | --- | --- | --- |
| **Selector Type** | `true` | Element locator type. Supports both CSS selectors and XPath addresses. | `Selector`, `XPath` |
| **Selector Query** | `true` | The CSS selector query or XPath address targeting the element. | e.g., `#progress-bar`, `//div[contains(@class,'loading-overlay')]` |
| **Wait until element is found in the page (`isForceCheck`)** | `false` | When enabled, waits continuously until the element becomes invisible without timing out. | Toggle ON / OFF (`true` / `false`) |

### Behavior

- **When `isForceCheck` is `true` (Wait until element is invisible)**: The function continuously waits until the target element becomes invisible or hidden. **It does not time out**, ensuring subsequent fields only execute after background processing or loading indicators have completed and hidden.
- **When `isForceCheck` is `false`**: Immediately verifies whether the element is hidden or invisible at that exact moment without waiting.

---

## elementVisible

If there is any element in the page and that element is invisible to us then you can use this function to make that element visible.

| Options        | Required |
| -------------- | -------- |
| Selector Type  | true     |
| Selector Query | true     |

## elementInvisible

If there is any element in the page and that element is visible to us then you can use this function to make that element invisible.

| Options        | Required |
| -------------- | -------- |
| Selector Type  | true     |
| Selector Query | true     |

## removeElement

If you want to remove element from page.

| Options        | Required |
| -------------- | -------- |
| Selector Type  | true     |
| Selector Query | true     |

## cleanSessionStorage

This method removes all the Session Storage Object item for this domain.

## cleanLocalStorage

This method removes all the Local Storage Object item for this domain.

---

## setLocalStorage

Store data in the browser's localStorage for the current domain.

| Options     | Required | Description                         | Value          |
| ----------- | -------- | ----------------------------------- | -------------- |
| Field Value | true     | Key and value to store in localStorage | [key][value] |

### Structure of Field Value

- **[parameter-1][parameter-2]**
- **[key][value]**
- **[string][string]**

### Value Examples

```
[user_id][user01]
[session_token][abc123xyz]
[user_name][John Doe]
```

**Set in:** Field Default Value or Excel Field Column

**Notes:**
- Uses browser `localStorage` API
- Data persists across browser sessions (not removed after browser close)
- Data is domain-specific (cannot access data from other domains)
- Storage limit is typically 5-10MB per domain

**Example Usage:**

```
// Store user ID
[user_id][user123]

// Store with variable
[auth_token][{$token$}]
```

---

## getLocalStorage

Retrieve data from the browser's localStorage for the current domain.

| Options     | Required | Description                                    | Value                        |
| ----------- | -------- | ---------------------------------------------- | ---------------------------- |
| Field Value | true     | Key, force check, and delete options | [key][force_check][is_delete] |

### Structure of Field Value

- **[parameter-1][parameter-2][parameter-3]**
- **[key][force_check][is_delete]**
- **[string][boolean][boolean]**

### Value Examples

```
[user_id][true][true]   - Get key 'user_id' value, wait until key exists, then delete the key after retrieval
[user_id][true][false]  - Get key 'user_id' value, wait until key exists, don't delete the key
[user_id][false][false] - Get key 'user_id' value, if found return value, if not return error
```

**Set in:** Field Default Value or Excel Field Column

**Parameters:**
- **key** (string): The localStorage key to retrieve
- **force_check** (boolean): 
  - `true` - Wait until the key exists in storage before returning
  - `false` - Return immediately (error if key doesn't exist)
- **is_delete** (boolean):
  - `true` - Delete the key after retrieving its value
  - `false` - Keep the key in storage after retrieval

**Notes:**
- Uses browser `localStorage` API
- Data is domain-specific (cannot access data from other domains)
- Returns the stored value or error if key doesn't exist (when force_check is false)

**Example Usage:**

```
// Get and delete
[user_id][true][true]

// Get and keep
[session_token][true][false]

// Get without waiting
[user_name][false][false]
```

---

## setSessionStorage

Store data in the browser's sessionStorage for the current domain.

| Options     | Required | Description                              | Value          |
| ----------- | -------- | ---------------------------------------- | -------------- |
| Field Value | true     | Key and value to store in sessionStorage | [key][value] |

### Structure of Field Value

- **[parameter-1][parameter-2]**
- **[key][value]**
- **[string][string]**

### Value Examples

```
[user_id][user01]
[temp_token][xyz789]
[form_state][active]
```

**Set in:** Field Default Value or Excel Field Column

**Notes:**
- Uses browser `sessionStorage` API
- Data is automatically removed when browser/tab is closed
- Data is domain-specific (cannot access data from other domains)
- Storage limit is typically 5-10MB per domain
- Each tab has its own sessionStorage

**Example Usage:**

```
// Store temporary user ID
[user_id][temp123]

// Store with variable
[page_state][{$state$}]
```

---

## getSessionStorage

Retrieve data from the browser's sessionStorage for the current domain.

| Options     | Required | Description                                       | Value                        |
| ----------- | -------- | ------------------------------------------------- | ---------------------------- |
| Field Value | true     | Key, force check, and delete options | [key][force_check][is_delete] |

### Structure of Field Value

- **[parameter-1][parameter-2][parameter-3]**
- **[key][force_check][is_delete]**
- **[string][boolean][boolean]**

### Value Examples

```
[user_id][true][true]   - Get key 'user_id' value, wait until key exists, then delete the key after retrieval
[user_id][true][false]  - Get key 'user_id' value, wait until key exists, don't delete the key
[user_id][false][false] - Get key 'user_id' value, if found return value, if not return error
```

**Set in:** Field Default Value or Excel Field Column

**Parameters:**
- **key** (string): The sessionStorage key to retrieve
- **force_check** (boolean): 
  - `true` - Wait until the key exists in storage before returning
  - `false` - Return immediately (error if key doesn't exist)
- **is_delete** (boolean):
  - `true` - Delete the key after retrieving its value
  - `false` - Keep the key in storage after retrieval

**Notes:**
- Uses browser `sessionStorage` API
- Data is domain-specific (cannot access data from other domains)
- Data is automatically removed when browser/tab is closed
- Returns the stored value or error if key doesn't exist (when force_check is false)

**Example Usage:**

```
// Get and delete
[temp_token][true][true]

// Get and keep
[form_state][true][false]

// Get without waiting
[user_session][false][false]
```

---

## Storage Comparison

| Feature | localStorage | sessionStorage |
|---------|-------------|----------------|
| **Persistence** | Survives browser close | Cleared on browser/tab close |
| **Scope** | Domain-wide, all tabs | Per tab/window |
| **Storage Limit** | ~5-10MB | ~5-10MB |
| **Use Case** | Long-term data | Temporary session data |

---

## countCharLength

You can count given character in the element string.

| Options                  | Required | Description               | Value                      |
| ------------------------ | -------- | ------------------------- | -------------------------- |
| Selector Type            | true     | Element Selector Type     |                            |
| Selector Query           | true     | Element Selector Query    |                            |
| Field Value              | true     | Fill Value with Condition | [a][true] <br> [In][false] |
| Wait until element is found in the page. | false    |                           |                            |

### Structure of Field Value

- **[parameter-1][parameter-2]**
- **[string matching][case-sensitive]**
- **[string][boolean]**

::: info Example
If element string is `"Indian"` and field value is `"[i][true]"` then this function return 2;

Indian => [i][true] => 2 <br>
Indian => [i][false] => 1 <br>
Indian => [In][false] => 1 <br>
Indian => [A][false] => 0 <br>
:::

## countCharsLength

You can count total characters in string.

| Options                  | Required | Description            | Value |
| ------------------------ | -------- | ---------------------- | ----- |
| Selector Type            | true     | Element Selector Type  |       |
| Selector Query           | true     | Element Selector Query |       |
| Wait until element is found in the page. | false    |                        |       |

::: info Example
If element string is `"India"` then this function return 5;
:::

## countSplitArrayLength

You can count split array length.

| Options                  | Required | Description            | Value        |
| ------------------------ | -------- | ---------------------- | ------------ |
| Selector Type            | true     | Element Selector Type  |              |
| Selector Query           | true     | Element Selector Query |              |
| Field Value              | true     | Split String           | ,, <br> \r\n |
| Wait until element is found in the page. | false    |                        |              |

::: info Example
If element string is `"India,,Israel"` and field value is `",,"` then this function return 2;
:::

::: warning NOTE
If there are values ​​in new line then use this `\r\n` for split values.
:::

## countTableRows

You can check the rows of the table according to the condition.

| Options                  | Required | Description               | Value                             |
| ------------------------ | -------- | ------------------------- | --------------------------------- |
| Selector Type            | true     | Element Selector Type     |                                   |
| Selector Query           | true     | Element Selector Query    |                                   |
| Field Value              | true     | Fill Value with Condition | [==][2][true] <br> [<=][3][false] |
| Wait until element is found in the page. | false    |                           |                                   |

### Structure of Field Value

- **[parameter-1][parameter-2][parameter-3]**
- **[comparison operators][number of rows][wait until row matches]**
- **[string][number][boolean]**

:::info
[Comparison Operators](https://www.w3schools.com/js/js_comparisons.asp) (>, <, ==, !=, <=, >=)
:::

## checkDropdownValue

If you want to check for a string in the dropdown element options value, then you can use it. If string matched then field return option text.

| Options        | Required | Description               | Value                           |
| -------------- | -------- | ------------------------- | ------------------------------- |
| Selector Type  | true     | Element Selector Type     |                                 |
| Selector Query | true     | Element Selector Query    |                                 |
| Field Value    | true     | Fill Value with Condition | [option1][true] <br> [M][false] |

### Structure of Field Value

- **[parameter-1][parameter-2]**
- **[search string][wait until string matches]**
- **[string][boolean]**

## checkDropdownText

If you want to check for a string in the dropdown element options name, then you can use it. If string matched then field return option value.

| Options        | Required | Description               | Value                           |
| -------------- | -------- | ------------------------- | ------------------------------- |
| Selector Type  | true     | Element Selector Type     |                                 |
| Selector Query | true     | Element Selector Query    |                                 |
| Field Value    | true     | Fill Value with Condition | [option1][true] <br> [M][false] |

### Structure of Field Value

- **[parameter-1][parameter-2]**
- **[search string][wait until string matches]**
- **[string][boolean]**

## downloadFile

Wait for download (file) to complete and perform given action when download is done, also you can attach this function with given button

:::info
Suppose you have a button when clicked, some file starts downloading and you want to wait until this downloading is done
and perform some action after it.
:::

[Demo](https://formfiller.ctechhindi.in/example/example-24.php)

| Options                  | Required | Description            | Value |
| ------------------------ | -------- | ---------------------- | ----- |
| Selector Type            | false    | Element Selector Type  |       |
| Selector Query           | false    | Element Selector Query |       |
| Trigger Javascript Event | true     | Enter Event Name       | click |

## insertClassName

The `insertClassName` method adds one or more CSS class names to the element. This method does not remove existing class attributes, it only adds one or more class names to the class attribute.

| Options                                                 | Required | Description            | Value                   |
| ------------------------------------------------------- | -------- | ---------------------- | ----------------------- |
| Selector Type                                           | true     | Element Selector Type  |                         |
| Selector Query                                          | true     | Element Selector Query |                         |
| Field Value                                             | true     | Fill css class name    | bg-danger,text-white,.. |
| Wait until element is found in the page.                                | false    |                        |                         |
| Execute the action of the function on multiple elements | false    |                        |                         |

## removeClassName

This `removeClassName` method removes one or more the element CSS class name.

| Options                                                 | Required | Description            | Value                   |
| ------------------------------------------------------- | -------- | ---------------------- | ----------------------- |
| Selector Type                                           | true     | Element Selector Type  |                         |
| Selector Query                                          | true     | Element Selector Query |                         |
| Field Value                                             | true     | Fill CSS class name    | bg-danger,text-white,.. |
| Wait until element is found in the page.                                | false    |                        |                         |
| Execute the action of the function on multiple elements | false    |                        |                         |

:::info
If you want to remove all element classes then set value `remove-all-classes`.
:::

## insertCSSText

The `insertCSSText` method sets the text of the element's inline style. This method removes the existing inline style.

| Options                                                 | Required | Description            | Value                       |
| ------------------------------------------------------- | -------- | ---------------------- | --------------------------- |
| Selector Type                                           | true     | Element Selector Type  |                             |
| Selector Query                                          | true     | Element Selector Query |                             |
| Field Value                                             | true     | Fill CSS style name    | float:left;margin-top:75px; |
| Wait until element is found in the page.                                | false    |                        |                             |
| Execute the action of the function on multiple elements | false    |                        |                             |

## removeCSSText

The `removeCSSText` method remove the text of the element's inline style.

| Options                                                 | Required | Description            | Value               |
| ------------------------------------------------------- | -------- | ---------------------- | ------------------- |
| Selector Type                                           | true     | Element Selector Type  |                     |
| Selector Query                                          | true     | Element Selector Query |                     |
| Field Value                                             | true     | Fill CSS style name    | float,margin-top,.. |
| Wait until element is found in the page.                                | false    |                        |                     |
| Execute the action of the function on multiple elements | false    |                        |                     |

:::info
If you want to remove all element style then set value `remove-all-css-text`.
:::

## insertElementAttribute

The `insertElementAttribute` method sets the value of an attribute on the element. If the attribute already exists, the value is updated otherwise a new attribute is added with the specified **name** and **value**.

| Options                                                 | Required | Description                   | Value            |
| ------------------------------------------------------- | -------- | ----------------------------- | ---------------- |
| Selector Type                                           | true     | Element Selector Type         |                  |
| Selector Query                                          | true     | Element Selector Query        |                  |
| Field Value                                             | true     | Fill attribute name and value | attName,attValue |
| Wait until element is found in the page.                                | false    |                               |                  |
| Execute the action of the function on multiple elements | false    |                               |                  |

## removeElementAttribute

If you want to remove the attribute of an element then you can use it one or more.

| Options                                                 | Required | Description            | Value                       |
| ------------------------------------------------------- | -------- | ---------------------- | --------------------------- |
| Selector Type                                           | true     | Element Selector Type  |                             |
| Selector Query                                          | true     | Element Selector Query |                             |
| Field Value                                             | true     | Fill attribute name    | attName,attName,attName,... |
| Wait until element is found in the page.                                | false    |                        |                             |
| Execute the action of the function on multiple elements | false    |                        |                             |

## scrollToTopLeft

Use this method to scroll the page from top to left.

## scrollToTopRight

Use this method to scroll the page from top to right.

## scrollToBottomLeft

Use this method to scroll the page from bottom to left.

## scrollToBottomRight

Use this method to scroll the page from bottom to right.

## scrollIntoView

The `scrollIntoView` method scrolls an element into the visible area of the browser window.

- https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

| Options                  | Required | Description                                                                                  |
| ------------------------ | -------- | -------------------------------------------------------------------------------------------- |
| Selector Type            | true     | Element Selector Type                                                                        |
| Selector Query           | true     | Element Selector Query                                                                       |
| Field Value              | true     | [Params](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters) |
| Wait until element is found in the page. | false    |                                                                                              |

## playSound

If you use this function, then the tab in which the sound is playing will not pause.

## waitSeconds

If you want to wait for some time, then you can wait by giving value in seconds through this function.

| Options     | Required | Description  |
| ----------- | -------- | ------------ |
| Field Value | true     | Fill seconds |

:::v-pre
:::tip
Use variable `{{random.integer[0][12]}}` for random seconds.
:::

## getPageTitle

If you want to get page title string.

## setPageTitle

If you want to **set/change** page title.

| Options     | Required | Description       |
| ----------- | -------- | ----------------- |
| Field Value | true     | Fill Title String |

## isWindowChild

If you want to check whether the current window is a child window or not, then you can use it. This function returns `true` (1) if it is a child window, `false` (0) otherwise.

## isWindowIframe

If you want to check whether the current window is an iframe or not, then you can use it. This function returns `true` (1) if it is an iframe, `false` (0) otherwise.

## countElementLength

To count the **length** of an element then you can use this function.

| Options        | Required | Description            |
| -------------- | -------- | ---------------------- |
| Selector Type  | true     | Element Selector Type  |
| Selector Query | true     | Element Selector Query |

## checkRadioState

Use this function to determine whether a radio button or an entire radio button group is checked or unchecked.

| Options                  | Required | Description               | Value |
| ------------------------ | -------- | ------------------------- | ----- |
| Selector Type            | true     | Element Selector Type     |       |
| Selector Query           | true     | Element Selector Query    |       |
| Field Value              | true     | Radio State Configuration | `[state][is_group][force_check]` |
| Wait until element is found in the page. | false | | |

### Structure of Field Value

- **[parameter-1][parameter-2][parameter-3]**
- **[state][is_group][force_check]**
- **[boolean][boolean][boolean]**

### Value Examples

```
[true][true][false]
[false][false][false]
```

## addRandomTableRows

Use this function to dynamically insert random placeholder rows with custom text at the top or bottom of a target table.

| Options                  | Required | Description               | Value |
| ------------------------ | -------- | ------------------------- | ----- |
| Selector Type            | true     | Target Table Selector Type |      |
| Selector Query           | true     | Target Table Selector Query |     |
| Field Value              | true     | Row Configuration         | `[row_count][position][placeholder]` |

### Structure of Field Value

- **[parameter-1][parameter-2][parameter-3]**
- **[row_count][position][placeholder]**
- **[number][string][string]**

### Value Examples

```
[2][bottom][--]
[5][top][--]
```

## waitForPageLoad

Use this function to wait until a web page or iframe finishes loading completely before proceeding with execution.

| Options                  | Required | Description               | Value |
| ------------------------ | -------- | ------------------------- | ----- |
| Selector Type            | false    | Optional iframe selector type |   |
| Selector Query           | false    | Optional iframe selector query |  |
| Field Value              | true     | Timeout in milliseconds   | `timeout` |

### Configuration

- Set **timeout** in milliseconds in **Field Value**
- Set **iframe selector** in **Field Selector Query** (optional, when waiting for a specific iframe)

## closeStatusBar

Close the injected **status bar** from the current web page.

| Options                  | Required | Description                           | Value |
| ------------------------ | -------- | ------------------------------------- | ----- |
| Selector Type            | false    | Not required                          |       |
| Selector Query           | false    | Not required                          |       |
| Field Value              | false    | Optional flag (`false` to skip action)|       |

### Usage

Use this function in your automation sequence whenever you need to dismiss or hide the extension's status bar from the current page (for example, prior to taking full-page screenshots, printing, or upon finishing form actions).

