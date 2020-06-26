<template>
    <div>
        <h2>The number is {{ counter }}</h2>
        <button @click="countNumber(1)">Increase</button>
        <button @click="countNumber(-1)">Decrease</button>
        <hr>

        <div v-for="(blog, i) in blogs" :key="i" v-if="blogs.length">
            <ul>
                <li>{{ blog.id }}</li>
                <li>{{ blog.title }}</li>
                <li>{{ blog.post }}</li>
            </ul>
        </div>
    </div>
</template>


<script>
    export default {

        data(){
            return{
                counter: 0,
                blogs  : [],
            }
        },

        methods: {
           countNumber(number){
               this.counter += number

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
