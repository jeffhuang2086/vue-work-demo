<template>
  <div class="app-footer">
    this is page one 11111111
  </div>
</template>

<script>
  import pageWatermark from '@/public/mixin/watermarkMixin';
  export default {
    mixins: [pageWatermark],
    data() {
      return {}
    },
    methods: {
      /**
       * 埋点代码添加
       */
      jspts(erp) {
        var jaq = jaq || [];
        jaq.push(['account', 'JA2017_112855']); //站点编号
        jaq.push(['domain', 'b-ufo.jd.com']); //站点域名
        jaq.push(['erp_account', erp]); //可传入ERP帐号，(需调用方传入,若不传,会记录用户的京东账号pin)
        jaq.push(['anchorpvflag', 'true']);
        window.jaq = jaq;
        var ja = document.createElement('script');
        ja.type = 'text/javascript';
        ja.async = true;
        ja.src = '//wl.jd.com/joya.js';
        var s = document.body.append(ja);
      }
    },
    computed: {},
    mounted() {
      this.watermarkLoad();
      // this.jspts('123123123')
    }
  }
</script>

<style lang="less" type="text/less">
  @import "~@/assets/style/variable.less";

  .app-footer {
    height: 40px;
    line-height: 40px;
    background-color: @color-footer;
    color: #000;
    text-align: center;
  }
</style>
