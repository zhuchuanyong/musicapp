<template>
  <div class="rank">
    <!-- 官方榜 -->
    <div class="official">
      <div class="title">
        云音乐官方榜 <i class="fa fa-angle-right"></i>
      </div>
      <div class="officiallist">
        <ul>
          <li>
            <div class="img"></div>
            <div class="songlist">
              <p>1. 动物世界-薛之谦薛薛薛薛</p>
              <p>2. 动物世界-薛之薛 -薛之薛-薛之薛-薛之薛</p>
              <p>3. 动物世界-薛之谦jsgjkdj哈哈ldfglkfdkll哈哈</p>
            </div>
          </li>
          <li>
            <div class="img"></div>
            <div class="songlist">
              <p>1. 动物世界-薛之谦薛薛薛薛</p>
              <p>2. 动物世界-薛之薛 -薛之薛-薛之薛-薛之薛</p>
              <p>3. 动物世界-薛之谦jsgjkdj哈哈ldfglkfdkll哈哈</p>
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
        <li>
          <div class="img">
            <img src="" alt="">
            <div class="rankname">
              <p>每周五更新</p>
            </div>
          </div>
          <!-- 简介 -->
          <div class="brief">
            <p>云音乐电音榜</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img src="" alt="">
            <div class="rankname">
              <p>每周五更新</p>
            </div>
          </div>
          <!-- 简介 -->
          <div class="brief">
            <p>云音乐电音榜</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img src="" alt="">
            <div class="rankname">
              <p>每周五更新</p>
            </div>
          </div>
          <!-- 简介 -->
          <div class="brief">
            <p>云音乐电音榜</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img src="" alt="">
            <div class="rankname">
              <p>每周五更新</p>
            </div>
          </div>
          <!-- 简介 -->
          <div class="brief">
            <p>云音乐电音榜</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img src="" alt="">
            <div class="rankname">
              <p>每周五更新</p>
            </div>
          </div>
          <!-- 简介 -->
          <div class="brief">
            <p>云音乐电音榜</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
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
    background-color: yellow;
    display: flex;
    margin-bottom: 5px;
    .img {
      height: 100%;
      // flex-basis: 0.95rem;
      // flex-grow: 0;
      width: 0.95rem;
      // width: 95px;
      background-color: red;
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
    background-color: red;
  }
  .img {
    height: 120px;
    position: relative;
    background-color: green;
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
