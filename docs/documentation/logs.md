---
prev:
  text: "Settings"
  link: "/documentation/settings"
next:
  text: "Context Menu"
  link: "/documentation/extension/context-menu"
---

# Logs {#logs}

Monitor and debug extension activities through a comprehensive logging system that tracks life-cycle events, DOM element matching, and automation operations in real time.

<style>
.logs-methods-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.85rem;
  margin: 1.15rem 0 1.85rem 0;
}

@media (max-width: 960px) {
  .logs-methods-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 640px) {
  .logs-methods-grid {
    grid-template-columns: 1fr;
    gap: 0.65rem;
  }
}

.log-method-card {
  display: flex;
  flex-direction: column;
  padding: 0.85rem 1rem;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  text-decoration: none !important;
  color: inherit !important;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-sizing: border-box;
  min-width: 0;
}

.log-method-card:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 20px -8px rgba(79, 70, 229, 0.2), var(--vp-shadow-1);
  background-color: var(--vp-c-bg-elv);
}

.dark .log-method-card:hover {
  box-shadow: 0 8px 20px -8px rgba(99, 102, 241, 0.3), var(--vp-shadow-1);
}

.log-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.55rem;
}

.log-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.log-method-card:hover .log-icon-box {
  transform: scale(1.08);
}

.log-icon-box.console {
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(59, 130, 246, 0.25);
}

.log-icon-box.viewer {
  background: rgba(147, 51, 234, 0.12);
  border: 1px solid rgba(147, 51, 234, 0.25);
}

.log-icon-box.statusbar {
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.log-badge {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.12rem 0.45rem;
  border-radius: 9999px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-3);
  flex-shrink: 0;
}

.log-badge.featured {
  background: var(--vp-c-brand-soft);
  border-color: rgba(79, 70, 229, 0.25);
  color: var(--vp-c-brand-1);
}

.log-card-title {
  font-family: var(--vp-font-family-heading);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1.35;
  margin-bottom: 0.35rem;
}

.log-card-desc {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.75rem 0;
  line-height: 1.45;
  flex: 1;
}

.log-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.45rem;
  border-top: 1px solid var(--vp-c-divider);
  margin-top: auto;
  gap: 0.4rem;
}

.log-tag {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--vp-c-text-3);
  white-space: nowrap;
}

.log-card-action {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  transition: transform 0.2s ease;
  white-space: nowrap;
}

.log-method-card:hover .log-card-action {
  transform: translateX(2px);
}

