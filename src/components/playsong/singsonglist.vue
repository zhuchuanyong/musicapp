<template>
  <div class="songlist">
    <myheader title="歌单"></myheader>
    <div class="top">
      <div class="songinfo">
        <div class="img"></div>
        <div class="listinfo">
          <p>周杰伦</p>
          <div class="create">
            <div class="img"></div>
            <div>kkskksks ></div>
          </div>
        </div>
      </div>
      <div class="setting">
        <!-- 收藏 -->
        <div class="collection">
          <i class="fa fa-folder-o"></i>
          <p>收藏</p>
        </div>
        <!-- 评论 -->
        <div class="comment">
          <i class="fa fa-commenting-o"></i>
          <p>评论</p>
        </div>
        <!-- 分享 -->
        <div class="share">
          <i class="fa fa-share"></i>
          <p>分享</p>
        </div>
        <!-- 下载 -->
        <div class="download">
          <i class="fa fa-download"></i>
          <p>下载</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <songlist :infodata='item' v-for="(item , index) in infodata" :key="index" :index="index+1"></songlist>
    </div>
  </div>
</template>
<script>
import myheader from '@/components/header/myheader'
import songlist from '@/components/sings/songlist'
export default {
  data () {
    return {
      infodata: [
        {
          name: '告白气球',
          title: '周杰伦床边的故事'
        },
        {
          name: '晴天',
          title: '叶惠美'
        }
      ]
    }
  },
  components: {
    myheader,
    songlist
  }
}
</script>

<style lang="less" scoped>
.top {
  margin-top: 44px;
  height: 200px;
  box-sizing: border-box;
  border-top: 1px solid transparent;
  background-color: yellow;
}
.songinfo {
  margin: 10px;
  background-color: green;
  height: 120px;
  display: flex;
  >.img {
    width: 120px;
    height: 120px;
    background-color: red;
  }
  .listinfo {
    padding-left: 10px;
    p {
      height: 45px;
      line-height: 45px;
    }
    .img {
      width: 30px;
      height: 30px;
      background-color: black;
      margin-right: 10px;
    }
    .create {
      display: flex;
    }
  }
}
.setting {
  height: 60px;
  background-color: red;
  display: flex;
  >div {
    flex: 1;
    text-align: center;
    padding: 9px 0;
    i {
      font-size: 22px;
    }
  }
}
</style>
