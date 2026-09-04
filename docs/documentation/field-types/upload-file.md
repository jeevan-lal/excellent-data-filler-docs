---
prev:
  text: "Field Response Action"
  link: "/documentation/form-fields/field-response-action"
next:
  text: "Date Picker"
  link: "/documentation/field-types/date-picker"
---

# Upload File {#upload-file}

The **Upload File** field type automates local file selection and file uploads through web forms. It seamlessly handles native file dialogs across modern web platforms, including Google Forms, Microsoft Forms, government and banking portals, and custom web applications.

---

## Install Helper Program {#install-helper-program}

Due to browser security sandboxes, browser extensions cannot directly interact with OS-level file dialogs without native messaging. The [Helper Program](/documentation/program#download-and-install) is a lightweight local utility required to automatically select and upload files from your local file system.

> [!IMPORTANT]
> The Helper Program must be installed and running on your computer for automated file selection and uploads to work.

### Verifying Helper Program Connection

In the field configuration sidebar, check the connection status banner:

<img src="/image/upload-field-01.png" alt="Helper Program Upload Connection Check" style="max-width: 420px; border-radius: 8px; margin: 16px 0;" />

Click **"Click and Check File Upload Connection is Connected"** to verify active communication between the extension and the local helper program.

---

## Field Options {#field-options}

The Upload File field provides granular controls for single, multiple, and batch folder uploads:

| Option | Description | Required |
|---|---|---|
| **Set File/Folder Base Path** | Specifies a root folder directory where your upload files reside. | No |
| **Base Path** | Full directory path to prepend to file names (e.g., `D:\photos\`). | When Base Path enabled |
| **Multiple File Upload** | Enables selecting and uploading multiple files in a single operation. | No |
| **Separator for Multiple File Upload** | Character used to separate multiple file names (e.g., `\r\n`, `,`, `;`). | When multiple files enabled |
| **Upload all files in a folder** | Automatically uploads all files contained inside the specified base folder. | No |
| **First check that the file exists in the PC, then select the file** | Verifies file existence on disk before attempting to open the dialog. | No |
| **Set the uploading browser window title name** | Customizes the target OS file dialog title (e.g., "Open" or "Select File"). | No |
| **Browser Window Title** | Custom title string matching the upload dialog window. | When title customization enabled |
| **File Name/Path** | Target file name or absolute path from the Excel column or default value. | Yes |

---

## Configuration Details {#configuration-details}

### File Name and File Path Mapping {#file-name-path}

You can specify target files using either relative file names (combined with a Base Path) or standalone absolute file paths:

#### Approach A: File Name with Base Path (Recommended)

When all files are stored in a common directory, configure the base path once in field options and specify only the file name in your Excel spreadsheet:

- **Base Path**: `D:\photos\`
- **Excel Cell Value**: `profile.jpg`
- **Resulting Full Path**: `D:\photos\profile.jpg`

<img src="/image/upload-field-02.png" alt="Set File/Folder Base Path Example" style="max-width: 420px; border-radius: 8px; margin: 16px 0;" />

#### Approach B: Full Absolute Path

If your files are located across different directories or drives, disable Base Path and provide the full absolute path in your spreadsheet:

- **Base Path**: Disabled
- **Excel Cell Value**: `C:\Users\Username\Documents\contract.pdf`

> [!NOTE]
> Predefined variables such as `{$predefine_variable$}` and dynamic path templates can be used within the `File Name/Path` field.

---

### Set File/Folder Base Path {#set-file-folder-base-path}

- **Purpose**: Defines the parent directory where upload assets are stored.
- **Format**:
  - Windows: `D:\Documents\Uploads\` or `C:\Data\Photos\`
  - macOS / Linux: `/Users/username/uploads/`

---

### Multiple File Upload {#multiple-file-upload}

Allows uploading multiple files into a multi-file file input in one automated step:

- **Supported Separators**:
  - Line break (`\r\n` / `\n`)
  - Comma (`,`)
  - Semicolon (`;`)

> [!TIP]
> File paths containing spaces can be enclosed in double quotes:
> ```text
> "C:\Uploads\Document 2025.pdf"
> "C:\Uploads\Identity Card.png"
> ```

---

### File Existence Check {#file-existence-check}

- **Purpose**: Checks whether the target file exists on your local storage before triggering the OS file dialog.
- **Benefit**: Prevents the automation from hanging on broken dialogs or attempting to open non-existent files.
- **Recommendation**: Keep this option enabled for resilient unattended automation.

---

### Browser Window Title Customization {#browser-window-title-customization}

- **Purpose**: Specifies the exact window title of the native file selection dialog.
- **Default Value**: `"Open"` (standard Windows file dialog title).
- **Use Cases**: Useful when uploading via non-English operating systems, web applications with customized dialog titles (e.g. "Select an image to upload"), or when multiple dialogs are open simultaneously.

---

## Handling Empty Excel Field Values {#handling-empty-values}

In real-world data entry, certain rows in your spreadsheet may not contain a file to upload. By default, the extension might still trigger the upload sequence, which can cause timeout warnings on blank rows.

### Skip Action for Empty Values {#skip-empty-values}

To gracefully bypass the upload field when no file name is provided in the active spreadsheet row:

1. In the field configuration, enable **"Skip field action if given field value matches"** (or use field condition matching).
2. Set the matching value pattern to `''` (two single quotes representing an empty string).
3. **Execution Behavior**: If the row cell is empty, the upload step is skipped entirely and automation proceeds directly to the next field.

### Configuration Example {#empty-value-example}

**Field Options Setup**:
- **Set File/Folder Base Path**: `D:\Documents\Uploads\`
- **Skip field action if given field value matches**: `''`

**Execution Flow**:

| Row | Spreadsheet Value | Execution Result |
|---|---|---|
| **1** | `document.pdf` | Uploads `D:\Documents\Uploads\document.pdf` |
| **2** | *(empty)* | Skips upload action smoothly |
| **3** | `photo.jpg` | Uploads `D:\Documents\Uploads\photo.jpg` |
| **4** | *(empty)* | Skips upload action smoothly |

---

## Common Upload Workflows {#usage-examples}

### Workflow 1: Standard Single File Upload

1. Enable **Set File/Folder Base Path** and specify your documents folder.
2. Enable **First check that the file exists in the PC**.
3. Keep the default window title `"Open"`.
4. In your `.xlsx` spreadsheet, populate the file names (e.g., `receipt_101.pdf`).

### Workflow 2: Multi-File Batch Submission

1. Enable **Multiple File Upload**.
2. Set the delimiter separator (e.g., newline `\r\n` or comma `,`).
3. Provide the list of file paths separated by the chosen delimiter in the Excel cell.

### Workflow 3: Upload All Files in a Folder

1. Enable **Upload all files in a folder**.
2. Specify the target folder path in the Base Path configuration.
3. The helper program reads all files in the folder and submits them collectively to the input.

---

## Troubleshooting {#troubleshooting}

### Common Issues & Solutions

| Issue | Likely Cause | Solution |
|---|---|---|
| **Helper Program not detected** | Program not running or blocked by firewall/antivirus | Ensure the Helper Program is running in your system tray. Check permissions and click "Check File Upload Connection". |
| **File not found error** | Incorrect base path or missing file extension | Verify the directory path exists and includes the trailing slash (`D:\folder\`). Ensure the file extension matches the actual file on disk. |
| **Wrong dialog window selected** | Multiple file dialogs open or non-standard title | Close extraneous dialog windows. Enter the exact title in **Browser Window Title** matching your OS dialog. |
| **Upload hangs on blank rows** | Empty cell processed without skip condition | Configure **Skip field action if given field value matches** with `''` to bypass rows without files. |

### Debug Checklist

1. **Verify Helper Status**: Confirm the helper program icon is visible in the Windows taskbar system tray.
2. **Validate Path Manually**: Copy the full path and paste it into Windows File Explorer to verify accessibility.
3. **Check Execution Logs**: Open [Logs](/documentation/logs) to inspect the exact resolved file path sent to the helper program.

---

## Online Interactive Examples {#examples}

Test and verify your upload configuration against our official interactive practice forms:

- [Example-15: Single File Upload](https://formfiller.ctechhindi.in/example/example-15.php) - Practice single file selection and base path mapping.
- [Example-25: Multiple File Upload](https://formfiller.ctechhindi.in/example/example-25.php) - Practice multiple file uploads with separators.

---

## Related Documentation {#related-documentation}

- <img src="/svg/system.svg" class="doc-icon" /> [Helper Program Download & Setup](/documentation/program)
- <img src="/svg/form.svg" class="doc-icon" /> [Form Fields Overview](/documentation/form-fields/field)
- <img src="/svg/settings.svg" class="doc-icon" /> [Field Settings](/documentation/form-fields/field-settings)
- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template (.xlsx)](/documentation/site/site-excel-template)
- <img src="/svg/beaker.svg" class="doc-icon" /> [Execution Logs](/documentation/logs)
