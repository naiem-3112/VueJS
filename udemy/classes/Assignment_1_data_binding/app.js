const app = Vue.createApp({
    data() {
        return{
            name:'Md. Shahadat Hossain',
            age:24,
            randomNumber:Math.random(),
            randomNumberByFunction:'Generated Number',
            imgSrc:'https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses='
        }
    },
    methods:{
        randomNumberGenerate() {
            this.randomNumberByFunction = Math.random();
        },
        calculateAge(){
            return this.age +8;
        }
    }
});

app.mount('#assignment');