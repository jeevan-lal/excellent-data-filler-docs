# 🗃️ Execute Segment {#execute-segment}

Execute predefined segments with custom environment variables. Run specific automation workflows with dynamic configuration parameters.

## 📋 Field Options {#execute-segment-field-options}

| Field Options    | Required | Description                              | Example Values                                |
| ---------------- | -------- | ---------------------------------------- | --------------------------------------------- |
| **Segment Name** | Yes      | Name of the segment to execute           | `login_flow`, `data_entry`, `form_submission` |
| **Environment**  | No       | JSON configuration for segment execution | `{"title": "EDF", "timeout": 5000}`           |

## ⚙️ Configuration {#execute-segment-configuration}

### 📝 Segment Name {#segment-name}

**Purpose:** Specifies which predefined segment to execute during form filling.

**How to Use:**

1. [**Create a segment** in the extension segment section](/documentation/segment)
2. **Enter the exact segment name** in this field
3. **Ensure the segment exists** before execution
4. **Test the segment** to verify it works correctly

**Best Practices:**

- Use descriptive names: `user_registration`, `product_search`
- Keep names consistent across your automation
- Avoid special characters and spaces
- Use snake_case or camelCase naming

### 🌐 Environment Variables {#environment-variables}

**Purpose:** Pass dynamic configuration data to the segment during execution.

**JSON Format:**

```json
{
  "title": "EDF"
}
```

**How to Use:**

- Use variable syntax `{$variable_name$}` in the environment variables. Like this:

```json
{$title$}
```

## ⚠️ Important Notes {#important-notes}

- **Segment must exist** before execution
- **Environment variables** are passed as JSON
- **Error handling** should be implemented in the segment
- **Timeout values** should be reasonable for the operation

:::info Pro Tip
Use environment variables to make segments reusable across different forms and scenarios.
:::

:::warning Important
Ensure the segment name matches exactly with the predefined segment in your extension configuration.
:::
