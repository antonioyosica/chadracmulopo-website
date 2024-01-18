<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">
        <img src="../assets/img/logo.webp" alt="Chadrac Mulopo" width="38" height="38" class="d-inline-block align-text-top me-2">
        <span><strong>Chadrac</strong> Mulopo</span>
      </NuxtLink>
      <button class="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item ms-3" v-if="route.name !== 'index'">
            <NuxtLink to="/sobre" class="nav-link">
              Sobre Mim
            </NuxtLink>
          </li>
          <li class="nav-item ms-3" v-if="route.name !== 'index'">
            <NuxtLink to="/blog" class="nav-link">
              Blog
            </NuxtLink>
          </li>
          <li class="nav-item ms-3" v-if="route.name !== 'index'">
            <NuxtLink to="/contacto" class="nav-link">
              Contacto
            </NuxtLink>
          </li>
          <li class="nav-item ms-lg-5">
            <ul class="social-icons">
              <!-- <li class="nav-item"><a class="nav-link facebook" href="#" target="_blank"></a></li> -->
              <li class="nav-item"><a class="nav-link linkedin" href="https://www.linkedin.com/in/chadrac-mulopo/" target="_blank"></a></li>
              <li class="nav-item"><a class="nav-link instagram" href="https://www.instagram.com/chadrac_mulopo/" target="_blank"></a></li>
              <li class="nav-item"><a class="nav-link behance" href="https://www.behance.net/chadracmulopo" target="_blank"></a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>