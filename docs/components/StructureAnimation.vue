<template>
  <div class="structure-diagram-container">
    <!-- Header Controls -->
    <div class="diagram-header">
      <div class="diagram-badge">
        <span class="pulse-dot"></span>
        <span>Interactive Architecture Map</span>
      </div>
      <div class="diagram-hint">Click any node to explore its hierarchy</div>
    </div>

    <!-- Interactive Visual Flow -->
    <div class="diagram-canvas">
      <!-- LEVEL 1: SITE ROOT -->
      <div class="node-card root-node" :class="{ active: selectedNode === 'site' }" @click="selectNode('site')">
        <div class="node-icon-wrap root-icon">
          <img src="/svg/globe.svg" class="node-icon" alt="Site" />
        </div>
        <div class="node-content">
          <div class="node-tag">Top-Level Container</div>
          <div class="node-title">Site Configuration</div>
          <div class="node-desc">Target domain/application scope, site settings, and environment variables</div>
        </div>
        <div class="node-indicator">
          <span class="active-badge" v-if="selectedNode === 'site'">Selected</span>
        </div>
      </div>

      <!-- Animated Trunk Connectors -->
      <svg class="flow-svg" viewBox="0 0 800 60" preserveAspectRatio="none">
        <defs>
          <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="var(--vp-c-brand-1)" stop-opacity="0.3" />
            <stop offset="50%" stop-color="var(--vp-c-brand-1)" stop-opacity="0.9" />
            <stop offset="100%" stop-color="var(--vp-c-brand-1)" stop-opacity="0.3" />
          </linearGradient>
        </defs>
        <!-- Center vertical feed -->
        <line x1="400" y1="0" x2="400" y2="30" stroke="var(--vp-c-brand-1)" stroke-width="2" />
        <!-- Horizontal distribution branch -->
        <line x1="100" y1="30" x2="700" y2="30" stroke="var(--vp-c-brand-1)" stroke-width="2" stroke-dasharray="4 4" class="animated-dash" />
        <!-- Drop lines to 4 pillars -->
        <line x1="100" y1="30" x2="100" y2="60" stroke="var(--vp-c-brand-1)" stroke-width="2" />
        <line x1="300" y1="30" x2="300" y2="60" stroke="var(--vp-c-brand-1)" stroke-width="2" />
        <line x1="500" y1="30" x2="500" y2="60" stroke="var(--vp-c-brand-1)" stroke-width="2" />
        <line x1="700" y1="30" x2="700" y2="60" stroke="var(--vp-c-brand-1)" stroke-width="2" />
      </svg>

      <!-- LEVEL 2: FOUR PRIMARY BRANCHES -->
      <div class="branches-grid">
        <!-- 1. Site Forms (Pages) -->
        <div class="branch-column" :class="{ active: selectedNode === 'forms' || selectedNode === 'fields' }">
          <div class="node-card branch-node" :class="{ active: selectedNode === 'forms' }" @click="selectNode('forms')">
            <div class="node-icon-wrap branch-icon form-icon">
              <img src="/svg/form.svg" class="node-icon" alt="Forms" />
            </div>
            <div class="node-title">Site Forms (Pages)</div>
            <div class="node-badge">Page Load Trigger</div>
            <div class="node-desc">URL matching (Full, Hostname, RegEx) and execution timing delays</div>
          </div>

          <!-- Vertical Connector to Fields -->
          <svg class="sub-connector-svg" viewBox="0 0 20 40">
            <line x1="10" y1="0" x2="10" y2="40" stroke="var(--vp-c-brand-1)" stroke-width="2" stroke-dasharray="3 3" class="animated-dash-vert" />
          </svg>

          <!-- Child: Form Fields -->
          <div class="node-card leaf-node" :class="{ active: selectedNode === 'fields' }" @click="selectNode('fields')">
            <div class="node-icon-wrap leaf-icon">
              <img src="/svg/code.svg" class="node-icon" alt="Fields" />
            </div>
            <div class="node-title">Form Fields</div>
            <div class="node-badge leaf-badge">DOM Interactors</div>
            <div class="node-desc">Selectors (CSS/XPath), default values, custom events, and response actions</div>
          </div>
        </div>

        <!-- 2. Segments -->
        <div class="branch-column" :class="{ active: selectedNode === 'segments' }">
          <div class="node-card branch-node" :class="{ active: selectedNode === 'segments' }" @click="selectNode('segments')">
            <div class="node-icon-wrap branch-icon segment-icon">
              <img src="/svg/system.svg" class="node-icon" alt="Segments" />
            </div>
            <div class="node-title">Segments</div>
            <div class="node-badge segment-badge">On-Demand Flow</div>
            <div class="node-desc">Reusable field routines triggered by name, loop, response action, or status bar</div>
          </div>
        </div>

        <!-- 3. Excel Spreadsheet / Google Sheets -->
        <div class="branch-column" :class="{ active: selectedNode === 'data' }">
          <div class="node-card branch-node" :class="{ active: selectedNode === 'data' }" @click="selectNode('data')">
            <div class="node-icon-wrap branch-icon excel-icon">
              <img src="/svg/excel.svg" class="node-icon" alt="Excel" />
            </div>
            <div class="node-title">Data Sources</div>
            <div class="node-badge excel-badge">.xlsx & Google Sheets</div>
            <div class="node-desc">Row-by-row batch data feeding values into mapped form fields</div>
          </div>
        </div>

        <!-- 4. Site Settings & Scraper Data -->
        <div class="branch-column" :class="{ active: selectedNode === 'settings' }">
          <div class="node-card branch-node" :class="{ active: selectedNode === 'settings' }" @click="selectNode('settings')">
            <div class="node-icon-wrap branch-icon settings-icon">
              <img src="/svg/settings.svg" class="node-icon" alt="Settings" />
            </div>
            <div class="node-title">Site Settings & Backup</div>
            <div class="node-badge settings-badge">Config & Export</div>
            <div class="node-desc">Site environment variables, column arrangement, and JSON backup/restore</div>
          </div>
        </div>
      </div>

      <!-- DETAILS DRAWER (DYNAMICALLY REACTIVE) -->
      <transition name="fade-slide">
        <div class="details-panel" v-if="activeDetails">
          <div class="details-header">
            <div class="details-title-group">
              <span class="details-prefix">{{ activeDetails.prefix }}</span>
              <h4 class="details-title">{{ activeDetails.title }}</h4>
            </div>
            <a :href="activeDetails.docLink" class="details-link">
              <span>Read Documentation</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <p class="details-summary">{{ activeDetails.summary }}</p>
          <div class="details-features">
            <div class="feature-item" v-for="(feat, i) in activeDetails.highlights" :key="i">
              <span class="check-bullet">✓</span>
              <span>{{ feat }}</span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedNode = ref('site')

