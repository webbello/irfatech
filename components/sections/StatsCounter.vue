<template>
  <section class="section-padding-sm section-dark border-y border-navy-700/30 transition-colors duration-300" ref="statsRef">
    <div class="container-max">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-navy-700/20 rounded-2xl overflow-hidden border border-navy-700/30">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="bg-navy-950 px-8 py-8 flex flex-col transition-colors duration-300"
          :class="i < 3 ? 'lg:border-r border-navy-700/30' : ''"
        >
          <div class="text-5xl lg:text-6xl font-display font-black text-white tabular-nums leading-none mb-3">
            {{ displayValues[i].display }}{{ stat.suffix }}
          </div>
          <div class="text-sm font-bold text-slate-300 mb-1">{{ stat.label }}</div>
          <div class="text-xs text-slate-500">{{ stat.sub }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: 15, suffix: '+', label: 'Years System Expertise', sub: 'Consulting since 2009' },
  { value: 50, suffix: '+', label: 'Businesses Automated', sub: 'Kolkata, Siliguri & Indiawide' },
  { value: 7,  suffix: '',  label: 'Industries Served',      sub: 'Retail to Distribution' },
  { value: 8,  suffix: '',  label: 'Enterprise Services',    sub: 'Full stack architecture' },
]
const displayValues = reactive(stats.map(s => ({ ...s, display: 0 })))
const statsRef = ref(null)
const statsAnimated = ref(false)

function animateCount(index, target, duration = 1400) {
  const start = Date.now()
  const tick = () => {
    const elapsed = Date.now() - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayValues[index].display = Math.round(eased * target)
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

const { stop: stopStats } = useIntersectionObserver(statsRef, ([entry]) => {
  if (entry.isIntersecting && !statsAnimated.value) {
    statsAnimated.value = true
    stats.forEach((s, i) => animateCount(i, s.value, 1200 + i * 120))
  }
}, { threshold: 0.25 })
</script>
