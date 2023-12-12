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
      <div class="col-12 col-sm-12 col-md-5">
        <div class="home-card1">
          <h1>Motion Design</h1>
          <span>Apaixonado pela animação aplicada à publicidade e branding.</span>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-2 about">
        <div class="home-card2"></div>
        <a href="#">Sobre&nbsp;<strong>mim</strong></a>
      </div>
      <div class="col-12 col-sm-12 col-md-5 work">
        <div class="home-card3"></div>
        <a href="#">Meus&nbsp;<strong>trabalhos</strong></a>
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
  border-radius: 26px;
}
main .container-fluid .home-card2 {
  height: 100%;
  width: 100%;
  background-image: url("../assets/img/chadrac-mulopo-md.webp");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100% 125%;
  transition: transform 0.5s ease-in-out;
}
main .container-fluid a:hover + main .container-fluid .home-card2 {
  transform: scale(1.3);
}
main .container-fluid .home-card3 {
  width: 100%;
  height: 100%;
  background-color: #252525;
}
main .container-fluid .home-card1,
main .container-fluid .home-card2,
main .container-fluid .home-card3 {
  border-radius: 26px;
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
  position: relative;
  top: -100%;
}
main .container-fluid a:hover{
  text-decoration: underline;
}

@media (min-width: 992px) {
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
    padding-left: 20px!important;
  }
  main .container-fluid .home-card2 {
    background-image: url("../assets/img/chadrac-mulopo-xs.webp");
    background-position: center;
    background-size: 100% 100%;
  }
  main .container-fluid .home-card1 {
    margin: 0 20px 0 0 !important;
    padding: 125px 64px 0 !important;
  }
}
</style>
