<template>
  <div>
    <!-- <TheHeader /> -->
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goal #default="slotItems">
        <h2>{{ slotItems.item }}</h2>
        <p>{{ slotItems['anotherProp'] }}</p>
    </course-goal>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoal from './components/CourseGoal.vue'

export default {
  components:{
    // 'the-header': TheHeader,
    //TheHeader: TheHeader, //can use self-close html tag with PascalCase
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoal
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>