<template>
  <div class="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center select-none overflow-visible">
    <!-- Ambient grid background decoration -->
    <div class="absolute inset-0 bg-radial-gradient from-teal-500/5 to-transparent blur-2xl -z-10 animate-pulse-slow"></div>

    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="w-full h-full overflow-visible"
    >
      <!-- CONNECTING PATHS -->
      <!-- WhatsApp -> CRM -->
      <path d="M 100 130 Q 150 110 200 100" class="flow-line border-line" />
      <path d="M 100 130 Q 150 110 200 100" class="flow-line active-line active-whatsapp" />

      <!-- CRM -> ERP -->
      <path d="M 300 130 Q 300 220 280 270" class="flow-line border-line" />
      <path d="M 300 130 Q 300 220 280 270" class="flow-line active-line active-crm" />

      <!-- AI -> ERP -->
      <path d="M 120 270 Q 200 320 280 270" class="flow-line border-line" />
      <path d="M 120 270 Q 200 320 280 270" class="flow-line active-line active-ai" />

      <!-- Custom Code -> Central Brain -->
      <path d="M 200 100 Q 200 150 200 200" class="flow-line border-line" />
      <path d="M 200 100 Q 200 150 200 200" class="flow-line active-line active-code" />

      <!-- ERP -> Central Brain -->
      <path d="M 280 270 Q 240 240 200 200" class="flow-line border-line" />
      <path d="M 280 270 Q 240 240 200 200" class="flow-line active-line active-erp" />

      <!-- WhatsApp -> Central Brain -->
      <path d="M 100 130 Q 150 160 200 200" class="flow-line border-line" />
      <path d="M 100 130 Q 150 160 200 200" class="flow-line active-line active-whatsapp-brain" />

      <!-- AI -> Central Brain -->
      <path d="M 120 270 Q 160 240 200 200" class="flow-line border-line" />
      <path d="M 120 270 Q 160 240 200 200" class="flow-line active-line active-ai-brain" />


      <!-- CENTRAL CORE NODE: IRFATECH Infrastructure -->
      <g class="node-group core-node" transform="translate(200, 200)">
        <circle r="36" class="node-bg glow-teal" />
        <circle r="26" class="node-core" />
        <!-- Zap Icon inside -->
        <path d="M -5 -12 L 8 -2 L -1 2 L 6 12 L -7 2 L 1 -2 Z" fill="currentColor" class="text-teal-400" />
      </g>


      <!-- NODE 1: WhatsApp Automation -->
      <g class="node-group n-whatsapp" transform="translate(100, 130)">
        <circle r="24" class="node-bg glow-green" />
        <circle r="18" class="node-core" />
        <circle r="18" class="node-overlay color-green" />
        <!-- Message circle icon -->
        <path d="M -5 -5 H 5 V 2 H -1 L -5 6 Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-400" />
      </g>


      <!-- NODE 2: CRM & Sales Automation -->
      <g class="node-group n-crm" transform="translate(300, 130)">
        <circle r="24" class="node-bg glow-blue" />
        <circle r="18" class="node-core" />
        <circle r="18" class="node-overlay color-blue" />
        <!-- Users icon -->
        <circle cx="-3" cy="-3" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8" class="text-teal-400" />
        <circle cx="3" cy="-3" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8" class="text-teal-400" />
        <path d="M -8 5 C -8 2.5 -5 1.5 -3 1.5 C -1 1.5 2 2.5 2 5" fill="none" stroke="currentColor" stroke-width="1.8" class="text-teal-400" />
      </g>


      <!-- NODE 3: ERP Solutions -->
      <g class="node-group n-erp" transform="translate(280, 270)">
        <circle r="24" class="node-bg glow-purple" />
        <circle r="18" class="node-core" />
        <circle r="18" class="node-overlay color-purple" />
        <!-- Dashboard/Grid icon -->
        <rect x="-6" y="-6" width="5" height="5" rx="1" fill="none" stroke="currentColor" stroke-width="1.8" class="text-purple-400" />
        <rect x="1" y="-6" width="5" height="5" rx="1" fill="none" stroke="currentColor" stroke-width="1.8" class="text-purple-400" />
        <rect x="-6" y="1" width="5" height="5" rx="1" fill="none" stroke="currentColor" stroke-width="1.8" class="text-purple-400" />
        <rect x="1" y="1" width="5" height="5" rx="1" fill="none" stroke="currentColor" stroke-width="1.8" class="text-purple-400" />
      </g>


      <!-- NODE 4: AI & Workflows -->
      <g class="node-group n-ai" transform="translate(120, 270)">
        <circle r="24" class="node-bg glow-amber" />
        <circle r="18" class="node-core" />
        <circle r="18" class="node-overlay color-amber" />
        <!-- Bot icon -->
        <rect x="-6" y="-4" width="12" height="9" rx="2" fill="none" stroke="currentColor" stroke-width="1.8" class="text-amber-400" />
        <circle cx="-2.5" cy="0.5" r="1" fill="currentColor" class="text-amber-400" />
        <circle cx="2.5" cy="0.5" r="1" fill="currentColor" class="text-amber-400" />
        <path d="M 0 -4 L 0 -7" stroke="currentColor" stroke-width="1.5" class="text-amber-400" />
      </g>


      <!-- NODE 5: Custom Software -->
      <g class="node-group n-code" transform="translate(200, 100)">
        <circle r="24" class="node-bg glow-cyan" />
        <circle r="18" class="node-core" />
        <circle r="18" class="node-overlay color-cyan" />
        <!-- Code tag icon -->
        <path d="M -6 -2 L -9 0 L -6 2 M 6 -2 L 9 0 L 6 2 M -1.5 5 L 1.5 -5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" class="text-cyan-400" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
