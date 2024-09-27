"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "custom-picker-dialog",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    columns: {
      type: Array,
      default: () => []
    },
    currentId: {
      type: [String, Number],
      default: ""
    },
    keyName: {
      type: String,
      default: "name"
    },
    keyId: {
      type: String,
      default: "id"
    }
  },
  computed: {
    defaultIndex() {
      var arr = [];
      if (this.currentId.length > 0 && this.columns.length > 0) {
        let list = this.columns[0];
        let index = list.findIndex((obj) => obj[this.keyId] == this.currentId);
        if (index != -1) {
          arr.push(index);
        }
      }
      return arr;
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    confirm(obj) {
      this.$emit("confirm", obj);
      this.close();
    }
  }
};
if (!Array) {
  const _easycom_u_picker2 = common_vendor.resolveComponent("u-picker");
  _easycom_u_picker2();
}
const _easycom_u_picker = () => "../../uni_modules/uview-plus/components/u-picker/u-picker.js";
if (!Math) {
  _easycom_u_picker();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.close),
    b: common_vendor.o($options.close),
    c: common_vendor.o($options.confirm),
    d: common_vendor.p({
      show: $props.show,
      columns: $props.columns,
      keyName: $props.keyName,
      closeOnClickOverlay: true,
      defaultIndex: $options.defaultIndex
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
