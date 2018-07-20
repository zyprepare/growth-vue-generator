import { DATA, UPDATE } from '../types'
import log from '@/utils/log'
import { getData } from '@/server'

const state = {
  'data': [],
  'isLoading': false
}

const mutations = {
  [UPDATE](state, val) {
    state.data = val
  },
  updateLoadState(state, val) {
    state.isLoading = val
  }
}

const actions = {
  [DATA](context) {
    context.commit('updateLoadState', true)
    setTimeout(() => {
      getData().then((res) => {
        log(res)
        context.commit(UPDATE, res.data)
        context.commit('updateLoadState', false)
      }).catch(() => {
        context.commit('updateLoadState', false)
      })
    }, 2000)
  }
}

export default { state, mutations, actions }
