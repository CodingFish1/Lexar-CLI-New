import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Fullpage from 'fullpage.js'
import 'bootstrap'
import NavBar from './components/NavBar.vue'
import 'fullpage.js/dist/fullpage.css'
import emitter from '@/libs/emitter'

const app = createApp(App)
app.use(router)
app.component('NavBar', NavBar)// 前面對應標簽名
app.mount('#app')

new Fullpage('#fullpage', { // eslint-disable-line no-new
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
    emitter.emit('has-scroll', destination.index)
  }
})
