# 📋 Copy {#copy}

It is used to copy any **text** from the page.

<img src="/image/copy-01.png" width="450" height="450" alt="Copy">

## ⚙️ Options {#options}

| Options                                                     | Description                               | Value                                              | Required |
| ----------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------- | -------- |
| **Selector Query**                                          | Selector Query of Element                 | [Get element query](/documentation/locate-element) | **Yes**  |
| [**Copy Which Element Option**](#copy-which-element-option) | Choose what to copy from the element      |                                                    | **Yes**  |
| [**Replace String with RegEx**](#replace-string-with-regex) | Apply regex replacement to copied content |                                                    | No       |
| [**Set Store Key Name**](#set-store-key-name)               | Store copied content with a key name      |                                                    | No       |

## 📝 Copy Which Element Option {#copy-which-element-option}

Choose what type of content you want to copy from the selected element:

- **Copy Value** - Copy the value attribute of input elements
- **Copy Text** - Copy the visible text content of the element
- **Copy HTML** - Copy the HTML markup of the element
- **Copy Element Attribute** - Copy a specific attribute value
  - **Element Attribute Name** - Specify which attribute to copy (e.g., `src`, `href`, `data-id`)
- **Copy Dropdown Selected Option (Name)** - Copy the display text of the selected dropdown option
- **Copy Dropdown Selected Option (Value)** - Copy the value of the selected dropdown option
- **Copy Image URL** - Copy the source URL of an image element

## 🔄 Replace String with RegEx {#replace-string-with-regex}

If you want to change this "**Ben002**" string into this "**002_g.pdf**" then you can use this type of RegEx.

<img src="/image/regex-01.jpg" width="400" height="400" alt="Copy">

:::info Note
This feature allows you to transform the copied content using regular expressions before storing or using it.
:::

## 🔑 Set Store Key Name {#set-store-key-name}

If you have to copy **multiple strings** from one page and save them all in different keys, then this option is used so that we can access that data through the key in [Paste Option](/documentation/form-fields/field-settings#paste-copied-value).

<img src="/image/copy-02.png" width="550" height="550" alt="Copy">

:::tip Usage
Use unique key names for each copy operation to avoid overwriting previously copied data. You can then reference these stored values in other fields using the paste functionality.
:::

## 💡 Usage Examples {#usage-examples}

### 📄 Copy Text Content

1. Set the **Selector Query** to target the desired element
2. Choose **Copy Text** from the Copy Which Element Option
3. Optionally set a **Store Key Name** for later reference

### 🖼️ Copy Image URL

1. Set the **Selector Query** to target an image element
2. Choose **Copy Image URL** from the Copy Which Element Option
3. The copied value will be the `src` attribute of the image

### 📋 Copy Dropdown Selection

1. Set the **Selector Query** to target a dropdown/select element
2. Choose either:
   - **Copy Dropdown Selected Option (Name)** - for display text
   - **Copy Dropdown Selected Option (Value)** - for option value
3. The copied value will be the currently selected option

### 🔧 Copy Element Attribute

1. Set the **Selector Query** to target the desired element
2. Choose **Copy Element Attribute** from the Copy Which Element Option
3. Specify the **Element Attribute Name** (e.g., `href`, `data-id`, `class`)

## 📋 How to Paste {#how-to-paste}

After using **Copy** Field Type, you can paste the copied value in other fields option `default value`. Like the image given below.

Also you can manipulate the copied value before pasting it in other fields. Like the image given below.

<img src="/image/paste-01.png" width="400" height="400" alt="Paste">
