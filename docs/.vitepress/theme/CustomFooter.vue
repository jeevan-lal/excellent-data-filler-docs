<template>
  <!-- Full Rich Footer (Home Page Only) -->
  <footer v-if="isHome" class="custom-footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Col 1: Brand / Info -->
        <div class="footer-col footer-brand">
          <div class="brand-header">
            <img src="/192x192.png" alt="Excellent Data Filler Logo" class="brand-logo" />
            <div>
              <h3 class="brand-title">Excellent Data Filler</h3>
              <span class="version-badge">v4.13.2</span>
            </div>
          </div>
          <p class="brand-desc">
            Automate form filling, data extraction, and web workflows across browser forms with Excel integration and intelligent automation.
          </p>
        </div>

        <!-- Col 2: Resources -->
        <div class="footer-col">
          <h4 class="col-title">Resources</h4>
          <ul class="col-links">
            <li>
              <a href="https://deepwiki.com/jeevan-lal/excellent-data-filler-docs" target="_blank" rel="noopener noreferrer">
                DeepWiki Docs
              </a>
            </li>
            <li>
              <a href="/documentation/">
                Documentation
              </a>
            </li>
            <li>
              <a href="https://github.com/jeevan-lal/excellent-data-filler-docs/issues" target="_blank" rel="noopener noreferrer">
                Report Issues
              </a>
            </li>
            <li>
              <a href="/documentation/testing-site">
                Practice Form
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 3: Community -->
        <div class="footer-col">
          <h4 class="col-title">Community</h4>
          <ul class="col-links">
            <li>
              <a href="https://github.com/jeevan-lal/excellent-data-filler-docs/discussions" target="_blank" rel="noopener noreferrer">
                Discussion Forum
              </a>
            </li>
            <li>
              <a href="https://groups.google.com/g/excellent-data-filler" target="_blank" rel="noopener noreferrer">
                Google Group Chat
              </a>
            </li>
            <li>
              <a href="https://edfiller.in/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://edfiller.in/support" target="_blank" rel="noopener noreferrer">
                Support & Donation
              </a>
            </li>
          </ul>
        </div>

        <!-- Col 4: Follow Us -->
        <div class="footer-col">
          <h4 class="col-title">Follow Us</h4>
          <div class="social-icons">
            <!-- YouTube -->
            <a href="https://www.youtube.com/@ctechhindi" target="_blank" rel="noopener noreferrer" class="social-btn youtube" aria-label="YouTube" title="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <polygon points="10 15 15 12 10 9" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/ctechhindi/" target="_blank" rel="noopener noreferrer" class="social-btn instagram" aria-label="Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/ctechhindi" target="_blank" rel="noopener noreferrer" class="social-btn github" aria-label="GitHub" title="GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            <!-- Twitter / X -->
            <a href="https://twitter.com/ctechhindi" target="_blank" rel="noopener noreferrer" class="social-btn twitter" aria-label="Twitter / X" title="Twitter / X">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="footer-divider" />

      <!-- Secondary Bottom Bar -->
      <div class="footer-bottom">
        <p class="copyright-text">
          Copyright © 2021 - {{ currentYear }}
          <a href="https://ctechhindi.in/" target="_blank" rel="noopener noreferrer">C Tech Hindi</a>.
          All rights reserved.
        </p>
        <div class="footer-bottom-links">
          <a href="https://edfiller.in/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="https://edfiller.in/support" target="_blank" rel="noopener noreferrer">Support</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { frontmatter, page } = useData()
const isHome = computed(() => {
  return frontmatter.value.layout === 'home' || page.value.relativePath === 'index.md'
})
const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* --------------------------------------------------------------------------
   Full Footer (Home Page Only)
   -------------------------------------------------------------------------- */
.custom-footer {
  position: relative;
  background-color: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-border);
  padding: 48px 24px 32px 24px;
  color: var(--vp-c-text-2);
  transition: background-color 0.3s ease, border-color 0.3s ease;
  z-index: 10;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

@media (min-width: 640px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1.6fr 1fr 1fr 1fr;
    gap: 2rem;
  }
}

/* Brand Column */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.brand-logo {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.brand-title {
  font-family: var(--vp-font-family-heading);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
  line-height: 1.2;
}

.version-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  padding: 1px 8px;
  border-radius: 9999px;
  margin-top: 4px;
}

.brand-desc {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0;
  max-width: 340px;
}

/* Column Common Styles */
.col-title {
  font-family: var(--vp-font-family-heading);
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--vp-c-text-1);
  margin: 0 0 1.25rem 0;
}

.col-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.col-links a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 0.88rem;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;
}

.col-links a:hover {
  color: var(--vp-c-brand-1);
  transform: translateX(3px);
}

/* Social Buttons */
.social-icons {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  color: #ffffff;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.social-btn svg {
  width: 18px;
  height: 18px;
}

.social-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
}

.social-btn.youtube {
  background-color: #ef4444;
}

.social-btn.youtube:hover {
  background-color: #dc2626;
}

.social-btn.instagram {
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
}

.social-btn.github {
  background-color: #24292f;
}

.dark .social-btn.github {
  background-color: #334155;
}

.social-btn.github:hover {
  background-color: #0f172a;
}

.social-btn.twitter {
  background-color: #0284c7;
}

.social-btn.twitter:hover {
  background-color: #0369a1;
}

/* Divider */
.footer-divider {
  border: none;
  border-top: 1px solid var(--vp-c-border);
  margin: 2.5rem 0 1.5rem 0;
}

/* Footer Bottom */
.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
  }
}

.copyright-text {
  margin: 0;
}

.copyright-text a {
  color: var(--vp-c-text-1);
  font-weight: 600;
  text-decoration: none;
}

.copyright-text a:hover {
  text-decoration: underline;
  color: var(--vp-c-brand-1);
}

.footer-bottom-links {
  display: flex;
  gap: 1.25rem;
}

.footer-bottom-links a {
  color: var(--vp-c-text-3);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-bottom-links a:hover {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}
</style>
