import { createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home.vue')
    }
]



const router = createRouter({
    history: createWebHistory(), // 默认history模式
    routes,
})

export default router
