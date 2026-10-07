---
prev:
  text: "Field Action Status Checker"
  link: "/documentation/field-types/advance/field-action-status-checker"
next:
  text: "Execute Segment"
  link: "/documentation/field-types/execute-segment"
---

# Next Excel Entry Exists {#next-excel-entry-exists}

The **Next Excel Entry Exists** field type is an advanced control flow field that checks whether another uncompleted row exists in the active uploaded Excel (`.xlsx`) spreadsheet.

It functions as a conditional branching checkpoint within your form sequence or segment workflow, returning either a **Success** or **Error** status to direct your automation flow.

---

## Overview & Behavior {#overview}

Unlike standard form fields that interact with web page inputs or DOM elements, **Next Excel Entry Exists** requires **no field settings or element selectors**. It directly inspects the extension's internal Excel row index.

| Status | Condition | Description |
|---|---|---|
| **Success** | Next row exists | Another uncompleted record is available in the uploaded `.xlsx` file. |
| **Error** | No next row exists | All records have been processed, or the current entry is the final row in the dataset. |

Because this field type does not have internal configuration inputs, its behavior is controlled through [Field Response Actions](/documentation/form-fields/field-response-action). You configure specific automated responses for both the **Success** and **Error** channels.

---

## Configuring Response Actions {#response-actions}

After adding the **Next Excel Entry Exists** field, navigate to the field's **Response Action Settings** in the settings panel to configure actions for each outcome:

### 1. Field Success Response Action {#success-response-action}

Executed when the extension verifies that a subsequent Excel row is ready to be processed.

- **Go to Next Entry**: Advances the active spreadsheet pointer to the next record.
- **Re-Execute Form**: Restarts form automation from the first field to fill the newly selected row.
- **Reload Page**: Refreshes the active web page to reset the form inputs before filling the next record.
- **Open a URL**: Navigates the browser tab back to the form submission starting page.
- **Execute Segment**: Triggers a dedicated modular sub-routine to prepare or process the next record.

### 2. Field Error Response Action {#error-response-action}

Executed when the extension detects that the final Excel row has been processed and no further data records remain.

- **Stop Loop**: Immediately halts the repeating execution loop to conclude automation cleanly.
- **Skip Form**: Aborts remaining form steps and moves to the next configured workflow stage.
- **Execute Segment**: Runs a completion routine, such as exporting scraped data, sending notifications, or cleaning local storage.
- **Open a URL**: Redirects the browser tab to an administrative dashboard, completion summary, or logout page.

---

## Step-by-Step Configuration {#how-to-configure}

1. Open your target **Site Form** or **Segment** in the Excellent Data Filler dashboard.
2. Click **Insert Field** (`+`) to add a new field to your sequence.
3. From the **Field Type** dropdown, select **Next Excel Entry Exists** under the **Advance** category.
4. Leave the field value and selector inputs empty, as this field type does not require element targeting.
5. In the **Response Action Settings** section:
   - Toggle ON **Field Success Response Action** and select your desired action (e.g., `Go to Next Entry` or `Re-Execute Form`).
   - Toggle ON **Field Error Response Action** and select your exit action (e.g., `Stop Loop` or `Execute Segment`).
6. Click **Save** to confirm your field configuration.

---

## Example Workflow: Automated Multi-Row Batch Loop {#example-workflow}

A common automation scenario involves submitting a web form repeatedly until every row in an uploaded `.xlsx` spreadsheet is submitted:

| Step | Field Type | Purpose | Configuration |
|:---:|---|---|---|
| **1** | Standard Fields (`Text`, `Select`, etc.) | Fill inputs from active Excel row | Target element selectors with `{$Column$}` values |
| **2** | **Button** | Click form submission button | Target selector: `#submit-button` |
| **3** | [**Current Entry as Saved**](/documentation/field-types/advance/current-entry-as-saved) | Mark active row as completed | Detect submission confirmation banner |
| **4** | **Next Excel Entry Exists** | Verify if more data rows remain | No selector needed |
| | &bull; *On Success Response Action* | Prepare next row | Action: `Go to Next Entry` &rarr; `Reload Page` |
| | &bull; *On Error Response Action* | Terminate workflow | Action: `Stop Loop` |

In this sequence, the form repeatedly processes data rows one by one. Once the final row is saved, **Next Excel Entry Exists** returns **Error**, triggering `Stop Loop` to halt automation automatically without manual intervention.

---

## Best Practices {#best-practices}

- **Sequence Placement**: Position **Next Excel Entry Exists** after form submission and after marking the record as completed ([Current Entry as Saved](/documentation/field-types/advance/current-entry-as-saved)), so the status check evaluates only after the active row has been processed.
- **Avoid Infinite Loops**: Always ensure that a successful evaluation increments the data index (e.g., using `Go to Next Entry`) to prevent repeatedly executing against the same row.
- **Spreadsheet Requirement**: This field type evaluates records from uploaded **Excel (.xlsx)** workbooks or connected Google Sheets. Ensure a data source is loaded before running batch loops.
