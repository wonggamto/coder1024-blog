import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index/Index.vue'
import Login from '@/views/Login/Login.vue'
import Register from '@/views/Register/Register.vue'
import User from '@/views/User/User.vue'
import Edit from '@/views/Edit/Edit.vue'
import My from '@/views/My/My.vue'
import Create from '@/views/Create/Create.vue'
import Detail from '@/views/Detail/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/edit',
    component: Edit
  },
  {
    path: '/create',
    component: Create
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/detail',
    component: Detail
  },
]

const router = new VueRouter({
  routes
})

export default router
