# Fetch Multiple Data (Vertical)

Extract multiple instances of the same data pattern from a web page and store each instance as a separate row in your Excel file.

## Overview

The Fetch Multiple Data (Vertical) field type allows you to extract **multiple occurrences** of the same data structure from a web page. Each occurrence is stored as a **new row** in your Excel file, making it perfect for scraping lists, search results, product grids, or any repeating content.

## Configuration Options

| Option | Description | Required |
|--------|-------------|----------|
| **Selector Type** | Type of selector (CSS or XPath) | Yes |
| **Selector Query** | Selector for the container holding all items or individual items | Yes |
| **Which Element Option Scraping** | Type of data to extract from each element | Yes |
| **Element Attribute Name** | Attribute name to extract (when Element Attribute is selected) | Conditional |
| **Wait until element is found in the page** | Wait for elements to appear before scraping | No |

### Which Element Option Scraping

Choose what type of data you want to extract from each item:

**Available Options:**
- **Element Text** - Extract visible text content
- **Element Value** - Extract input/select element values
- **Element HTML** - Extract HTML content
- **Element Attribute** - Extract specific attribute value (requires attribute name)
- **Element Text/Value** - Automatically detect and extract text or value
- **Element Link** - Extract href attribute from links
- **Element Image Link** - Extract src attribute from images

---

## How It Works

The extension finds **all matching elements** on the page using your selector, then extracts the specified data type from each element and creates a new Excel row for each one.

### Process Flow:

1. **Locate Elements**: Find all elements matching the selector query
2. **Extract Data**: For each element, extract data based on the selected scraping option
3. **Create Rows**: Store each element's data as a new row in Excel (in a single column)

:::info Important
This field type creates a **single column** with multiple rows. To extract multiple data points (e.g., name, price, rating), you need to create **multiple field configurations**, each targeting different elements.
:::

---

## HTML Pattern Example

### Product List:

```html
<div class="product-grid">
  <div class="product-card">
    <h3 class="product-name">Wireless Mouse</h3>
    <span class="product-price">$29.99</span>
    <span class="product-rating">4.5 Stars</span>
  </div>
  
  <div class="product-card">
    <h3 class="product-name">Keyboard</h3>
    <span class="product-price">$49.99</span>
    <span class="product-rating">4.8 Stars</span>
  </div>
  
  <div class="product-card">
    <h3 class="product-name">Monitor</h3>
    <span class="product-price">$199.99</span>
    <span class="product-rating">4.7 Stars</span>
  </div>
</div>
```

### Configuration:

To extract product names, you would configure **three separate fields**:

**Field 1 - Product Names:**
- Selector Type: CSS Selector
- Selector Query: `.product-card .product-name`
- Which Element Option Scraping: Element Text

**Field 2 - Product Prices:**
- Selector Type: CSS Selector
- Selector Query: `.product-card .product-price`
- Which Element Option Scraping: Element Text

**Field 3 - Product Ratings:**
- Selector Type: CSS Selector
- Selector Query: `.product-card .product-rating`
- Which Element Option Scraping: Element Text

### Excel Output:

| Column1 (Names) | Column2 (Prices) | Column3 (Ratings) |
|-----------------|------------------|-------------------|
| Wireless Mouse | $29.99 | 4.5 Stars |
| Keyboard | $49.99 | 4.8 Stars |
| Monitor | $199.99 | 4.7 Stars |

Each field creates a column, and each matched element becomes a row.

---

## Configuration Steps

### Step 1: Choose Selector Type

Select between **CSS Selector** or **XPath** based on your preference and the page structure.

**CSS Selector Example:** `.product-card .product-name`  
**XPath Example:** `//div[@class='product-card']//h3[@class='product-name']`

### Step 2: Define Selector Query

Specify the selector that targets **all the elements** you want to extract data from.

**Important:** The selector should match **multiple elements** on the page. Each matched element will become a new row in Excel.

**Examples:**
- `.product-card .product-name` - Selects all product names
- `.search-results .result-title` - Selects all search result titles
- `img.product-image` - Selects all product images

### Step 3: Choose Element Scraping Option

Select what type of data you want to extract from each matched element:

- **Element Text** - For text content
- **Element Link** - For link URLs
- **Element Image Link** - For image URLs
- **Element Attribute** - For custom attributes (requires attribute name)
- **Element Text/Value** - Auto-detect text or value
- **Element Value** - For form field values
- **Element HTML** - For HTML content

### Step 4: Configure Attribute (If Needed)

If you selected **Element Attribute**, specify the attribute name to extract.

**Examples:**
- `data-id`
- `data-price`
- `aria-label`
- `title`

---

## Usage Examples

### Example 1: Product Names (Element Text)

```
Field Type: Fetch Multiple Data (Vertical)
Selector Type: CSS Selector
Selector Query: .product-card .product-name
Which Element Option Scraping: Element Text
```

