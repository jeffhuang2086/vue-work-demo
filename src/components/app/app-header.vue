<template>
  <div class="app-header">
    <div class="header-box">
      <span>header</span>
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

  .app-header {
    background-color: @color-header;
    height: 50px;
    line-height: 50px;
    color: #ffffff;
    .header-box {
      width: @width-container;
      height: 50px;
      margin: 0 auto;
      text-align: left;
    }
  }
</style>
