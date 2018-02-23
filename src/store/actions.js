// import vue from 'vue'
// console.log(this)
// import axios from 'axios'
// console.log(axios)
const actions = {
  getsongids (context, ids) {
    context.commit('')
    // context
    // console.log(ids)
    // console.log(axios)
    // let songs = []
    // let song = {}
    // let num = 0
    // console.log(ids)
    // console.log(ids.length)
    // for (var i=0; i++; i<5) {
    //   console.log(122)
    // }
    // for (let i = 0; i++; i < 5) {
    //   console.log(i)
    // }
    // for (var i = 0; i++; i < ids.length) {
    //   num++
    //   console.log(num)
    //   axios.all([
    //     axios.get('http://apimusic.zhuchuanyong.com/music/url?id=33894312'),
    //     axios.get('http://apimusic.zhuchuanyong.com/song/detail?ids=33894312')
    //   ])
    //     .then(axios.spread(function (url, info) {
    //       song.url = url
    //       song.info = info
    //       // console.log(song)
    //       songs.push(song)
    //       song = {}
    //       // console.log(song)
    //       console.log(songs)
    //       if (num === ids.length) {
    //         context.commit('setsonglist')
    //       }
    //     }))
    // }
  }
}
export default actions
