import 'babel-polyfill';
import VueRouter from 'vue-router';
import routes from './config/routes';

Vue.use(VueRouter);

const router = new VueRouter({ routes });

const app = new Vue({router}).$mount('#content')
