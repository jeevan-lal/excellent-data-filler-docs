# Extension Actions {#extension-actions}

Extension Actions are powerful field types that allow you to interact with Excel data directly from your forms. These actions enable you to manipulate Excel entries, modify data, and perform bulk operations on your spreadsheet data.

## 📋 Overview {#overview}

Extension Actions provide the following capabilities:

- **🔹 Single Row Operations**: Perform actions on individual Excel rows
- **📦 Bulk Operations**: Apply actions to multiple Excel rows simultaneously
- **❄️ Row Freezing**: Freeze the current Excel row for a specified duration
- **🔓 Row Unfreezing**: Unfreeze frozen Excel rows
- **⚙️ Data Manipulation**: Set, get, and modify Excel column values
- **🗂️ Data Management**: Mark entries as saved, delete entries, and refresh data
- **🔄 Refresh Excel Data**: Reload the Excel data in the extension

---

## 📄 Excel Row {#excel-row}

Performs actions on a single Excel row based on the specified row number.

### 📝 Description {#excel-row-description}

This field type allows you to apply specific actions to a single Excel entry. The row number can be specified either in the field value or in the default value of the field.

### ⚙️ Field Options {#excel-row-field-options}

| Field Options   | Required | Example Values                                                 | Description                  |
| --------------- | -------- | -------------------------------------------------------------- | ---------------------------- |
| **Actions**     | Yes      | **Marked as Saved** <br> **Unmarked as Saved** <br> **Delete** | Action to perform on the row |
| **Field Value** | Yes      | `1`, `5`, `10`                                                 | Row number to target         |

### 💡 Usage Examples {#excel-row-usage-examples}

- **✅ Mark as Saved**: Mark a specific row as completed/processed
- **❌ Unmark as Saved**: Remove the saved status from a row
- **🗑️ Delete**: Remove the entire row from the Excel file

---

## 📚 Excel Rows {#excel-rows}

Performs bulk actions on multiple Excel rows simultaneously.

### 📝 Description {#excel-rows-description}

This field type applies actions to all entries in your Excel file. **⚠️ Warning**: This operation can take a significant amount of time when working with large datasets, as it processes every row in the Excel file.

### ⚙️ Field Options {#excel-rows-field-options}

| Field Options   | Required | Example Values                                                 | Description                  |
| --------------- | -------- | -------------------------------------------------------------- | ---------------------------- |
| **Actions**     | Yes      | **Marked as Saved** <br> **Unmarked as Saved** <br> **Delete** | Action to perform on the row |
| **Field Value** | Yes      | `1`, `5`, `10`                                                 | Row number to target         |

### ⚡ Performance Considerations {#performance-considerations}

- Use with caution on large datasets
- Consider using Excel Row for individual operations when possible
- Bulk operations may take several minutes depending on data size

---

## ❄️ Excel Row Freeze {#excel-row-freeze}

Freezes the current Excel row for a specified duration in minutes.

### 📝 Description {#excel-row-freeze-description}

This field type allows you to temporarily freeze the current Excel row. During the specified period, the row is locked or ignored to prevent other instances of the extension or concurrent runs from accessing or processing the same entry.

### ⚙️ Field Options {#excel-row-freeze-field-options}

| Field Options | Required | Example Values | Description                                                               |
| ------------- | -------- | -------------- | ------------------------------------------------------------------------- |
| **Minutes**   | Yes      | `1`, `2`, `5`  | The duration (in minutes) for which the current Excel row remains frozen |

### 💡 Usage Examples {#excel-row-freeze-usage-examples}

- **❄️ Temp Lock Row**: Freeze a row for `2` minutes to avoid duplicate processing in concurrent execution environments.

---

## 🔓 Excel Rows Unfreeze {#excel-rows-unfreeze}

Unfreezes frozen Excel rows in the dataset.

### 📝 Description {#excel-rows-unfreeze-description}

This field type allows you to unfreeze Excel rows that were previously frozen. You can configure it to unfreeze only those rows whose freeze time has expired, or unfreeze all frozen rows.

### ⚙️ Field Options {#excel-rows-unfreeze-field-options}

| Field Options | Required | Example Values | Description |
| ------------- | -------- | -------------- | ----------- |
| **Unfreeze only those rows whose freeze time has expired?** | No | Toggle ON/OFF | When enabled, only unfreezes rows whose freeze time limit has expired |

