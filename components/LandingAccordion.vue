<template>
  <div class="bg-navy-950 font-sans transition-colors duration-300">
    <section class="section-padding">
      <div class="container-max">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">

          <div class="w-full lg:w-[38%] text-center lg:text-left">
            <div class="badge mb-4">
              <iconify-icon icon="lucide:layers" class="text-xs"></iconify-icon>
              What We Build
            </div>
            <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
              Products & systems that<br />
              <span class="text-gradient">run your business.</span>
            </h2>
            <p class="text-slate-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Every tool we build is engineered to replace manual chaos with connected, automated operations.
            </p>
            <div class="mt-8">
              <NuxtLink
                to="/services"
                class="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/20 text-electric-400 font-semibold px-6 py-3 rounded-xl hover:bg-electric-500/20 transition-all duration-300"
              >
                View All Services
                <iconify-icon icon="lucide:arrow-right" class="text-base"></iconify-icon>
              </NuxtLink>
            </div>
          </div>

          <div class="w-full lg:w-[62%]">
            <div class="flex flex-row items-stretch justify-center gap-3 overflow-x-auto p-2">
              <AccordionItem
                v-for="(item, index) in accordionItems"
                :key="item.id"
                :item="item"
                :is-active="index === activeIndex"
                @mouseenter="handleItemHover(index)"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const accordionItems = [
  {
    id: 1,
    title: 'ERP Solutions (Odoo)',
    description: 'Connect your inventory, billing, purchases, accounting, and branches into one unified system — no more siloed spreadsheets.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'CRM & Sales Automation',
    description: 'Capture leads from your website and WhatsApp automatically, track every follow-up, and close more deals with data-driven pipeline management.',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'AI & Workflow Automation',
    description: 'Eliminate repetitive data entry, document parsing, and email routing with intelligent automation that learns from your processes.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'WhatsApp Automation',
    description: 'Connect your business workflows to WhatsApp Business API — automate order confirmations, invoices, reminders, and customer alerts.',
    imageUrl: 'https://images.unsplash.com/photo-1572502006587-8fa66cd2e9e6?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Custom Software',
    description: 'Tailor-built dashboards, portals, and business applications that match your exact operational workflow — no off-the-shelf compromises.',
    imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2070&auto=format&fit=crop',
  },
]

const activeIndex = ref(4)

function handleItemHover(index) {
  activeIndex.value = index
}
</script>
