<script setup lang="ts">
import Card from 'primevue/card'

import PrimaryButton from '../../components/ui/PrimaryButton.vue'
import type { ContactInfo } from '../../types/site'

defineProps<{
  content: ContactInfo
}>()
</script>

<template>
  <section class="border-t border-[#363636] bg-[#1b1b1b] py-14 sm:py-16">
    <div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Card class="border border-[#3a3a3a] bg-[#202020]">
        <template #content>
          <div class="space-y-4">
            <h3 class="text-2xl font-semibold text-zinc-100">Contact</h3>
            <p class="text-sm leading-relaxed text-zinc-300">
              {{ content.body }}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <PrimaryButton
                icon="pi pi-phone"
                label="Call / Text"
                :href="`tel:${content.phone.replace(/[^0-9]/g, '')}`"
              />
              <PrimaryButton
                icon="pi pi-envelope"
                label="Email"
                :href="`mailto:${content.email}`"
                outlined
              />
            </div>

            <div class="space-y-1 text-sm text-zinc-300">
              <p class="break-all">
                <span class="font-semibold text-zinc-100">Email:</span>
                {{ content.email }}
              </p>
              <p>
                <span class="font-semibold text-zinc-100">Phone:</span>
                {{ content.phone }}
              </p>
              <p>
                <span class="font-semibold text-zinc-100">Hours:</span>
                {{ content.hours }}
              </p>
              <p class="font-semibold text-zinc-100">Address:</p>
              <p
                v-for="line in content.addressLines"
                :key="line"
                class="text-zinc-300"
              >
                {{ line }}
              </p>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>
