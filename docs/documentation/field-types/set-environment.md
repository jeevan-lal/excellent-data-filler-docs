# ➕ Set Environment {#set-environment}

Set local environment variables for the current form execution context. Configure dynamic values that can be accessed by other fields and segments during automation.

## 📋 Field Options {#set-environment-field-options}

| Field Options             | Required | Description                               | Example Values                                 |
| ------------------------- | -------- | ----------------------------------------- | ---------------------------------------------- |
| **Environment Variables** | Yes      | JSON configuration for global environment | <pre>`{"title": "EDF", "timeout": 5000}`</pre> |

## ⚙️ Configuration {#set-environment-configuration}

### 🌐 Environment Variables {#environment-variables}

**Purpose:** Define local variables that can be accessed by other fields and segments during form execution.

**How to Configure:**

1. **Set Environment (JSON Format)** in field **default value** option
2. **Use valid JSON syntax** for configuration
3. **Define key-value pairs** for variables
4. **Test the configuration** to ensure it works

**JSON Format:**

```json
{
  "name": "John Doe", // You can use any variable name
  "email": "john.doe@example.com"
}
```

**How to Use:**

- Use variable syntax `{$variable_name$}` in the environment variables. Like this:

```json
{$name$}
```

```json
{$email$}
```

## 🌐 Global Environment {#global-environment}

You can also set global environment variables in the extension settings. [**Environment Settings**](/documentation/settings#environment-settings)

## ⚠️ Important Notes {#important-notes}

- **JSON syntax must be valid** - use proper quotes and commas
- **Variables are local** - accessible by only the current form
- **Set early in execution** - place this field before others that need the variables
- **Case sensitive** - variable names are case sensitive

:::info Pro Tip
Use environment variables to create reusable configurations that can be easily modified without changing individual field settings.
:::

:::warning Important
Ensure JSON syntax is valid. Invalid JSON will cause the field to fail and may break form execution.
:::
