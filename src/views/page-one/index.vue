<template>
  <div class="">
    <h1>this is page one 11111111</h1>
    <el-button type="info" @click="poi">啊啊啊</el-button>
    <v-msg></v-msg>
  </div>
</template>

<script>
  import vMsg from './module/part1/index'
  export default {
    components: {vMsg},
    props: [],
    data() {
      return {}
    },
    methods: {
      poi(){
        // alert(666)
        // this.$store.commit('SET_NAME','-------')
        this.$store.dispatch('setName','6666')
        this.$store.dispatch('setAge','22')
      }
    },
    computed: {},
    mounted() {

    }
  }
</script>

<style lang="less" type="text/less">

</style>
