const app = Vue.createApp({
    data() {
        return{
            courseGoal: 'Finish this course with september 2022',
            tagDynamic: '<h1>Finish </h1>',
            vueLink: 'https://vuejs.org/',
        }
    },
    methods: {
        goals() {
            const randNum = Math.random();
            if(randNum > 0.5){
                return this.courseGoal;
            }else{
                return 'no goal exist';
            }
        }
    }
});

app.mount('#user-goal');