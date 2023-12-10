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
  <main class="my-4">
    <div class="container-fluid">
      <div class="col-12 col-sm-12 col-md-6">
        <div class="home-card1">
          <a href="#">Conheça os<br />meus <strong>trabalho</strong></a>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-6">
        <div class="row">
          <div class="col-12">
            <div class="home-card2">
              <a href="#">Meu <strong>blog</strong></a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 pe-lg-0">
            <div class="home-card3">
              <a href="#">Sobre <strong>mim</strong></a>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 ps-lg-0">
            <div class="home-card4">
              <a href="#">Entre em<br /><strong>contacto</strong></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
main .container-fluid {
  display: flex;
  flex-wrap: wrap;
}
main .container-fluid .home-card1 {
  min-height: 216px;
  background-color: #F20C1F;
  margin-bottom: 20px;
}

main .container-fluid .home-card2 {
  min-height: 216px;
  background-color: #F2CD5E;
  margin-bottom: 20px;
}

main .container-fluid .home-card3 {
  min-height: 216px;
  background-color: #8950f1;
  margin-bottom: 20px;
}

main .container-fluid .home-card4 {
  min-height: 216px;
  background-color: #8950f1;
}
main .container-fluid .home-card1,
main .container-fluid .home-card2,
main .container-fluid .home-card3,
main .container-fluid .home-card4 {
  border-radius: 26px;
  padding: 22px;
  display: flex;
  align-items: flex-end;
  justify-content: left;
}
main .container-fluid .home-card2 a {
  color: #222020;
}
main .container-fluid .home-card1 a,
main .container-fluid .home-card3 a,
main .container-fluid .home-card4 a {
  color: #ffffff;
}
main .container-fluid .home-card2 a,
main .container-fluid .home-card1 a,
main .container-fluid .home-card3 a,
main .container-fluid .home-card4 a {
  font-size: 1em;
  line-height: 1.2 !important;
  text-decoration: none;
}

@media (min-width: 992px) {
  main .container-fluid .home-card2 a,
  main .container-fluid .home-card1 a,
  main .container-fluid .home-card3 a,
  main .container-fluid .home-card4 a {
    font-size: 1.4em;
  }
  main .container-fluid .home-card1 {
    min-height: 540px;
    margin: 0 20px 0 0 !important;
  }
  main .container-fluid .home-card2 {
    min-height: 260px;
    margin: 0 0 20px 0 !important;
  }
  main .container-fluid .home-card3 {
    min-height: 260px;
    margin: 0 21px 0 0 !important;
  }
  main .container-fluid .home-card4 {
    min-height: 260px;
  }
  main .container-fluid .home-card1,
  main .container-fluid .home-card2,
  main .container-fluid .home-card3,
  main .container-fluid .home-card4 {
    padding: 36px;
  }
}
</style>