const nodesData = {
  site: {
    prefix: 'Root Level',
    title: 'Site Container',
    docLink: '/documentation/site/site',
    summary: 'The top-level container encapsulating all configuration rules, automation forms, segments, data mappings, and credentials for a target web domain.',
    highlights: [
      'Organizes multiple form pages under a single application',
      'Configures site-wide global environment variables ($env.var$)',
      'Manages site-scoped Excel templates (.xlsx) and Google Sheet links',
      'One-click full site backup and migration export'
    ]
  },
  forms: {
    prefix: 'Pillar 1',
    title: 'Site Forms (Pages)',
    docLink: '/documentation/form/form',
    summary: 'Specific target URLs where automated form-filling triggers on page load or refresh. Each form contains page-level delays and field mappings.',
    highlights: [
      'Identified by target Page URL and flexible Match Types (Full, Pathname, Hostname, RegEx)',
      'Configurable timing delays before and after executing fields on the page',
      'Supports multiple sequential form pages within a single site',
      'Toggle active/inactive status per form without deleting configurations'
    ]
  },
  fields: {
    prefix: 'Leaf Element',
    title: 'Form Fields',
    docLink: '/documentation/form-fields/field',
    summary: 'Individual input and action elements targeted within a Form or Segment. Controls how data is populated, validated, and confirmed.',
    highlights: [
      'Supported selector locators: CSS Selectors, element ID, XPath, and JS Path',
      'Over 50+ specialized field handlers (Text, Select, File Upload, AI, Scraper, etc.)',
      'Dynamic fallback values: uses default text if Excel cell is empty',
      'Integrated Field Response Actions: execute segments or skip on success/failure'
    ]
  },
  segments: {
    prefix: 'Pillar 2',
    title: 'Segments (Reusable Routines)',
    docLink: '/documentation/segment',
    summary: 'Independent collections of fields that do not trigger on page load. Instead, they execute on demand by name whenever called by conditional logic or loops.',
    highlights: [
      'Executed by name from Field Response Actions, Loops, or the Status Bar',
      'Includes "View Field Element in Tab" targeting for inspecting and testing selectors',
      'Ideal for popups, modal confirmation dialogs, and repetitive table iterations',
      'Supports custom JSON parameters when called via Execute Segment'
    ]
  },
  data: {
    prefix: 'Pillar 3',
    title: 'Data Sources (Excel .xlsx / Google Sheets)',
    docLink: '/documentation/site/site-excel-template',
    summary: 'Batch data feeds that populate mapped form fields row by row across multi-entry automation runs.',
    highlights: [
      'Exclusively .xlsx spreadsheet file uploads supported',
      'Real-time cloud sync with Google Sheets (OAuth2 / Service Account)',
      'Automated template generator builds column headers matching field names',
      'Row indexing tracked via Status Bar and Extension Logs'
    ]
  },
  settings: {
    prefix: 'Pillar 4',
    title: 'Site Settings, Scraper & Backups',
    docLink: '/documentation/site/site-settings',
    summary: 'Site-level configuration flags, scraper data stores, and export formatting tools.',
    highlights: [
      '10 site-level toggle switches for granular execution control',
      'Site environment variables overriding or complementing global variables',
      'Custom column ordering for scraped data and Excel export files',
      'Clean JSON backup files ensuring portable migration across browsers'
    ]
  }
}

