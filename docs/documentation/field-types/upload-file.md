# 📁 Upload File {#upload-file}

You can use this field when you want to upload files through web forms. It works with various form platforms including _Google Forms_, _Microsoft Forms_, and other web-based file upload interfaces.

## 🔧 Install Helper Program {#install-helper-program}

The [**Helper Program**](/documentation/program#download-and-install) is required to automatically select and upload files from your computer. Download and install the appropriate version for your operating system:

:::warning Important
The Helper Program must be installed and running for file upload functionality to work properly.
:::

**How to check Helper Program status?**

<img src="/image/upload-field-01.png" width="400" height="400" alt="Upload File Field Options">

## ⚙️ Field Options {#field-options}

The Upload File field provides comprehensive options for handling file uploads with various configurations:

| Option                                                               | Description                                                             | Required                    |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------------------------- |
| **Set File/Folder Base Path**                                        | Enable to specify a base directory for file uploads                     | No                          |
| **Base Path**                                                        | Enter the folder path where your files are located (e.g., `D:\folder\`) | When enabled                |
| **Multiple File Upload**                                             | Enable to upload multiple files at once                                 | No                          |
| **Separator for Multiple File Upload**                               | Specify separator for multiple file names (e.g., `\r\n`, `,`, `;`)      | When multiple files enabled |
| **Upload all files in a folder**                                     | Enable to upload all files from the specified folder                    | No                          |
| **First check that the file exists in the PC, then select the file** | Verify file existence before attempting upload                          | No                          |
| **Set the uploading browser window title name**                      | Customize the browser window title during upload                        | No                          |
| **Browser Window Title**                                             | Enter custom title for the upload window (e.g., "Open")                 | When enabled                |
| **File Name/Path**                                                   | Enter the file name/path in the `field value` or `default value`        | Yes                         |

### 📋 Configuration Details {#configuration-details}

### 📌 File Name/Path {#file-name-path}

- **Purpose**: Enter the file name/path in the `field value` or `default value`
- **Format**: Use full path with backslashes (Windows) or forward slashes (Unix/Linux)
- **Example**:

:::info Note
You can use the `{$predefine_variable$}` variable in the `File Name/Path` option.

---

**If using file name :**

You must set the file root path in the `Set File/Folder Base Path` option and set the file name in the `File Name/Path` option.

for example:

```
File Path (Set in Base Path option) : D:\Documents\Uploads\
File Name (Set in File Name/Path option) : file.txt
```

---

**If using file path :**

If you are using file path then you must set the file path in the `File Name/Path` option. Don't set the file root path in the `Set File/Folder Base Path` option.

for example:

```
File Path (Set in File Name/Path option) : D:\Documents\Uploads\file.txt
```

:::

#### 📂 Set File/Folder Base Path {#set-file-folder-base-path}

- **Purpose**: Defines the default directory where files are located
- **Format**: Use full path with backslashes (Windows) or forward slashes (Unix/Linux)
- **Example**: `D:\Documents\Uploads\` or `/home/user/uploads/`

#### 📎 Multiple File Upload {#multiple-file-upload}

- **Purpose**: Allows uploading multiple files in a single operation
- **Separator Options**:

  - `\r\n` - Line break (newline)
  - `,` - Comma separated
  - `;` - Semicolon separated
  - Custom separator as needed

:::info Note

Extension allow you to use file path with `starts` and `ends` with quotes, for example

**Single File Path**

```
"C:\Users\cth\OneDrive\Pictures\demo\Screenshot 2025-06-03 172854.png"
```

**Multiple Files Path**

```
"C:\Users\cth\OneDrive\Pictures\demo\Screenshot 2025-06-03 172854.png"
"C:\Users\cth\OneDrive\Pictures\demo\Screenshot 2025-05-30 163020.png"
"C:\Users\cth\OneDrive\Pictures\demo\Screenshot 2025-06-03 122313.png"
```

:::

#### ✅ File Existence Check {#file-existence-check}

- **Purpose**: Validates that files exist on the local system before attempting upload
- **Benefit**: Prevents upload failures due to missing files
- **Recommended**: Keep enabled for reliable uploads

#### 🏷️ Browser Window Title Customization {#browser-window-title-customization}

- **Purpose**: Sets a custom title for the file selection dialog
- **Use Case**: Helps identify the correct upload window in multi-window scenarios
- **Default**: "Open" (standard file dialog title)

## 💡 Usage Examples {#usage-examples}

### 📄 Single File Upload {#single-file-upload}

1. Enable "Set File/Folder Base Path"
2. Enter your file directory path
3. Enable "First check that the file exists in the PC"
4. Set your desired browser window title

### 📎 Multiple File Upload {#multiple-file-upload-example}

1. Enable "Multiple File Upload"
2. Set appropriate separator (e.g., `,` for comma-separated)
3. Configure base path if needed
4. Enable file existence check

### 📁 Upload All Files in Folder {#upload-all-files-in-folder}

1. Enable "Upload all files in a folder"
2. Set the target folder path
3. Configure other options as needed

## 🔧 Troubleshooting {#troubleshooting}

### ⚠️ Common Issues and Solutions {#common-issues-and-solutions}

#### 🔧 Helper Program Not Working {#helper-program-not-working}

**Problem**: File upload fails or helper program not detected
**Solutions**:

- Ensure the Helper Program is installed and running
- Check if the program is blocked by antivirus software
- Restart the browser and extension
- Reinstall the Helper Program if necessary

#### 📂 Files Not Found {#files-not-found}

**Problem**: "File not found" errors during upload
**Solutions**:

- Verify the base path is correct and accessible
- Check file permissions on the target directory
- Ensure file names don't contain special characters
- Use absolute paths instead of relative paths

#### 📎 Multiple File Upload Issues {#multiple-file-upload-issues}

**Problem**: Multiple files not uploading correctly
**Solutions**:

- Verify the separator matches your file list format
- Check that all file names are valid
- Ensure all files exist in the specified directory
- Test with a small number of files first

#### 🏷️ Browser Window Title Issues {#browser-window-title-issues}

**Problem**: Wrong file dialog window selected
**Solutions**:

- Use a unique, descriptive window title
- Close other file dialogs before running the automation
- Check that the title matches exactly (case-sensitive)

### 🔍 Debug Steps {#debug-steps}

1. **Check Helper Program Status**: Verify the program is running in system tray
2. **Test File Access**: Manually verify files can be accessed from the specified path
3. **Check Browser Console**: Look for JavaScript errors in browser developer tools
4. **Test with Simple Files**: Start with basic file types (txt, jpg) before complex formats

## 📚 Examples {#examples}

- [Example-15](https://formfiller.ctechhindi.in/example/example-15.php) - Single file upload example
- [Example-25](https://formfiller.ctechhindi.in/example/example-25.php) - Multiple file upload demonstration
