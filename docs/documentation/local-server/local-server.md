# Local Server {#local-server}

The **Local Server** feature allows the Excellent Data Filler extension to communicate with a companion server application hosted locally on your machine. This unlocks advanced automation capabilities that require system-level or network-level operations, such as automated email dispatching, IMAP inbox verification, and secure local file processing.

To configure the server connection inside the extension, see the [Extension Server Settings](/documentation/settings#extension-server) reference.

<img src="/image/local-server-dashboard.png" alt="Local Server Dashboard" style="max-width: 100%; border-radius: 8px; margin: 16px 0;" />

---

## Installation {#installation}

Follow these steps to set up and launch the Local Server:

### Download

| Platform | Package | Version |
|---|---|---|
| **Windows** | [Download EDF Server (.zip)](/edf-server-v1.0.0.zip) | v1.0.0 |

### How to Run

1. **Download**: Click the download link above to obtain `edf-server-v1.0.0.zip`.
2. **Extract**: Right-click the downloaded zip archive and select **Extract All...** to unpack the files.
3. **Run Executable**: Open the extracted folder and double-click `edf-server.exe`.
4. **Command Window**: A console window will open, indicating that the server process is active.
5. **Browser Interface**: The server web dashboard will launch automatically at [http://127.0.0.10:8080/](http://127.0.0.10:8080/).

### API Authorization Configuration

To establish an authenticated bridge between the browser extension and your local server:

1. **Open API Settings**: Navigate to the server's API settings page: [http://127.0.0.10:8080/settings/api](http://127.0.0.10:8080/settings/api).
2. **Enable Public API**: Toggle the **Public API** switch to **ON**.
3. **Copy Token**: In the **API Authorization** section, locate the `X-API-Token` value and click the copy icon.
4. **Configure Extension**: Open the extension's [Settings](/documentation/settings#extension-server), locate the **Extension Server** section, and paste the token into the **X-API-Token** field.

:::tip Keep Server Running
Keep the command prompt window open while using local server automation features. Closing the console terminates the server process.
:::

---

## Server Interface {#server-interface}

The Local Server web portal provides several management utilities:

- **Dashboard**: Monitor real-time server status, uptime, and active extension connections.
- **[Mail Accounts](/documentation/local-server/mail-accounts)**: Register and configure IMAP/SMTP email accounts for automation workflows.
- **API Settings**: Manage API authorization keys and toggle extension access.
- **Audit Logs**: Inspect a detailed chronological log of all incoming requests and operations.

---

## Where to Use {#where-to-use}

The Local Server is utilized by automation fields that require background network or OS access:

- **[Get Mail from Local Server](/documentation/field-types/local-server/get-mail-from-local-server)**: Automatically retrieve emails or verification codes via IMAP.
- **[Send Mail from Local Server](/documentation/field-types/local-server/send-mail-from-local-server)**: Dispatch emails automatically via SMTP.

For a summary of all server-assisted fields, visit the [Local Server Field Types](/documentation/form-fields/field-types#local-server) catalog.

---

## Security Considerations {#security-considerations}

- **Local Execution**: All communications between the extension and the server occur strictly over `localhost` (`127.0.0.10`).
- **No Cloud Transmission**: Account credentials and automated payloads are never sent to external servers or third-party clouds.
- **Token Protection**: Extension requests are authenticated using your unique local `X-API-Token`.
