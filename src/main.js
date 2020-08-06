import Vue from 'vue'
import APP from './App.vue'
import router from './router'

new Vue({
    router,
    render : h => h(APP)
}).$mount('#app')


// new Vue({
//     el: '#app',
//     router
// })
