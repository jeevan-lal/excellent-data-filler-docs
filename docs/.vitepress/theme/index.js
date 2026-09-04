import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ImageViewer from './ImageViewer.vue'
import ScrollEnhancements from './ScrollEnhancements.vue'
import CustomFooter from './CustomFooter.vue'
import GoogleTranslate from './GoogleTranslate.vue'
import HeroFlowAnimation from './HeroFlowAnimation.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(HeroFlowAnimation),
      'nav-bar-content-after': () => h(GoogleTranslate),
      'layout-bottom': () => [h(ImageViewer), h(ScrollEnhancements), h(CustomFooter)]
    })
  }
}