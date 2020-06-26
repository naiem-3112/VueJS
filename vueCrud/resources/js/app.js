require('./bootstrap');
// firstly load the vue here
window.Vue = require('vue')
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
// add component here
Vue.component('main-component', require('./components/mainComponent').default);
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    router
});
