import Vue from 'vue';
import App from './App';

Vue.transition('flip', {
  enterClass: 'flipInX',
  leaveClass: 'flipOutX',
});

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
});
