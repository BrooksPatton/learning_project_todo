require('./bootstrap');

window.Vue = require('vue');

Vue.component('top-nav', require('./components/TopNav.vue').default);
Vue.component('landing', require('./components/Landing.vue').default);
Vue.component('app-footer', require('./components/Footer.vue').default);
Vue.component('create-account', require('./components/CreateAccount.vue').default);
Vue.component('dashboard', require('./components/DashboardComponent'))

const app = new Vue({
    el: '#app',
});
