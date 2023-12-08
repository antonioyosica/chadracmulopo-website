<script setup lang="ts">
useHead({
  title: 'Chadrac Mulopo – Motion Design',
  meta: [
    { name: 'description', content: '-' }
  ],
  bodyAttrs: {
    class: 'home'
  }
})
</script>

<template>
  <div class="container-fluid">
    <div class="row align-items-start">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <NuxtLink to="/" class="navbar-brand">
            <img src="../assets/img/logo.webp" alt="Chadrac Mulopo" width="38" height="39" class="d-inline-block align-text-top me-2">
            <span><strong>Chadrac</strong> Mulopo</span>
          </NuxtLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NuxtLink to="/sobre" class="nav-link">
                  Sobre Mim
                </NuxtLink>
              </li>
              <li class="nav-item ms-3">
                <NuxtLink to="/blog" class="nav-link">
                  Blog
                </NuxtLink>
              </li>
              <li class="nav-item ms-3">
                <NuxtLink to="/contacto" class="nav-link">
                  Contacto
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="row align-items-center">
      <div class="col-sm-3">
        Level 1: .col-sm-3
      </div>
      <div class="col-sm-9">
        <div class="row">
          <div class="col-8 col-sm-6">
            Level 2: .col-8 .col-sm-6
          </div>
          <div class="col-4 col-sm-6">
            Level 2: .col-4 .col-sm-6
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-end">
      <footer class="footer mt-auto py-3">
        <div class="container text-center">
          <p class="text-muted m-0">&copy; {{ new Date().getFullYear() }}. Todos os direitos reservados.</p>
          <p class="text-muted">Desenvolvido por <a class="font-bold text-muted" href="https://antonioyosica.com/">António Yosica</a></p>
        </div>
      </footer>
    </div>
  </div>
</template>
