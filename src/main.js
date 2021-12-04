import Vue from 'vue';
import ElementUI from 'element-ui';
import axios from "./axios";
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import store from './store/idnex'

import router from "./router"

Vue.use(ElementUI);
Vue.use(axios)

Vue.config.productionTip = false

new Vue({
    axios,
    store,
    router,
    render: h => h(App)
}).$mount('#app')