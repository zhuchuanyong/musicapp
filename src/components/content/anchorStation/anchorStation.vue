<template>
  <div class="fm">
    <div class="banner">
    </div>
    <!-- fm 分类 排行 -->
    <div class="type">
      <div class="fmtype">
        <i class="fa fa-th-large"></i>
        <span>电台分类</span>
      </div>
      <div class="fmrank">
        <i class="fa fa-server"></i>
        <span>电台排行</span>
      </div>
    </div>
    <!-- 电台个性推荐 -->
    <div class="recommend">
      <div class="title">
        电台个性推荐 <i class="fa fa-angle-right"></i>
      </div>
      <ul class="fmlist">
        <li>
          <div class="img">
            <img src="" alt="">
            <div class="fmname">
              <p>dlkgjkfdnhn</p>
            </div>
          </div>
          <!-- 电台简介 -->
          <div class="brief">
            <p>程碧程碧程碧程碧程碧程碧程碧程碧程碧程碧</p>
            
          </div>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <!-- 有声书 -->
    <div class="book">
      <div class="title">
        有声书 <i class="fa fa-angle-right"></i>
      </div>
      <ul class="fmlist">
        <li>
          <div class="img">
            <img src="" alt="">
            <div class="fmname">
              <p>dlkgjkfdnhn</p>
            </div>
          </div>
          <!-- 电台简介 -->
          <div class="brief">
            <p>程碧程碧程碧程碧程碧程碧程碧程碧程碧程碧</p>
            
          </div>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 110px;
  background-color: yellow;
}
.type {
  display: flex;
  height: 70px;
  background-color: red;
  >div {
    height: 100%;
    flex:1;
    line-height: 70px;
    text-align: center;
    vertical-align: middle;
  }
  i {
    font-size: 28px;
    vertical-align: middle;
  }
}
.title {
  border-top: 1px solid #cccccc;
  height: 40px;
  line-height: 40px;
  padding-left: 0.1rem;
  font-size: 14px;
  font-weight: 600;
  box-sizing: border-box;
}
.fmlist {
  width: 100%;
  display: flex;
  justify-content: space-between;
  li {
    height: 160px;
    width: 33%;
    background-color: red;
  }
  .img {
    height: 120px;
    position: relative;
    background-color: green;
    .fmname {
      position: absolute;
      bottom: 2px;
      color: #cccccc;
    }
  }
  p {
    font-size: 14px;
  }
  .brief {
     // 设置多行...
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 40px;
  }
}
</style>
