# Page Loading

Wait for page loading indicators to appear or disappear before proceeding.

## Overview

The Page Loading field type allows you to wait for loading elements (spinners, progress bars, etc.) to appear or disappear. This ensures your automation waits for dynamic content to load before executing subsequent actions.

## Configuration Options

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| **Selector Query** | Text Input | CSS selector for the loading element | Yes |
| **Loading Behavior** | Toggle Switch (Choose one) | How to wait for the loading element | Yes |
| **Timeout (Milliseconds)** | Number Input | Maximum wait time in milliseconds | Conditional |

:::warning Choose Only One Option
You must select only one of the loading behavior options. The options are mutually exclusive.
:::

---

## Selector Query

**Field:** Text Input

**Set in:** Field "Selector Query" input option

**Description:** CSS selector to target the loading element (spinner, progress bar, loading overlay, etc.).

**Example:**

```css
.loading-spinner
#page-loader
.progress-bar
div[data-loading="true"]
```

---

## Loading Behavior Options

Choose **only one** of these options to define how to wait for the loading element.

### Option 1: First Check Loading is Visible, Then Hidden

**Toggle Switch:** First check loading is visible in the page? After that the loading will be hidden.

**Description:** 
1. First waits for the loading element to **appear** (become visible)
2. Then waits for it to **disappear** (become hidden)

**Use Case:** When loading element appears after an action and then disappears when loading completes.

**Example:**

```javascript
// Scenario: Click button triggers loading spinner
Selector Query: .loading-spinner

// Behavior:
1. Wait for .loading-spinner to appear
2. Wait for .loading-spinner to disappear
3. Continue automation
```

**Timeline:**
```
Action → Loading appears → Loading disappears → Continue
         └─ Wait here ─┘  └─── Wait here ────┘
```

---

### Option 2: Just Check That It is Not Visible

**Toggle Switch:** Just check that it is not visible in the loading page.

