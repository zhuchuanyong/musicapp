<template>
  <div class="recommend ulsonglist" ref="ulsonglist">
    <!-- <div class="banner"> -->
      <mt-swipe class="banner">
        <mt-swipe-item v-for="item in banner" :key="item.targetId">
          <img :src="item.pic" alt="" height="200" width="100%">
        </mt-swipe-item>
      </mt-swipe>
    <!-- </div> -->
    <!-- 私人fm 每日歌曲推荐  云音乐热歌榜-->
    <div class="type">
      <div class="fm">
        <div class="icon">
          <div class="circle">
            <i class="fa fa-newspaper-o fa-2x"></i>
          </div>
        </div>
        <p>私人FM</p>
      </div>
      <div class="daysong">
        <div class="icon">
          <div class="circle">
            <i class="fa fa-calendar-check-o fa-2x"></i>
          </div>
        </div>
        <p>每日歌曲推荐</p>
      </div>
      <div class="hotrank">
        <div class="icon">
          <div class="circle">
            <i class="fa fa-bar-chart fa-2x"></i>
          </div>
        </div>
        <p>云音乐热歌榜</p>
      </div>
    </div>
    <!-- 推荐歌单 独家放送 推荐mv 等 -->
    <ul >
      <li>
        <!-- 推荐歌单 -->
        <div class="title">
          推荐歌单 <i class="fa fa-angle-right"></i>
        </div>
        <div class="songlist">
          <ul>
            <li v-for="item in songlist" :key="item.id" @click="tosonglist(item.id)">
              <!-- 图片 -->
              <div class="top">
                <img :src="item.picUrl" alt="">
                <!--  播放数目还是收藏数目 没分清 -->
                <div class="playnum">
                  <i class="fa fa-headphones"></i>
                  <!-- <span>207万</span> -->
                </div>
              </div>
              <!-- 歌单介绍 -->
              <div class="bottom">
                <p>{{item.name}}</p>
              </div>
            </li>
            <!-- <li></li> -->
          </ul>
        </div>
        <!--  最新音乐 -->
        <div class="title">
          最新音乐 <i class="fa fa-angle-right"></i>
        </div>
        <div class="newsongs">
          <ul>
            <li v-for="item in newsong" :key="item.id">
              <div class="top">
                <img :src="item.song.album.picUrl" alt="">
              </div>
              <div class="bottom">
                <p>{{item.name}}</p>
                <p>{{item.song.artists[0].name}}</p>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// import ISscrol from 'iscroll'
export default {
  data () {
    return {
      banner: [],
      songlist: [],
      newsong: []
    }
  },
  created () {
    let that = this
    this.axios.get('http://apimusic.zhuchuanyong.com/banner').then(function (res) {
      // console.log(res)
      // console.log(that.banner)
      that.banner = res.data.banners
      // console.log(that.banner)
    })
    this.axios.get('http://apimusic.zhuchuanyong.com/personalized').then(function (res) {
      // console.log(res)
      that.songlist = res.data.result
    })
    this.axios.get('http://apimusic.zhuchuanyong.com/personalized/newsong').then(function (res) {
      that.newsong = res.data.result
      // console.log(that.newsong)
    })
  },
  mounted () {
  },
  methods: {
    tosonglist (id) {
      // console.log(122)
      // console.log(this)
      this.$router.push({
        name: 'singsonglist',
        params: {
          id: id
        }
      })
    }
    // Scrollsong () {
    //   this.iSscrol = new ISscrol(this.$refs.ulsonglist, {
    //     mouseWheel: true,
    //     scrollbars: true
    //   })
    // },
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/variable.less";
@import "../../../assets/css/minxin.less";
.recommend {
  overflow: hidden;
}
.ulsonglist {
  position: relative;;
  overflow: hidden;
  overflow-y: scroll;
  padding-bottom: 50px;
  height: 700px;
  // >ul {
  //   position:relative
  // }
}
.banner {
  width: 100%;
  height: 200px;
  // background-color: yellow;
}
.type {
  margin: 16px 0;
  display: flex;
  > div {
    flex-basis: 0;
    flex-grow: 1;
    height: 80px;
    // position: relative;
    .icon {
      position: relative;
      height: 50px;
      // background-color: green;
      text-align: center;
      .circle {
        width: 50px;
        .center;
        // text-align: center;
        border-radius: 50%;
        border: 1px solid @backgroundred;
        box-sizing: border-box;
      }
      i {
        line-height: 50px;
        // text-align: center;
        // background-color: yellow;
        vertical-align: middle;
        color: @backgroundred;
        &:before {
          margin-left: 3px;
          margin-top: -2px;
        }
      }
    }
    p {
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      text-align: center;
    }
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
.songlist,
.newsongs {
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 1.05rem;
      // height: 1.53rem;
      // background-color: pink;
      margin-bottom: 10px;
    }
    .top {
      width: 100%;
      height: 1.05rem;
      // background-color: red;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .bottom {
      width: 100%;
      height: 48px;
      // background-color: yellow;

      p {
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .playnum {
    position: absolute;
    top: 0;
    right: 0;
    height: 25px;
    width: 0.6rem;
    // background-color: pink;
    float: right;
    line-height: 25px;
    color: @fontawesome;
    text-align: right;
    box-sizing: border-box;
    padding-right: 10px;
  }
}
.songlist .bottom {
  // 设置多行...
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  // text-overflow: ellipsis;
}
</style>
