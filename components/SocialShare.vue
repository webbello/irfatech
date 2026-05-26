<template>
  <div class="social-share">

    <!-- Mobile: native Web Share API button (shown only when supported) -->
    <button
      v-if="hasNativeShare"
      @click="nativeShare"
      class="native-share-btn sm:hidden"
      aria-label="Share this page"
    >
      <iconify-icon icon="lucide:share-2" class="text-base"></iconify-icon>
      Share this article
    </button>

    <!-- Platform buttons (always visible on desktop; secondary on mobile) -->
    <div class="share-buttons" :class="{ 'mt-3 sm:mt-0': hasNativeShare }">

      <!-- Twitter / X -->
      <a
        :href="twitterUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="share-btn twitter"
        aria-label="Share on X (Twitter)"
        title="Share on X"
      >
        <iconify-icon icon="ri:twitter-x-fill" class="text-base"></iconify-icon>
        <span class="btn-label">X</span>
      </a>

      <!-- LinkedIn -->
      <a
        :href="linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="share-btn linkedin"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <iconify-icon icon="mdi:linkedin" class="text-base"></iconify-icon>
        <span class="btn-label">LinkedIn</span>
      </a>

      <!-- WhatsApp -->
      <a
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="share-btn whatsapp"
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
      >
        <iconify-icon icon="mdi:whatsapp" class="text-base"></iconify-icon>
        <span class="btn-label">WhatsApp</span>
      </a>

      <!-- Facebook -->
      <a
        :href="facebookUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="share-btn facebook"
        aria-label="Share on Facebook"
        title="Share on Facebook"
      >
        <iconify-icon icon="mdi:facebook" class="text-base"></iconify-icon>
        <span class="btn-label">Facebook</span>
      </a>

      <!-- Copy Link -->
      <button
        @click="copyLink"
        class="share-btn copy"
        :class="{ copied: isCopied }"
        :aria-label="isCopied ? 'Link copied!' : 'Copy link'"
        :title="isCopied ? 'Copied!' : 'Copy link'"
      >
        <iconify-icon
          :icon="isCopied ? 'lucide:check' : 'lucide:link'"
          class="text-base transition-all duration-200"
        ></iconify-icon>
        <span class="btn-label">{{ isCopied ? 'Copied!' : 'Copy' }}</span>
      </button>

    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  /** Article or page title shown in share text */
  title: {
    type: String,
    default: 'IRFATECH — Digital Infrastructure for Growing Businesses',
  },
  /** Short description shown in WhatsApp / Twitter share text */
  description: {
    type: String,
    default: 'Practical business automation guides from IRFATECH.',
  },
  /** Override URL — defaults to current page */
  url: {
    type: String,
    default: '',
  },
})

const route = useRoute()

const pageUrl = computed(() => {
  if (props.url) return props.url
  return `https://irfatech.in${route.path}`
})

const shareText = computed(() => `${props.title}`)

// ── Platform URLs ──────────────────────────────────────────────────────────

const twitterUrl = computed(() =>
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText.value)}&url=${encodeURIComponent(pageUrl.value)}&via=irfatech`
)

const linkedinUrl = computed(() =>
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl.value)}`
)

const whatsappUrl = computed(() =>
  `https://wa.me/?text=${encodeURIComponent(`${props.title}\n${pageUrl.value}`)}`
)

const facebookUrl = computed(() =>
  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl.value)}`
)

// ── Copy Link ──────────────────────────────────────────────────────────────

const isCopied = ref(false)
let copyTimer: ReturnType<typeof setTimeout> | null = null

async function copyLink() {
  try {
    await navigator.clipboard.writeText(pageUrl.value)
    isCopied.value = true
    if (copyTimer) clearTimeout(copyTimer)
    copyTimer = setTimeout(() => { isCopied.value = false }, 2200)
  }
  catch {
    // Fallback for browsers that block clipboard without user gesture
    const el = document.createElement('input')
    el.value = pageUrl.value
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
    isCopied.value = true
    copyTimer = setTimeout(() => { isCopied.value = false }, 2200)
  }
}

// ── Web Share API (mobile native share sheet) ─────────────────────────────

const hasNativeShare = ref(false)

onMounted(() => {
  hasNativeShare.value = typeof navigator !== 'undefined' && !!navigator.share
})

async function nativeShare() {
  try {
    await navigator.share({
      title: props.title,
      text: props.description,
      url: pageUrl.value,
    })
  }
  catch {
    // User cancelled or share failed — silently ignore
  }
}

onUnmounted(() => {
  if (copyTimer) clearTimeout(copyTimer)
})
</script>

<style scoped>
.social-share {
  display: flex;
  flex-direction: column;
}

/* Native share — mobile only, hidden on sm+ via Tailwind */
.native-share-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #e2e8f0;
  background: rgba(14, 165, 233, 0.12);
  border: 1px solid rgba(14, 165, 233, 0.25);
  cursor: pointer;
  transition: all 0.2s ease;
  width: fit-content;
}
.native-share-btn:hover {
  background: rgba(14, 165, 233, 0.2);
  border-color: rgba(14, 165, 233, 0.5);
}

/* Row of platform buttons */
.share-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.share-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  /* base: neutral ghost */
  color: #94a3b8;
  background: transparent;
  border-color: rgba(148, 163, 184, 0.15);
}
.share-btn:hover {
  transform: translateY(-1px);
}

/* Hide label text on very small screens */
@media (max-width: 380px) {
  .btn-label { display: none; }
  .share-btn { padding: 0.5rem; }
}

/* ── Platform-specific hover colours ── */
.share-btn.twitter:hover {
  color: #e2e8f0;
  background: rgba(15, 15, 15, 0.8);
  border-color: rgba(226, 232, 240, 0.3);
}
.share-btn.linkedin:hover {
  color: #60a5fa;
  background: rgba(37, 99, 235, 0.12);
  border-color: rgba(37, 99, 235, 0.35);
}
.share-btn.whatsapp:hover {
  color: #4ade80;
  background: rgba(34, 197, 94, 0.12);
  border-color: rgba(34, 197, 94, 0.35);
}
.share-btn.facebook:hover {
  color: #93c5fd;
  background: rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.35);
}
.share-btn.copy:hover {
  color: #38bdf8;
  background: rgba(14, 165, 233, 0.12);
  border-color: rgba(14, 165, 233, 0.35);
}
.share-btn.copy.copied {
  color: #4ade80;
  background: rgba(34, 197, 94, 0.12);
  border-color: rgba(34, 197, 94, 0.35);
}
</style>
