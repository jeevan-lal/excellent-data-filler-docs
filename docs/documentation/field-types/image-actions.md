# Image Actions

Actions for manipulating and downloading images and files within web pages.

## Get Image/File Base64 String

Returns a `base64` data string with a URI header. Can be used on all files, not just images.

### Field Value

- If you have given a `file/image` element query in this field, the extension scrapes the URL from the element.
- If you haven't provided an element query, you must specify the URL/path in the `field value` or map it from your Excel (.xlsx) file.

## Get Image Width

Scrapes or calculates the pixel width of an image element.

### Field Value

- If you have given an `image` element query in this field, the extension scrapes the URL/dimensions from the element.
- If you haven't provided an element query, you must specify the `url` in the `field value`.

## Get Image Height

Scrapes or calculates the pixel height of an image element.

### Field Value

- If you have given an `image` element query in this field, the extension scrapes the URL/dimensions from the element.
- If you haven't provided an element query, you must specify the `url` in the `field value`.

## Download Image/File

Save an `image/file` directly to the local computer.

### Output File Name

- By default, the downloaded file location is the Windows `Documents` folder.
- In the field option `Output File Name`:
  - **Empty value**: Downloads the file with its default server name.
  - **`\pic\`**: Downloads the file with its default name inside the `pic` directory.
  - **`\pic\0`**: Saves the file sequentially as `1.jpg`, `2.jpg`, `3.jpg`, etc. in the `pic` directory (Image files only).

## Next Steps

- <img src="/svg/form.svg" class="doc-icon" /> [Field Types](/documentation/form-fields/field-types) — Learn about different field types
- <img src="/svg/excel.svg" class="doc-icon" /> [Upload File Field](/documentation/field-types/upload-file) — Upload files automatically
- <img src="/svg/excel.svg" class="doc-icon" /> [Excel Template](/documentation/site/site-excel-template) — Prepare Excel (.xlsx) templates
- <img src="/svg/settings.svg" class="doc-icon" /> [Site Settings](/documentation/site/site-settings) — Configure site-wide automation settings

