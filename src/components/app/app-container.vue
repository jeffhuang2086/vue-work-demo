<template>
  <div class="app-container">
    <div class="left">
      <slot name="sidebar"></slot>
    </div>
    <div class="right">
      <slot name="content"></slot>
    </div>
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
  @import "~@/assets/style/variable.less";

  .app-container {
    width: @width-container;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    flex: 1;
    .left {
      flex: 0 0 190px;
      background-color: #ffffff;
    }
    .right {
      flex: 0 0 1060px;
      background-color: #ffffff;
      word-break: break-all;
    }
  }
</style>
