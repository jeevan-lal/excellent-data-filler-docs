# 📋 Types of Field {#types-of-field}

This page provides a comprehensive overview of all available field types in Excellent Data Filler. Field types are categorized based on their functionality and complexity level.

## 🔹 Basic {#basic}

Essential field types for standard form interactions and data input.

- [**Text**](/documentation/field-types/text) - Single-line text input fields
- [**Select**](/documentation/field-types/select) - Dropdown selection with single choice
- [**Multiple Select**](/documentation/field-types/multiple-select) - Dropdown selection with multiple choices
- [**Checkbox (Multiple Selection)**](/documentation/field-types/checkbox) - Multiple checkbox options for selection
- [**Radio (Single Selection)**](/documentation/field-types/radio) - Radio button groups for single selection
- [**Date**](/documentation/field-types/date) - Date picker for date input
- [**Button**](/documentation/field-types/button) - Clickable button elements
- [**Upload File**](/documentation/field-types/upload-file) - File upload functionality
- [**Video**](/documentation/field-types/video) - Video element interactions

:::warning INFO
If using `jquery inputMask` text field then trigger only the `paste` event (if the value is not filled in the input).
:::

## 🌐 External {#external}

Advanced field types that work with external libraries and frameworks for enhanced user experience.

- [**Material Single Select**](/documentation/field-types/material-single-select) - Material Design single selection dropdown
- [**Material Multiple Select**](/documentation/field-types/material-multiple-select) - Material Design multiple selection dropdown
- [**Date Picker**](/documentation/field-types/date-picker) - Advanced date selection component
- [**Clock Picker**](/documentation/field-types/clock-picker) - Time selection with analog clock interface
- [**Digital Clock Picker**](/documentation/field-types/digital-clock-picker) - Digital time picker component
- [**Loop**](/documentation/field-types/loop) - Iterate through multiple elements or data sets
- [**Element Change**](/documentation/field-types/element-change) - Monitor and respond to element changes
- [**Request Monitor**](/documentation/field-types/request-monitor) - Track and monitor HTTP requests
- [**TinyMCE Editor**](/documentation/field-types/tinymce-editor) - Rich text editor integration
- [**CKEditor**](/documentation/field-types/ckeditor) - Advanced WYSIWYG editor integration
- [**Table Advance Options**](/documentation/field-types/table-advance-options) - Advanced table manipulation features
- [**Get TOTP Code**](/documentation/field-types/get-totp-code) - Get TOTP code from Google Authenticator

:::warning INFO
Material field type works on Material framework like **Vuetify, MUI, React Material, Angular Material**, etc.
:::

## ⚡ Advance {#advance}

Powerful field types for complex automation, scripting, and advanced form control.

