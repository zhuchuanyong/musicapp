<template>
  <div class="content">
    <titlenav></titlenav>
    <router-view></router-view>
  </div>
</template>
<script>
import titlenav from './titlenav'
export default {
  components: {
    titlenav
  }
}
</script>
<style lang="less" scoped>
</style>
