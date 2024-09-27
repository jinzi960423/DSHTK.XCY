"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const utils_appStorage = require("../../utils/appStorage.js");
const _sfc_main = {
  name: "set-avatar-dialog",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      headImg: "",
      nickName: "",
      openid: ""
    };
  },
  mounted() {
    var th = this;
    console.log("页面加载了");
    common_vendor.wx$1.login({
      success(res) {
        console.log(res);
        if (res.code) {
          common_vendor.wx$1.request({
            url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetOpenId",
            data: {
              code: res.code
            },
            success: function(res2) {
              console.log(res2);
              utils_appStorage.appStorage.setStorage("openid", res2.data.Data);
              th.openid = res2.data.Data;
              console.log(res2.data.Data);
            },
            fail: function() {
              return "";
            }
          });
        } else {
          console.log("登录失败！" + res.errMsg);
        }
      }
    });
  },
  methods: {
    close() {
      this.$emit("close");
    },
    blurInput(obj) {
      this.nickName = obj.detail.value;
    },
    goSave() {
      const host = utils_common.commonutils.baseUrl();
      console.log(host);
      if (this.headImg == "") {
        common_vendor.index.showToast({
          title: "请授权您的头像",
          icon: "error",
          duration: 850
        });
      } else if (this.nickName == "") {
        common_vendor.index.showToast({
          title: "请输入您的昵称",
          icon: "error",
          duration: 850
        });
      } else
        ;
    },
    chooseavatar(obj) {
      this.headImg = obj.detail.avatarUrl;
    }
  }
};
if (!Array) {
  const _easycom_u_image2 = common_vendor.resolveComponent("u-image");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_image2 + _easycom_u_popup2)();
}
const _easycom_u_image = () => "../../uni_modules/uview-plus/components/u-image/u-image.js";
const _easycom_u_popup = () => "../../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_image + _easycom_u_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      src: $data.headImg,
      width: "160rpx",
      height: "160rpx",
      shape: "circle"
    }),
    b: common_vendor.o((...args) => $options.chooseavatar && $options.chooseavatar(...args)),
    c: common_vendor.o((...args) => $options.blurInput && $options.blurInput(...args)),
    d: $data.nickName,
    e: common_vendor.o(($event) => $data.nickName = $event.detail.value),
    f: common_vendor.o((...args) => $options.goSave && $options.goSave(...args)),
    g: common_vendor.o($options.close),
    h: common_vendor.p({
      show: $props.show,
      mode: "center",
      round: "20rpx",
      ["safe-area-inset-bottom"]: false,
      closeable: true,
      closeOnClickOverlay: false
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-85fe64fe"]]);
wx.createComponent(Component);
