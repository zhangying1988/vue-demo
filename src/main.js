import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
import fastclick from 'fastclick'//300毫秒延迟点击问题’
import './assets/styles/reset.css' //引入全局样式
import './assets/styles/border.css'//一像素边框border.css
import './assets/styles/iconfont.css'//icon
Vue.config.productionTip = false
fastclick.attach(document.body)//使用fastclick
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
