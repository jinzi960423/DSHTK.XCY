"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const utils_appStorage = require("../../utils/appStorage.js");
const homeApi = {
  /**
   * 商户核销
   **/
  WriteOff(number, businessId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/WriteOff",
        method: "GET",
        data: {
          Number: number,
          BusinessId: businessId
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
  components: {},
  data() {
    return {
      adminId: "",
      dynamicList: []
    };
  },
  onLoad() {
    var adminId = utils_appStorage.appStorage.getStorage("adminId");
    this.adminId = adminId;
    if (adminId == "" || adminId == void 0) {
      common_vendor.index.$u.route("/admin/login/login");
    }
  },
  methods: {
    WriteList: function() {
      common_vendor.index.$u.route("/admin/Write/WriteList");
    },
    loginOut: function() {
      utils_appStorage.appStorage.setStorage("adminId", "");
      common_vendor.index.$u.route("/admin/login/login");
    },
    // 调用扫一扫功能  
    scanCode: function() {
      var that = this;
      common_vendor.wx$1.scanCode({
        onlyFromCamera: false,
        // 是否只从相机扫码，不允许从相册选择图片  
        scanType: ["qrCode", "barCode"],
        // 可以指定扫码的类型  
        success: function(res) {
          var result = res.result;
          homeApi.WriteOff(result, that.adminId).then((data) => {
            if (data.Success) {
              utils_common.commonutils.showToast("核销成功，券号:" + result, "success");
            } else {
              common_vendor.index.showModal({
                title: "温馨提示",
                content: "核销失败，请重试，券号:" + result,
                showCancel: false,
                success: function(res2) {
                  if (res2.confirm)
                    ;
                }
              });
            }
          });
        },
        fail: function(err) {
          utils_common.commonutils.showToast("取消核销", "none");
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_icons2 + _easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_section2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "scan",
      size: 30,
      color: "#777"
    }),
    b: common_vendor.o((...args) => $options.scanCode && $options.scanCode(...args)),
    c: common_vendor.p({
      type: "cart-filled",
      size: 30,
      color: "#777"
    }),
    d: common_vendor.o((...args) => $options.WriteList && $options.WriteList(...args)),
    e: common_vendor.p({
      type: "gear-filled",
      size: 30,
      color: "#777"
    }),
    f: common_vendor.p({
      column: 3,
      ["show-border"]: false,
      square: false
    }),
    g: common_vendor.p({
      title: "商户管理",
      type: "line",
      padding: true
    }),
    h: common_vendor.p({
      type: "refresh",
      size: 30,
      color: "#777"
    }),
    i: common_vendor.p({
      type: "paperplane-filled",
      size: 30,
      color: "#777"
    }),
    j: common_vendor.o((...args) => $options.loginOut && $options.loginOut(...args)),
    k: common_vendor.p({
      column: 3,
      ["show-border"]: false,
      square: false
    }),
    l: common_vendor.p({
      title: "系统管理",
      type: "line",
      padding: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
