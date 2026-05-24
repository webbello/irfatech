<template>
  <div class="scene">
    <div class="layout" ref="layoutRef">

      <!-- Left column -->
      <div class="col-side">
        <div
          v-for="mod in leftModules" :key="mod.id"
          :id="mod.id"
          class="module"
          :class="mod.floatClass"
          @mouseenter="hoverModule(mod.id)"
          @mouseleave="hoverModule(null)"
        >
          <div class="module-icon" :class="mod.iconClass">
            <component :is="mod.icon" />
          </div>
          <span class="module-label">{{ mod.label }}</span>
        </div>
      </div>

      <!-- Dashboard center -->
      <div class="dashboard-wrap" ref="dashboardRef">
        <div class="dashboard">
          <div class="dash-header">
            <span class="dash-dot" style="background:#ef4444"></span>
            <span class="dash-dot" style="background:#eab308"></span>
            <span class="dash-dot" style="background:#22c55e"></span>
            <span class="dash-title">Dashboard</span>
          </div>

          <div style="position:relative">
            <div class="dash-sidebar">
              <div v-for="i in 8" :key="i" class="side-dot"></div>
            </div>

            <div class="dash-body">
              <!-- Stat cards -->
              <div class="stat-row">
                <div v-for="stat in stats" :key="stat.label" class="stat-card">
                  <div class="stat-label">{{ stat.label }}</div>
                  <div class="stat-value" :style="stat.valueStyle">{{ stat.value }}</div>
                  <div class="stat-badge" :class="stat.badgeClass">{{ stat.badge }}</div>
                </div>
              </div>

              <!-- Charts -->
              <div class="chart-area">
                <div class="chart-box">
                  <div class="chart-box-title">Sales Overview</div>
                  <svg viewBox="0 0 160 60" preserveAspectRatio="none" style="width:100%;height:56px">
                    <defs>
                      <linearGradient id="areag" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#10b981" stop-opacity="0.35"/>
                        <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
                      </linearGradient>
                    </defs>
                    <path d="M0 50 L20 44 L40 42 L55 38 L70 40 L85 30 L100 26 L115 20 L130 14 L145 9 L160 5 L160 60 L0 60Z" fill="url(#areag)"/>
                    <path class="chart-line"
                      d="M0 50 L20 44 L40 42 L55 38 L70 40 L85 30 L100 26 L115 20 L130 14 L145 9 L160 5"
                      fill="none" stroke="#10b981" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div class="chart-box">
                  <div class="chart-box-title">Top Products</div>
                  <div class="donut-row">
                    <svg width="48" height="48" viewBox="0 0 50 50" style="flex-shrink:0">
                      <circle cx="25" cy="25" r="18" fill="none" class="donut-track" stroke-width="8"/>
                      <circle class="donut-arc donut-arc-1" cx="25" cy="25" r="18" fill="none"
                        stroke="#10b981" stroke-width="8" stroke-dasharray="60 53" stroke-dashoffset="113"
                        stroke-linecap="round" transform="rotate(-90 25 25)"/>
                      <circle class="donut-arc donut-arc-2" cx="25" cy="25" r="18" fill="none"
                        stroke="#38bdf8" stroke-width="8" stroke-dasharray="35 78" stroke-dashoffset="53"
                        stroke-linecap="round" transform="rotate(-90 25 25)"/>
                      <circle class="donut-arc donut-arc-3" cx="25" cy="25" r="18" fill="none"
                        stroke="#a78bfa" stroke-width="8" stroke-dasharray="18 95"
                        stroke-linecap="round" transform="rotate(85 25 25)"/>
                    </svg>
                    <div class="donut-legend">
                      <div v-for="p in topProducts" :key="p.name" class="legend-item">
                        <span class="legend-dot" :style="{ background: p.color }"></span>
                        <span>{{ p.name }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right column -->
      <div class="col-side">
        <div
          v-for="mod in rightModules" :key="mod.id"
          :id="mod.id"
          class="module"
          :class="mod.floatClass"
          @mouseenter="hoverModule(mod.id)"
          @mouseleave="hoverModule(null)"
        >
          <div class="module-icon" :class="mod.iconClass">
            <component :is="mod.icon" />
          </div>
          <span class="module-label">{{ mod.label }}</span>
        </div>
      </div>

      <!-- SVG connector overlay -->
      <svg ref="connectorSvg" class="connector-overlay" viewBox="0 0 680 340" preserveAspectRatio="xMidYMid meet">
        <template v-for="conn in connectors" :key="conn.id">
          <path :d="conn.d" fill="none" :stroke="conn.color" stroke-width="1.2" opacity="0.18" stroke-dasharray="4 6"/>
          <path :d="conn.d" fill="none" :stroke="conn.color" stroke-width="1.8" opacity="0.8"
                class="flow-path" :style="{ animationDelay: conn.delay }"/>
        </template>
      </svg>
    </div>

    <!-- Mobile bottom bar (shown only on small screens) -->
    <div class="mobile-bar">
      <div v-for="mod in [...leftModules, ...rightModules]" :key="'m-' + mod.id" class="mobile-pill">
        <div class="module-icon" :class="mod.iconClass" style="width:40px;height:40px">
          <component :is="mod.icon" />
        </div>
        <span class="mobile-pill-label">{{ mod.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, h } from 'vue'

/* ── Icons ─────────────────────────────────────────────── */
const IconERP = () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' }),
  h('polyline', { points: '3.27 6.96 12 12.01 20.73 6.96' }),
  h('line', { x1: '12', y1: '22.08', x2: '12', y2: '12' }),
])
const IconAuto = () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' }),
])
const IconCRM = () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
  h('circle', { cx: '9', cy: '7', r: '4' }),
  h('path', { d: 'M23 21v-2a4 4 0 0 0-3-3.87' }),
  h('path', { d: 'M16 3.13a4 4 0 0 1 0 7.75' }),
])
const IconAI = () => h('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', 'stroke-width': '1.8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, [
  h('path', { d: 'M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' }),
])

