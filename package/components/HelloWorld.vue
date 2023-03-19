<template>
  <div class="demo-autocomplete">
    <el-card style="width: 720px">
      <div class="sub-title my-2 text-sm text-gray-600">
        <h1>你好，世界</h1>
        <h2>hello，word</h2>
        <h3>{{ date }}</h3>
      </div>
      <el-form
        ref="form"
        :model="form"
        label-width="120px"
      >
        <el-form-item label="Activity name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Activity zone">
          <div>
            <el-select
              v-model="form.region"
              placeholder="please select your zone"
            >
              <el-option label="Zone one" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
            <el-autocomplete
              v-model="form.state1"
              :fetch-suggestions="querySearch"
              clearable
              class="inline-input w-50"
              placeholder="Please Input"
              @select="handleSelect"
            />
          </div>
        </el-form-item>
        <el-form-item label="Activity time">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="Pick a date"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="Pick a time"
              v-model="form.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="Instant delivery">
          <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <!-- <el-form-item label="Activity type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="Online activities" name="type"></el-checkbox>
            <el-checkbox label="Promotion activities" name="type"></el-checkbox>
            <el-checkbox label="Offline activities" name="type"></el-checkbox>
            <el-checkbox
              label="Simple brand exposure"
              name="type"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item> -->
        <el-form-item label="Resources">
          <el-radio-group v-model="form.resource">
            <el-radio label="Sponsor"></el-radio>
            <el-radio label="Venue"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <div style="width: 100%; text-align: right">
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </div>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";

const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [''],
  resource: "",
  desc: "",
  state1:''
});

const date = ref('loading');
const onSubmit = () => {
  console.log("submit!");
};
onMounted(() => {
  setInterval(() => {
    const d = new Date();
    date.value = d;
  }, 1000);
});
const handleSelect = (item) => {
  console.log(item);
};
const querySearch = (item) => {
  console.log(item);
};
</script>

<script>
export default {
  name: "HelloWorld",
};
</script>
<style>
.demo-autocomplete {
  display: flex;
  justify-content: center;
}
</style>