**Description:** Simply waits for the loading element to be **not visible** (hidden or doesn't exist).

**Use Case:** When you only need to ensure loading is complete (element is hidden).

**Example:**

```javascript
// Scenario: Page loads with spinner already visible
Selector Query: .loading-overlay

// Behavior:
1. Wait for .loading-overlay to be hidden
2. Continue automation
```

**Timeline:**
```
Page Load (loading visible) → Loading disappears → Continue
                              └─── Wait here ────┘
```

---

### Option 3: First Check Loading Exists, Then Removed

**Toggle Switch:** First check loading is exists in the page? After that the loading will be remove.

**Description:**
1. First waits for the loading element to **exist** in the DOM
2. Then waits for it to be **removed** from the DOM

**Use Case:** When loading element is dynamically added and then removed from the page.

**Example:**

```javascript
// Scenario: Loading element is added to DOM and then removed
Selector Query: #dynamic-loader

// Behavior:
1. Wait for #dynamic-loader to exist in DOM
2. Wait for #dynamic-loader to be removed from DOM
3. Continue automation
```

**Timeline:**
```
Action → Element added to DOM → Element removed from DOM → Continue
         └──── Wait here ─────┘  └────── Wait here ──────┘
```

---

### Option 4: Just Check That It Does Not Exist

**Toggle Switch:** Just check that it is not exists in the loading page.

**Description:** Simply waits for the loading element to **not exist** in the DOM.

**Use Case:** When you only need to ensure loading element is not present in the page.

**Example:**

```javascript
// Scenario: Ensure loading element is removed
Selector Query: .page-loader

// Behavior:
1. Wait for .page-loader to not exist in DOM
2. Continue automation
```

**Timeline:**
```
Page Load (element exists) → Element removed → Continue
                             └── Wait here ──┘
```

---

### Option 5: Set Function Timeout

**Toggle Switch:** Set function timeout in milliseconds

**Field:** Number Input - "Enter Milliseconds"

**Description:** Set a maximum timeout duration for the loading wait operation.

**Use Case:** Prevent infinite waiting if loading element never appears/disappears.

**Example:**

```javascript
// Configuration
Selector Query: .loading-spinner
Option: First check loading is visible, then hidden
Timeout: 5000

// Behavior:
1. Wait up to 5000ms (5 seconds) for loading to appear
2. Wait up to 5000ms for loading to disappear
3. If timeout exceeded, continue anyway or throw error
```

**Recommended Values:**
- **Fast operations:** 3000ms (3 seconds)
- **Normal operations:** 5000ms (5 seconds)
- **Slow operations:** 10000ms (10 seconds)
- **Very slow operations:** 30000ms (30 seconds)

---

## Visibility vs Existence

Understanding the difference between visibility and existence:

| Concept | Description | CSS Example |
|---------|-------------|-------------|
| **Visible** | Element exists in DOM and is displayed | `display: block; visibility: visible;` |
| **Hidden** | Element exists in DOM but not displayed | `display: none;` or `visibility: hidden;` |
| **Exists** | Element is present in the DOM | Element in HTML structure |
| **Not Exists** | Element is not in the DOM | Element removed from HTML |

**Example:**

```html
<!-- Visible -->
<div class="loader" style="display: block;">Loading...</div>

<!-- Hidden (exists but not visible) -->
<div class="loader" style="display: none;">Loading...</div>

<!-- Not Exists (removed from DOM) -->
<!-- No element in DOM -->
```

---

## Use Cases

### Wait for AJAX Loading Spinner

**Scenario:** Wait for AJAX request to complete by monitoring spinner.

**Configuration:**
- **Selector Query:** `.ajax-spinner`
- **Option:** First check loading is visible, then hidden
- **Timeout:** 5000ms

**Result:** Waits for spinner to appear and disappear before continuing.

---

### Wait for Page Overlay to Disappear

**Scenario:** Ensure loading overlay is hidden before interacting with page.

**Configuration:**
- **Selector Query:** `.loading-overlay`
- **Option:** Just check that it is not visible
- **Timeout:** 3000ms

**Result:** Waits until overlay is hidden.

---

### Wait for Dynamic Loader Removal

**Scenario:** Wait for dynamically added loader to be removed from DOM.

**Configuration:**
- **Selector Query:** `#dynamic-loader`
- **Option:** First check loading exists, then removed
- **Timeout:** 10000ms

**Result:** Waits for loader to be added and then removed.

---

### Ensure No Loading Indicator

**Scenario:** Verify no loading indicator exists before proceeding.

**Configuration:**
- **Selector Query:** `.loading-indicator`
- **Option:** Just check that it does not exist
- **Timeout:** 2000ms

**Result:** Waits until loading indicator is not in DOM.

---

## Best Practices

### ✅ Do's

- **Use specific selectors** - Target exact loading elements
- **Set appropriate timeouts** - Match timeout to expected load time
- **Choose correct option** - Match option to loading behavior
- **Test loading scenarios** - Verify waits work as expected
- **Use visibility for CSS hidden** - When element is hidden via CSS
- **Use existence for DOM removal** - When element is removed from DOM

### ❌ Don'ts

- **Don't use too short timeouts** - May fail on slow connections
- **Don't use too long timeouts** - Slows down automation unnecessarily
- **Don't select multiple options** - Choose only one behavior
- **Don't use wrong option** - Visibility ≠ Existence
- **Don't forget timeout** - Always set a reasonable timeout
- **Don't use overly broad selectors** - May match wrong elements

---

## Option Selection Guide

| Loading Behavior | Choose This Option |
|------------------|-------------------|
| Spinner appears then disappears | Option 1: Visible → Hidden |
| Spinner already visible, wait for hide | Option 2: Not Visible |
| Loader added to DOM then removed | Option 3: Exists → Removed |
| Ensure loader not in DOM | Option 4: Not Exists |
| Need timeout limit | Option 5: Set Timeout |

---

## Troubleshooting

### Loading Never Completes

**Solutions:**
- Verify selector query matches loading element
- Check if loading element actually appears/disappears
- Increase timeout value
- Use browser DevTools to inspect loading element
- Verify correct option is selected
- Check if element is hidden vs removed

---

### Timeout Exceeded

**Solutions:**
- Increase timeout value
- Verify loading element exists on page
- Check if selector is correct
- Ensure loading behavior matches selected option
- Check network speed and page load time

---

### Wrong Element Detected

**Solutions:**
- Use more specific selector
- Add unique class or ID to loading element
- Verify selector matches only loading element
- Use browser DevTools to test selector
- Check for multiple elements with same selector

---

### Option Not Working

**Solutions:**
- Ensure only one option is selected
- Verify option matches actual loading behavior
- Check if element is visible vs exists
- Test with browser DevTools
- Verify timeout is set when needed

---

## Examples

### Example 1: AJAX Spinner (Visible → Hidden)

```javascript
// Configuration
Selector Query: .ajax-loading
Option: First check loading is visible, then hidden
Timeout: 5000

// Behavior
1. Click button triggers AJAX request
2. .ajax-loading appears
3. Wait for .ajax-loading to appear
4. Wait for .ajax-loading to disappear
5. Continue automation
```

### Example 2: Page Overlay (Not Visible)

```javascript
// Configuration
Selector Query: #page-overlay
Option: Just check that it is not visible
Timeout: 3000

// Behavior
1. Page loads with #page-overlay visible
2. Wait for #page-overlay to be hidden
3. Continue automation
```

### Example 3: Dynamic Loader (Exists → Removed)

```javascript
// Configuration
Selector Query: .dynamic-loader
Option: First check loading exists, then removed
Timeout: 10000

// Behavior
1. Action triggers dynamic loader creation
2. Wait for .dynamic-loader to exist in DOM
3. Wait for .dynamic-loader to be removed from DOM
4. Continue automation
```

### Example 4: Ensure No Loader (Not Exists)

```javascript
// Configuration
Selector Query: .page-loader
Option: Just check that it does not exist
Timeout: 2000

// Behavior
1. Wait for .page-loader to not exist in DOM
2. Continue automation
```

### Example 5: With Timeout

```javascript
// Configuration
Selector Query: .loading-spinner
Option: First check loading is visible, then hidden
Timeout: 8000

// Behavior
1. Wait up to 8 seconds for spinner to appear
2. Wait up to 8 seconds for spinner to disappear
3. If timeout exceeded, handle error or continue
4. Continue automation
```

---

## Related Documentation

- [Field Settings](/documentation/form-fields/field-settings)
- [Selector Query](/documentation/locate-element)
- [Wait Functions](/documentation/functions#wait-functions)
- [Testing Site](/documentation/testing-site)

---

## Notes

- Only **one option** can be selected at a time
- Timeout applies to each wait operation separately
- Visibility checks use CSS display/visibility properties
- Existence checks verify element is in the DOM
- Default timeout may apply if not specified
- Failed waits may throw errors or continue based on settings
