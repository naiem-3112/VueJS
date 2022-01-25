const app =  Vue.createApp({
    template: '<h1>Welcome to Vue {{ firstName }}</h1>',
    data(){
        return {
            firstName: 'Jhon'
        }
    }
})

app.mount('#app')