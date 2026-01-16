<script setup>
import CloseBrowserTabDetailsTable from './../template/CloseBrowserTabDetailsTable.vue'
import SetDownloadItemFileNameDetailsTable from './../template/SetDownloadItemFileNameDetailsTable.vue'
</script>

# Browser Action

The **Browser Action** field types allow you to automate and control various browser tab operations within your project. These field types enable you to open new tabs, retrieve tab IDs, capture screenshots, update tab properties, close tabs, and perform other browser-related actions.

## Open a new Tab

Open a new tab in browser then use this field type and you can set tab `url` in the `field value` or `default value`.

---

## Get Tab ID

This field type retrieves the ID of a specific tab within the browser. It allows you to identify the desired tab using various matching methods.

| Options                                      | Description                                                                                                                                                             |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Which type of match you want to use?**     | Choose the matching method for identifying the tab:                                                                                                                     |
|                                              | - **By Tab URL and Title:** Match using both URL and title criteria                                                                                                     |
|                                              | - **By Tab Index:** Match using the tab's position index                                                                                                                |
|                                              | - **Active Tab:** Target the currently active tab                                                                                                                       |
| **Tab Index**                                | Specify the tab's position index (only used when "By Tab Index" is selected).                                                                                           |
| **Which URL match pattern you want to use?** | Choose the URL matching pattern:                                                                                                                                        |
|                                              | - **Default Browser Match Patterns:** Use Chrome extension match patterns, [More Details](https://developer.chrome.com/docs/extensions/develop/concepts/match-patterns) |
|                                              | - **Use with Regex:** Use regular expressions with (:any), (:any(:end)) for dynamic matching [More Details](/documentation/form/form#regex-matching-examples)           |
| **Tab URL**                                  | Specify the URL of the tab you want to identify.                                                                                                                        |
| **Should we use tab title for matching?**    | Enable this option to include tab title in the matching criteria.                                                                                                       |
| **Wait until the tab url or title matches?** | Enable this option to make the field wait until the specified tab URL or title is found.                                                                                |
| **Should we use timeout (Set in Minutes)?**  | Set a maximum time limit (in minutes) to wait for the tab to be found.                                                                                                  |

**Usage:**

The field's value will be the ID of the identified tab. You can use this ID in other browser actions, such as `Focus Tab`, `Close Browser Tab`, or `Reload Tab`.

:::info Note

- If multiple tabs match the specified criteria, the ID of the first matching tab will be returned.
- If no tab matches within the timeout limit, the field's value will be `null`.
  :::

---

## Get Tab Details

This field type retrieves specific details about a browser tab. It allows you to extract various tab properties such as URL, title, favicon, index, and other tab attributes.

| Options                                    | Description                                                                                                |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **Which type of details you want to get?** | Choose the specific tab property you want to retrieve:                                                     |
|                                            | - **Get Tab URL:** Retrieve the URL of the specified tab                                                   |
|                                            | - **Get Tab Title:** Retrieve the title of the specified tab                                               |
|                                            | - **Get Tab Favicon URL:** Retrieve the favicon URL of the specified tab                                   |
|                                            | - **Get Tab Index:** Retrieve the position index of the specified tab                                      |
|                                            | - **Get Tab windowId:** Retrieve the window ID that contains the specified tab                             |
|                                            | - **Get Tab Active?:** Check if the specified tab is currently active (returns true/false)                 |
|                                            | - **Get Tab Incognito?:** Check if the specified tab is in incognito mode (returns true/false)             |
|                                            | - **Get Tab Pinned?:** Check if the specified tab is pinned (returns true/false)                           |
| **Tab Id**                                 | Enter the ID of the tab from which the data is to be extracted in the default value settings of the field. |

**Usage:**

The field's value will contain the requested tab detail based on your selection. You can use this data in other fields like [Download Item](#download-item) or for conditional logic in your automation flow.

:::info Note

- If the specified tab ID is invalid or the tab no longer exists, the field's value will be `null`.
- The tab ID can be obtained using the "Get Tab ID" field type.
  :::

---

## Capture Tab

If you want to take a screenshot of the page then you can use this.

:::info
Will capture the `entire page` if you are using `Firefox` browser.
:::

## Update Tab

Action on Active Tab.

- `active`
- `autoDiscardable`
- `highlighted`
- `muted`
- `pinned`
- `url`

## Go Back to Previous Page

if `element value` is `false` then skip this action (also set tab id in the `element value`)

## Go Forward to Next Page

if `element value` is `false` then skip this action (also set tab id in the `element value`)

## Check Downloads

Monitor and verify download status in the browser's download list with support for filename pattern matching and custom filtering.

[More Details](/documentation/field-types/browser-actions/check-downloads.md)

---

## Reload Tab

if `element value` is `false` then skip this action (also set tab id in the `element value`)

## Focus Tab

It is used to focus the browser's _tab_.

| Options         | Description                                                                                                                                                                            | Required |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **Field Value** | **-** If field value is **empty** then focus active tab.<br>**-** If field value is **false** then skip focus tab action.<br>**-** You can also set the **Tab Id** in the field value. | No       |

## Focus Window

It is used to focus the browser's _window_.

| Options         | Description                                                                                                                                                                                     | Required |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **Field Value** | **-** If field value is **empty** then focus active window.<br>**-** If field value is **false** then skip focus window action.<br>**-** You can also set the **Window Id** in the field value. | No       |

## Close Browser Tab

This field type can be used to **close** the browser **Tab**.

| Options                                                             | Description                                                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Match the tab with the tab title and tab URL and then close it?** | Enable this option to match and close a tab based on URL and title criteria.                            |
| **Tab URL**                                                         | Specify the URL of the tab you want to close.                                                           |
| **Tab Title**                                                       | Specify the title of the tab you want to close.                                                         |
| **Timeout**                                                         | Set a maximum time limit (in minutes) to wait for the tab to be found.                                  |
| **Wait until the tab url or title matches?**                        | Enable this option to make the field wait until the specified tab URL or title is found before closing. |
| **Close the active tab only?**                                      | Enable this option to close only the currently active tab.                                              |

<CloseBrowserTabDetailsTable/>

::: tip NOTE
Whichever tab you want to close, enter Tab id in the field default value. If no Tab ID is given then that tab will be closed in which form this field is present.
:::

## Close Browser Window

This field type can be used to **close** the browser **Window**.

| Options         | Description                                                                                                                                                                                     | Required |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **Field Value** | **-** If field value is **empty** then close active window.<br>**-** If field value is **false** then skip close window action.<br>**-** You can also set the **Window Id** in the field value. | No       |

## Set Download Item File Name

If you want to change the name of the file being downloaded in the browser, then use it before clicking on the download button.

<SetDownloadItemFileNameDetailsTable/>

::: warning
This field type only uses single file rename at a time, does not work on multiple tabs and multiple files.
:::

## Download Item

This field type allows you to download files from URLs with various download options and file handling preferences.

| Options                                                        | Description                                                                                         |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Which type of downloader you want to use?**                  | Choose the download method:                                                                         |
|                                                                | - **Use Chrome Downloader:** Use the browser's built-in download functionality                      |
|                                                                | - **Use Download Yourself:** Handle the download process manually                                   |
| **What to do if the file already exists?**                     | Choose how to handle existing files:                                                                |
|                                                                | - **Uniquify:** Add a unique identifier to the filename to avoid conflicts                          |
|                                                                | - **Replace:** Overwrite the existing file                                                          |
|                                                                | - **Prompt for User:** Ask the user to choose what to do                                            |
| **Use a file-chooser to allow the user to choose a filename?** | Enable this option to show a file dialog for the user to select the download location and filename. |
| **Set the file name**                                          | Specify the desired filename for the downloaded file.                                               |
| **File URL**                                                   | Enter the URL of the item to be downloaded in the default value settings of the field.              |

**Usage:**

This field type initiates a download process for the specified URL. The download behavior depends on your selected options for downloader type, file conflict handling, and filename settings.

:::info Note

- The File URL should be a direct download link to the file you want to download.
- If using "Use Download Yourself", ensure the URL is accessible and the file is downloadable.
- File conflict resolution options help manage scenarios where files with the same name already exist.
  :::

:::info Important
You must `Allow` the site permission `Automatic downloads` for this field type to work.

<img src="/image/site-permission-01.png" alt="Download Item">

**How to open site permission?**

chrome://settings/content/siteDetails?site=(YOUR_SITE_URL)
:::

---

## Insert CSS

Inserts a CSS stylesheet into page. You can set css in the `field value` or `default value`.

## Set Local Data

Store data in the browser's extension storage using the `chrome.storage.local` API. The data is stored with a **unique key** and can be retrieved or removed later using [Get Local Data](#get-local-data) or [Remove Local Data](#remove-local-data).

| Options            | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| **Store Key Name** | Enter the unique key name to store the data. Use prefix `CTH_EDF_DB_LOCAL_` for consistency. |
| **Data Value**     | Enter the data you want to store in the browser storage.                                     |

### Usage

1. **Set Store Key Name**: Enter a unique key name with the recommended prefix `CTH_EDF_DB_LOCAL_`
2. **Set Data Value**: Enter the data you want to store (text, variables, etc.)
3. **Store Data**: The data will be stored in browser extension storage and can be retrieved later

### Example

- **Store Key Name**: `CTH_EDF_DB_LOCAL_user_email`
- **Data Value**: `john@example.com`

### Technical Notes

- **Storage API**: Uses `chrome.storage.local` API (not `localStorage`)
- **Persistence**: Data persists across browser sessions
- **Scope**: Data is accessible across all pages where the extension is active
- **Storage Limit**: Chrome extension storage typically allows up to 10MB
- **Synchronous Access**: Data retrieval is asynchronous

--- 

## Get Local Data

Retrieve data from the browser's extension storage (stored via [Set Local Data](#set-local-data)) using the `chrome.storage.local` API and the **unique key** of that data.

| Options                                        | Description                                                                                         |
| ---------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Store Key Name**                             | Enter the unique key name to fetch the stored data. Use prefix `CTH_EDF_DB_LOCAL_` for consistency. |
| **Wait until the given key data is received**  | Enable this option to wait until the specified key data is available before proceeding.             |
| **Delete the data after getting the key data** | Enable this option to automatically delete the data after retrieving it (one-time use).             |

### Usage

1. **Set Store Key Name**: Enter the key name that was used when storing the data with "Set Local Data"
2. **Wait for Data**: Enable "Wait until the given key data is received" if the data might not be immediately available
3. **One-time Use**: Enable "Delete the data after getting the key data" if you only need to use the data once

### Example

- **Store Key Name**: `CTH_EDF_DB_LOCAL_user_profile`
- **Wait until the given key data is received**: ✅ Enabled
- **Delete the data after getting the key data**: ❌ Disabled (keep data for reuse)

### Technical Notes

- **Storage API**: Uses `chrome.storage.local` API (not `localStorage`)
- **Asynchronous**: Data retrieval is asynchronous
- **Wait Option**: When enabled, field waits until data becomes available
- **Delete Option**: Automatically removes data after retrieval when enabled

---

## Remove Local Data

Delete data from the browser's extension storage (stored via [Set Local Data](#set-local-data)) using the `chrome.storage.local` API and the **unique key** of that data.

| Options            | Description                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| **Store Key Name** | Enter the unique key name of the data you want to delete. Use prefix `CTH_EDF_DB_LOCAL_` for consistency. |

### Usage

1. **Set Store Key Name**: Enter the exact key name that was used when storing the data with "Set Local Data"
2. **Remove Data**: The data associated with that key will be permanently deleted from browser extension storage

### Example

- **Store Key Name**: `CTH_EDF_DB_LOCAL_user_profile`
- **Result**: The user profile data will be permanently removed from browser extension storage

### Technical Notes

- **Storage API**: Uses `chrome.storage.local` API (not `localStorage`)
- **Permanent Deletion**: Data is permanently removed and cannot be recovered
- **Immediate Effect**: Deletion happens immediately
