<template>
  <section class="section-padding section-mid transition-colors duration-300 reveal-up">
    <div class="container-max">
      <div class="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <div class="badge mb-4">
            <iconify-icon icon="lucide:star" class="text-xs"></iconify-icon>
            Client Results
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            What businesses say<br />
            after going live
          </h2>
        </div>
        <div class="flex items-center gap-3">
          <button
            class="w-9 h-9 rounded-full border border-navy-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-electric-500/50 hover:bg-electric-500/10 transition-all duration-200 cursor-pointer flex-shrink-0"
            aria-label="Scroll testimonials left"
            @click="scrollTestimonials(-1)"
          >
            <iconify-icon icon="lucide:chevron-left" class="text-sm"></iconify-icon>
          </button>
          <button
            class="w-9 h-9 rounded-full border border-navy-700/50 flex items-center justify-center text-slate-400 hover:text-white hover:border-electric-500/50 hover:bg-electric-500/10 transition-all duration-200 cursor-pointer flex-shrink-0"
            aria-label="Scroll testimonials right"
            @click="scrollTestimonials(1)"
          >
            <iconify-icon icon="lucide:chevron-right" class="text-sm"></iconify-icon>
          </button>
          <NuxtLink to="/portfolio" class="btn-ghost text-sm px-5 py-2.5 flex-shrink-0 cursor-pointer">
            View All Case Studies
            <iconify-icon icon="lucide:arrow-right" class="text-xs"></iconify-icon>
          </NuxtLink>
        </div>
      </div>

      <div class="relative">
        <!-- Edge fade gradients -->
        <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent pointer-events-none z-10"></div>
        <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy-900 via-navy-900/80 to-transparent pointer-events-none z-10"></div>

        <div
          ref="trackRef"
          class="testimonials-track flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 select-none"
          :class="{ dragging: isDragging }"
          @mouseenter="isHovering = true"
          @mouseleave="isHovering = false; onDragEnd()"
          @mousedown="onDragStart"
          @mousemove="onDragMove"
          @mouseup="onDragEnd"
          @touchstart="onTouchStart"
          @touchend="onTouchEnd"
          @touchcancel="onTouchEnd"
        >
          <div
            v-for="(t, i) in testimonials"
            :key="i"
            class="bg-navy-800/40 border border-navy-700/40 rounded-2xl p-6 flex flex-col justify-between hover:border-electric-500/30 transition-all duration-300 snap-start shrink-0 w-[85vw] sm:w-[380px]"
          >
            <div>
              <div class="flex gap-0.5 mb-4">
                <iconify-icon v-for="n in 5" :key="n" icon="lucide:star" class="text-amber-500" style="font-size:14px"></iconify-icon>
              </div>
              <p class="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-8">"{{ t.quote }}"</p>
            </div>
            <div class="flex items-center gap-3.5 pt-5 border-t border-navy-700/40">
              <div class="w-10 h-10 rounded-full bg-electric-500/10 border border-electric-500/20 flex items-center justify-center flex-shrink-0">
                <span class="text-sm font-bold text-electric-500">{{ t.initial }}</span>
              </div>
              <div>
                <div class="text-sm font-bold text-white">{{ t.author }}</div>
                <div class="text-xs text-slate-500">{{ t.role }} · {{ t.company }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center gap-2 mt-6">
          <button
            v-for="(t, i) in testimonials"
            :key="i"
            class="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
            :class="scrollIndex === i ? 'bg-electric-500 w-5' : 'bg-navy-700 hover:bg-navy-600'"
            :aria-label="`Go to testimonial ${i + 1}`"
            @click="scrollToTestimonial(i)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: 'IRFATECH restructured how we coordinate property listings and follow up on buyers. The custom platform they built cut customer wait times in half, and our closing rates have never been better.',
    author: 'Ravi Sharma',
    role: 'Managing Director',
    company: 'PropEdge Realty',
    initial: 'R',
  },
  {
    quote: 'Managing three warehouses on spreadsheets was a nightmare. IRFATECH integrated our multi-branch inventory into a solid ERP system. Billing reconciliation now takes minutes instead of two full days.',
    author: 'Amjad Khan',
    role: 'Principal Partner',
    company: 'KM Distributors',
    initial: 'A',
  },
  {
    quote: 'Their WhatsApp integration handles patient notifications and scheduling automatically. Our clinical desk is much quieter now, and booking no-shows dropped by over seventy percent.',
    author: 'Dr. Priya Nair',
    role: 'Clinical Director',
    company: 'Nair Family Clinic',
    initial: 'P',
  },
  {
    quote: 'We needed a complete online presence from scratch. IRFATECH built our website, integrated a booking system, and set up automated follow-ups. Our inquiry-to-sale ratio improved dramatically.',
    author: 'Suresh Mehta',
    role: 'Owner',
    company: 'Mehta Electronics',
    initial: 'S',
  },
  {
    quote: 'The custom inventory dashboard they built for our restaurant chain saved us from over-ordering by 30%. We can now forecast exactly what each branch needs in real time.',
    author: 'Farhan Qureshi',
    role: 'Operations Head',
    company: 'Tandoori Nights Group',
    initial: 'F',
  },
  {
    quote: 'IRFATECH set up our entire Odoo instance — accounting, purchases, and sales. For the first time, I can see my cash flow without calling my accountant every week.',
    author: 'Anita Gupta',
    role: 'Proprietor',
    company: 'Gupta Stationery Mart',
    initial: 'A',
  },
  {
    quote: 'Their team migrated us from a messy legacy system to a clean Laravel-based CRM in under three weeks. Zero downtime. My sales team adapted within a day.',
    author: 'Vikram Rathore',
    role: 'CEO',
    company: 'Rathore Motors',
    initial: 'V',
  },
  {
    quote: 'WhatsApp automation was a game-changer for our clinic. Appointment reminders, reports, and billing — all handled automatically. Our front desk workload reduced by sixty percent.',
    author: 'Dr. Sana Khan',
    role: 'Medical Director',
    company: 'Sana Health Centre',
    initial: 'S',
  },
  {
    quote: 'As a distributor managing 500+ SKUs across three states, IRFATECH\'s ERP solution gave us visibility we never had. Expiry tracking alone saved us from significant losses.',
    author: 'Rajesh Agarwal',
    role: 'Managing Partner',
    company: 'Agarwal Distributors',
    initial: 'R',
  },
]