/* ── Data ──────────────────────────────────────────────── */
const leftModules = [
  { id: 'mod-erp',  label: 'ERP',        icon: IconERP,  iconClass: 'icon-teal',   floatClass: 'float-a' },
  { id: 'mod-auto', label: 'Automation', icon: IconAuto, iconClass: 'icon-amber',  floatClass: 'float-b' },
]
const rightModules = [
  { id: 'mod-crm', label: 'CRM',         icon: IconCRM, iconClass: 'icon-blue',   floatClass: 'float-c' },
  { id: 'mod-ai',  label: 'AI Workflow', icon: IconAI,  iconClass: 'icon-purple', floatClass: 'float-d' },
]
const stats = [
  { label: 'Total Sales', value: '₹24,80,000', badge: '+12.9%', valueStyle: { fontSize: '11px' }, badgeClass: 'badge-green' },
  { label: 'New Leads',   value: '237',         badge: '+18.6%', valueStyle: {},                   badgeClass: 'badge-green' },
  { label: 'Orders',      value: '320',          badge: '+14.2%', valueStyle: {},                   badgeClass: 'badge-amber' },
]
const topProducts = [
  { name: 'Basmati Rice', color: '#10b981' },
  { name: 'Masala Chai',  color: '#38bdf8' },
  { name: 'Mustard Oil',  color: '#a78bfa' },
  { name: 'Toor Dal',     color: '#fb923c' },
]

/* ── Connectors ────────────────────────────────────────── */
const connectors   = ref([])
const layoutRef    = ref(null)
const dashboardRef = ref(null)

function hoverModule(_name) {}

function buildPath(x1, y1, x2, y2) {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2
  return `M${x1},${y1} Q${mx},${y1} ${mx},${my} Q${mx},${y2} ${x2},${y2}`
}

