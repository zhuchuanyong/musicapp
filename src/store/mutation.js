const mutations = {
  setsonglistid (state, payload) {
    state.songlistid = payload.ids
    state.currentindex = payload.index
  },
  setplaying (state, playing) {
    state.playing = playing
  },
  setindex (state, index) {
    state.currentindex = index
  }
}
export default mutations
