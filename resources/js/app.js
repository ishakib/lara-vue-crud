
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const home = require('./components/Home.vue'); 
const about = require('./components/AboutComponent.vue');
const service = require('./components/ServiceComponent.vue');
const contact = require('./components/ContactComponent.vue');

const routes= [
    {
        path:'/home',
        component: home
    },
    {
        path:'/about',
        component: about
    },
    {
        path:'/service',
        component: service
    },
    {
        path:'/contact',
        component: contact
    }
];

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

Vue.component('task', require('./components/Home.vue'));

const router= new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router
});
