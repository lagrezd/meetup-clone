// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDqYVl8EbaXKUAbBcOqO8cjSPax6V_pQ68',
      authDomain: 'meetup-fb569.firebaseapp.com',
      databaseURL: 'https://meetup-fb569.firebaseio.com',
      projectId: 'meetup-fb569',
      storageBucket: 'meetup-fb569.appspot.com'
    })
  }
})
