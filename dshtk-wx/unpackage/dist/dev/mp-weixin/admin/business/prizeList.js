"use strict";
const common_vendor = require("../../common/vendor.js");
const admin_business_business = require("./business.js");
const utils_common = require("../../utils/common.js");
const _sfc_main = {
  data() {
    return {
      Id: "",
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
  onLoad(options) {
    var Id = options.Id;
    if (Id == void 0) {
      Id = "";
    }
    this.Id = Id;
    this.getList();
  },
  onPullDownRefresh() {
  },
  onReachBottom() {
    this.status = "more";
    this.getList();
  },
  methods: {
    del(Id) {
      var th = this;
      common_vendor.index.showModal({
        title: "温馨提示",
        content: "确认删除当前数据吗?",
        showCancel: true,
        success: function(res) {
          if (res.confirm) {
            admin_business_business.businessApi.DeletePrize(Id).then((data) => {
              utils_common.commonutils.showToast("删除成功", "success");
              th.Page = 1;
              th.listData = [];
              th.reload = false;
              th.getList();
            });
          }
        }
      });
    },
    addPrize() {
      common_vendor.index.$u.route("/admin/business/prizeEdit");
    },
    edit(Id) {
      common_vendor.index.$u.route("/admin/business/prizeEdit?Id=" + Id);
    },
    getList() {
      var th = this;
      if (!this.reload) {
        this.status = "loading";
        admin_business_business.businessApi.GetPrizeConfigList(this.Id, this.Page, this.Limit, "").then((data) => {
          console.log(data);
          this.listData = this.listData.concat(data.Data.data);
          this.Page = this.Page + 1;
          if (data.Data.data.length == 0 || data.Data.data.length < th.Limit) {
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
    a: common_vendor.o($options.addPrize),
    b: common_vendor.p({
      type: "plus-filled",
      size: 60,
      color: "#2979ff"
    }),
    c: common_vendor.f($data.listData, (value, index, i0) => {
      return {
        a: value.ImgUrl,
        b: common_vendor.t(value.Remark),
        c: common_vendor.t(value.Total),
        d: common_vendor.t(value.IssuedCount),
        e: common_vendor.t(value.State == "Y" ? "是" : "否"),
        f: common_vendor.t(value.PrizeLike),
        g: common_vendor.o(($event) => $options.del(value.Id), index),
        h: common_vendor.o(($event) => $options.edit(value.Id), index),
        i: index
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
