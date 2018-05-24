<template>
  <div class="">
    <h6>axios</h6>
    <p>{{msg}}</p>
  </div>
</template>

<script>
  import Service from './service'

  export default {
    components: {},
    props: [],
    data() {
      return {
        msg: ''
      }
    },
    methods: {},
    computed: {},
    mounted() {
      let params = {
        a: 1,
        b: 2
      };
      Service.get(params).then((data) => {
        // console.log(data)
        this.msg = JSON.stringify(data, 4, null)
      })
    }
  }
</script>

<style lang="less" type="text/less">

</style>
