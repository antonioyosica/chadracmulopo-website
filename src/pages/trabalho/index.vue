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
            <div class="row p-0">
              <div class="p-0" style="height: 100%;/* overflow: hidden; */text-align: center">
                <div class="csslider infinity" id="slider1">
                  <input type="radio" name="slides" checked="checked" id="slide1"/>
                  <input type="radio" name="slides" id="slide2"/>
                  <input type="radio" name="slides" id="slide3"/>
                  <input type="radio" name="slides" id="slide4"/>
                  <input type="radio" name="slides" id="slide5"/>
                  <ul>
                    <li>
                      <iframe
                          src="//player.vimeo.com/video/841939862"
                          width="100%"
                          height="401px"
                          frameborder="0"
                          webkitallowfullscreen
                          mozallowfullscreen
                          allowfullscreen
                          allow="autoplay; encrypted-media"></iframe>
                    </li>

                    <li>
                      <iframe
                          src="//player.vimeo.com/video/841936147"
                          width="100%"
                          height="401px"
                          frameborder="0"
                          webkitallowfullscreen
                          mozallowfullscreen
                          allowfullscreen
                          allow="autoplay; encrypted-media"></iframe>
                    </li>

                    <li>
                      <iframe
                          src="//player.vimeo.com/video/948632583"
                          width="100%"
                          height="401px"
                          frameborder="0"
                          webkitallowfullscreen
                          mozallowfullscreen
                          allowfullscreen
                          allow="autoplay; encrypted-media"></iframe>
                    </li>

                    <li>
                      <iframe
                          src="//player.vimeo.com/video/874378755"
                          width="100%"
                          height="401px"
                          frameborder="0"
                          webkitallowfullscreen
                          mozallowfullscreen
                          allowfullscreen
                          allow="autoplay; encrypted-media"></iframe>
                    </li>

                    <li>
                      <iframe
                          src="//player.vimeo.com/video/841943403"
                          width="100%"
                          height="401px"
                          frameborder="0"
                          webkitallowfullscreen
                          mozallowfullscreen
                          allowfullscreen
                          allow="autoplay; encrypted-media"></iframe>
                    </li>
                  </ul>
                  <div class="arrows">
                    <label for="slide1"></label>
                    <label for="slide2"></label>
                    <label for="slide3"></label>
                    <label for="slide4"></label>
                    <label for="slide5"></label>
                    <label class="goto-first" for="slide1"></label>
                    <label class="goto-last" for="slide5"></label>
                  </div>
                  <div class="navigation">
                    <div>
                      <label for="slide1"></label>
                      <label for="slide2"></label>
                      <label for="slide3"></label>
                      <label for="slide4"></label>
                      <label for="slide5"></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@media (max-width: 991px) {
  iframe {
    height: 171px !important;
  }
  .csslider > ul {
    margin: 0 !important;
    width: 100% !important;
    height: 175px !important;
  }
  #slider1 {
    margin: 0 !important;
  }
  .csslider > .arrows {
    left: -15px !important;
    width: 96% !important;
    height: 32px !important;
    padding: 0 21px !important;
  }
}

