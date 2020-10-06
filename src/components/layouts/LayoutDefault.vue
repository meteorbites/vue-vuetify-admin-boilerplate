<template>
  <v-app class="app">
    <app-drawer class="app--drawer" ref="drawer" />
    <app-toolbar class="app--toolbar" @side-icon-click="handleDrawerVisible" />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <v-container fluid>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-main>

    <!-- Theme Settings Drawer -->
    <!-- <v-navigation-drawer v-model="right" fixed right temporary /> -->

    <!-- App Footer -->
    <app-footer class="app--footer" />
  </v-app>
</template>

<script>
import AppToolbar from '@/components/AppToolbar'
import AppDrawer from '@/components/AppDrawer'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'LayoutDefault',
  components: {
    AppToolbar,
    AppDrawer,
    AppFooter
  },

  data: () => ({
    right: null
  }),

  methods: {
    handleDrawerVisible() {
      this.$refs.drawer.toggleDrawer()
    }
  }
};
</script>

<style lang="sass" scoped>
.app--toolbar
  .v-toolbar__extension
    padding: 0 !important
</style>