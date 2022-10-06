const app = Vue.createApp({
    data(){
        return {
           
        }
    },
    methods:{
        toggleDetail(){

        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{  friend.name }}</h2>
        <button @click="toggleDetail()">
            {{ toggleDetailValue ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="toggleDetailValue">
            <li><strong>Phone:</strong> {{  friend.phone }}</li>
            <li><strong>Email:</strong> {{  friend.email }}</li>
        </ul>
    </li>
    `,

    data(){
        return{
            toggleDetailValue: false,
            friend: {
                id: 'Manuel',
                name: 'Manuel Lorenz', 
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            }
        }
    },

    methods:{
        toggleDetail(){
            this.toggleDetailValue = !this.toggleDetailValue;
        }
    }
});

app.mount('#app');