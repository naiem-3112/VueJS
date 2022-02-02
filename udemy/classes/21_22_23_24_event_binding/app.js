const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      num: 1,
      text: ''
    };
  },
  methods:{
    increment(num) {
      this.counter = this.counter+num;
    },
    decrement(num) {
      this.counter = this.counter-num;
    },
    setName(event, EndText){
      this.text = event.target.value + ' ' + EndText;
    }
  }
});

app.mount('#events');
