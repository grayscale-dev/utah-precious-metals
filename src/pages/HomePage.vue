<script setup lang="ts">
import { onMounted } from 'vue'

import { siteContent } from '../content/site-content'
import { applyPageSeo } from '../lib/seo'
import ContactSection from '../sections/contact/ContactSection.vue'
import FeaturesGrid from '../sections/features/FeaturesGrid.vue'
import GalleryShowcase from '../sections/gallery/GalleryShowcase.vue'
import HeroPrimary from '../sections/hero/HeroPrimary.vue'

onMounted(() => {
  applyPageSeo({
    title: '',
    description: siteContent.metadata.description
  })
})
</script>

<template>
  <div id="home" class="scroll-mt-28">
    <HeroPrimary :content="siteContent.hero" />
  </div>
  <div id="build" class="scroll-mt-28">
    <FeaturesGrid
      :features="siteContent.features"
      title="What We Build"
      subtitle="A focused set of custom steel services for outdoor spaces."
    />
  </div>
  <div id="work" class="scroll-mt-28">
    <GalleryShowcase :images="siteContent.galleryImages" />
  </div>
  <div id="contact" class="scroll-mt-28">
    <ContactSection :content="siteContent.contact" />
  </div>
</template>
