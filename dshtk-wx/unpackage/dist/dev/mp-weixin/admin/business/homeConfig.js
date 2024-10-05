"use strict";
const common_vendor = require("../../common/vendor.js");
const admin_business_business = require("./business.js");
const utils_common = require("../../utils/common.js");
const _sfc_main = {
  data() {
    return {
      Id: "",
      ConfigOne: {},
      ConfigTwo: {},
      ConfigThree: {},
      ConfigOneImg: [],
      ConfigTwoImg: [],
      ConfigThreeImg: [],
      ConfigList: []
    };
  },
  onLoad(options) {
    var Id = options.Id;
    if (Id == void 0) {
      Id = "";
    }
    this.Id = Id;
  },
  mounted() {
    var th = this;
    admin_business_business.businessApi.GetBusinessConfigListById(this.Id).then((data) => {
      th.ConfigOne = data.data[0];
      th.ConfigOneImg = [];
      th.ConfigOneImg.push({
        name: "",
        path: data.data[0].BackgroundImage,
        url: data.data[0].BackgroundImage
      });
      th.ConfigTwo = data.data[1];
      th.ConfigTwoImg = [];
      th.ConfigTwoImg.push({
        name: "",
        path: data.data[1].BackgroundImage,
        url: data.data[1].BackgroundImage
      });
      th.ConfigThree = data.data[2];
      th.ConfigThreeImg = [];
      th.ConfigThreeImg.push({
        name: "",
        path: data.data[2].BackgroundImage,
        url: data.data[2].BackgroundImage
      });
    });
  },
  methods: {
    configOneImgSelect(e) {
      var th = this;
      const tempFilePaths = e.tempFilePaths;
      admin_business_business.businessApi.selectImgUploadFile(tempFilePaths).then((data) => {
        var resData = JSON.parse(data);
        th.ConfigOne.BackgroundImage = resData.filePath;
        th.ConfigOneImg = [];
        th.ConfigOneImg.push({
          name: "",
          path: resData.filePath,
          url: resData.filePath
        });
      });
    },
    configTwoImgSelect(e) {
      var th = this;
      const tempFilePaths = e.tempFilePaths;
      admin_business_business.businessApi.selectImgUploadFile(tempFilePaths).then((data) => {
        var resData = JSON.parse(data);
        th.ConfigTwo.BackgroundImage = resData.filePath;
        th.ConfigTwoImg = [];
        th.ConfigTwoImg.push({
          name: "",
          path: resData.filePath,
          url: resData.filePath
        });
      });
    },
    configThreeImgSelect(e) {
      var th = this;
      const tempFilePaths = e.tempFilePaths;
      admin_business_business.businessApi.selectImgUploadFile(tempFilePaths).then((data) => {
        var resData = JSON.parse(data);
        th.ConfigThree.BackgroundImage = resData.filePath;
        th.ConfigThreeImg = [];
        th.ConfigThreeImg.push({
          name: "",
          path: resData.filePath,
          url: resData.filePath
        });
      });
    },
    progress(e) {
      console(e, "上传中");
    },
    success(e) {
      console.log("上传成功");
    },
    configSave() {
      var th = this;
      if (th.ConfigOne.FunctionName == "" || th.ConfigTwo.FunctionName == "" || th.ConfigThree.FunctionName == "") {
        utils_common.commonutils.showToast("功能名称不能为空", "error");
      } else if (th.ConfigOne.FunctionDescription == "" || th.ConfigTwo.FunctionDescription == "" || th.ConfigThree.FunctionDescription == "") {
        utils_common.commonutils.showToast("功能说明不能为空", "error");
      } else if (th.ConfigOneImg.length == 0 || th.ConfigTwoImg.length == 0 || th.ConfigThreeImg.length == 0) {
        utils_common.commonutils.showToast("背景图片不能为空，请上传", "error");
      } else {
        th.ConfigList = [];
        th.ConfigList.push(th.ConfigOne);
        th.ConfigList.push(th.ConfigTwo);
        th.ConfigList.push(th.ConfigThree);
        console.log(th.ConfigList);
        common_vendor.index.showLoading({
          title: "更新中..."
        });
        admin_business_business.businessApi.ConfigUpdateList(th.ConfigList).then((data) => {
          common_vendor.index.hideLoading();
          if (data.Success) {
            utils_common.commonutils.showToast("更新成功", "success");
            setTimeout(function() {
              common_vendor.index.navigateBack();
            }, 1500);
          } else {
            utils_common.commonutils.showToast("更新失败，请重试", "error");
          }
          console.log(data);
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_file_picker2 + _easycom_uni_section2)();
}
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_file_picker + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.ConfigOne.FunctionName,
    b: common_vendor.o(($event) => $data.ConfigOne.FunctionName = $event.detail.value),
    c: $data.ConfigOne.FunctionDescription,
    d: common_vendor.o(($event) => $data.ConfigOne.FunctionDescription = $event.detail.value),
    e: common_vendor.o($options.configOneImgSelect),
    f: common_vendor.o($options.success),
    g: common_vendor.o($options.progress),
    h: common_vendor.o(($event) => $data.ConfigOneImg = $event),
    i: common_vendor.p({
      limit: "1",
      ["auto-upload"]: true,
      fileMediatype: "image",
      mode: "grid",
      ["source-type"]: _ctx.sourceType,
      modelValue: $data.ConfigOneImg
    }),
    j: common_vendor.p({
      title: "功能一(白吃白喝)",
      type: "line",
      padding: true
    }),
    k: $data.ConfigTwo.FunctionName,
    l: common_vendor.o(($event) => $data.ConfigTwo.FunctionName = $event.detail.value),
    m: $data.ConfigTwo.FunctionDescription,
    n: common_vendor.o(($event) => $data.ConfigTwo.FunctionDescription = $event.detail.value),
    o: common_vendor.o($options.configTwoImgSelect),
    p: common_vendor.o($options.success),
    q: common_vendor.o($options.progress),
    r: common_vendor.o(($event) => $data.ConfigTwoImg = $event),
    s: common_vendor.p({
      limit: "1",
      ["auto-upload"]: true,
      fileMediatype: "image",
      mode: "grid",
      ["source-type"]: _ctx.sourceType,
      modelValue: $data.ConfigTwoImg
    }),
    t: common_vendor.p({
      title: "功能二(霸王餐)",
      type: "line",
      padding: true
    }),
    v: $data.ConfigThree.FunctionName,
    w: common_vendor.o(($event) => $data.ConfigThree.FunctionName = $event.detail.value),
    x: $data.ConfigThree.FunctionDescription,
    y: common_vendor.o(($event) => $data.ConfigThree.FunctionDescription = $event.detail.value),
    z: common_vendor.o($options.configThreeImgSelect),
    A: common_vendor.o($options.success),
    B: common_vendor.o($options.progress),
    C: common_vendor.o(($event) => $data.ConfigThreeImg = $event),
    D: common_vendor.p({
      limit: "1",
      ["auto-upload"]: true,
      fileMediatype: "image",
      mode: "grid",
      ["source-type"]: _ctx.sourceType,
      modelValue: $data.ConfigThreeImg
    }),
    E: common_vendor.o((...args) => $options.configSave && $options.configSave(...args)),
    F: common_vendor.p({
      title: "功能三(小仓库)",
      type: "line",
      padding: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
