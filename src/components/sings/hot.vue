<template>
  <div class="hot">
    <songlist :infodata='item' v-for="(item , index) in infodata" :key="index" :index="index+1"></songlist>
  </div>
</template>
<script>
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
    songlist
  }
}
</script>
<style lang="less" scoped>
</style>
