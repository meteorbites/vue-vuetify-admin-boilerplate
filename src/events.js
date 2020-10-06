export default [
    {
        name: 'APP_LOGIN_SUCCESS',
        callback: function (e) {
            console.log(e);
            this.snackbar = {
                show: true,
                color: 'green',
                text: 'User authenticated successfully.'
            };
            this.$router.push({ path: '/' });
        }
    },
    {
        name: 'APP_LOGOUT',
        callback: function (e) {
            console.log(e);
            this.snackbar = {
                show: true,
                color: 'green',
                text: 'Logout successfully.'
            };
            this.$router.replace({ path: '/auth/login' });
        }
    }
];
