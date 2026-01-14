# Toast Notification

Display toast notifications on the page during automation.

## Overview

The Toast Notification field type allows you to display customizable toast messages on the page. You can configure the position, type, duration, and content of the notification to provide visual feedback during automation workflows.

## Configuration Options

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| **Toast Message Content** | Text Input (via Default Value or Excel) | The message to display in the toast | Yes |
| **Notification Gravity** | Dropdown | Vertical position of the toast | Yes |
| **Notification Position** | Dropdown | Horizontal position of the toast | Yes |
| **Notification Types** | Dropdown | Visual style/type of the notification | Yes |
| **Duration** | Number Input | How long to display the toast (milliseconds) | Yes |

---

## Toast Message Content

**Set in:** Default Value field option or Excel column

**Description:** The text message to display in the toast notification.

### Using Default Value

Set the message directly in the **Default Value** field option.

**Example:**

```
Form submitted successfully!
```

### Using Excel Column

Reference message from your Excel sheet using the field column name.

**Syntax:** `{$columnName$}`

**Example:**

```javascript
// Excel Column: "notificationMessage"
// Excel Data: "Data saved successfully"

// In Default Value field
{$notificationMessage$}

// Result: Displays "Data saved successfully"
```

### Using Variables

You can use variables to create dynamic messages.

**Example:**

```javascript
// In Default Value field
User {$userName$} has been created successfully!

// If userName = "John Doe"
// Displays: "User John Doe has been created successfully!"
```

---

## Notification Gravity

**Field:** Dropdown

**Description:** Set the vertical position of the toast notification on the screen.

**Available Options:**

| Gravity | Description | Position |
|---------|-------------|----------|
| **Top** | Display toast at the top of the screen | Top edge |
| **Bottom** | Display toast at the bottom of the screen | Bottom edge |

**Example:**

```javascript
// Top notification
Notification Gravity: Top
Result: Toast appears at top of screen

// Bottom notification
Notification Gravity: Bottom
Result: Toast appears at bottom of screen
```

**Visual:**

```
┌─────────────────────────┐
│   Top Notification      │  ← Top Gravity
├─────────────────────────┤
│                         │
│      Page Content       │
│                         │
├─────────────────────────┤
│  Bottom Notification    │  ← Bottom Gravity
└─────────────────────────┘
```

---

## Notification Position

**Field:** Dropdown

**Description:** Set the horizontal position of the toast notification on the screen.

**Available Options:**

| Position | Description | Alignment |
|----------|-------------|-----------|
| **Left** | Align toast to the left side | Left edge |
| **Right** | Align toast to the right side | Right edge |
| **Center** | Center toast horizontally | Middle |

**Example:**

```javascript
// Left position
Notification Position: Left
Result: Toast appears on left side

// Center position
Notification Position: Center
Result: Toast appears in center

// Right position
Notification Position: Right
Result: Toast appears on right side
```

**Visual:**

```
┌─────────────────────────────────┐
│ [Left]    [Center]    [Right]   │
└─────────────────────────────────┘
```

---

## Notification Types

**Field:** Dropdown

**Description:** Set the visual style and type of the notification.

**Available Options:**

| Type | Description | Use Case | Color Scheme |
|------|-------------|----------|--------------|
| **Info** | Informational message | General information, tips | Blue |
| **Error** | Error message | Failures, validation errors | Red |
| **Success** | Success message | Successful operations | Green |
| **Warning** | Warning message | Cautions, important notices | Yellow/Orange |

**Example:**

```javascript
// Info notification
Notification Types: Info
Message: "Processing your request..."
Result: Blue informational toast

// Success notification
Notification Types: Success
Message: "Form submitted successfully!"
Result: Green success toast

// Error notification
Notification Types: Error
Message: "Failed to save data"
Result: Red error toast

// Warning notification
Notification Types: Warning
Message: "Please review your input"
Result: Yellow/Orange warning toast
```

---

## Duration

**Field:** Number Input

**Description:** Duration for which the toast should be displayed, in milliseconds.

**Special Value:** `-1` for permanent notification (stays until manually dismissed)

**Recommended Values:**

| Duration | Milliseconds | Use Case |
|----------|--------------|----------|
| **Short** | 2000 | Quick messages |
| **Normal** | 3000 | Standard notifications |
| **Long** | 5000 | Important messages |
| **Very Long** | 10000 | Critical information |
| **Permanent** | -1 | Requires user action |

**Example:**

```javascript
// Short duration
Duration: 2000
Result: Toast displays for 2 seconds

// Normal duration
Duration: 3000
Result: Toast displays for 3 seconds

// Permanent notification
Duration: -1
Result: Toast stays until dismissed
```

:::info Permanent Notification
Set duration to **-1** to display a permanent notification that stays on screen until the user manually dismisses it.
:::

---

## Position Combinations

You can combine Gravity and Position to place the toast anywhere on the screen:

| Gravity | Position | Result Location |
|---------|----------|-----------------|
| Top | Left | Top-Left corner |
| Top | Center | Top-Center |
| Top | Right | Top-Right corner |
| Bottom | Left | Bottom-Left corner |
| Bottom | Center | Bottom-Center |
| Bottom | Right | Bottom-Right corner |

**Visual:**

```
┌─────────────────────────────────┐
│ Top-Left  Top-Center  Top-Right │
│                                 │
│         Page Content            │
│                                 │
│ Bot-Left  Bot-Center  Bot-Right │
└─────────────────────────────────┘
```

---

## Use Cases

### Success Confirmation

**Scenario:** Show success message after form submission.

