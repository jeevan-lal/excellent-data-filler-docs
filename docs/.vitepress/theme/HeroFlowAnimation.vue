<template>
  <div class="hero-flow-wrapper">
    <!-- Ambient Glow Backdrop -->
    <div class="glow-backdrop" aria-hidden="true"></div>

    <!-- Main Glass Card -->
    <div class="hero-flow-card">
      <!-- Top Window Titlebar -->
      <div class="card-titlebar">
        <div class="window-dots">
          <span class="dot dot-red"></span>
          <span class="dot dot-yellow"></span>
          <span class="dot dot-green"></span>
        </div>
        <div class="window-title">
          <svg class="bolt-icon" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" />
          </svg>
          <span>Excellent Data Filler — Live Automation</span>
        </div>
        <div class="status-badge">
          <span class="pulse-indicator"></span>
          <span class="status-text">Active (Row {{ activeRowIndex + 1 }}/{{ rows.length }})</span>
        </div>
      </div>

      <!-- Content Grid: Excel Source ➔ Engine ➔ Web Form -->
      <div class="card-body">
        <!-- Left: Excel Sheet Preview -->
        <div class="source-panel panel">
          <div class="panel-header">
            <div class="panel-icon excel-bg">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="16" y2="17" />
              </svg>
            </div>
            <div class="panel-title-group">
              <span class="panel-title">data_source.xlsx</span>
              <span class="panel-subtitle">Excel Spreadsheet</span>
            </div>
          </div>

          <div class="excel-grid">
            <div class="grid-header">
              <span class="col-head">Row</span>
              <span class="col-head">Name</span>
              <span class="col-head">Email</span>
              <span class="col-head">Role</span>
            </div>
            <div v-for="(row, idx) in rows" :key="idx" class="grid-row" :class="{ 'is-active-row': activeRowIndex === idx }">
              <span class="cell-index">{{ idx + 1 }}</span>
              <span class="cell-val">{{ row.name }}</span>
              <span class="cell-val email-cell">{{ row.email }}</span>
              <span class="cell-val">{{ row.role }}</span>
            </div>
          </div>
        </div>

        <!-- Center: Flow Streamer & Filler Engine -->
        <div class="stream-connector">
          <div class="pulse-line">
            <span class="particle particle-1"></span>
            <span class="particle particle-2"></span>
          </div>

          <!-- Central Extension Engine Hub -->
          <div class="engine-hub" title="Excellent Data Filler Engine">
            <div class="hub-radar"></div>
            <div class="hub-ring"></div>
            <div class="hub-icon-inner">
              <img src="/192x192.png" alt="Filler Engine" class="hub-logo" />
            </div>
          </div>

          <div class="pulse-line">
            <span class="particle particle-3"></span>
            <span class="particle particle-4"></span>
          </div>
        </div>

        <!-- Right: Target Web Form -->
        <div class="target-panel panel">
          <div class="panel-header">
            <div class="panel-icon web-bg">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div class="panel-title-group">
              <span class="panel-title">target-portal.com/form</span>
              <span class="panel-subtitle">Target Browser Form</span>
            </div>
          </div>

          <!-- Form Fields -->
          <div class="form-preview">
            <div class="form-field">
              <span class="field-label">Full Name</span>
              <div class="field-input filled">
                <span class="field-text">{{ currentRow.name }}</span>
                <span class="check-badge">✓</span>
              </div>
            </div>

            <div class="form-field">
              <span class="field-label">Email Address</span>
              <div class="field-input filled">
                <span class="field-text">{{ currentRow.email }}</span>
                <span class="check-badge">✓</span>
              </div>
            </div>

            <div class="form-field">
              <span class="field-label">Designation</span>
              <div class="field-input filled">
                <span class="field-text">{{ currentRow.role }}</span>
                <span class="check-badge">✓</span>
              </div>
            </div>

            <!-- Submit Button Trigger Simulation -->
            <div class="form-submit-row">
              <div class="submit-btn" :class="{ 'btn-submitted': submitFlash }">
                <span v-if="submitFlash">Auto-Submitted ✓</span>
                <span v-else>Auto-Filling...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Stats Metric Strip -->
      <div class="card-footer-strip">
        <div class="metric-item">
          <svg class="metric-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" />
          </svg>
          <span class="metric-label">Speed:</span>
          <span class="metric-value">0.12s / row</span>
        </div>
        <div class="metric-sep">•</div>
        <div class="metric-item">
          <svg class="metric-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span class="metric-label">Accuracy:</span>
          <span class="metric-value">100% Match</span>
        </div>
        <div class="metric-sep">•</div>
        <div class="metric-item">
          <svg class="metric-svg" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="17 1 21 5 17 9" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" />
            <polyline points="7 23 3 19 7 15" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" />
          </svg>
          <span class="metric-label">Batch:</span>
          <span class="metric-value">Row Cycling</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const rows = [
  { name: 'Rajesh Kumar', email: 'rajesh@work.in', role: 'Team Lead' },
  { name: 'Sarah Connor', email: 'sarah@cyber.io', role: 'Security Eng.' },
  { name: 'Amit Sharma', email: 'amit@design.com', role: 'Product UI' },
  { name: 'Elena Rostova', email: 'elena@data.tech', role: 'Data Analyst' }
]

