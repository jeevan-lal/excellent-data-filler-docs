# 🧮 Math Actions {#math-actions}

Math Actions field types allow you to perform mathematical calculations and operations on numeric data extracted from web pages or provided values. These field types are essential for data processing, calculations, and numerical analysis in your automation workflows.

## ➕ Sum (+) {#sum}

Add a number from a single element to another number to get their sum.

| Options                          | Required | Description                                                         |
| -------------------------------- | -------- | ------------------------------------------------------------------- |
| **Selector Type**                | Yes      | Choose the type of selector to target elements (CSS, XPath, etc.)   |
| **Selector Query**               | Yes      | The selector query to find the element containing the number to sum |
| **Field Value**                  | Yes      | Number to add to the element value (can be static or dynamic)       |
| **Fetch the numbers to Sum**     | Yes      | Enable to fetch the number from the selected element                |
| **Is convert string to number?** | No       | Convert string values to numbers before performing addition         |
| **Is the number in decimal?**    | No       | Handle decimal numbers in the calculation                           |

### Usage Example

- **Element value**: `25`
- **Field Value**: `15`
- **Result**: `40` (25 + 15)

## ➖ Subtract (-) {#subtract}

Subtract a number from a single element value.

| Options                           | Required | Description                                                              |
| --------------------------------- | -------- | ------------------------------------------------------------------------ |
| **Selector Type**                 | Yes      | Choose the type of selector to target elements (CSS, XPath, etc.)        |
| **Selector Query**                | Yes      | The selector query to find the element containing the number to subtract |
| **Field Value**                   | Yes      | Number to subtract from the element value                                |
| **Fetch the numbers to Subtract** | Yes      | Enable to fetch the number from the selected element                     |
| **Is convert string to number?**  | No       | Convert string values to numbers before performing subtraction           |
| **Is the number in decimal?**     | No       | Handle decimal numbers in the calculation                                |

### Usage Example

- **Element value**: `50`
- **Field Value**: `15`
- **Result**: `35` (50 - 15)

## ✖️ Multiply (\*) {#multiply}

Multiply a number from a single element with another number to get their product.

| Options                           | Required | Description                                                              |
| --------------------------------- | -------- | ------------------------------------------------------------------------ |
| **Selector Type**                 | Yes      | Choose the type of selector to target elements (CSS, XPath, etc.)        |
| **Selector Query**                | Yes      | The selector query to find the element containing the number to multiply |
| **Field Value**                   | Yes      | Number to multiply with the element value                                |
| **Fetch the numbers to Multiply** | Yes      | Enable to fetch the number from the selected element                     |
| **Is convert string to number?**  | No       | Convert string values to numbers before performing multiplication        |
| **Is the number in decimal?**     | No       | Handle decimal numbers in the calculation                                |

### Usage Example

- **Element value**: `8`
- **Field Value**: `5`
- **Result**: `40` (8 × 5)

## ➗ Divide (÷) {#divide}

Divide a number from a single element by another number to get their quotient.

| Options                          | Required | Description                                                            |
| -------------------------------- | -------- | ---------------------------------------------------------------------- |
| **Selector Type**                | Yes      | Choose the type of selector to target elements (CSS, XPath, etc.)      |
| **Selector Query**               | Yes      | The selector query to find the element containing the number to divide |
| **Field Value**                  | Yes      | Divisor number (number to divide by)                                   |
| **Fetch the numbers to Divide**  | Yes      | Enable to fetch the number from the selected element                   |
| **Is convert string to number?** | No       | Convert string values to numbers before performing division            |
| **Is the number in decimal?**    | No       | Handle decimal numbers in the calculation                              |

### Usage Example

- **Element value**: `100`
- **Field Value**: `4`
- **Result**: `25` (100 ÷ 4)

:::warning Division by Zero
Be careful when dividing by zero as it will result in an error. Always ensure your divisor values are not zero.
:::

## 🔢 Count {#count}

Count occurrences of specific values or elements.

| Options                          | Required | Description                                                                      |
| -------------------------------- | -------- | -------------------------------------------------------------------------------- |
| **Selector Type**                | Yes      | Choose the type of selector to target elements (CSS, XPath, etc.)                |
| **Selector Query**               | Yes      | The selector query to find elements to count                                     |
| **Field Value**                  | Yes      | Value to count occurrences of                                                    |
| **Which one should be counted?** | Yes      | Choose what to count (text content, attribute values, etc.)                      |
| **What do you want to count?**   | Yes      | Specify the exact value or pattern to count                                      |
| **Convert to Lowercase**         | No       | Convert text to lowercase before counting (useful for case-insensitive counting) |
| **Remove Extra Space**           | No       | Remove extra whitespace before counting                                          |
| **Remove All Space**             | No       | Remove all spaces before counting                                                |
| **Trim**                         | No       | Remove leading and trailing whitespace before counting                           |

### Usage Examples

- **Count elements**: Count how many `<div>` elements exist on the page
- **Count specific text**: Count occurrences of "Error" in error messages
- **Count values**: Count how many times "Active" appears in status fields

:::info Note
If there are values in new line then use `\r\n` for split values.
:::

## 🧮 Calculate Math Query {#calculate-math-query}

Perform complex mathematical calculations using expressions and variables.

| Options         | Required | Description                                                            |
| --------------- | -------- | ---------------------------------------------------------------------- |
| **Field Value** | Yes      | Mathematical expression to evaluate (supports variables and functions) |

### Supported Operations

- **Basic arithmetic**: `+`, `-`, `*`, `/`, `%` (modulo)
- **Exponentiation**: `^` or `**`
- **Parentheses**: `()` for grouping operations
- **Variables**: `{$variable_name$}` to use dynamic values
- **Functions**: `sin()`, `cos()`, `tan()`, `log()`, `sqrt()`, etc.

### Expression Examples

```
2 + 3 * 4           // Result: 14
(2 + 3) * 4         // Result: 20
2 + {$price$} * 4   // Uses variable 'price' in calculation
sqrt(16) + 2^3      // Result: 12 (4 + 8)
sin(90) + cos(0)    // Trigonometric functions
```

### Advanced Features

- **Variable substitution**: Use `{$variable_name$}` to insert dynamic values
- **Nested expressions**: Complex calculations with multiple operations
- **Function support**: Mathematical functions like trigonometry, logarithms
- **Error handling**: Graceful handling of invalid expressions

:::info Library
This field type uses the [math-expression-evaluator](https://github.com/bugwheels94/math-expression-evaluator) library for mathematical operations.
:::

## 💡 Usage Tips {#usage-tips}

### Data Preparation

1. **String to Number Conversion**: Enable "Is convert string to number?" when dealing with text-based numbers
2. **Decimal Handling**: Enable "Is the number in decimal?" for precise decimal calculations
3. **Data Cleaning**: Use text processing options (trim, remove spaces) for accurate counting

### Error Prevention

1. **Validate Input**: Ensure elements contain valid numeric data
2. **Handle Empty Results**: Check for empty or null values before calculations
3. **Division Safety**: Avoid division by zero in your expressions

### Performance Optimization

1. **Efficient Selectors**: Use specific selectors to target only relevant elements
2. **Batch Operations**: Process multiple calculations in sequence rather than individual operations
3. **Variable Reuse**: Store calculated results in variables for reuse in other fields
