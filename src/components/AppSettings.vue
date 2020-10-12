<template>
  <v-navigation-drawer
      class="setting-drawer"
      temporary
      right
      v-model="rightDrawer"
      hide-overlay
      fixed
    >
    <v-toolbar>
      <v-toolbar-title>{{ $t('app_settings.settings') }}</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-row column>
        <v-col>
          <v-subheader class="px-0">{{ $t('app_settings.language') }}</v-subheader>
          <v-select
            placeholder="$t('app_settings.language')"
            :items="availableLanguages"
            v-model="$i18n.locale"
          />
          <div class="theme-options">
            <v-subheader class="px-1">{{ $t('app_settings.theme') }}</v-subheader>
            <v-divider></v-divider>
            <div class="my-3">
              <v-btn-toggle
                v-model="themeOption"
                tile
                group
                mandatory
              >
                <v-btn value="light">
                  {{ $t('app_settings.light') }}
                </v-btn>

                <v-btn value="dark">
                  {{ $t('app_settings.dark') }}
                </v-btn>
              </v-btn-toggle>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "AppSettings",
  data: () => ({
    themeOption: 'light',
    rightDrawer: false
  }),
  computed: {
    availableLanguages() {
      const messages = this.$i18n.messages

      return Object.keys(messages).map((lang) => {
        return {
          text: messages[lang].language,
          value: lang
        }
      });
    }
  },
  watch: {
    themeOption: {
      handler(val) {
        this.$vuetify.theme.dark = val === 'dark'
      },
      immediate: true
    }
  },
  methods: {
    showSettings() {
      this.$vuetify.goTo(0)
      this.rightDrawer = !this.rightDrawer
    }
  }
}
</script>