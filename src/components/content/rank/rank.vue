<template>
  <div class="rank scroll">
    <!-- 官方榜 -->
    <div class="official">
      <div class="title">
        云音乐官方榜 <i class="fa fa-angle-right"></i>
      </div>
      <div class="officiallist">
        <ul>
          <li v-for="item in officialrank" :key="item.data.playlist.id" @click="tosonglist(item.data.playlist.id)">
            <div class="img">
              <img :src="item.data.playlist.coverImgUrl" alt="">
            </div>
            <div class="songlist">
              <!-- <p v-for="itemsong in item.data.playlist.tracks" :key="itemsong.id">111</p> -->
              <p>1. {{item.data.playlist.tracks[0].name}}-{{item.data.playlist.tracks[0].ar[0].name}}</p>
              <p>2. {{item.data.playlist.tracks[1].name}}-{{item.data.playlist.tracks[0].ar[0].name}}</p>
              <p>3. {{item.data.playlist.tracks[2].name}}-{{item.data.playlist.tracks[0].ar[0].name}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 全球榜 -->
    <div class="world">
      <div class="title">
        全球榜 <i class="fa fa-angle-right"></i>
      </div>
      <ul class="ranklist">
        <li v-for="item in worldrank" :key="item.data.playlist.id" @click="tosonglist(item.data.playlist.id)">
          <div class="img">
            <img :src="item.data.playlist.coverImgUrl" alt="">
            <div class="rankname">
              <p>每周五更新</p>
            </div>
          </div>
          <!-- 简介 -->
          <div class="brief">
            <p>{{item.data.playlist.name}}</p>
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
      officialrank: [],
      worldrank: []
    }
  },
  methods: {
    tosonglist (id) {
      this.$router.push({
        name: 'singsonglist',
        params: {
          id: id
        }
      })
    }
  },
  created () {
    let that = this
    this.axios.all([
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=0'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=1'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=2'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=3'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=4'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=22'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=23')
    ]).then(that.axios.spread(function (...map) {
      that.officialrank.push(...map)
      console.log(that.officialrank)
    }))
    this.axios.all([
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=5'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=6'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=7'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=8'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=9'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=10'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=12'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=13'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=14'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=15'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=16'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=17'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=18'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=19'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=20'),
      that.axios.get('http://apimusic.zhuchuanyong.com/top/list?idx=21')
    ]).then(that.axios.spread(function (...map) {
      that.worldrank.push(...map)
      console.log(that.worldrank)
    }))
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
.title {
  border-top: 1px solid #cccccc;
  height: 40px;
  line-height: 40px;
  padding-left: 0.1rem;
  font-size: 14px;
  font-weight: 600;
  box-sizing: border-box;
}
.officiallist {
  li {
    height: 95px;
    // background-color: yellow;
    display: flex;
    margin-bottom: 5px;
    .img {
      height: 100%;
      // flex-basis: 0.95rem;
      // flex-grow: 0;
      width: 0.95rem;
      // width: 95px;
      // background-color: red;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .songlist {
      padding: 10px .1rem;
      // padding-left: .1rem;
      // flex: 1;
      //  等同于下面
      flex-basis: 0;
      flex-grow: 1;
    min-width:0;
    }
    p {
      height: 25px;
      // width: 100%;
      // width: 150px;
      line-height: 25px;
      // 单行省略号
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
// 排行榜列表
.ranklist {
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
    img {
      width: 100%;
      height: 100%;
    }
    // background-color: green;
    .rankname {
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
