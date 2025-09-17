---
prev:
  text: "Icon"
  link: "/documentation/#extension"
next:
  text: "Structure"
  link: "/documentation/structure"
---

# Log {#log}

Monitor and debug extension activities through comprehensive logging system that tracks all life-cycle events and operations.

The Log system provides detailed insights into what's happening behind the scenes during form filling, data processing, and automation operations.

## 🔍 From Browser Console {#from-browser-console}

Access real-time log messages directly from your browser's developer console for immediate debugging and monitoring.

<img src="/image/console-log-01.png" alt="Browser Console Log Messages">

### 🛠️ How to Open Browser Console {#how-to-open-browser-console}

| Platform          | Keyboard Shortcut             | Alternative Method     |
| ----------------- | ----------------------------- | ---------------------- |
| **Windows/Linux** | `Shift + Ctrl + J`            | Press `F12`            |
| **macOS**         | `Option + ⌘ + J`              | Press `F12`            |
| **All Platforms** | Right-click → Inspect Element | Menu → Developer Tools |

**Steps to Access Logs:**

1. Open browser console using any method above
2. Navigate to the **Console** tab
3. Look for messages prefixed with `[EDF]` or `[Excellent Data Filler]`
4. Filter logs by typing `EDF` in the console filter

### 📊 Log Message Types {#log-message-types}

| Log Level | Description                                    | Example                                           |
| --------- | ---------------------------------------------- | ------------------------------------------------- |
| **INFO**  | General information about extension operations | `[EDF] Extension initialized successfully`        |
| **WARN**  | Warning messages for potential issues          | `[EDF] Field selector not found, using fallback`  |
| **ERROR** | Error messages for failed operations           | `[EDF] Failed to fill field: input[name="email"]` |
| **DEBUG** | Detailed debugging information                 | `[EDF] Processing form field: #username`          |

:::info Pro Tip
Keep the browser console open while using the extension to monitor real-time operations and quickly identify any issues during form filling.
:::

:::warning Note
Log messages are only visible in the browser console and are not stored permanently. For persistent logging, consider using the extension's built-in logging features.
:::
