<script setup>
import { onMounted, onUnmounted } from 'vue'
import FieldAddressTable from '../components/FieldAddressTable.vue'
import FieldAdvanceXpath from '../components/FieldAdvanceXpath.vue'

onMounted(() => {
  document.body.classList.add('no-nav')

  var content = document.querySelector("div.VPContent")
  if (content) {
    content.style.paddingTop = "var(--vp-nav-height)"
    content.style.paddingLeft = "0px";
  }

  // Hide Right Side Bar
  var aside = document.querySelector("div.VPContent div.aside")
  if (aside) {
    aside.style.display = "none"
  }

  // Container
  var pageContent = document.querySelector("div.VPContent div.content-container")
  if (pageContent) {
    pageContent.style.maxWidth = "100%"
  }
})

onUnmounted(() => {
  document.body.classList.remove('no-nav')

  var content = document.querySelector("div.VPContent")
  if (content) {
    content.removeAttribute("style")
  }

  // Right Side Bar
  var aside = document.querySelector("div.VPContent div.aside")
  if (aside) {
    aside.removeAttribute("style")
  }
})
</script>

<style>
.no-nav .VPSidebar {
  display: none;
}
</style>

# Locate Element {#locate-element}

To automate data filling, element clicks, or scraping tasks, Excellent Data Filler requires precise DOM element addresses to identify target inputs, buttons, dropdowns, and text containers on a web page.

There are three primary methods used to locate any element on a webpage:

1. **Element ID**: The fastest and most direct locator when elements have unique, static HTML `id` attributes (e.g., `#full_name`).
2. **CSS Selector Query**: Versatile pattern matching based on HTML tags, class names, and attribute combinations (e.g., `input.form-control[name="email"]`).
3. **XPath Address**: Advanced XML path query language supporting bidirectional DOM traversal, text content matching, ancestor/child axes, and attribute negation (e.g., `//input[@name="email"]`, `//button[contains(text(),"Submit")]`).

::: tip Inspect Elements with One Click
You don't need to manually inspect or construct element selectors by hand. Use the built-in <img src="/svg/browser.svg" class="doc-icon" width="16" height="16" alt="Inspect Elements" /> [Inspect Elements Tool](/documentation/extension/context-menu#inspect-elements) (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>) or right-click any page element (<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> for Selector, <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd> for XPath) to automatically detect, test, and copy unique element addresses in real time.
:::

---

## Basic Query Reference {#basic-query}

Common CSS selector queries and equivalent XPath addresses for standard HTML input elements:

<FieldAddressTable/>

---

## Advanced XPath Reference {#advance-xpath}

Advanced XPath functions including `contains()`, `starts-with()`, boolean operators (`and` / `or`), DOM axis traversal (`parent::*`, `position()`), text matching, and attribute negation `not()`:

<FieldAdvanceXpath/>
