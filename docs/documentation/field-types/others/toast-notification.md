---
prev:
  text: "Page Loading"
  link: "/documentation/field-types/others/page-loading"
next:
  text: "Fetch Header Value Data"
  link: "/documentation/field-types/scraper-data/fetch-header-value-data"
---

# Toast Notification {#toast-notification}

Display customizable floating toast messages, banners, and milestone alerts on the web page during automated execution.

---

## Overview {#overview}

The **Toast Notification** field type renders non-intrusive on-screen visual banners directly inside the active browser tab. It helps operators and QA testers track real-time automation milestones, observe dynamic variables, and view debugging feedback as forms are populated.

---

## Configuration Options {#configuration-options}

| Option | Type | Description | Required |
|---|---|---|---|
| **Toast Message Content** | Text Input | Message to display (set via Default Value or Excel column). | Yes |
| **Notification Gravity** | Dropdown | Vertical screen positioning (`top`, `bottom`). | Yes |
| **Notification Position** | Dropdown | Horizontal alignment (`left`, `center`, `right`). | Yes |
| **Notification Types** | Dropdown | Semantic alert theme (`info`, `success`, `warning`, `error`). | Yes |
| **Duration** | Number Input | Display duration in milliseconds (e.g., `3000` for 3 seconds). | Yes |

---

## Positioning & Styling Options {#positioning}

### Notification Gravity (Vertical)
- **`top`**: Displays toast anchored at the top of the browser viewport.
- **`bottom`**: Displays toast anchored along the bottom screen edge.

### Notification Position (Horizontal)
- **`left`**: Aligns toast to the left.
- **`center`**: Centers toast horizontally across the screen.
- **`right`**: Aligns toast to the right edge (standard notification placement).

### Notification Semantic Types
- **`info`**: Clean informational blue banner.
- **`success`**: Vibrant green confirmation banner.
- **`warning`**: Yellow/amber caution banner.
- **`error`**: Bold red alert banner.

---

## Message Templating {#message-content}

You can define toast message content statically or dynamically:

### Dynamic Spreadsheet Row Variables

Inject values from the active `.xlsx` record using `{$ColumnName$}`:
```text
Processing customer: {$CustomerName$} (Account: {$AccountID$})
```

### Predefined System Variables

Incorporate time stamps, random tokens, or row indexes:
```text
Row #{$EDF_ROW_INDEX$} completed successfully at {$DATETIME_NOW$}
```

---

## Practical Examples {#examples}

### Example 1: Submission Confirmation Toast

```text
Message: Form successfully submitted for {$FullName$}!
Notification Gravity: top
Notification Position: right
Notification Types: success
Duration: 3500
```

### Example 2: Milestone Debug Warning

```text
Message: Captcha encountered. Solving via 2Captcha...
Notification Gravity: bottom
Notification Position: center
Notification Types: warning
Duration: 5000
```

---

## Best Practices {#best-practices}

- **Keep Messages Concise**: Short single-line alerts ensure optimal readability without blocking page interactions.
- **Set Appropriate Durations**: 3000–4000 milliseconds is ideal for operators to read notices without visual clutter.
- **Choose Non-Blocking Corners**: Use `top-right` or `bottom-right` to avoid obscuring central form buttons.

---

## Related Documentation {#related}

- <img src="/svg/form.svg" class="doc-icon" /> [Form Fields Overview](/documentation/form-fields/field)
- <img src="/svg/code.svg" class="doc-icon" /> [Variables Reference](/documentation/variable)
- <img src="/svg/beaker.svg" class="doc-icon" /> [Execution Logs](/documentation/logs)
