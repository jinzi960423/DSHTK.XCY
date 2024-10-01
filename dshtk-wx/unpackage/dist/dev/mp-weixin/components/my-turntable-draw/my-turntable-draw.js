"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    // 奖品列表
    prizeList: {
      type: Array,
      // 必须是偶数 且大于等于4
      validator: function(value) {
        return value.length % 2 === 0;
      },
      required: true
    },
    // 奖品区块对应背景颜色
    colors: {
      type: Array,
      default: () => [
        "#FFF",
        "#FFEA97"
      ],
      // 必须是偶数且仅为 2 个颜色相互交替
      validator: function(value) {
        return value.length === 2;
      }
    },
    // 旋转动画时间 单位s
    duration: {
      type: Number,
      default: 8
    },
    // 旋转的圈数
    ringCount: {
      type: Number,
      default: 8
    },
    // 奖品名称所对应的 key 值
    strKey: {
      type: String,
      default: String
    },
    // 中奖单位
    targetIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    prizeList: {
      immediate: true,
      deep: true,
      handler(val) {
        this.color1 = this.colors[0];
        this.color2 = this.colors[1];
        this.setView();
      }
    }
  },
  data() {
    return {
      isClick: true,
      // 当前是否可点击
      isShow: true,
      // 是否初始化
      skew: 0,
      // 偏移角度
      degs: 0,
      // 旋转角度
      color1: "#FFF",
      color2: "#FFF",
      textWidth: "50%",
      rotates: 0,
      // box旋转角度
      isRoteIndex: 0
      // 已经选中的key
    };
  },
  methods: {
    // 计算当前每个deg
    setView() {
      let length = this.prizeList.length;
      this.textWidth = 180 / length + "%";
      let _degs = 360 / length;
      if (length < 4)
        ;
      else {
        this.degs = _degs;
        this.skew = _degs - 90;
      }
    },
    // 点击抽奖
    handleAction() {
      if (!this.isClick) {
        return false;
      }
      this.isClick = false;
      this.$emit("befoterClick", {
        type: "start",
        callback: this.rotoreAction
      });
    },
    rotoreAction(index) {
      let _rotates = 0;
      if (this.isShow) {
        let _len = this.prizeList.length - 1;
        _rotates = (_len - index) * this.degs + 360 * this.ringCount;
        this.isShow = false;
        this.rotates += _rotates + this.degs / 2;
      } else {
        _rotates = -(index - this.isRoteIndex) * this.degs + 360 * this.ringCount;
        this.rotates += _rotates;
      }
      this.isRoteIndex = index;
      this.setTimeOut();
    },
    setTimeOut() {
      setTimeout(() => {
        console.log("转动结束");
        this.$emit("afterClick", {
          type: "end",
          content: this.prizeList[this.targetIndex],
          callback: this.endAction
        });
        this.isClick = true;
      }, this.duration * 1e3 + 100);
    },
    endAction() {
      console.log("本次选中的：" + this.prizeList[this.targetIndex].name);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.prizeList, (item, index, i0) => {
      return {
        a: common_vendor.s("transform: rotate(" + $data.degs * index + "deg) skewY(" + $data.skew + "deg);background: " + (index % 2 > 0 ? $data.color1 : $data.color2) + ";"),
        b: common_vendor.t(item.Remark),
        c: common_vendor.s("transform: translateX(-50%) rotate(" + ($data.degs * index + $data.degs / 2) + "deg);width: " + $data.textWidth + ";"),
        d: index
      };
    }),
    b: common_vendor.s("transform: rotate(" + $data.rotates + "deg);transition-duration: " + $props.duration + "s;"),
    c: common_vendor.o((...args) => $options.handleAction && $options.handleAction(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-33b0ffec"]]);
wx.createComponent(Component);
