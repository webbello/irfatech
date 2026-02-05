<template>
  <main class="pt-16">
    <section class="section-padding bg-gray-50" aria-labelledby="timeline-title">
      <div class="container-max">
        <div class="rounded-3xl bg-white/90 shadow-sm ring-1 ring-blue-100/60 px-6 sm:px-10 py-10 md:py-12">
          <div class="text-center mb-12 md:mb-16">
            <p class="text-sm uppercase tracking-[0.25em] text-blue-600 font-semibold mb-3">Journey</p>
            <h1 id="timeline-title" class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Journey Timeline
            </h1>
            <p id="timeline-intro" class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Follow the chronological journey of Saloo & Neena Chowdhury's record-breaking adventures
              across six continents.
            </p>
          </div>

          <div class="relative">
            <!-- Timeline line (desktop only) -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-200 via-amber-200 to-red-200 h-full hidden md:block"></div>

            <div class="space-y-10 md:space-y-12" role="list" aria-describedby="timeline-intro">
              <div v-for="(event, index) in timelineEvents" :key="event.id" role="listitem">
                <TimelineEvent :event="event" :index="index" />
                <div v-if="event.video" class="mt-6 md:mt-8 md:ml-[58%]">
                  <ArchivalVideo
                    :title="event.video.title"
                    :year="event.year"
                    :note="event.video.note"
                    :youtube-id="event.video.youtubeId"
                    :transcript="event.video.transcript"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ArchivalVideo from '@/components/ArchivalVideo.vue'
import { archivalVideos } from '@/config/archivalVideos'

const timelineEvents = [
  {
    id: 1,
    year: '1989',
    title: 'First Circumnavigation Attempt',
    description:
      'Saloo and Neena embark on their first journey to circumnavigate the globe by car, covering 45,000 kilometres in 69 days, 19 hours and 5 minutes.',
    location: 'Starting from Delhi, India',
    image: '/images/journey/Saloo-Journey1.jpg',
    achievements: ['First circumnavigation by car', 'Covered six continents', 'Guinness World Record certified'],
    video: archivalVideos.timeline1989
  },
  {
    id: 2,
    year: '1991',
    title: 'British Army Challenge',
    description:
      'The British Army accomplishes circumnavigation in 40 days, leading Guinness to drop the "first" title from the Chowdhurys\' record.',
    location: 'Global',
    image: '/images/journey/Saloo-Journey2.jpg',
    achievements: ['Army had significant advantages', 'No customs or visa delays', 'Royal Air Force backup']
  },
  {
    id: 3,
    year: '1991',
    title: 'Record Breaking Journey',
    description:
      'Determined to reclaim their title, the Chowdhurys set off again on November 7, 1991, covering 40,535 kilometres in just 39 days, 20 hours, 15 minutes.',
    location: 'Starting from Delhi, India',
    image: '/images/journey/Saloo-Journey3.jpg',
    achievements: ['Beat British Army by 3 hours 45 minutes', 'New world record', 'Fastest circumnavigation'],
    video: archivalVideos.timeline1991
  },
  {
    id: 4,
    year: '1993-1998',
    title: 'Legal Battle',
    description:
      'Five-year legal battle with Guinness Publishing Limited in Calcutta High Court to be recognized as both first and fastest circumnavigators.',
    location: 'Calcutta High Court, India',
    image: '/images/journey/Saloo-Journey4.jpg',
    achievements: ['Filed case for recognition', 'Demanded £7.5 million damages', 'Fought for five years']
  },
  {
    id: 5,
    year: '1998',
    title: 'Victory and Recognition',
    description:
      'On April 7, 1998, Guinness Publishing Limited signs MOU recognizing the Chowdhurys as first and fastest circumnavigators.',
    location: 'Legal Settlement',
    image: '/images/journey/Saloo-Journey5.jpg',
    achievements: ['Official recognition restored', 'Choudhury Trophy named in their honor', 'Legacy secured for Kolkata']
  },
  {
    id: 6,
    year: 'Present',
    title: 'Continuing Legacy',
    description:
      'The Chowdhurys continue to inspire adventurers worldwide, with their eyes set on bigger targets and new challenges.',
    location: 'Kolkata, India',
    image: '/images/journey/Saloo-Journey6.jpg',
    achievements: ['Guinness World Records Road Challenge', 'Inspiration for future adventurers', 'Kolkata on world map']
  }
]

const siteUrl = 'https://salooneenachoudhury.com'
const pageUrl = `${siteUrl}/timeline`

useSeoMeta({
  title: 'Timeline - Saloo & Neena Chowdhury Journey',
  description:
    "Chronological timeline of Saloo & Neena Chowdhury's record-breaking circumnavigation journeys and achievements.",
  ogTitle: 'Timeline - Saloo & Neena Chowdhury Journey',
  ogDescription:
    "Chronological timeline of Saloo & Neena Chowdhury's record-breaking circumnavigation journeys and achievements.",
  ogUrl: pageUrl,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Timeline - Saloo & Neena Chowdhury Journey',
  twitterDescription:
    "Chronological timeline of Saloo & Neena Chowdhury's record-breaking circumnavigation journeys and achievements.",
  twitterImage: `${siteUrl}/images/gallery/og-image.jpg`
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Saloo & Neena Chowdhury Journey Timeline',
        itemListElement: timelineEvents.map((event, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: `${event.year} - ${event.title}`,
          description: event.description
        }))
      })
    }
  ]
})
</script>
