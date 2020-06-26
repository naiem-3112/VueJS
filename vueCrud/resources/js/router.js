import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import secondPage from './components/pages/secondPage'
import firstPage from './components/pages/myFirstVuePage'
import hooks from './components/pages/basic/hooks'
import basicStaffs from './components/pages/basic/someBasicStaffs'

//all Vue routes
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
    },

    //vue besic staffs
    {
        path: '/basic-staffs',
        component: basicStaffs
    }
]

export default new Router({
    mode: 'history',
    routes
})
