<script setup lang="ts">
import Carousel from 'primevue/carousel'

import PageContainer from '../../components/ui/PageContainer.vue'
import SectionHeading from '../../components/ui/SectionHeading.vue'

import type { GalleryImage } from '../../types/site'

defineProps<{
  images: GalleryImage[]
}>()

const responsiveOptions = [
  { breakpoint: '1200px', numVisible: 1, numScroll: 1 },
  { breakpoint: '768px', numVisible: 1, numScroll: 1 },
  { breakpoint: '560px', numVisible: 1, numScroll: 1 }
]
</script>

<template>
  <section class="py-14 sm:py-16">
    <PageContainer>
      <div class="space-y-8">
        <SectionHeading
          title="Featured Work"
          subtitle="A look at custom steel landscape fabrication."
          align="left"
        />

        <div v-if="images.length" class="featured-carousel">
          <Carousel
            :value="images"
            :num-visible="1"
            :num-scroll="1"
            :responsive-options="responsiveOptions"
            :show-navigators="images.length > 1"
            :show-indicators="images.length > 1"
            :circular="images.length > 1"
            :autoplay-interval="5000"
            class="featured-carousel-widget w-full"
          >
            <template #item="{ data }">
              <figure class="featured-slide">
                <img
                  :src="data.src"
                  :alt="data.alt"
                  class="featured-slide-image"
                  loading="lazy"
                />
                <div class="featured-slide-overlay" />
                <figcaption class="featured-slide-caption">
                  {{ data.alt }}
                </figcaption>
              </figure>
            </template>
          </Carousel>
        </div>
      </div>
    </PageContainer>
  </section>
</template>
