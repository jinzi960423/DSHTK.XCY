"use strict";
const common_vendor = require("../../common/vendor.js");
const admin_business_business = require("./business.js");
const utils_appStorage = require("../../utils/appStorage.js");
const utils_common = require("../../utils/common.js");
function toDateString(data, format) {
  var d = new Date(data);
  var args = {
    "M+": d.getMonth() + 1,
    "d+": d.getDate(),
    "h+": d.getHours(),
    "m+": d.getMinutes(),
    "s+": d.getSeconds(),
    "q+": Math.floor((d.getMonth() + 3) / 3),
    //quarter
    "S": d.getMilliseconds()
  };
  if (/(y+)/.test(format))
    format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var i in args) {
    var n = args[i];
    if (new RegExp("(" + i + ")").test(format))
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
  }
  return format;
}
const _sfc_main = {
  data() {
    return {
      index: 0,
      isAdmin: false,
      CityLimitsList: [{
        "Id": "",
        "CityName": "请选择"
      }],
      businessWeChat: [],
      businessActivity: [],
      businessInfo: {
        Id: "",
        Account: "",
        Password: "",
        Address: "",
        Latitude: "",
        Longitude: "",
        BnsinessName: "",
        BusinessWeChat: "",
        BusinessActivity: "",
        CityId: "",
        State: "Y",
        CreateUid: "",
        IsAdmin: "N",
        IsOnline: "Y"
      }
    };
  },
  watch: {
    "businessWeChat": {
      handler(newValue, oldValue) {
        if (newValue == "") {
          this.businessInfo.BusinessActivity = "";
          console.log(`property1 changed from ${oldValue} to ${newValue}`);
        }
      },
      deep: true
    },
    "businessActivity": {
      handler(newValue, oldValue) {
        if (newValue == "") {
          this.businessInfo.businessActivity = "";
          console.log(`property1 changed from ${oldValue} to ${newValue}`);
        }
      },
      deep: true
    }
  },
  onLoad(options) {
    var Id = options.Id;
    if (Id == void 0) {
      Id = "";
    }
    this.businessInfo.Id = Id;
  },
  mounted() {
    var adminId = utils_appStorage.appStorage.getStorage("adminId");
    var Admin = utils_appStorage.appStorage.getStorage("isAdmin");
    this.isAdmin = Admin == "Y";
    this.businessInfo.CreateUid = adminId;
    if (adminId == "" || adminId == void 0) {
      common_vendor.index.$u.route("/admin/login/login");
    }
    var th = this;
    admin_business_business.businessApi.GetCityLimitsList().then((data) => {
      th.CityLimitsList = th.CityLimitsList.concat(data.Data);
      if (th.businessInfo.Id == "" || th.businessInfo.Id == void 0) {
        common_vendor.index.getLocation({
          type: "wgs84",
          success: function(res) {
            console.log("当前位置的经度longitude：" + res.longitude);
            console.log("当前位置的纬度latitude：" + res.latitude);
            th.businessInfo.Latitude = res.latitude;
            th.businessInfo.Longitude = res.longitude;
          }
        });
      } else {
        utils_common.commonutils.GetBusinessInfoById(th.businessInfo.Id).then((data2) => {
          th.businessInfo = data2.Data;
          th.businessInfo.ExpirationDate = toDateString(data2.Data.ExpirationDate, "yyyy-MM-dd");
          for (var i = 0; i < th.CityLimitsList.length; i++) {
            if (th.CityLimitsList[i].Id == th.businessInfo.CityId) {
              th.index = i;
            }
          }
          th.businessWeChat = [];
          if (th.businessInfo.BusinessWeChat != "") {
            th.businessWeChat.push({
              name: "",
              path: th.businessInfo.BusinessWeChat,
              url: th.businessInfo.BusinessWeChat
            });
          }
          if (th.businessInfo.BusinessActivity != "") {
            th.businessActivity = [];
            th.businessActivity.push({
              name: "",
              path: th.businessInfo.BusinessActivity,
              url: th.businessInfo.BusinessActivity
            });
          }
        });
      }
    });
  },
  methods: {
    bindDateChange: function(e) {
      this.businessInfo.ExpirationDate = e.detail.value;
    },
    switchChange: function(e) {
      console.log("picker发送选择改变，携带值为：" + e.detail.value);
      this.SwitchState = e.detail.value;
      if (e.detail.value) {
        this.businessInfo.IsOnline = "Y";
      } else {
        this.businessInfo.IsOnline = "N";
      }
    },
    businessSave: function() {
      var th = this;
      if (this.businessInfo.BnsinessName == "") {
        utils_common.commonutils.showToast("请输入商户名称", "error");
      } else if (this.businessInfo.CityId == "") {
        utils_common.commonutils.showToast("请选择商户所在城市", "error");
      } else if (this.businessInfo.Address == "") {
        utils_common.commonutils.showToast("请输入入商户地址", "error");
      } else if (this.businessInfo.Account == "") {
        utils_common.commonutils.showToast("请输入入商户账号", "error");
      } else if (this.businessInfo.Password == "") {
        utils_common.commonutils.showToast("请输入入商户密码", "error");
      } else if (this.businessInfo.Longitude == "") {
        utils_common.commonutils.showToast("当前经纬度获取失败", "error");
      } else if (this.businessInfo.BusinessWeChat == "") {
        utils_common.commonutils.showToast("请上传店主微信二维码", "error");
      } else if (this.businessInfo.BusinessActivity == "") {
        utils_common.commonutils.showToast("请上传活动图片", "error");
      } else if (this.businessInfo.WelfareDescriptionOne == "") {
        utils_common.commonutils.showToast("请输入福利描述1", "error");
      } else if (this.businessInfo.WelfareDescriptionTwo == "") {
        utils_common.commonutils.showToast("请输入福利描述2", "error");
      } else if (this.businessInfo.ExpirationDate == "") {
        utils_common.commonutils.showToast("请设置到期时间", "error");
      } else {
        common_vendor.index.showLoading({
          title: "更新中..."
        });
        admin_business_business.businessApi.BusinessSave(this.businessInfo).then((resData) => {
          common_vendor.index.hideLoading();
          console.log(resData);
          if (resData.Success) {
            th.businessInfo = resData.Data;
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
    bindPickerChange: function(e) {
      this.index = e.detail.value;
      console.log(this.CityLimitsList[e.detail.value].Id);
      this.businessInfo.CityId = this.CityLimitsList[e.detail.value].Id;
    },
    businessWeChatSelect(e) {
      var th = this;
      const tempFilePaths = e.tempFilePaths;
      admin_business_business.businessApi.selectImgUploadFile(tempFilePaths).then((data) => {
        var resData = JSON.parse(data);
        th.businessWeChat = [];
        th.businessInfo.BusinessWeChat = resData.filePath;
        th.businessWeChat.push({
          name: "",
          path: resData.filePath,
          url: resData.filePath
        });
        console.log(data);
      });
    },
    businessActivitySelect(e) {
      var th = this;
      const tempFilePaths = e.tempFilePaths;
      admin_business_business.businessApi.selectImgUploadFile(tempFilePaths).then((data) => {
        var resData = JSON.parse(data);
        th.businessInfo.BusinessActivity = resData.filePath;
        th.businessActivity = [];
        th.businessActivity.push({
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
  return common_vendor.e({
    a: common_vendor.t($data.CityLimitsList[$data.index].CityName),
    b: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
    c: $data.index,
    d: $data.CityLimitsList,
    e: $data.businessInfo.BnsinessName,
    f: common_vendor.o(($event) => $data.businessInfo.BnsinessName = $event.detail.value),
    g: $data.businessInfo.Address,
    h: common_vendor.o(($event) => $data.businessInfo.Address = $event.detail.value),
    i: $data.businessInfo.WelfareDescriptionOne,
    j: common_vendor.o(($event) => $data.businessInfo.WelfareDescriptionOne = $event.detail.value),
    k: $data.businessInfo.WelfareDescriptionTwo,
    l: common_vendor.o(($event) => $data.businessInfo.WelfareDescriptionTwo = $event.detail.value),
    m: $data.isAdmin
  }, $data.isAdmin ? {
    n: common_vendor.t($data.businessInfo.ExpirationDate),
    o: $data.businessInfo.ExpirationDate,
    p: common_vendor.o((...args) => $options.bindDateChange && $options.bindDateChange(...args))
  } : {}, {
    q: $data.isAdmin ? "" : "disabled",
    r: $data.businessInfo.Account,
    s: common_vendor.o(($event) => $data.businessInfo.Account = $event.detail.value),
    t: $data.isAdmin
  }, $data.isAdmin ? {
    v: $data.businessInfo.Password,
    w: common_vendor.o(($event) => $data.businessInfo.Password = $event.detail.value)
  } : {}, {
    x: $data.isAdmin
  }, $data.isAdmin ? {
    y: $data.businessInfo.IsOnline == "Y" ? "checked" : "",
    z: common_vendor.o((...args) => $options.switchChange && $options.switchChange(...args))
  } : {}, {
    A: $data.businessInfo.Longitude,
    B: common_vendor.o(($event) => $data.businessInfo.Longitude = $event.detail.value),
    C: $data.businessInfo.Latitude,
    D: common_vendor.o(($event) => $data.businessInfo.Latitude = $event.detail.value),
    E: common_vendor.o($options.businessWeChatSelect),
    F: common_vendor.o($options.success),
    G: common_vendor.o($options.progress),
    H: common_vendor.o(($event) => $data.businessWeChat = $event),
    I: common_vendor.p({
      limit: "1",
      ["auto-upload"]: true,
      fileMediatype: "image",
      mode: "grid",
      delete: "businessWeChatDelete",
      ["source-type"]: _ctx.sourceType,
      modelValue: $data.businessWeChat
    }),
    J: common_vendor.o($options.businessActivitySelect),
    K: common_vendor.o($options.success),
    L: common_vendor.o($options.progress),
    M: common_vendor.o(($event) => $data.businessActivity = $event),
    N: common_vendor.p({
      limit: "1",
      ["auto-upload"]: true,
      fileMediatype: "image",
      mode: "grid",
      ["source-type"]: _ctx.sourceType,
      modelValue: $data.businessActivity
    }),
    O: common_vendor.o((...args) => $options.businessSave && $options.businessSave(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1199a384"]]);
wx.createPage(MiniProgramPage);
