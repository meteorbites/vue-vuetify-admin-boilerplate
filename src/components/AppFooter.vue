<template>
  <v-footer app inset>
    <span>{{ $vuetify.lang.t("$vuetify.app_footer.title") }}</span>
    <v-spacer />
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
  data: () => ({}),
  methods: {},
  created() {},
};
</script>
