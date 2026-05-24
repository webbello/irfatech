<template>
  <div class="boxes-container absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div class="boxes-mask absolute inset-0 z-[1] pointer-events-none"></div>
    <div
      class="boxes-grid pointer-events-none"
      :style="{ transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg)` }"
    >
      <div v-for="row in ROWS" :key="row" class="flex" :style="{ marginTop: row > 1 ? '-1px' : '0' }">
        <div
          v-for="col in COLS"
          :key="`${row}-${col}`"
          class="box-cell w-16 h-8 relative"
          :class="{ 'border-r border-b': true, 'box-hovered': hoverKey === `${row}-${col}` }"
          @mouseenter.stop="onEnter(row, col)"
          @mouseleave.stop="onLeave"
        >
          <svg
            v-if="(row + col) % 2 === 0"
            class="plus-icon absolute"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const ROWS = 30
const COLS = 20

const hoverKey = ref(null)
const hoverColor = ref('')

const colors = [
  'rgba(20, 184, 166, 0.25)',
  'rgba(56, 189, 248, 0.25)',
  'rgba(129, 140, 248, 0.25)',
  'rgba(168, 85, 247, 0.25)',
  'rgba(251, 146, 60, 0.25)',
  'rgba(52, 211, 153, 0.25)',
]

function onEnter(row, col) {
  hoverKey.value = `${row}-${col}`
  hoverColor.value = colors[Math.floor(Math.random() * colors.length)]
}

function onLeave() {
  hoverKey.value = null
}
</script>

<style scoped>
.boxes-container {
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, white 10%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, white 10%, transparent 70%);
}

.boxes-grid {
  position: absolute;
  left: 25%;
  top: -25%;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.box-cell {
  transition: background-color 0.25s ease;
  border-color: var(--box-border, rgba(255, 255, 255, 0.06));
  pointer-events: auto;
}

.box-cell.box-hovered {
  background-color: v-bind(hoverColor);
  border-color: rgba(20, 184, 166, 0.3);
}

.plus-icon {
  width: 20px;
  height: 20px;
  top: -10px;
  left: -8px;
  color: var(--box-plus, rgba(255, 255, 255, 0.08));
  pointer-events: none;
}

.box-cell.box-hovered .plus-icon {
  color: rgba(20, 184, 166, 0.4);
}

/* ─── LIGHT MODE ──────────────────────────────── */
:global(html.light) .box-cell {
  border-color: rgba(0, 0, 0, 0.06);
}

:global(html.light) .plus-icon {
  color: rgba(0, 0, 0, 0.08);
}
</style>
