// rutas
import { createRouter, createWebHistory } from 'vue-router'
import ProjectsPage from '../views/ProjectsPage.vue'
import HomePage from '../views/HomePage.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router