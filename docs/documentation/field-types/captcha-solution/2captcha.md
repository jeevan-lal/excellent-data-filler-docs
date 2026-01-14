# 2Captcha

Solve captchas automatically using the 2Captcha service, supporting reCAPTCHA v2, Turnstile, and image-based captchas.

## Overview

The 2Captcha field type integrates with the 2Captcha API to automatically solve various types of captchas during form automation. It supports multiple captcha types including reCAPTCHA v2, Cloudflare Turnstile, and traditional image-to-text captchas.

## Configuration Options

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| [Captcha Type](#captcha-type) | Dropdown | Type of captcha to solve | **Yes** |
| [Use Captcha API Key](#use-captcha-api-key) | Switch | Enable custom API key | No |
| [Captcha API Key](#captcha-api-key) | Input | 2Captcha API key | Conditional |
| [Timeout](#timeout) | Input | Maximum wait time in minutes | No |
| [Store Token in Variable](#store-token-in-variable) | Switch | Save token to field name variable | No |
| [Custom Status Bar Position](#custom-status-bar-position) | Switch | Set custom position for status bar | No |
| [Status Bar Element Selector](#status-bar-element-selector) | Input | Element selector for status bar | No |
| [Run Action After Solved](#run-action-after-solved) | Switch | Execute action when captcha is solved | No |
| [Action Type](#action-type) | Dropdown | Type of action to perform | No |
| [Field Selector Address](#field-selector-address) | Input | Target field selector | No |

### Additional Options for RecaptchaV2TaskProxyless & TurnstileTaskProxyless

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| [Set Custom Captcha Site Key](#set-custom-captcha-site-key) | Switch | Use custom site key | No |
| [Captcha Site Key](#captcha-site-key) | Input | Custom captcha site key | No |

### Additional Options for ImageToText

| Option | Type | Description | Required |
|--------|------|-------------|----------|
| [Set Image Base64](#set-image-base64) | Switch | Provide image as Base64 | No |
| [Image Base64](#image-base64) | Input | Base64 encoded image | No |
| [Phrase](#phrase) | Switch | Result contains multiple words | No |
| [Case Sensitive](#case-sensitive) | Switch | Result is case sensitive | No |
| [Requires Calculation](#requires-calculation) | Switch | Captcha requires math calculation | No |
| [Numeric](#numeric) | Dropdown | Character type requirements | No |
| [Min Length](#min-length) | Input | Minimum result length | No |
| [Max Length](#max-length) | Input | Maximum result length | No |
| [Comment](#comment) | Input | Additional instructions | No |
| [Image Instructions](#image-instructions) | Input | Specific image instructions | No |

---

## Common Options

### Captcha Type {#captcha-type}

Select the type of captcha you want to solve.

**Type:** Dropdown

**Available Types:**
- **RecaptchaV2TaskProxyless** - Google reCAPTCHA v2 (checkbox)
- **TurnstileTaskProxyless** - Cloudflare Turnstile captcha
- **ImageToText** - Traditional image-based captcha

**Example:**
```
RecaptchaV2TaskProxyless    (For Google reCAPTCHA)
TurnstileTaskProxyless      (For Cloudflare Turnstile)
ImageToText                 (For image captchas)
```

---

### Use Captcha API Key {#use-captcha-api-key}

Enable using a custom 2Captcha API key.

**Type:** Switch

**Options:**
- **ON** - Use custom API key
- **OFF** - Use default API key from settings

---

### Captcha API Key {#captcha-api-key}

Your 2Captcha API key for solving captchas.

**Type:** Input

**Description:** Enter your 2Captcha API key. You can obtain this from your 2Captcha account dashboard.

:::tip API Key Configuration
You can set the API key using all three methods:
- **Field Settings** - Set in this field option
- **Site Settings** - Configure at site level
- **Global Settings** - Set globally for all sites

Priority: Field Settings > Site Settings > Global Settings
:::

**How to Get API Key:**
1. Sign up at [2Captcha](https://2captcha.com/)
2. Go to your account dashboard
3. Copy your API key

**Example:**
```
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

**Note:** This option only works when [Use Captcha API Key](#use-captcha-api-key) is turned ON.

---

### Timeout {#timeout}

Maximum time to wait for captcha solution.

**Type:** Input

**Description:** Specify timeout duration in minutes. If captcha is not solved within this time, the request will fail.

**Example:**
```
2    (2 minutes)
5    (5 minutes)
10   (10 minutes)
```

**Recommended:** `3-5 minutes` for most captchas

---

### Store Token in Variable {#store-token-in-variable}

Save the solved captcha token to a field name variable.

**Type:** Switch

**Description:** When enabled, the captcha token will be stored in a variable that can be used later in your automation.

**Options:**
- **ON** - Store token in variable
- **OFF** - Don't store token

**Use Cases:**
- Reuse token in multiple fields
- Store for later verification
- Debug captcha solutions

---

### Custom Status Bar Position {#custom-status-bar-position}

Set a custom position for the captcha solving status bar.

**Type:** Switch

**Options:**
- **ON** - Use custom position
- **OFF** - Use default position

---

### Status Bar Element Selector {#status-bar-element-selector}

Element selector where the status bar should be displayed.

**Type:** Input

**Description:** Provide a CSS selector for the element where you want to show the captcha solving status.

**Example:**
```
#captcha-status
.status-container
[data-status="captcha"]
```

**Note:** This option only works when [Custom Status Bar Position](#custom-status-bar-position) is turned ON.

---

### Run Action After Solved {#run-action-after-solved}

Execute an action automatically after the captcha is solved.

**Type:** Switch

**Options:**
- **ON** - Run action after solving
- **OFF** - Don't run action

---

### Action Type {#action-type}

Type of action to perform after captcha is solved.

**Type:** Dropdown

**Available Actions:**
- **Set Token in reCAPTCHA Field** - Insert token into reCAPTCHA response field
- **Set Captcha Text in Field** - Insert captcha text into specified field

**Example:**
```
Set Token in reCAPTCHA Field     (For reCAPTCHA v2)
Set Captcha Text in Field        (For image captchas)
```

**Note:** This option only works when [Run Action After Solved](#run-action-after-solved) is turned ON.

---

### Field Selector Address {#field-selector-address}

Target field selector where the captcha solution should be inserted.

**Type:** Input

**Description:** Provide the CSS selector for the field where the captcha solution should be placed.

**Example:**
```
#g-recaptcha-response
input[name="captcha"]
.captcha-input
```

**Note:** This option only works when [Run Action After Solved](#run-action-after-solved) is turned ON.

---

## RecaptchaV2TaskProxyless & TurnstileTaskProxyless Options

### Set Custom Captcha Site Key {#set-custom-captcha-site-key}

Use a custom site key for the captcha.

**Type:** Switch

**Options:**
- **ON** - Use custom site key
- **OFF** - Auto-detect site key

---

### Captcha Site Key {#captcha-site-key}

The site key for the captcha.

**Type:** Input

**Description:** Enter the captcha site key. This is usually found in the page source.

**How to Find Site Key:**
1. Open browser DevTools (F12)
2. Search for `data-sitekey` or `sitekey` in the HTML
3. Copy the site key value

**Example:**
```
6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
```

**Note:** This option only works when [Set Custom Captcha Site Key](#set-custom-captcha-site-key) is turned ON.

---

## ImageToText Options

:::tip Image Captcha Setup
For ImageToText captchas:
- Set the **captcha image element selector** in the **Field Selector Query** option
- Use **Action Type**: `Set Captcha Text in Field` to insert the solved text
:::

### Set Image Base64 {#set-image-base64}

Provide the captcha image as Base64 encoded string.

**Type:** Switch

**Options:**
- **ON** - Use Base64 encoded image
- **OFF** - Use image from element

---

### Image Base64 {#image-base64}

Base64 encoded captcha image.

**Type:** Input

**Description:** Provide the image in Base64 format.

**Example:**
```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...
```

**Note:** This option only works when [Set Image Base64](#set-image-base64) is turned ON.

---

### Phrase {#phrase}

Captcha result should contain at least two words separated by space.

**Type:** Switch

**Options:**
- **ON** - Result contains multiple words
- **OFF** - Single word result

**Example:**
- ON: `hello world`
- OFF: `helloworld`

---

### Case Sensitive {#case-sensitive}

Captcha result should be case sensitive.

**Type:** Switch

**Options:**
- **ON** - Case matters (e.g., `Hello` ≠ `hello`)
- **OFF** - Case doesn't matter

---

### Requires Calculation {#requires-calculation}

Captcha requires mathematical calculation.

**Type:** Switch

**Options:**
- **ON** - Captcha is a math problem (e.g., `2+2=?`)
- **OFF** - Regular text captcha

---

### Numeric {#numeric}

Character type requirements for the captcha result.

**Type:** Dropdown

**Options:**
- **No preference** - Any characters allowed
- **Answer should contain only numbers** - Numbers only (0-9)
- **Answer should contain only letters** - Letters only (a-z, A-Z)
- **Answer should contain only numbers OR only letters** - Either all numbers or all letters
- **Answer MUST contain both numbers AND letters** - Mixed alphanumeric

**Example:**
```
No preference                                    (abc123, ABC, 123)
Answer should contain only numbers               (123456)
Answer should contain only letters               (ABCDEF)
Answer should contain only numbers OR only letters  (123456 or ABCDEF)
Answer MUST contain both numbers AND letters     (ABC123)
```

---

### Min Length {#min-length}

Minimum length of the captcha result.

**Type:** Input

**Description:** Specify the minimum number of characters expected in the captcha solution.

**Example:**
```
4    (At least 4 characters)
6    (At least 6 characters)
8    (At least 8 characters)
```

---

### Max Length {#max-length}

Maximum length of the captcha result.

**Type:** Input

**Description:** Specify the maximum number of characters expected in the captcha solution.

**Example:**
```
6    (Maximum 6 characters)
8    (Maximum 8 characters)
10   (Maximum 10 characters)
```

---

### Comment {#comment}

Additional instructions for the captcha solver.

**Type:** Input

**Description:** Provide any additional context or instructions to help solve the captcha.

**Example:**
```
Enter the text shown in the image
Type the characters you see
Solve the math problem
```

---

### Image Instructions {#image-instructions}

Specific instructions about the image content.

**Type:** Input

**Description:** Detailed instructions about what to look for or how to interpret the image.

**Example:**
```
Enter only the numbers visible in the image
Type the letters ignoring the background noise
Select all images containing traffic lights
```

---

## Use Cases

### reCAPTCHA v2
- Bypass reCAPTCHA on login forms
- Automate account creation with reCAPTCHA
- Handle reCAPTCHA in form submissions

### Cloudflare Turnstile
- Bypass Cloudflare protection
- Automate access to Turnstile-protected sites
- Handle Turnstile in automated workflows

### Image Captchas
- Solve traditional text-based image captchas
- Handle math problem captchas
- Process custom image verification

## Practical Examples

### Example 1: Solve reCAPTCHA v2

**Captcha Type:** `RecaptchaV2TaskProxyless`

**API Key:** `your-2captcha-api-key`

**Timeout:** `3` minutes

**Run Action After Solved:** `ON`

**Action Type:** `Set Token in reCAPTCHA Field`

**Field Selector:** `#g-recaptcha-response`

---

### Example 2: Solve Cloudflare Turnstile

**Captcha Type:** `TurnstileTaskProxyless`

**API Key:** `your-2captcha-api-key`

**Set Custom Site Key:** `ON`

**Site Key:** `0x4AAAAAAAA...`

**Timeout:** `5` minutes

---

### Example 3: Solve Image Captcha

**Field Selector Query:** `img.captcha-image`

**Captcha Type:** `ImageToText`

**API Key:** `your-2captcha-api-key`

**Numeric:** `Answer should contain only numbers`

**Min Length:** `4`

**Max Length:** `6`

**Run Action After Solved:** `ON`

**Action Type:** `Set Captcha Text in Field`

**Field Selector:** `input[name="captcha"]`

---

## Best Practices

### ✅ Do's

- **Keep sufficient balance** - Ensure your 2Captcha account has enough credits
- **Set appropriate timeout** - Allow enough time for human solvers
- **Use correct captcha type** - Select the right type for accurate solving
- **Test before production** - Verify captcha solving works correctly
- **Store API key securely** - Use global settings for sensitive keys
- **Monitor success rate** - Track solving accuracy and adjust settings

### ❌ Don'ts

- **Don't use short timeouts** - Captchas need time to be solved by humans
- **Don't share API keys** - Keep your credentials secure
- **Don't abuse the service** - Follow 2Captcha terms of service
- **Don't ignore errors** - Handle captcha solving failures gracefully
- **Don't forget to test** - Always test with different captcha types

## Troubleshooting

### Captcha Not Solving

**Solution:** Check API key is valid and account has sufficient balance.

### Timeout Errors

**Solution:** Increase timeout duration (try 5-10 minutes).

### Wrong Captcha Type

**Solution:** Verify you selected the correct captcha type for the page.

### Token Not Inserted

**Solution:** Check field selector is correct and action type is appropriate.

### Low Success Rate

**Solution:** Provide more specific instructions for image captchas.

## Related Documentation

- [Captcha Solution](/documentation/field-types/captcha-solution)
- [Field Types](/documentation/form-fields/field-types)
- [2Captcha API Documentation](https://2captcha.com/api-docs)
- [2Captcha Dashboard](https://2captcha.com/enterpage)
