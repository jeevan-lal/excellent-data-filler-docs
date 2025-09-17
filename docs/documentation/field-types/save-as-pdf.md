# Save as PDF {#save-as-pdf}

Save web pages as PDF files using the browser's print functionality. Configure PDF generation settings, file naming, and save options for automated document creation.

## 📋 Field Options {#save-as-pdf-field-options}

| Field Options                                                   | Required | Description                                               | Example Values                        |
| --------------------------------------------------------------- | -------- | --------------------------------------------------------- | ------------------------------------- |
| **Press Ctrl + P**                                              | No       | Automatically trigger print dialog                        | Toggle ON/OFF                         |
| **Press Ctrl + S**                                              | No       | Use Ctrl+S shortcut for saving                            | Toggle ON/OFF                         |
| **Do not identify print window as per image**                   | No       | Skip print window detection                               | Toggle ON/OFF                         |
| **Set Image Path to Identify Print Window**                     | No       | Custom image for print window detection                   | `/path/to/image.png`                  |
| **Set delay time after opening print window**                   | No       | Wait time after print dialog opens                        | `1000`, `2000` (milliseconds)         |
| **If file already exists in the save location then replace it** | No       | Overwrite existing files with same name                   | Toggle ON/OFF                         |
| **Set the `confirm replace save as browser window` title name** | No       | Set the confirm replace save as browser window title name | Toggle ON/OFF                         |
| **Set the `save as browser window` title name**                 | No       | Set the save as browser window title name                 | Toggle ON/OFF                         |
| **Direct Save Page to PDF (Firefox only)**                      | No       | Direct PDF save without print dialog                      | Toggle ON/OFF                         |
| **Field Value**                                                 | No       | Custom filename for PDF                                   | `document.pdf`, `report_{$name$}.pdf` |

## ⚙️ Configuration {#save-as-pdf-configuration}

### 🖨️ Print Options {#print-options}

#### 📌 Press Ctrl + P {#press-ctrl-p}

**Purpose:** Automatically trigger the print dialog without manual keyboard input.

**How it works:**

- If you want to save the page through `Ctrl + P`, turn on this option
- No need to manually press `Ctrl + P` buttons

:::info Note
If your file/PDF is downloaded after clicking any button, provide the selector query of that button in field selector query.
:::

---

#### 📌 Do not identify print window as per image {#do-not-identify-print-window-as-per-image}

**Purpose:** Skip automatic detection of print preview window.

**When to use:**

- When print window detection causes issues
- For faster execution without image matching
- When print preview appears differently

---

#### 📌 Set Image Path to Identify Print Window {#set-image-path-to-identify-print-window}

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

- If you are using the same image to other pc so maybe the image is not working properly.
- So you can take the image from the same pc where you are using the extension.
- If you resize the browser window so maybe the image is not working properly.
  :::

---

#### 📌 Set delay time after opening print window {#set-delay-time-after-opening-print-window}

**Purpose:** Add wait time between opening print window and saving the PDF.

**Configuration:**

- **Delay time** in milliseconds
- **Recommended values:** 3000-5000ms
- **Adjust based on** page complexity and loading time

---

### 🌐 Browser-Specific Options {#browser-specific-options}

#### 📌 Direct Save Page to PDF (Firefox Only) {#direct-save-page-to-pdf-firefox-only}

**Purpose:** Save PDF directly without print dialog (Firefox browser only).

**Benefits:**

- Faster PDF generation
- No print dialog interaction
- Streamlined automation process

---

### 📁 File Management Options {#file-management-options}

#### 📌 If file already exists then replace it {#if-file-already-exists-then-replace-it}

**Purpose:** Control behavior when a file with the same name already exists.

**Options:**

- **ON** - Replace existing file with new content
- **OFF** - Browser will ask to replace the file

---

#### 📌 Press Ctrl + S {#press-ctrl-s}

**Purpose:** Use Ctrl+S keyboard shortcut for saving files.

**How it works:**

- Triggers browser's save dialog
- Alternative to print-based PDF generation
- Works with most browsers

---

### 📝 File Naming {#file-naming}

#### 📌 Field Value {#field-value}

**Purpose:** Set custom filename for the generated PDF.

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

## 🎯 PDF Page Settings (Firefox) {#pdf-page-settings-firefox}

Customize PDF page settings for optimal document formatting.

### 📌 Customize PDF Page Settings {#customize-pdf-page-settings}

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

## 🌐 Browser Window Title {#browser-window-title}

### 📌 Set the save as browser window title name {#set-browser-window-title}

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

### 📌 Set the confirm replace save as browser window title name {#set-confirm-replace-save-as-browser-window-title}

**Purpose:** Customize browser window title during PDF save process.

**Use Cases:**

- **Multi-language support** - Different titles for different languages
- **Branding** - Custom application names
- **Identification** - Distinguish between different save operations

---

## ⚠️ Important Notes {#important-notes}

### Prerequisites {#prerequisites}

[Install Helper Program](/documentation/program#download-and-install)

- **Required** before using this field type
- **Download** from extension settings
- **Install** the helper program on your system
- **Verify** installation before configuring PDF fields

## 🔍 Troubleshooting {#troubleshooting}

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
