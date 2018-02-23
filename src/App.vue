<template>
  <div id="app">
    <audio :src="songurl" autoplay ref="audio"></audio>
    <!-- <p>{{this.$store.state.currentindex}}</p> -->
    <!-- <m-header></m-header> -->
    <router-view/>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from '@/components/header/mheader'
import MFooter from '@/components/footer/footer'
export default {
  name: 'App',
  data () {
    // var p1 = this.$store.state.currentindex
    return {
      index: 1,
      songid: null,
      songurl: ''
    }
  },
  components: {
    MHeader,
    MFooter
  },
  computed: {
    cindex () {
      // this.index = this.$store.state.currentindex
      return this.$store.state.currentindex
    },
    csongid () {
      // this.songid = this.$store.state.songlistid
      return this.$store.state.songlistid
    },
    playing () {
      // this.index = this.$store.state.currentindex
      return this.$store.state.playing
    }
  },
  beforeUpdate () {
    // this.geturl(csongid)
  },
  methods: {
    geturl () {
      let that = this
      this.axios.get('http://apimusic.zhuchuanyong.com/music/url', {
        params: {
          id: that.csongid
        }
      }).then(function (res) {
        console.log(res)
      })
    }
  },
  watch: {
    cindex: function (val, oldval) {
      // console.log(val)
      let that = this
      // console.log(that.csongid[val].id)
      this.axios.get('http://apimusic.zhuchuanyong.com/music/url', {
        params: {
          id: that.csongid[val].id
        }
      }).then(function (res) {
        // console.log(res)
        that.songurl = res.data.data[0].url
      })
    },
    playing: function (val, oldval) {
      if (val) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    }
  }
}
</script>
<style>
body {
  overflow: hidden;
}
</style>
