/* Styles */
import '@/scss/main.scss'

/* Core */
import Vue from 'vue'
import Buefy from 'buefy'

/* Router & Store */
import router from './router'
import store from './store'

/* Service Worker */
import './registerServiceWorker'

/* Vue. Main component */
import App from './App.vue'

import VueResource from 'vue-resource'

/* Default title tag */
const defaultDocumentTitle = 'launcher'

/* Collapse mobile aside menu on route change */
router.afterEach(to => {
  store.commit('asideMobileStateToggle', false)
  store.commit('overlayToggle', false)
  store.commit('asideActiveForcedKeyToggle', null)

  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})

Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.documentElement.classList.remove('has-spinner-active')
  }
}).$mount('#app')
