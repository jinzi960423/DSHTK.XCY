"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const uni_modules_uviewPlus_index = require("./uni_modules/uview-plus/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/home/home.js";
  "./pages/activity/activity.js";
  "./pages/forward/forward.js";
  "./pages/friendHelp/friendHelp.js";
  "./pages/mine/mine.js";
  "./pages/redemption/redemption.js";
  "./pages/turntable/turntable.js";
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
