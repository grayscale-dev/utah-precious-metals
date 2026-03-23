<script setup lang="ts">
import Card from 'primevue/card'

import PageContainer from '../../components/ui/PageContainer.vue'
import SectionHeading from '../../components/ui/SectionHeading.vue'

import type { ProcessStep } from '../../types/site'

defineProps<{
  steps: ProcessStep[]
}>()
</script>

<template>
  <section class="border-y border-[#363636] bg-[#1b1b1b] py-16 sm:py-20">
    <PageContainer>
      <div class="space-y-10">
        <SectionHeading
          title="How We Build"
          subtitle="A straightforward process from first message to completed fabrication."
          kicker="Process"
          align="left"
        />

        <div class="grid gap-4 md:grid-cols-3">
          <Card
            v-for="(step, index) in steps"
            :key="step.title"
            class="h-full border border-[#3a3a3a] bg-[#202020] shadow-sm"
          >
            <template #content>
              <div class="space-y-3">
                <p
                  class="inline-flex items-center justify-center text-sm font-semibold text-zinc-400"
                >
                  {{ `0${index + 1}` }}
                </p>
                <h3 class="text-lg font-semibold text-zinc-100">
                  {{ step.title }}
                </h3>
                <p class="text-sm leading-relaxed text-zinc-300">
                  {{ step.description }}
                </p>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </PageContainer>
  </section>
</template>