.csslider {
  -moz-perspective: 1300px;
  -ms-perspective: 1300px;
  -webkit-perspective: 1300px;
  perspective: 1300px;
  display: inline-block;
  text-align: left;
  position: relative;
  margin-bottom: 22px;
}
.csslider > input {
  display: none;
}
.csslider > input:nth-of-type(10):checked ~ ul li:first-of-type {
  margin-left: -900%;
}
.csslider > input:nth-of-type(9):checked ~ ul li:first-of-type {
  margin-left: -800%;
}
.csslider > input:nth-of-type(8):checked ~ ul li:first-of-type {
  margin-left: -700%;
}
.csslider > input:nth-of-type(7):checked ~ ul li:first-of-type {
  margin-left: -600%;
}
.csslider > input:nth-of-type(6):checked ~ ul li:first-of-type {
  margin-left: -500%;
}
.csslider > input:nth-of-type(5):checked ~ ul li:first-of-type {
  margin-left: -400%;
}
.csslider > input:nth-of-type(4):checked ~ ul li:first-of-type {
  margin-left: -300%;
}
.csslider > input:nth-of-type(3):checked ~ ul li:first-of-type {
  margin-left: -200%;
}
.csslider > input:nth-of-type(2):checked ~ ul li:first-of-type {
  margin-left: -100%;
}
.csslider > input:nth-of-type(1):checked ~ ul li:first-of-type {
  margin-left: 0%;
}
.csslider > ul {
  position: relative;
  width: 820px;
  height: 420px;
  z-index: 1;
  font-size: 0;
  line-height: 0;
  border: none;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.csslider > ul > li {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 15px;
  font-size: initial;
  line-height: normal;
  -moz-transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
  -o-transition: all 0.5s ease-out;
  -webkit-transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
  transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
  vertical-align: top;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: normal;
}
.csslider > .navigation {
  position: absolute;
  bottom: -8px;
  left: 50%;
  z-index: 10;
  margin-bottom: -10px;
  font-size: 0;
  line-height: 0;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.csslider > .navigation > div {
  margin-left: -100%;
}
.csslider > .navigation label {
  position: relative;
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
  margin: 0 4px;
  padding: 4px;
  background: #3A3A3A;
}
.csslider > .navigation label:hover:after {
  opacity: 1;
}
.csslider > .navigation label:after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -6px;
  margin-top: -6px;
  background: #8950f1;
  border-radius: 50%;
  padding: 6px;
  opacity: 0;
}
.csslider > .arrows {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.csslider.inside .navigation {
  bottom: 10px;
  margin-bottom: 10px;
}
.csslider > input:nth-of-type(1):checked ~ .navigation label:nth-of-type(1):after,
.csslider > input:nth-of-type(2):checked ~ .navigation label:nth-of-type(2):after,
.csslider > input:nth-of-type(3):checked ~ .navigation label:nth-of-type(3):after,
.csslider > input:nth-of-type(4):checked ~ .navigation label:nth-of-type(4):after,
.csslider > input:nth-of-type(5):checked ~ .navigation label:nth-of-type(5):after,
.csslider > input:nth-of-type(6):checked ~ .navigation label:nth-of-type(6):after,
.csslider > input:nth-of-type(7):checked ~ .navigation label:nth-of-type(7):after,
.csslider > input:nth-of-type(8):checked ~ .navigation label:nth-of-type(8):after,
.csslider > input:nth-of-type(9):checked ~ .navigation label:nth-of-type(9):after,
.csslider > input:nth-of-type(10):checked ~ .navigation label:nth-of-type(10):after,
.csslider > input:nth-of-type(11):checked ~ .navigation label:nth-of-type(11):after {
  opacity: 1;
}
.csslider > .arrows {
  position: absolute;
  left: -31px;
  top: 50%;
  width: 100%;
  height: 26px;
  padding: 0 31px;
  z-index: 0;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.csslider > .arrows label {
  display: none;
  position: absolute;
  top: -50%;
  padding: 13px;
  box-shadow: inset 2px -2px 0 1px #3A3A3A;
  cursor: pointer;
  -moz-transition: box-shadow 0.15s, margin 0.15s;
  -o-transition: box-shadow 0.15s, margin 0.15s;
  -webkit-transition: box-shadow 0.15s, margin 0.15s;
  transition: box-shadow 0.15s, margin 0.15s;
}
.csslider > .arrows label {
  box-shadow: inset 3px -3px 0 2px #A6A6A6;
  margin: 0 0px;
}
.csslider > .arrows label:hover {
  box-shadow: inset 3px -3px 0 2px #8950f1;
  margin: 0 0px;
}
.csslider > .arrows label:before {
  content: '';
  position: absolute;
  top: -100%;
  left: -100%;
  height: 300%;
  width: 300%;
}
.csslider.infinity > input:first-of-type:checked ~ .arrows label.goto-last,
.csslider > input:nth-of-type(1):checked ~ .arrows > label:nth-of-type(0),
.csslider > input:nth-of-type(2):checked ~ .arrows > label:nth-of-type(1),
.csslider > input:nth-of-type(3):checked ~ .arrows > label:nth-of-type(2),
.csslider > input:nth-of-type(4):checked ~ .arrows > label:nth-of-type(3),
.csslider > input:nth-of-type(5):checked ~ .arrows > label:nth-of-type(4),
.csslider > input:nth-of-type(6):checked ~ .arrows > label:nth-of-type(5),
.csslider > input:nth-of-type(7):checked ~ .arrows > label:nth-of-type(6),
.csslider > input:nth-of-type(8):checked ~ .arrows > label:nth-of-type(7),
.csslider > input:nth-of-type(9):checked ~ .arrows > label:nth-of-type(8),
.csslider > input:nth-of-type(10):checked ~ .arrows > label:nth-of-type(9),
.csslider > input:nth-of-type(11):checked ~ .arrows > label:nth-of-type(10) {
  display: block;
  left: 0;
  right: auto;
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.csslider.infinity > input:last-of-type:checked ~ .arrows label.goto-first,
.csslider > input:nth-of-type(1):checked ~ .arrows > label:nth-of-type(2),
.csslider > input:nth-of-type(2):checked ~ .arrows > label:nth-of-type(3),
.csslider > input:nth-of-type(3):checked ~ .arrows > label:nth-of-type(4),
.csslider > input:nth-of-type(4):checked ~ .arrows > label:nth-of-type(5),
.csslider > input:nth-of-type(5):checked ~ .arrows > label:nth-of-type(6),
.csslider > input:nth-of-type(6):checked ~ .arrows > label:nth-of-type(7),
.csslider > input:nth-of-type(7):checked ~ .arrows > label:nth-of-type(8),
.csslider > input:nth-of-type(8):checked ~ .arrows > label:nth-of-type(9),
.csslider > input:nth-of-type(9):checked ~ .arrows > label:nth-of-type(10),
.csslider > input:nth-of-type(10):checked ~ .arrows > label:nth-of-type(11),
.csslider > input:nth-of-type(11):checked ~ .arrows > label:nth-of-type(12) {
  display: block;
  right: 0;
  left: auto;
  -moz-transform: rotate(225deg);
  -ms-transform: rotate(225deg);
  -o-transform: rotate(225deg);
  -webkit-transform: rotate(225deg);
  transform: rotate(225deg);
}
ul {
  padding-left: 40px;
}

#slider1 {
  margin: 20px;
}
#slider1 > input:nth-of-type(3):checked ~ ul #bg {
  width: 80%;
  padding: 22px;
  -moz-transition: .5s .5s;
  -o-transition: .5s .5s;
  -webkit-transition: .5s .5s;
  transition: .5s .5s;
}
#slider1 > input:nth-of-type(3):checked ~ ul #bg div {
  -moz-transform: translate(0);
  -ms-transform: translate(0);
  -o-transform: translate(0);
  -webkit-transform: translate(0);
  transform: translate(0);
  -moz-transition: .5s .9s;
  -o-transition: .5s .9s;
  -webkit-transition: .5s .9s;
  transition: .5s .9s;
}
video {
  width:100%;
  height:400px;
  background:transparent url('') no-repeat 0 0;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  background-size:cover;
}
</style>