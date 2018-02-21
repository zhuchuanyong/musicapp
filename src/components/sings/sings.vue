<template>
  <div class="sings">
    <myheader title="歌手"></myheader>
    <div class="singsinfo">
      <div class="singimg">
      </div>
      <div class="nav">
        <!-- <div class="hot">热门50</div> -->
        <div class="hot">
          <router-link to="hot" active-class="liactive">热门50</router-link>
        </div>
        <div class="special">
          <router-link to="special" active-class="liactive">专辑50</router-link>
        </div>
        <div class="singsmv">
          <router-link to="singsmv" active-class="liactive">MV50</router-link>
        </div>
        <div class="singinfo">
          <router-link to="singinfo" active-class="liactive">歌手信息</router-link>
        </div>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import myheader from '@/components/header/myheader'
export default {
  components: {
    myheader
  }
}
</script>
<style lang="less" scoped>
.liactive {
  color: red;
}
.singimg {
  margin-top: 44px;
  height: 160px;
  background-color: red;
}
.nav {
  height: 32px;
  display: flex;
  >div {
    text-align: center;
    flex: 1;
    line-height: 32px;
  }
}
</style>
