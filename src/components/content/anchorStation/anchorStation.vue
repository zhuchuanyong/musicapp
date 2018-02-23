<template>
  <div class="fm scroll">
    <!-- <div class="banner">
    </div> -->
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
        <li v-for="item in fmrecommend" :key="item.id">
          <div class="img">
            <img :src="item.picUrl" alt="">
            <div class="fmname">
              <p>{{item.name}}</p>
            </div>
          </div>
          <!-- 电台简介 -->
          <div class="brief">
          <p>{{item.rcmdtext}}</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 有声书 -->
    <div class="book">
      <div class="title">
        有声书 <i class="fa fa-angle-right"></i>
      </div>
      <ul class="fmlist">
        <li v-for="item in viocebook" :key="item.id">
          <div class="img">
            <img :src="item.picUrl" alt="">
            <div class="fmname">
              <p>{{item.name}}</p>
            </div>
          </div>
          <!-- 电台简介 -->
          <div class="brief">
            <p>{{item.rcmdtext}}</p>
          </div>
        </li>
        <!-- <li></li> -->
        <!-- <li></li> -->
      </ul>
    </div>
    <!-- 脱口秀 -->
    <div class="book">
      <div class="title">
        脱口秀 <i class="fa fa-angle-right"></i>
      </div>
      <ul class="fmlist">
        <li v-for="item in talkshow" :key="item.id">
          <div class="img">
            <img :src="item.picUrl" alt="">
            <div class="fmname">
              <p>{{item.name}}</p>
            </div>
          </div>
          <!-- 电台简介 -->
          <div class="brief">
            <p>{{item.rcmdtext}}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 音乐故事 -->
    <div class="book">
      <div class="title">
        音乐故事 <i class="fa fa-angle-right"></i>
      </div>
      <ul class="fmlist">
        <li v-for="item in musicstory" :key="item.id">
          <div class="img">
            <img :src="item.picUrl" alt="">
            <div class="fmname">
              <p>{{item.name}}</p>
            </div>
          </div>
          <!-- 电台简介 -->
          <div class="brief">
            <p>{{item.rcmdtext}}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 相声曲艺 -->
    <div class="book">
      <div class="title">
        相声曲艺 <i class="fa fa-angle-right"></i>
      </div>
      <ul class="fmlist">
        <li v-for="item in cross" :key="item.id">
          <div class="img">
            <img :src="item.picUrl" alt="">
            <div class="fmname">
              <p>{{item.name}}</p>
            </div>
          </div>
          <!-- 电台简介 -->
          <div class="brief">
            <p>{{item.rcmdtext}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fmrecommend: [],
      viocebook: [],
      talkshow: [],
      musicstory: [],
      cross: []
    }
  },
  created () {
    let that = this
    this.axios.get('http://apimusic.zhuchuanyong.com/dj/recommend').then(function (res) {
      // console.log(res)
      that.fmrecommend = res.data.djRadios
    })
    this.axios.get('http://apimusic.zhuchuanyong.com/dj/recommend/type?type=10001').then(function (res) {
      // console.log(res)
      that.viocebook = res.data.djRadios
    })
    this.axios.get('http://apimusic.zhuchuanyong.com/dj/recommend/type?type=5').then(function (res) {
      // console.log(res)
      that.talkshow = res.data.djRadios
    })
    this.axios.get('http://apimusic.zhuchuanyong.com/dj/recommend/type?type=2').then(function (res) {
      // console.log(res)
      that.musicstory = res.data.djRadios
    })
    this.axios.get('http://apimusic.zhuchuanyong.com/dj/recommend/type?type=8').then(function (res) {
      // console.log(res)
      that.cross = res.data.djRadios
    })
  }
}
</script>
<style lang="less" scoped>
.scroll {
  position: relative;;
  overflow: hidden;
  overflow-y: scroll;
  padding-bottom: 50px;
  height: 700px;
}
.banner {
  width: 100%;
  height: 110px;
  background-color: yellow;
}
.type {
  display: flex;
  height: 70px;
  // background-color: red;
  >div {
    height: 100%;
    flex:1;
    line-height: 70px;
    text-align: center;
    vertical-align: middle;
  }
  i {
    font-size: 28px;
    color: red;
    vertical-align: middle;
  }
  span {
    height: 28px;
    line-height: 28px;
    display: inline-block;
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
  flex-wrap: wrap;
  li {
    height: 160px;
    width: 33%;
    // background-color: red;
  }
  .img {
    height: 120px;
    position: relative;
    // background-color: green;
    img {
      width: 100%;
      height: 100%;
    }
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
