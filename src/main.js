import Vue from 'vue';
import App from './App';

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
      this.$emit(event.data[0], event.data[1]);
      this.$broadcast(event.data[0], event.data[1]);
    },

    openControlWindow() {
      if (this.controlWindow == null || this.controlWindow.closed) {
        const url = 'static/controlWindow.html';
        const windowFeatures = 'width=420,height=230,resizable,scrollbars,status';
        this.controlWindow = window.open(url, 'FeudBoardControlWindow', windowFeatures);
      } else {
        this.controlWindow.refresh();
        this.controlWindow.focus();
      }
    },
  },
});
