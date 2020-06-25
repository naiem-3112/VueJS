import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import secondPage from './components/pages/secondPage'
import firstPage from './components/pages/myFirstVuePage'
import hooks from './components/pages/basic/hooks'
const routes = [
    {
        path: '/my-new-vue-route',
        component: firstPage
    },

    {
        path: '/second-page',
        component: secondPage
    },

    // vue hooks
    {
        path: '/hooks',
        component: hooks
    }
]

export default new Router({
    mode: 'history',
    routes
})
