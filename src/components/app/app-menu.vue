<template>
  <div class="app-menu">
    <el-menu
      default-active="3"
      background-color="#ffffff"
      text-color="#cccccc"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    components: {},
    props: [],
    data() {
      return {}
    },
    methods: {},
    computed: {},
    mounted() {

    }
  }
</script>

<style lang="less" type="text/less">
  .app-menu{
    .el-menu{
      border: none;
    }
  }
</style>
