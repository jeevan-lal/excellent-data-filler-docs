---
prev:
  text: "Insert & Remove HTML"
  link: "/documentation/field-types/others/insert-remove-html"
next:
  text: "Toast Notification"
  link: "/documentation/field-types/others/toast-notification"
---

# Page Loading {#page-loading}

Synchronize automated workflows with dynamic single-page applications by waiting for spinners, progress bars, or loading overlays to appear and finish.

---

## Overview {#overview}

Modern web applications frequently rely on AJAX requests, asynchronous calculations, and dynamic loaders. Interacting with inputs while a page is still loading can lead to dropped inputs or race conditions. The **Page Loading** field type pauses automation until loading indicators mount, resolve, and disappear cleanly from the screen.

---

## Configuration Options {#configuration-options}

| Option | Type | Description | Required |
|---|---|---|---|
| **Selector Query** | Text Input | CSS selector or XPath of the loading spinner or overlay element. | Yes |
| **Loading Behavior** | Toggle Selection | Evaluation rule for the loading indicator lifecycle. | Yes |
| **Timeout (Milliseconds)** | Number Input | Maximum wait time before continuing or throwing a timeout. | Conditional |

> [!IMPORTANT]
> **Mutual Exclusivity**: Choose only one loading behavior rule per field to maintain deterministic lifecycle checks.

---

## Loading Behavior Rules {#behaviors}

### Option 1: First Check Loading is Visible, Then Hidden

- **Description**: Waits for the loading spinner to **appear** (visible on screen), and then waits for it to **disappear** (hidden or unmounted).
- **Ideal For**: Button clicks or dropdown selections that trigger an immediate AJAX spinner that vanishes upon completion.

### Option 2: Wait Until Loading is Hidden

- **Description**: Waits exclusively for an already visible or initial page loading overlay to disappear.
- **Ideal For**: Initial page load screens or full-screen splash masks that are present on load.

### Option 3: Wait Until Loading Appears

- **Description**: Waits for an indicator to become visible.
- **Ideal For**: Verification checkpoints ensuring that a background operation was acknowledged by the server.

---

## Practical Examples {#examples}

### Example 1: Form Submission Spinner Sync

```text
Selector Query: .spinner-border, #loading-overlay
Loading Behavior: First check loading is visible, then hidden
Timeout: 15000 (15 seconds)
```

### Example 2: Initial Dashboard Data Hydration

```text
Selector Query: div[data-testid="page-loading-skeleton"]
Loading Behavior: Wait until loading is hidden
Timeout: 20000 (20 seconds)
```

---

## Best Practices {#best-practices}

### Do's

- **Inspect Dynamic Visibility**: Check whether the web application toggles `display: none`, `visibility: hidden`, or unmounts the node completely from the DOM.
- **Set Generous Timeouts**: Set realistic timeouts (e.g., 10,000–30,000 ms) for slow backend endpoints or heavy data queries.
- **Combine with Element Wait**: If the spinner itself mounts with a delay, add a small delay before running the field.

### Don'ts

- **Do Not Target Static Containers**: Ensure the selector points strictly to the indicator that changes state, not its parent page container.
- **Do Not Leave Timeout Unset on Fragile Networks**: Always define a timeout to prevent workflows from hanging indefinitely if a server request drops.

---

## Troubleshooting {#troubleshooting}

| Issue | Likely Cause | Solution |
|---|---|---|
| **Timeout exceeded waiting for visibility** | Spinner resolved faster than the field executed | Switch behavior to **Wait until loading is hidden**. |
| **Never detects hidden state** | Loader opacity set to 0 without changing `display` or removing node | Inspect element CSS properties or target a more specific child indicator. |

---

## Related Documentation {#related}

- <img src="/svg/settings.svg" class="doc-icon" /> [Field Settings Timing Delays](/documentation/form-fields/field-settings#timing-position-settings)
- <img src="/svg/form.svg" class="doc-icon" /> [Form Fields Overview](/documentation/form-fields/field)
- <img src="/svg/beaker.svg" class="doc-icon" /> [Execution Logs](/documentation/logs)
