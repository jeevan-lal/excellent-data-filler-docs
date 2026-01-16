# Timer Action {#timer-action}

Execute specific actions after a specified time delay. Set the action type and timer duration in seconds to trigger automated operations.

After the field runs, the specified action will execute when the timer expires. This field operates asynchronously - the next field does not wait for the timer action to complete before proceeding.

## 📋 Field Options {#timer-action-field-options}

| Field Options   | Required | Example Values                                                 | Description                                   |
| --------------- | -------- | -------------------------------------------------------------- | --------------------------------------------- |
| **Set Seconds** | Yes      | `5`, `10`, `30`, `60`                                          | [Set Seconds](#set-seconds)                   |
| **Action Name** | Yes      | **Open URL** <br> **Click Field Element** <br> **Reload Page** | Type of action to perform after timer expires |

## ⚙️ Action Configuration {#action-configuration}

### Set Seconds {#set-seconds}

Enter the timer duration in the **Default Value** field option.

<img src="/image/field-default-value-option.png" width="400" alt="Default Value">

**How to Configure:**

1. Click on the field in your form
2. Navigate to **Field Settings**
3. Go to **Default Value** tab
4. Enter the number of seconds (e.g., `10` for 10 seconds)
5. Save the configuration

### Action Name {#action-name}

Select the type of action to execute after the timer expires.

| Action Type             | Description                      | Additional Configuration                     |
| ----------------------- | -------------------------------- | -------------------------------------------- |
| **Open URL**            | Navigate to a specific URL       | **URL** - Target URL to open                 |
| **Click Field Element** | Click on a specific page element | **Element Selector** - CSS selector or XPath |
| **Reload Page**         | Refresh the current page         | No additional configuration required         |
