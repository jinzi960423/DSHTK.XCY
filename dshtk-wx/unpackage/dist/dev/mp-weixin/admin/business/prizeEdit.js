"use strict";
const common_vendor = require("../../common/vendor.js");
const admin_business_business = require("./business.js");
const utils_appStorage = require("../../utils/appStorage.js");
const utils_common = require("../../utils/common.js");
const _sfc_main = {
  data() {
    return {
      Id: "",
      BusinessId: "",
      ImgUrl: [],
      SwitchState: true,
      PrizeInfo: {
        ImgUrl: "",
        IssuedCount: 0,
        Name: "",
        PrizeDescription: "",
        PrizeLike: "",
        Remark: "",
        Sort: "",
        State: "Y",
        Turntable: "",
        WinningRate: 0,
        BusinessId: "",
        Total: ""
      }
    };
  },
  onLoad(options) {
    var Id = options.Id;
    if (Id == void 0) {
      Id = "";
    }
    this.Id = Id;
    var BusinessId = options.BusinessId;
    if (BusinessId == void 0) {
      Id = "";
    }
    this.BusinessId = BusinessId;
  },
  mounted() {
    var adminId = utils_appStorage.appStorage.getStorage("adminId");
    this.PrizeInfo.BusinessId = this.BusinessId;
    if (adminId == "" || adminId == void 0) {
      common_vendor.index.$u.route("/admin/login/login");
    }
    var th = this;
    if (this.Id != "") {
      admin_business_business.businessApi.GetPrizeEntity(this.Id).then((data) => {
        th.PrizeInfo = data.Data;
        console.log(th.PrizeInfo);
        th.ImgUrl = [];
        if (th.PrizeInfo.ImgUrl != "") {
          th.ImgUrl.push({
            name: "",
            path: th.PrizeInfo.ImgUrl,
            url: th.PrizeInfo.ImgUrl
          });
        }
      });
    }
  },
  methods: {
    businessSave: function() {
      if (this.PrizeInfo.Name == "") {
        utils_common.commonutils.showToast("请输入奖品名称", "error");
      } else if (this.PrizeInfo.Remark == "") {
        utils_common.commonutils.showToast("请选择奖品说明", "error");
      } else if (this.PrizeInfo.Total == "") {
        utils_common.commonutils.showToast("请选输入库存总数", "error");
      } else if (this.PrizeInfo.PrizeLike == "") {
        utils_common.commonutils.showToast("请选输入集赞数量", "error");
      } else if (this.PrizeInfo.Sort == "") {
        utils_common.commonutils.showToast("请选输入排序", "error");
      } else if (this.ImgUrl.length == 0) {
        utils_common.commonutils.showToast("请上传奖品图片", "error");
      } else {
        common_vendor.index.showLoading({
          title: "更新中..."
        });
        admin_business_business.businessApi.PrizeSave(this.PrizeInfo).then((resData) => {
          common_vendor.index.hideLoading();
          console.log(resData);
          if (resData.Success) {
            utils_common.commonutils.showToast("保存成功", "success");
            setTimeout(function() {
              common_vendor.index.navigateBack();
            }, 1500);
          } else {
            utils_common.commonutils.showToast("保存失败", "error");
          }
        });
      }
    },
    switchChange: function(e) {
      console.log("picker发送选择改变，携带值为：" + e.detail.value);
      this.SwitchState = e.detail.value;
      if (e.detail.value) {
        this.PrizeInfo.Turntable = "Y";
      } else {
        this.PrizeInfo.Turntable = "N";
      }
    },
    imgUrlSelect(e) {
      var th = this;
      const tempFilePaths = e.tempFilePaths;
      admin_business_business.businessApi.selectImgUploadFile(tempFilePaths).then((data) => {
        var resData = JSON.parse(data);
        th.ImgUrl = [];
        th.PrizeInfo.ImgUrl = resData.filePath;
        th.ImgUrl.push({
          name: "",
          path: resData.filePath,
          url: resData.filePath
        });
        console.log(data);
      });
    },
    progress(e) {
      console(e, "上传中");
    },
    success(e) {
      console.log("上传成功");
    }
  }
};
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  _easycom_uni_file_picker2();
}
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  _easycom_uni_file_picker();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.PrizeInfo.Name,
    b: common_vendor.o(($event) => $data.PrizeInfo.Name = $event.detail.value),
    c: $data.PrizeInfo.Remark,
    d: common_vendor.o(($event) => $data.PrizeInfo.Remark = $event.detail.value),
    e: $data.PrizeInfo.Turntable == "Y" ? "checked" : "",
    f: common_vendor.o((...args) => $options.switchChange && $options.switchChange(...args)),
    g: $data.PrizeInfo.Total,
    h: common_vendor.o(($event) => $data.PrizeInfo.Total = $event.detail.value),
    i: $data.PrizeInfo.PrizeLike,
    j: common_vendor.o(($event) => $data.PrizeInfo.PrizeLike = $event.detail.value),
    k: $data.PrizeInfo.Sort,
    l: common_vendor.o(($event) => $data.PrizeInfo.Sort = $event.detail.value),
    m: common_vendor.o($options.imgUrlSelect),
    n: common_vendor.o($options.success),
    o: common_vendor.o($options.progress),
    p: common_vendor.o(($event) => $data.ImgUrl = $event),
    q: common_vendor.p({
      limit: "1",
      ["auto-upload"]: true,
      fileMediatype: "image",
      mode: "grid",
      ["source-type"]: _ctx.sourceType,
      modelValue: $data.ImgUrl
    }),
    r: common_vendor.o((...args) => $options.businessSave && $options.businessSave(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5852fc39"]]);
wx.createPage(MiniProgramPage);
