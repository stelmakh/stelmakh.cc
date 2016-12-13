<template>
  <div class="app Content">
    <app-header></app-header>
    <section id="top" class="ContentInner">
      <div class="IntroSection">
        <div class="ImageWrapper">
          <img src="images/me.jpg">
        </div>
        <div class="Intro">
          <div>Hello!</div>
          I'm a Software Developer and Web Consultant from Kyiv, Ukraine.
          <div>Part of <a href="http://hellyeah.is"> Hellyeah</a> team.</div>
        </div>
      </div>
      <div id="about" class="About">
          <div class="Section">
              <div class="SectionText">
                <div class="SectionTextPair">
                  <div class="SectionPairTitle">Who?</div>
                  <div class="SectionPairText">
                    Creative Software Developer with focus on full-stack
                    development.
                  </div>
                </div>
                <div class="SectionTextPair">
                  <div class="SectionPairTitle">Why?</div>
                  <div class="SectionPairText">
                    To solve your business problems and make you happy.
                  </div>
                </div>
                <div class="SectionTextPair">
                  <div class="SectionPairTitle">What?</div>
                  <div class="SectionPairText">
                    Minimal viable product, complete application, consultancy.
                  </div>
                </div>
                <div class="SectionTextPair">
                  <div class="SectionPairTitle">How?</div>
                  <div class="SectionPairText">
                    JavaScript, NodeJS, Express, React, HTML5/CSS3,
                    Ruby, Sinatra, Rails and other buzzwords.
                  </div>
                </div>

              </div>
          </div>
      </div>
      <div id="contact" class="Contact">
          <div class="Links">
            <a href="https://github.com/stelmakh">github</a>
            <span>/</span>
            <a href="https://www.facebook.com/vk.stelmakh">facebook</a>
            <span>/</span>
            <a href="https://twitter.com/vstelmakh">twitter</a>
          </div>
      </div>
    </section>
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
  .IntroSection
    display: flex
    align-items: center
    .ImageWrapper
      flex: 0 0 auto
      margin-top: 0

    @media (max-width: 767px)
      flex-direction: column

  .Intro
    text-align: left
    font-size: 50px
    line-height: 48px
    font-family: 'Lato Thin', serif
    color: #777
    margin-left: 24px

    a
      color: #777
      text-decoration: underline
      &:hover
        color: #F4364C

    @media (max-width: 767px)
      padding: 24px 12px
      margin-left: 0
      font-size: 28px
      line-height: 32px

    &-smallTitle
      width: 100%
      text-align: left
      font-size: 22px
      margin: 20px 0

  .About
    width: 100%
    padding: 72px 0 0

  .Contact
    text-align: right
    width: 100%

</style>
