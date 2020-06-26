<template>
    <div>
        <h2>The number is {{ counter }}</h2>
        <button @click="countNumber(1)">Increase</button>
        <button @click="countNumber(-1)">Decrease</button>
    </div>
</template>


<script>
    export default {
        data(){
            return{
                counter: 0
            }
        },
        methods: {
           countNumber(number){
               this.counter += number

           }
        }

    }
</script>
