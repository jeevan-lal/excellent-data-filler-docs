# Browser Bus

Browser Bus is a powerful JavaScript API that enables seamless **real-time communication** between multiple browser tabs and windows. It allows you to share data, synchronize states, and coordinate actions across different tabs of your browser extension.

**Use Cases:**
- Share form data between tabs
- Synchronize user actions across multiple windows
- Transfer data from one tab to another without server communication
- Coordinate automation tasks across different browser tabs
- Build multi-tab workflows and data pipelines

## Key Features

### 📡 Cross-Tab Communication
Send and receive data between any open browser tabs, enabling seamless information sharing without requiring a backend server.

### 🔄 Real-Time Synchronization
Data changes are instantly reflected across all connected tabs, ensuring all tabs stay in sync with the latest information.

### 🎯 Flexible Data Types
Send any type of data including strings, numbers, objects, arrays, and complex nested structures.

### 🔒 Origin Control
Configure which URLs can send and receive data, providing security and control over cross-tab communication.

### 🎛️ Listener Management
Full control over connection listeners with start, stop, remove, and reset capabilities for efficient resource management.

### 🧹 Data Cleanup
Remove previously sent data to manage memory and keep your communication channel clean.

### 🖼️ iFrame Support
Optional support for communication within iframes, with granular control over which iframes can participate.

:::tip Note
All JavaScript code examples below should be used in the [JavaScript Code](/documentation/field-types/javascript-code) field type.
:::

## How it works

1. **Request Sending:**

Send data from one browser tab to other tabs. You can send any type of data including strings, objects, or arrays.

   ```js
   // SEND REQUEST
   $fns.connection.send("SEND REQUEST");
   ```

2. **Request Receiving:**

Receive data sent from other tabs. Set up a listener that will be triggered whenever data is received from another tab.

   ```js
   // RECEIVER
   $fns.connection.receive((data) => {
     console.log("REQUEST DATA: ", data);

     // STOP LISTENER
     // $fns.connection.listener.stop();

     // REMOVE LISTENER
     // $fns.connection.listener.remove();
   });
   ```

## Stop and Remove Listener

This helps to prevent unnecessary processing when data is no longer needed.

```js
// STOP
$fns.connection.listener.stop();
```

```js
// REMOVE
$fns.connection.listener.remove();
```

## Reset Listener

If the listener is removed or stopped, the receiver will no longer function. To restart the receiver, you can reset the listener.

```js
// RESET LISTENER
$fns.connection.listener.reset();
```

## Remove Sent Data

Remove already sent data from the Browser Bus connection. This is useful for clearing old data and managing memory.

```js
// REMOVE SENT DATA
$fns.connection.removeSentData();
```

This function clears all previously sent data from the connection, allowing you to start fresh without any residual data from previous transmissions.

## Settings

Connection default settings -

```json
{
  // Is allow connection in iframe
  "allow_iframe": false,
  // URLs of the page to send the connection from.
  "senderURLs": [],
  // URL of the page to receive the connection data.
  "receiverTab": {}
}
```

| Setting        | Description                                                                                                                                                                   | Value               |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `allow_iframe` | Indicates whether the application allows connections within an iframe.                                                                                                        | `false`             |
| `senderURLs`   | An array containing the URLs of the pages from which the connection is sent. <br><br> If there are multiple `iframes` on the page, you can specify the `URL` for iframe here. | `[]` (empty array)  |
| `receiverTab`  | An object containing the URL of the page that will receive the connection data.                                                                                               | `{}` (empty object) |

If the `senderURLs` data is empty, the connection send request from all iframes if the site has iframes.

If the `receiverTab` data is empty, the connection is triggered to all tabs. If you want to customize this behavior, you can use the parameters provided in the Chrome extension API, specifically the tabs API.

For more information on how to use these parameters, you can refer to the [Chrome Extension Tabs API](https://developer.chrome.com/docs/extensions/reference/api/tabs?hl=en#parameters_19).

### How to Set Settings

These settings should be established before `sending` a connection request.

```js
// SETTINGS
$fns.connection.settings({
  allow_iframe: false,
  senderURLs: ["https://temp-mail.org/en/"],
  receiverTab: {
    url: "https://formfiller.ctechhindi.in/*",
  },
});

// Then use `connection.send`
```

- **allow_iframe**: This setting is set to `false`, which means that the connection will not be allowed within an iframe.
- **senderURLs**: In this case, the only allowed sender URL is `https://temp-mail.org/en/`. This means that only requests originating from this URL will be able to send connection data.
- **receiverTab**: The specified URL is `https://formfiller.ctechhindi.in/*`, which indicates that any page under this domain can receive the connection.
