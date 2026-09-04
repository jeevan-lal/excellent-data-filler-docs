<script setup>
import TodayDate from '../components/TodayDate.vue'
</script>

# Variables {#variables}

Variables allow you to dynamically insert values, compute math expressions, generate random data, inspect page URLs, and reference Excel rows or loop counters across form fields and scripts.

---

## Variable Syntax Styles {#syntax-styles}

Excellent Data Filler supports two distinct variable syntax styles depending on the source of the data:

| Syntax | Usage | Examples |
| --- | --- | --- |
| `{$name$}` | References **Field Names** and **Environment Variables** (Global & Site-specific). | `{$full_name$}` <br> `{$BASE_URL$}` |
| <code v-pre>{{variable}}</code> | Evaluates **Dynamic Built-In Variables** (Location, Random, Math, Excel, Loop). | <code v-pre>{{location.href}}</code> <br> <code v-pre>{{date.today[DD-MM-YYYY]}}</code> |

::: tip Combining Variables
You can nest and combine variables inside other functions, URLs, or expressions:
- <code v-pre>{{math.increase[{$total_items$}]}}</code>
- <code v-pre>{{math.sum[{{loop.index[Loop]}}][1]}}</code>
- <code v-pre>https://example.com/items?page={{loop.index[Loop]}}&user={$username$}</code>
:::

---

## <img src="/svg/globe.svg" class="doc-icon" width="20" height="20" alt="Page Location Variables" /> Page Location Variables {#page-location}

Extract URL and origin details of the current web page where automation is executing.

**Syntax format:** <code v-pre>{{variable_name}}</code>

| Variable Name | Description | Example Output |
| --- | --- | --- |
| **location.href** | Complete active page URL. | `https://example.com:8080/portal/form?id=12` |
| **location.host** | Host domain name including port number. | `example.com:8080` |
| **location.hostname** | Host domain name without port. | `example.com` |
| **location.origin** | Protocol and domain origin. | `https://example.com:8080` |
| **location.pathname** | URL path component after the domain. | `/portal/form` |

---

## <img src="/svg/beaker.svg" class="doc-icon" width="20" height="20" alt="Random Generator Variables" /> Random Generator Variables {#random-variables}

Generate realistic dummy data, random numbers, dates, emails, and phone numbers for testing and bulk form submissions.

**Syntax format:** <code v-pre>{{variable_name}}</code>

| Variable Name | Description | Example Output |
| --- | --- | --- |
| **random.integer[min][max]** | Generates a random integer between `min` and `max`. | `7`, `11`, `24` |
| **random.float[min][max][precision]** | Generates a random float with specified decimal precision. | `7.45`, `11.90` |
| **random.string[charset][length]** | Generates a random string using character sets (`a`, `A`, `0`). | `A0bAur8K`, `ud7dhe6` |
| **random.email[domain]** | Generates a random email address with a custom domain. | `user842@gmail.com` |
| **date.today[format]** | Outputs today's date formatted according to [Day.js formats](https://day.js.org/docs/en/display/format). | <TodayDate/> |
| **date.today[x]** | Outputs the current Unix timestamp in milliseconds. | `1725471600000` |
| **random.date[format][start_year][end_year]** | Generates a random date within the specified year range. | `2004-06-18` |
| **random.mobile[length][prefixes]** | Generates a random mobile number of length `N` starting with given digits. | `9845123456` |
| **random.year[start][end]** | Generates a random 4-digit year within the specified range. | `2008` |
| **random.choose[items][divider]** | Randomly picks one item from a delimited string list. | `green` |

### Dynamic Element Selection with Random Integer

Use random integers in CSS selectors to select a random item from a group:

```css
input:nth-child({{random.integer[1][3]}})
```

---

### Month Format: random.month[format][lang] {#random-month}

Generates random month names or numbers in various languages.

| Format Code | Description | Example (`en`) |
| --- | --- | --- |
| `n` | Numeric month without leading zero (1–12). | `5` |
| `nn` | Numeric month with zero-padding (01–12). | `05` |
| `s` | Capitalized abbreviated month name. | `May` |
| `ss` | Lowercase abbreviated month name. | `may` |
| `su` | Uppercase abbreviated month name. | `MAY` |
| `f` | Capitalized full month name. | `January` |
| `fs` | Lowercase full month name. | `january` |
| `fu` | Uppercase full month name. | `JANUARY` |

---

### Day Format: random.day[format][lang] {#random-day}

Generates random day of week names or indices.

