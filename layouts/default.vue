<script lang="ts" setup>
useHead({
  title: 'unCrazy',
  meta: [
    {
      name: 'description',
      content: 'My supercool Nuxt.js project.',
    },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Sigmar&display=swap',
    },
  ],
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
