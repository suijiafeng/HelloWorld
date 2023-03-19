import HelloWorld from "./components/HelloWorld.vue";
const install = function (app) {
  app.component(HelloWorld.name, HelloWorld);
  console.log("install:version", app.version);
};
export { HelloWorld };
export default { install, HelloWorld };
