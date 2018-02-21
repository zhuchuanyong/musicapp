<template>
  <div class="content">
    <m-header></m-header>
    <titlenav></titlenav>
    <router-view></router-view>
  </div>
</template>
<script>
import titlenav from './titlenav'
import MHeader from '@/components/header/mheader'
export default {
  components: {
    MHeader,
    titlenav
  }
}
</script>
<style lang="less" scoped>
</style>
