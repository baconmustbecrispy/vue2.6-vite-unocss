<template>
  <div id="app" class="flex flex-col items-center">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" class="text-center" />
    <div class="text-5xl fw100 animate-bounce-alt animate-count-infinite animate-duration-1s"> unocss </div>
    <div class="flex justify-center items-center my-2 gap-2">
      <div class="text-red">RED</div>
      <div class="text-green font-900">GREEN</div>
      <div class="text-blue font-900">BLUE</div>
      <div class="i-mdi-alarm text-orange-400"></div>
    </div>
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <br />
    <el-row>
      <el-button :plain="true" @click="open1">Element UI</el-button>
    </el-row>
    {{ dData ?? 'dData is undefined' }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      dData: undefined,
    };
  },
  methods: {
    open1() {
      this.$message({
        type: 'success',
        message: 'test message',
      });
    },
  },
};
</script>
