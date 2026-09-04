<template>
  <div class="custom-translate-container" ref="containerRef">
    <!-- Trigger Button -->
    <button class="translate-trigger-btn" :class="{ 'is-active': isOpen }" @click="toggleDropdown" type="button" aria-label="Select Language">
      <svg class="globe-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span class="active-lang-text">{{ currentLang.native }}</span>
      <svg class="chevron-icon" :class="{ 'rotate': isOpen }" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>

    <!-- Custom Dropdown Panel -->
    <transition name="dropdown-fade">
      <div v-if="isOpen" class="translate-dropdown-menu">
        <!-- Search input -->
        <div class="search-box">
          <svg class="search-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input v-model="searchQuery" type="text" placeholder="Search language..." class="search-input" ref="searchInputRef" @click.stop />
        </div>

        <!-- Language options list -->
        <ul class="lang-list">
          <li v-for="lang in filteredLanguages" :key="lang.code" class="lang-item" :class="{ 'is-selected': currentLang.code === lang.code }" @click="selectLanguage(lang)">
            <div class="lang-info">
              <span class="lang-native">{{ lang.native }}</span>
              <span v-if="lang.native !== lang.name" class="lang-english">{{ lang.name }}</span>
            </div>
            <svg v-if="currentLang.code === lang.code" class="check-icon" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </li>
          <li v-if="filteredLanguages.length === 0" class="no-results">
            No language found
          </li>
        </ul>
      </div>
    </transition>

    <!-- Hidden native Google Translate mount point -->
    <div id="google_translate_element" aria-hidden="true"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const containerRef = ref(null)
const searchInputRef = ref(null)
const isOpen = ref(false)
const searchQuery = ref('')

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'ur', name: 'Urdu', native: 'اردو' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'de', name: 'German', native: 'Deutsch' },
  { code: 'ru', name: 'Russian', native: 'Русский' },
  { code: 'ja', name: 'Japanese', native: '日本語' },
  { code: 'zh-CN', name: 'Chinese', native: '简体中文' },
  { code: 'ar', name: 'Arabic', native: 'العربية' },
  { code: 'pt', name: 'Portuguese', native: 'Português' },
  { code: 'it', name: 'Italian', native: 'Italiano' },
  { code: 'id', name: 'Indonesian', native: 'Indonesia' },
  { code: 'tr', name: 'Turkish', native: 'Türkçe' },
  { code: 'ko', name: 'Korean', native: '한국어' },
  { code: 'vi', name: 'Vietnamese', native: 'Tiếng Việt' }
]

const currentLang = ref(languages[0])

const filteredLanguages = computed(() => {
  if (!searchQuery.value.trim()) return languages
  const q = searchQuery.value.toLowerCase().trim()
  return languages.filter(
    l => l.name.toLowerCase().includes(q) || l.native.toLowerCase().includes(q)
  )
})

function toggleDropdown() {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    searchQuery.value = ''
    nextTick(() => {
      searchInputRef.value?.focus()
    })
  }
}

function handleClickOutside(e) {
  if (containerRef.value && !containerRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

function selectLanguage(lang) {
  currentLang.value = lang
  isOpen.value = false

  if (lang.code === 'en') {
    // Reset to English
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`
  } else {
    // Set cookie for persistence
    const val = `/en/${lang.code}`
    document.cookie = `googtrans=${val}; path=/;`
    document.cookie = `googtrans=${val}; path=/; domain=${window.location.hostname}`
  }

  // Trigger Google Translate engine
  const select = document.querySelector('.goog-te-combo')
  if (select) {
    select.value = lang.code === 'en' ? '' : lang.code
    select.dispatchEvent(new Event('change'))
  } else {
    window.location.reload()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)

  // Detect existing selected language from cookie
  const match = document.cookie.match(/(^|;\s*)googtrans=\/en\/([^;]+)/)
  if (match && match[2]) {
    const found = languages.find(l => l.code === match[2])
    if (found) currentLang.value = found
  }

  // Initialize hidden Google Translate
  window.googleTranslateElementInit = () => {
    if (window.google && window.google.translate && window.google.translate.TranslateElement) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          autoDisplay: false
        },
        'google_translate_element'
      )
    }
  }

  if (!document.getElementById('google-translate-script')) {
    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.body.appendChild(script)
  } else if (window.google && window.google.translate) {
    window.googleTranslateElementInit()
  }
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* --------------------------------------------------------------------------
   Custom Navbar Dropdown Trigger
   -------------------------------------------------------------------------- */
.custom-translate-container {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: 0 4px 0 14px;
}

.translate-trigger-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-height: 36px;
  padding: 0 12px;
  border-radius: 9px;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  line-height: 1.4;
}

.translate-trigger-btn:hover,
.translate-trigger-btn.is-active {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
}

.globe-icon {
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.active-lang-text {
  max-width: 100px;
  white-space: nowrap;
  line-height: 1.4;
  padding: 2px 0;
  display: inline-block;
}

.chevron-icon {
  color: var(--vp-c-text-3);
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.chevron-icon.rotate {
  transform: rotate(180deg);
}

/* --------------------------------------------------------------------------
   Custom Dropdown Menu Panel
   -------------------------------------------------------------------------- */
.translate-dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  width: 256px;
  max-height: 380px;
  background-color: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  box-shadow: var(--vp-shadow-3);
  display: flex;
  flex-direction: column;
  z-index: 100;
  overflow: hidden;
  backdrop-filter: blur(12px);
}

/* Search Box */
.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg-soft);
}

.search-icon {
  color: var(--vp-c-text-3);
  flex-shrink: 0;
}

.search-input {
  width: 100%;
  border: none;
  background: transparent;
  color: var(--vp-c-text-1);
  font-size: 13px;
  outline: none;
  line-height: 1.4;
}

.search-input::placeholder {
  color: var(--vp-c-text-3);
}

/* Language List */
.lang-list {
  list-style: none;
  margin: 0;
  padding: 6px;
  overflow-y: auto;
  max-height: 300px;
  overscroll-behavior: contain;
}

.lang-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 12px;
  min-height: 40px;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  line-height: 1.5;
  box-sizing: border-box;
}

.lang-item:hover {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.lang-item.is-selected {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.lang-info {
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1.5;
}

.lang-native {
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  display: inline-block;
}

.lang-english {
  font-size: 12px;
  line-height: 1.5;
  color: var(--vp-c-text-3);
  display: inline-block;
}

.check-icon {
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.no-results {
  padding: 16px;
  text-align: center;
  font-size: 12px;
  color: var(--vp-c-text-3);
}

/* Dropdown Animation */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Mobile Responsiveness */
@media (max-width: 767px) {
  .custom-translate-container {
    margin: 0 6px 0 12px !important;
  }

  .translate-trigger-btn {
    width: 32px !important;
    height: 32px !important;
    min-height: 32px !important;
    padding: 0 !important;
    justify-content: center !important;
  }

  .active-lang-text,
  .chevron-icon {
    display: none !important;
  }
}
</style>

<style>
/* --------------------------------------------------------------------------
   Hide Ugly Google Translate Artifacts & Fix Layout
   -------------------------------------------------------------------------- */
#google_translate_element {
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
  width: 0 !important;
  height: 0 !important;
  overflow: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

body {
  top: 0px !important;
  position: static !important;
}

.goog-te-banner-frame.skiptranslate,
iframe.goog-te-banner-frame,
.goog-te-balloon-frame {
  display: none !important;
  visibility: hidden !important;
  height: 0 !important;
}

.goog-tooltip,
.goog-tooltip:hover {
  display: none !important;
}

.goog-text-highlight {
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
}
</style>
