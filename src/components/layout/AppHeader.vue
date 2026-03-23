<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Drawer from 'primevue/drawer'

import type { NavItem } from '../../types/site'

const props = defineProps<{
  siteName: string
  navItems: NavItem[]
  phone?: string
}>()

const mobileMenuOpen = ref(false)

function closeMobileMenu(): void {
  mobileMenuOpen.value = false
}

function navigateToSection(anchor: string): void {
  const sectionId = anchor.startsWith('#') ? anchor.slice(1) : anchor

  closeMobileMenu()

  requestAnimationFrame(() => {
    const section = document.getElementById(sectionId)

    if (!section) {
      window.location.hash = `#${sectionId}`
      return
    }

    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}${window.location.search}#${sectionId}`
    )

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b bg-[#161616]/95 backdrop-blur"
    style="border-color: var(--border-strong)"
  >
    <div
      class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
    >
      <a
        href="#home"
        class="flex items-center gap-3"
      >
        <img
          src="/logo.png"
          alt="Utah Precious Metals logo"
          class="h-10 w-auto object-contain"
          loading="eager"
        />
        <span
          class="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-zinc-200 sm:text-[0.68rem] sm:tracking-[0.14em]"
        >
          {{ props.siteName }}
        </span>
      </a>

      <nav class="hidden items-center gap-1 md:flex">
        <a
          v-for="item in props.navItems"
          :key="item.to"
          :href="item.to"
          class="rounded-sm px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-zinc-400 transition-colors hover:bg-[#242424] hover:text-zinc-100"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <Button
          icon="pi pi-bars"
          text
          rounded
          aria-label="Open navigation menu"
          class="md:hidden"
          @click="mobileMenuOpen = true"
        />
      </div>
    </div>

    <Drawer
      v-model:visible="mobileMenuOpen"
      header="Navigation"
      position="right"
    >
      <nav class="flex flex-col gap-2 pt-2">
        <a
          v-if="props.phone"
          :href="`tel:${props.phone.replace(/[^0-9]/g, '')}`"
          class="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-[#242424] hover:text-zinc-100"
          @click="closeMobileMenu"
        >
          {{ `Call: ${props.phone}` }}
        </a>

        <a
          v-for="item in props.navItems"
          :key="`mobile-${item.to}`"
          href="#"
          class="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-[#242424] hover:text-zinc-100"
          @click.prevent="navigateToSection(item.to)"
        >
          {{ item.label }}
        </a>

        <Button
          label="Contact Us"
          class="mt-2 w-full"
          @click="navigateToSection('#contact')"
        />
      </nav>
    </Drawer>
  </header>
</template>
