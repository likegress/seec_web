import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/login",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    redirect:"/home/index",
    children: [
      {
        path:"index",
        name:"Index",
        component:()=>import('../views/home/index.vue')
      },
      {
        path: "document",
        name: "document",
        component: () => import("../views/document.vue"),
      },
      {
        path: "lead",
        name: "lead",
        component: () => import("../views/Lead.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});
//路由守卫中不要使用 for 循环
router.beforeEach((to, from, next) => {

  if (to.name === "login") {
    // 登录界面不设权限
    next();
  } else {
    // 非登录界面设置权限
    let token = localStorage.getItem("token");
    if (token) {
      // 有权限
      next();
    } else {
      // 没有权限
      next({ name: "login" });
    }
  }
});
export default router;
