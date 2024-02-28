<template>
  <div class="container-fluid">
    <div class="row align-items-start">
      <Header />
    </div>
    <div class="row align-items-center">
      <LazyNuxtPage />
    </div>
    <div class="row align-items-end">
      <LazyFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

useHead({
  htmlAttrs: {
    lang: 'pt-AO'
  },
  meta: [
    { name: 'google', content: 'notranslate' },
    { name: 'author', content: 'António Yosica' },
    { name: 'msapplication-TileColor', content: '#8950f1' },
    { name: 'theme-color', content: '#8950f1' }
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest'
    },
    {
      rel: 'mask-icon',
      href: '/safari-pinned-tab.svg',
      color: '#5bbad5'
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
      rel: 'stylesheet',
      integrity: 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
      crossorigin: 'anonymous'
    }
  ],
  script: [
    {
      async: true,
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
      crossorigin: "anonymous",
      tagPosition: 'bodyClose'
    }
  ]
})

onMounted(() => {
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
/* .home footer {
  position: fixed;
  bottom: 0;
} */
</style>
