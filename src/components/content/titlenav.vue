<template>
  <div class="nav">
    <ul>
     <router-link to="recommend" active-class="liactive" tag="li" > <a href=""> 个性推荐</a></router-link>
      <router-link  to="songlist" active-class="liactive"  tag="li"> <a href=""> 歌单</a></router-link>
      <router-link to="anchorStation"  tag="li"  active-class="liactive"><a href="">主播电台</a></router-link>
      <router-link to="rank"  tag="li"  active-class="liactive"><a href="">排行榜</a></router-link>
    </ul>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/css/variable.less';
.nav {
  height: 34px;
  ul {
    height: 100%;
    display: flex;
    li {
      height: 100%;
      flex-grow: 1;
      // display: table;
      box-sizing: border-box;
    }
    .liactive {
      color: yellow;
      border-bottom: 2px solid @backgroundred;
      a {
        color: @textred;
      }
    }
    a {
      display: inline-block;
      width: 100%;
      font-size: 14px;
      height: 100%;
      // display: table-cell;
      vertical-align: middle;
      display: flex;
      justify-content: center;
      align-items: center;
      // height: inherit;
      // align-items: center;
      // line-height: 100%;
    }
  }
}
</style>
