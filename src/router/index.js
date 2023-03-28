import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Index.vue'
import About from '../views/About.vue'
import Register from '../views/Register.vue' 
import Login from '../views/Login.vue' 
import Contact from '../views/Contact.vue' 
import AddStudent from '../views/admin/AddStudent.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta : {
      title : 'Home'
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta : {
      title : 'About'
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta : {
      title : 'Register',
      cannotBeAccesedAfterLogin : true
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta : {
      title : 'Login',
      cannotBeAccesedAfterLogin : true
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta : {
      title : 'Contact'
    },
  },
  {
    path: '/admin/add-student',
    name: 'AddStudent',
    component: AddStudent,
    meta : {
      title : 'Add-Student',
      requiresLogin : true
    },
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  document.title = `${to.meta.title} | Early Impressions`
  next()
})

export default router
