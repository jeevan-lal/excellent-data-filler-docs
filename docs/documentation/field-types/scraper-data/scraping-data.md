# Scraping Data

Extract specific data from web page elements and store it in your Excel file for later use or analysis.

## Overview

The Scraping Data field type allows you to extract various types of information from HTML elements on a web page. This is useful for collecting data, monitoring changes, or gathering information that can be used in subsequent fields or saved to Excel.

## Configuration Options

| Option | Description | Required |
|--------|-------------|----------|
| **Selector Type** | Type of selector (CSS or XPath) | Yes |
| **Selector Query** | The selector to locate the element | Yes |
| **Which Element Option Scraping** | Type of data to extract from the element | Yes |
| **Wait until element is found in the page** | Wait for the element to appear before scraping | No |

---

## Which Element Option Scraping

Choose what type of data you want to extract from the target element:

**Available Options:**
- [Element Text](#element-text)
- [Element Text Content](#element-text-content)
- [Element Value](#element-value)
- [Element HTML](#element-html)
- [Element Attribute](#element-attribute)
- [Element Selected Option Text](#element-selected-option-text)
- [Element Selected Option Value](#element-selected-option-value)

---

### Element Text

Extracts the **visible text content** of an element.

**Example:**
```html
<div class="username">John Doe</div>
```
- **Selector:** `.username`
- **Scraped Value:** `John Doe`

---

### Element Text Content

Extracts the **text content** including hidden text and text from child elements.

**Example:**
```html
<div class="message">
  Hello <span style="display:none;">Hidden</span> World
</div>
```
- **Selector:** `.message`
- **Element Text:** `Hello World`
- **Element Text Content:** `Hello Hidden World`

---

### Element Value

Extracts the **value attribute** of form input elements.

**Example:**
```html
<input type="text" id="email" value="user@example.com">
```
- **Selector:** `#email`
- **Scraped Value:** `user@example.com`

---

### Element HTML

Extracts the **inner HTML** of an element, including all child elements and tags.

**Example:**
```html
<div class="content">
  <h2>Title</h2>
  <p>Description</p>
</div>
```
- **Selector:** `.content`
- **Scraped Value:** `<h2>Title</h2><p>Description</p>`

---

### Element Attribute

Extracts a **specific attribute value** from an element.

**Configuration:**
- You need to specify which attribute to extract (e.g., `href`, `src`, `data-id`, `class`)

**Example:**
```html
<a href="https://example.com" class="link">Click here</a>
```
- **Selector:** `.link`
- **Attribute:** `href`
- **Scraped Value:** `https://example.com`

---

### Element Selected Option Text

Extracts the **visible text** of the currently selected option in a dropdown/select element.

**Example:**
```html
<select id="country">
  <option value="us">United States</option>
  <option value="uk" selected>United Kingdom</option>
  <option value="ca">Canada</option>
</select>
```
- **Selector:** `#country`
- **Scraped Value:** `United Kingdom`

---

### Element Selected Option Value

Extracts the **value attribute** of the currently selected option in a dropdown/select element.

**Example:**
```html
<select id="country">
  <option value="us">United States</option>
  <option value="uk" selected>United Kingdom</option>
  <option value="ca">Canada</option>
</select>
```
- **Selector:** `#country`
- **Scraped Value:** `uk`

---

## Usage Examples

### Example 1: Scrape User Profile Name

```
Field Type: Scraping Data
Selector Type: CSS Selector
Selector Query: .profile-name
Which Element Option: Element Text
```

**Result:** Extracts the user's name from the profile page.

---

### Example 2: Scrape Product Price

```
Field Type: Scraping Data
Selector Type: CSS Selector
Selector Query: .product-price
Which Element Option: Element Text
Wait until element is found in the page: ✅ Enabled
```

**Result:** Waits for the price element to load, then extracts the price value.

---

### Example 3: Scrape Image URL

```
Field Type: Scraping Data
Selector Type: CSS Selector
Selector Query: .product-image
Which Element Option: Element Attribute
Attribute Name: src
```

**Result:** Extracts the image source URL from the `src` attribute.

---

### Example 4: Scrape Form Input Value

```
Field Type: Scraping Data
Selector Type: XPath
Selector Query: //input[@name='email']
Which Element Option: Element Value
```

**Result:** Extracts the current value from the email input field.

---

## Use Cases

### Data Collection
Extract product information, prices, descriptions, or any other data from web pages for analysis or record-keeping.

### Form Validation
Scrape values from form fields to verify that data was entered correctly before submission.

### Dynamic Content Monitoring
Extract data from dynamically loaded content and store it in Excel for tracking changes over time.

### Multi-Step Forms
Scrape data from one step of a form to use in subsequent steps or for verification purposes.

### API Response Data
Extract data from elements that display API responses or dynamically generated content.

---

## Tips

:::tip Storing Scraped Data
Scraped data is automatically stored in the Excel column that corresponds to the field name. Make sure your Excel template has a column with the same name as your scraping field.
:::

:::warning Wait for Dynamic Content
If scraping dynamically loaded content, enable "Wait until element is found in the page" to ensure the element is present before attempting to scrape.
:::

:::info Using Variables
You can use the scraped data in subsequent fields by referencing it as a variable: `{$fieldName$}`
:::

---

## Related Field Types

- [Scraping Page URL](/documentation/field-types/scraper-data/scraping-page-url) - Extract the current page URL
- [Fetch Header-Value Data](/documentation/field-types/scraper-data/fetch-header-value-data) - Extract key-value pairs
- [Fetch Table Data](/documentation/field-types/scraper-data/fetch-table-data-vertical) - Extract data from tables
