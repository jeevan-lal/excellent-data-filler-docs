---
prev:
  text: "Check Downloads"
  link: "/documentation/field-types/browser-actions/check-downloads"
next:
  text: "Fetch Mail (Gmail)"
  link: "/documentation/field-types/google-service-gmail/fetch-mail-gmail"
---

# 2Captcha Integration {#twocaptcha}

Solve online challenges automatically by integrating 2Captcha API support directly into your automation forms, with native compatibility for Google reCAPTCHA v2, Cloudflare Turnstile, and image-to-text captchas.

---

## Overview {#overview}

The **2Captcha** field type delegates verification challenges to human solvers and AI engines via the 2Captcha API. The extension automatically extracts site keys or image buffers, dispatches the request, tracks solving progress on an optional on-screen status bar, and inserts the solved response token or text into the target form.

---

## Configuration Options {#configuration-options}

| Option | Type | Description | Required |
|---|---|---|---|
| **Captcha Type** | Dropdown | Challenge type: `RecaptchaV2TaskProxyless`, `TurnstileTaskProxyless`, or `ImageToText`. | Yes |
| **Use Captcha API Key** | Toggle Switch | Enable to override global/site credentials with a field-specific key. | No |
| **Captcha API Key** | Text Input | Your 2Captcha account API secret key. | When custom key enabled |
| **Timeout** | Number Input | Maximum wait duration in minutes (recommended: `3` to `5`). | No |
| **Store Token in Variable** | Toggle Switch | Saves the returned solution token to the field's variable name. | No |
| **Custom Status Bar Position** | Toggle Switch | Relocates the on-screen solving progress bar to a specific container. | No |
| **Status Bar Element Selector** | Text Input | CSS selector where the progress bar will mount. | When custom position enabled |
| **Run Action After Solved** | Toggle Switch | Automatically triggers an action once the solution returns. | No |
| **Action Type** | Dropdown | Output action (`Set Token in reCAPTCHA Field` or `Set Captcha Text in Field`). | When action enabled |
| **Field Selector Address** | Text Input | Target input where the token or text string will be inserted. | When action enabled |

---

## Captcha Type Configurations {#captcha-types}

### 1. Google reCAPTCHA v2 (`RecaptchaV2TaskProxyless`)

Designed for Google checkbox challenges ("I'm not a robot"):

- **Site Key**: Auto-detected from `data-sitekey` attributes in the DOM, or explicitly provided via **Set Custom Captcha Site Key**.
- **Action Type**: `Set Token in reCAPTCHA Field`
- **Target Selector**: `#g-recaptcha-response` (or custom hidden textarea).

### 2. Cloudflare Turnstile (`TurnstileTaskProxyless`)

Designed for Cloudflare managed challenge widgets:

- **Site Key**: Extracted from the Turnstile widget wrapper or specified manually.
- **Action Type**: Inserts the returned verification token into the Turnstile response input.

### 3. Image-to-Text (`ImageToText`)

Designed for standard alphanumeric or mathematical image captchas:

| Image Option | Description |
|---|---|
| **Set Image Base64** | Direct Base64 data string input instead of extracting from an `<img>` element. |
| **Phrase** | When ON, indicates the answer contains multiple space-separated words. |
| **Case Sensitive** | Enforces exact uppercase/lowercase distinction. |
| **Requires Calculation** | Informs solvers that the image contains a math problem (e.g., `12 + 5 = ?`). |
| **Numeric Requirements** | Filters allowed characters (`Numbers only`, `Letters only`, or `Mixed`). |
| **Min / Max Length** | Constrains expected solution string length. |
| **Comment / Instructions** | Additional hints for human solvers (e.g., "Enter red characters only"). |

---

## API Key Resolution Hierarchy {#api-key-hierarchy}

The extension resolves the 2Captcha API key in the following order of precedence:

```text
[Field Level Key]  ──>  [Site Settings Key]  ──>  [Global Settings Key]
   (Highest)                                          (Fallback)
```

1. **Field Settings**: Configured specifically on this field.
2. **Site Settings**: Configured in [Site Settings](/documentation/site/site-settings) for domain-wide usage.
3. **Global Settings**: Configured in [Extension Settings](/documentation/settings) across all sites.

---

## Practical Examples {#examples}

### Example 1: Solving Google reCAPTCHA v2

```text
Captcha Type: RecaptchaV2TaskProxyless
Timeout: 3 minutes
Run Action After Solved: ON
Action Type: Set Token in reCAPTCHA Field
Field Selector Address: #g-recaptcha-response
```

### Example 2: Solving Cloudflare Turnstile

```text
Captcha Type: TurnstileTaskProxyless
Set Custom Captcha Site Key: ON
Captcha Site Key: 0x4AAAAAAAJcZVRqyHh71UMI
Timeout: 5 minutes
Run Action After Solved: ON
```

### Example 3: Solving Math Image Captcha

```text
Field Selector Query (Image Element): img#captcha-img
Captcha Type: ImageToText
Requires Calculation: ON
Numeric: Answer should contain only numbers
Run Action After Solved: ON
Action Type: Set Captcha Text in Field
Field Selector Address: input[name="captcha_answer"]
```

---

## Best Practices {#best-practices}

### Do's

- **Maintain Account Balance**: Ensure your 2Captcha balance has sufficient funds to avoid solution timeouts.
- **Set Realistic Timeouts**: Allow at least `3` to `5` minutes for complex image captchas.
- **Test Target Selectors**: Confirm the selector for `#g-recaptcha-response` exists in the DOM before running full form workflows.
- **Store Solution Tokens**: Enable **Store Token in Variable** if your form requires passing the token across multiple wizard steps.

### Don'ts

- **Do Not Use Overly Short Timeouts**: Avoid setting timeouts below 1 minute.
- **Do Not Hardcode Keys in Templates**: Keep API keys in Global or Site settings when sharing site configurations.
- **Do Not Leave Selector Empty**: Always provide a valid **Field Selector Address** to receive the solution.

---

## Troubleshooting {#troubleshooting}

| Issue | Likely Cause | Solution |
|---|---|---|
| **Request fails with ZERO_BALANCE** | 2Captcha account exhausted | Add balance in your 2Captcha dashboard. |
| **Timeout error occurred** | Solver traffic high or timeout too strict | Increase timeout setting to 5–7 minutes. |
| **Token not triggering form submission** | Missing native change event dispatch | Add a [Trigger Javascript Event](/documentation/form-fields/field-settings#trigger-javascript-event) (`change`, `input`) on the target element. |
| **Image captcha rejected** | Low image contrast or unescaped noise | Provide hints in **Comment** or specify exact **Numeric** character filters. |

---

## Related Documentation {#related-documentation}

- <img src="/svg/form.svg" class="doc-icon" /> [Form Fields Overview](/documentation/form-fields/field)
- <img src="/svg/settings.svg" class="doc-icon" /> [Field Settings](/documentation/form-fields/field-settings)
- <img src="/svg/beaker.svg" class="doc-icon" /> [Execution Logs](/documentation/logs)
- <img src="/svg/template.svg" class="doc-icon" /> [Segments Automation](/documentation/segment)
