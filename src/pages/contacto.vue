<script setup lang="ts">
useHead({
  title: 'Contacto - Chadrac Mulopo',
  meta: [
    { name: 'description', content: '' },
    { name: 'keywords', content: '' },
    { name: 'robots', content: 'index, follow' },
    { name: 'og:title', content: 'Contacto - Chadrac Mulopo' },
    { name: 'og:description', content: '' },
    { name: 'og:type', content: 'website' },
    { name: 'og:image', content: 'https://static1storage.s3.eu-west-2.amazonaws.com/vbox/chadracmulopo/chadrac-mulopo-motion-designer.sm.png' },
    { name: 'og:image:width', content: '1089' },
    { name: 'og:image:height', content: '630' },
    { name: 'og:image:type', content: 'image/png' },
    { name: 'og:url', content: 'https://chadracmulopo.com/contacto' },
    { name: 'og:locale', content: 'pt_AO' },
    { name: 'og:site_name', content: 'Chadrac Mulopo' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Contacto - Chadrac Mulopo' },
    { name: 'twitter:description', content: '' },
    { name: 'twitter:image', content: 'https://static1storage.s3.eu-west-2.amazonaws.com/vbox/chadracmulopo/chadrac-mulopo-motion-designer.sm.png' },
    { name: 'twitter:image:alt', content: 'Contacto - Chadrac Mulopo' },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://chadracmulopo.com/contacto'
    }
  ],
  script: [
    {
      async: true,
      src: "https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js",
      tagPosition: 'bodyClose'
    }
  ],
  bodyAttrs: {
    class: 'contact'
  }
})
</script>

<template>
  <main class="my-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12 p-5">
          <div class="d-flex mb-3 flex-column">
            <h1 class="mb-4">Vamos Criar Juntos<br><span class="h3">Entre em Contacto</span></h1>
            <!-- <div class="d-flex flex-wrap">
              <div class="
                    d-flex
                    flex-wrap
                    justify-content-center
                    align-items-center
                    me-4
                  ">
                <input type="checkbox" name="webdev" class="form-check-input m-0 me-3" id="webdev" />
                <label for="webdev"> Web Development</label>
              </div>
              <div class="
                    d-flex
                    flex-wrap
                    justify-content-center
                    align-items-center
                    me-4
                  ">
                <input type="checkbox" name="webdes" class="form-check-input m-0 me-3" id="webdes" />
                <label for="webdes"> Web Design</label>
              </div>
              <div class="
                    d-flex
                    flex-wrap
                    justify-content-center
                    align-items-center
                    me-4
                  ">
                <input type="checkbox" name="logodes" class="form-check-input m-0 me-3" id="logodes" />
                <label for="logodes"> Logo Design</label>
              </div>
              <div class="
                    d-flex
                    flex-wrap
                    justify-content-center
                    align-items-center
                    me-4
                  ">
                <input type="checkbox" name="others" class="form-check-input m-0 me-3" id="others" />
                <label for="others"> Others </label>
              </div>
            </div> -->
            <p>Não hesite em me contactar para iniciar uma jornada emocionante rumo a animações que deixarão uma marca duradoura no seu público-alvo. Juntos, podemos criar algo extraordinário!</p>
          </div>
          <form class="row mb-3">
            <div class="col-md-6 p-3">
              <input required placeholder="Nome" type="text" name="name" id="name" />
            </div>
            <div class="col-md-6 p-3">
              <input required placeholder="E-mail" type="email" name="email" id="email" />
            </div>
            <div class="col-md">
              <textarea required name="message" placeholder="Escreva sua mensagem..." id="" cols="30" rows="3"></textarea>
            </div>
            <div class="text-end mt-4">
              <button class="btn px-4 py-3 btn-outline-dark" type="button">Enviar</button>
            </div>
          </form>
        </div>
        <div class="col-lg-4 col-md-12 text-white aside p-4">
          <div class="d-flex flex-column px-0">
            <ul class="m-0 p-0">
              <li class="d-flex justify-content-start align-items-center mb-4">
                <span class="opacity-50 d-flex align-items-center me-3 fs-2">
                  <ion-icon name="call"></ion-icon>
                </span>
                <span class="d-flex phones-number"><a href="tel:" class="">(+244) 9xx xxx xxx</a><a href="tel:" class="">(+244) 9xx xxx xxx</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  border: none;
  border-bottom: 2px solid rgb(128, 126, 126);
  background: transparent;
  outline: none;
  width: 100%;
  text-transform: capitalize;
  padding: 1rem 0.4rem;
  color: #ffffff;
}
input[type="text"]::placeholder,
input[type="email"]::placeholder,
input[type="tel"]::placeholder,
textarea::placeholder {
  color: #A6A6A6;
}
.aside {
  background-image: linear-gradient(
      to left bottom,
      #8950f1,
      #833cff,
      #6a5acd,
      #7b68ee,
      #672ad7
  );
  animation: animateClr 5s infinite cubic-bezier(0.62, 0.28, 0.23, 0.99);
  background-size: 400%;
}

@keyframes animateClr {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

ion-icon {
  border: 1px solid currentColor;
  border-radius: 20%;
  padding: 1rem;
}
.phones-number {
  flex-direction: column;
  color: #A6A6A6;
}
.phones-number a {
  color: #ffffff;
  text-decoration: none;
  font-size:1.3em;
}
.phones-number a:hover {
  text-decoration: underline;
}
button{
  background-color: #A6A6A6;
}
</style>