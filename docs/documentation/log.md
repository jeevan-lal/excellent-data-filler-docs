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
3. Look for messages 

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

---

## 📋 Logs Monitor {#logs-monitor}

Access a comprehensive logging interface directly from the extension site page to monitor and track all extension activities in real-time.

**Location:** Extension Site Page → Logs

**Description:** The Logs Monitor provides a centralized interface to view, filter, search, and export extension logs with detailed information about each operation.

### Features

**Log Table Columns:**

| Column | Description |
|--------|-------------|
| **Time** | Timestamp of when the log was created |
| **Type** | Log level (Success, Info, Warning, Error) |
| **URL** | The page URL where the log was generated |
| **Message** | Detailed log message describing the operation |
| **Variable** | Associated variables or data |
| **Actions** | Available actions for the log entry |

**Available Actions:**

| Action | Icon | Description |
|--------|------|-------------|
| **Start** | ▶ Start | Start logging/monitoring |
| **Clear** | 🗑 Clear | Clear all current logs |
| **Export** | 📥 Export | Export logs to file |

**Filter Options:**

- **Success** - Show only successful operations
- **Info** - Show informational messages
- **Warning** - Show warning messages
- **Error** - Show error messages

**Search:** Use the search box to filter logs by message content, URL, or variables.

### How to Access Logs Monitor

1. Open the extension site page
2. Navigate to the **Logs** tab
3. Click **Start** to begin monitoring
4. View real-time logs as they appear
5. Use filters to focus on specific log types
6. Search for specific messages or URLs
7. Export logs for analysis or sharing

### Status Bar Logging

**Enable in Settings:** [Settings → Form Filler → Show Extension Logs in Status Bar](/documentation/settings#show-extension-logs-in-status-bar)

When enabled, the latest extension logs will be displayed in the status bar at the bottom of the page (if status bar is active).

**Benefits:**
- View logs without opening the Logs Monitor
- See real-time updates during automation
- Quick access to latest log messages
- Non-intrusive monitoring

**Requirements:**
- Status bar must be enabled
- "Show Extension Logs in Status Bar" setting must be turned on

:::tip Real-time Monitoring
The Logs Monitor updates in real-time as operations occur. Keep it open during automation to track progress and identify issues immediately.
:::

:::warning Note
Log messages in the Logs Monitor are session-based and will be cleared when you close the extension site page. Export important logs before closing.
:::

---
### Related Documentation

- [Settings - Form Filler](/documentation/settings#form-filler)
- [Settings - Show Extension Logs in Status Bar](/documentation/settings#show-extension-logs-in-status-bar)
- [Testing Site](/documentation/testing-site)