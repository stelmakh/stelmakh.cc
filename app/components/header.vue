<template>
  <header>
    <div class="HeaderNav">
      <div class="HeaderNav-left">
        <div class="HeaderLink">
          <router-link to="/">
            <div class="HeaderLogo"></div>
          </router-link>
        </div>
        <div class="HeaderName">
          Volodymyr Stelmakh
        </div>
      </div>
      <div class="HeaderNav-right">
        <div class="HeaderContacts">
          <a href="mailto:volodymyr@stelmakh.cc">volodymyr@stelmakh.cc</a>
          <a href="tel:+380999728972">+38099-972-8-972</a>
          <div id="contact" class="Contact">
              <div class="Links">
                <a target='_blank' href="https://github.com/stelmakh"><i class="fa fa-github" aria-hidden="true"></i></a>
                <span>/</span>
                <a target='_blank' href="https://www.facebook.com/vk.stelmakh"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <span>/</span>
                <a target='_blank' href="https://twitter.com/vstelmakh"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="stylus" scoped>
  header
    color: black
    display: flex
    justify-content: flex-start
    align-items: center
    padding: 8px 12px

    &.large
      height: 200px

    h1
      font-size: 20px

    ul
      list-style: none
      display: flex

    .HeaderNav
      width: 100%
      display: flex
      justify-content: space-between
      align-items: center

      &-left, &-right
        display: flex
        justify-content: center
        align-items: center

      &-left
        padding-top: 4px

    .HeaderName
      height: 100%
      width: 80px
      margin-left: 12px
      text-align: left
      font-size: 14px
      line-height: 16px

    .HeaderContacts
      display: flex
      flex-direction: column
      align-items: flex-start
      a
        text-decoration: none
        font-size: 14px
        line-height: 18px
        color: #535353
        font-family: 'Lato', serif
        font-weight: 300


    .HeaderLogo
      background: url("/images/logo.svg")
      background-size: cover
      height: 54px
      width: 54px

    .HeaderLink
      cursor: pointer
      a
        text-decoration: none
        color: white
      &:not(:first-child)
        margin-left: 24px

</style>
