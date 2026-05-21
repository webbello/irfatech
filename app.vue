<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({ htmlAttrs: { lang: 'en' } })

// Scroll to top on every page navigation
const router = useRouter()
router.afterEach(() => {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
})
</script>
