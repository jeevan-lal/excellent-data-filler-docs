# Field Response Action

Field Response Actions allow you to define specific behaviors that execute based on the outcome of field operations. After form field execution, you receive different response types (**success**, **error**, and **skip**), and you can configure custom actions to be triggered automatically based on these responses.

## Available Action Types

When configuring a Field Response Action, you can choose from the following predefined actions:

- 🖱️ **Click on Element** - Simulate a click on a specified web element
- ➡️ **Execute Segment** - Run a predefined segment of your automation workflow
- 💾 **Set Local Data** - Store a value in local data for later use
- 🗑️ **Remove Local Data** - Delete a specific local data entry
- ✅ **Mark Entry As Saved** - Mark the current data entry as successfully saved
- ⏭️ **Go to Next Entry** - Proceed to the next data entry in your dataset
- ⏩ **Skip Segment** - Bypass the current automation segment
- 🚫 **Skip Form** - Skip the entire current form
- 🛑 **Stop Loop** - Halt the execution of the current loop

## Field Success Response Action

The **Success Response Action** is executed when a field operation completes successfully. This action allows you to define what should happen when a field is filled, clicked, or processed without any errors.

**Common Success Actions:**

- **Continue to Next Field** - Automatically proceed to the next field in sequence
- **Show Success Message** - Display a confirmation message to the user
- **Log Success Event** - Record the successful operation in the extension log
- **Execute Custom JavaScript** - Run custom code when the field succeeds
- **Update Variables** - Set or update variables based on successful field completion
- **Trigger Notifications** - Send notifications or alerts for successful operations

**Use Cases:**

- Confirming successful data entry
- Moving to the next step in a multi-step form
- Updating progress indicators
- Logging successful operations for audit purposes

<img src="/image/field-success-response-action-01.png" width="400" height="400" alt="Field Success Response Action">

## Field Error Response Action

The **Error Response Action** is executed when a field operation fails or encounters an error. This action helps you handle errors gracefully and maintain the automation workflow even when issues occur.

**Common Error Actions:**

- **Retry Operation** - Automatically attempt the field operation again
- **Skip to Next Field** - Move to the next field if the current one fails
- **Show Error Message** - Display an error notification to the user
- **Log Error Details** - Record error information in the extension log
- **Execute Error Handler** - Run custom error handling code
- **Stop Automation** - Halt the entire automation process
- **Fallback Action** - Execute an alternative action when the primary fails

**Use Cases:**

- Handling field validation errors
- Managing network timeouts
- Dealing with element not found errors
- Providing user feedback for failed operations

<img src="/image/field-error-response-action-01.png" width="400" height="400" alt="Field Error Response Action">

## Field Skip Response Action

The **Skip Response Action** is executed when a field is intentionally skipped or when skip conditions are met. This action allows you to define behavior when fields are bypassed during automation.

**Common Skip Actions:**

- **Continue to Next Field** - Proceed to the next field in the sequence
- **Log Skip Event** - Record that the field was skipped
- **Update Skip Counter** - Track the number of skipped fields
- **Execute Skip Logic** - Run custom code for skipped fields
- **Show Skip Notification** - Inform the user that a field was skipped
- **Conditional Processing** - Apply different logic based on skip reasons

**Use Cases:**

- Handling optional fields that don't need to be filled
- Managing conditional form sections
- Processing fields based on user preferences
- Implementing smart form navigation

<img src="/image/field-skip-response-action-01.png" width="400" height="400" alt="Field Skip Response Action">
