<template>
    <div>
<!--        count value-->
        <h2>The number is {{ counter }}</h2>
        <button @click="countNumber(1)">Increase</button>
        <button @click="countNumber(-1)">Decrease</button>
        <hr>

<!--        for loop-->
        <div v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
            <ul>
                <li>{{ blog.id }}</li>
                <li>{{ blog.title }}</li>
                <li>{{ blog.post }}</li>
            </ul>
        </div>
        <hr>

<!--        if else-->
        <div>
            <h2 v-if="forSee">now you see me</h2>
            <h2 v-else>now you don't</h2>
            <button @click="showHide()">change me</button>
        </div>

    </div>
</template>


<script>
    export default {

        data(){
            return{
                counter: 0,
                blogs  : [],
                forSee : false,
            }
        },

        methods: {
           countNumber(number){
               this.counter += number
           },
            showHide(){
               this.forSee = !this.forSee
            }
        },

        // take a created hook, suppose getting data from server
        created(){
            // get the blog post
            let posts = [
                {
                    id: 1,
                    title: 'post title 1',
                    post: 'this is post 1',
                },
                {
                    id: 2,
                    title: 'post title 2',
                    post: 'this is post 2',
                },
                {
                    id: 3,
                    title: 'post title 3',
                    post: 'this is post 3',
                },
            ]
            this.blogs = posts
        }

    }
</script>
