<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'

const props = withDefaults(
  defineProps<{
    label: string
    to?: string
    href?: string
    outlined?: boolean
    icon?: string
    size?: 'small' | 'large'
  }>(),
  {
    to: '',
    href: '',
    outlined: false,
    icon: undefined,
    size: undefined
  }
)

const isExternalHref = computed(() => /^https?:\/\//.test(props.href))
</script>

<template>
  <RouterLink v-if="to" :to="to" class="inline-flex">
    <Button :label="label" :outlined="outlined" :icon="icon" :size="size" />
  </RouterLink>

  <a
    v-else-if="href"
    :href="href"
    :target="isExternalHref ? '_blank' : undefined"
    :rel="isExternalHref ? 'noreferrer' : undefined"
    class="inline-flex"
  >
    <Button :label="label" :outlined="outlined" :icon="icon" :size="size" />
  </a>

  <Button
    v-else
    :label="label"
    :outlined="outlined"
    :icon="icon"
    :size="size"
  />
</template>
