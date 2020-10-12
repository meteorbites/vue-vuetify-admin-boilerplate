<template>
  <v-footer app inset>
    <span>{{ $t('app_footer.title') }}</span>
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
