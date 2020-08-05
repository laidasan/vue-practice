import Home from '../views/Home.vue'
import About from '../views/About.vue'
import User from '../views/User.vue'


// 如果是用 import Vue from 'Vue' 這種方式引入 Vue 就必須要加入這段
// Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home , name: 'Home'},
    { 
        path: '/home' , 
        component: Home,
        beforeEnter: (to,from,next) => {
            console.log('home beforeEnter')
            next()
        }
    },
    {
        path: '/home/me' ,
        component: Home,
        beforeEnter: (to,from,next) => {
            console.log('home/me beforeEnter')
            next()
        }
    },
    { path: '/about',component: About },
    { 
        path: '/user' , 
        component: User,
        beforeEnter: (to,from,next) => {
            console.log('route beforeEnter')
            next()
        }
    },
    { path: '/user/:id' , component: User ,beforeEnter: (to,from,next) => { console.log('user/:id beforeEnter'); next()}},
    { path: '/user/:id/post/:post_id' , component: User}
]

const router = new VueRouter({
    routes
})

router.beforeEach((to,from,next) => {
    console.log('router beforeEach')
    next()
})
router.beforeResolve((to,from,next) => {
    console.log('router beforeResolve')
    next()
})
router.afterEach((to,from) => {
    console.log('router afterEach')
})

export default router