# Captcha Solution

Solve captcha challenges automatically using third-party captcha solving services.

## Overview

The Captcha Solution field types integrate with captcha solving services to automatically solve various types of captchas during form automation. This enables seamless automation of forms protected by captcha challenges.

## Field Types

### [2Captcha](/documentation/field-types/captcha-solution/2captcha)

Solve captchas using the 2Captcha service, supporting various captcha types.

**Supported Captcha Types:**
- **RecaptchaV2TaskProxyless** - Google reCAPTCHA v2 (checkbox)
- **TurnstileTaskProxyless** - Cloudflare Turnstile captcha
- **ImageToText** - Traditional image-based captcha

**Features:**
- Multiple captcha type support
- Automatic token insertion
- Custom status bar positioning
- Retry mechanisms
- Variable storage for tokens
- Flexible API key configuration
- Image captcha customization options

## Key Features

- **Multiple Captcha Types** - Support for reCAPTCHA, hCaptcha, Turnstile, and image captchas
- **Automatic Solving** - Captchas are solved automatically in the background
- **API Integration** - Direct integration with 2Captcha API
- **High Success Rate** - Reliable captcha solving with human workers
- **Fast Response Time** - Quick captcha resolution for smooth automation
- **Flexible Configuration** - Configure at field, site, or global level
- **Action Automation** - Automatically insert solutions after solving

## Supported Captcha Types

### reCAPTCHA v2
- Checkbox reCAPTCHA
- Invisible reCAPTCHA
- Automatic token insertion

### Cloudflare Turnstile
- Cloudflare's captcha alternative
- Proxyless solving
- Site key support

### Image Captcha
- Traditional text-based captchas
- Math problem captchas
- Custom character requirements
- Case-sensitive options
- Length constraints

## Use Cases

- **Bypass captchas in automated form submissions** - Complete forms without manual intervention
- **Handle verification challenges in web scraping** - Access protected content automatically
- **Automate account creation processes** - Create accounts on captcha-protected sites
- **Process forms with captcha protection** - Submit forms seamlessly
- **Enable seamless automation workflows** - Remove captcha bottlenecks

## Setup Requirements

### 2Captcha Account
1. Sign up at **2Captcha**
2. Add funds to your account
3. Get your API key from the dashboard
4. Configure API key in extension settings

### API Key Configuration
You can set the API key at three levels:
- **Field Settings** - Configure per field
- **Site Settings** - Configure per site
- **Global Settings** - Configure globally

**Priority:** Field Settings > Site Settings > Global Settings

## Quick Start

### Example 1: Solve reCAPTCHA v2

1. Add a **2Captcha** field type
2. Select **RecaptchaV2TaskProxyless**
3. Enter your API key
4. Enable **Run Action After Solved**
5. Select **Set Token in reCAPTCHA Field**
6. Set timeout to 3-5 minutes

### Example 2: Solve Image Captcha

1. Add a **2Captcha** field type
2. Set **Field Selector Query** to captcha image element
3. Select **ImageToText** captcha type
4. Configure character requirements (numeric, length, etc.)
5. Enable **Run Action After Solved**
6. Select **Set Captcha Text in Field**
7. Enter target field selector

## Best Practices

### ✅ Do's

- **Maintain sufficient balance** - Keep your 2Captcha account funded
- **Set appropriate timeouts** - Allow 3-5 minutes for captcha solving
- **Use correct captcha types** - Select the right type for accurate results
- **Test before production** - Verify solving works correctly
- **Monitor success rates** - Track and optimize solving accuracy
- **Secure API keys** - Store keys in global settings

### ❌ Don'ts

- **Don't use short timeouts** - Human solvers need adequate time
- **Don't share API keys** - Keep credentials secure
- **Don't abuse the service** - Follow 2Captcha terms of service
- **Don't ignore errors** - Handle failures gracefully
- **Don't skip testing** - Always test with real captchas

## Troubleshooting

### Captcha Not Solving

**Solution:** Verify API key is valid and account has sufficient credits.

### Timeout Errors

**Solution:** Increase timeout duration to 5-10 minutes.

### Wrong Captcha Type Selected

**Solution:** Inspect the page and select the correct captcha type.

### Token Not Inserted

**Solution:** Check field selector is correct and action type matches captcha type.

### Low Success Rate

**Solution:** Provide more specific instructions for image captchas or verify site key is correct.

## Related Documentation

- [2Captcha](/documentation/field-types/captcha-solution/2captcha)
- [Field Types](/documentation/form-fields/field-types)
- [2Captcha API Documentation](https://2captcha.com/api-docs)
- [2Captcha Pricing](https://2captcha.com/pricing)
- [2Captcha Dashboard](https://2captcha.com/enterpage)
