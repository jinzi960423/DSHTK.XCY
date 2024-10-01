"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_appStorage = require("../../utils/appStorage.js");
const utils_common = require("../../utils/common.js");
const turntableApi = {
  /**
   * 保存微信用户的的相关信息
   * @param {Object} openid
   * @param {Object} headImg
   * @param {Object} nickName
   */
  saveUserInfo(openid, headImg, nickName) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/SaveUserInfo",
        method: "POST",
        data: {
          OpenId: openid,
          NickName: nickName,
          WxIcon: headImg
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
  },
  //好友助力
  WarehouseLike(warehouseId, openId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/WarehouseLike",
        method: "GET",
        data: {
          WarehouseId: warehouseId,
          OpenId: openId
        },
        success: function(res) {
          resolve(res.data);
        },
        fail: function() {
          reject("网络异常，操作失败");
        }
      });
    });
  },
  /**
   * 绑定用户和商户的关系
   ***/
  BindingBusiness(openId, businessId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/BindingBusiness",
        method: "GET",
        data: {
          OpenId: openId,
          BusinessId: businessId
        },
        success: function(res) {
          resolve(res.data);
        },
        fail: function() {
          reject("网络异常，操作失败");
        }
      });
    });
  },
  /***
   *  保存用户的中奖信息
   **/
  SaveWheelLottery(openId, businessId, prizeId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/WheelLottery",
        method: "GET",
        data: {
          OpenId: openId,
          BusinessId: businessId,
          PrizeId: prizeId
        },
        success: function(res) {
          resolve(res.data);
        },
        fail: function() {
          reject("网络异常，操作失败");
        }
      });
    });
  },
  /**
   * 用户参与摇奖
   **/
  DrawLottery(businessId, openId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/DrawLottery",
        method: "GET",
        data: {
          OpenId: openId,
          BusinessId: businessId
        },
        success: function(res) {
          resolve(res.data);
        },
        fail: function() {
          reject("网络异常，操作失败");
        }
      });
    });
  },
  /**
   * 获取转盘的奖品列表
   **/
  GetPrizeConfigList(businessId) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetDrawLotteryPrizeList",
        method: "GET",
        data: {
          BusinessId: businessId
        },
        success: function(res) {
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
  data() {
    return {
      id: "f290c26b-54a2-443d-8303-d468784acfc4",
      openId: "",
      businessId: "2CCDB239-7F9E-4A4F-A16D-AF873D6964D0",
      businessInfo: {
        BnsinessName: ""
      },
      userInfoDialog: false,
      prizeList: [],
      targetIndex: 0
      //中奖的商品对应的小标
    };
  },
  onLoad(options) {
    this.id = options.id;
    this.businessId = options.businessId;
    this.sourceOpenId = options.openId;
  },
  mounted() {
    if (this.businessId == "") {
      common_vendor.index.showModal({
        title: "温馨提示",
        content: "无效的商户二维码",
        showCancel: false,
        success: function(res) {
          if (res.confirm)
            ;
        }
      });
    }
    utils_common.commonutils.GetOpenId().then((openId) => {
      this.openId = openId;
      utils_appStorage.appStorage.setStorage("businessId", this.businessId);
      turntableApi.BindingBusiness(openId, this.businessId);
    });
    utils_common.commonutils.GetUserInfo().then((data) => {
      if (!data.Success) {
        turntableApi.saveUserInfo(this.openId, "", "点上花");
      }
    });
    turntableApi.GetPrizeConfigList(this.businessId).then((data) => {
      console.log(data);
      if (!data.Success) {
        common_vendor.index.showModal({
          title: "温馨提示",
          content: data.Message,
          showCancel: false,
          success: function(res) {
            if (res.confirm) {
              common_vendor.index.$u.route("/pages/home/home", "");
            }
          }
        });
      }
      this.prizeList = data.Data;
    });
    utils_common.commonutils.GetBusinessInfoById(this.businessId).then((data) => {
      this.businessInfo = data.Data;
    });
  },
  methods: {
    back() {
      common_vendor.index.navigateBack();
    },
    befoterClick(data) {
      turntableApi.WarehouseLike(this.id, this.openId).then((likeData) => {
        console.log(likeData);
        if (this.id != "" && this.id != void 0) {
          utils_common.commonutils.showToast(likeData.Message, "success");
        }
        turntableApi.DrawLottery(this.businessId, this.openId).then((drawData) => {
          console.log(drawData);
          if (drawData.Success) {
            var Id = drawData.Data.Id;
            for (var i = 0; i < this.prizeList.length; i++) {
              if (this.prizeList[i].Id == Id) {
                this.targetIndex = i;
              }
            }
            if (data.type == "start") {
              data.callback && data.callback(this.targetIndex);
            }
          } else {
            if (data.type == "start") {
              this.targetIndex = 5;
              data.callback && data.callback(this.targetIndex);
            }
          }
        }).catch((error) => {
          utils_common.commonutils.showToast(error, "error");
        });
      });
    },
    //转盘结束后
    afterClick(data) {
      if (data.type == "end") {
        data.callback && data.callback();
        console.log(data.content);
        turntableApi.SaveWheelLottery(this.openId, this.businessId, data.content.Id).then((saveres) => {
          common_vendor.index.$u.route("/pages/home/home", data.content);
        });
      }
    },
    handleClose() {
      this.userInfoDialog = false;
    }
  }
};
if (!Array) {
  const _easycom_my_turntable_draw2 = common_vendor.resolveComponent("my-turntable-draw");
  const _easycom_bottom_support_info2 = common_vendor.resolveComponent("bottom-support-info");
  const _easycom_set_avatar_dialog2 = common_vendor.resolveComponent("set-avatar-dialog");
  (_easycom_my_turntable_draw2 + _easycom_bottom_support_info2 + _easycom_set_avatar_dialog2)();
}
const _easycom_my_turntable_draw = () => "../../components/my-turntable-draw/my-turntable-draw.js";
const _easycom_bottom_support_info = () => "../../components/bottom-support-info/bottom-support-info.js";
const _easycom_set_avatar_dialog = () => "../../components/set-avatar-dialog/set-avatar-dialog.js";
if (!Math) {
  (_easycom_my_turntable_draw + _easycom_bottom_support_info + _easycom_set_avatar_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: "overflow:" + (_ctx.show ? "hidden" : "auto"),
    b: common_vendor.t($data.businessInfo.BnsinessName),
    c: common_vendor.sr("raffleWheel", "3f82645e-0"),
    d: common_vendor.o($options.befoterClick),
    e: common_vendor.o($options.afterClick),
    f: common_vendor.p({
      prizeList: $data.prizeList,
      targetIndex: $data.targetIndex
    }),
    g: common_vendor.o($options.handleClose),
    h: common_vendor.p({
      show: $data.userInfoDialog
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3f82645e"]]);
wx.createPage(MiniProgramPage);
