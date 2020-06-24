import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import secondPage from './components/pages/secondPage'
import firstPage from './components/pages/myFirstVuePage'
const routes = [
    {
        path: '/my-new-vue-route',
        component: firstPage
    },

    {
        path: '/second-page',
        component: secondPage
    }
]

export default new Router({
    mode: 'history',
    routes
})
