# Target Element For Print

The **Target Element For Print** field type allows you to selectively print specific elements from a webpage while hiding all other content. This is useful when you need to print only relevant sections like receipts, invoices, forms, or specific data tables without printing the entire page.

## Overview

When you trigger a print action (using `window.print()` or browser print), this field type ensures that only the specified elements are visible in the print output, while all other page elements are temporarily hidden.

**Use Cases:**
- Print only invoice or receipt sections
- Print specific form data without navigation menus
- Print data tables without page headers/footers
- Generate clean printouts of specific content areas
- Create focused print layouts for reports

## Key Features

### 🎯 Selective Printing
Target specific elements on the page to print, hiding everything else automatically.

### 📋 Multiple Elements
Select multiple elements to print by separating selectors with commas.

### 🔍 CSS Selector Support
Use standard CSS selectors (ID, class, attribute, etc.) to target elements precisely.

### 🖨️ Clean Output
Automatically hides all non-targeted elements during print, ensuring clean and professional printouts.

## How to Use

### Basic Usage

Specify the CSS selector of the element you want to print in the field value.

**Example:**
```css
#invoice-section
```

This will print only the element with ID `invoice-section`.

### Multiple Elements

To print multiple elements, separate selectors with commas (`,`).

**Example:**
```css
#receipt-header, .invoice-details, #payment-summary
```

This will print all three elements: the receipt header, invoice details, and payment summary.

### Common Selector Examples

| Selector Type | Example | Description |
|--------------|---------|-------------|
| **ID** | `#invoice` | Print element with ID "invoice" |
| **Class** | `.receipt-section` | Print all elements with class "receipt-section" |
| **Attribute** | `[data-print="true"]` | Print elements with specific attribute |
| **Multiple** | `#header, .content, #footer` | Print multiple elements |
| **Descendant** | `.container .invoice` | Print invoice inside container |
| **Child** | `.wrapper > .receipt` | Print direct child receipt |

## Practical Examples

### Example 1: Print Invoice Only

```css
#invoice-container
```

### Example 2: Print Receipt with Header and Footer

```css
.receipt-header, .receipt-body, .receipt-footer
```

### Example 3: Print Multiple Sections

```css
#order-summary, #customer-details, #payment-info, #terms-conditions
```

### Example 4: Print Table Data

```css
.data-table, .table-header, .table-footer
```

## Best Practices

### ✅ Do's

- **Use specific selectors** - Target exact elements to avoid printing unwanted content
- **Test before production** - Always test print output to ensure correct elements are selected
- **Use IDs for unique elements** - IDs provide the most specific targeting
- **Combine multiple selectors** - Print related sections together for complete information
- **Use descriptive selectors** - Choose selectors that clearly identify the content

### ❌ Don'ts

- **Don't use overly broad selectors** - Avoid selectors like `div` or `*` that match too many elements
- **Don't forget to test** - Always verify the print output matches your expectations
- **Don't use complex selectors** - Keep selectors simple and maintainable
- **Don't rely on dynamic content** - Ensure elements exist before printing

## Important Notes

:::warning Don't Use XPath
Do **not** use XPath selectors in the **Target Element For Print** field type. Only CSS selectors are supported.

**Incorrect:** `//div[@id='invoice']` ❌  
**Correct:** `#invoice` ✅
:::

:::tip CSS Selectors Only
This field type only supports standard CSS selector syntax. Use:
- ID selectors: `#elementId`
- Class selectors: `.className`
- Attribute selectors: `[attribute="value"]`
- Combinators: `parent > child`, `ancestor descendant`
:::

## Troubleshooting

### Print Output Shows Wrong Elements

**Solution:** Verify your CSS selector is specific enough. Use browser DevTools to test your selector:
```js
document.querySelectorAll('your-selector-here')
```

### Multiple Elements Not Printing

**Solution:** Ensure selectors are separated by commas and all elements exist on the page.

### Nothing Prints

**Solution:** Check if the selector is correct and the element exists in the DOM when print is triggered.

## Related Documentation

- [CSS Selector Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [Locate Element](/documentation/locate-element)
- [Field Types](/documentation/form-fields/field-types)
