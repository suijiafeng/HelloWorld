import { createApp} from "vue";
import App from "../../package/App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import HelloWorld from "../../package/index.js";
// import HelloWorld from "../../lib/index.umd.js";

const app = createApp(App);
app.use(HelloWorld);
app.use(ElementPlus,{ size: "default" })
app.mount("#app");
console.log('HelloWorld',HelloWorld)