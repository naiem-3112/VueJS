require('./bootstrap');
// firstly load the vue here
window.Vue = require('vue')

// add component here
Vue.component('main-component', require('./components/mainComponent').default);
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
});
