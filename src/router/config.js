
export const publicRoute = [
    {
        path: '*',
        component: () => import('@/views/public/error/NotFound.vue')
    },
    {
        path: '/auth',
        component: () => import('@/components/layouts/LayoutAuth.vue'),
        meta: {
            title: 'Login'
        },
        redirect: '/auth/login',
        hidden: true,
        children: [
            {
                path: 'login',
                name: 'login',
                meta: {
                    title: 'Login'
                },
                component: () => import('@/views/public/Login.vue')
            }
        ]
    }
]

export const protectedRoute = [
    {
        path: '/',
        component: () => import('@/components/layouts/LayoutDefault.vue'),
        meta: {
            title: 'home',
            group: 'apps',
            icon: ''
        },
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                meta: {
                    title: 'dashboard',
                    group: 'apps',
                    icon: 'mdi-monitor-dashboard'
                },
                component: () => import('@/views/Dashboard.vue')
            },
            {
                path: '/about',
                name: 'About',
                meta: {
                    title: 'about',
                    group: 'apps',
                    icon: 'mdi-information-outline'
                },
                component: () => import('@/views/About.vue')
            }
        ]
    }
]
