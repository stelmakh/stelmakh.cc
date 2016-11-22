<template>
  <footer>
    <span>Information must be free. Everything on this site is in <a
        href="https://creativecommons.org/publicdomain/zero/1.0/">public
        domain.</a></span>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="stylus" scoped>
  footer
    position: fixed
    bottom: 0
    left: 0
    right: 0
    height: 50px
    z-index: -1
    background: #232323
    color: #666
    display: flex
    justify-content: center
    align-items: center
    padding: 0 24px
    font-size: 12px

    a
      cursor: pointer
      color: #f2f2f2
</style>
