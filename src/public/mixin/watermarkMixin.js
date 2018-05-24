import watermark from '@/public/utils/watermark';

export default {
  mounted() {
    window.onresize = () => {
      this.watermarkLoad();
    }
  },
  methods: {
    watermarkLoad() {
      let erpId = this.$store.state.name;
      watermark({
        watermark_txt: erpId || '敏感数据，请勿泄露',
        watermark_alpha: 0.10,
        watermark_y: 30,
        watermark_x_space: 90,
        watermark_y_space: 80,
        watermark_color: '#a1a1a1',
        watermark_dom: document.querySelectorAll('#appPage')[0]
      })
    }
  }
}
