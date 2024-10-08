"use strict";
const common_vendor = require("../../common/vendor.js");
const admin_business_business = require("./business.js");
const utils_appStorage = require("../../utils/appStorage.js");
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
  mounted() {
  },
  onPullDownRefresh() {
  },
  onReachBottom() {
    this.status = "more";
    this.getList();
  },
  methods: {
    addBusiness() {
      common_vendor.index.$u.route("/admin/business/edit");
    },
    prizeList(Id) {
      common_vendor.index.$u.route("/admin/business/prizeList?Id=" + Id);
    },
    homeConfig(Id) {
      common_vendor.index.$u.route("/admin/business/homeConfig?Id=" + Id);
    },
    edit(Id) {
      common_vendor.index.$u.route("/admin/business/edit?Id=" + Id);
    },
    getList() {
      var th = this;
      if (!this.reload) {
        this.status = "loading";
        admin_business_business.businessApi.GetBusinessListByUid(this.adminId, this.Page, this.Limit).then((data) => {
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
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_icons2 + _easycom_uni_load_more2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_load_more)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.addBusiness),
    b: common_vendor.p({
      type: "plus-filled",
      size: 60,
      color: "#2979ff"
    }),
    c: common_vendor.f($data.listData, (value, index, i0) => {
      return {
        a: value.BusinessActivity,
        b: common_vendor.t(value.BnsinessName),
        c: common_vendor.t(value.Address),
        d: common_vendor.o(($event) => $options.homeConfig(value.Id), index),
        e: common_vendor.o(($event) => $options.prizeList(value.Id), index),
        f: common_vendor.o(($event) => $options.edit(value.Id), index),
        g: index
      };
    }),
    d: common_vendor.p({
      status: $data.status,
      ["icon-size"]: 16,
      ["content-text"]: $data.contentText
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
