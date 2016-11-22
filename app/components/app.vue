<template>
  <div class="app Content">
    <app-header></app-header>
    <section id="top" class="ContentInner">
      <div class="Intro">
        <div class="Intro-smallTitle">Hello!</div>
        I'm a
        <span class="u-highlight"> Software Developer </span>
        and
        <span class="u-highlight"> Web Consultant </span>
        from
        <span class="u-highlight">  Kyiv, Ukraine. </span>
        Part of
        <a class="hellyeah" href="http://hellyeah.is"> Hellyeah</a>
         team.
      </div>
      <div id="about" class="About">
          <div class="SectionTitle">About</div>
          <div class="Section">
            <div class="SectionHalf">
              <div class="ImageWrapper">
                <img src="images/me.jpg">
              </div>
            </div>
            <div class="SectionHalf">
              <div class="SectionText">
                <div class="SectionSubtitle">Who?</div>
                <p>
                  Creative Software Developer with focus on full-stack
                  development.
                </p>
                <div class="SectionSubtitle">Why?</div>
                <p>
                  To solve your business problems and make you happy.
                </p>
                <div class="SectionSubtitle">What?</div>
                <p>
                  Minimal viable product, complete application, consultancy.
                </p>
                <div class="SectionSubtitle">How?</div>
                <p>
                  JavaScript, NodeJS, Express, React, HTML5/CSS3,
                  Ruby, Sinatra, Rails and other buzzwords.
                </p>

              </div>
            </div>
          </div>
      </div>
      <div id="contact" class="Contact">
          <div class="SectionTitle">Contact Me</div>
          <div class="Section">
            <div class="SectionHalf">
              <div class="Links">
                <a href="mailto:volodymyr@stelmakh.cc">volodymyr@stelmakh.cc</a>
                <a href="tel:+380999728972">+38099-972-8-972</a>
              </div>
            </div>
            <div class="SectionHalf">
              <div class="Links">
                <a href="https://github.com/stelmakh">github</a>
                <a href="https://www.facebook.com/vk.stelmakh">facebook</a>
                <a href="https://twitter.com/vstelmakh">twitter</a>
              </div>
            </div>
          </div>
      </div>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from 'components/header.vue'
  import Footer from 'components/footer.vue'
  export default {
    name: 'App',
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style lang="stylus" scoped>
  .Intro
    text-align: left
    font-size: 32px
    max-width: 700px
    padding: 96px 24px 144px
    font-family: 'Droid Sans Mono', serif

    @media (max-width: 767px)
      padding: 48px 24px 72px

    &-smallTitle
      width: 100%
      text-align: left
      font-size: 22px
      margin: 20px 0

  .About
    width: 100%
    background: #fafafa
    padding-bottom: 24px

  .Contact
    width: 100%
    background: white
    padding-bottom: 48px

</style>
