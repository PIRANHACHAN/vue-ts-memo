import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Category from './model/CateEnum'
import ItemData from './model/ItemData'

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')

let item1 = new ItemData(1, Category.Study, '你好', '我也好')

console.log(item1)
