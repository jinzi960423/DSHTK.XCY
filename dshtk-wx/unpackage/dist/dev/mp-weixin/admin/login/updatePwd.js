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
        login.loginApi.updatePwd(this.username, this.password, this.newPwd).then((data) => {
          console.log(data);
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
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  _easycom_uni_easyinput2();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  _easycom_uni_easyinput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.username = $event),
    b: common_vendor.p({
      placeholder: "请输入账号",
      modelValue: $data.username
    }),
    c: common_vendor.o(($event) => $data.password = $event),
    d: common_vendor.p({
      type: "password",
      placeholder: "请输入旧密码",
      modelValue: $data.password
    }),
    e: common_vendor.o(($event) => $data.newPwd = $event),
    f: common_vendor.p({
      type: "password",
      placeholder: "请输入新密码",
      modelValue: $data.newPwd
    }),
    g: common_vendor.o(($event) => $data.confirmPwd = $event),
    h: common_vendor.p({
      type: "password",
      placeholder: "再次输入新密码",
      modelValue: $data.confirmPwd
    }),
    i: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
