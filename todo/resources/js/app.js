require('./bootstrap');

window.Vue = require('vue');

Vue.component('top-nav', require('./components/TopNav.vue').default);
Vue.component('landing', require('./components/Landing.vue').default);
Vue.component('app-footer', require('./components/Footer.vue').default);

const app = new Vue({
    el: '#app',
});
