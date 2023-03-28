import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(store).use(VueSweetalert2).use(router).mount('#app')


router.beforeEach((to, from, next) =>{
    if(to.matched.some(record => record.meta.cannotBeAccesedAfterLogin)){
        if(localStorage.getItem('token')){
            next({name:'Home'})
        }else{
            next()
        }
    }else{
        next()
    }
})

router.beforeEach((to, from, next) =>{
    if(to.matched.some(record => record.meta.requiresLogin)){
        if(!localStorage.getItem('token')){
            next({name:'Login'})
        }else{
            next()
        }
    }else{
        next()
    }
})