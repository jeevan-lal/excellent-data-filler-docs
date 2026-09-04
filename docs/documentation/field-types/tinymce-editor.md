# TinyMCE Editor

The `TinyMCE Editor` field type allows you to **fill rich text** in **TinyMCE Editor** instances provided by [TinyMCE](https://www.tiny.cloud/).

## Options

| Option                      | Description                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **TinyMCE Editor ID**           | The ID of the TinyMCE editor element. This is used to identify the editor instance.                                            |
| **TinyMCE Editor Index Number** | This is used to specify the index number of the editor if you have multiple editors on the same page. The index starts from 1. |

::: details How to fill text in the `TinyMCE` editor with `Javascript`?

```js
tinymce.get("description1").setContent("<p>Your content here</p>");
```

:::

## Field Value

You can provide `content/value` directly from an Excel (.xlsx) column or set fallback content in the field's [`default value`](/documentation/form-fields/field-settings#if-excel-column-value-is-empty-then-fill-this-default-value) option.

## Examples of TinyMCE

- [TinyMCE Documentation & Demos](https://www.tiny.cloud/docs/tinymce/latest/introduction-to-tinymce/)

## Next Steps

- <img src="/svg/form.svg" class="doc-icon" /> [CKEditor](/documentation/field-types/ckeditor) — Automate CKEditor WYSIWYG editors
- <img src="/svg/form.svg" class="doc-icon" /> [Field Settings](/documentation/form-fields/field-settings) — Advanced field configuration
- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template](/documentation/site/site-excel-template) — Prepare Excel (.xlsx) templates
- <img src="/svg/browser.svg" class="doc-icon" /> [Site Settings](/documentation/site/site-settings) — Configure site-wide automation settings

