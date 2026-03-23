<script setup lang="ts">
import PageContainer from '../../components/ui/PageContainer.vue'
import PrimaryButton from '../../components/ui/PrimaryButton.vue'

import type { HeroContent } from '../../types/site'

defineProps<{
  content: HeroContent
}>()

const heroImage =
  '/frontyard.png'
</script>

<template>
  <section class="relative overflow-hidden border-b border-[#363636] py-24 sm:py-28">
    <img
      :src="heroImage"
      alt=""
      aria-hidden="true"
      class="absolute inset-0 -z-20 h-full w-full object-cover"
      loading="eager"
    />
    <div
      class="absolute inset-0 -z-10"
      style="
        background:
          linear-gradient(
            90deg,
            rgba(16, 16, 16, 0.86) 0%,
            rgba(16, 16, 16, 0.72) 45%,
            rgba(16, 16, 16, 0.55) 100%
          );
      "
      aria-hidden="true"
    />

    <PageContainer>
      <div class="max-w-3xl space-y-6">
        <p
          v-if="content.eyebrow"
          class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300"
        >
          {{ content.eyebrow }}
        </p>

        <h1 class="text-5xl font-semibold leading-none tracking-tight text-zinc-100 sm:text-6xl">
          {{ content.title }}
        </h1>

        <p class="max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg">
          {{ content.subtitle }}
        </p>

        <div class="flex flex-wrap items-center gap-3">
          <PrimaryButton
            :label="content.primaryCta.label"
            :to="content.primaryCta.to"
            :href="content.primaryCta.href"
          />
          <PrimaryButton
            v-if="content.secondaryCta"
            :label="content.secondaryCta.label"
            :to="content.secondaryCta.to"
            :href="content.secondaryCta.href"
            outlined
          />
        </div>
      </div>
    </PageContainer>
  </section>
</template>
