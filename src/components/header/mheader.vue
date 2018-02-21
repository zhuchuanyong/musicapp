<template>
  <div class="header">
    <!-- 话筒图标 -->
    <div class="voice">
      <div class="img">
        <i class="fa fa-microphone"></i>
      </div>
      <!-- <img src="../../../static/images/tubiao.jpg" alt=""> -->
    </div>
    <!-- 搜索 -->
    <div class="search">
      <div class="searchInput">
        <input type="text" placeholder="搜索音乐,歌词,电台">
      </div>
    </div>
    <!-- 播放页面跳转链接按钮 -->
    <div class="player">
      <div class="img">
        <i class="fa fa-align-left fa-rotate-270"></i>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../../assets/css/minxin.less";
@import "../../assets/css/variable.less";
.header {
  // height: 0.44rem;
  height: 44px;
  display: flex;
  background-color: @backgroundred;
  >div {
    height: 100%;
  }
  .img {
    // background-color: yellow;
    // background-image: url('../../../static/images/tubiao.jpg');
    .center;
    text-align: center;
    width: 0.3rem;
    height: 0.3rem;
    line-height: 0.3rem;
    // vertical-align: middle;
    i {
      font-size: 0.2rem;
      color: @fontawesome;
      vertical-align: middle;
    }
  }
  .search {
    position: relative;
    flex-grow: 1;
    // background-color: green;
    .searchInput {
      width: 2.3rem;
      height: 30px;
      background-color: @backgroundwhite;
      text-align: center;
      border-radius: 10px;
      .center;
    }
   // input 里placeholder  居中
    input::-webkit-input-placeholder{text-align: center}
    input {
      height: 100%;
      width: 90%;
      outline: none;
      border:0;
      background-color: @backgroundwhite;
      text-align: center;
    }
  }
  .voice ,.player{
    width: 0.44rem;
    position: relative;
    // background-color: yellow;
  }
}
</style>
