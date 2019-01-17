import Vue from 'vue'
import Counter from './counter.vue'
import store from './store'
const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    store,
    render: (h) => h(Counter)
}).$mount(root)