**Configuration:**
- **Message:** "Form submitted successfully!"
- **Gravity:** Top
- **Position:** Center
- **Type:** Success
- **Duration:** 3000

**Result:** Green success toast at top-center for 3 seconds.

---

### Error Alert

**Scenario:** Display error when validation fails.

**Configuration:**
- **Message:** "Please fill all required fields"
- **Gravity:** Top
- **Position:** Center
- **Type:** Error
- **Duration:** 5000

**Result:** Red error toast at top-center for 5 seconds.

---

### Processing Notification

**Scenario:** Show processing message during operation.

**Configuration:**
- **Message:** "Processing your request..."
- **Gravity:** Bottom
- **Position:** Right
- **Type:** Info
- **Duration:** -1

**Result:** Blue info toast at bottom-right, stays until dismissed.

---

### Warning Message

**Scenario:** Warn user about important information.

**Configuration:**
- **Message:** "This action cannot be undone"
- **Gravity:** Top
- **Position:** Center
- **Type:** Warning
- **Duration:** 5000

**Result:** Yellow/Orange warning toast at top-center for 5 seconds.

---

### Dynamic Message from Excel

**Scenario:** Show personalized message from Excel data.

**Configuration:**
- **Message (Excel):** `Welcome back, {$userName$}!`
- **Gravity:** Top
- **Position:** Right
- **Type:** Info
- **Duration:** 3000

**Result:** Blue info toast with personalized message.

---

## Best Practices

### ✅ Do's

- **Use appropriate types** - Match type to message context
- **Set reasonable durations** - 2-5 seconds for most messages
- **Use permanent for critical** - Use -1 duration for important actions
- **Position consistently** - Use same position for similar messages
- **Keep messages concise** - Short, clear messages work best
- **Use success for confirmations** - Green for successful operations

### ❌ Don'ts

- **Don't use too short durations** - Users need time to read
- **Don't use too long durations** - Avoid annoying users
- **Don't overuse permanent** - Reserve -1 for critical messages
- **Don't use wrong types** - Error should be red, success green
- **Don't write long messages** - Keep toast messages brief
- **Don't spam notifications** - Avoid showing too many toasts

---

## Message Type Guide

| Situation | Recommended Type |
|-----------|-----------------|
| Operation successful | Success |
| Operation failed | Error |
| Validation error | Error |
| Processing/Loading | Info |
| Important notice | Warning |
| General information | Info |
| Confirmation needed | Warning |

---

## Duration Guide

| Message Type | Recommended Duration |
|--------------|---------------------|
| Quick confirmation | 2000ms (2 seconds) |
| Standard message | 3000ms (3 seconds) |
| Important message | 5000ms (5 seconds) |
| Critical information | 10000ms (10 seconds) |
| Requires action | -1 (permanent) |

---

## Troubleshooting

### Toast Not Appearing

**Solutions:**
- Verify message content is set
- Check if duration is valid (positive number or -1)
- Ensure all required options are selected
- Verify field is executing
- Check browser console for errors

---

### Toast Disappears Too Quickly

**Solutions:**
- Increase duration value
- Use longer duration for important messages
- Consider using -1 for permanent display
- Test with different duration values

---

### Toast in Wrong Position

**Solutions:**
- Verify Gravity setting (Top/Bottom)
- Check Position setting (Left/Center/Right)
- Test different combinations
- Ensure settings match desired location

---

### Message Not Updating

**Solutions:**
- Verify Excel data is correct
- Check variable syntax `{$variableName$}`
- Ensure Default Value is set correctly
- Test with static message first

---

## Examples

### Example 1: Success Message (Top-Center)

```javascript
// Configuration
Message: "Data saved successfully!"
Notification Gravity: Top
Notification Position: Center
Notification Types: Success
Duration: 3000

// Result
Green success toast at top-center for 3 seconds
```

### Example 2: Error Message (Top-Center)

```javascript
// Configuration
Message: "Failed to submit form"
Notification Gravity: Top
Notification Position: Center
Notification Types: Error
Duration: 5000

// Result
Red error toast at top-center for 5 seconds
```

### Example 3: Processing Info (Bottom-Right, Permanent)

```javascript
// Configuration
Message: "Processing your request..."
Notification Gravity: Bottom
Notification Position: Right
Notification Types: Info
Duration: -1

// Result
Blue info toast at bottom-right, stays until dismissed
```

### Example 4: Warning (Top-Center)

```javascript
// Configuration
Message: "Please review your input carefully"
Notification Gravity: Top
Notification Position: Center
Notification Types: Warning
Duration: 5000

// Result
Yellow/Orange warning toast at top-center for 5 seconds
```

### Example 5: Dynamic Message from Excel

```javascript
// Configuration
Message (Default Value): {$statusMessage$}
Notification Gravity: Top
Notification Position: Right
Notification Types: {$messageType$}
Duration: 3000

// Excel Data
statusMessage: "User John created successfully"
messageType: "Success"

// Result
Green success toast with dynamic message at top-right for 3 seconds
```

---

## Related Documentation

- [Field Settings](/documentation/form-fields/field-settings)
- [Default Value](/documentation/form-fields/field-settings#default-value)
- [Variables](/documentation/variable)
- [Testing Site](/documentation/testing-site)

---

## Notes

- Toast notifications appear on top of page content
- Multiple toasts can be displayed simultaneously
- Permanent toasts (duration -1) require manual dismissal
- Toast styling matches the selected type (Info, Error, Success, Warning)
- Duration is in milliseconds (1000ms = 1 second)
- Messages can include HTML formatting (use with caution)
- Toasts are non-blocking (automation continues while displayed)
