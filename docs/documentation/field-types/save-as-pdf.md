# Save as PDF {#save-as-pdf}

Save web pages as PDF files using the browser's print functionality. Configure PDF generation settings, file naming, and save options for automated document creation.

## Field Options {#save-as-pdf-field-options}

| Field Options                                                   | Required | Description                                               | Example Values                        |
| --------------------------------------------------------------- | -------- | --------------------------------------------------------- | ------------------------------------- |
| **Press Ctrl + P**                                              | No       | Automatically trigger print dialog                        | Toggle ON/OFF                         |
| **Press Ctrl + S**                                              | No       | Use Ctrl+S shortcut for saving                            | Toggle ON/OFF                         |
| **Set the image path to identify the print preview window.**    | No       | Custom image for print preview window detection           | `/path/to/image.png`                  |
| **Set the image path to identify the print button.**            | No       | Custom image to identify and click print button           | `/path/to/print_btn.png`              |
| **Set delay time after opening print window**                   | No       | Wait time after print dialog opens                        | `1000`, `2000` (milliseconds)         |
| **Set delay time after pdf saved.**                             | No       | Wait time after PDF is saved                              | `1000`, `2000` (milliseconds)         |
| **Wait until the print page title matches?**                    | No       | Regex pattern to wait for matching print page title       | `.*\.pdf$`, `(?i)^Application.*`      |
| **If file already exists in the save location then replace it** | No       | Overwrite existing files with same name                   | Toggle ON/OFF                         |
| **Set the `confirm replace save as browser window` title name** | No       | Set the confirm replace save as browser window title name | Toggle ON/OFF                         |
| **Set the `save as browser window` title name**                 | No       | Set the save as browser window title name                 | Toggle ON/OFF                         |
| **Direct Save Page to PDF (Firefox only)**                      | No       | Direct PDF save without print dialog                      | Toggle ON/OFF                         |
| **Field Value**                                                 | No       | Custom filename for PDF                                   | `document.pdf`, `report_{$name$}.pdf` |

## Configuration {#save-as-pdf-configuration}

### Print Options {#print-options}

#### Press Ctrl + P {#press-ctrl-p}

**Purpose:** Automatically trigger the print dialog without manual keyboard input.

**How it works:**

- If you want to save the page through `Ctrl + P`, turn on this option
- No need to manually press `Ctrl + P` buttons

:::info Note
If your file/PDF is downloaded after clicking any button, provide the selector query of that button in field selector query.
:::

---

#### Set the image path to identify the print preview window {#set-the-image-path-to-identify-the-print-preview-window}

**Purpose:** Use custom image to detect when print preview window is ready.

**How to configure:**

1. **Save an image** of the print preview window on your PC
2. **Provide the image path** in this option
3. **Extension waits** until the image is visible on screen

**Image Requirements:**

- Clear screenshot of print preview window
- Unique elements that identify the print dialog
- Reasonable file size for quick processing

**Example Image:**

<img src="/image/print-window-01.png" alt="Print Window Detection">

:::warning Important
- If you are using the same image to other PC, the image might not match due to different resolutions or OS scaling.
- Take the image from the same PC where you run the automation.
- If you resize the browser window, the detection image may fail to match.
:::

---

#### Set the image path to identify the print button {#set-the-image-path-to-identify-the-print-button}

**Purpose:** Use custom image to locate and click the print button in the print window.

**How to configure:**

1. **Save an image** of the print button on your PC
2. **Provide the image path** in this option
3. **Extension waits** until the button image is detected and clicked

---

#### Set delay time after opening print window {#set-delay-time-after-opening-print-window}

**Purpose:** Add wait time between opening print window and saving the PDF.

**Configuration:**

- **Delay time** in milliseconds
- **Recommended values:** 3000-5000ms
- **Adjust based on** page complexity and loading time

---

#### Set delay time after pdf saved {#set-delay-time-after-pdf-saved}

**Purpose:** Add wait time after the PDF file has been saved before proceeding further.

**Configuration:**

- **Delay time** in milliseconds (e.g. `2000`)

---

#### Wait until the print page title matches? {#wait-until-the-print-page-title-matches}

**Purpose:** Wait until the browser page or print title matches a specified regex pattern before saving.

