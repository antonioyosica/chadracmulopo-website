<script setup lang="ts">
useHead({
  title: 'Meus Trabalhos - Chadrac Mulopo',
  meta: [
    { name: 'description', content: '' },
    { name: 'keywords', content: '' },
    { name: 'robots', content: 'index, follow' },
    { name: 'og:title', content: 'Meus Trabalhos - Chadrac Mulopo' },
    { name: 'og:description', content: '' },
    { name: 'og:type', content: 'website' },
    { name: 'og:image', content: 'https://static1storage.s3.eu-west-2.amazonaws.com/vbox/chadracmulopo/chadrac-mulopo-motion-designer.sm.png' },
    { name: 'og:image:width', content: '1089' },
    { name: 'og:image:height', content: '630' },
    { name: 'og:image:type', content: 'image/png' },
    { name: 'og:url', content: 'https://chadracmulopo.com/trabalho' },
    { name: 'og:locale', content: 'pt_AO' },
    { name: 'og:site_name', content: 'Chadrac Mulopo' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Meus Trabalhos - Chadrac Mulopo' },
    { name: 'twitter:description', content: '' },
    { name: 'twitter:image', content: 'https://static1storage.s3.eu-west-2.amazonaws.com/vbox/chadracmulopo/chadrac-mulopo-motion-designer.sm.png' },
    { name: 'twitter:image:alt', content: 'Meus Trabalhos - Chadrac Mulopo' },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://chadracmulopo.com/trabalho'
    }
  ],
  bodyAttrs: {
    class: 'works'
  }
})
import { vueVimeoPlayer } from 'vue-vimeo-player'
</script>

<template>
  <main class="my-4">
    <div class="container">
      <div class="row">
        <div class="col-12 p-3 text-center">
          <div class="d-flex mb-3 flex-column">
            <h1 class="mb-4">Animações que Contam Histórias</h1>
            <p>Explore meu portfólio e veja como transformei desafios em oportunidades, incorporando movimento e criatividade para contar histórias memoráveis. Se você procura uma abordagem única para elevar sua marca, você está no lugar certo.</p>
          </div>
            <div class="row p-4 pt-0">
              <div class="col-lg-6 gallery-item">
                <vue-vimeo-player
                    video-id="841939862" player-height="315"
                />
              </div>

              <div class="col-lg-6 gallery-item">
                <vue-vimeo-player
                    video-id="841936147" player-height="315"
                />
              </div>

              <div class="col-lg-6 gallery-item">
                <vue-vimeo-player
                    video-id="948632583" player-height="315"
                />
              </div>

              <div class="col-lg-6 gallery-item">
                <vue-vimeo-player
                    video-id="874378755" player-height="315"
                />
              </div>

              <div class="col-lg-6 gallery-item">
                <vue-vimeo-player
                    video-id="841943403" player-height="315"
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.gallery-item {
  margin-top: 30px !important;
}

/* .video-gallery .gallery-item img {
  position: relative;
  display: block;
  width: 115%;
  height: 300px;
  object-fit: cover;
  opacity: .5;
  transition: opacity .35s, transform .35s;
  transition: all 350ms ease-in-out;
  transform: translate3d(-23px, 0, 0);
  backface-visibility: hidden;
}

.north-cascades-img {
  object-position: 50% 30%;
}

.video-gallery .gallery-item .gallery-item-caption {
  padding: 32px;
  font-size: 1em;
  color: #fff;
  text-transform: uppercase;
}

.video-gallery .gallery-item .gallery-item-caption,
.video-gallery .gallery-item .gallery-item-caption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-gallery .gallery-item h2 {
  font-weight: 300;
  overflow: hidden;
  padding: 12px 0;
}

.video-gallery .gallery-item h2,
.video-gallery .gallery-item p {
  position: relative;
  margin: 0;
  z-index: 1;
  pointer-events: none;
}

.video-gallery .gallery-item p {
  letter-spacing: 1px;
  font-size: 12px;
  padding: 12px 0;
  opacity: 0;
  transition: opacity 0.35s, transform 0.35s;
  transform: translate3d(10%, 0, 0);
}

.video-gallery .gallery-item:hover img {
  opacity: 0.3;
  transform: translate3d(0, 0, 0);
}

.video-gallery .gallery-item .gallery-item-caption {
  text-align: left;
}

.video-gallery .gallery-item h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 15%;
  height: 1px;
  background: #fff;
  transition: transform 0.3s;
  transform: translate3d(-100%, 0, 0);
}

.video-gallery .gallery-item:hover h2::after {
  transform: translate3d(0, 0, 0);
}

.video-gallery .gallery-item:hover p {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

@media screen and (max-width: 784px) {
  .video-gallery {
    width: 100%;
    padding: 15px;

  }
  .video-gallery .gallery-item {
    width: 95%;
    margin: 0 auto;
    width: 100%;
  }
}
*/

.vp-center {
  justify-content: flex-start !important;
}
</style>