function drawConnectors() {
  if (!layoutRef.value || !dashboardRef.value) return
  const lr = layoutRef.value.getBoundingClientRect()
  const W = 680, H = 340
  const toSvg = (el) => {
    const r = el.getBoundingClientRect()
    return {
      x: ((r.left + r.width / 2)  - lr.left) / lr.width  * W,
      y: ((r.top  + r.height / 2) - lr.top)  / lr.height * H,
    }
  }
  const dr = dashboardRef.value.getBoundingClientRect()
  const dL = { x: (dr.left  - lr.left) / lr.width  * W, y: H / 2 }
  const dR = { x: (dr.right - lr.left) / lr.width  * W, y: H / 2 }

  const erp  = toSvg(document.getElementById('mod-erp'))
  const auto = toSvg(document.getElementById('mod-auto'))
  const crm  = toSvg(document.getElementById('mod-crm'))
  const ai   = toSvg(document.getElementById('mod-ai'))

  connectors.value = [
    { id: 'erp',  d: buildPath(erp.x  + 55, erp.y,  dL.x, dL.y - 28), color: '#10b981', delay: '0s'    },
    { id: 'auto', d: buildPath(auto.x + 55, auto.y, dL.x, dL.y + 28), color: '#f59e0b', delay: '-1s'   },
    { id: 'crm',  d: buildPath(crm.x  - 55, crm.y,  dR.x, dR.y - 28), color: '#38bdf8', delay: '-0.5s' },
    { id: 'ai',   d: buildPath(ai.x   - 55, ai.y,   dR.x, dR.y + 28), color: '#a78bfa', delay: '-1.5s' },
  ]
}

let ro = null
onMounted(async () => {
  await nextTick()
  setTimeout(drawConnectors, 120)
  ro = new ResizeObserver(drawConnectors)
  if (layoutRef.value) ro.observe(layoutRef.value)
})
onUnmounted(() => ro?.disconnect())
</script>

<style scoped>
/* ─── No @apply anywhere — pure CSS only to avoid Tailwind v4 @reference requirement ─── */

