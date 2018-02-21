<template>
 <div class="footer">
   <div class="findmusic">
    <router-link to="recommend" active-class="liactive" tag="div" >
      <i class="fa fa-clone"></i>
      <span>发现音乐</span>
    </router-link>
   </div>
   <div class="mymusic">
      <router-link to="mymusic" active-class="liactive" tag="div" >
        <i class="fa fa-music"></i>
        <span>我的音乐</span>
      </router-link>
   </div>
   <div class="friend">
     <router-link to="friend" active-class="liactive" tag="div" >
        <i class="fa fa-venus-mars"></i>
        <span>朋友</span>
      </router-link>
   </div>
   <div class="user">
     <router-link to="user" active-class="liactive" tag="div" >
        <i class="fa fa-user"></i>
        <span>我</span>
      </router-link>
   </div>
 </div>
</template>
<style lang="less" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: green;
  display: flex;
  height: 52px;
  border-top: 1px solid #cccccc;
  text-align: center;
  >div {
    flex-grow: 1;
    flex-basis: 0;
    span,i {
      display: inline-block;
      width: 100%;
    }
    i {
      margin-top: 5px;
      font-size: 20px;
    }
    span {
      height: 20px;
      font-size: 14px;
    }
  }
}
.liactive {
  color: #c20c0c;
}
</style>
