<template>
    <section>
        <form @submit.prevent="submitData">
            <div>
                <label>Username</label>
                <input type="text" v-model="username">
            </div>
            <div>
                <label>Age</label>
                <input type="number" v-model="age">
            </div>
            <div>
                <button @click="$emit('add-userdata', username, age)">Add Data</button>
            </div>
        </form>
    </section>
</template>

<script>
export default{
    emits:['add-userdata'],
    data(){
        return{
            username:'',
            age: 0
        }
    }
}
</script>