const activeRowIndex = ref(0)
const submitFlash = ref(false)
let timer = null

const currentRow = computed(() => rows[activeRowIndex.value])

onMounted(() => {
  timer = setInterval(() => {
    // 1. Submit flash
    submitFlash.value = true

    setTimeout(() => {
      submitFlash.value = false
      // 2. Advance to next row
      activeRowIndex.value = (activeRowIndex.value + 1) % rows.length
    }, 900)
  }, 3200)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style scoped>
/* --------------------------------------------------------------------------
   Hero Flow Animation Container & Ambient Glow
   -------------------------------------------------------------------------- */
.hero-flow-wrapper {
  position: relative;
  width: 100%;
  max-width: 540px;
  margin: 0 0 0 auto;
  user-select: none;
}

.glow-backdrop {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  background: radial-gradient(circle,
      rgba(99, 102, 241, 0.35) 0%,
      rgba(168, 85, 247, 0.2) 40%,
      transparent 70%);
  filter: blur(40px);
  z-index: 0;
  pointer-events: none;
  animation: pulse-glow 6s ease-in-out infinite alternate;
}

@keyframes pulse-glow {
  0% {
    transform: translate(-50%, -50%) scale(0.92);
    opacity: 0.7;
  }

  100% {
    transform: translate(-50%, -50%) scale(1.08);
    opacity: 1;
  }
}

/* --------------------------------------------------------------------------
   Glass Card
   -------------------------------------------------------------------------- */
.hero-flow-card {
  position: relative;
  z-index: 1;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 18px;
  box-shadow:
    0 18px 45px -10px rgba(99, 102, 241, 0.22),
    0 2px 10px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
}

.hero-flow-card:hover {
  transform: translateY(-3px);
  box-shadow:
    0 24px 50px -10px rgba(99, 102, 241, 0.3),
    0 4px 15px rgba(0, 0, 0, 0.08);
}

/* --------------------------------------------------------------------------
   Titlebar
   -------------------------------------------------------------------------- */
.card-titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-border);
  font-size: 11px;
}

.window-dots {
  display: flex;
  gap: 5px;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.dot-red {
  background-color: #ef4444;
}

.dot-yellow {
  background-color: #f59e0b;
}

.dot-green {
  background-color: #10b981;
}

.window-title {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  letter-spacing: -0.01em;
}

.bolt-icon {
  color: var(--vp-c-brand-1);
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.28);
  padding: 2px 8px;
  border-radius: 9999px;
  color: #10b981;
  font-weight: 600;
  font-size: 10px;
}

.pulse-indicator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10b981;
  box-shadow: 0 0 6px #10b981;
  animation: blink 1.6s infinite;
}

@keyframes blink {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }
}

/* --------------------------------------------------------------------------
   Body: Two Panels & Flow Stream
   -------------------------------------------------------------------------- */
.card-body {
  display: flex;
  align-items: stretch;
  padding: 14px;
  gap: 8px;
  background: var(--vp-c-bg);
}

@media (max-width: 580px) {
  .card-body {
    flex-direction: column;
    gap: 12px;
  }
}

.panel {
  flex: 1;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.panel-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--vp-c-border);
}

.panel-icon {
  width: 26px;
  height: 26px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.excel-bg {
  background: rgba(16, 185, 129, 0.14);
  color: #10b981;
}

.web-bg {
  background: rgba(99, 102, 241, 0.14);
  color: var(--vp-c-brand-1);
}

.panel-title-group {
  display: flex;
  flex-direction: column;
}

.panel-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.2;
}

.panel-subtitle {
  font-size: 9px;
  color: var(--vp-c-text-3);
  line-height: 1.2;
}

/* --------------------------------------------------------------------------
   Excel Grid Preview
   -------------------------------------------------------------------------- */
.excel-grid {
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 10px;
  font-family: var(--vp-font-family-mono);
}

.grid-header {
  display: grid;
  grid-template-columns: 20px 1fr 1fr 1fr;
  padding: 3px 4px;
  font-weight: 700;
  color: var(--vp-c-text-3);
  border-bottom: 1px solid var(--vp-c-border);
}

.grid-row {
  display: grid;
  grid-template-columns: 20px 1fr 1fr 1fr;
  padding: 4px;
  border-radius: 5px;
  color: var(--vp-c-text-2);
  transition: all 0.25s ease;
  white-space: nowrap;
  overflow: hidden;
}

