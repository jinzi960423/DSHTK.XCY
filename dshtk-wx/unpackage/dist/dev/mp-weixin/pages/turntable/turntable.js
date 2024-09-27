"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      prizeList: [
        {
          name: "可乐一瓶"
        },
        {
          name: "鸡腿一个"
        },
        {
          name: "矿泉水一瓶"
        },
        {
          name: "谢谢参与"
        },
        {
          name: "鸡腿一个"
        },
        {
          name: "雪碧一瓶"
        },
        {
          name: "鸡腿一个"
        },
        {
          name: "谢谢参与"
        }
      ],
      targetIndex: 0,
      //中奖的商品对应的小标
      show: true
    };
  },
  onLoad() {
  },
  methods: {
    back() {
      common_vendor.index.navigateBack();
    },
    befoterClick(data) {
      if (data.type == "start") {
        this.targetIndex = 3;
        data.callback && data.callback(this.targetIndex);
      }
    },
    afterClick(data) {
      if (data.type == "end") {
        data.callback && data.callback();
        common_vendor.index.$u.route("/pages/home/home", data.content);
      }
    }
  }
};
if (!Array) {
  const _easycom_my_turntable_draw2 = common_vendor.resolveComponent("my-turntable-draw");
  const _easycom_bottom_support_info2 = common_vendor.resolveComponent("bottom-support-info");
  const _easycom_set_avatar_dialog2 = common_vendor.resolveComponent("set-avatar-dialog");
  (_easycom_my_turntable_draw2 + _easycom_bottom_support_info2 + _easycom_set_avatar_dialog2)();
}
const _easycom_my_turntable_draw = () => "../../components/my-turntable-draw/my-turntable-draw.js";
const _easycom_bottom_support_info = () => "../../components/bottom-support-info/bottom-support-info.js";
const _easycom_set_avatar_dialog = () => "../../components/set-avatar-dialog/set-avatar-dialog.js";
if (!Math) {
  (_easycom_my_turntable_draw + _easycom_bottom_support_info + _easycom_set_avatar_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: "overflow:" + ($data.show ? "hidden" : "auto"),
    b: common_vendor.sr("raffleWheel", "3f82645e-0"),
    c: common_vendor.o($options.befoterClick),
    d: common_vendor.o($options.afterClick),
    e: common_vendor.p({
      prizeList: $data.prizeList,
      targetIndex: $data.targetIndex
    }),
    f: common_vendor.o(($event) => $data.show = false),
    g: common_vendor.p({
      show: $data.show
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f82645e"]]);
wx.createPage(MiniProgramPage);
