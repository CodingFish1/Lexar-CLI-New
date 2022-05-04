import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import fullpage from 'fullpage.js'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import 'fullpage.js/dist/fullpage.css'
import emitter from '@/libs/emitter'

import axios from 'axios'
import VueAxios from 'vue-axios'

// Vue Loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// Sweet Alert2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
Object.keys(AllRules).forEach((rule) => { defineRule(rule, AllRules[rule]) })
configure({
  generateMessage: localize({ en: en }), // 載入En
  validateOnInput: false// 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('en')

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.use(VueSweetalert2)
app.component('NavBar', NavBar)// 前面對應標簽名
app.component('FooterBar', FooterBar)// 前面對應標簽名
// Vue Validation
app.component('vForm', Form)
app.component('vField', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')

app.component('LoadingIt', Loading)

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
