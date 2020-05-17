import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "./assets/rect.css"
import "./assets/font/iconfont.css"
import "./assets/viewport.js"
import './plugins/element.js'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/css/swiper.css'
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
const i18n = new VueI18n({
  locale: localStorage.getItem("lang") || "zh",
  messages: {
    zh: require("./assets/i18n/zh"),
    en: require("./assets/i18n/en")
  }
});
new Vue({
	i18n, 
	router,
	render: h => h(App)
}).$mount('#app')
