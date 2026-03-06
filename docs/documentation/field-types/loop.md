# Loop

Loops can execute a [segment](/documentation/segment) a number of times. Loops are handy, if you want to run the same segment over and over again, each time. You can use [Loop Variables](/documentation/variable#loop-variable) to access information about the current loop iteration.

<img src="/image/loop-01.png" alt="Loop">

## Options

| Options                                                                                                                                         | Required |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| [**Which segment do you want to execute**](#which-segment-do-you-want-to-execute)                                                               | **Yes**  |
| [**How many times the segment has to be run**](#how-many-times-the-segment-has-to-be-run)                                                       | **Yes**  |
| [**If field value is multiline**](#if-field-value-is-multiline)                                                                                 | No       |
| [**Character that splits field value into multiline**](#character-that-splits-field-value-into-multiline)                                       | No       |
| [**Store Loop Index**](#store-loop-index)                                                                                                       | No       |
| [**Delete store loop index data before execution of last index of loop**](#delete-store-loop-index-data-before-execution-of-last-index-of-loop) | No       |

## Which segment do you want to execute

The name of the [segment](/documentation/segment) which is to be executed in the loop comes in this option.

:::v-pre
**Using Variables in Segment Name:**
You can use [Loop Variables](/documentation/variable#loop-variable) within the segment name to dynamically execute different segments in each iteration.
- Example: `segment-{{loop.index[loop]}}`
- Segment execution: `segment-1`, `segment-2`, `segment-3`, etc.
:::

## How many times the segment has to be run

The number of times the loop has to be executed is given in it. In this, value can be given in the following way.

- **Value** - Specify a fixed number or use variables
- **Element Length** - Loop based on the number of matching elements on the page

### Element Length Option

The **Element Length** option allows you to run a loop based on the number of elements found on the page that match a specific selector.

:::warning IMPORTANT: Use Selector Only, Not Numbers
In the **Element Length** option, you should **ONLY use an Element Selector Query** (CSS Selector or XPath). **DO NOT use numbers** in this field. The number of loop iterations will be automatically determined by counting how many elements match your selector.
:::

**How it works:**
1. Provide a CSS Selector or XPath query
2. The extension counts how many elements match that selector
3. The loop runs that many times (once for each matching element)

**Example:**

```
Selector Type: CSS Selector
Element Selector Query: table tbody tr
```

If there are 10 table rows (`<tr>`) on the page, the loop will run 10 times.

**Use Cases:**
- Process all items in a list
- Fill multiple form sections
- Handle dynamic content where the count varies
- Interact with table rows
- Process search results

### Stopping a Loop Using Loop Index

If you want to stop a loop at a specific iteration number (e.g., stop at index 5), use the **String Matching** field type with the **Loop Index** option.

**Steps to Stop Loop at Specific Index:**

1. Add a **[String Matching](/documentation/field-types/string-matching)** field inside your loop segment
2. In String Matching field settings:
   - **String 1**: Select "Loop Index" from the dropdown
   - **String 2**: Enter the index number where you want to stop (e.g., `5`)
   - **Matching Type**: Select "Equal to" or appropriate comparison
3. In **Field Success Response Action**: Select **"Stop Loop"**

**Example Configuration:**

```
Field Type: String Matching
String 1: Loop Index
Matching Type: Equal to
String 2: 5
Field Success Response Action: Stop Loop
```

**Result:** The loop will stop when it reaches index 5 (the 6th iteration, since loops start at 0).

**Advanced Example - Stop at Different Conditions:**

```
// Stop when loop index is greater than or equal to 10
String 1: Loop Index
Matching Type: Greater than or equal to
String 2: 10
Field Success Response Action: Stop Loop
```

### Practical Example: Dynamic Table Row Deletion

**Scenario:** You need to delete table rows based on input values, but the DOM updates after each deletion, causing the element count to change.

**Problem:** When you delete a row, the remaining rows shift, and element indices change, making it difficult to target the correct rows.

**Solution:** Use Element Length with proper selector strategy.

**Live Example:** [Dynamic Table Row Deletion Demo](https://formfiller.ctechhindi.in/example/example36.html)

**How to Handle Dynamic DOM Updates:**

1. **Use Element Length** to count current rows
2. **Always target the first matching element** in your loop (since indices shift after deletion)
3. **Use conditional logic** to decide which rows to delete
4. **Let the loop re-count** elements on each iteration

**Example Configuration:**

```
Loop Field:
  - How many times: Element Length
  - Selector Type: CSS Selector
  - Element Selector Query: table tbody tr

Inside Loop Segment:
  1. Scraping Data Field (Get row data)
     - Selector: table tbody tr:first-child .name
     - Which Element Option: Element Text
  
  2. String Matching Field (Check if should delete)
     - String 1: {$scrapedName$}
     - Matching Type: Equal to
     - String 2: John Doe
     - Field Success Response Action: Continue
     - Field Error Response Action: Skip Segment
  
  3. Button Click Field (Delete the row)
     - Selector: table tbody tr:first-child .delete-btn
```

**Key Points:**
- Always use `:first-child` or similar selectors to target the first element
- The DOM updates after deletion, so the next iteration will see the new first element
- Use String Matching to conditionally process rows
- Element Length automatically adjusts as rows are deleted

### Loop Starting and Ending Point

- From which number the loop has to be started? `(Default Index: 0)`
- What number should the loop end at?

:::warning NOTE
Starting number of the loop is `0`. If you give 4 numbers in the starting number then the loop will start from number 5 because the loop will start from 0. Like - `0,1,2,3,4,5,...`
:::

::: details How to run infinite loop?
To execute Infinite Loop, give `-1` in Loop Ending Value.
:::

::: details How to stop a loop when using an infinite loop?

To stop the loop, you can do it through the field settings given below.

- [Field Success Response Action](/documentation/form-fields/field-settings#field-success-response-action)
- [Field Error Response Action](/documentation/form-fields/field-settings#field-error-response-action)

:::

::: details How to skip any loop index?
To skip any loop index (1,2,3,..), use the `Field Success Response` or `Field Error Response` options in the field settings. Choice `Skip Segment` action.
:::

## If field value is multiline

This option allows you to handle multiline field values. When enabled, the loop will process each line of a multiline field value separately.

### Character that splits field value into multiline

This option specifies the character that will be used to split field values into multiple lines. By default, this is set to an string `,,`, which typically means newline characters are used for splitting.

:::info Note
If there are values in new line then use `\r\n` for split values.
:::

## Store Loop Index

If the page on which you are using the loop is **refreshed** after the loop's action and the Loop starts from again the first number then you can use this option.

:::info Remove Store Loop Index Data
You can remove stored loop index data using the "Remove Store Loop Index Data" button. This clears any previously stored index information.
:::

## Delete store loop index data before execution of last index of loop

This option allows you to automatically delete the stored loop index data before executing the last index of the loop. When enabled, the stored index data will be cleared just before the final iteration runs.

## Form Field has multiple elements

If the field is being used in `Loop` Field Type, then after turning on this [`field setting`](/documentation/form-fields/field-settings#if-this-field-is-being-used-in-a-loop-and-the-field-has-multiple-elements), if the element given in the field is multiple in the page, then we will get one element through the `index` of the loop.
