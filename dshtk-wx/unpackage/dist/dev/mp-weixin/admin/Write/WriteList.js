"use strict";
const admin_Write_Write = require("./Write.js");
const utils_appStorage = require("../../utils/appStorage.js");
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      adminId: "",
      status: "more",
      listData: [],
      Page: 1,
      Limit: 30,
      reload: false,
      contentText: {
        contentdown: "上拉加载更多",
        contentrefresh: "加载中",
        contentnomore: "没有更多数据了~~"
      }
    };
  },
  onLoad() {
    this.adminId = utils_appStorage.appStorage.getStorage("adminId");
    this.getList();
  },
  onPullDownRefresh() {
  },
  onReachBottom() {
    this.status = "more";
    this.getList();
  },
  methods: {
    getList() {
      var th = this;
      if (!this.reload) {
        this.status = "loading";
        admin_Write_Write.writeApi.GetPrizeListByBusinessId(this.adminId, this.Page, this.Limit).then((data) => {
          console.log(data);
          this.listData = this.listData.concat(data.Data);
          this.Page = this.Page + 1;
          if (data.Data.length == 0 || data.Data.length < th.Limit) {
            this.status = "nomore";
            this.reload = true;
          }
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.listData, (value, index, i0) => {
      return {
        a: value.ImgUrl,
        b: common_vendor.t(value.Remark),
        c: common_vendor.t(value.WriteTime),
        d: common_vendor.t(value.Number),
        e: common_vendor.t(value.State),
        f: index
      };
    }),
    b: common_vendor.p({
      status: $data.status,
      ["icon-size"]: 16,
      ["content-text"]: $data.contentText
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
