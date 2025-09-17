# 🔤 String Manipulation {#string-manipulation}

If you want to modify the value of any text or any field in the page, then you can use this **String Manipulation** Field Type. This powerful field type allows you to transform, clean, and manipulate text content in various ways.

<img src="/image/string-manipulation-01.png" width="400" height="400" alt="String Manipulation">

## ⚙️ Field Options {#field-options}

### 🔍 Element Selector Query {#element-selector-query}

You can set target element selector query in the field. 

You can find the element selector query by right-clicking on the element and selecting "Copy Element Selector Address" or "Copy Element XPath Selector Address".

### 🎯 Which Element Option Replace {#which-element-option-replace}

Choose what type of content you want to replace or modify:

| Option                | Description                                     |
| --------------------- | ----------------------------------------------- |
| **Element Text**      | Replace the visible text content of the element |
| **Element Value**     | Replace the value attribute of input elements   |
| **Element HTML**      | Replace the entire HTML markup of the element   |
| **Element Attribute** | Replace a specific attribute value              |
| **Field Name**        | Replace content in a specific field by name     |

#### Element Attribute

- **Element Attribute Name**: Specify which attribute to replace (e.g., `src`, `href`, `data-id`, `class`)

#### Field Name

- **Field Value**: Enter the name of the field you want to target for replacement

### 🧹 Text Cleaning Options {#text-cleaning-options}

| Option                 | Description                                                      |
| ---------------------- | ---------------------------------------------------------------- |
| **Remove Extra Space** | Remove multiple consecutive spaces and replace with single space |
| **Remove All Space**   | Remove all spaces from the text                                  |
| **Remove All String**  | Remove all text content (leaves empty string)                    |
| **Trim**               | Remove leading and trailing whitespace                           |

### 🔤 Case Conversion Options {#case-conversion-options}

| Option                    | Description                                                        |
| ------------------------- | ------------------------------------------------------------------ |
| **Convert to Lowercase**  | Convert all text to lowercase letters                              |
| **Convert to Uppercase**  | Convert all text to uppercase letters                              |
| **Convert to Title Case** | Convert text to title case (first letter of each word capitalized) |

### 🔄 Replace String with RegEx {#replace-string-with-regex}

Advanced text replacement using regular expressions.

| Option                 | Description                                     |
| ---------------------- | ----------------------------------------------- |
| **Regular Expression** | The regex pattern to match text for replacement |
| **Replace String**     | The text to replace matched patterns with       |

#### Example Usage

If you want to change this "**Ben002**" string into this "**002_g.pdf**" then you can use this type of RegEx.

<img src="/image/regex-01.jpg" width="400" height="400" alt="String Manipulation">

**Regex Pattern**: `Ben(\d+)`  
**Replace String**: `$1_g.pdf`  
**Result**: `Ben002` → `002_g.pdf`

## 💡 Usage Examples {#usage-examples}

### 📝 Basic Text Replacement

1. **Which Element Option Replace**: Element Text
2. **Target**: Select the element containing the text to replace
3. **New Content**: Enter the replacement text
4. **Result**: The visible text will be updated

### 🔧 Attribute Value Replacement

1. **Which Element Option Replace**: Element Attribute
2. **Element Attribute Name**: `href`
3. **New Value**: Enter the new URL
4. **Result**: The link's href attribute will be updated

### 🧹 Text Cleaning

1. **Remove Extra Space**: ✅ Enabled
2. **Trim**: ✅ Enabled
3. **Convert to Title Case**: ✅ Enabled
4. **Result**: Clean, properly formatted text

### 🔄 Advanced Regex Replacement

1. **Replace String with RegEx**: ✅ Enabled
2. **Regular Expression**: `(\d{4})-(\d{2})-(\d{2})`
3. **Replace String**: `$3/$2/$1`
4. **Result**: `2024-12-25` → `25/12/2024`

## 🎯 Common Use Cases {#common-use-cases}

### 📊 Data Formatting

- **Date Format Conversion**: Change date formats using regex
- **Number Formatting**: Add commas, currency symbols, or decimal places
- **Phone Number Formatting**: Standardize phone number formats

### 🧹 Content Cleaning

- **Remove Extra Whitespace**: Clean up messy text content
- **Standardize Case**: Ensure consistent text casing
- **Remove Unwanted Characters**: Strip out special characters or symbols

### 🔄 Dynamic Content Updates

- **Update Links**: Change href attributes dynamically
- **Modify Form Values**: Update input field values
- **Replace Text Content**: Change displayed text based on conditions

## 🔧 Advanced Features {#advanced-features}

### Regex Patterns

- **Pattern Matching**: Use complex regex patterns for precise text matching
- **Capture Groups**: Use `$1`, `$2`, etc. to reference captured groups
- **Global Replacement**: Replace all occurrences of a pattern
- **Case-Insensitive Matching**: Use regex flags for flexible matching

## ⚠️ Important Notes {#important-notes}

### Element Selection

- Ensure the target element exists before applying string manipulation
- Use appropriate selectors to target the correct element

### Regex Safety

- Always test regex patterns with sample data first
- Be careful with greedy patterns that might match too much text
- Use escape characters for special regex characters