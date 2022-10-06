<template>
    <li>
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite">{{ isFavorite ? 'Remove' : 'Make' }} Favorite</button>
        <button @click="toggleDetail">{{ isVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="isVisible">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
        <button @click="$emit('delete-contact', id)">Delete</button>
    </li>
</template>

<script>
    export default {
        // props receieve without validation

        // props:[
        //     'name', 'phoneNumber', 'emailAddress', 'isFavorite'
        // ],

        // props receieve with validation
        props:{
            id:{
                type: String,
                required: true
            },
            name:{
                type: String,
                required: true
            },
            phoneNumber:{
                type: String,
                required: true
            },
            emailAddress:{
                type: String,
                required: true
            },
            isFavorite:{
                type: Boolean,
                required: false,
                default: false,
                // validator: function(value) {
                //     return value === "1" || value === "0";
                // }
            }
        },

        //validation for emit events
        emits:['friend-favorite', 'delete-contact'],

        // Detail vailidation for emit events
        // emits:{
        //     'friend-favorite': function(id){
        //         if(id){
        //             return true;
        //         }else{
        //             console.warn('id not given');
        //             return false;
        //         }
        //     }
        // },

        data(){
            return {
                isVisible: false,
                // isFavoriteCheck: this.isFavorite,
            }
        },
        methods:{
            toggleDetail(){
                this.isVisible = !this.isVisible;
            },
            toggleFavorite(){
                // this changes without knowing the parent component, only inside the chiled component
                // this.isFavoriteCheck = !this.isFavoriteCheck;

                // now change directly to the parent component, which call parent to child communication
                // this.$emit('custom event name with kebab-case formate', specific id whichone to impact with this event)
                this.$emit('friend-favorite', this.id);
            }
        }
    }
</script>
