import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', component: () => import( "./components/Home.vue"), name: 'home'},
    {path: '/login', component: () => import( "./components/Login.vue"), name: 'login'},
    {path: '/redirect', component: () => import( "./components/Redirect.vue"), name: 'redirect'},
    {path: "/members/:id/:name", name: "profile", component: () => import( "./components/members/profile.vue")},
    {path: "/profile", name: "change", component: () => import( "./components/members/Change.vue")},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
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
    const name: string | null | undefined = to.name as string | null | undefined;
    document.getElementsByTagName("body")[0].classList.add("page-" + name?.toLowerCase());
    next();
});

export default router