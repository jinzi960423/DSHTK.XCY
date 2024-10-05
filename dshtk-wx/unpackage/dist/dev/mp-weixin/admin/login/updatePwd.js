"use strict";
const common_vendor = require("../../common/vendor.js");
const login = require("../../login.js");
const utils_common = require("../../utils/common.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: "",
      newPwd: "",
      confirmPwd: ""
    };
  },
  methods: {
    handleSubmit() {
      console.log("账号:", this.username);
      console.log("密码:", this.password);
      if (this.username == "") {
        utils_common.commonutils.showToast("请输入账号", "error");
      } else if (this.password == "") {
        utils_common.commonutils.showToast("请输入密码", "error");
      } else if (this.newPwd == "") {
        utils_common.commonutils.showToast("请输入新密码", "error");
      } else if (this.confirmPwd == "") {
        utils_common.commonutils.showToast("请再次输入新密码", "error");
      } else if (this.confirmPwd != this.newPwd) {
        utils_common.commonutils.showToast("再次输入新密码不正确", "error");
      } else {
        common_vendor.index.showLoading({
          title: "正在更新"
        });
        login.loginApi.updatePwd(this.username, this.password, this.newPwd).then((data) => {
          console.log(data);
          common_vendor.index.hideLoading();
          if (data.Success) {
            utils_common.commonutils.showToast("密码修改成功", "success");
            common_vendor.index.$u.route("/admin/home/home");
          } else {
            utils_common.commonutils.showToast("密码修改失败，请稍后重试", "error");
          }
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.username,
    b: common_vendor.o(($event) => $data.username = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: $data.newPwd,
    f: common_vendor.o(($event) => $data.newPwd = $event.detail.value),
    g: $data.confirmPwd,
    h: common_vendor.o(($event) => $data.confirmPwd = $event.detail.value),
    i: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
