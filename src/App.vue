<template>
  <v-app :dark="false">
    <router-view></router-view>
    <!-- theme setting -->
    
    <!-- global snackbar -->
    <v-snackbar
      :timeout="3000"
      app
      top
      centered
      :color="snackbar.color"
      v-model="snackbar.show"
    >
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn icon v-bind="attrs" @click="snackbar.show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import AppEvents from  './events';

export default {
  components: {
    
  },

  data() {
    return {
      rightDrawer: false,
      snackbar: {
        show: false,
        text: '',
        color: ''
      }
    }
  },

  created () {
    AppEvents.forEach(item => {
      this.$on(item.name, item.callback);
    });
    window.getApp = this;
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
