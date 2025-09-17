# Get TOTP Code

The Get TOTP Code field type allows you to automatically generate and fill Time-based One-Time Password (TOTP) codes from Google Authenticator or other TOTP-compatible applications. This field type can handle both single input fields and multiple input fields for code splitting scenarios.

## Overview

TOTP (Time-based One-Time Password) is a security mechanism that generates time-sensitive codes for two-factor authentication. The Get TOTP Code field type enables you to:

- **🔐 Generate TOTP Codes** - Automatically generate valid TOTP codes from authenticator URIs
- **📱 Google Authenticator Support** - Works with Google Authenticator and other TOTP apps
- **🔢 Code Splitting** - Split codes across multiple input fields

## Configuration Options

### 🔗 URI of the TOTP Code

The primary configuration option where you enter the TOTP URI (Uniform Resource Identifier) that contains the secret key and other parameters needed to generate the TOTP code.

**URI Format:**

```
otpauth://totp/AccountName?secret=SECRET_KEY&issuer=ISSUER_NAME&algorithm=SHA1&digits=6&period=30
```

**How to Get TOTP URI:**

1. **From Google Authenticator:**

   - Open Google Authenticator app
   - Tap on the account you want to use
   - Look for "Export" or "Show QR Code" option
   - The URI is usually displayed in the QR code or export options

2. **From Other Apps:**

   - Most TOTP apps provide export functionality
   - Look for "Export", "Backup", or "Show Secret" options
   - Copy the URI or secret key

3. **From Service Provider:**
   - Some services provide TOTP URIs directly
   - Check account security settings for 2FA setup
   - Look for "Manual Entry" or "Advanced" options

### 🔀 Should we split the code?{#should-we-split-the-code}

This toggle option determines how the TOTP code is filled into form fields.

#### Single Input Mode (Toggle OFF)

When the toggle is **OFF**, the entire TOTP code is filled into a single input field.

**Use Cases:**

- Standard TOTP input fields
- Single 6-digit code input
- Simple authentication forms

**Configuration:**

- **Field Selector** - CSS selector for the single input field
- **Code Format** - Complete 6-digit code (e.g., "123456")

#### Split Code Mode (Toggle ON)

When the toggle is **ON**, the TOTP code is split across multiple input fields, with each digit going into a separate field.

**Use Cases:**

- Multi-digit input fields (one digit per field)
- Enhanced security forms
- Custom authentication interfaces

**Configuration:**

- **Field Selector Query** - CSS selector that matches multiple input fields
- **Code Length** - Number of digits to split (usually 6)
- **Sequential Filling** - Fill fields in order (1st digit → 1st field, 2nd digit → 2nd field, etc.)

## Field Selector Configuration

### 🎯 Single Input Field{#single-input-field}

For single input mode, provide a CSS selector that targets one input field.

**Common Selectors:**

- `input[type="text"]` - Generic text input
- `#totp-code` - Input with specific ID
- `.otp-input` - Input with specific class
- `input[name="totp"]` - Input with specific name attribute

**Example:**

```css
#totp-input-field
```

### 🔢 Multiple Input Fields{#multiple-input-fields}

For split code mode, provide a CSS selector that matches multiple input fields.

**Common Selectors:**

- `input[type="text"]` - All text inputs (if they're the only ones)
- `.otp-digit` - Inputs with specific class
- `input[name^="digit"]` - Inputs with name starting with "digit"
- `.code-input input` - Inputs within a specific container

**Example:**

```css
.otp-inputs input[type="text"];
```

**Field Order:**
The extension will fill the fields in the order they appear in the DOM. Ensure your selector matches fields in the correct sequence.

## Advanced Configuration

### 🔐 Security Considerations

**Best Practices:**

- **Secure Storage** - TOTP URIs are stored securely in the extension
- **Local Processing** - Code generation happens locally, not on external servers
- **No Network** - TOTP generation doesn't require internet connection
- **Encryption** - Stored secrets are encrypted
## Troubleshooting

### ❌ Common Issues

**Issue:** TOTP code not generating
**Solutions:**

- Verify the URI format is correct
- Check that the secret key is properly encoded
- Ensure the time period matches the authenticator app
- Verify the algorithm and digits parameters

**Issue:** Code not filling in fields
**Solutions:**

- Check the field selector is correct
- Verify the fields are visible and enabled
- Test the selector in browser developer tools
- Ensure the fields accept the generated code format

**Issue:** Split code not working
**Solutions:**

- Verify the selector matches multiple fields
- Check that fields are in the correct order
- Ensure all fields are accessible
- Test with a simple selector first

### 🔧 Debugging Tips

1. **Test URI** - Verify the URI works in a TOTP app first
2. **Check Selectors** - Use browser tools to test selectors
3. **Monitor Console** - Check browser console for errors
4. **Time Sync** - Ensure system time is accurate
5. **Field Validation** - Verify fields accept the input format

## Next Steps

- [Field Settings](/documentation/form-fields/field-settings) - Configure advanced field options
- [Field Types](/documentation/form-fields/field-types) - Explore other field types
- [Variables](/documentation/variable) - Use variables for dynamic TOTP handling
- [Form Configuration](/documentation/form/form) - Set up complete form automation