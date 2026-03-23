<script setup lang="ts">
import Card from 'primevue/card'

import PrimaryButton from '../../components/ui/PrimaryButton.vue'
import type { ContactInfo } from '../../types/site'

defineProps<{
  content: ContactInfo
}>()
</script>

<template>
  <section class="py-6 sm:py-8">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Card class="border border-[#3a3a3a] bg-[#202020] shadow-sm">
        <template #content>
          <div class="grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr_auto] lg:items-center">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Utah Local Service
              </p>
              <p class="mt-2 text-lg font-semibold text-zinc-100">
                Call, text, or email for direct project guidance.
              </p>
            </div>

            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                Location
              </p>
              <p class="mt-2 text-sm font-medium text-zinc-200">
                {{ content.addressLines[0] }}
              </p>
            </div>

            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                Hours
              </p>
              <p class="mt-2 text-sm font-medium text-zinc-200">
                {{ content.hours }}
              </p>
            </div>

            <div class="flex flex-wrap gap-2 lg:justify-end">
              <PrimaryButton
                icon="pi pi-phone"
                label="Call"
                :href="`tel:${content.phone.replace(/[^0-9]/g, '')}`"
                size="small"
              />
              <PrimaryButton
                icon="pi pi-envelope"
                label="Email"
                :href="`mailto:${content.email}`"
                size="small"
                outlined
              />
            </div>
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>
