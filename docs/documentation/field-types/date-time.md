# Date and Time

The Date and Time field type is used to handle date and time operations, formatting, and calculations. This field type provides several options for working with dates and times, including getting the current date and time, converting dates between different formats, adding time to a date, and subtracting time from a date.

[Date Format](https://day.js.org/docs/en/display/format)

## Field Types

The Date and Time field type supports several operations for handling dates and times:

| Field Type                                          | Description                             |
| --------------------------------------------------- | --------------------------------------- |
| [**Current Date and Time**](#current-date-and-time) | Get current date and time               |
| [**Change Date Format**](#change-date-format)       | Convert date from one format to another |
| [**Increase Date**](#increase-date)                 | Add time to a date                      |
| [**Decrease Date**](#decrease-date)                 | Subtract time from a date               |

## Current Date and Time

Get current date and time.

### Options

| Options                                           | Required |
| ------------------------------------------------- | -------- |
| [**Date and Time Format**](#date-and-time-format) | **Yes**  |

### Date and Time Format

Specify the format for the current date and time output. Select from predefined formats or enter a custom format.

## Change Date Format

Convert a date from one format to another format.

### Options

| Options                                         | Required |
| ----------------------------------------------- | -------- |
| [**Date Current Format**](#date-current-format) | **Yes**  |
| [**Date New Format**](#date-new-format)         | **Yes**  |

### Date Current Format

Specify the current format of the date that you want to convert. This should match the format of the input date.

### Date New Format

Specify the desired output format for the converted date.

:::info Usage Notes

- If you have given element query in this field then scrape date from element text.
- If you haven't provided an element query then you must specify date in the field value.
  :::

## Increase Date

Add a specified amount of time to a date.

### Options

| Options                                       | Required |
| --------------------------------------------- | -------- |
| [**Date Format**](#date-format)               | **Yes**  |
| [**Amount of Time Add**](#amount-of-time-add) | **Yes**  |
| [**Date Output Format**](#date-output-format) | **Yes**  |

### Date Format

Specify the format of the input date that you want to increase.

### Amount of Time Add

Specify how much time to add to the date:

- **Value**: Enter the numerical amount
- **Unit**: Select the time unit from the dropdown:
  - Day
  - Week
  - Month
  - Year
  - Hour
  - Minute
  - Second
  - Millisecond

### Date Output Format

Specify the format for the output date after adding time.

:::info Usage Notes

- If you have given element query in this field then scrape date from element text.
- If you haven't provided an element query then you must specify date in the field value.
  :::

## Decrease Date

Subtract a specified amount of time from a date.

### Options

| Options                                                     | Required |
| ----------------------------------------------------------- | -------- |
| [**Date Format**](#date-format)                             | **Yes**  |
| [**Amount of Time Subtracted**](#amount-of-time-subtracted) | **Yes**  |
| [**Date Output Format**](#date-output-format)               | **Yes**  |

### Date Format

Specify the format of the input date that you want to decrease.

### Amount of Time Subtracted

Specify how much time to subtract from the date:

- **Value**: Enter the numerical amount
- **Unit**: Select the time unit from the dropdown:
  - Day
  - Week
  - Month
  - Year
  - Hour
  - Minute
  - Second
  - Millisecond

### Date Output Format

Specify the format for the output date after subtracting time.

:::info Usage Notes

- If you have given element query in this field then scrape date from element text.
- If you haven't provided an element query then you must specify date in the field value.
  :::
