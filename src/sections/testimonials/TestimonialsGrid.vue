<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Card from 'primevue/card'

import PageContainer from '../../components/ui/PageContainer.vue'
import SectionHeading from '../../components/ui/SectionHeading.vue'

import type { Testimonial } from '../../types/site'

defineProps<{
  testimonials: Testimonial[]
}>()

function initials(name: string): string {
  return name
    .split(' ')
    .map((value) => value[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}
</script>

<template>
  <section class="bg-[#1b1b1b] py-16 sm:py-20">
    <PageContainer>
      <div class="space-y-10">
        <SectionHeading
          title="Testimonials"
          subtitle="Client feedback section"
          align="left"
        />

        <div v-if="testimonials.length" class="grid gap-4 lg:grid-cols-3">
          <Card
            v-for="item in testimonials"
            :key="`${item.name}-${item.company}`"
            class="h-full border border-[#3a3a3a] bg-[#202020] shadow-sm"
          >
            <template #content>
              <div class="space-y-5">
                <p class="text-sm leading-relaxed text-zinc-300">
                  "{{ item.quote }}"
                </p>

                <div class="flex items-center gap-3">
                  <Avatar
                    :label="initials(item.name)"
                    shape="circle"
                    style="
                      background-color: var(--brand-primary-soft);
                      color: var(--brand-primary);
                    "
                  />
                  <div>
                    <p class="text-sm font-semibold text-zinc-100">
                      {{ item.name }}
                    </p>
                    <p class="text-sm text-zinc-300">
                      {{ item.role }} at {{ item.company }}
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>

        <Card v-else class="border border-[#3a3a3a] bg-[#202020] shadow-sm">
          <template #content>
            <p class="text-sm leading-relaxed text-zinc-300">
              Detailed public testimonials are not currently published.
              Contact us directly if you would like to discuss prior work.
            </p>
          </template>
        </Card>
      </div>
    </PageContainer>
  </section>
</template>