Here are some useful regex examples for matching browser page titles.

| Regex                            | Matches                     | Description                                        |
| -------------------------------- | --------------------------- | -------------------------------------------------- |
| `.*`                             | Any title                   | Match every page title.                            |
| `(?i).*`                         | Any title                   | Match every title (case-insensitive).              |
| `^My Page$`                      | `My Page`                   | Exact title match.                                 |
| `(?i)^My Page$`                  | `my page`, `MY PAGE`        | Exact title, ignore case.                          |
| `Invoice`                        | `Invoice 123`               | Title contains `Invoice`.                          |
| `(?i)Invoice`                    | `invoice`, `INVOICE`        | Contains `Invoice`, ignore case.                   |
| `^Invoice`                       | `Invoice #123`              | Title starts with `Invoice`.                       |
| `Invoice$`                       | `Final Invoice`             | Title ends with `Invoice`.                         |
| `(?i)\.pdf$`                     | `form.pdf`                  | Ends with `.pdf` (ignore case).                    |
| `(?i)^.*\.pdf$`                  | `Application.pdf`           | Any PDF filename.                                  |
| `(?i)^Application\.pdf$`         | `Application.pdf`           | Exact PDF filename.                                |
| `(?i)^Application.*\.pdf$`       | `Application_v2.pdf`        | PDF beginning with `Application`.                  |
| `(?i)Application.*`              | `Application Form - Chrome` | Title contains `Application` followed by anything. |
| `(?i)^.*Google Chrome$`          | `form.pdf - Google Chrome`  | Any Chrome window.                                 |
| `(?i)^.*Microsoft Edge$`         | `form.pdf - Microsoft Edge` | Any Edge window.                                   |
| `(?i)^.*(Chrome\|Edge)$`         | Chrome or Edge              | Match either browser.                              |
| `(?i)^.*\.pdf - Google Chrome$`  | `abc.pdf - Google Chrome`   | Any PDF opened in Chrome.                          |
| `(?i)^.*\.pdf - Microsoft Edge$` | `abc.pdf - Microsoft Edge`  | Any PDF opened in Edge.                            |
| `(?i)^.*.(pdf\|docx)$`           | `a.pdf`, `b.docx`           | Match PDF or DOCX.                                 |
| `(?i)success\|completed`         | `Completed Successfully`    | Contains either `success` or `completed`.          |
| `(?i)(login\|signin)`            | `Login`, `Sign In`          | Match either word.                                 |
| `^[0-9]+$`                       | `12345`                     | Numbers only.                                      |
| `^[A-Za-z]+$`                    | `Welcome`                   | Letters only.                                      |
| `^[A-Za-z0-9 _-]+$`              | `Invoice_2026-01`           | Letters, numbers, spaces, `_` and `-`.             |

##### Regex symbols

| Symbol   | Meaning                      | Example          |
| -------- | ---------------------------- | ---------------- |
| `^`      | Start of text                | `^Invoice`       |
| `$`      | End of text                  | `\.pdf$`         |
| `.`      | Any single character         | `a.c`            |
| `.*`     | Any number of any characters | `Invoice.*`      |
| `+`      | One or more                  | `[0-9]+`         |
| `?`      | Zero or one                  | `colou?r`        |
| `\.`     | Literal dot (`.`)            | `\.pdf`          |
| `\d`     | Digit                        | `\d{4}`          |
| `[abc]`  | One of the listed characters | `[AB]`           |
| `[A-Z]`  | Uppercase letter             | `[A-Z]{3}`       |
| `[0-9]`  | Digit                        | `[0-9]{6}`       |
| `[^0-9]` | Not a digit                  | `[^0-9]+`        |
| `(A\|B)` | A or B                       | `(Chrome\|Edge)` |
| `(?i)`   | Ignore case                  | `(?i)\.pdf$`     |

---

### Browser-Specific Options {#browser-specific-options}

#### Direct Save Page to PDF (Firefox Only) {#direct-save-page-to-pdf-firefox-only}

**Purpose:** Save PDF directly without print dialog (Firefox browser only).

**Benefits:**

- Faster PDF generation
- No print dialog interaction
- Streamlined automation process

---

### File Management Options {#file-management-options}

