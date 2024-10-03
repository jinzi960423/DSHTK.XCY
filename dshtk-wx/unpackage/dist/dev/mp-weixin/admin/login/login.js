"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const utils_appStorage = require("../../utils/appStorage.js");
const loginApi = {
  /**
   * 商户登录
   **/
  BusinessLogin(account, password) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/BusinessLogin",
        method: "GET",
        data: {
          Account: account,
          Password: password
        },
        success: function(res) {
          console.log(res.data);
          resolve(res.data);
        },
        fail: function() {
          reject("网络异常，操作失败");
        }
      });
    });
  }
};
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
        loginApi.BusinessLogin(this.username, this.password).then((data) => {
          console.log(data);
          if (data.Success) {
            utils_common.commonutils.showToast("登录成功", "success");
            utils_appStorage.appStorage.setStorage("adminId", data.Data.Id);
            common_vendor.index.$u.route("/admin/home/home");
          } else {
            utils_common.commonutils.showToast(data.Message, "error");
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
      placeholder: "请输入密码",
      modelValue: $data.password
    }),
    e: common_vendor.o((...args) => $options.handleSubmit && $options.handleSubmit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
