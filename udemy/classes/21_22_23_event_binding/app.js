const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num:1
    };
  },
  methods:{
    increment(num) {
      this.counter = this.counter+num;
    },
    decrement(num) {
      this.counter = this.counter-num;
    }
  }
});

app.mount('#events');
