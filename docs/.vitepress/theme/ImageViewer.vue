<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const activeImage = ref(null)
const imageAlt = ref('')

function openImage(img) {
  activeImage.value = img.src
  imageAlt.value = img.alt || ''
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

function closeImage() {
  activeImage.value = null
  imageAlt.value = ''
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

function handleKeydown(e) {
  if (e.key === 'Escape' && activeImage.value) {
    closeImage()
  }
}

function isZoomable(img) {
  if (!img) return false
  const src = img.getAttribute('src') || ''

  if (
    img.classList.contains('no-zoom') ||
    img.classList.contains('doc-icon') ||
    img.closest('.VPBadge') ||
    img.closest('.feature-icon-wrapper') ||
    img.closest('table') ||
    img.closest('a') ||
    src.includes('/svg/') ||
    src.includes('/logo/') ||
    src.includes('32x32') ||
    src.includes('16x16')
  ) {
    return false
  }

  // Check dimensions only if the image is actually loaded and has a measurable width.
  // When an image is still downloading on reload, width/naturalWidth is 0 and should NOT be skipped.
  const width = img.naturalWidth || img.clientWidth || img.width
  if (img.complete && width > 0 && width <= 48) {
    return false
  }

  return true
}

function handleDocumentClick(e) {
  const img = e.target && e.target.closest ? e.target.closest('.vp-doc img') : null
  if (!img) return
  if (isZoomable(img)) {
    e.stopPropagation()
    e.preventDefault()
    openImage(img)
  }
}

function handleMouseOver(e) {
  const img = e.target && e.target.closest ? e.target.closest('.vp-doc img') : null
  if (img) {
    img.style.cursor = isZoomable(img) ? 'zoom-in' : 'default'
  }
}

function bindImages() {
  if (typeof document === 'undefined') return
  const images = document.querySelectorAll('.vp-doc img')
  images.forEach(img => {
    if (!isZoomable(img)) {
      img.style.cursor = 'default'
      return
    }

    img.style.cursor = 'zoom-in'

    if (!img.complete) {
      img.addEventListener(
        'load',
        () => {
          img.style.cursor = isZoomable(img) ? 'zoom-in' : 'default'
        },
        { once: true }
      )
    }
  })
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown)
    document.addEventListener('click', handleDocumentClick, true)
    document.addEventListener('mouseover', handleMouseOver, { passive: true })
  }
  nextTick(bindImages)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown)
    document.removeEventListener('click', handleDocumentClick, true)
    document.removeEventListener('mouseover', handleMouseOver)
  }
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})

watch(
  () => route.path,
  () => {
    nextTick(() => {
      setTimeout(bindImages, 150)
    })
  }
)
</script>

<template>
  <Teleport to="body">
    <Transition name="image-fade">
      <div v-if="activeImage" class="vp-image-preview-overlay" @click="closeImage">
        <button class="vp-image-preview-close" @click="closeImage" aria-label="Close image preview">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="vp-image-preview-container" @click.stop="closeImage">
          <img :src="activeImage" :alt="imageAlt" class="vp-image-preview-img" />
          <p v-if="imageAlt" class="vp-image-preview-caption">{{ imageAlt }}</p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.vp-image-preview-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(5, 8, 15, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  cursor: zoom-out;
  padding: 24px;
}

.vp-image-preview-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 92vw;
  max-height: 92vh;
}

.vp-image-preview-img {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7);
  user-select: none;
  transform: scale(1);
}

.vp-image-preview-caption {
  margin-top: 14px;
  color: #f1f5f9;
  font-size: 0.88rem;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 6px 18px;
  border-radius: 9999px;
  backdrop-filter: blur(10px);
}

.vp-image-preview-close {
  position: absolute;
  top: 20px;
  right: 24px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.vp-image-preview-close:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.08);
}

/* Transitions */
.image-fade-enter-active,
.image-fade-leave-active {
  transition: opacity 0.25s ease;
}

.image-fade-enter-from,
.image-fade-leave-to {
  opacity: 0;
}

.image-fade-enter-active .vp-image-preview-img {
  animation: zoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes zoomIn {
  from {
    transform: scale(0.92);
    opacity: 0.5;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
