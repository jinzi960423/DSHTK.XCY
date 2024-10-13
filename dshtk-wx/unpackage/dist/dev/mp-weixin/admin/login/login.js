"use strict";
const common_vendor = require("../../common/vendor.js");
const login = require("../../login.js");
const utils_appStorage = require("../../utils/appStorage.js");
const utils_common = require("../../utils/common.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: ""
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
      } else {
        common_vendor.index.showLoading({
          title: "正在登录.."
        });
        login.loginApi.BusinessLogin(this.username, this.password).then((data) => {
          console.log(data);
          common_vendor.index.hideLoading();
          if (data.Success) {
            utils_common.commonutils.showToast("登录成功", "success");
            utils_appStorage.appStorage.setStorage("adminId", data.Data.Id);
            utils_appStorage.appStorage.setStorage("businessName", data.Data.BnsinessName);
            utils_appStorage.appStorage.setStorage("isAdmin", data.Data.IsAdmin ?? "");
            common_vendor.index.$u.route("/admin/home/home");
          } else {
            utils_common.commonutils.showToast(data.Message, "error");
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
    e: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
