# 🔧 Program Helper - Field Types {#program-helper-field-types}

Program Helper field types allow you to interact with external applications, system functions, and perform advanced automation tasks beyond web browser capabilities. These field types require a helper program to be installed on your operating system.

:::warning Important
To use these fields, you will first have to install the helper program in the OS, only after that you can do this field work.
:::

## 📥 Install Helper Program {#install-helper-program}

The [**Helper Program**](/documentation/program#download-and-install) is required to enable system-level automation and external application interactions. Download and install the appropriate version for your operating system:

## 🎯 Field Types {#field-types}

### 🖥️ X-Focus Application Window {#x-focus-application-window}

Focus on a specific application window to bring it to the foreground.

| Option          | Description                                 | Example              |
| --------------- | ------------------------------------------- | -------------------- |
| **Field Value** | Application executable name or window title | `ahk_exe chrome.exe` |

**Usage Examples:**

- `ahk_exe chrome.exe` - Focus Chrome browser
- `ahk_exe notepad.exe` - Focus Notepad
- `Untitled - Notepad` - Focus window by title

### ⌨️ X-Click (Space Key) {#x-click-space-key}

Simulate a space key press on the currently focused element.

**Usage:**

- No additional configuration required
- Automatically sends a space key press to the focused element
- Useful for activating buttons or toggling checkboxes

### 📝 X-Paste Text {#x-paste-text}

Paste text content into the currently focused element.

| Option                                    | Description                           |
| ----------------------------------------- | ------------------------------------- |
| **Field Value**                           | Text content to paste                 |
| **Clear field value then fill new value** | Clear existing content before pasting |

**Usage Examples:**

- **Field Value**: `Hello World` - Pastes "Hello World"
- **Field Value**: `{$variable$}` - Pastes dynamic variable content

### 📌 X-WinAlwaysOnTop (Activate) {#x-winalwaysontop-activate}

Set the current window to always stay on top of other windows.

**Usage:**

- No additional configuration required
- Makes the current window stay above all other windows
- Useful for keeping important dialogs visible

### 📌 X-WinAlwaysOnTop (Deactivate) {#x-winalwaysontop-deactivate}

Remove the always-on-top property from the current window.

**Usage:**

- No additional configuration required
- Returns the window to normal layering behavior
- Use after completing tasks that required always-on-top

### ⏳ X-KeyWait {#x-keywait}

Wait for a specific key to be released before proceeding.

| Option          | Description     | Example                   |
| --------------- | --------------- | ------------------------- |
| **Field Value** | Key to wait for | `a`, `{Enter}`, `{Space}` |

**Usage Examples:**

- **Field Value**: `a` - Waits for 'a' key to be released
- **Field Value**: `{Enter}` - Waits for Enter key to be released
- **Field Value**: `{Space}` - Waits for Space key to be released

:::info Multiple Keystrokes
If you need to send multiple keystrokes, like `"alt+a"`, you will need to insert two `X-KeyWait` field types in the extension form: one for `"alt"` and one for `"a"`.
:::

### ⌨️ X-Send {#x-send}

Send keystrokes, special keys, or text to the currently focused element.

| Option                                    | Description                               | Example                     |
| ----------------------------------------- | ----------------------------------------- | --------------------------- |
| **Field Value**                           | Keystrokes, special keys, or text to send | `{F1}`, `^s`, `Hello World` |
| **Clear field value then fill new value** | Clear existing content before sending     |

**Special Key Codes:**

- `{F1}` - Function key F1
- `^s` - Ctrl+S (save)
- `^c` - Ctrl+C (copy)
- `^v` - Ctrl+V (paste)
- `{Enter}` - Enter key
- `{Tab}` - Tab key
- `{Esc}` - Escape key

**Usage Examples:**

- **Field Value**: `{F1}` - Sends F1 key
- **Field Value**: `^s` - Sends Ctrl+S (save)
- **Field Value**: `Hello World` - Types "Hello World"

### 🖱️ X-MouseClick {#x-mouseclick}

Simulate mouse clicks at specific coordinates or on the current cursor position.

| Option          | Description      | Example    |
| --------------- | ---------------- | ---------- |
| **Field Value** | Click parameters | `left,,,1` |

**Click Parameters Format:**

- `Button, X, Y, ClickCount`
- **Button**: `left`, `right`, `middle`
- **X, Y**: Coordinates (leave empty for current position)
- **ClickCount**: Number of clicks (1 = single click, 2 = double click)

**Usage Examples:**

- `left,,,1` - Left click once at current position
- `right,100,200,1` - Right click at coordinates (100, 200)
- `left,,,2` - Double left click at current position

### 🎯 X-ControlClick {#x-controlclick}

Click on specific control elements within applications.

| Option          | Description              | Example                        |
| --------------- | ------------------------ | ------------------------------ |
| **Field Value** | Control click parameters | `x100 y200,Untitled - Notepad` |

**Control Click Parameters Format:**

- `Coordinates, WindowTitle`
- **Coordinates**: `x100 y200` (pixel coordinates)
- **WindowTitle**: Target window title

**Usage Examples:**

- `x100 y200,Untitled - Notepad` - Click at (100, 200) in Notepad window
- `x50 y50,Calculator` - Click at (50, 50) in Calculator window

### 🔍 X-ImageSearch {#x-imagesearch}

Search for images on the screen and perform actions based on their location.

| Option          | Description                          |
| --------------- | ------------------------------------ |
| **Field Value** | Image search parameters              |
| **Image Path**  | Path to the image file to search for |

**Usage:**

- Upload or specify an image file to search for
- The system will locate the image on screen
- Perform actions based on the found coordinates

### 📁 X-FileGetSize {#x-filegetsize}

Get the file size in bytes for local files or remote URLs.

| Option          | Description      | Example                          |
| --------------- | ---------------- | -------------------------------- |
| **Field Value** | File path or URL | `C:\Users\P1\Pictures\photo.jpg` |

**Supported Paths:**

- **Local files**: `C:\Users\P1\Pictures\photo.jpg`
- **Remote URLs**: `https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg`

**Usage Examples:**

```
# Local File
C:\Users\P1\Pictures\photo.jpg

# Remote URL
https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg
```

### 📄 X-FileExtension {#x-fileextension}

Get the file extension from a file path or URL.

| Option          | Description      | Example                  |
| --------------- | ---------------- | ------------------------ |
| **Field Value** | File path or URL | `image.jpg`, `script.js` |

**Supported Extensions:**

- **Images**: `png`, `jpg`, `jpeg`, `gif`, `bmp`
- **Documents**: `pdf`, `doc`, `docx`, `txt`
- **Code**: `js`, `html`, `css`, `py`, `java`
- **Archives**: `zip`, `rar`, `7z`

**Usage Examples:**

- **Input**: `photo.jpg` → **Output**: `jpg`
- **Input**: `script.js` → **Output**: `js`
- **Input**: `document.pdf` → **Output**: `pdf`