# Table Advance Options

When using this field type, the following buttons will be inserted at the top of the table.

<img src="/image/table-advance-options-01.png" alt="Image">

- **Export to Excel**: Exports the table data into an Excel (`.xlsx`) sheet.
- **Export All Table to Excel**: Exports all tables on the page into a single Excel (`.xlsx`) workbook with individual sheets.
- **Print Table**: Opens a print window to print the table data directly from the page.

---

## Field Element Selector Options

These options allow users to specify the type and query for selecting element.

| Option         | Description                                                                                                               | Example                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Selector Type  | Specifies the type of selector being used. Available types may include Selector or other types, depending on the context. | `Selector`, `#ID`, `XPath` |
| Selector Query | Defines the `query` or `CSS` selector to target the specific element.                                                     |                            |

## Element Query Behavior

If you don't specify an element query, the field action will apply to **all tables** on the page.

This means that any actions associated with this field, like exporting or printing, will be performed on all tables.

If you want to target a specific table, you'll need to provide an element query. This query will define which table (or tables) the action should be applied to.

For more information on how to find the correct element query, please refer to the documentation on [How to Find Element Selector Query](/documentation/locate-element).

---

## Table Data Prepare & Clean Options

The **Table Data Prepare & Clean** settings provide controls to sanitize, format, and extract interactive elements from table cells prior to exporting or printing.

| Option | Description |
| --- | --- |
| **Prepare and clean table cell contents before export/print?** | **Master Switch**. When enabled, activates advanced cleaning and extraction for all elements inside table cells. |
| **Image Content Mode in Table** | Controls how images within table cells are handled during export or print. |
| **Include button text in exported table?** | Choose whether to include or exclude text labels from `<button>` elements. |
| **Include anchor link text/URL?** | Choose whether to extract anchor text and link URLs (`<a>` tags). |
| **Extract current values of input fields (text, number, date)?** | Extracts live user-entered values from text, numeric, date, and other `<input>` fields instead of blank inputs. |
| **Extract selected radio & checkbox labels (omit unselected)?** | Extracts only the labels of checked/selected radio buttons and checkboxes, omitting unselected choices. |
| **Extract selected dropdown/select option text?** | Extracts the visible label text of the chosen option from `<select>` dropdown menus. |
| **Extract textarea content values?** | Extracts user-entered multiline text values from `<textarea>` elements. |
| **Format and include nested sub-tables?** | Formats and cleanly includes nested child tables within parent table cells. |

### Image Content Mode in Table

When cleaning table content, you can choose how images are extracted using the **Image Content Mode in Table** dropdown:

| Mode | Description |
| --- | --- |
| **Extract Image URL (Link)** | Replaces the image element with its direct source URL link (`src`). |
| **Extract Image Alt Text / Title Description** | Extracts the image's descriptive text from its `alt` or `title` attributes. |
| **Preserve Visual Image Element (`<img>` tag)** | Retains the actual visual image element in the table. |
| **Skip Images (None)** | Completely ignores and strips images from the exported or printed output. |

::: tip Auto Restore
Immediately after the export or print action completes, Excellent Data Filler automatically reverts the table back to its original interactive state. Live input values, interactive elements, and web page layout remain intact without requiring a page refresh.
:::

---

## Export Excel Options

Configure export settings when downloading table data as an Excel (`.xlsx`) spreadsheet.

| Option | Description |
| --- | --- |
| **Visible all rows in excel sheet?** | If enabled, all visible rows in the table will be exported to the Excel sheet. If disabled, only rows currently displayed on the screen will be exported. |
| **Do you want to skip any sheets having sheet while downloading all table data?** | If enabled, specify a list of sheet names to exclude from the export process. |
| **Do you want to include any sheets having sheet while downloading all table data?** | If enabled, specify a list of sheet names to include in the export process, even if they are not currently visible. |

---

## Print Options

Configure settings for printing table data directly from the browser.

| Option | Description |
| --- | --- |
| **Print action automatically trigger when print window is open?** | Automatically triggers the browser's print dialog as soon as the print preview window opens. |
| **Do need to set a delay on the print action?** | Specifies a delay (in seconds) before the print action is triggered, allowing styles or dynamic content to fully render. |
| **Print window automatic close after print done?** | Automatically closes the print window once the print action is completed. |
| **Do need to set custom url on the print window?** | Specifies a custom URL to be opened in the print window. |
| **Would you to add custom styles to the print window?** | Specifies custom CSS stylesheets to apply to the print window. |

### Print Popup Window Options

| Option | Description |
| --- | --- |
| **Open print window in pop up window?** | Opens the print preview in a separate popup window instead of a standard tab. |
| **Do need to set print window height, width and window features?** | Specifies the height, width, and other window features of the popup print window. |

---

## Use Cases

### Export Tables with Live User Input

**Scenario:** A web portal table includes interactive inputs such as editable text boxes, date pickers, dropdown selects, and checkboxes that users have filled in.

**Configuration:**
- Enable **Prepare and clean table cell contents before export/print?**
- Enable **Extract current values of input fields (text, number, date)?**
- Enable **Extract selected radio & checkbox labels (omit unselected)?**
- Enable **Extract selected dropdown/select option text?**

**Result:** The exported Excel (`.xlsx`) sheet contains the actual values entered by the user rather than empty input elements. Once exported, the page table is automatically restored to its interactive state.

---

### Export Product Table with Image Links

**Scenario:** An e-commerce table displays product thumbnail images, descriptions, SKU, and "Buy Now" buttons.

**Configuration:**
- Set **Image Content Mode in Table** to **Extract Image URL (Link)**.
- Disable **Include button text in exported table?**.

**Result:** The generated Excel file replaces visual thumbnails with direct image URLs and omits button labels, creating a clean catalog dataset.

---

### Clean Print Layout for Web Invoices and Reports

**Scenario:** Print a web-based data table or invoice directly without page navigation headers, footers, or action buttons.

**Configuration:**
- Enable **Open print window in pop up window?**.
- Enable **Print action automatically trigger when print window is open?**.
- Enable **Would you to add custom styles to the print window?** to inject print-specific CSS (e.g., hiding action buttons and adjusting font sizing).

**Result:** A standalone popup window opens with the styled table and immediately opens the browser's print dialog for fast, clean printing.

---

### Batch Export All Page Tables to Excel

**Scenario:** An analytical dashboard contains multiple summary tables across different sections of the page.

**Configuration:**
- Leave the **Selector Query** empty to apply actions across all page tables.
- Click **Export All Table to Excel**.

**Result:** All tables on the page are consolidated into a single Excel (`.xlsx`) workbook, with individual tables cleanly separated into dedicated sheets.
