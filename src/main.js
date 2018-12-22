import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faIdCard, faHandHoldingUsd, faFutbol, faTv, faFileAlt, faUsers, faCalendar, faCog, faFileArchive, faChessRook, faBars, faSearch, faSync, faPowerOff, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faIdCard, faHandHoldingUsd, faFutbol, faTv, faFileAlt, faUsers, faCalendar, faCog, faFileArchive, faChessRook, faBars, faSearch, faSync, faPowerOff, faClock);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
