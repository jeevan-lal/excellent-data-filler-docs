# Element Change

On which element it is used, if that element **changes** then this Field Type returns **true**.

## Options

| Option                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Which DOM mutations should be reported to](#which-dom-mutations-should-be-reported-to)                                                            |
| [Timeout to Check Element Change (Seconds)](#timeout-to-check-element-change)                                                                      |
| [Whether the element is modified or not, do it in the background process](#whether-the-element-is-modified-or-not-do-it-in-the-background-process) |
| [Do you want to click on an element?](#do-you-want-to-click-on-an-element)                                                                         |
| [Enter Element Selector/Xpath](#enter-element-selector-xpath)                                                                                      |

## Which DOM mutations should be reported to

The part in which the change is taking place in the element is given here.

- attributes
- childList
- characterData
- subtree

## Timeout to Check Element Change

After completion of the time given in this, this field returns false. In this the time is given in **seconds**.

## Whether the element is modified or not, do it in the background process

By default it waits for the field element to change and the filler does not move forward until something changes in the element. But after turning on this option, it checks the process of element change in the **background** and Filler executes the next fields.

::: details After turning on this option, it checks the element change in the background, then how to check whether the element has changed or not?

In which next field you want to check whether the element has changed, you can use the option given below in the settings of the field in which you want to check.


[Wait until the response status of the given element change fields comes](/documentation/form-fields/field-settings#wait-until-the-response-status-of-the-given-element-change-fields-comes)
:::

## Do you want to click on an element?

This is a **switch field** that allows you to trigger a click action on a specific element before monitoring for changes. When enabled, the extension will click on the specified element and then wait for the DOM mutations to occur.

This is useful when:
- You need to trigger an action (like clicking a button) that causes the element to change
- The element change only occurs after user interaction
- You want to automate the click and monitor the result in a single field

## Enter Element Selector/Xpath

When the **"Do you want to click on an element?"** option is enabled, this field becomes available. Here you can specify the target element that should be clicked using either:

- **CSS Selector**: e.g., `#submitButton`, `.action-btn`, `button[type="submit"]`
- **XPath**: e.g., `//button[@id='submitButton']`, `//div[@class='action-btn']`

The extension will locate this element and click it before starting to monitor the element changes specified in the main field configuration.

## Tips

:::warning NOTE
If using this field type then turn off this field setting [Do not fill the Status Color, element of this field](/documentation/form-fields/field-settings#do-not-fill-the-status-color-element-of-this-field).
:::

:::warning NOTE
If the element changes before the extension's Element Change field type action takes place, the action on this field type will not be completed and your filler will also stop.
:::