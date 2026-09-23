# Task Scheduler {#task-scheduler}

The **Task Scheduler** allows you to schedule automated browser actions — such as opening target websites or closing unwanted tabs — to execute automatically at specific times, recurring intervals, or upon browser launch.

---

## Accessing Task Scheduler {#accessing-task-scheduler}

1. Open the extension options dashboard.
2. Select **Task Scheduler** from the left navigation menu.
3. Click **+ Insert a new Task** in the top-right corner to open the configuration modal.

---

## Configuration Options {#configuration-options}

Configure task parameters in the creation modal:

| Option | Type | Description | Required |
| --- | --- | --- | --- |
| **Task Title** | Text Input | A descriptive label for identifying the task. | Yes |
| **Type of Task** | Select | Action to perform: **Open URL** (opens in a new tab) or **Close URL** (closes tabs matching URL pattern). | Yes |
| **URL** | Text Input | Target web address. Supports wildcard patterns (e.g., `*example.com*` or `https://site.com/app/*`) for closing tabs. | Yes |
| **Timer** | Select | Execution frequency (One Time, fixed intervals, calendar recurrence, or browser startup). | Yes |
| **Date & Time** | Date / Time | Target execution date and time. Displayed when Timer is set to **One Time**, **Every Day**, or **Every Year**. | Conditional |
| **Day** | Select | Select weekday (Sunday–Saturday for **Every Week**) or calendar day (1–31 for **Every Month**). | Conditional |
| **Minute / Seconds** | Number Input | Custom recurring interval in minutes or seconds (when using **Custom Minute** or **Custom Second**). | Conditional |
| **Task Description** | Textarea | Optional internal notes explaining the purpose of the scheduled task. | No |
| **Auto Focus Tab** | Toggle | Automatically switch active focus to the newly opened tab. | No |
| **Pinned Tab** | Toggle | Pin the tab to keep it persistent on the left of the tab bar. | No |
| **Show Notification** | Toggle | Display a desktop notification upon task execution. | No |
| **Active / Inactive** | Toggle | Enable or pause the task without deleting its configuration. | No |

---

## Timer Options Reference {#timer-options}

Choose the execution schedule that matches your automation requirements:

| Timer | Schedule Description | Required Fields |
| --- | --- | --- |
| **One Time** | Executes once at a specific date and time, then automatically becomes inactive. | Date, Time |
| **Every 1 / 2 / 5 / 10 / 30 Minute** | Repeats indefinitely at the selected fixed minute interval. | None |
| **Every Hour** | Repeats once every hour. | None |
| **Every Day** | Runs once every day at the designated time. | Time |
| **Every Week** | Runs once weekly on the chosen day of the week at the designated time. | Day (Weekdays), Time |
| **Every Month** | Runs once monthly on the selected calendar date (1–31) at the designated time. | Day (1–31), Time |
| **Every Year** | Runs annually on the specified calendar date and time. | Date, Time |
| **Custom Minute** | Repeats at any user-defined interval in minutes (e.g., every `15` or `45` minutes). | Minute |
| **Custom Second** | Repeats at a high-frequency interval in seconds (e.g., every `30` or `90` seconds). | Seconds |
| **On Browser Open** | Triggers automatically each time the browser starts up. | None |

---

## Managing Tasks {#managing-tasks}

All scheduled tasks are listed in the Task Scheduler dashboard with their title, action type, frequency, and status:

- **Edit Task**: Click the pencil icon to modify URLs, timing, or options.
- **Toggle Active / Inactive**: Use the status toggle to temporarily pause or resume a task.
- **Delete Task**: Click the trash icon to permanently remove the task.

::: tip Unattended Automation
Combine scheduled tasks with automated form filling:
- Schedule a task to open your target form URL with **Auto Focus Tab** enabled.
- When your site and form configuration match that URL, Excellent Data Filler will automatically trigger and fill the form upon page load.
:::