const activeDetails = computed(() => nodesData[selectedNode.value] || nodesData.site)

function selectNode(key) {
  selectedNode.value = key
}
</script>

<style scoped>
.structure-diagram-container {
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 16px;
  box-shadow: var(--vp-shadow-1);
}

.diagram-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.diagram-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border-radius: 9999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  box-shadow: 0 0 8px var(--vp-c-brand-1);
  animation: pulse-ring 2s infinite ease-in-out;
}

@keyframes pulse-ring {

  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.4);
    opacity: 0.6;
  }
}

.diagram-hint {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
}

/* Canvas & Nodes */
.diagram-canvas {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.node-card {
  background: var(--vp-c-bg-elv);
  border: 1.5px solid var(--vp-c-border);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}

.node-card:hover {
  transform: translateY(-2px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 20px -6px rgba(59, 130, 246, 0.25);
}

.node-card.active {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft), 0 8px 24px -4px rgba(59, 130, 246, 0.3);
  background: var(--vp-c-bg);
}

/* Root Node */
.root-node {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  width: 100%;
  max-width: 540px;
}

.node-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  flex-shrink: 0;
}

.root-icon {
  background: var(--vp-c-brand-soft);
}

.node-icon {
  width: 22px;
  height: 22px;
}

.node-content {
  flex: 1;
}

.node-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  letter-spacing: 0.04em;
  margin-bottom: 2px;
}

.node-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.node-desc {
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
  margin-top: 2px;
}

.active-badge {
  font-size: 0.72rem;
  font-weight: 700;
  background: var(--vp-c-brand-1);
  color: #ffffff;
  padding: 2px 8px;
  border-radius: 6px;
}

/* Connector SVGs */
.flow-svg {
  width: 100%;
  max-width: 820px;
  height: 50px;
  margin: 4px 0;
  overflow: visible;
}

.sub-connector-svg {
  width: 20px;
  height: 32px;
  margin: 2px auto;
  display: block;
}

.animated-dash {
  animation: dash-flow 1.5s linear infinite;
}

.animated-dash-vert {
  animation: dash-flow-vert 1.5s linear infinite;
}

@keyframes dash-flow {
  from {
    stroke-dashoffset: 8;
  }

  to {
    stroke-dashoffset: 0;
  }
}

@keyframes dash-flow-vert {
  from {
    stroke-dashoffset: 6;
  }

  to {
    stroke-dashoffset: 0;
  }
}

/* Branches Grid */
.branches-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;
}

.branch-column {
  display: flex;
  flex-direction: column;
}

.branch-node {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  height: 100%;
}

.branch-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
}

.form-icon {
  background: rgba(59, 130, 246, 0.15);
}

.segment-icon {
  background: rgba(168, 85, 247, 0.15);
}

.excel-icon {
  background: rgba(34, 197, 94, 0.15);
}

.settings-icon {
  background: rgba(245, 158, 11, 0.15);
}

.node-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
}

.segment-badge {
  color: #a855f7;
  background: rgba(168, 85, 247, 0.1);
}

.excel-badge {
  color: #22c55e;
  background: rgba(34, 197, 94, 0.1);
}

.settings-badge {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
}

/* Leaf Node (Fields) */
.leaf-node {
  padding: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  background: var(--vp-c-bg);
}

.leaf-icon {
  width: 32px;
  height: 32px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 6px;
}

.leaf-badge {
  color: var(--vp-c-brand-1);
}

/* Details Panel */
.details-panel {
  margin-top: 1.5rem;
  padding: 1.25rem 1.5rem;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-left: 4px solid var(--vp-c-brand-1);
  border-radius: 12px;
  width: 100%;
}

.details-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.details-prefix {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--vp-c-brand-1);
  letter-spacing: 0.04em;
}

.details-title {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.details-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: gap 0.2s ease;
}

.details-link:hover {
  gap: 9px;
  text-decoration: underline;
}

.details-summary {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0 0 1rem 0;
}

.details-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 0.6rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}

.check-bullet {
  color: var(--vp-c-brand-1);
  font-weight: 800;
  flex-shrink: 0;
}

/* Transitions */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

/* Responsive */
@media (max-width: 900px) {
  .branches-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .flow-svg {
    display: none;
  }

  .root-node {
    margin-bottom: 1rem;
  }
}

@media (max-width: 600px) {
  .branches-grid {
    grid-template-columns: 1fr;
  }

  .details-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