.scene {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  padding: 28px 20px 36px;
  background-color: light-dark(#f0f4f8, #060d14);
}

/* ── Layout ─────────────────────────────────────────────── */
.layout {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 300px;
}

.col-side {
  display: none; /* hidden on mobile */
  flex-direction: column;
  gap: 24px;
  z-index: 10;
}
@media (min-width: 640px) {
  .col-side { display: flex; }
}

.dashboard-wrap {
  flex: 1;
  z-index: 10;
  max-width: 420px;
  margin: 0 16px;
}

/* ── Module cards ───────────────────────────────────────── */
.module {
  width: 110px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 14px 10px;
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
  border: 1px solid light-dark(rgba(0,0,0,0.08), rgba(255,255,255,0.06));
  background: light-dark(#ffffff, #0d1e2b);
  box-shadow: light-dark(0 2px 12px rgba(0,0,0,0.06), none);
}
.module:hover {
  border-color: #10b981;
  transform: scale(1.07) !important;
  box-shadow: light-dark(0 4px 20px rgba(16,185,129,0.15), 0 0 0 1px rgba(16,185,129,0.3));
}

.module-icon {
  width: 44px;
  height: 44px;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.module-label {
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  color: light-dark(#374151, #c8dce8);
}

/* icon variants */
.icon-teal   { background: light-dark(rgba(16,185,129,0.1),  rgba(29,233,182,0.12)); }
.icon-teal   svg { stroke: #10b981; }
.icon-blue   { background: light-dark(rgba(56,189,248,0.1),  rgba(41,182,246,0.12)); }
.icon-blue   svg { stroke: #38bdf8; }
.icon-purple { background: light-dark(rgba(167,139,250,0.1), rgba(167,139,250,0.12)); }
.icon-purple svg { stroke: #a78bfa; }
.icon-amber  { background: light-dark(rgba(245,158,11,0.1),  rgba(255,183,77,0.12)); }
.icon-amber  svg { stroke: #f59e0b; }

/* float animations */
.float-a { animation: float 4s ease-in-out 0s    infinite; }
.float-b { animation: float 4s ease-in-out -1.5s infinite; }
.float-c { animation: float 4s ease-in-out -0.8s infinite; }
.float-d { animation: float 4s ease-in-out -2.2s infinite; }
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-5px); }
}

/* ── Dashboard ──────────────────────────────────────────── */
.dashboard {
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid light-dark(rgba(0,0,0,0.08), rgba(255,255,255,0.06));
  background: light-dark(#ffffff, #0a1820);
}

.dash-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  border-bottom: 1px solid light-dark(rgba(0,0,0,0.07), rgba(255,255,255,0.05));
  background: light-dark(#f9fafb, #0d1e2b);
}
.dash-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.dash-title {
  font-size: 12px;
  font-weight: 500;
  margin-left: 8px;
  color: light-dark(#6b7280, #7a9ab0);
}

.dash-sidebar {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-right: 1px solid light-dark(rgba(0,0,0,0.06), rgba(255,255,255,0.04));
  background: light-dark(#f3f4f6, #0b1a26);
}
.side-dot {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: light-dark(#e5e7eb, #152535);
}

.dash-body {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 10px 10px 40px;
}

/* stat cards */
.stat-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}
.stat-card {
  border-radius: 8px;
  padding: 8px;
  border: 1px solid light-dark(rgba(0,0,0,0.06), rgba(255,255,255,0.04));
  background: light-dark(#f9fafb, #0d1e2b);
}
.stat-label {
  font-size: 9px;
  color: light-dark(#9ca3af, #4a7090);
}
.stat-value {
  font-size: 14px;
  font-weight: 600;
  margin-top: 2px;
  color: light-dark(#111827, #e0f0f8);
  animation: count-up 0.8s ease both;
}
.stat-badge {
  font-size: 9px;
  margin-top: 2px;
}
.badge-green { color: #10b981; }
.badge-amber { color: #f59e0b; }

/* charts */
.chart-area {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
}
.chart-box {
  border-radius: 8px;
  padding: 8px;
  border: 1px solid light-dark(rgba(0,0,0,0.06), rgba(255,255,255,0.04));
  background: light-dark(#f9fafb, #0d1e2b);
}
.chart-box-title {
  font-size: 9px;
  margin-bottom: 6px;
  color: light-dark(#9ca3af, #4a7090);
}
.chart-line {
  stroke-dasharray: 200;
  animation: line-draw 1.5s ease-out 0.3s both;
}

/* donut */
.donut-track { stroke: light-dark(#e5e7eb, #1a3040); }
.donut-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.donut-legend {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 8px;
  color: light-dark(#9ca3af, #4a7090);
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 4px;
}
.legend-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
}
.donut-arc   { animation: donut-spin 1.2s ease-out 0.5s both; }
.donut-arc-1 { animation-delay: 0.4s; }
.donut-arc-2 { animation-delay: 0.6s; }
.donut-arc-3 { animation-delay: 0.8s; }

/* ── Connectors ─────────────────────────────────────────── */
.connector-overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
.flow-path {
  fill: none;
  stroke-dasharray: 6 8;
  stroke-dashoffset: 0;
  animation: dash-flow 2s linear infinite;
}

/* ── Mobile bar ─────────────────────────────────────────── */
.mobile-bar {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid light-dark(rgba(0,0,0,0.07), rgba(255,255,255,0.06));
}
@media (min-width: 640px) {
  .mobile-bar { display: none; }
}
.mobile-pill {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.mobile-pill-label {
  font-size: 10px;
  font-weight: 500;
  color: light-dark(#6b7280, #7a9ab0);
}

/* ── Keyframes ──────────────────────────────────────────── */
@keyframes dash-flow {
  to { stroke-dashoffset: -30; }
}
@keyframes count-up {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes line-draw {
  from { stroke-dashoffset: 200; }
  to   { stroke-dashoffset: 0; }
}
@keyframes donut-spin {
  from { stroke-dashoffset: 113; }
  to   { stroke-dashoffset: 0; }
}
</style>