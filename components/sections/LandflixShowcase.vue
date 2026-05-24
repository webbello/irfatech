<template>
  <section class="section-padding section-mid transition-colors duration-300 reveal-up">
    <div class="container-max">
      <div class="card-glass border border-navy-700/60 p-8 sm:p-12 relative overflow-hidden rounded-3xl">
        <div class="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-electric-500/5 blur-3xl"></div>

        <div class="grid grid-cols-1 lg:grid-cols-[52%_48%] gap-10 items-center">

          <div class="space-y-6">
            <div class="badge-accent">
              <iconify-icon icon="lucide:star" class="text-xs text-amber-500"></iconify-icon>
              IRFATECH Featured Venture
            </div>
            <h2 class="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Landflix — Proof of Custom Systems Capability
            </h2>
            <p class="text-slate-400 text-base sm:text-lg leading-relaxed">
              Rather than just talking about database capabilities and dashboards, we built **Landflix** — an in-house property portal and agency CRM framework. It handles dynamic catalog searching, automated WhatsApp notifications for inquiries, and detailed agent lead pipelines.
            </p>

            <ul class="space-y-3">
              <li class="flex items-start gap-2.5 text-sm text-slate-300">
                <iconify-icon icon="lucide:check-circle-2" class="text-electric-500 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                <span>Dynamic search filters & map coordinates built in-house.</span>
              </li>
              <li class="flex items-start gap-2.5 text-sm text-slate-300">
                <iconify-icon icon="lucide:check-circle-2" class="text-electric-500 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                <span>WhatsApp Business API routes inquiries to agents instantly.</span>
              </li>
              <li class="flex items-start gap-2.5 text-sm text-slate-300">
                <iconify-icon icon="lucide:check-circle-2" class="text-electric-500 text-sm mt-0.5 flex-shrink-0"></iconify-icon>
                <span>Performance monitoring showing listing views & closes.</span>
              </li>
            </ul>

            <div class="flex flex-wrap gap-4 pt-4">
              <NuxtLink to="/landflix" class="btn-primary px-6 py-3 text-sm">
                View Landflix Venture
              </NuxtLink>
              <NuxtLink to="/contact" class="btn-ghost px-6 py-3 text-sm">
                Get a Similar Platform
              </NuxtLink>
            </div>
          </div>

          <div class="relative w-full rounded-2xl overflow-hidden border border-navy-700/60 bg-navy-950 p-1">
            <img
              src="/images/landflix-showcase.png"
              alt="Landflix Real Estate Platform Mockup"
              class="w-full h-auto rounded-xl shadow-glow opacity-90 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
              width="600"
              height="380"
            />
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
