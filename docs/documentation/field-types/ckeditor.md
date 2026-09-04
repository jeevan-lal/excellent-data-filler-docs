# CKEditor

The `CKEditor` field type allows you to **fill rich text** in **CKEditor**, a widely used open-source WYSIWYG editor provided by [CKEditor](https://ckeditor.com/).

::: details How to fill text in the `ckeditor-4` editor with `Javascript`?

```js
const editor = CKEDITOR.instances["editornya"];
editor.setData("Value");
```

:::

## Field Value

You can provide `content/value` directly from an Excel (.xlsx) column or set fallback content in the field's [`default value`](/documentation/form-fields/field-settings#if-excel-column-value-is-empty-then-fill-this-default-value) option.

## Examples of CKEditor

- [CKEditor 4 Demo](https://ckeditor.com/ckeditor-4/)

## Next Steps

- <img src="/svg/form.svg" class="doc-icon" /> [TinyMCE Editor](/documentation/field-types/tinymce-editor) — Automate TinyMCE rich text editors
- <img src="/svg/form.svg" class="doc-icon" /> [Field Settings](/documentation/form-fields/field-settings) — Advanced field configuration
- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template](/documentation/site/site-excel-template) — Prepare Excel (.xlsx) templates
- <img src="/svg/browser.svg" class="doc-icon" /> [Site Settings](/documentation/site/site-settings) — Configure site-wide automation settings

