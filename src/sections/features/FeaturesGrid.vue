<script setup lang="ts">
import Card from 'primevue/card'

import PageContainer from '../../components/ui/PageContainer.vue'
import SectionHeading from '../../components/ui/SectionHeading.vue'

import type { FeatureBlock } from '../../types/site'

withDefaults(
  defineProps<{
    features: FeatureBlock[]
    title?: string
    subtitle?: string
  }>(),
  {
    title: 'Services',
    subtitle:
      'Custom steel fabrication for landscape and outdoor design projects.'
  }
)
</script>

<template>
  <section class="py-14 sm:py-16">
    <PageContainer>
      <div class="space-y-8">
        <SectionHeading
          :title="title"
          :subtitle="subtitle"
          align="left"
        />

        <div class="grid gap-4 md:grid-cols-3">
          <Card
            v-for="feature in features"
            :key="feature.title"
            class="h-full border border-[#3a3a3a] bg-[#202020]"
          >
            <template #content>
              <div class="space-y-3">
                <div
                  class="text-xl"
                  :class="feature.icon"
                  style="color: color-mix(in srgb, var(--brand-primary) 45%, white)"
                />
                <h3 class="text-xl font-semibold text-zinc-100">
                  {{ feature.title }}
                </h3>
                <p class="text-sm leading-relaxed text-zinc-300">
                  {{ feature.description }}
                </p>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </PageContainer>
  </section>
</template>
