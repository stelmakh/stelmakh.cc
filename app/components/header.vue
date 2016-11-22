<template>
  <header>
    <div class="HeaderNav">
      <div class="HeaderLink">
        Volodymyr Stelmakh
      </div>
      <div class="HeaderLink">
        <router-link to="/">
          <div class="HeaderLogo"></div>
        </router-link>
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
    position: fixed
    top: 0
    left: 0
    right: 0
    background: url('images/bg.jpg')
    background-size: cover
    color: white
    display: flex
    justify-content: flex-end
    align-items: center
    padding: 8px 24px
    transition: height .4s ease
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5)
    font-family: 'Droid Sans Mono', serif

    &.large
      height: 200px

    h1
      font-size: 20px

    ul
      list-style: none
      display: flex

    .HeaderNav
      display: flex
      justify-content: center
      align-items: center

    .HeaderLogo
      background: url("/images/logo-white.svg")
      background-size: cover
      height: 50px
      width: 50px

    .HeaderLink
      cursor: pointer
      a
        text-decoration: none
        color: white
      &:not(:first-child)
        margin-left: 24px

</style>