- [**👩‍💻 Javascript Code**](/documentation/field-types/javascript-code) - Execute custom JavaScript code
- [**🚀 Function**](/documentation/functions#predefined-function) - Use predefined functions for data manipulation
- [**🔑 Keys**](/documentation/keys#special-key) - Simulate keyboard input and special keys
- [**🛑 Form Error Message**](/documentation/field-types/form-error-message) - Display custom error messages
- **✅ Current Entry as Saved** - Mark current Excel entry as completed
- **📃 Field Action Status Checker** - Check the status of field actions
- **⏭️ Next Excel Entry Exists** - Verify if next Excel entry is available
- [**🗃️ Execute Segment**](/documentation/field-types/execute-segment) - Execute a segment of the form
- [**➕ Set Environment**](/documentation/field-types/set-environment) - Set the environment of the form

## 🔍 Google Field {#google-field}

Field types specifically designed for Google Forms integration and compatibility.

- **Single Text** - Short text input fields
- **Long Text** - Multi-line text area fields
- **Choice (Radio)** - Single selection radio buttons
- **Select** - Dropdown selection menu
- **Multiple Checkboxes** - Multiple selection checkboxes
- **Choice Linear Scale (Radio)** - Rating scale with radio buttons
- **Multiple Choice Grid (Radio)** - Grid layout with radio button choices
- **Multiple Checkboxes Grid (Checkbox)** - Grid layout with checkbox options
- **Date/Time** - Combined date and time picker
- **Time/Duration** - Time duration input fields
- **File Upload** - File attachment functionality

## 🏢 Microsoft Field {#microsoft-field}

Field types optimized for Microsoft Forms and Office 365 integration.

- **Single Text** - Short text input fields
- **Long Text** - Multi-line text area fields
- **Choice (Radio)** - Single selection radio buttons
- **Multiple Checkboxes** - Multiple selection checkboxes
- **Dropdown** - Dropdown selection menu
- **Date Picker** - Calendar-based date selection
- **Rating** - Star or numeric rating system
- **Sort List** - Drag-and-drop list sorting
- **Matrix Radio Group** - Matrix layout with radio button groups
- **Net Promoter Score (Linear Scale Radio)** - NPS survey scale (0-10)

## 🍰 SurveyCake Field {#surveycake-field}

Field types specifically designed for SurveyCake form integration and compatibility.

- **Single Input** - Short text input fields
- **Long Input** - Multi-line text area fields
- **Digit Input** - Numeric input fields
- **Radio (Single Choice)** - Single selection radio buttons
- **Checkbox (Multiple Choice)** - Multiple selection checkboxes
- **Dropdown** - Dropdown selection menu
- **Date Picker** - Calendar-based date selection
- **Rating** - Star or numeric rating system
- **Ranking** - Drag-and-drop ranking system
- **Matrix Radio Group** - Matrix layout with radio button groups
- **Matrix Checkbox Group** - Matrix layout with checkbox groups
- **Slider** - Range slider input component

## 🕷️ Scraper Data {#scraper-data}

Field types for extracting and processing data from web pages and documents.

- **Fetch Text** - Extract plain text content from elements
- **Fetch HTML** - Extract HTML content from elements
- [**Scraping Data**](/documentation/field-types/scraper-data#scraping-data) - Advanced web scraping functionality
- **Scraping Page URL** - Extract current page URL
- **Fetch Table Data in Scraper Data (Vertical)** - Extract table data in vertical format
- **Fetch Table Data in the Response Excel (Horizontal)** - Extract table data in horizontal format
- [**Fetch Header-Value Data**](/documentation/field-types/scraper-data#fetch-header-value-data) - Extract key-value pairs from elements
- **Fetch Multiple Data (Vertical)** - Extract multiple data points in vertical format

## 🔧 Program Helper {#program-helper}

Basic automation field types for interacting with external applications and system functions.

- [**X-Focus Application Window**](/documentation/field-types/program-helper#x-focus-application-window) - Focus on specific application windows
- [**X-Click (Space Key)**](/documentation/field-types/program-helper#x-click-space-key) - Simulate space key press
- [**X-Paste Text**](/documentation/field-types/program-helper#x-paste-text) - Paste text to active application
- [**X-WinAlwaysOnTop (Activate)**](/documentation/field-types/program-helper#x-winalwaysontop-activate) - Set window to always stay on top
- [**X-WinAlwaysOnTop (Deactivate)**](/documentation/field-types/program-helper#x-winalwaysontop-deactivate) - Remove always-on-top window property
- [**X-KeyWait**](/documentation/field-types/program-helper#x-keywait) - Wait for specific key press

## ⚡ Program Helper - Advance {#program-helper-advance}

Advanced automation field types for complex system interactions and file operations.

- [**X-Send**](/documentation/field-types/program-helper#x-send) - Send keystrokes and commands to applications
- [**X-MouseClick**](/documentation/field-types/program-helper#x-mouseclick) - Simulate mouse clicks at specific coordinates
- [**X-ControlClick**](/documentation/field-types/program-helper#x-controlclick) - Click on specific control elements
- [**X-ImageSearch**](/documentation/field-types/program-helper#x-imagesearch) - Find and interact with images on screen
- [**X-FileGetSize**](/documentation/field-types/program-helper#x-filegetsize) - Get file size information
- [**X-FileExtension**](/documentation/field-types/program-helper#x-fileextension) - Get file extension information

## 🖼️ Image Actions {#image-actions}

Field types for processing, analyzing, and manipulating images and files.

- [**Get Image/File Base64 String**](/documentation/field-types/image-actions#get-image-file-base64-string) - Convert images/files to Base64 encoding
- [**Get Image Width**](/documentation/field-types/image-actions#get-image-width) - Extract image width in pixels
- [**Get Image Height**](/documentation/field-types/image-actions#get-image-height) - Extract image height in pixels
- [**Download Image/File**](/documentation/field-types/image-actions#download-image-file) - Download files from URLs

## 🌐 Browser Actions {#browser-actions}

Field types for controlling browser behavior, tabs, and web page interactions.

- [**Open a new Tab**](/documentation/field-types/browser-actions#open-a-new-tab) - Create and open new browser tabs
- [**Get Tab ID**](/documentation/field-types/browser-actions#get-tab-id) - Retrieve current tab identifier
- [**Get Tab Details**](/documentation/field-types/browser-actions#get-tab-details) - Retrieve specific details about a browser tab
- [**Capture Tab**](/documentation/field-types/browser-actions#capture-tab) - Take screenshots of browser tabs
- [**Update Tab**](/documentation/field-types/browser-actions#update-tab) - Modify tab properties and content
- [**Go Back to Previous Page**](/documentation/field-types/browser-actions#go-back-to-previous-page) - Navigate to previous page in history
- [**Go Forward to Next Page**](/documentation/field-types/browser-actions#go-forward-to-next-page) - Navigate to next page in history
- [**Check Downloads**](/documentation/field-types/browser-actions#check-downloads) - Monitor download status and progress
- [**Reload Tab**](/documentation/field-types/browser-actions#reload-tab) - Refresh current tab content
- [**Focus Tab**](/documentation/field-types/browser-actions#focus-tab) - Bring specific tab to focus
- [**Focus Window**](/documentation/field-types/browser-actions#focus-window) - Bring browser window to focus
- [**Close Browser Tab**](/documentation/field-types/browser-actions#close-browser-tab) - Close specific browser tabs
- [**Close Browser Window**](/documentation/field-types/browser-actions#close-browser-window) - Close browser windows
- [**Set Download Item File Name**](/documentation/field-types/browser-actions#set-download-item-file-name) - Customize download file names
- [**Download Item**](/documentation/field-types/browser-actions#download-item) - Download files from URLs
- [**Insert CSS**](/documentation/field-types/browser-actions#insert-css) - Inject custom CSS styles
- [**Set Local Data**](/documentation/field-types/browser-actions#set-local-data) - Store data in browser local storage
- [**Get Local Data**](/documentation/field-types/browser-actions#get-local-data) - Retrieve data from browser local storage
- [**Remove Local Data**](/documentation/field-types/browser-actions#remove-local-data) - Clear data from browser local storage

## 💬 Javascript Dialog {#javascript-dialog}

Field types for handling and interacting with JavaScript dialog boxes and popups.

- [**Alert Dialog**](/documentation/field-types/javascript-dialog#alert-dialog) - Display alert messages to users
- [**Confirm Dialog**](/documentation/field-types/javascript-dialog#confirm-dialog) - Show confirmation dialogs with Yes/No options
- [**Prompt Dialog**](/documentation/field-types/javascript-dialog#prompt-dialog) - Display input prompt dialogs
- [**Hide Alert Dialog**](/documentation/field-types/javascript-dialog#hide-alert-dialog) - Close or hide alert dialogs
- [**Get Alert Dialog Message**](/documentation/field-types/javascript-dialog#get-alert-dialog-message) - Extract text from alert dialogs
- [**Hide Confirm Dialog**](/documentation/field-types/javascript-dialog#hide-confirm-dialog) - Close or hide confirmation dialogs

## ⌨️ Javascript Events {#javascript-events}

Field types for handling and simulating JavaScript events and user interactions.

- [**Keyboard Event**](/documentation/field-types/javascript-events#keyboard-event) - Simulate keyboard events and key presses

## 📅 Date and Time {#date-and-time}

Field types for handling date and time operations, formatting, and calculations.

- [**Current Date and Time**](/documentation/field-types/date-time#current-date-and-time) - Get current system date and time
- [**Change Date Format**](/documentation/field-types/date-time#change-date-format) - Convert dates between different formats
- [**Increase Date**](/documentation/field-types/date-time#increase-date) - Add days, months, or years to dates
- [**Decrease Date**](/documentation/field-types/date-time#decrease-date) - Subtract days, months, or years from dates

## 📊 Extension Actions {#extension-actions}

Field types for direct interaction with Excel data, enabling powerful spreadsheet automation.

- [**Excel Row**](/documentation/field-types/extension-actions#excel-row) - Perform actions on individual Excel rows
- [**Excel Rows**](/documentation/field-types/extension-actions#excel-rows) - Perform bulk actions on multiple Excel rows
- [**Set Excel Column**](/documentation/field-types/extension-actions#set-excel-column) - Write data to specific Excel cells
- [**Get Excel Column**](/documentation/field-types/extension-actions#get-excel-column) - Read data from specific Excel cells
- [**Modify Excel Column**](/documentation/field-types/extension-actions#modify-excel-column) - Modify existing Excel cell values
- [**Refresh Excel Data**](/documentation/field-types/extension-actions#refresh-excel-data) - Reload Excel data in the extension

## 🧮 Math Actions {#math-actions}

Field types for performing mathematical calculations and operations on numeric data.

- [**Sum (+)**](/documentation/field-types/math-actions#sum) - Add multiple numeric values together
- [**Subtract (-)**](/documentation/field-types/math-actions#subtract) - Subtract one value from another
- [**Multiply (\*)**](/documentation/field-types/math-actions#multiply) - Multiply numeric values
- [**Divide (÷)**](/documentation/field-types/math-actions#divide-÷) - Divide one value by another
- [**Count**](/documentation/field-types/math-actions#count) - Count the number of items or elements
- [**Calculate Math Query**](/documentation/field-types/math-actions#calculate-math-query) - Execute complex mathematical expressions

## 🔧 Others {#others}

Miscellaneous field types for various utility functions, web interactions, and content manipulation.

- **Insert/Remove HTML** - Add or remove HTML content from pages
- [**URL Matching**](/documentation/field-types/url-matching) - Match and validate URL patterns
- [**URL Open**](/documentation/field-types/url-open) - Open URLs in new tabs or windows
- [**Send Request**](/documentation/field-types/send-request) - Send HTTP requests to external APIs
- [**Web Request Completed**](/documentation/field-types/web-request-completed) - Monitor request completion status
- [**Timer Action**](/documentation/field-types/timer-action) - Execute actions after specified time delays
- [**String Matching**](/documentation/field-types/string-matching) - Match and validate text patterns
- [**String Manipulation**](/documentation/field-types/string-manipulation) - Transform and process text strings
- [**Copy**](/documentation/field-types/copy) - Copy content to clipboard
- [**Save as PDF**](/documentation/field-types/save-as-pdf) - Convert pages or content to PDF format
- **Page Loading** - Monitor and respond to page load events
- **Toast Notification** - Display temporary notification messages
- [**Target Element For Print**](/documentation/field-types/target-element-for-print) - Print specific page elements
- [**Insert Iframe**](/documentation/field-types/insert-iframe) - Embed iframe content in pages
