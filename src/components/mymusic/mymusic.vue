<template>
  <div class="mymusic">
    <myheader title="我的音乐"></myheader>
    <div class="mylist">
      <mt-cell title="本地音乐" value="248>" class="titlelist">
        <span>115</span>
        <i class="fa fa-music" slot="icon"></i>
      </mt-cell>
      <mt-cell title="本地音乐" value="248>" class="titlelist">
        <span>115</span>
        <i class="fa fa-music" slot="icon"></i>
      </mt-cell>
      <mt-cell title="本地音乐" value="248>" class="titlelist">
        <span>115</span>
        <i class="fa fa-music" slot="icon"></i>
      </mt-cell>
    </div>
    <!-- 创建的歌单 -->
    <div class="creatlist">
      <p>创建的歌单</p>
      <ul>
        <li class="songlistcontent">
         <div class="img">
         </div>
         <div class="content">
           <div class="listname">我喜欢的音乐</div>
           <div class="usercontent">
             <span>by 不来也不去</span>
           </div>
         </div>
        </li>
      </ul>
      <p>收藏的歌单</p>
      <ul>
        <li class="songlistcontent">
         <div class="img">
         </div>
         <div class="content">
           <div class="listname">我喜欢的音乐</div>
           <div class="usercontent">
            <span>by 不来也不去</span>
           </div>
         </div>
        </li>
        <li class="songlistcontent">
         <div class="img">
         </div>
         <div class="content">
           <div class="listname">我喜欢的音乐</div>
           <div class="usercontent">
             <span>by 不来也不去</span>
           </div>
         </div>
        </li>
      </ul>
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
@import "../../assets/css/minxin.less";
@import "../../assets/css/variable.less";
.mylist {
  margin-top: 44px;
  .titlelist {
    height: 38px;
    background-color: green;
    // margin: 0 14px;
    border-bottom: 1px solid #d9d9d9;
  }
}
.creatlist {
  p {
    font-size: 14px;
    padding-left: 0.05rem;
    height: 25px;
    line-height: 25px;
  }
}
.songlistcontent {
    height: 50px;
    width: 100%;
    display: flex;
    .img {
      width: 50px;
      height: 50px;
      background-color: aqua;
    }
    .content {
      flex: 1;
      flex-grow: 1;
      flex-basis: 0%;
      word-break: break-all;
      background-color: green;
      padding-left: 0.1rem;
      box-sizing: border-box;
      border-bottom: 1px solid #d9d9d9;
      .listname {
        height: 25px;
        line-height: 25px;
      }
      span {
        font-size: 14px;
      }
    }
  }
// .player{
//     width: 0.44rem;
//     position: relative;
//     // background-color: yellow;
//     .img {

//     .center;
//     text-align: center;
//     width: 0.3rem;
//     height: 0.3rem;
//     line-height: 0.3rem;
//     // vertical-align: middle;
//     i {
//       font-size: 0.2rem;
//       color: @fontawesome;
//       vertical-align: middle;
//     }
//   }
// }
</style>
