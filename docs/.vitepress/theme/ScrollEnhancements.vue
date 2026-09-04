<template>
  <div class="scroll-enhancements" aria-hidden="true">
    <!-- Reading Progress Bar -->
    <div class="reading-progress-bar" :style="{ width: `${progress}%`, opacity: progress > 0 ? 1 : 0 }" />

    <!-- Floating Back to Top Button -->
    <Transition name="fade-slide">
      <button v-if="showBackToTop" class="back-to-top-btn" type="button" title="Back to top" aria-label="Back to top" @click="scrollToTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const progress = ref(0)
const showBackToTop = ref(false)

let isHoveringAside = false
let asideObserver = null
let scrollTimeout = null
let lastScrollSync = 0

// --------------------------------------------------------------------------
// Reading Progress & Back to Top
// --------------------------------------------------------------------------
const updateScroll = () => {
  if (typeof window === 'undefined') return
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

  if (docHeight > 0) {
    const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
    progress.value = Math.round(pct * 10) / 10
  } else {
    progress.value = 0
  }

  showBackToTop.value = scrollTop > 300

  // If user scrolls to top, reset right sidebar scroll position
  if (scrollTop < 30) {
    const asideContainer = document.querySelector('.aside-container')
    if (asideContainer && asideContainer.scrollTop > 0 && !isHoveringAside) {
      asideContainer.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Throttled sync of right sidebar while scrolling
  syncAsideScrollThrottled()
}

const scrollToTop = () => {
  if (typeof window === 'undefined') return
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// --------------------------------------------------------------------------
// Right Sidebar (Aside Outline) Active Heading Auto-Scroll
// --------------------------------------------------------------------------
const syncAsideScroll = (targetLink) => {
  if (typeof window === 'undefined' || isHoveringAside) return

  const asideContainer = document.querySelector('.aside-container')
  if (!asideContainer) return

  // Check if aside is displayed (hidden on screen width < 1280px)
  const asideStyle = window.getComputedStyle(asideContainer)
  if (asideStyle.display === 'none' || asideStyle.visibility === 'hidden') return

  const activeLink = targetLink || asideContainer.querySelector('.outline-link.active')
  if (!activeLink) return

  const containerRect = asideContainer.getBoundingClientRect()
  const linkRect = activeLink.getBoundingClientRect()

  // Comfortable visible viewport zone in aside container:
  // Top boundary clears navbar and "On this page" title (~120px)
  // Bottom boundary clears bottom curtain gradient (~60px)
  const minTop = containerRect.top + 120
  const maxBottom = containerRect.bottom - 60

  if (linkRect.top < minTop) {
    // Active item is above visible area -> scroll up
    const diff = minTop - linkRect.top
    asideContainer.scrollBy({
      top: -diff - 24,
      behavior: 'smooth'
    })
  } else if (linkRect.bottom > maxBottom) {
    // Active item is below visible area -> scroll down
    const diff = linkRect.bottom - maxBottom
    asideContainer.scrollBy({
      top: diff + 24,
      behavior: 'smooth'
    })
  }

  // Align marker to active item
  updateMarkerPosition(activeLink)
}

const updateMarkerPosition = (targetLink) => {
  if (typeof window === 'undefined') return
  const activeLink = targetLink || document.querySelector('.VPDocAsideOutline .outline-link.active')
  if (!activeLink) return

  const outline = activeLink.closest('.VPDocAsideOutline')
  if (!outline) return

  const marker = outline.querySelector('.outline-marker')
  const content = outline.querySelector('.content')
  if (!marker || !content) return

  const contentRect = content.getBoundingClientRect()
  const linkRect = activeLink.getBoundingClientRect()
  const markerHeight = marker.offsetHeight || 18

  // Calculate pixel-perfect vertical center alignment with active link
  const targetTop = (linkRect.top - contentRect.top) + (linkRect.height - markerHeight) / 2
  marker.style.top = `${Math.round(targetTop)}px`
}

const syncAsideScrollThrottled = () => {
  const now = Date.now()
  if (now - lastScrollSync > 120) {
    lastScrollSync = now
    syncAsideScroll()
  } else {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      lastScrollSync = Date.now()
      syncAsideScroll()
    }, 120)
  }
}

const setupAsideSync = () => {
  if (typeof window === 'undefined') return

  const asideContainer = document.querySelector('.aside-container')
  if (!asideContainer) return

  // Pause auto-scroll when user hovers over aside so manual scroll works freely
  asideContainer.onmouseenter = () => { isHoveringAside = true }
  asideContainer.onmouseleave = () => { isHoveringAside = false }

  // Observe active class mutations on outline links
  if (asideObserver) {
    asideObserver.disconnect()
    asideObserver = null
  }

  const outline = document.querySelector('.VPDocAsideOutline') || asideContainer
  asideObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const target = mutation.target
        if (target && target.classList && target.classList.contains('outline-link') && target.classList.contains('active')) {
          updateMarkerPosition(target)
          syncAsideScroll(target)
          break
        }
      }
    }
  })

  asideObserver.observe(outline, {
    subtree: true,
    attributes: true,
    attributeFilter: ['class']
  })

  // Initial check after rendering
  setTimeout(() => {
    updateMarkerPosition()
    syncAsideScroll()
  }, 350)
}

watch(() => route.path, () => {
  nextTick(() => {
    setTimeout(setupAsideSync, 300)
  })
})

onMounted(() => {
  window.addEventListener('scroll', updateScroll, { passive: true })
  updateScroll()
  setTimeout(setupAsideSync, 300)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
  if (asideObserver) {
    asideObserver.disconnect()
    asideObserver = null
  }
  clearTimeout(scrollTimeout)
})
</script>

<style scoped>
/* Reading Progress Bar */
.reading-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand-1, #6366f1), var(--vp-c-brand-2, #4f46e5), #a855f7);
  z-index: 9999;
  transition: width 0.1s linear, opacity 0.2s ease;
  pointer-events: none;
  box-shadow: 0 0 8px rgba(99, 102, 241, 0.4);
}

/* Floating Back to Top Button */
.back-to-top-btn {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg-elv, #ffffff);
  color: var(--vp-c-text-1, #0f172a);
  border: 1px solid var(--vp-c-border, rgba(226, 232, 240, 0.8));
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 90;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  outline: none;
}

.back-to-top-btn:hover {
  background: var(--vp-c-brand-1, #6366f1);
  color: #ffffff;
  border-color: var(--vp-c-brand-1, #6366f1);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.35);
}

.back-to-top-btn:active {
  transform: translateY(0);
}

/* Smooth Fade and Slide-up Transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.9);
}

@media (max-width: 768px) {
  .back-to-top-btn {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
}
</style>