.log-level-badge {
  display: inline-block;
  font-family: var(--vp-font-family-mono);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  letter-spacing: 0.03em;
}
.log-level-badge.info { background: rgba(59, 130, 246, 0.12); color: #2563eb; border: 1px solid rgba(59, 130, 246, 0.25); }
.dark .log-level-badge.info { color: #60a5fa; }
.log-level-badge.success { background: rgba(16, 185, 129, 0.12); color: #059669; border: 1px solid rgba(16, 185, 129, 0.25); }
.dark .log-level-badge.success { color: #34d399; }
.log-level-badge.warn { background: rgba(245, 158, 11, 0.12); color: #d97706; border: 1px solid rgba(245, 158, 11, 0.25); }
.dark .log-level-badge.warn { color: #fbbf24; }
.log-level-badge.error { background: rgba(239, 68, 68, 0.12); color: #dc2626; border: 1px solid rgba(239, 68, 68, 0.25); }
.dark .log-level-badge.error { color: #f87171; }
.log-level-badge.debug { background: rgba(100, 116, 139, 0.12); color: #475569; border: 1px solid rgba(100, 116, 139, 0.25); }
.dark .log-level-badge.debug { color: #94a3b8; }
</style>

<div class="logs-methods-grid">

  <a href="#browser-console-window" class="log-method-card">
    <div class="log-card-top">
      <div class="log-icon-box console">
        <img src="/svg/code.svg" width="16" height="16" alt="Browser Console" />
      </div>
      <span class="log-badge">Method 01</span>
    </div>
    <div class="log-card-title">Browser Console</div>
    <div class="log-card-desc">Real-time raw log stream in Developer Tools console for debugging.</div>
    <div class="log-card-footer">
      <span class="log-tag">Shortcut: F12</span>
      <span class="log-card-action">View &rarr;</span>
    </div>
  </a>

  <a href="#extension-logs-viewer" class="log-method-card">
    <div class="log-card-top">
      <div class="log-icon-box viewer">
        <img src="/svg/card.svg" width="16" height="16" alt="Extension Logs Viewer" />
      </div>
      <span class="log-badge featured">Method 02</span>
    </div>
    <div class="log-card-title">Extension Logs Viewer</div>
    <div class="log-card-desc">On-page drawer & sidebar with instant search, category filters, and zoom.</div>
    <div class="log-card-footer">
      <span class="log-tag">On-Page Drawer</span>
      <span class="log-card-action">View &rarr;</span>
    </div>
  </a>

  <a href="#automation-status-bar" class="log-method-card">
    <div class="log-card-top">
      <div class="log-icon-box statusbar">
        <img src="/svg/system.svg" width="16" height="16" alt="Automation Status Bar" />
      </div>
      <span class="log-badge">Method 03</span>
    </div>
    <div class="log-card-title">Automation Status Bar</div>
    <div class="log-card-desc">Slim 38px toolbar showing live inline updates with attached flyout popover.</div>
    <div class="log-card-footer">
      <span class="log-tag">Injected Bar</span>
      <span class="log-card-action">View &rarr;</span>
    </div>
  </a>

</div>

---

## 1. Browser Console Window {#browser-console-window}

Access real-time log messages directly from your browser's Developer Tools console for immediate debugging and monitoring during form filling.

<img src="/image/console-log-01.png" alt="Browser Console Log Messages" style="max-width: 100%; height: auto; border-radius: 8px;">

### How to Open Browser Console {#how-to-open-browser-console}

| Platform | Keyboard Shortcut | Alternative Method |
| --- | --- | --- |
| **Windows / Linux** | <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>J</kbd> or <kbd>F12</kbd> | Right-click → Inspect → **Console** tab |
| **macOS** | <kbd>Option</kbd> + <kbd>⌘</kbd> + <kbd>J</kbd> or <kbd>F12</kbd> | Right-click → Inspect → **Console** tab |

### Log Message Levels {#log-message-levels}

| Level | Description | Example |
| --- | --- | --- |
| <span class="log-level-badge info">INFO</span> | Normal operation notices and initialization status | `Extension initialized successfully` |
| <span class="log-level-badge success">SUCCESS</span> | Successful field fills, saves, and completed actions | `Data filled successfully: #username` |
| <span class="log-level-badge warn">WARN</span> | Non-critical warnings, fallback selectors, or skipped conditions | `Field selector not found, using fallback` |
| <span class="log-level-badge error">ERROR</span> | Failed element matching, network errors, or timeout issues | `Failed to fill field: input[name="email"]` |
| <span class="log-level-badge debug">DEBUG</span> | Detailed element detection and property extraction traces | `Processing form field: #username` |

::: tip Pro Tip
Keep the browser console open while configuring new forms to immediately inspect matching selectors, element values, and execution steps.
:::

---

## 2. Extension Logs Viewer {#extension-logs-viewer}

The **Extension Logs Viewer** is a dedicated slide-over panel and docked sidebar that opens directly over the active web page without needing browser developer tools.

- **Full Documentation**: <img src="/svg/settings.svg" class="doc-icon" width="16" height="16" alt="Settings" /> [Settings → Visual Feedback → Show Extension Logs Viewer](/documentation/settings#show-extension-logs-viewer)

<img src="/image/logs-viewer.png" alt="Extension Logs Viewer Interface" style="max-width: 100%; width: 480px; height: auto; border-radius: 8px; margin: 16px 0;">

### Key Capabilities {#logs-viewer-capabilities}

- **Dock & Floating Modes**: Toggle between a floating slide-over drawer and a docked side panel.
- **Search Filtering**: Filter logs instantly by keyword, selector name, URL, or message text.
- **Category Tabs**: Filter by **All**, **Group** (segments & loops), **Success**, **Warn**, or **Error**.
- **Stream Controls**: Pause live streaming to freeze and inspect events while automation continues.
- **Export Logs**: Download current session logs for debugging and offline review.
- **Visual Customization**: Width presets (420px, 520px, 680px, 880px), zoom scale adjustments, and Light/Dark themes.

---

## 3. Automation Status Bar {#automation-status-bar}

When enabled, the extension injects a sleek status bar at the top or bottom of the active page that shows real-time progress, entry numbers, and live log updates.

- **Full Documentation**: <img src="/svg/settings.svg" class="doc-icon" width="16" height="16" alt="Settings" /> [Settings → Automation Status Bar](/documentation/settings#automation-status-bar) & [Show Extension Logs in Status Bar](/documentation/settings#show-extension-logs-in-status-bar)

<img src="/image/status-bar-01.png" alt="Automation Status Bar" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0;">

### Status Bar Logging Features {#status-bar-logging-features}

- **Live Inline Updates**: Latest operation and status messages stream right in the bar without covering content.
- **Attached Logs Popover**: Clicking the logs section on the status bar opens a compact flyout showing recent log entries.
- **Lightweight & Non-Intrusive**: Monitor progress at a glance without opening developer panels.
- **Position & Docking**: Place the bar at the top or bottom, or minimize it into a floating dock corner pill.

::: info Dismissing Status Bar Programmatically
If you need to close the status bar during automated tasks (e.g., before taking full-page screenshots), call the [`closeStatusBar`](/documentation/functions#closestatusbar) predefined function in your workflow.
:::

---

## Logging from Custom JavaScript {#custom-javascript-logging}

You can also send your own structured log messages from [JavaScript Code](/documentation/field-types/javascript-code) fields using the `$fns.log` utility. These messages appear automatically in both the **Browser Console** and the **Extension Logs Viewer**:

```js
// Log a success message
await $fns.log.success("Data filled successfully", { row: 1 });

// Log an error message
await $fns.log.error("Submit button not found");

// Log a warning message
await $fns.log.warning("Field skipped due to condition", null);
```

For more details on custom scripting, see <img src="/svg/code.svg" class="doc-icon" width="16" height="16" alt="Functions" /> [JavaScript Code Field Type](/documentation/field-types/javascript-code#logging-functions).

---

## Related Documentation {#related-documentation}

- <img src="/svg/settings.svg" class="doc-icon" width="16" height="16" alt="Settings" /> [Extension Settings](/documentation/settings) — Configure visual feedback, status bar, and logging options.
- <img src="/svg/code.svg" class="doc-icon" width="16" height="16" alt="Functions" /> [Predefined Functions](/documentation/functions) — Built-in automation helper functions.
- <img src="/svg/form.svg" class="doc-icon" width="16" height="16" alt="Form Fields" /> [Form Fields Overview](/documentation/form-fields/field) — Field configuration and options.