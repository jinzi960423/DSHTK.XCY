"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_common = require("../../utils/common.js");
const writeApi = {
  /**
   * 商户核销
   **/
  GetPrizeListByBusinessId(businessId, page, limit) {
    return new Promise((resolve, reject) => {
      common_vendor.wx$1.request({
        url: utils_common.commonutils.baseUrl() + "api/WeChatProgram/GetPrizeListByBusinessId",
        method: "GET",
        data: {
          BusinessId: businessId,
          Page: page,
          Limit: limit
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
exports.writeApi = writeApi;
