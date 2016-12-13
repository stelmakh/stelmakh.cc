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
    padding: 8px 0

    @media (max-width: 767px)
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
        font-family: 'Lato Light', serif


    .HeaderLogo
      background: url("/images/logo.svg")
      background-size: cover
      height: 50px
      width: 50px

      @media (max-width: 767px)
        height: 36px
        width: 36px

    .HeaderLink
      cursor: pointer
      a
        text-decoration: none
        color: white
      &:not(:first-child)
        margin-left: 24px

</style>
