import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import fullpage from 'fullpage.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from './components/NavBar.vue'
import 'fullpage.js/dist/fullpage.css'
import emitter from '@/libs/emitter'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.component('NavBar', NavBar)// 前面對應標簽名
app.mount('#app')

new fullpage('#fullpage', { // eslint-disable-line
  // options here
  autoScrolling: true,
  scrollHorizontally: false,
  menu: '.nav-bar',

  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Home', 'New Products', 'News', 'Connect Us'],
  showActiveTooltips: true,

  controlArrows: false,

  slidesNavigation: true,
  slidesNavPosition: 'bottom',

  verticalCentered: false,

  responsiveWidth: 970,

  afterLoad: function (origin, destination, direction) {
    emitter.emit('has-scroll', destination.index) // To NavBar.Vue
  }
})
emitter.on('modeSwitcher', () => {
  fullpage_api.destroy('all') // eslint-disable-line
})
