import app from '../components/app.vue';
import about from '../components/about.vue';
import error from '../components/error.vue';

export default [
  {path: '/', name: 'app', component: app },
  {path: '*', name: 'error', component: error }
]
