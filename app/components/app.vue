<template>
  <div class="app">
    <h1>{{ greeting }} World!</h1>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        greeting: 'Hello'
      }
    }
  }
</script>
