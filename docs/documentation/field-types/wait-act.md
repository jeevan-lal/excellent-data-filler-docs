# Wait & Act

The **Wait & Act** field type allows you to monitor an element on a webpage until a specified condition is satisfied (such as the element becoming visible or invisible) and then execute an action, such as clicking the monitored element or clicking another element on the page.

## Overview

In modern web applications, elements like modal overlays, confirmation dialogs, notifications, or dynamically rendered buttons frequently change state. The Wait & Act field type automates waiting and responding to these dynamic states in the background:

- **Condition Monitoring** - Continuously poll the DOM until the monitored element becomes visible or invisible.
- **Configurable Polling & Timeout** - Customize the polling interval and optionally specify a maximum timeout before aborting.
- **Action on Success** - Automatically trigger an action when the condition is met (click the monitored element or click another element).
- **Wait Before Action** - Optionally introduce a delay after the condition is met before executing the action.

:::info Background Execution
The **Wait & Act** field operates asynchronously in the background. Once the polling process starts, it immediately returns so that subsequent form fields and actions can continue executing without being blocked while this field monitors its condition.
:::

## Configuration Options

### Condition

Select the state condition to wait for:

- **Element becomes visible** - Waits until the monitored element exists and is visible in the DOM.
- **Element becomes invisible** - Waits until the monitored element disappears or is removed from the DOM.

### Poll Interval (ms)

The interval in milliseconds between successive checks.

- **Default:** `200` ms

### Should we use timeout?

A toggle option to define a maximum wait time:

- **Toggle OFF** - Keeps waiting and polling in the background until the condition is met.
- **Toggle ON** - Enforces a maximum wait duration defined in the **Timeout (ms)** input. If the timeout duration expires before the condition is satisfied, a timeout warning is logged and execution halts gracefully.

### Action on Success

Specify the action to execute once the monitored condition is satisfied:

- **Click monitored element** - Triggers a click event on the element being monitored.
- **Click another element** - Triggers a click event on a different target element specified by a selector.

### Another Element Selector

Visible when **Action on Success** is set to **Click another element**.

- Provide the CSS selector for the target element to click once the condition is met.
- Supports pre-defined variables in selector queries.

### Wait before executing action?

A toggle option to introduce a delay between the moment the condition is satisfied and the execution of the success action.

- **Wait Time Before Action (ms)** - Input the delay in milliseconds to wait before triggering the click action.

## Field Selector Configuration

Use the field's selector settings to specify the element to monitor:

- **Field Selector Query** - CSS Selector, ID, or XPath of the element to watch.

## Best Practices & Tips

- **Modals & Dialogs:** When waiting for an animation or popup modal to appear, set the condition to **Element becomes visible** and use **Wait before executing action** (e.g., 500ms) to ensure smooth transitions before clicking buttons.
- **Timeouts:** Enable timeout on critical steps to prevent automation from getting permanently stuck if an element never changes state.

## Next Steps

- <img src="/svg/form.svg" class="doc-icon" /> [Field Settings](/documentation/form-fields/field-settings) - Configure advanced field options
- <img src="/svg/form.svg" class="doc-icon" /> [Field Types](/documentation/form-fields/field-types) - Explore other field types
- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template](/documentation/site/site-excel-template) - Prepare Excel (.xlsx) templates
- <img src="/svg/browser.svg" class="doc-icon" /> [Form Configuration](/documentation/form/form) - Set up complete form automation