const app = Vue.createApp({
    data() {
        return {
            OUTPUT1: '',
            OUTPUT2: '',
        }
    },

    methods: {
        showAlert(){
            alert('Alert is showing!');
        },

        getInput1Val(event){
            return this.OUTPUT1 = event.target.value;
        },
       
        getInput2Val(event){
            return this.OUTPUT2 = event.target.value;
        }
    }
});

app.mount('#assignment');