<template>
  <div class="archival-shell">
    <div class="archival-frame">
      <div class="archival-screen">
        <div class="archival-embed">
          <iframe
            :src="embedUrl"
            :title="title"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="archival-overlay"></div>
        <div class="archival-play" aria-hidden="true">
          <div class="archival-play-icon"></div>
          <span>PLAY</span>
        </div>
        <div class="archival-label">
          <span class="archival-tag">ARCHIVAL FOOTAGE</span>
          <span class="archival-year">{{ year }}</span>
        </div>
      </div>
      <div class="archival-base">
        <div class="archival-dot"></div>
        <div class="archival-dot"></div>
        <div class="archival-dot"></div>
      </div>
    </div>
    <div class="archival-caption">
      <h4 class="archival-title">{{ title }}</h4>
      <p class="archival-note">{{ note }}</p>
      <a
        class="archival-link"
        :href="watchUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch full video →
      </a>
      <details v-if="transcript" class="archival-transcript">
        <summary>Transcript (short)</summary>
        <p>{{ transcript }}</p>
      </details>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  year: {
    type: String,
    default: '1989'
  },
  note: {
    type: String,
    default: 'Captured on VGA in the late 1980s. Restored for archival viewing.'
  },
  transcript: {
    type: String,
    default: ''
  },
  youtubeId: {
    type: String,
    required: true
  }
})

const embedUrl = `https://www.youtube.com/embed/${props.youtubeId}?rel=0&modestbranding=1`
const watchUrl = `https://www.youtube.com/watch?v=${props.youtubeId}`
</script>

<style scoped>
.archival-shell {
  display: grid;
  gap: 1rem;
}

.archival-frame {
  background: linear-gradient(145deg, #1b1b1d, #2a2a2f);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-shadow:
    0 18px 40px rgba(15, 23, 42, 0.25),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}

.archival-screen {
  position: relative;
  background: #0f0f12;
  border-radius: 1.2rem;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.6);
}

.archival-embed {
  position: absolute;
  inset: 0;
}

.archival-embed iframe {
  width: 100%;
  height: 100%;
  border: 0;
  filter: saturate(0.85) contrast(0.95) brightness(0.95);
}

.archival-overlay {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.03) 1px,
      rgba(0, 0, 0, 0) 1px
    ),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 55%);
  background-size: 100% 4px, cover;
  mix-blend-mode: screen;
  pointer-events: none;
}

.archival-label {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.75rem;
  color: #fef3c7;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}

.archival-tag {
  background: rgba(185, 28, 28, 0.85);
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  font-weight: 600;
}

.archival-year {
  background: rgba(217, 119, 6, 0.85);
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  font-weight: 600;
}

.archival-play {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  gap: 0.4rem;
  color: #fef3c7;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-shadow: 0 0 12px rgba(245, 158, 11, 0.6);
  pointer-events: none;
  opacity: 0.85;
}

.archival-play-icon {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 999px;
  background: rgba(185, 28, 28, 0.85);
  position: relative;
  box-shadow: 0 0 18px rgba(185, 28, 28, 0.5);
}

.archival-play-icon::after {
  content: '';
  position: absolute;
  left: 1.05rem;
  top: 0.75rem;
  width: 0;
  height: 0;
  border-top: 0.5rem solid transparent;
  border-bottom: 0.5rem solid transparent;
  border-left: 0.8rem solid #fef3c7;
}

.archival-base {
  display: flex;
  gap: 0.4rem;
  margin-top: 1rem;
  justify-content: center;
}

.archival-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: #f59e0b;
  opacity: 0.6;
}

.archival-caption {
  display: grid;
  gap: 0.4rem;
}

.archival-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
}

.archival-note {
  color: #475569;
  font-size: 0.95rem;
}

.archival-link {
  color: #b91c1c;
  font-weight: 600;
  text-decoration: none;
}

.archival-link:hover {
  color: #d97706;
}

.archival-transcript {
  margin-top: 0.5rem;
  background: #fff7ed;
  border: 1px solid #fed7aa;
  border-radius: 0.75rem;
  padding: 0.6rem 0.8rem;
  color: #7c2d12;
  font-size: 0.9rem;
}

.archival-transcript summary {
  cursor: pointer;
  font-weight: 600;
}

.archival-transcript p {
  margin-top: 0.4rem;
}
</style>
