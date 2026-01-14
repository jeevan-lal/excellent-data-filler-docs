# Site Settings {#site-settings}

Customize site-specific settings for optimal form filling behavior and data handling.

![Site Settings](/image/site-settings-02.png)

## 🔧 Form Filling Settings {#form-filling-settings}

Configure how the extension handles form filling operations and data processing.

| Setting                                                                                 | Description                                                       | Example Values           |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------ |
| **Ignore field default value**                                                          | Skip filling default values in form fields                        | Toggle ON/OFF            |
| **When Excel Data not found or all rows has been marked as "Filled", Stop Form Filler** | Stop form filling when no data available or all entries completed | Toggle ON/OFF            |
| **Separator (Used to Split Value)**                                                     | Global separator for splitting values across all fields           | `\r\n` <br> `,` <br> `;` |
| **If you want to see Entry's status bar, then turn it on**                              | Display status bar showing current entry progress                 | Toggle ON/OFF            |
| **Set delay time when filling out the form**                                            | Enable delay between form field fills                             | Toggle ON/OFF            |
| **Tab-Specific Excel Data Filler**                                                      | Use Excel data specific to current tab                            | Toggle ON/OFF            |

:::info Note
When **Ignore field default value** is active, field default values will not be filled.

- Default Behavior - When Excel Data is not available while filling the form, then field default value is filled automatically.
  :::

:::warning Note
If there are values in new line then use `\r\n` for split values.
:::

:::info Note
If **Tab-Specific Excel Data Filler** is active, then each tab is assigned unique data for filling.
:::

## ⚡ Performance Settings {#performance-settings}

Configure form filling speed and timing for optimal performance.

| Field Options                 | Description                         | Example Values                                                                                       |
| ----------------------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Choice Form Filling Speed** | Select form filling speed method    | **Fast (no delay)** <br> **Medium (0.3s delay)** <br> **Slow (2s delay)** <br> **Random (min, max)** |
| **Min. Milliseconds**         | Minimum delay time for random speed | `200`, `500`, `1000`                                                                                 |
| **Max. Milliseconds**         | Maximum delay time for random speed | `1000`, `2000`, `3000`                                                                               |

**Note:** Min/Max milliseconds settings only appear when "Random (min, max)" is selected.

## 📅 Data Format Settings {#data-format-settings}

Configure how dates and data are formatted and displayed.

| Field Options              | Description                                      | Example Values                                      |
| -------------------------- | ------------------------------------------------ | --------------------------------------------------- |
| **Excel Date Format**      | Format for displaying dates from Excel           | `yyyy-mm-dd`, `MM-DD-YYYY`, `YYYY-MM-DD[T]HH:mm:ss` |
| **View Excel Column Data** | Search and select specific Excel columns to view | Search and Select Excel Column Name                 |

**Supported Date Formats:**

- `YYYY-MM-DD[T]HH:mm:ss` - Full datetime format
- `MM-DD-YYYY` - US date format
- `YYYY-MM-DD` - ISO date format (default)

:::tip Default Date Format
Default Date Format: `yyyy-mm-dd`
:::

## 🔐 Captcha Solution {#captcha-solution}

Configure Captcha Solution API Keys for this specific site.

| Field Options                                | Description                                | Example Values                     |
| -------------------------------------------- | ------------------------------------------ | ---------------------------------- |
| **Use Captcha Solution API Keys in this Site** | Enable/disable captcha solving for this site | Toggle ON/OFF                      |
| **Service Name**                             | Captcha solving service provider           | `2captcha`                         |
| **Service API Key**                          | Your captcha service API key               | `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6` |

**How to Use:**

1. Toggle **"Use Captcha Solution API Keys in this Site"** to **ON**
2. **Service Name** will show `2captcha`
3. Enter your **Service API Key** from your 2Captcha account
4. API key will be used for all captcha solving on this site

:::tip Get API Key
Sign up at [2Captcha](https://2captcha.com/) to get your API key. You can find it in your account dashboard after signing up.
:::

:::info Priority
API keys can be configured at three levels:
- **Global Settings** - Applies to all sites
- **Site Settings** (this page) - Applies to this specific site
- **Field Settings** - Applies to specific field

**Priority Order**: Field Settings > Site Settings > Global Settings
:::

**Related Documentation:**
- [Captcha Solution Field Type](/documentation/field-types/captcha-solution)
- [2Captcha Documentation](/documentation/field-types/captcha-solution/2captcha)
- [Global Captcha Settings](/documentation/settings#captcha-solution)

## 📤 Export Site Data {#export-site-data}

Site data export functionality.

| Operation            | Description                                 | Action                          |
| -------------------- | ------------------------------------------- | ------------------------------- |
| **Export Site Data** | Backup current site data and configurations | Click "Export Site Data" button |

**How to Use:**

1. Click the **"Export Site Data"** button
2. Download the generated backup file
3. Store the backup file securely
4. Import the backup from the [extension settings page](/documentation/settings#import-operations)

**What's Included in Export:**

- Site configuration and settings
- Form field definitions and selectors
- Field mapping and validation rules
- Custom settings and preferences

:::info Note
Export option doesn't include Excel data - only site configurations and settings.
:::
