# 🤖 AI

Generate AI-powered responses using prompts and automatically fill the output into form elements.

## Overview

The AI field type allows you to provide a prompt to an AI model (Google Gemini or OpenRouter) and automatically fill the generated response into a specified form element. This is useful for generating dynamic content, creating text based on context, or getting AI assistance for form filling.

## How It Works

1. **Provide a Prompt** - Define what you want the AI to generate
2. **AI Processes** - The AI model generates a response based on your prompt
3. **Auto-Fill Output** - The AI response is automatically filled into the target form element

## Configuration Options

### AI Provider Name

Select your AI service provider from the dropdown.

**Available Providers:**
- **Google - Gemini API** - Google's Gemini AI models
- **OpenRouter** - Access to multiple AI models through OpenRouter

### API Key

Enter your API key for the selected AI provider.

:::tip How to Create API Key
- **Google Gemini API**: Visit [Google AI Studio](https://aistudio.google.com/) to create your API key
- **OpenRouter**: Visit [OpenRouter](https://openrouter.ai/) to create your API key and get model names
:::

### AI Model Name

Specify the AI model you want to use.

**Examples:**
- Google Gemini: `gemini-pro`, `gemini-1.5-flash`, `gemini-1.5-pro`
- OpenRouter: Various models available (check OpenRouter documentation)

### Retry on Error

Enable this switch to automatically retry the AI request if an error occurs.

**Options:**
- **ON** - Retry on error
- **OFF** - Don't retry on error

## Setting Up AI Prompts

You can provide AI prompts in two ways:

### Method 1: Default Value Field

Use the **"If excel column value is empty then fill this default value"** option to set your AI prompt.

**Example:**
```
Generate a professional email subject line for a job application
```

### Method 2: Excel Column

Store your prompts directly in an Excel column and reference it in the field value.

**Example Excel Column:**
```
Write a product description for {productName}
Summarize this text: {articleContent}
Generate 5 hashtags for {topic}
```

## Filling AI Output

To specify where the AI output should be filled:

1. **Copy the form field selector query** from the target element
2. **Paste it in the Field Selector Query** option
3. The AI response will automatically fill into that element

**Example:**
- **Field Selector Query**: `#description` or `.product-summary`
- AI output will be filled into the element matching this selector

## Practical Examples

### Example 1: Generate Product Description

**Configuration:**
- **AI Provider**: Google - Gemini API
- **AI Model**: gemini-1.5-flash
- **Prompt** (in Excel): `Write a 50-word product description for {productName}`
- **Field Selector**: `#product-description`

### Example 2: Create Email Subject

**Configuration:**
- **AI Provider**: OpenRouter
- **AI Model**: anthropic/claude-3-haiku
- **Prompt** (Default Value): `Generate a professional email subject for a meeting request`
- **Field Selector**: `input[name="subject"]`

### Example 3: Summarize Content

**Configuration:**
- **AI Provider**: Google - Gemini API
- **AI Model**: gemini-pro
- **Prompt** (in Excel): `Summarize this in 2 sentences: {longText}`
- **Field Selector**: `.summary-field`

## Use Cases

- **Content Generation** - Create product descriptions, blog posts, or marketing copy
- **Text Summarization** - Condense long content into brief summaries
- **Translation** - Translate text between languages
- **Data Transformation** - Convert data formats or restructure information
- **Creative Writing** - Generate creative content, slogans, or taglines
- **Email Composition** - Create professional email subjects and bodies

## Best Practices

### ✅ Do's

- **Be specific in prompts** - Clear prompts generate better responses
- **Test prompts first** - Verify AI output quality before automation
- **Use variables** - Reference Excel columns with `{columnName}` syntax
- **Set retry on error** - Enable retry for better reliability
- **Monitor API usage** - Keep track of your API quota and costs

### ❌ Don'ts

- **Don't use vague prompts** - Unclear prompts lead to inconsistent results
- **Don't exceed token limits** - Keep prompts and expected outputs within model limits
- **Don't share API keys** - Keep your API credentials secure
- **Don't ignore errors** - Monitor and handle API errors appropriately

## Troubleshooting

### AI Output Not Filling

**Solution:** Verify the Field Selector Query is correct and the element exists on the page.

### API Key Error

**Solution:** Check that your API key is valid and has sufficient quota/credits.

### Model Not Found

**Solution:** Verify the model name is correct for your selected provider.

### Empty Response

**Solution:** Review your prompt for clarity and ensure it's appropriate for the AI model.

## Related Documentation

- [Field Types](/documentation/form-fields/field-types)
- [Variables](/documentation/variable)
- [Google AI Studio](https://aistudio.google.com/)
- [OpenRouter](https://openrouter.ai/)
