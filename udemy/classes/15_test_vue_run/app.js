Vue.createApp({
    data() {
        return {
            link: 'https://v3.vuejs.org/'
        }
    },
    methods:{
        randomVal() {
            const randVal = Math.random();
            if(randVal < 0.5){
                return 'Learn Vue!';
            }else{
                return 'Master Vue!';
            }
        }
    }
}).mount('#test');