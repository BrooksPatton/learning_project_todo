require('./bootstrap');

window.Vue = require('vue');

Vue.component('top-nav', require('./components/TopNav.vue').default);
Vue.component('landing', require('./components/Landing.vue').default);
Vue.component('app-footer', require('./components/Footer.vue').default);
Vue.component('create-account', require('./components/CreateAccount.vue').default);
Vue.component('dashboard', require('./components/DashboardComponent').default);
Vue.component('login', require('./components/LoginComponent').default);
Vue.component('button-link', require('./components/ButtonLinkComponent').default);
Vue.component('form-required-text', require('./components/FormRequiredText').default);
Vue.component('email-form-field', require('./components/EmailFormField').default);
Vue.component('password-form-field', require('./components/PasswordFormField').default);
Vue.component('button-form', require('./components/ButtonForm').default);
Vue.component('form-csrf-token', require('./components/FormCSRFToken').default);
Vue.component('settings', require('./components/Settings').default);

const app = new Vue({
    el: '#app',
});
