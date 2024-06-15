/**
 * @file: index
 * @description:
 * @date: 2024/6/16
 * @author: wanggaoxian
 */
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/home/index.vue'),
            meta: {title: '登录', icon: 'Guide',}
        }, {
            path: '/login',
            name: 'login',
            component: () => import('@/views/common/login.vue'),
            meta: {title: '登录', icon: 'Guide',}
        }, {
            path: '/system',
            name: 'system',
            component: () => import('@/views/system/index.vue'),
            meta: {title: '登录', icon: 'Guide',}
        },
    ]
})
export default router