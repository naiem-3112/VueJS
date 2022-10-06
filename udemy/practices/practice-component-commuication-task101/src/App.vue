<template>
  <section>
    <user-data
    @add-userdata="addUserData"
    ></user-data>
    <active-user
    :name= username
    :age= age
    ></active-user>
  </section>
</template>

<script>
export default {
  data(){
    return{
      username: 'Md. Shahadat Hossain',
      age: 26
    }
  },
  methods:{
    addUserData(name, age){
      console.log('add clicked')
      this.username = name,
      this.age = age
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