**HTML:**
```html
<div class="product-grid">
  <div class="product-card">
    <h3 class="product-name">Wireless Mouse</h3>
  </div>
  <div class="product-card">
    <h3 class="product-name">Keyboard</h3>
  </div>
  <div class="product-card">
    <h3 class="product-name">Monitor</h3>
  </div>
</div>
```

**Excel Output:**

| Column1 |
|---------|
| Wireless Mouse |
| Keyboard |
| Monitor |

**Result:** Each product name becomes a new Excel row.

---

### Example 2: Product Links (Element Link)

```
Field Type: Fetch Multiple Data (Vertical)
Selector Type: CSS Selector
Selector Query: .product-card a.product-link
Which Element Option Scraping: Element Link
Wait until element is found in the page: ✅ Enabled
```

**HTML:**
```html
<div class="product-grid">
  <div class="product-card">
    <a href="/products/wireless-mouse" class="product-link">View</a>
  </div>
  <div class="product-card">
    <a href="/products/keyboard" class="product-link">View</a>
  </div>
  <div class="product-card">
    <a href="/products/monitor" class="product-link">View</a>
  </div>
</div>
```

**Excel Output:**

| Column1 |
|---------|
| /products/wireless-mouse |
| /products/keyboard |
| /products/monitor |

**Result:** Each product link becomes a new Excel row.

---

### Example 3: Product Images (Element Image Link)

```
Field Type: Fetch Multiple Data (Vertical)
Selector Type: CSS Selector
Selector Query: .product-card img.product-image
Which Element Option Scraping: Element Image Link
```

**HTML:**
```html
<div class="product-grid">
  <div class="product-card">
    <img src="/images/mouse.jpg" class="product-image" alt="Mouse">
  </div>
  <div class="product-card">
    <img src="/images/keyboard.jpg" class="product-image" alt="Keyboard">
  </div>
  <div class="product-card">
    <img src="/images/monitor.jpg" class="product-image" alt="Monitor">
  </div>
</div>
```

**Excel Output:**

| Column1 |
|---------|
| /images/mouse.jpg |
| /images/keyboard.jpg |
| /images/monitor.jpg |

**Result:** Each product image URL becomes a new Excel row.

---

### Example 4: Product IDs (Element Attribute)

```
Field Type: Fetch Multiple Data (Vertical)
Selector Type: CSS Selector
Selector Query: .product-card
Which Element Option Scraping: Element Attribute
Element Attribute Name: data-product-id
```

**HTML:**
```html
<div class="product-grid">
  <div class="product-card" data-product-id="12345">
    <h3>Wireless Mouse</h3>
  </div>
  <div class="product-card" data-product-id="12346">
    <h3>Keyboard</h3>
  </div>
  <div class="product-card" data-product-id="12347">
    <h3>Monitor</h3>
  </div>
</div>
```

**Excel Output:**

| Column1 |
|---------|
| 12345 |
| 12346 |
| 12347 |

**Result:** Each product ID becomes a new Excel row.

---

## Element Scraping Options Explained

### Element Text
Extracts the **visible text content** from an element (using `textContent` or `innerText`).

**Use Case:** Product names, headings, descriptions, labels

**Example:**
```html
<h3 class="title">Wireless Mouse</h3>
```
**Extracted:** `Wireless Mouse`

---

### Element Value
Extracts the **value attribute** from form elements like `<input>`, `<select>`, or `<textarea>`.

**Use Case:** Form field values, selected options, input data

**Example:**
```html
<input type="text" value="John Doe" class="name-field">
```
**Extracted:** `John Doe`

---

### Element HTML
Extracts the **HTML content** inside an element (using `innerHTML`).

**Use Case:** Rich text content, formatted descriptions, nested HTML

**Example:**
```html
<div class="description"><strong>Premium</strong> quality product</div>
```
**Extracted:** `<strong>Premium</strong> quality product`

---

### Element Attribute
Extracts a **specific attribute value** from an element. Requires specifying the attribute name.

**Use Case:** Data attributes, IDs, custom attributes, aria labels

**Example:**
```html
<div class="product" data-id="12345" data-category="electronics"></div>
```
**Attribute Name:** `data-id`  
**Extracted:** `12345`

---

### Element Text/Value
**Automatically detects** whether to extract text content or value attribute based on the element type.

**Use Case:** Mixed content where some elements have values and others have text

**Behavior:**
- For `<input>`, `<select>`, `<textarea>` → Extracts **value**
- For other elements → Extracts **text content**

---

### Element Link
Extracts the **href attribute** from `<a>` (anchor) elements.

**Use Case:** Product links, navigation URLs, external links

**Example:**
```html
<a href="/products/wireless-mouse" class="product-link">View Product</a>
```
**Extracted:** `/products/wireless-mouse`

---

### Element Image Link
Extracts the **src attribute** from `<img>` (image) elements.

**Use Case:** Product images, thumbnails, gallery images