### 💡 Usage Examples {#excel-rows-unfreeze-usage-examples}

- **🔓 Unfreeze Expired Rows**: Automatically unfreeze rows whose freeze duration has expired so they become available for processing again.

## ✏️ Set Excel Column {#set-excel-column}

Sets or updates the value of a specific column in an Excel row.

### 📝 Description {#set-excel-column-description}

This field type allows you to write data to a specific cell in your Excel file by specifying the row number and column/field name.

### ⚙️ Field Options {#set-excel-column-field-options}

| Field Options               | Required | Example Values                 | Description                                   |
| --------------------------- | -------- | ------------------------------ | --------------------------------------------- |
| **Entry Row Number**        | Yes      | `1`, `5`, `10`                 | The row number where the data will be written |
| **Entry Column/Field Name** | Yes      | `Name`, `Email`, `Status`      | The column name or field identifier           |
| **Field Value**             | Yes      | `John Doe`, `john@example.com` | The value to be written to the specified cell |

### 💡 Usage Examples {#set-excel-column-usage-examples}

- 📊 Update status fields
- 📅 Set completion dates
- 🧮 Write calculated values
- 💾 Store form submission data

---

## 📖 Get Excel Column {#get-excel-column}

Retrieves the value from a specific column in an Excel row.

### 📝 Description {#get-excel-column-description}

This field type reads data from a specific cell in your Excel file and can be used to populate form fields or perform conditional logic based on existing data.

### ⚙️ Field Options {#get-excel-column-field-options}

| Field Options               | Required | Example Values            | Description                                 |
| --------------------------- | -------- | ------------------------- | ------------------------------------------- |
| **Entry Row Number**        | Yes      | `1`, `5`, `10`            | The row number to read data from            |
| **Entry Column/Field Name** | Yes      | `Name`, `Email`, `Status` | The column name or field identifier to read |

### 💡 Usage Examples {#get-excel-column-usage-examples}

- 🔄 Pre-populate form fields with existing data
- 🔍 Retrieve previous values for comparison
- ⚙️ Load configuration data from Excel
- ✅ Implement data validation based on existing records

---

## 🔧 Modify Excel Column {#modify-excel-column}

Modifies existing values in Excel columns using various mathematical or replacement operations.

### 📝 Description {#modify-excel-column-description}

This field type allows you to perform operations on existing Excel data, such as incrementing values, decrementing values, or replacing them entirely.

### ⚙️ Field Options {#modify-excel-column-field-options}

| Field Options               | Required | Example Values                                                   | Description                                     |
| --------------------------- | -------- | ---------------------------------------------------------------- | ----------------------------------------------- |
| **Entry Row Number**        | Yes      | `1`, `5`, `10`                                                   | The row number containing the data to modify    |
| **Entry Column/Field Name** | Yes      | `Quantity`, `Price`, `Count`                                     | The column name or field identifier to modify   |
| **Actions**                 | Yes      | **Increase Value** <br> **Decrease Value** <br> **Change Value** | Action to perform on the existing value         |
| **Field Value**             | Yes      | `5`, `10.50`, `New Value`                                        | The value to use for the modification operation |

### 🎯 Action Types {#action-types}

- **➕ Increase Value**: Adds the field value to the existing cell value
- **➖ Decrease Value**: Subtracts the field value from the existing cell value
- **🔄 Change Value**: Replaces the existing cell value with the field value

### 💡 Usage Examples {#modify-excel-column-usage-examples}

- 🔢 Increment counters or quantities
- 📊 Update running totals
- 🏷️ Modify status codes
- 🔢 Adjust numerical values

---

## 🔄 Refresh Excel Data {#refresh-excel-data}

Reloads and refreshes the Excel data in the extension.

### 📝 Description {#refresh-excel-data-description}

This field type forces the extension to reload the Excel file data, ensuring that any external changes to the file are reflected in the current session.

### ⚙️ Field Options {#refresh-excel-data-field-options}

| Field Options | Required | Example Values | Description                                                                             |
| ------------- | -------- | -------------- | --------------------------------------------------------------------------------------- |
| **None**      | No       | N/A            | No specific field options required - this action refreshes all Excel data automatically |

### 💡 Usage Examples {#refresh-excel-data-usage-examples}

- 🔄 After external modifications to the Excel file
- 📁 When switching between different Excel files
- ✅ To ensure data consistency across multiple form submissions
- 🔧 After bulk operations that may have been performed outside the extension
