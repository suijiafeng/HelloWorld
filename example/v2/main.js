import Vue from "vue";
import App from "../../package/App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import HelloWorld from "../../lib/v2/index.common.js";
import HelloWorld from "../../package/index.js";
Vue.use(ElementUI, { size: "small" });
Vue.use(HelloWorld)
new Vue({
  render: (h) => h(App),
}).$mount("#app");
