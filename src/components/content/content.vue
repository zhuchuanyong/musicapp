<template>
  <div class="content">
    <m-header></m-header>
    <titlenav></titlenav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
