import Vue from 'vue';
import Vuetify from 'vuetify/lib';

// locale
import en from '@/locale/en'

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { en },
    current: 'en'
  },
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      
    },
  },
});
