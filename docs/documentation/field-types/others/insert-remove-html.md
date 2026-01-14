# Insert & Remove HTML

Dynamically add or remove HTML content from web pages.

## Overview

The Insert & Remove HTML field type allows you to manipulate the DOM by inserting new HTML content at specific positions or removing existing elements. This is useful for modifying page structure, adding custom elements, or cleaning up unwanted content.

## Configuration Options

| Option | Type | Description | Required | Disabled When |
|--------|------|-------------|----------|---------------|
| **Selector Query** | Text Input | CSS selector for target element | Yes | - |
| **Position of New HTML Content** | Multi-Select Dropdown | Where to insert the HTML content | Conditional | When "Remove element" is ON |
| **Remove exist element html before insert html** | Toggle Switch | Clear element content before inserting | No | When "Remove element" is ON |
| **Remove element** | Toggle Switch | Remove the element instead of inserting HTML | No | - |

:::warning Important: Remove Element Priority
When **"Remove element"** is turned ON, all other options are disabled. The field will only remove the element without inserting any HTML content.
:::

---

## Selector Query

**Field:** Text Input

**Description:** CSS selector to target the element(s) where HTML will be inserted or removed.

**Set in:** Field "Selector Query" input option

**Example:**

```css
#content
.container
div.main-content
body > header
```

---

## Position of New HTML Content

**Field:** Multi-Select Dropdown

**Description:** Select where to insert the new HTML content relative to the target element.

**Available Positions:**

| Position | Description | Visual Representation |
|----------|-------------|----------------------|
| **beforebegin** | Insert before the element itself | `[NEW] <element>...</element>` |
| **afterbegin** | Insert inside the element, before its first child | `<element>[NEW] existing...</element>` |
| **beforeend** | Insert inside the element, after its last child | `<element>existing... [NEW]</element>` |
| **afterend** | Insert after the element itself | `<element>...</element> [NEW]` |
| **innerHTML** | Replace all content inside the element | `<element>[NEW]</element>` |

**Disabled when:** "Remove element" toggle is ON

---

### Position Examples

#### beforebegin

```html
<!-- Before -->
<div id="target">Content</div>

<!-- After inserting: <p>New</p> -->
<p>New</p>
<div id="target">Content</div>
```

#### afterbegin

```html
<!-- Before -->
<div id="target">
  <span>Existing</span>
</div>

<!-- After inserting: <p>New</p> -->
<div id="target">
  <p>New</p>
  <span>Existing</span>
</div>
```

#### beforeend

```html
<!-- Before -->
<div id="target">
  <span>Existing</span>
</div>

<!-- After inserting: <p>New</p> -->
<div id="target">
  <span>Existing</span>
  <p>New</p>
</div>
```

#### afterend

```html
<!-- Before -->
<div id="target">Content</div>

<!-- After inserting: <p>New</p> -->
<div id="target">Content</div>
<p>New</p>
```

#### innerHTML

```html
<!-- Before -->
<div id="target">
  <span>Old Content</span>
</div>

<!-- After inserting: <p>New</p> -->
<div id="target">
  <p>New</p>
</div>
```

---

## Remove Exist Element HTML Before Insert HTML

**Field:** Toggle Switch

**Description:** Clear all existing content inside the element before inserting new HTML.

**Disabled when:** "Remove element" toggle is ON

**Use Case:** When you want to replace content but keep the element structure.

**Example:**

```html
<!-- Before -->
<div id="target">
  <p>Old content</p>
  <span>More old content</span>
</div>

<!-- After (with toggle ON) -->
<div id="target">
  <p>New content</p>
</div>

<!-- After (with toggle OFF) -->
<div id="target">
  <p>Old content</p>
  <span>More old content</span>
  <p>New content</p>
</div>
```

---

## Remove Element

**Field:** Toggle Switch

**Description:** Remove the target element from the page entirely.

**Priority:** When this toggle is ON, all other options are disabled.

**Use Case:** Clean up unwanted elements, remove ads, or simplify page structure.

**Example:**

```html
<!-- Before -->
<div class="container">
  <div id="unwanted">Remove this</div>
  <div id="keep">Keep this</div>
</div>

<!-- After (Remove element ON for #unwanted) -->
<div class="container">
  <div id="keep">Keep this</div>
</div>
```

---

## HTML Content Source

The HTML content to insert can be set in two ways:

### Using Excel Column

Reference HTML content from your Excel sheet using the field column name.

**Example:**

```javascript
// Excel Column: "htmlContent"
// Excel Data: "<div class='alert'>Success!</div>"

// Result: Inserts the HTML from Excel
```

### Using Default Value Option

Set the HTML content in the **Default Value** field option.

**Example:**

```html
<!-- In Default Value field -->
<div class="notification">
  <h3>Welcome!</h3>
  <p>This is inserted HTML</p>
</div>
```

**With Variables:**

```html
<!-- In Default Value field -->
<div class="user-info">
  <h3>{$userName$}</h3>
  <p>Email: {$userEmail$}</p>
</div>
```

---

## Use Cases

### Insert Notification Banner

**Scenario:** Add a custom notification banner at the top of the page.

