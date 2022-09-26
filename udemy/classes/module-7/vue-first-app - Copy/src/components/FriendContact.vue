<template>
  <section>
    <li>
      <h2>{{ name }} {{ isFavouriteVal === "1" ? '(Favourite)' : '' }}</h2>
      <button @click="isFavourite">Favourite</button>
      <button @click="toggleDetails">{{ details ? 'Hide' : 'Show' }} Details</button>
      <ul v-if="details">
        <li>Phone: {{ phone }}</li>
        <li>Email: {{ email }}</li>
      </ul>
    </li>
  </section>
</template>

<script>
export default {
  props:[
    'name',
    'phone',
    'email',
    'favourite',
  ],
  data(){
    return {
      details: false,
      isFavouriteVal: this.favourite,
      friend:{
        id: 1,
        name: 'Nuro',
        phone: '01900099923',
        email: 'nuro@gmail.com',
      }
    }
  },

  methods:{
    toggleDetails(){
      this.details = !this.details;
    },
    isFavourite(){
      if(this.isFavouriteVal==="1"){
        this.isFavouriteVal = "0";
      }else{
        this.isFavouriteVal = "1"
      }
    }
  }
};
</script>
