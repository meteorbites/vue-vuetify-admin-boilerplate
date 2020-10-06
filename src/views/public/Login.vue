<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="model.valid" lazy-validation>
              <v-text-field
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                v-model="model.username"
                :rules="[(v) => !!v || 'Required']"
              ></v-text-field>

              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="model.password"
                v-on:keyup="onpwdenter"
                :rules="[(v) => !!v || 'Required']"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="authenticate">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    source: String,
  },

  data: () => ({
    model: {
      valid: true,
      username: '',
      password: ''
    }
  }),

  methods: {
    onpwdenter: function (e) {
      if (e.keyCode === 13 && this.model.username && this.model.password) {
        this.authenticate();
      }
    },
    authenticate() {
      const { username, password } = this.model;

      if (this.$refs.form.validate() && username && password) {
        // your login service call here...
        window.getApp.$emit("APP_LOGIN_SUCCESS");
      }
    },
  },
};
</script>