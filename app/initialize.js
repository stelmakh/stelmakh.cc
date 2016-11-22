import 'babel-polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './config/routes';

Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });

const app = new Vue({router}).$mount('#content')
