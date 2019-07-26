require('./bootstrap');

window.Vue = require('vue');

Vue.component('top-nav', require('./components/TopNav.vue').default);

const app = new Vue({
    el: '#app',
});
