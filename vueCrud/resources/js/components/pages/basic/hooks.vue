<template>
    <div>
        <h2 ref="myref">This is from Hooks component {{name}}</h2>
        <h3>My name is {{ name }} </h3>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'naiem'
            }
        },

        // hooks
        beforeCreate() {
            console.log(this.$refs.myref)//try to access html-undefined
            console.log(this.name)//showing undefined bcz instantiated before creating data and render HTML
        },
        created() {
            console.log(this.$refs.myref)//try to access html-undefined
            console.log(this.name)// showing data but not the HTML bcz instantiated before html is rendered
        },
        mounted() {
            console.log(this.$refs.myref)//showing data and HTML bcz instantiated after all the HTML is rendered
            console.log(this.name)
        }
    }
</script>
