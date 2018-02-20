<template>
  <div class="recommend">
    <div class="banner">
    </div>
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
    <!-- 推荐歌单 -->
    <div class="title">
      推荐歌单 <i class="fa fa-angle-right"></i>
    </div>
    <div class="songlist">
      <ul>
        <li>
          <!-- 图片 -->
          <div class="top">
            <!--  播放数目还是收藏数目 没分清 -->
            <div class="playnum">
              <i class="fa fa-headphones"></i>
              <span>207万</span>
            </div>
          </div>
          <!-- 歌单介绍 -->
          <div class="bottom">
            <p>华语/白首写给前任的歌,让你百感交集你百感交集你百感交集你百感交集交集你交集你</p>
          </div>
        </li>
        <li></li>
      </ul>
    </div>
    <!--  最新音乐 -->
    <div class="title">
      最新音乐 <i class="fa fa-angle-right"></i>
    </div>
    <div class="newsongs">
      <ul>
        <li>
          <div class="top"></div>
          <div class="bottom">
            <p>成都</p>
            <p>赵雷</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../../../assets/css/variable.less";
@import "../../../assets/css/minxin.less";
.recommend {
  overflow: hidden;
}
.banner {
  width: 100%;
  height: 110px;
  background-color: yellow;
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
      background-color: green;
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
      background-color: pink;
      margin-bottom: 10px;
    }
    .top {
      width: 100%;
      height: 1.05rem;
      background-color: red;
    }
    .bottom {
      width: 100%;
      height: 48px;
      background-color: yellow;

      p {
        height: 24px;
        line-height: 24px;
        font-size: 14px;
      }
    }
  }

  .playnum {
    height: 25px;
    width: 0.6rem;
    background-color: pink;
    float: right;
    line-height: 25px;
    color: @fontawesome;
    span {
    }
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
