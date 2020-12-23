import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "layouts" */ "@/layouts/Main.vue"),
      children: [
        {
          path: "/condolencia/sucesso",
          name: "CondolenceRegisterSuccess",
          component: () => import("./views/CondolenceRegisterSuccess.vue"),
        },
        {
          path: "/condolencias",
          name: "Condolences",
          component: () => import("./views/Condolences.vue"),
        },
        {
          path: "/condolencia/criar",
          name: "CondolenceRegister",
          component: () => import("./views/CondolenceRegister.vue"),
        },
        {
          path: "/depoimentos",
          name: "Tributes",
          component: () => import("./views/Tributes.vue"),
        },
        {
          path: "/depoimento/criar",
          name: "TributeRegister",
          component: () => import("./views/TributeRegister.vue"),
        },
      ],
    },
    {
      path: "/condolencia/:id",
      name: "Condolence",
      component: () => import("./layouts/Condolence.vue"),
    },
    {
      path: "/depoimento/:id",
      name: "Tribute",
      component: () => import("./layouts/Tribute.vue"),
    },
    {
      path: "/politica-de-privacidade",
      name: "PrivacyPolicy",
      component: () => import("./layouts/PrivacyPolicy.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "pageNotFound",
      component: () => import("./views/PageNotFound.vue"),
    },
  ],
});
