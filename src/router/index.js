import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Hosts from "../views/Hosts.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/hosts",
    name: "Hosts",
    component: Hosts
  },
  {
    path: "/edit",
    name: "Edit",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Edit.vue")
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
