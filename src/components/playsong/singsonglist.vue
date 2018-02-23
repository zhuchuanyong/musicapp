<template>
  <div class="songlist">
    <myheader title="歌单"></myheader>
    <div class="top">
      <div class="songinfo">
        <div class="img">
          <img :src="songlistinfo.coverImgUrl" alt="">
        </div>
        <div class="listinfo">
          <p>{{songlistinfo.name}}</p>
          <div class="create">
            <div class="img">
              <img :src="songlistinfo.creator.avatarUrl" alt="">
            </div>
            <div>{{songlistinfo.creator.nickname}}></div>
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
    <div class="bottom scroll">
      <songlist :infodata='item' v-for="(item , index) in songlistinfo.tracks" :key="index" :index="index+1" @click.native.stop="toplaypage(songlistinfo.trackIds,index)"></songlist>
    </div>
  </div>
</template>
<script>
import myheader from '@/components/header/myheader'
import songlist from '@/components/sings/songlist'
export default {
  data () {
    return {
      songlistinfo: []
    }
  },
  methods: {
    toplaypage (ids, index) {
      // console.log(11111)
      // console.log(ids)
      // console.log(index)
      this.$store.commit('setsonglistid', {
        ids: ids,
        index: index
      })
      this.$router.push('/playpage')
      // for(var i=0; i++; i<ids){
      //   console.log(ids)
      // }
      // this.axios.get('http://apimusic.zhuchuanyong.com/music/url?id=33894312')
      // this.$store.dispatch('getsongids', ids)
    }
  },
  created () {
    // console.log(this.$route.params.id)
    let id = this.$route.params.id
    // console.log(id)
    let that = this
    // console.log(`http://apimusic.zhuchuanyong.com/playlist/detail`)
    this.axios.get(`http://apimusic.zhuchuanyong.com/playlist/detail`, {
      params: {
        id: id
      }
    }).then(function (res) {
      // console.log(res)
      that.songlistinfo = res.data.playlist
      // console.log(that.songlistinfo)
    })
  },
  mounted () {
    // console.log(this.$route.params.id)
  },
  components: {
    myheader,
    songlist
  }
}
</script>

<style lang="less" scoped>
.scroll {
  position: relative;;
  overflow: hidden;
  overflow-y: scroll;
  padding-bottom: 50px;
  height: 500px;
}
.bottom {
  background-color: #F0F4F7;
}
.top {
  margin-top: 44px;
  height: 200px;
  box-sizing: border-box;
  border-top: 1px solid transparent;
  background-color: #B5C0B8;
}
.songinfo {
  margin: 10px;
  // background-color: green;
  height: 120px;
  display: flex;
  >.img {
    width: 120px;
    height: 120px;
    // background-color: red;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .listinfo {
    padding-left: 10px;
    p {
      margin: 10px 0;
      // height: 25px;
      // line-height: 25px;
    }
    .img {
      width: 30px;
      height: 30px;
      // background-color: black;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .create {
      display: flex;
    }
  }
}
.setting {
  height: 60px;
  // background-color: red;
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
