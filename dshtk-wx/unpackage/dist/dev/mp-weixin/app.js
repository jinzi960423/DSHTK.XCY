"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const uni_modules_uviewPlus_index = require("./uni_modules/uview-plus/index.js");
if (!Math) {
  "./pages/home/home.js";
  "./admin/home/home.js";
  "./pages/forward/forward.js";
  "./pages/loadingPage/loadingPage.js";
  "./pages/turntable/turntable.js";
  "./admin/business/qrCode.js";
  "./admin/business/prizeEdit.js";
  "./admin/business/prizeList.js";
  "./admin/business/homeConfig.js";
  "./admin/business/list.js";
  "./admin/business/edit.js";
  "./admin/Write/WriteList.js";
  "./pages/index/index.js";
  "./admin/login/login.js";
  "./admin/login/updatePwd.js";
  "./pages/activity/activity.js";
  "./pages/friendHelp/friendHelp.js";
  "./pages/mine/mine.js";
  "./pages/redemption/redemption.js";
  "./pages/free/free.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
common_vendor.index.$zp = {
  config: {
    "default-page-size": 20,
    "auto-clean-list-when-reload": false,
    "hide-no-more-by-limit": 10
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(uni_modules_uviewPlus_index.uviewPlus);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
