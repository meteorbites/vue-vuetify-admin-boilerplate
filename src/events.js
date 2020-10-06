export default [
    {
        name: 'app-login-success',
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
        name: 'app-logout',
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
