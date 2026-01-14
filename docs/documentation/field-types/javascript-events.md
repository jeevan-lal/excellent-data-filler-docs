# Javascript Events

Programmatically trigger JavaScript events on page elements to simulate user interactions and activate event handlers.

## Overview

JavaScript Events field types allow you to trigger various browser events on specific elements without actual user interaction. This is useful for automating workflows, testing event handlers, and simulating user behavior in forms and web applications.

## ⌨️ Keyboard Event {#keyboard-event}

To trigger any **key** on the **keyboard** in the element of the page.

### Key Name

Shift, Ctrl, Alt, Enter, Space, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Meta (Window/Mac Key)

| Options            | Description                                    | Value                                                   | Required |
| ------------------ | ---------------------------------------------- | ------------------------------------------------------- | -------- |
| **Selector Query** | Selector Query of Element                      | [Get element query](/documentation/locate-element)      | **Yes**  |
| **Field Value**    | In this, we give the name of any keyboard key. | **Enter<br> Space<br> Ctrl+2<br> Alt+4<br>Shift+Alt+U** | **Yes**  |

## 🖱️ Pointer Event {#pointer-event}

Trigger pointer and mouse events on elements in the page.

### Event Names

Available pointer and mouse events:

- `pointerdown` - Pointer is pressed on element
- `pointerup` - Pointer is released from element
- `pointermove` - Pointer moves over element
- `click` - Element is clicked
- `mousedown` - Mouse button is pressed on element
- `mouseup` - Mouse button is released from element
- `mousemove` - Mouse moves over element
- `mouseover` - Mouse enters element area
- `mouseout` - Mouse leaves element area
- `mouseenter` - Mouse enters element (doesn't bubble)
- `mouseleave` - Mouse leaves element (doesn't bubble)
- `wheel` - Mouse wheel is scrolled

### Configuration

| Options            | Description                                    | Value                                                   | Required |
| ------------------ | ---------------------------------------------- | ------------------------------------------------------- | -------- |
| **Selector Query** | Selector Query of Element                      | [Get element query](/documentation/locate-element)      | **Yes**  |
| **Field Value**    | Event name to trigger                          | Event name from list above                              | **Yes**  |

### Setting Event Name

You can set the event name in two ways:

#### Method 1: Default Value Field

Use the **"If excel column value is empty then fill this default value"** option.

**Example:**
```
click
mousedown
pointerup
```

#### Method 2: Excel Column

Store event names in an Excel column and reference it in the field value.

**Example Excel Column:**
```
click
mouseover
pointerdown
wheel
```

### Example Usage

**Trigger click event:**
- **Selector Query**: `#submit-button`
- **Event Name**: `click`

**Trigger mouseover event:**
- **Selector Query**: `.menu-item`
- **Event Name**: `mouseover`

## 🎯 Focus Event {#focus-event}

Trigger focus-related events on elements in the page.

### Event Names

Available focus events:

- `focus` - Element receives focus
- `blur` - Element loses focus

### Configuration

| Options            | Description                                    | Value                                                   | Required |
| ------------------ | ---------------------------------------------- | ------------------------------------------------------- | -------- |
| **Selector Query** | Selector Query of Element                      | [Get element query](/documentation/locate-element)      | **Yes**  |
| **Field Value**    | Event name to trigger                          | `focus` or `blur`                                       | **Yes**  |

### Setting Event Name

You can set the event name in two ways:

#### Method 1: Default Value Field

Use the **"If excel column value is empty then fill this default value"** option.

**Example:**
```
focus
blur
```

#### Method 2: Excel Column

Store event names in an Excel column and reference it in the field value.

**Example Excel Column:**
```
focus
blur
focus
```

### Example Usage

**Trigger focus event:**
- **Selector Query**: `#email-input`
- **Event Name**: `focus`

**Trigger blur event:**
- **Selector Query**: `input[name="username"]`
- **Event Name**: `blur`

## Use Cases

### Pointer Events
- Simulate user clicks on buttons or links
- Trigger hover effects programmatically
- Test mouse interactions
- Activate dropdown menus
- Simulate drag operations

### Focus Events
- Activate input fields programmatically
- Trigger validation on blur
- Navigate through form fields
- Test focus-based interactions
- Activate autocomplete suggestions
