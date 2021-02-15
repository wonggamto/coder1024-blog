export default {
  methods: {
    onclick1() {
      this.$message.error('错误提示')
    },
    onclick2() {
      this.$alert('这是一个弹窗', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          })
        }
      })
    }
  }
}
