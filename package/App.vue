<template>
  <div id="app">
    <div>
      <div style="text-align: center;">
        <img alt="Vue logo" src="./assets/logo.png" :key="1" />
      </div>
      <HelloWorld :key="2" />
      <div :key="3" style="margin-top: 15px;text-align: center;">version :{{ version }}</div>
    </div>
  </div>
</template>


<script>
import { defineComponent, version, isVue2, isVue3 } from "vue-demi";
export default defineComponent({
  data() {
    return {
      version,
      isVue3,
      isVue2,
    };
  },
});
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  color: #2c3e50;
}
</style>
