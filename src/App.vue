<template>
  <div id="app">
    <m-header></m-header>
    <router-view/>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from '@/components/header/mheader'
import MFooter from '@/components/footer/footer'
export default {
  name: 'App',
  components: {
    MHeader,
    MFooter
  }
}
</script>
<style>
body {
  overflow: hidden;
}
</style>
