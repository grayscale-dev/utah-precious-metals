<script setup lang="ts">
import type { FooterData } from '../../types/site'

defineProps<{
  siteName: string
  footer: FooterData
}>()
</script>

<template>
  <footer class="border-t border-[#363636] bg-[#161616]">
    <div class="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-12">
        <div class="max-w-md space-y-3">
          <h2
            class="text-base font-semibold uppercase tracking-[0.16em] text-zinc-100"
          >
            {{ siteName }}
          </h2>
          <p class="text-sm leading-relaxed text-zinc-300">
            {{ footer.legal }}
          </p>
        </div>

        <div
          v-for="column in footer.columns"
          :key="column.title"
          class="space-y-3"
        >
          <h3
            class="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400"
          >
            {{ column.title }}
          </h3>

          <ul class="space-y-2">
            <li
              v-for="link in column.links"
              :key="`${column.title}-${link.label}`"
            >
              <a
                v-if="link.href"
                :href="link.href"
                class="text-sm text-zinc-300 transition-colors hover:text-zinc-100"
              >
                {{ link.label }}
              </a>
              <span v-else class="text-sm text-zinc-400">{{ link.label }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 border-t border-[#363636] pt-4">
        <div
          class="flex flex-col gap-2 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between"
        >
          <span>{{ footer.copyright }}</span>
          <span>Utah Custom Metal Design &amp; Fabrication</span>
        </div>
      </div>
    </div>
  </footer>
</template>