**Example:**
```html
<img src="/images/product-123.jpg" alt="Product Image">
```
**Extracted:** `/images/product-123.jpg`

---

## Use Cases

### E-commerce Product Scraping
Extract product listings with names, prices, ratings, and images from online stores.

### Job Board Scraping
Scrape job listings with titles, companies, locations, and salaries.

### Real Estate Listings
Extract property listings with addresses, prices, bedrooms, and square footage.

### News Article Lists
Scrape article headlines, dates, authors, and summaries from news sites.

### Social Media Posts
Extract posts with usernames, timestamps, content, and engagement metrics.

### Directory Listings
Scrape business directories with names, addresses, phone numbers, and categories.

---

## Tips

:::tip Selector Specificity
Use specific selectors that target only the elements you want. Test your selector in the browser console to verify it matches the correct elements.
:::

:::tip Element Scraping Option
Choose the appropriate scraping option based on your data type:
- Use **Element Link** for URLs instead of **Element Attribute** with `href`
- Use **Element Image Link** for image URLs instead of **Element Attribute** with `src`
- Use **Element Text/Value** when you're unsure about the element type
:::

:::warning Single Column Output
This field type creates a **single column** in Excel with multiple rows. Each matched element becomes a new row. If you need multiple columns per item, consider using multiple field configurations or other field types.
:::

:::info Dynamic Loading
For infinite scroll or lazy-loaded content, ensure all items are loaded before scraping. Enable "Wait until element is found in the page" and consider using scroll actions.
:::

:::tip Data Validation
After scraping, verify that the number of Excel rows matches the expected number of items on the page.
:::

---

## Advanced Techniques

### Combining Multiple Fields

To extract multiple data points from the same items, create **multiple field configurations**:

**Example: Product Scraping**
1. **Field 1**: Product Names (Element Text on `.product-name`)
2. **Field 2**: Product Prices (Element Text on `.product-price`)
3. **Field 3**: Product Links (Element Link on `.product-link`)
4. **Field 4**: Product Images (Element Image Link on `img.product-image`)

This creates 4 columns in Excel, each with the same number of rows.

---

### Extracting Nested Data

Use specific selectors to target nested elements:

```html
<div class="product">
  <div class="info">
    <h3 class="name">Product Name</h3>
    <div class="pricing">
      <span class="sale">$79.99</span>
    </div>
  </div>
</div>
```

**Selector:** `.product .pricing .sale`  
**Result:** Extracts only the sale prices

---

### Handling Missing Data

If some elements don't exist on the page:
- The extension will leave Excel cells empty for missing data
- Continue processing other matched elements
- Not skip the entire extraction if one element is missing

---

## Troubleshooting

### No Data Extracted
- Verify the selector is correct using browser DevTools
- Check if elements are loaded dynamically (enable wait option)
- Ensure elements are not hidden with CSS (`display: none`, `visibility: hidden`)
- Verify selector type (CSS vs XPath) matches your selector syntax

### Wrong Element Scraping Option
- Ensure you selected the correct option for your data type
- For links, use **Element Link** not **Element Attribute**
- For images, use **Element Image Link** not **Element Attribute**
- For custom attributes, use **Element Attribute** and specify the attribute name

### Too Many/Few Rows
- Verify selector targets only desired elements
- Check for duplicate elements in the HTML
- Use more specific selectors to avoid unintended matches
- Test selector in browser console: `document.querySelectorAll('your-selector')`

### Empty Cells in Excel
- Verify the element scraping option matches the element type
- Check if elements have the expected content/attributes
- For **Element Attribute**, ensure the attribute name is correct
- For **Element Link**, ensure elements are `<a>` tags with `href`
- For **Element Image Link**, ensure elements are `<img>` tags with `src`

---

## Performance Considerations

### Large Lists
For pages with hundreds of items:
- Consider processing in batches
- Use pagination to split data across multiple runs
- Monitor Excel file size limits

### Dynamic Content
For JavaScript-heavy sites:
- Add appropriate wait times
- Use "Wait Until Element Found" option
- Consider using browser actions to ensure full page load

---

## Related Field Types

- [Fetch Table Data (Vertical)](/documentation/field-types/scraper-data/fetch-table-data-vertical) - Extract table data vertically
- [Scraping Data](/documentation/field-types/scraper-data/scraping-data) - Extract data from single elements
- [Fetch Header-Value Data](/documentation/field-types/scraper-data/fetch-header-value-data) - Extract key-value pairs
- [Loop](/documentation/field-types/loop) - Iterate through elements with custom actions

---

## Example Workflow

### Complete Product Scraping Workflow:

1. **Navigate to catalog page**
2. **Scroll to load all products** (if lazy loading)
3. **Fetch Multiple Data (Vertical)** to extract all products
4. **Store in Excel** with columns: Name, Price, Rating, URL, Image
5. **Process next page** (if pagination exists)

This creates a comprehensive product database in Excel for analysis or comparison.
