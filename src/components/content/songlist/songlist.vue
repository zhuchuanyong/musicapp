<template>
  <div class="songlist scroll">
    <!-- 头部精品歌单 -->
   <!-- <div class="title">
     <div class="img"></div> -->
     <!-- 歌单介绍 -->
     <!-- <div class="introduce">
      <h3>精品歌单 <i class="fa fa-angle-right"></i></h3>
      <p>中国传统节日</p>
      <span>一起领略最美的东方韵律吧</span>
     </div> -->
   <!-- </div> -->
   <!-- 全部歌单 -->
   <div class="allsonglist">
     <div class="alllist">
       <p>全部歌单 <i class="fa fa-angle-right"></i></p>
       <ul>
         <li>欧美</li>
         <li>民谣</li>
         <li>电子</li>
       </ul>
     </div>
   </div>
    <!-- 歌单列表 -->
   <div class="list">
     <ul>
       <li v-for="item in songlist" :key="item.id" @click="tosonglist(item.id)">
         <div class="img">
          <img :src="item.coverImgUrl" alt="">
          <!-- 歌单收藏数目 -->
          <div class="num">
            <i class="fa fa-headphones"></i>
            <span>{{item.playCount}}</span>
          </div>
          <!-- 用户 歌单创建者 -->
          <div class="user">
            <i class="fa fa-male"></i> <span>{{item.creator.nickname}}</span>
          </div>
         </div>
         <!-- 歌单简介 -->
         <div class="listbrief">
           <p>{{item.name}}</p>
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
      songlist: []
    }
  },
  created () {
    let that = this
    this.axios.get('http://apimusic.zhuchuanyong.com/top/playlist?limit=30&order=hot').then(function (res) {
      // console.log(res)
      that.songlist = res.data.playlists
      console.log(that.songlist)
    })
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
  }
}
</script>

<style lang="less" scoped>
@import "../../../assets/css/variable.less";
.scroll {
  position: relative;;
  overflow: hidden;
  overflow-y: scroll;
  padding-bottom: 50px;
  height: 700px;
}
.title {
  display: flex;
  padding: 15px 0;
  height: 120px;
  // background-color: yellow;
  box-sizing: border-box;
  color: #cccccc;
  .img {
    width: 0.9rem;
    height: 90px;
    margin: 0 0.1rem;
    background-color: green;
  }
  p {
    font-size: 14px;
    margin-top: 12px;
  }
  span {
    display: inline-block;
    font-size: 10px;
  }
  h3,
  p,
  span {
    height: 26px;
    line-height: 26px;
  }
}
.allsonglist {
  height: 40px;
  .alllist {
    height: 100%;
    display: flex;
    p,
    ul {
      height: 100%;
      flex-basis: 0;
      flex-grow: 1;
      line-height: 40px;
    }
    ul {
      display: flex;
      li {
        height: 100%;
        flex: 1;
        font-size: 14px;
      }
    }
  }
}
.list {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      // flex-basis: 0;
      // flex-grow: 1;
      width: 49%;
      height: 200px;
      // background-color: green;
    }
  }
  li {
    .img {
      height: 150px;
      // background-color: red;
      position: relative;
      img {
      width: 100%;
      height: 100%;
      }
    }
    .num {
      height: 25px;
      width: 0.7rem;
      position: absolute;
      right: 0;
      // background-color: pink;
      // float: right;
      top: 0;
      text-align: right;
      line-height: 25px;
      color: @fontawesome;
    }
    .user {
      position: absolute;
      bottom: 0;
      left: 0.05rem;
    }
    .listbrief {
      // 设置多行...
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 50px;
      p {
        // height: 50px;
        font-size: 14px;
        line-height: 25px;
      }
    }
  }
}
</style>
