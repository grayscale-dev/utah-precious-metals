<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    align?: 'left' | 'center'
    kicker?: string
  }>(),
  {
    subtitle: '',
    align: 'left',
    kicker: ''
  }
)

const alignmentClass = computed(() =>
  props.align === 'center' ? 'text-center' : 'text-left'
)

const subtitleClass = computed(() =>
  props.align === 'center'
    ? 'mx-auto max-w-3xl'
    : 'max-w-3xl'
)
</script>

<template>
  <div :class="['space-y-4', alignmentClass]">
    <p v-if="kicker" class="section-kicker">
      {{ kicker }}
    </p>
    <h2
      class="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      :class="[subtitleClass, 'text-base leading-relaxed text-zinc-300 sm:text-lg']"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
