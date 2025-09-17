# Javascript Code

Execute custom JavaScript code in any field using the powerful Monaco Editor. Create advanced automation scripts, manipulate page elements, and integrate with external APIs.

You can use JavaScript code in any field or set a field to **JavaScript Code** type only. We use [Monaco Editor](https://microsoft.github.io/monaco-editor/) for professional code editing experience.

```js
// Where your code is ending, add this line only then the form will run further.
$fns.return("1");
```

- You can set `default value` in the field type.

## How to open the editor?

Click on the `Action` button of the field. Image given below.

<img src="/image/js-code-01.png" width="300" height="300" alt="Javascript Code">

## Global Variable

Access entry data and predefined functions using global variables in your JavaScript code.

| Variable   | Type   | Description                  | Usage                  |
| ---------- | ------ | ---------------------------- | ---------------------- |
| **$entry** | Object | Current entry and Excel data | `console.log($entry);` |
| **$fns**   | Object | Predefined functions library | `console.log($fns);`   |

Use `$entry` variable in the javascript code for access entry and excel data.

```js
// ACCESS ENTRY DATA [OBJECT]
console.log($entry);

// PREDEFINE FUNCTIONS [OBJECT]
console.log($fns);

// [1]: STORE DATA IN THE SCRAPER EXCEL (PORTRAIT MODE)
// DATA TYPE: ARRAY
var response = { storeDataInScraper: [] };

// [2]: STORE DATA IN THE CURRENT ENTRY EXCEL ROW (LANDSCAPE MODE)
// DATA TYPE: OBJECT AND ALL OBJECT KEY NAME IS UNIQUE
var response = { storeDataInEntry: {} };

// [3] STORE DATA IN THE ACTIVE/CURRENT FIELD VALUE
var response = { storeDataInField: "String" };

// [4]: SKIP CURRENT FORM
var response = { skipForm: true };

// [5]: SKIP SEGMENT
var response = { skipSegment: true };

// [6]: STOP LOOP
var response = { loopStop: true };

// [7]: RETURN ERROR RESPONSE (BY DEFAULT SET SUCCESS RESPONSE)
var response = { status: false, message: "Error Message" };

// RETURN RESPONSE
$fns.return(JSON.stringify(response));
```

## Editor Shortcut Keys {#editor-shortcut-keys}

| Shortcut          | Action            | Description                    |
| ----------------- | ----------------- | ------------------------------ |
| `F11`             | Full Screen       | Toggle full-screen editor mode |
| `Ctrl + S`        | Save              | Save current code              |
| `Ctrl + Z`        | Word Wrap         | Toggle word wrapping           |
| `Shift + Alt + L` | Debug Console Log | Insert console.log statement   |

## Predefine Functions

Access powerful built-in functions through the `$fns` object.

### Event Functions {#event-functions}

| Function                  | Description                                  | Parameters                      |
| ------------------------- | -------------------------------------------- | ------------------------------- |
| **triggerEvent**          | Trigger DOM events on elements               | `element`, `eventArray`         |
| **triggerMouseEvent**     | Trigger mouse events on elements             | `element`, `eventArray`         |
| **wait**                  | Pause execution for specified milliseconds   | `milliseconds`                  |
| **trim**                  | Advanced text manipulation                   | `text`, `options`               |
| **elementExists**         | Check if element exists in DOM               | `selectorQuery`                 |
| **elementVisible**        | Check if element is visible                  | `selectorQuery`                 |
| **elementInvisible**      | Check if element is invisible                | `selectorQuery`                 |
| **checkElementVisible**   | Check element visibility with force option   | `selectorQuery`, `isForceCheck` |
| **checkElementInvisible** | Check element invisibility with force option | `selectorQuery`, `isForceCheck` |
| **checkElementExists**    | Check element existence with force option    | `selectorQuery`, `isForceCheck` |
| **randomHexColor**        | Generate random hex color                    | None                            |
| **getRandomString**       | Generate random string                       | `length`                        |
| **randomBoolean**         | Generate random boolean                      | None                            |
| **randomUniqueID**        | Generate random unique ID                    | `length`                        |
| **randomInteger**         | Generate random integer                      | `min`, `max`                    |
| **randomFloat**           | Generate random float                        | `min`, `max`, `fixed`           |

```js
// triggerEvent
await $fns.triggerEvent(element, ["change", "focus"]);

// triggerMouseEvent
await $fns.triggerMouseEvent(element, ["mousedown", "mouseup"]);

// wait
await $fns.wait(1000);

// trim
await $fns.trim(text, isRemoveAllSpace: Boolean, isLowerCase: Boolean, {
  isUpperCase: Boolean,
  isRemoveSpecialChar: Boolean,
  isRemoveExtraSpace: Boolean,
  replaceChar: Array[2]
});

// elementExists
$fns.elementExists(selectorQuery);

// elementVisible
$fns.elementVisible(selectorQuery);

// elementInvisible
$fns.elementInvisible(selectorQuery);

// checkElementVisible
$fns.checkElementVisible(selectorQuery, isForceCheck = false);

// checkElementInvisible
$fns.checkElementInvisible(selectorQuery, isForceCheck = false);

// checkElementExists
await $fns.checkElementExists(selectorQuery, isForceCheck = false);

// randomHexColor
await $fns.randomHexColor();

// getRandomString
await $fns.getRandomString(length: Number);

// randomBoolean
await $fns.randomBoolean();

// randomUniqueID
await $fns.randomUniqueID(length: Number);

// randomInteger
await $fns.randomInteger(min: Number, max: Number);

// randomFloat
await $fns.randomFloat(min: Number, max: Number, fixed: Number);
```

## Custom JavaScript Examples {#custom-javascript-examples}

### 🎚️ jQuery Slider Integration {#jquery-slider-integration}

Fill values in jQuery UI sliders programmatically.

**Reference:** https://jqueryui.com/slider/

```js
$slider = $(".bar");
$slider.slider("value", 100);
$slider.slider("option", "slide").apply($slider, [null, { value: $slider.slider("value") }]);
```

### 🔄 Override Existing JavaScript Code {#override-existing-javascript-code}

Modify or replace existing JavaScript code within the target website. Useful for changing button behavior, functions, or any code snippet on the page.

| Method       | Description                                     | Use Case                         |
| ------------ | ----------------------------------------------- | -------------------------------- |
| **Method 1** | Remove onclick attribute and add event listener | Simple button behavior changes   |
| **Method 2** | Remove element and inject new HTML              | Complete element replacement     |
| **Method 3** | Override JS code by script injection            | Function or variable replacement |

**Complete Implementation Example:**

```js
function submitAction() {
  alert("Submitted.");
}

function resetAction() {
  alert("Reset.");
}

/**
  [METHOD-01] If using `onclick` attribute in the element
*/
// var submitbtn = document.querySelector("#submit")
// if (submitbtn) {
//   submitbtn.removeAttribute('onclick');
//   submitbtn.addEventListener("click", submitAction)
// }

/**
  [METHOD-02] Remove Button and Inject New Button HTML
*/
// var submitbtn = document.querySelector("#submit")
// if (submitbtn) submitbtn.remove();
// var container = document.querySelector("#container")
// if (container) container.insertAdjacentHTML("afterbegin", '<button class="btn btn-success" type="submit" id="submit">Submit</button>')
// var submitbtn = document.querySelector("#submit")
// if (submitbtn) {
//   submitbtn.addEventListener("click", submitAction);
// }

/**
  [METHOD-03] Override JS Code
*/
var actualCode = `
  function submitAction() {
    alert("Submitted.")
  }
`;

var script = document.createElement("script");
script.textContent = actualCode;
(document.head || document.documentElement).appendChild(script);
script.remove();

// Return
$fns.return("1");
```

:::warning Important
Always test your JavaScript code in the browser console before implementing in production forms.
:::
