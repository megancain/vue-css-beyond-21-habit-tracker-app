import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
    path: '/',
    name: 'Home', 
    component: () => import('../views/Home.vue')
    },
    {
    path: '/habits',
    name: 'Habits', 
    component: () => import('../views/Habits.vue')
    },
    {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
    },
    {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue') 
    },
    {
        path: '/beyondbot',
        name: 'Beyond Bot',
        component: () => import('../views/ChatBot.vue') 
    }
]
})

export default router