/* GENERAL STYLES */
svg {
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.2));
}

.flow-line {
  stroke-linecap: round;
  fill: none;
}

.border-line {
  stroke: var(--border-base);
  stroke-width: 1.5px;
  opacity: 0.45;
  transition: stroke 0.3s ease;
}

.active-line {
  stroke-width: 2px;
  stroke-dasharray: 8, 48;
  animation: dash 5s linear infinite;
}

/* Staggered dash offset animation */
@keyframes dash {
  to {
    stroke-dashoffset: -112;
  }
}

.active-whatsapp {
  stroke: #10B981;
  animation-duration: 4s;
}

.active-crm {
  stroke: #14B8A6;
  animation-duration: 5s;
}

.active-ai {
  stroke: #F59E0B;
  animation-duration: 6s;
  animation-delay: -2s;
}

.active-code {
  stroke: #06B6D4;
  animation-duration: 4.5s;
  animation-delay: -1s;
}

.active-erp {
  stroke: #8B5CF6;
  animation-duration: 5.5s;
}

.active-whatsapp-brain {
  stroke: #10B981;
  animation-duration: 3.5s;
  animation-delay: -0.5s;
}

.active-ai-brain {
  stroke: #F59E0B;
  animation-duration: 4s;
  animation-delay: -3s;
}

/* NODES STYLES */
.node-group {
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.node-group:hover {
  transform: scale(1.15) translate(var(--hover-x, 0), var(--hover-y, 0));
}

/* Specific hover translations to move nodes slightly outward */
.n-whatsapp:hover { --hover-x: -4px; --hover-y: -4px; }
.n-crm:hover { --hover-x: 4px; --hover-y: -4px; }
.n-erp:hover { --hover-x: 4px; --hover-y: 4px; }
.n-ai:hover { --hover-x: -4px; --hover-y: 4px; }
.n-code:hover { --hover-x: 0px; --hover-y: -5px; }

.node-bg {
  stroke-width: 1px;
  stroke: rgba(255, 255, 255, 0.05);
  fill: var(--bg-surface);
  transition: fill 0.3s ease, stroke 0.3s ease;
}

.node-core {
  fill: var(--bg-card);
  stroke: var(--border-base);
  stroke-width: 1px;
  transition: fill 0.3s ease, stroke 0.3s ease;
}

.node-overlay {
  fill: none;
  stroke-width: 1.5px;
  opacity: 0.15;
  transition: opacity 0.3s ease;
}

.node-group:hover .node-overlay {
  opacity: 0.85;
}

/* GLOWS */
.glow-teal { filter: drop-shadow(0 0 10px rgba(20, 184, 166, 0.25)); fill: rgba(20, 184, 166, 0.03); }
.glow-green { filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.2)); }
.glow-blue { filter: drop-shadow(0 0 8px rgba(20, 184, 166, 0.2)); }
.glow-purple { filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.2)); }
.glow-amber { filter: drop-shadow(0 0 8px rgba(245, 158, 11, 0.2)); }
.glow-cyan { filter: drop-shadow(0 0 8px rgba(6, 182, 212, 0.2)); }

/* OVERLAYS */
.color-green { stroke: #10B981; }
.color-blue { stroke: #14B8A6; }
.color-purple { stroke: #8B5CF6; }
.color-amber { stroke: #F59E0B; }
.color-cyan { stroke: #06B6D4; }

/* CENTRAL CORE PULSING */
.core-node {
  animation: pulse-core 4s ease-in-out infinite;
}

@keyframes pulse-core {
  0%, 100% {
    filter: drop-shadow(0 0 12px rgba(20, 184, 166, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 20px rgba(20, 184, 166, 0.5));
  }
}

/* Stagger float node animations */
.node-group:not(.core-node) {
  animation: float-node 6s ease-in-out infinite;
}

.n-whatsapp { animation-delay: -0.5s !important; }
.n-crm { animation-delay: -2s !important; }
.n-erp { animation-delay: -3.5s !important; }
.n-ai { animation-delay: -5s !important; }
.n-code { animation-delay: -1.2s !important; }

@keyframes float-node {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
</style>
