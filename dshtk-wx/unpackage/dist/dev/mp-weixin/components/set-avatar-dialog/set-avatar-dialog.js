"use strict";
const utils_common = require("../../utils/common.js");
const common_vendor = require("../../common/vendor.js");
const components_setAvatarDialog_set_avatar = require("./set_avatar.js");
require("../../uni_modules/uview-plus/index.js");
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
      openId: ""
    };
  },
  mounted() {
    utils_common.commonutils.GetOpenId().then((id) => {
      console.log("获取到的openid" + id);
      this.openId = id;
    }).catch((error) => {
      console.error(error);
    });
  },
  methods: {
    close() {
      this.$emit("close");
    },
    goSave() {
      var th = this;
      const host = utils_common.commonutils.baseUrl();
      console.log(host);
      console.log(this.openId);
      if (this.headImg == "") {
        utils_common.commonutils.showToast("请授权您的头像", "error");
      } else if (this.nickName == "") {
        utils_common.commonutils.showToast("请输入您的昵称", "error");
      } else {
        components_setAvatarDialog_set_avatar.set_avatar.saveUserInfo(this.openId, this.headImg, this.nickName).then((data) => {
          console.log(data);
          console.log(data.Success);
          if (data.Success) {
            utils_common.commonutils.showToast(data.Message, "success");
            th.close();
          } else {
            utils_common.commonutils.showToast(data.Message, "error");
          }
        }).catch((error) => {
          console.log(error);
          utils_common.commonutils.showToast(error, "error");
        });
      }
    },
    //获取用户昵称
    blurInput(obj) {
      this.nickName = obj.detail.value;
    },
    //获取用户头像
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
