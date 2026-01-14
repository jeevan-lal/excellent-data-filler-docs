# Task Scheduler

Schedule automated tasks to run at specific times or intervals for hands-free automation.

## Overview

The Task Scheduler allows you to create and manage automated tasks that execute at predefined times or intervals. You can schedule tasks to open URLs, close tabs, and perform other actions automatically without manual intervention.

## Key Features

- **⏰ Flexible Scheduling** - Multiple timer options from minutes to years
- **🔄 Recurring Tasks** - Set tasks to repeat at regular intervals
- **📅 One-Time Tasks** - Schedule tasks for specific dates and times
- **🔗 URL Management** - Open or close URLs automatically
- **🔔 Notifications** - Get notified when tasks execute
- **📌 Tab Control** - Pin tabs and auto-focus functionality
- **✅ Active/Inactive Toggle** - Enable or disable tasks easily

## Getting Started

### Accessing Task Scheduler

1. Open the extension options page
2. Navigate to **Task Scheduler** from the sidebar menu
3. You'll see the Task Scheduler interface

### Empty State

When no tasks are scheduled, you'll see:

```
Not Found
Task Scheduler Data Not Available
```

**Action:** Click the **"+ Insert a new Task"** button to create your first task.

---

## Creating a Task

### Step 1: Open Task Creation Dialog

Click the **"+ Insert a new Task"** button in the top-right corner.

### Configuration Options

The following table shows all available configuration options for creating a task:

| Option | Type | Description | Required | Conditional |
|--------|------|-------------|----------|-------------|
| [Task Title](#task-title) | Text Input | Name of the task | **Yes** | - |
| [Type of Task](#type-of-task) | Dropdown | Action to perform (Open URL, Close URL) | **Yes** | - |
| [URL](#url) | Text Input | Target URL for the task | **Yes** | - |
| [Timer](#timer) | Dropdown | When and how often task runs | **Yes** | - |
| [Date & Time](#date--time-for-every-day-and-one-time) | Date/Time Picker | Specific date and time | Conditional | Shows for: Every Day, One Time, Every Year |
| [Day](#day-for-every-week-every-month) | Dropdown | Day selection | Conditional | Shows for: Every Week (weekdays), Every Month (1-31) |
| [Minute](#minute-for-custom-minute) | Number Input | Custom minute interval | Conditional | Shows for: Custom Minute |
| [Seconds](#seconds-for-custom-second) | Number Input | Custom second interval | Conditional | Shows for: Custom Second |
| [Task Description](#task-description) | Textarea | Optional notes about the task | No | - |
| [Auto Focus Tab](#auto-focus-tab) | Toggle Switch | Focus tab when opened | No | - |
| [Pinned Tab](#pinned-tab) | Toggle Switch | Pin the tab | No | - |
| [Active/Inactive](#activeinactive) | Toggle Switch | Enable or disable task | No | - |
| [Show Notification](#show-notification) | Toggle Switch | Show notification on execution | No | - |

---

### Step 2: Configure Task Settings

#### Task Title

**Field:** Text Input

**Description:** Give your task a descriptive name.

**Example:**
```
Open Dashboard Daily
Close Tabs Every Hour
Check Email Every 30 Minutes
```

---

#### Type of Task

**Field:** Dropdown

**Description:** Select the type of action to perform.

**Available Options:**

| Task Type | Description |
|-----------|-------------|
| **Open URL** | Open a specific URL in a new tab |
| **Close URL** | Close tabs matching a specific URL pattern |

**Example:**
```
Open URL  - Opens https://example.com
Close URL - Closes all tabs with example.com
```

---

#### URL

**Field:** Text Input

**Description:** Enter the URL for the task.

**For Open URL:**
```
https://example.com
https://mail.google.com
https://dashboard.example.com
```

**For Close URL:**
```
https://example.com
*example.com*  (wildcard pattern)
https://mail.google.com/mail/*
```

---

#### Timer

**Field:** Dropdown

**Description:** Select when and how often the task should run.

**Available Timer Options:**

| Timer Option | Description | Use Case |
|--------------|-------------|----------|
| **One Time** | Run once at a specific date and time | One-off scheduled task |
| **Every Minute** | Run every minute | Frequent monitoring |
| **Every 2 Minute** | Run every 2 minutes | Regular checks |
| **Every 5 Minute** | Run every 5 minutes | Periodic updates |
| **Every 10 Minute** | Run every 10 minutes | Standard intervals |
| **Every 30 Minute** | Run every 30 minutes | Half-hourly tasks |
| **Every Hour** | Run every hour | Hourly automation |
| **Every Day** | Run once daily | Daily routines |
| **Every Week** | Run once weekly | Weekly tasks |
| **Every Month** | Run once monthly | Monthly operations |
| **Every Year** | Run once yearly | Annual tasks |
| **Custom Minute** | Run at custom minute intervals | Flexible timing |
| **Custom Second** | Run at custom second intervals | High-frequency tasks |
| **On Browser Open** | Run when browser starts | Startup automation |

---

#### Date & Time (for "Every Day" and "One Time")

**Fields:** Date Picker and Time Picker

**Description:** Set the specific date and time for task execution.

**Date Format:** `dd/mm/yyyy`

**Time Format:** `--:-- --` (12-hour format with AM/PM)

**Example:**
```
Date: 15/01/2024
Time: 09:30 AM
```

**Note:** This field only appears when:
- Timer is set to **"Every Day"** (time only)
- Timer is set to **"One Time"** (date and time)
- Timer is set to **"Every Year"** (date and time)

---

#### Day (for "Every Week", "Every Month")

**Field:** Dropdown

**Description:** Select the specific day for task execution. The available options change based on the Timer selection.

**For "Every Week":**

Select the day of the week when the task should run.

**Available Options:**
- Sunday
- Monday
- Tuesday
- Wednesday
- Thursday
- Friday
- Saturday

**Example:**
```
Timer: Every Week
Day: Monday
Time: 09:00 AM
Result: Task runs every Monday at 9:00 AM
```

---

**For "Every Month":**

Select the day of the month (1-31) when the task should run.

**Available Options:**
- 1 to 31 (day of the month)

**Example:**
```
Timer: Every Month
Day: 15
Time: 10:00 AM
Result: Task runs on the 15th of every month at 10:00 AM
```

**Note:** If you select day 29, 30, or 31, the task will not run in months that don't have those days.

---

#### Minute (for "Custom Minute")

**Field:** Number Input

**Description:** Enter the custom interval in minutes.

**Example:**
```
15  (runs every 15 minutes)
20  (runs every 20 minutes)
45  (runs every 45 minutes)
```

**Note:** This field only appears when Timer is set to **"Custom Minute"**.

---

#### Seconds (for "Custom Second")

**Field:** Number Input

**Description:** Enter the custom interval in seconds.

**Example:**
```
30  (runs every 30 seconds)
45  (runs every 45 seconds)
90  (runs every 90 seconds)
```

**Note:** This field only appears when Timer is set to **"Custom Second"**.

---

#### Task Description

**Field:** Textarea

**Description:** Add optional notes or description for the task.

**Example:**
```
Opens the dashboard every morning at 9 AM
Closes all email tabs every hour to reduce clutter
Checks for new notifications every 5 minutes
```

---

### Step 3: Configure Task Options

#### Auto Focus Tab

**Field:** Toggle Switch

**Description:** Automatically focus (switch to) the tab when it opens.

**Options:**
- **ON** - Tab becomes active when opened
- **OFF** - Tab opens in background

**Use Case:** Enable when you want to immediately see the opened page.

---

#### Pinned Tab

**Field:** Toggle Switch

**Description:** Pin the tab when it opens.

**Options:**
- **ON** - Tab is pinned (smaller, stays on left)
- **OFF** - Normal tab

**Use Case:** Keep important tabs always visible and prevent accidental closure.

---

#### Active/Inactive

**Field:** Toggle Switch

**Description:** Enable or disable the task.

**Options:**
- **ON** (Green) - Task is active and will execute
- **OFF** (Gray) - Task is disabled and won't execute

**Use Case:** Temporarily disable tasks without deleting them.

---

#### Show Notification

**Field:** Toggle Switch

**Description:** Display a notification when the task executes.

**Options:**
- **ON** - Show notification on task execution
- **OFF** - Silent execution

**Use Case:** Get visual confirmation when tasks run.

---

### Step 4: Save the Task

1. Review all settings
2. Click the **"Save"** button (green)
3. Task will be added to the scheduler

**Alternative:** Click **"Close"** button (red) to cancel without saving.

---

## Managing Tasks

### Viewing Tasks

All scheduled tasks appear in the main Task Scheduler interface with:
- Task title
- Task type
- Schedule information
- Active/Inactive status
- Action buttons

### Editing Tasks

1. Click the **Edit** button (pencil icon) on a task
2. Modify task settings
3. Click **"Save"** to update

### Deleting Tasks

1. Click the **Delete** button (trash icon) on a task
2. Confirm deletion
3. Task will be removed permanently

### Enabling/Disabling Tasks

1. Click the **Active/Inactive** toggle on a task
2. Task status changes immediately
3. Disabled tasks won't execute until re-enabled

---

## Timer Options Explained

### One Time

**Description:** Execute task once at a specific date and time.

**Configuration:**
- Set date using date picker
- Set time using time picker
- Task runs once and then becomes inactive

**Example Use Cases:**
- Schedule a meeting reminder
- Open a registration page at a specific time
- One-time data backup

---

### Recurring Intervals

**Every Minute / 2 / 5 / 10 / 30 Minutes:**

**Description:** Task repeats at fixed minute intervals.

**Example:**
- Every 5 minutes: Checks for new emails
- Every 30 minutes: Refreshes dashboard

---

### Time-Based Recurring

**Every Hour / Day / Week / Month / Year:**

**Description:** Task repeats at larger time intervals.

**For "Every Day":**
- Set specific time (e.g., 9:00 AM)
- Runs daily at that time

**For "Every Week":**
- Set specific day of the week (Sunday - Saturday)
- Set specific time
- Runs weekly on that day at that time

**For "Every Month":**
- Set specific day of the month (1-31)
- Set specific time
- Runs monthly on that day at that time

**For "Every Year":**
- Set specific date (dd/mm/yyyy)
- Set specific time
- Runs yearly on that date at that time

**Example:**
- Every Day at 9:00 AM: Open work dashboard
- Every Week on Monday at 10:00 AM: Generate weekly report
- Every Month on the 15th at 2:00 PM: Review monthly data
- Every Year on 01/01 at 12:00 AM: New Year automation

---

### Custom Intervals

**Custom Minute / Custom Second:**

**Description:** Define your own interval in minutes or seconds.

**Configuration:**
- Enter custom interval value
- Task repeats at that interval

**Example:**
- Custom Minute: 15 (runs every 15 minutes)
- Custom Second: 45 (runs every 45 seconds)

---

### On Browser Open

**Description:** Task executes automatically when the browser starts.

**Use Cases:**
- Open frequently used pages on startup
- Initialize work environment
- Load essential dashboards

---

## Use Cases

### Daily Automation

**Scenario:** Open work dashboard every morning

**Configuration:**
- **Task Title:** "Open Work Dashboard"
- **Type:** Open URL
- **URL:** `https://dashboard.company.com`
- **Timer:** Every Day
- **Time:** 09:00 AM
- **Auto Focus:** ON
- **Pinned Tab:** ON

---

### Periodic Cleanup

**Scenario:** Close social media tabs every hour

**Configuration:**
- **Task Title:** "Close Social Media Tabs"
- **Type:** Close URL
- **URL:** `*facebook.com*,*twitter.com*,*instagram.com*`
- **Timer:** Every Hour
- **Show Notification:** ON

---

### Monitoring

**Scenario:** Check email every 5 minutes

**Configuration:**
- **Task Title:** "Check Email"
- **Type:** Open URL
- **URL:** `https://mail.google.com`
- **Timer:** Every 5 Minute
- **Auto Focus:** OFF
- **Show Notification:** OFF

---

### Startup Automation

**Scenario:** Open essential tabs on browser start

**Configuration:**
- **Task Title:** "Open Essential Tabs"
- **Type:** Open URL
- **URL:** `https://calendar.google.com`
- **Timer:** On Browser Open
- **Pinned Tab:** ON

---

## Best Practices

### ✅ Do's

- **Use descriptive task titles** - Make tasks easy to identify
- **Set appropriate intervals** - Don't over-schedule tasks
- **Enable notifications for important tasks** - Stay informed
- **Use "On Browser Open" for startup tasks** - Automate your workflow
- **Pin important tabs** - Keep essential pages accessible
- **Test tasks before scheduling** - Verify URLs and settings
- **Disable unused tasks** - Keep scheduler organized

### ❌ Don'ts

- **Don't set too frequent intervals** - Avoid performance issues
- **Don't schedule conflicting tasks** - Plan task timing carefully
- **Don't forget to disable test tasks** - Clean up after testing
- **Don't use invalid URLs** - Verify URLs before saving
- **Don't over-use auto-focus** - Can be disruptive
- **Don't schedule too many tasks** - Keep it manageable

---

## Troubleshooting

### Task Not Executing

**Solutions:**
- Verify task is set to **Active** (toggle is ON/green)
- Check timer settings are correct
- Ensure browser is running at scheduled time
- Verify URL is valid and accessible
- Check browser permissions

---

### Wrong Time Execution

**Solutions:**
- Verify system time is correct
- Check timezone settings
- Ensure AM/PM is set correctly
- Review timer interval settings

---

### Tab Not Opening

**Solutions:**
- Verify URL is correct and accessible
- Check browser pop-up blocker settings
- Ensure extension has necessary permissions
- Try opening URL manually first

---

### Notification Not Showing

**Solutions:**
- Enable "Show Notification" toggle
- Check browser notification permissions
- Verify notifications are enabled in system settings
- Test with a simple task first

---

## Tips and Tricks

### 💡 Pro Tips

1. **Combine with Form Filling** - Schedule form filling tasks at specific times
2. **Use Browser ID** - Different schedules for different browser profiles
3. **Batch Similar Tasks** - Group related tasks with similar schedules
4. **Use Descriptive Names** - Include time/frequency in task title
5. **Regular Review** - Periodically review and update scheduled tasks
6. **Backup Tasks** - Export site data to backup task configurations

---

## Related Documentation

- [Site Management](/documentation/site/site)
- [Form Fields](/documentation/form-fields/field)
- [Timer Action Field Type](/documentation/field-types/timer-action)
- [URL Open Field Type](/documentation/field-types/url-open)
- [Settings](/documentation/settings)

---

## Support and Help

If you need assistance with Task Scheduler:

- Check the [Log](/documentation/log) for detailed error information
- Visit our [Support Channels](/documentation/#need-help) for community assistance
- Report issues on our [GitHub Repository](https://github.com/jeevan-lal/excellent-data-filler-docs/issues)