**Configuration:**
- **Selector Query:** `body`
- **Position:** afterbegin
- **HTML Content:** `<div class="banner">Important Notice</div>`
- **Remove exist element html:** OFF
- **Remove element:** OFF

**Result:** Banner appears at the top of the page.

---

### Replace Content Section

**Scenario:** Replace entire content of a section.

**Configuration:**
- **Selector Query:** `#main-content`
- **Position:** innerHTML
- **HTML Content:** `<h1>New Content</h1><p>Updated text</p>`
- **Remove exist element html:** Not needed (innerHTML replaces all)
- **Remove element:** OFF

**Result:** All content inside #main-content is replaced.

---

### Remove Advertisement

**Scenario:** Remove unwanted ad elements.

**Configuration:**
- **Selector Query:** `.advertisement`
- **Remove element:** ON

**Result:** All elements with class "advertisement" are removed.

---

### Append Footer Content

**Scenario:** Add custom footer content.

**Configuration:**
- **Selector Query:** `footer`
- **Position:** beforeend
- **HTML Content:** `<p>© 2024 Company Name</p>`
- **Remove exist element html:** OFF
- **Remove element:** OFF

**Result:** Copyright text is added at the end of footer.

---

## Best Practices

### ✅ Do's

- **Use specific selectors** - Target exact elements to avoid unintended changes
- **Test HTML content** - Verify HTML is valid before inserting
- **Use beforeend/afterbegin** - For adding content while preserving existing elements
- **Use innerHTML carefully** - Only when you want to replace all content
- **Validate with DevTools** - Check the DOM after insertion
- **Use variables for dynamic content** - Make HTML content data-driven

### ❌ Don'ts

- **Don't use overly broad selectors** - Avoid selectors that match too many elements
- **Don't insert invalid HTML** - Always validate HTML syntax
- **Don't forget to escape special characters** - Properly escape quotes and brackets
- **Don't remove critical elements** - Be careful when using "Remove element"
- **Don't use innerHTML with user input** - Risk of XSS attacks
- **Don't insert large HTML blocks** - May impact page performance

---

## Position Selection Guide

| Goal | Recommended Position |
|------|---------------------|
| Add before element | beforebegin |
| Add as first child | afterbegin |
| Add as last child | beforeend |
| Add after element | afterend |
| Replace all content | innerHTML |

---

## Troubleshooting

### HTML Not Inserting

**Solutions:**
- Verify selector query matches target element
- Check if "Remove element" is accidentally ON
- Ensure HTML content is set in Excel or Default Value
- Verify position is selected
- Check browser console for errors

---

### Wrong Position

**Solutions:**
- Review position options and their meanings
- Use browser DevTools to inspect DOM structure
- Test with simple HTML first
- Verify target element exists before insertion

---

### Element Not Removing

**Solutions:**
- Ensure "Remove element" toggle is ON
- Verify selector query matches target element
- Check if element is dynamically loaded
- Use browser DevTools to confirm element exists

---

### Content Duplicating

**Solutions:**
- Enable "Remove exist element html before insert html"
- Use innerHTML instead of beforeend/afterbegin
- Check if field is executing multiple times
- Verify automation isn't running repeatedly

---

## Examples

### Example 1: Insert Alert Message

```javascript
// Configuration
Selector Query: .main-container
Position: afterbegin
HTML Content: <div class="alert alert-success">Form submitted successfully!</div>
Remove exist element html: OFF
Remove element: OFF

// Result
<div class="main-container">
  <div class="alert alert-success">Form submitted successfully!</div>
  <!-- existing content -->
</div>
```

### Example 2: Replace Section Content

```javascript
// Configuration
Selector Query: #results
Position: innerHTML
HTML Content: <h2>Results</h2><p>No data found</p>
Remove exist element html: Not needed
Remove element: OFF

// Result
<div id="results">
  <h2>Results</h2>
  <p>No data found</p>
</div>
```

### Example 3: Remove Popup

```javascript
// Configuration
Selector Query: .popup-overlay
Remove element: ON

// Result: .popup-overlay element is completely removed from DOM
```

### Example 4: Dynamic User Card

```javascript
// Configuration
Selector Query: .user-section
Position: beforeend
HTML Content (from Default Value):
  <div class="user-card">
    <h3>{$userName$}</h3>
    <p>Role: {$userRole$}</p>
    <p>Email: {$userEmail$}</p>
  </div>
Remove exist element html: OFF
Remove element: OFF

// Result: User card with dynamic data is appended
```

---

## Related Documentation

- [Field Settings](/documentation/form-fields/field-settings)
- [Selector Query](/documentation/locate-element)
- [JavaScript Code](/documentation/field-types/javascript-code)
- [Default Value](/documentation/form-fields/field-settings#default-value)

---

## Security Considerations

:::warning XSS Risk
Be careful when inserting HTML from user input or external sources. Always sanitize and validate HTML content to prevent Cross-Site Scripting (XSS) attacks.
:::

**Safe Practices:**
- Use Excel data from trusted sources
- Validate HTML content before insertion
- Avoid inserting user-generated content directly
- Use text content instead of HTML when possible
- Sanitize any dynamic content
