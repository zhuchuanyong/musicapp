<template>
  <div class="list">
    <div class="img">
       {{infodata.img}}
    </div>
    <div class="info">
     <p>{{infodata.name}}</p>
     <span>{{infodata.title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: ['infodata', 'index']
}
</script>
<style lang="less" scoped>
.list {
  height: 48px;
  display: flex;
  margin-top: 10px;
  border-bottom: 1px solid #cccccc;
  .img {
    height: 50px;
    width: 50px;
    background-color: green;
    text-align: center;
    line-height: 40px;
  }
  .info {
    span {
      font-size: 14px;
    }
  }
}
</style>
