<script setup lang="ts">
useHead({
  title: 'Chadrac Mulopo – Motion Designer',
  meta: [
    { name: 'description', content: 'Explore e descubra narrativas visuais envolventes e inovadoras que elevam marcas a novas alturas. Chadrac Mulopo, Motion Designer.' },
    { name: 'keywords', content: 'chadrac mulopo, motion designer, animação publicitária, narrativas visuais, animação criativa, experiências visuais memoráveis' },
    { name: 'robots', content: 'index, follow' },
    { name: 'og:title', content: 'Chadrac Mulopo – Motion Designer' },
    { name: 'og:description', content: 'Explore e descubra narrativas visuais envolventes e inovadoras que elevam marcas a novas alturas. Chadrac Mulopo, Motion Designer.' },
    { name: 'og:type', content: 'website' },
    { name: 'og:image', content: 'https://static1storage.s3.eu-west-2.amazonaws.com/vbox/chadracmulopo/chadrac-mulopo-motion-designer.sm.png' },
    { name: 'og:image:width', content: '1089' },
    { name: 'og:image:height', content: '630' },
    { name: 'og:image:type', content: 'image/png' },
    { name: 'og:url', content: 'https://chadracmulopo.com/' },
    { name: 'og:locale', content: 'pt_AO' },
    { name: 'og:site_name', content: 'Chadrac Mulopo' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Chadrac Mulopo – Motion Designer' },
    { name: 'twitter:description', content: 'Explore e descubra narrativas visuais envolventes e inovadoras que elevam marcas a novas alturas. Chadrac Mulopo, Motion Designer.' },
    { name: 'twitter:image', content: 'https://static1storage.s3.eu-west-2.amazonaws.com/vbox/chadracmulopo/chadrac-mulopo-motion-designer.sm.png' },
    { name: 'twitter:image:alt', content: 'Chadrac Mulopo – Motion Designer' },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://chadracmulopo.com/'
    }
  ],
  bodyAttrs: {
    class: 'home'
  }
})
</script>

<template>
  <main class="my-4">
    <div class="container-fluid">
      <div class="col-12 col-sm-12 col-md-5">
        <div class="home-card1">
          <h1>Motion<br />Designer</h1>
          <span>Apaixonado pela animação aplicada à publicidade e branding.</span>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-3 about">
        <NuxtLink to="/sobre">Sobre&nbsp;<strong>mim</strong></NuxtLink>
      </div>
      <div class="col-12 col-sm-12 col-md-4m work">
        <NuxtLink to="/trabalho">Meus&nbsp;<strong>trabalhos</strong></NuxtLink>
      </div>
    </div>
  </main>
</template>

<style>
main .container-fluid {
  display: flex;
  flex-wrap: wrap;
}
main .container-fluid .about,
main .container-fluid .work {
  min-height: 256px;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
  border-radius: 26px !important;
}
main .container-fluid .about a,
main .container-fluid .work a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: inherit;
  position: relative;
  z-index: 1;
}
main .container-fluid .about a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/chadrac-mulopo-md.webp");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% 125%;
  z-index: -1;
  transition: transform 0.5s ease-in-out;
}
main .container-fluid .work a:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #252525;
  z-index: -1;
}
main .container-fluid .about a:hover:before {
  transform: scale(1.3);
}
main .container-fluid .home-card1,
main .container-fluid .about a,
main .container-fluid .work a {
  display: flex;
}
main .container-fluid .home-card1 {
  min-height: 256px;
  background-color: transparent;
  margin-bottom: 20px;
  padding-top: 0;
  align-items: normal;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}
main .container-fluid .home-card1 h1 {
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 38px;
}
main .container-fluid .home-card1 span {
  font-size: 1.4em;
  line-height: 1.3 !important;
}
main .container-fluid a{
  font-size: 0.9em;
  line-height: 1.3 !important;
  text-decoration: none;
  color: #ffffff;
  height: 100%;
  width: 100%;
  padding: 22px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
main .container-fluid a:hover{
  text-decoration: underline;
}

@media (min-width: 992px) {
  main .container-fluid .home-card1 h1 {
    font-size: 4.534em;
  }
  main .container-fluid .home-card1 span {
    font-size: 1.6em;
  }
  main .container-fluid a,
  main .container-fluid a{
    font-size: 1em;
    padding: 36px;
  }
  main .container-fluid .about a {
    align-items: flex-end;
    justify-content: left;
  }
  main .container-fluid .work a {
    align-items: flex-end;
    justify-content: right;
  }
  main .container-fluid .work,
  main .container-fluid .about,
  main .container-fluid .home-card1 {
    min-height: 512px;
  }
  main .container-fluid .work {
    margin-left: 30px!important;
  }
  main .container-fluid .about a:before {
    background-image: url("../assets/img/chadrac-mulopo-xs.webp");
    background-position: center;
    background-size: 100% 110%;
  }
  main .container-fluid .home-card1 {
    margin: 0 20px 0 0 !important;
    padding: 32px 60px 0 !important;
    text-align: left;
  }
}
</style>
