import Vue from 'vue';
import App from './App';

if (! window.name) {
  Vue.transition('flip', {
    enterClass: 'flipInX',
    leaveClass: 'flipOutX',
  });

  new Vue({ // eslint-disable-line no-new
    el: 'body',

    components: {
      App,
    },

    data() {
      return {
        controlWindow: null,
      };
    },

    ready() {
      this.$nextTick(() => {
        this.initMessageListener();
        this.openControlWindow();
      });
    },

    events: {
      console(data) {
        console.log(data); // eslint-disable-line no-console
      },
    },

    methods: {
      initMessageListener() {
        window.addEventListener('message', this.receiveMessage, false);
      },

      receiveMessage(event) {
        if (! Array.isArray(event.data)) return;
        console.log('recieveMessage', event); // eslint-disable-line no-console
        this.$emit(event.data[0], event.data[1]);
        this.$broadcast(event.data[0], event.data[1]);
      },

      openControlWindow() {
        if (this.controlWindow == null || this.controlWindow.closed) {
          const url = 'controlWindow.html';
          const windowFeatures = 'width=600,height=350,resizable,scrollbars,status';
          this.controlWindow = window.open(url, 'FeudBoardControlWindow', windowFeatures);
        } else {
          // this.controlWindow.refresh();
          this.controlWindow.focus();
        }
      },
    },
  });
}
