import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
let router = new Router({
    mode:   "hash",
    routes: [
        {
            path:      "/",
            name:      "home",
            component: () => import( "@/components/Index")
        },
        {
            path:      "/members/:id",
            name:      "profile",
            component:() => import( "@/components/members/profile")
        },
        {
            path:      "*",
            name:      "error-404",
            component: () => import( "@/components/NotFound")
        }
    ]
});
router.beforeEach((to, from, next) => {
    let remove = "";
    document.getElementsByTagName("body")[0].classList.forEach(value => {
        if (value.includes("page-")) {
            remove = value.toLowerCase();
        }
    });
    if (remove) {
        document.getElementsByTagName("body")[0].classList.remove(remove);
    }
    document.getElementsByTagName("body")[0].classList.add("page-" + to.name.toLowerCase());
    next();
});
export default router;