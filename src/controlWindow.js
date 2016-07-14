import Vue from 'vue';
import ControlWindow from './components/ControlWindow';

if (window.name === 'FeudBoardControlWindow') {
  Vue.transition('flip', {
    enterClass: 'flipInX',
    leaveClass: 'flipOutX',
  });

  new Vue({ // eslint-disable-line no-new
    el: 'body',

    components: {
      'control-window': ControlWindow,
    },

    data() {
      return {
        controlWindow: null,
      };
    },

    ready() {
      this.sendMessage('console', 'Control window loaded.', 'info');
    },

    events: {
      console(data) {
        console.log(data); // eslint-disable-line no-console
      },
      sendMessage(data) {
        this.sendMessage(data[0], data[1]);
      },
    },

    methods: {
      sendMessage(event, data) {
        window.opener.postMessage([event, data], '*');
      },
    },
  });
}
