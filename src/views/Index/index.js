import request from "@/helpers/request.js"
import auth from '@/api/auth.js'
import blog from "@/api/blog"
window.request = request
window.auth = auth
window.blog = blog
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
