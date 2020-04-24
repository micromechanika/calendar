import Vue from 'vue'
import Vuex from 'vuex'
import practicioner from './modules/practicioner'
import user from './modules/user'
import translation from './modules/translation'

Vue.use(Vuex)
const store = new Vuex.Store({
	modules: { translation, practicioner, user },
})

store.dispatch('translation/getTranslate')
store.dispatch('user/getPracticionerSchedule')
export default store
