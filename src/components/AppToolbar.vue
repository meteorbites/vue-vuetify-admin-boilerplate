<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="handleDrawerToggle" />
    <v-toolbar-title>{{
      $vuetify.lang.t("$vuetify.app_drawer." + this.$route.meta.title)
    }}</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn icon @click="this.handleFullScreen">
        <v-icon>mdi-fullscreen</v-icon>
      </v-btn>
      <v-btn icon>
        <!-- @click="openThemeSettings()" -->
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
      <v-menu offset-y origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon large text slot="activator" v-on="on">
            <v-avatar size="30px">
              <img src="/static/avatar/dummy_profile.png" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list class="pa-0">
          <v-list-item ripple="ripple" rel="noopener" @click="this.logout">
            <v-list-item-action>
              <v-icon>mdi-exit-run</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{
                $vuetify.lang.t("$vuetify.app_toolbar.logout")
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-toolbar tag="div" dense slot="extension" color="white" light>
      <v-icon>mdi-home</v-icon>
      <v-breadcrumbs :items="breadcrumbs" class="pa-3" />
      <v-spacer></v-spacer>
      <v-btn icon small color="black">
        <v-icon v-text="'mdi-arrow-left'" />
      </v-btn>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
import Util from "@/util";

export default {
  name: "AppToolbar",
  data: () => ({
    // drawer: null,
  }),
  computed: {
    breadcrumbs() {
      const { matched } = this.$route;
      return matched.map((route, index) => {
        const to =
          index === matched.length - 1
            ? this.$route.path
            : route.path || route.redirect;
        const text = this.$vuetify.lang.t(
          "$vuetify.app_drawer." + route.meta.title
        );
        return {
          text: text,
          to: to,
          exact: true,
          disabled: false,
        };
      });
    },
  },
  methods: {
    handleDrawerToggle() {
      this.$emit("side-icon-click");
    },
    logout() {
      window.getApp.$emit("app-logout");
      console.log("log out!");
    },
    handleFullScreen() {
      Util.toggleFullScreen();
      console.log("fullscreen");
    },
  },
  created() {},
};
</script>

<style lang="sass" scoped></style>