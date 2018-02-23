<template>
  <div class="play">
    <playheader :title='songinfo.name'></playheader>
    <div class="top">
      <div class="img">
        <img :src="songinfo.al.picUrl" alt="">
      </div>
    </div>
    <div class="bottom">
      <div class="seting">
        <div class="hert">
          <i class="fa fa-heart-o"></i>
        </div>
        <div class="download">
          <i class="fa fa-download"></i>
        </div>
        <div class="info">
          <i class="fa fa-navicon"></i>
        </div>
        <div class="more" >
          <i class="fa fa-wheelchair"></i>
        </div>
      </div>
      <!-- <div class="progress">
        <div class="currenttime">
          <span>02:32</span>
        </div>
        <div class="probar">
          <div>
            <p class="proline"></p>
            <p class="prolinedown"></p>
            <p class="prolineplay"></p>
          </div>
        </div>
        <div class="endtime">
          <span>03:46</span>
        </div>
      </div> -->
      <div class="control">
        <!-- 播放方法 -->
        <div class="playway">
          <i class=" fa fa-exchange fa-2x"></i>
        </div>
        <!-- 上一首 -->
        <div class="prev" @click="prev">
          <i class="fa fa-step-backward fa-2x"></i>
        </div>
        <!-- 播放/暂停 -->
        <div class="playsong" @click="play">
          <i class="fa fa-pause fa-2x"></i>
        </div>
        <!-- 下一首 -->
        <div class="next" @click="next">
          <i class="fa fa-step-forward fa-2x"></i>
        </div>
        <!-- 歌曲列表 -->
        <div class="songlist">
          <i class="fa fa-list-ul fa-2x"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import playheader from '@/components/header/playheader'
export default {
  components: {
    playheader
  },
  data () {
    return {
      songinfo: []
    }
  },
  computed: {
    playing () {
      // this.index = this.$store.state.currentindex
      return this.$store.state.playing
    },
    cindex () {
      // this.index = this.$store.state.currentindex
      return this.$store.state.currentindex
    },
    csongid () {
      // this.index = this.$store.state.currentindex
      return this.$store.state.songlistid
    }
  },
  created () {
    let that = this
    // console.log(that.csongid[val].id)
    this.axios.get('http://apimusic.zhuchuanyong.com/song/detail', {
      params: {
        ids: that.csongid[this.cindex].id
      }
    }).then(function (res) {
      console.log(res)
      that.songinfo = res.data.songs[0]
    })
  },
  watch: {
    cindex: function (val, oldval) {
      // console.log(val)
      let that = this
      // console.log(that.csongid[val].id)
      this.axios.get('http://apimusic.zhuchuanyong.com/song/detail', {
        params: {
          ids: that.csongid[val].id
        }
      }).then(function (res) {
        console.log(res)
        that.songinfo = res.data.songs[0]
        // that.songinfo = res.data.data[0].url
      })
    }
  },
  methods: {
    play () {
      // console.log(1111)
      // console.log(this.playing)
      this.$store.commit('setplaying', !this.playing)
    },
    // 上一曲
    prev () {
      if (this.cindex < 1) {
        this.$store.commit('setindex', this.csongid.length - 1)
      } else {
        this.$store.commit('setindex', this.cindex - 1)
      }
    },
    // 下一曲
    next () {
      if (this.cindex > this.csongid.length - 2) {
        this.$store.commit('setindex', 0)
      } else {
        this.$store.commit('setindex', this.cindex + 1)
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/css/minxin.less";
.play {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 100%;
  background-color: #312A21;
  .top {
    height: 80%;
    position: relative;
    .img {
      width: 300px;
      height: 300px;
      .center;
    }
    img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
    // background-color: blue;
  }
  .bottom {
    height: 20%;
    // background-color: green;
    color: rgba(248, 248, 255, 0.5);
    .seting {
      height: 50%;
      // background-color: aqua;
      box-sizing: border-box;
      padding: 0 0.3rem;
      display: flex;
      >div {
        flex: 1;
        display: flex;
        align-items: center;
        // text-align: center;
        justify-content: center;
        i {
          // text-align: center;
          font-size: 28px;
      // .center;
        }
      }
    }
    // .progress {
    //   height: 20%;
    //   background-color: chocolate;
    //   display: flex;
    //   >div {
    //     height: 100%;
    //     display: flex;
    //     align-items: center;
    //   }
    // }
    // .currenttime ,.endtime {
    //   width: 15%;
    //   background-color: red;
    // }
    // .probar {
    //   width: 70%;
    //   background-color: darkslategrey;
    // }
    .control {
      height: 50%;
      // background-color: darkmagenta;
    }
  }
}
// 底部控制按钮
.control {
  display: flex;
  align-items: center;
  // justify-content: center;
  >div {
    text-align: center;
    flex: 1;
  }
}
// 进度条
.probar {
  padding: 0 0.1rem;
  >div {
    height: 100%;
    width: 100%;
    background-color: aliceblue;
    position: relative;
    p {
      // .center;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 0;
      width: 100%;
      height: 2px;
      // background-color: green;
    }
    .proline {
      background-color: black;
    }
    .prolinedown {
      background-color: #cccccc;
      width: 50%;
    }
    .prolineplay {
      width: 20%;
      background-color: red;
    }
  }
}
</style>
