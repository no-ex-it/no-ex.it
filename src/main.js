import Vue from "vue";
import App from "./App";
import router from "./router";
import "./assets/main.scss";
import "@fortawesome/fontawesome-free/js/all";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@mdi/font/scss/materialdesignicons.scss";

require("vue2-animate/dist/vue2-animate.min.css");
import Axios from "axios";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import vueTyper from "vue-typer";
import VueLazyload from "vue-lazyload";


Vue.use(VueLazyload);
Vue.use(Buefy);
Vue.use(vueTyper);
window.axios = Axios;
Vue.config.productionTip = false;
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