| Format Code | Description | Example (`en`) |
| --- | --- | --- |
| `n` | Numeric day of week (1–7). | `1` |
| `nn` | Numeric day with zero-padding (01–07). | `01` |
| `s` | Capitalized short day name. | `Mon` |
| `ss` | Lowercase short day name. | `mon` |
| `su` | Uppercase short day name. | `MON` |
| `f` | Capitalized full day name. | `Monday` |
| `fs` | Lowercase full day name. | `monday` |
| `fu` | Uppercase full day name. | `MONDAY` |

#### Supported Language Codes

| Code | Language | Code | Language |
| --- | --- | --- | --- |
| `en` | English | `it` | Italian |
| `es` | Spanish | `pt` | Portuguese |
| `fr` | French | `ru` | Russian |
| `de` | German | | |

---

## <img src="/svg/system.svg" class="doc-icon" width="20" height="20" alt="Math Variables" /> Mathematical Variables {#math-variables}

Perform arithmetic operations, counters, string length calculations, and expression evaluations dynamically.

**Syntax format:** <code v-pre>{{variable_name}}</code>

| Variable Name | Description | Example |
| --- | --- | --- |
| **math.sum[val1][val2]** | Adds `val2` to `val1`. | `math.sum[2000][5]` |
| **math.subtract[val1][val2]** | Subtracts `val2` from `val1`. | `math.subtract[100][15]` |
| **math.multiply[val1][val2]** | Multiplies `val1` by `val2`. | `math.multiply[5][4]` |
| **math.divide[val1][val2]** | Divides `val1` by `val2`. | `math.divide[100][4]` |
| **math.increase[val]** | Increments `val` by 1. | `math.increase[2]` |
| **math.decrease[val]** | Decrements `val` by 1. | `math.decrease[3]` |
| **math.length[string][divider]** | Counts items split by `divider`, or character length if divider is empty. | `math.length[a,b,c][,]` |
| **math.query[expression]** | Evaluates arithmetic expressions directly. | `math.query[1+2+3+4]` |
| **math.unique.number** | Generates a unique, non-repeating timestamp number. | `math.unique.number` |

### Math Evaluation Examples

```
{{math.sum[2000][5]}}       // Output: 2005
{{math.subtract[100][15]}}   // Output: 85
{{math.multiply[5][4]}}      // Output: 20
{{math.divide[100][4]}}      // Output: 25
{{math.increase[2]}}         // Output: 3
{{math.decrease[3]}}         // Output: 2
{{math.length[a,b,c][,]}}    // Output: 3
{{math.length[hello][]}}     // Output: 5
{{math.query[1+2+3+4]}}      // Output: 10
{{math.query[5*2]}}          // Output: 10
```

---

## <img src="/svg/excel.svg" class="doc-icon" width="20" height="20" alt="Excel Data Variables" /> Excel Data Variables {#excel-variables}

Retrieve active entry counters and access cell values from your uploaded `.xlsx` spreadsheet.

**Syntax format:** <code v-pre>{{variable_name}}</code>

| Variable Name | Description | Output Format |
| --- | --- | --- |
| **excel.row.index** | Returns the zero-based index of current active Excel row. | `0, 1, 2, ...` |
| **excel.row.number** | Returns the 1-based row number of current active Excel row. | `1, 2, 3, ...` |
| **excel.rows.length** | Returns the total count of data rows in the active spreadsheet. | Number (e.g., `150`) |
| **excel.row[row_number][column_name]** | Accesses data from a specific row and column header. | Cell string value |

::: tip Spreadsheet Format Support
Only `.xlsx` files are supported for uploaded spreadsheet operations in Excellent Data Filler.
:::

---

## <img src="/svg/code.svg" class="doc-icon" width="20" height="20" alt="Loop Variables" /> Loop Variables {#loop-variables}

When using the [Loop Field Type](/documentation/field-types/loop), access iteration counts and loop indices to dynamically target elements or execute indexed segments.

**Syntax format:** <code v-pre>{{variable_name}}</code>

| Variable Name | Description | Output |
| --- | --- | --- |
| **loop.index[FieldName]** | Returns the current loop iteration index for the named Loop field. | Number (`0, 1, 2, ...`) |
| **loop.length[FieldName]** | Returns the total configured loop iterations or matched element count. | Total count |

### Dynamic Element Targeting with Loop Index

Use loop index variables directly in selectors to automate tables row by row:

```css
table tbody tr:nth-child({{loop.index[FieldName]}}) td.action-btn
```

::: tip 1-Based Row Targeting
CSS `:nth-child()` starts at index `1`. When using loop indices in table selectors, configure the loop start index to `1` or use 1-based variables. See [Using Loop Index in Query Selectors](/documentation/field-types/loop#loop-index-in-selectors) for complete examples.
:::

::: info Store Loop Index Behavior
When **Store Loop Index** is enabled on the loop field, `loop.index` returns the saved persistent index across page reloads. When disabled, it returns the active session iteration counter.
:::
