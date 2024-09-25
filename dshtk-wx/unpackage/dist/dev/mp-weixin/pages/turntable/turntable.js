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
      targetIndex: 0
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
  (_easycom_my_turntable_draw2 + _easycom_bottom_support_info2)();
}
const _easycom_my_turntable_draw = () => "../../components/my-turntable-draw/my-turntable-draw.js";
const _easycom_bottom_support_info = () => "../../components/bottom-support-info/bottom-support-info.js";
if (!Math) {
  (_easycom_my_turntable_draw + _easycom_bottom_support_info)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr("raffleWheel", "3f82645e-0"),
    b: common_vendor.o($options.befoterClick),
    c: common_vendor.o($options.afterClick),
    d: common_vendor.p({
      prizeList: $data.prizeList,
      targetIndex: $data.targetIndex
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f82645e"]]);
wx.createPage(MiniProgramPage);