const trackRef = ref(null)
const scrollIndex = ref(0)
const isHovering = ref(false)
const isDragging = ref(false)
let dragStartX = 0
let dragStartScroll = 0
let autoScrollTimer = null
let touchResumeTimer = null

function scrollTestimonials(dir) {
  if (!trackRef.value) return
  const track = trackRef.value
  const card = track.children[0]
  if (!card) return
  const cardWidth = card.offsetWidth + 20
  track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' })
}

function scrollToTestimonial(i) {
  if (!trackRef.value) return
  const track = trackRef.value
  const card = track.children[i]
  if (!card) return
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
}

function trackScrollIndex() {
  if (!trackRef.value) return
  const track = trackRef.value
  const cards = [...track.children]
  const trackRect = track.getBoundingClientRect()
  const center = trackRect.left + trackRect.width / 2

  let closestIdx = 0
  let closestDist = Infinity
  cards.forEach((card, i) => {
    const rect = card.getBoundingClientRect()
    const cardCenter = rect.left + rect.width / 2
    const dist = Math.abs(cardCenter - center)
    if (dist < closestDist) {
      closestDist = dist
      closestIdx = i
    }
  })
  scrollIndex.value = closestIdx
}

// Touch pause (mobile)
function onTouchStart() {
  isHovering.value = true
  if (touchResumeTimer) {
    clearTimeout(touchResumeTimer)
    touchResumeTimer = null
  }
}

function onTouchEnd() {
  if (touchResumeTimer) clearTimeout(touchResumeTimer)
  touchResumeTimer = setTimeout(() => {
    isHovering.value = false
    touchResumeTimer = null
  }, 3000)
}

// Auto-scroll
function startAutoScroll() {
  stopAutoScroll()
  autoScrollTimer = setInterval(() => {
    if (isHovering.value || isDragging.value || !trackRef.value) return
    const track = trackRef.value
    const maxScroll = track.scrollWidth - track.clientWidth
    if (track.scrollLeft >= maxScroll - 5) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      const card = track.children[0]
      if (!card) return
      const cardWidth = card.offsetWidth + 20
      track.scrollBy({ left: cardWidth, behavior: 'smooth' })
    }
  }, 4500)
}

function stopAutoScroll() {
  if (autoScrollTimer) {
    clearInterval(autoScrollTimer)
    autoScrollTimer = null
  }
}

// Mouse drag
function onDragStart(e) {
  if (!trackRef.value) return
  isDragging.value = true
  dragStartX = e.pageX
  dragStartScroll = trackRef.value.scrollLeft
  trackRef.value.style.cursor = 'grabbing'
}

function onDragMove(e) {
  if (!isDragging.value || !trackRef.value) return
  e.preventDefault()
  const dx = e.pageX - dragStartX
  trackRef.value.scrollLeft = dragStartScroll - dx
}

function onDragEnd() {
  if (!isDragging.value) return
  isDragging.value = false
  if (trackRef.value) {
    trackRef.value.style.cursor = ''
  }
}

onMounted(() => {
  if (!import.meta.client) return
  if (trackRef.value) {
    trackRef.value.addEventListener('scroll', trackScrollIndex, { passive: true })
  }
  startAutoScroll()
})

onUnmounted(() => {
  stopAutoScroll()
  if (touchResumeTimer) clearTimeout(touchResumeTimer)
  if (trackRef.value) {
    trackRef.value.removeEventListener('scroll', trackScrollIndex)
  }
})
</script>

<style scoped>
.testimonials-track {
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.testimonials-track::-webkit-scrollbar {
  display: none;
}

.testimonials-track.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
}

.testimonials-track.dragging > * {
  pointer-events: none;
  user-select: none;
}
</style>
