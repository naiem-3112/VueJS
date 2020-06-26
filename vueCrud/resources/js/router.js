import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// basic component import
import secondPage from './components/pages/secondPage'
import firstPage from './components/pages/myFirstVuePage'
import hooks from './components/pages/basic/hooks'
import basicStaffs from './components/pages/basic/someBasicStaffs'

// project component import
import home from './components/pages/project/home'
import tags from './components/pages/project/projectTag'

//all Vue  routes
const routes = [

    // project routes
    {
        path: '/',
        component: home
    },
    {
      path: '/tags',
      component: tags
    },




















    // basic routes
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