.grid-row.is-active-row {
  background: rgba(16, 185, 129, 0.15);
  color: var(--vp-c-text-1);
  font-weight: 600;
  border-left: 3px solid #10b981;
  transform: scale(1.02);
  box-shadow: 0 2px 6px rgba(16, 185, 129, 0.12);
}

.cell-index {
  color: var(--vp-c-text-3);
}

.cell-val {
  overflow: hidden;
  text-overflow: ellipsis;
}

.email-cell {
  opacity: 0.85;
}

/* --------------------------------------------------------------------------
   Center Stream Connector
   -------------------------------------------------------------------------- */
.stream-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 54px;
  flex-shrink: 0;
  gap: 6px;
  position: relative;
}

@media (max-width: 580px) {
  .stream-connector {
    flex-direction: row;
    width: 100%;
    height: 36px;
  }
}

.pulse-line {
  position: relative;
  width: 2px;
  height: 24px;
  background: linear-gradient(to bottom, #10b981, var(--vp-c-brand-1));
  border-radius: 2px;
  overflow: hidden;
}

@media (max-width: 580px) {
  .pulse-line {
    width: 32px;
    height: 2px;
    background: linear-gradient(to right, #10b981, var(--vp-c-brand-1));
  }
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 0 6px #6366f1;
}

.particle-1 {
  animation: stream-down 1.4s infinite linear;
}

.particle-2 {
  animation: stream-down 1.4s infinite 0.7s linear;
}

.particle-3 {
  animation: stream-down 1.4s infinite 0.35s linear;
}

.particle-4 {
  animation: stream-down 1.4s infinite 1.05s linear;
}

@keyframes stream-down {
  0% {
    top: -4px;
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  100% {
    top: 100%;
    opacity: 0;
  }
}

.engine-hub {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
}

.hub-radar {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.28) 0%, transparent 70%);
  animation: hub-radar-pulse 2.6s infinite ease-out;
}

@keyframes hub-radar-pulse {
  0% {
    transform: scale(0.85);
    opacity: 0.9;
  }

  50% {
    transform: scale(1.3);
    opacity: 0.2;
  }

  100% {
    transform: scale(0.85);
    opacity: 0.9;
  }
}

.hub-ring {
  position: absolute;
  inset: 1px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, var(--vp-c-brand-1), #a855f7, #10b981, var(--vp-c-brand-1));
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 2.5px), #fff calc(100% - 2px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 2.5px), #fff calc(100% - 2px));
  animation: rotate-hub-ring 4s linear infinite;
  box-shadow: 0 0 14px rgba(99, 102, 241, 0.5);
}

.hub-ring::after {
  content: '';
  position: absolute;
  top: -1px;
  left: 50%;
  width: 6px;
  height: 6px;
  margin-left: -3px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0 0 10px 2px var(--vp-c-brand-1);
}

@keyframes rotate-hub-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.hub-icon-inner {
  position: relative;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 16px rgba(99, 102, 241, 0.35);
  z-index: 2;
  transition: transform 0.2s ease;
}

.hub-logo {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  object-fit: contain;
}

/* --------------------------------------------------------------------------
   Target Form Preview
   -------------------------------------------------------------------------- */
.form-preview {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.field-label {
  font-size: 9px;
  font-weight: 600;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.field-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
  padding: 4px 7px;
  font-size: 10.5px;
  color: var(--vp-c-text-1);
  transition: border-color 0.25s ease, background 0.25s ease;
}

.field-input.filled {
  border-color: rgba(16, 185, 129, 0.4);
}

.field-text {
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.check-badge {
  color: #10b981;
  font-weight: 700;
  font-size: 11px;
  margin-left: 4px;
  animation: pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes pop-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.form-submit-row {
  margin-top: 4px;
}

.submit-btn {
  width: 100%;
  text-align: center;
  background: var(--vp-c-brand-1);
  color: #ffffff;
  padding: 5px;
  border-radius: 6px;
  font-size: 10.5px;
  font-weight: 600;
  transition: all 0.25s ease;
}

.submit-btn.btn-submitted {
  background: #10b981;
  transform: scale(0.98);
}

/* --------------------------------------------------------------------------
   Card Bottom Metric Strip
   -------------------------------------------------------------------------- */
.card-footer-strip {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 12px;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-border);
  font-size: 10px;
  color: var(--vp-c-text-2);
}

.metric-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.metric-svg {
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.metric-label {
  color: var(--vp-c-text-3);
}

.metric-value {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.metric-sep {
  color: var(--vp-c-divider);
}

@media (max-width: 480px) {

  .metric-item:last-child,
  .metric-sep:last-of-type {
    display: none;
  }
}
</style>
