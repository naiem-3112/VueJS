const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    add(num) {
      return this.counter= this.counter+num;
    },
    remove(num) {
      return this.counter = this.counter-num;
    },
    setName(event, lastName){
      return this.name = event.target.value + ' ' + lastName;
    },
    onSubmit(){
      event.preventDefault();
      alert('Sure to submit!');
    },
  }
});

app.mount('#events');
