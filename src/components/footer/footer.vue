<template>
 <div class="footer">
   <div class="findmusic">
     <!-- <div class="fa-stack"> -->
      <i class="fa fa-clone"></i>
      <!-- <i class="fa fa-music fa-stack-1x"></i> -->
     <!-- </div> -->
     <span>发现音乐</span>
   </div>
   <div class="mymusic">
     <i class="fa fa-music"></i>
     <span>我的音乐</span>
   </div>
   <div class="friend">
     <i class="fa fa-venus-mars"></i>
     <span>朋友</span>
   </div>
   <div class="user">
     <i class="fa fa-user"></i>
     <span>帐号</span>
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
</style>
