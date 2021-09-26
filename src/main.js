import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import jQuery from 'jquery'
import 'jquery-ui/ui/widgets/draggable'
createApp(App)
  .use(router)
  .mount('#app');
  global.$ = jQuery
