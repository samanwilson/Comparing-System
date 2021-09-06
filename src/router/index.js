import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Compared from "../views/Compared";
import Compare from "../views/Compare";
import Fav from "../views/Fav";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Compared',
    component: Compared
  },
  {
    path:'/Compare',
    component:Compare
  }
,
  {
    path:'/Favorites',
    component: Fav
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
