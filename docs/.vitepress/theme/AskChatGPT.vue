<script setup>
import { computed } from 'vue';
import { useRoute } from 'vitepress';

const props = defineProps({ compact: { type: Boolean, default: false } });
const route = useRoute();

const chatgptUrl = computed(() => {
  const path = route?.path || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const pageUrl = `https://docs.edfiller.in${path}`;
  const q = `Explain this Excellent Data Filler documentation page in simple words: ${pageUrl}. Summarize key steps and give an example.`;
  return `https://chatgpt.com/?q=${encodeURIComponent(q)}`;
});

function openChatGPT(e) {
  e.preventDefault();
  window.open(chatgptUrl.value, '_blank', 'noopener');
}
</script>

<template>
  <div v-if="compact" class="ask-chatgpt-top">
    <a :href="chatgptUrl" target="_blank" rel="noopener" class="ask-chatgpt-nav" title="Ask ChatGPT about this page" @click="openChatGPT">
      <img src="/svg/chat.svg" width="16" height="16" alt="Ask ChatGPT" />
      <span>Ask AI</span>
    </a>
  </div>
  <div v-else class="ask-chatgpt-wrap">
    <a :href="chatgptUrl" target="_blank" rel="noopener" class="ask-chatgpt" title="Ask ChatGPT about this page" @click="openChatGPT">
      <img src="/svg/chat.svg" width="16" height="16" alt="Chat" />
      Explain this page with ChatGPT
    </a>
    <span class="ask-chatgpt-hint">Opens ChatGPT with this page pre-filled</span>
  </div>
</template>

<style scoped>
.ask-chatgpt-wrap {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin: 1.5rem 0 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
}
.ask-chatgpt {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  text-decoration: none;
  transition: all 0.2s;
}
.ask-chatgpt:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
}
.ask-chatgpt-hint {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
}
.ask-chatgpt-top {
  position: relative;
  height: 0;
  z-index: 10;
}
.ask-chatgpt-nav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  height: 32px;
  padding: 0 0.7rem;
  position: absolute;
  top: 4px;
  right: 0;
  border: 1px solid var(--vp-c-border);
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  pointer-events: auto;
  z-index: 10;
  text-decoration: none;
  transition: all 0.2s;
}
.ask-chatgpt-nav:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}
</style>
