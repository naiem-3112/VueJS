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


app.component('contact-details', {
    template:`
    <li>
        <h2>{{ contact.name }}</h2>
        <button @click="toggleDetail()">
        {{ toggleDetails ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="toggleDetails">
        <li><strong>Phone:</strong> {{ contact.phone }}</li>
        <li><strong>Email:</strong> {{ contact.email }}</li>
        </ul>
    </li>
    `,
    
    data(){
        return{
            toggleDetails: false,
            contact:{
                name: 'contact 1',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com',
            }
        }
    },

    methods:{
        toggleDetail(){
            this.toggleDetails = !this.toggleDetails;
        }
    }
});

app.mount('#app');
