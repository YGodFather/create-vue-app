import { createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('template-vue/src/views/home/home.vue')
    }
]



const router = createRouter({
    history: createWebHistory(), // 默认history模式
    routes,
})

export default router
