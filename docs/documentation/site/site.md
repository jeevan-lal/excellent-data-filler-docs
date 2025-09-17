---
prev:
  text: "Structure"
  link: "/documentation/structure"
next:
  text: "Site Settings"
  link: "/documentation/site/site-settings"
---

# Site

A **Site** is the top-level container in Excellent Data Filler that represents a website or web application where you want to automate data entry tasks. It serves as an organizational unit that groups multiple related forms together under a single project.

## Overview

Sites act as the foundation of your automation projects, providing:

- **🏢 Project Organization** - Group related forms and workflows together
- **⚙️ Centralized Management** - Manage all forms for a website in one place
- **🔄 Workflow Management** - Coordinate complex multi-form processes

## Site Management Interface

The site management interface provides a comprehensive view of all your automation projects:

<img src="/image/site-01.png" alt="Site Management Interface">

## Creating a Site

There are two primary methods to create a new site in Excellent Data Filler:

### Method 1: Right-Click Context Menu (Recommended)

This is the fastest and most intuitive way to create a site:

1. **Navigate to Target Website** - Open the website where you want to automate forms
2. **Right-Click on Form** - Right-click anywhere on the form you want to automate
3. **Select "Insert Site"** - Choose the "Insert Site" option from the context menu
4. **Auto-Detection** - The extension will automatically detect the form and create a site
5. **Configuration** - Configure the site settings as needed

**Advantages:**

- ✅ Automatic form detection
- ✅ Pre-configured with current page URL
- ✅ Faster setup process
- ✅ Context-aware configuration

### Method 2: Manual Site Creation

For more control or when working with multiple sites:

1. **Open Extension Options** - Click on the extension icon and select "Options"
2. **Click "Insert a new Site"** - Find and click the "Insert a new Site" button
3. **Enter Site Details** - Fill in the required information:
   - **Site Title** - A descriptive name for your site
   - **Site Description** - Optional details about the site's purpose
4. **Configure Settings** - Set up site-specific configurations
5. **Save** - Click the "Save" button to create the site
6. **DONE** 🎉

<img src="/image/insert-site-manually-01.png" alt="Manual Site Creation Interface">

| Setting              | Description                     | Required |
| -------------------- | ------------------------------- | -------- |
| **Site Title**       | Descriptive name for the site   | ✅ Yes   |
| **Site Description** | Optional details about the site | ✅ Yes   |
| **Active Status**    | Enable/disable the site         | ✅ Yes   |

## Site Management Features

### 🎛️ Site Controls

#### Site Title

- **Purpose** - Identifies the site in your project list
- **Best Practice** - Use descriptive names like "Company Contact Forms" or "E-commerce Checkout"
- **Character Limit** - Maximum 100 characters recommended

#### Site Description

- **Purpose** - Provides additional context about the site's purpose

#### Site Active/Deactivate

- **Toggle Control** - Enable or disable the entire site
- **Use Cases**:
  - Temporarily pause automation

#### Edit Site

- **Modify Settings** - Update site configuration
- **Change Details** - Update title, description, and other settings
- **Insert Site Form** - Insert a site form

#### Duplicate Site

- **Create Copy** - Duplicate an existing site with all its forms

#### Copy Site ID

- **Unique Identifier** - Copy the site's unique ID
- **Use Cases**:
  - Insert a site form using site id with extension context menu option `Insert Form`

#### Delete Site

- **Permanent Removal** - Delete the site and all associated data
- **⚠️ Warning** - This action cannot be undone
- **Backup Recommended** - Export data before deletion

## Troubleshooting

### ❌ Site Creation Problems

**Issue:** Site not created after right-clicking
**Solution:**

- Ensure the extension is properly installed and enabled
- Check if the website allows right-click context menus
- Try the manual creation method instead
- Reload site then try again

## Next Steps

Once you've created your site, continue with:

- [Site Settings](/documentation/site/site-settings) - Configure advanced site options
- [Insert Site Form](/documentation/form/form#insert-site-form) - Add forms to your site
- [Form Fields Configuration](/documentation/form-fields/field#insert-field) - Set up individual form fields
- [Field Types Guide](/documentation/form-fields/field-types) - Learn about different field types

## Support and Help

If you encounter issues with site management:

- Check the [Log](/documentation/log) for detailed error information
- Review [Site Settings](/documentation/site/site-settings) for configuration help
- Visit our [Support Channels](/documentation/#need-help) for community assistance
- Report issues on our [GitHub Repository](https://github.com/jeevan-lal/excellent-data-filler-docs/issues)
