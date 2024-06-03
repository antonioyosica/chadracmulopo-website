<script setup lang="ts">
useHead({
  title: 'Sobre Mim - Chadrac Mulopo',
  meta: [
    { name: 'description', content: '' },
    { name: 'keywords', content: '' },
    { name: 'robots', content: 'index, follow' },
    { name: 'og:title', content: 'Sobre Mim - Chadrac Mulopo' },
    { name: 'og:description', content: '' },
    { name: 'og:type', content: 'website' },
    { name: 'og:image', content: 'https://static1storage.s3.eu-west-2.amazonaws.com/vbox/chadracmulopo/chadrac-mulopo-motion-designer.sm.png' },
    { name: 'og:image:width', content: '1089' },
    { name: 'og:image:height', content: '630' },
    { name: 'og:image:type', content: 'image/png' },
    { name: 'og:url', content: 'https://chadracmulopo.com/sobre' },
    { name: 'og:locale', content: 'pt_AO' },
    { name: 'og:site_name', content: 'Chadrac Mulopo' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Sobre Mim - Chadrac Mulopo' },
    { name: 'twitter:description', content: '' },
    { name: 'twitter:image', content: 'https://static1storage.s3.eu-west-2.amazonaws.com/vbox/chadracmulopo/chadrac-mulopo-motion-designer.sm.png' },
    { name: 'twitter:image:alt', content: 'Sobre Mim - Chadrac Mulopo' },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://chadracmulopo.com/sobre'
    }
  ],
  bodyAttrs: {
    class: 'about'
  }
})
</script>

<template>
  <main class="my-4">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-4 image">
          <img src="../assets/img/chadrac-mulopo-md.webp" alt="Chadrac Mulopo, o Motion Designer" class="">
        </div>
        <div class="col-12 col-md-8 content">
          <h1>Quem Sou?</h1>
          <p>
            Olá! <br />
            Chamo-me <strong style="text-decoration: underline;">Chadrac Mulopo</strong>, actuo no mercado há mais de meia década. Já entreguei projectos para diversas plataformas, sempre unindo tecnologia e criatividade com um acabamento impecável.
          </p>
          <p>
            Actualmente, actuo como consultor criativo independente, trabalhando em parceria com empresas de modo a construir narrativas através da animação que resultam em crescimento na audiência, assim gerando conexão com o publico, criando animações de publicidade e branding, e gerando resultados incríveis através das mais diversas plataformas.
          </p>
          <p>
            Tenho trabalhado com grandes marcas como:
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main .container-fluid .row .image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

main .container-fluid .row .image {
  min-height: 256px;
  margin-bottom: 30px;
}

main .container-fluid .row .content {

}
main .container-fluid .row .content h1 {
  display: none;
}
@media (min-width: 992px) {
  main .container-fluid .row {
    padding: 16px 60px 0 !important;
    text-align: left;
  }
  main .container-fluid .row .image {
    min-height: 512px;
    padding-right: 30px;
    margin-bottom: 0;
  }
  main .container-fluid .row .content {
    padding-left: 30px;
  }
  main .container-fluid .row .content h1 {
    display: block;
    margin-bottom: 30px;
  }
}
</style>