#### If file already exists then replace it {#if-file-already-exists-then-replace-it}

**Purpose:** Control behavior when a file with the same name already exists.

**Options:**

- **ON** - Replace existing file with new content
- **OFF** - Browser will ask to replace the file

---

#### Press Ctrl + S {#press-ctrl-s}

**Purpose:** Use Ctrl+S keyboard shortcut for saving files.

**How it works:**

- Triggers browser's save dialog
- Alternative to print-based PDF generation
- Works with most browsers

---

### File Naming {#file-naming}

#### Field Value {#field-value}

**Purpose:** Set custom filename for the generated PDF from static values or Excel (.xlsx) columns.

**Basic Usage:**

- **Static name:** `document.pdf`
- **Dynamic name:** `report_{$name$}.pdf`
- **Date-based:** `invoice_{$date.today[yyyy-mm-dd]$}.pdf`
- **Unique filename:** `document_{$date.today[x]$}.pdf`

**Variable Syntax:**

- Use `{$variable_name$}` format
- Access form data and system variables
- Create unique filenames automatically

---

## PDF Page Settings (Firefox) {#pdf-page-settings-firefox}

Customize PDF page settings for optimal document formatting.

### Customize PDF Page Settings {#customize-pdf-page-settings}

**Purpose:** Configure page size, orientation, margins, and other PDF properties.

**API Reference:** [PageSettings API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/PageSettings)

**Example Configuration:**

```
paperHeight=297,paperWidth=210,orientation=1,scaling=0.65,paperSizeUnit=1,shrinkToFit=true
```

**Result:** A4 landscape size page

| Property          | Value | Description                         |
| ----------------- | ----- | ----------------------------------- |
| **paperHeight**   | 297   | A4 height in mm                     |
| **paperWidth**    | 210   | A4 width in mm                      |
| **orientation**   | 1     | 0 = portrait, 1 = landscape         |
| **scaling**       | 0.65  | Content scaling factor (default: 1) |
| **paperSizeUnit** | 1     | 0 = inches, 1 = millimeters         |
| **shrinkToFit**   | true  | Shrink content to fit page width    |

## Browser Window Title {#browser-window-title}

### Set the save as browser window title name {#set-browser-window-title}

**Purpose:** Customize browser window title during PDF save process.

**Use Cases:**

- **Multi-language support** - Different titles for different languages
- **Branding** - Custom application names
- **Identification** - Distinguish between different save operations

**Configuration:**

- Set different titles for different languages
- Use variables for dynamic titles
- Match your application's branding

---

### Set the confirm replace save as browser window title name {#set-confirm-replace-save-as-browser-window-title}

**Purpose:** Customize browser window title during PDF save process confirmation.

**Use Cases:**

- **Multi-language support** - Different titles for different languages
- **Branding** - Custom application names
- **Identification** - Distinguish between different save operations

---

## Important Notes {#important-notes}

### Prerequisites {#prerequisites}

[Install Helper Program](/documentation/program#download-and-install)

- **Required** before using this field type
- **Download** from extension settings
- **Install** the helper program on your system
- **Verify** installation before configuring PDF fields

## Troubleshooting {#troubleshooting}

| Issue                         | Solution                               |
| ----------------------------- | -------------------------------------- |
| **PDF not generated**         | Check helper program installation      |
| **Print dialog not detected** | Adjust image path or disable detection |
| **File not saved**            | Verify save location permissions       |
| **Filename conflicts**        | Use unique naming with variables       |

:::info Pro Tip
Use the `{$date.today[x]$}` variable in filenames to ensure unique file names every time.
:::

:::warning Important
Install the helper program before using this field type. The extension will not work without it.
:::

## Next Steps

- <img src="/svg/form.svg" class="doc-icon" /> [Target Element For Print](/documentation/field-types/target-element-for-print) — Selectively print elements
- <img src="/svg/browser.svg" class="doc-icon" /> [Program Helper](/documentation/field-types/program-helper) — System-level helper automation
- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template](/documentation/site/site-excel-template) — Prepare Excel (.xlsx) templates
- <img src="/svg/settings.svg" class="doc-icon" /> [Site Settings](/documentation/site/site-settings) — Configure site-wide automation settings

