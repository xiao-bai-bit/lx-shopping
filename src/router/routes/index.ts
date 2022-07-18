import { RouteRecordRaw } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home',
        component: () => import('@/views/layout/BasicLayout.vue'),
        children: [
            {
                path: 'home',
                component: () => import('@/views/home/index.vue')
            }
        ]
    }
] as RouteRecordRaw[]

export default routes