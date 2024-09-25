if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$j = {
    data() {
      return {};
    },
    onLoad() {
      uni.reLaunch({
        url: "/pages/home/home"
      });
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createCommentVNode('   <image class="logo" src="/static/logo.png"></image>\r\n        <view class="text-area">\r\n            <text class="title">{{title}}</text>\r\n        </view> ')
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__file", "/Users/lishifei/Desktop/shaxian-wx/pages/index/index.vue"]]);
  const icons = {
    "uicon-level": "",
    "uicon-column-line": "",
    "uicon-checkbox-mark": "",
    "uicon-folder": "",
    "uicon-movie": "",
    "uicon-star-fill": "",
    "uicon-star": "",
    "uicon-phone-fill": "",
    "uicon-phone": "",
    "uicon-apple-fill": "",
    "uicon-chrome-circle-fill": "",
    "uicon-backspace": "",
    "uicon-attach": "",
    "uicon-cut": "",
    "uicon-empty-car": "",
    "uicon-empty-coupon": "",
    "uicon-empty-address": "",
    "uicon-empty-favor": "",
    "uicon-empty-permission": "",
    "uicon-empty-news": "",
    "uicon-empty-search": "",
    "uicon-github-circle-fill": "",
    "uicon-rmb": "",
    "uicon-person-delete-fill": "",
    "uicon-reload": "",
    "uicon-order": "",
    "uicon-server-man": "",
    "uicon-search": "",
    "uicon-fingerprint": "",
    "uicon-more-dot-fill": "",
    "uicon-scan": "",
    "uicon-share-square": "",
    "uicon-map": "",
    "uicon-map-fill": "",
    "uicon-tags": "",
    "uicon-tags-fill": "",
    "uicon-bookmark-fill": "",
    "uicon-bookmark": "",
    "uicon-eye": "",
    "uicon-eye-fill": "",
    "uicon-mic": "",
    "uicon-mic-off": "",
    "uicon-calendar": "",
    "uicon-calendar-fill": "",
    "uicon-trash": "",
    "uicon-trash-fill": "",
    "uicon-play-left": "",
    "uicon-play-right": "",
    "uicon-minus": "",
    "uicon-plus": "",
    "uicon-info": "",
    "uicon-info-circle": "",
    "uicon-info-circle-fill": "",
    "uicon-question": "",
    "uicon-error": "",
    "uicon-close": "",
    "uicon-checkmark": "",
    "uicon-android-circle-fill": "",
    "uicon-android-fill": "",
    "uicon-ie": "",
    "uicon-IE-circle-fill": "",
    "uicon-google": "",
    "uicon-google-circle-fill": "",
    "uicon-setting-fill": "",
    "uicon-setting": "",
    "uicon-minus-square-fill": "",
    "uicon-plus-square-fill": "",
    "uicon-heart": "",
    "uicon-heart-fill": "",
    "uicon-camera": "",
    "uicon-camera-fill": "",
    "uicon-more-circle": "",
    "uicon-more-circle-fill": "",
    "uicon-chat": "",
    "uicon-chat-fill": "",
    "uicon-bag-fill": "",
    "uicon-bag": "",
    "uicon-error-circle-fill": "",
    "uicon-error-circle": "",
    "uicon-close-circle": "",
    "uicon-close-circle-fill": "",
    "uicon-checkmark-circle": "",
    "uicon-checkmark-circle-fill": "",
    "uicon-question-circle-fill": "",
    "uicon-question-circle": "",
    "uicon-share": "",
    "uicon-share-fill": "",
    "uicon-shopping-cart": "",
    "uicon-shopping-cart-fill": "",
    "uicon-bell": "",
    "uicon-bell-fill": "",
    "uicon-list": "",
    "uicon-list-dot": "",
    "uicon-zhihu": "",
    "uicon-zhihu-circle-fill": "",
    "uicon-zhifubao": "",
    "uicon-zhifubao-circle-fill": "",
    "uicon-weixin-circle-fill": "",
    "uicon-weixin-fill": "",
    "uicon-twitter-circle-fill": "",
    "uicon-twitter": "",
    "uicon-taobao-circle-fill": "",
    "uicon-taobao": "",
    "uicon-weibo-circle-fill": "",
    "uicon-weibo": "",
    "uicon-qq-fill": "",
    "uicon-qq-circle-fill": "",
    "uicon-moments-circel-fill": "",
    "uicon-moments": "",
    "uicon-qzone": "",
    "uicon-qzone-circle-fill": "",
    "uicon-baidu-circle-fill": "",
    "uicon-baidu": "",
    "uicon-facebook-circle-fill": "",
    "uicon-facebook": "",
    "uicon-car": "",
    "uicon-car-fill": "",
    "uicon-warning-fill": "",
    "uicon-warning": "",
    "uicon-clock-fill": "",
    "uicon-clock": "",
    "uicon-edit-pen": "",
    "uicon-edit-pen-fill": "",
    "uicon-email": "",
    "uicon-email-fill": "",
    "uicon-minus-circle": "",
    "uicon-minus-circle-fill": "",
    "uicon-plus-circle": "",
    "uicon-plus-circle-fill": "",
    "uicon-file-text": "",
    "uicon-file-text-fill": "",
    "uicon-pushpin": "",
    "uicon-pushpin-fill": "",
    "uicon-grid": "",
    "uicon-grid-fill": "",
    "uicon-play-circle": "",
    "uicon-play-circle-fill": "",
    "uicon-pause-circle-fill": "",
    "uicon-pause": "",
    "uicon-pause-circle": "",
    "uicon-eye-off": "",
    "uicon-eye-off-outline": "",
    "uicon-gift-fill": "",
    "uicon-gift": "",
    "uicon-rmb-circle-fill": "",
    "uicon-rmb-circle": "",
    "uicon-kefu-ermai": "",
    "uicon-server-fill": "",
    "uicon-coupon-fill": "",
    "uicon-coupon": "",
    "uicon-integral": "",
    "uicon-integral-fill": "",
    "uicon-home-fill": "",
    "uicon-home": "",
    "uicon-hourglass-half-fill": "",
    "uicon-hourglass": "",
    "uicon-account": "",
    "uicon-plus-people-fill": "",
    "uicon-minus-people-fill": "",
    "uicon-account-fill": "",
    "uicon-thumb-down-fill": "",
    "uicon-thumb-down": "",
    "uicon-thumb-up": "",
    "uicon-thumb-up-fill": "",
    "uicon-lock-fill": "",
    "uicon-lock-open": "",
    "uicon-lock-opened-fill": "",
    "uicon-lock": "",
    "uicon-red-packet-fill": "",
    "uicon-photo-fill": "",
    "uicon-photo": "",
    "uicon-volume-off-fill": "",
    "uicon-volume-off": "",
    "uicon-volume-fill": "",
    "uicon-volume": "",
    "uicon-red-packet": "",
    "uicon-download": "",
    "uicon-arrow-up-fill": "",
    "uicon-arrow-down-fill": "",
    "uicon-play-left-fill": "",
    "uicon-play-right-fill": "",
    "uicon-rewind-left-fill": "",
    "uicon-rewind-right-fill": "",
    "uicon-arrow-downward": "",
    "uicon-arrow-leftward": "",
    "uicon-arrow-rightward": "",
    "uicon-arrow-upward": "",
    "uicon-arrow-down": "",
    "uicon-arrow-right": "",
    "uicon-arrow-left": "",
    "uicon-arrow-up": "",
    "uicon-skip-back-left": "",
    "uicon-skip-forward-right": "",
    "uicon-rewind-right": "",
    "uicon-rewind-left": "",
    "uicon-arrow-right-double": "",
    "uicon-arrow-left-double": "",
    "uicon-wifi-off": "",
    "uicon-wifi": "",
    "uicon-empty-data": "",
    "uicon-empty-history": "",
    "uicon-empty-list": "",
    "uicon-empty-page": "",
    "uicon-empty-order": "",
    "uicon-man": "",
    "uicon-woman": "",
    "uicon-man-add": "",
    "uicon-man-add-fill": "",
    "uicon-man-delete": "",
    "uicon-man-delete-fill": "",
    "uicon-zh": "",
    "uicon-en": ""
  };
  const defineMixin = (options) => {
    return options;
  };
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const version = "3";
  {
    formatAppLog("log", "at uni_modules/uview-plus/libs/config/config.js:5", `
 %c uview-plus V${version} %c https://ijry.github.io/uview-plus/ 

`, "color: #ffffff; background: #3c9cff; padding:5px 0;", "color: #3c9cff;background: #ffffff; padding:5px 0;");
  }
  const config$1 = {
    v: version,
    version,
    // 主题名称
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
    color: {
      "u-primary": "#2979ff",
      "u-warning": "#ff9900",
      "u-success": "#19be6b",
      "u-error": "#fa3534",
      "u-info": "#909399",
      "u-main-color": "#303133",
      "u-content-color": "#606266",
      "u-tips-color": "#909399",
      "u-light-color": "#c0c4cc",
      "up-primary": "#2979ff",
      "up-warning": "#ff9900",
      "up-success": "#19be6b",
      "up-error": "#fa3534",
      "up-info": "#909399",
      "up-main-color": "#303133",
      "up-content-color": "#606266",
      "up-tips-color": "#909399",
      "up-light-color": "#c0c4cc"
    },
    // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
    unit: "px"
  };
  const ActionSheet = {
    // action-sheet组件
    actionSheet: {
      show: false,
      title: "",
      description: "",
      actions: [],
      index: "",
      cancelText: "",
      closeOnClickAction: true,
      safeAreaInsetBottom: true,
      openType: "",
      closeOnClickOverlay: true,
      round: 0,
      wrapMaxHeight: "600px"
    }
  };
  const Album = {
    // album 组件
    album: {
      urls: [],
      keyName: "",
      singleSize: 180,
      multipleSize: 70,
      space: 6,
      singleMode: "scaleToFill",
      multipleMode: "aspectFill",
      maxCount: 9,
      previewFullImage: true,
      rowCount: 3,
      showMore: true,
      autoWrap: false,
      unit: "px"
    }
  };
  const Alert = {
    // alert警告组件
    alert: {
      title: "",
      type: "warning",
      description: "",
      closable: false,
      showIcon: false,
      effect: "light",
      center: false,
      fontSize: 14
    }
  };
  const Avatar = {
    // avatar 组件
    avatar: {
      src: "",
      shape: "circle",
      size: 40,
      mode: "scaleToFill",
      text: "",
      bgColor: "#c0c4cc",
      color: "#ffffff",
      fontSize: 18,
      icon: "",
      mpAvatar: false,
      randomBgColor: false,
      defaultUrl: "",
      colorIndex: "",
      name: ""
    }
  };
  const AvatarGroup = {
    // avatarGroup 组件
    avatarGroup: {
      urls: [],
      maxCount: 5,
      shape: "circle",
      mode: "scaleToFill",
      showMore: true,
      size: 40,
      keyName: "",
      gap: 0.5,
      extraValue: 0
    }
  };
  const Backtop = {
    // backtop组件
    backtop: {
      mode: "circle",
      icon: "arrow-upward",
      text: "",
      duration: 100,
      scrollTop: 0,
      top: 400,
      bottom: 100,
      right: 20,
      zIndex: 9,
      iconStyle: {
        color: "#909399",
        fontSize: "19px"
      }
    }
  };
  const Badge = {
    // 徽标数组件
    badge: {
      isDot: false,
      value: "",
      show: true,
      max: 999,
      type: "error",
      showZero: false,
      bgColor: null,
      color: null,
      shape: "circle",
      numberType: "overflow",
      offset: [],
      inverted: false,
      absolute: false
    }
  };
  const Button = {
    // button组件
    button: {
      hairline: false,
      type: "info",
      size: "normal",
      shape: "square",
      plain: false,
      disabled: false,
      loading: false,
      loadingText: "",
      loadingMode: "spinner",
      loadingSize: 15,
      openType: "",
      formType: "",
      appParameter: "",
      hoverStopPropagation: true,
      lang: "en",
      sessionFrom: "",
      sendMessageTitle: "",
      sendMessagePath: "",
      sendMessageImg: "",
      showMessageCard: false,
      dataName: "",
      throttleTime: 0,
      hoverStartTime: 0,
      hoverStayTime: 200,
      text: "",
      icon: "",
      iconColor: "",
      color: ""
    }
  };
  const Calendar = {
    // calendar 组件
    calendar: {
      title: "日期选择",
      showTitle: true,
      showSubtitle: true,
      mode: "single",
      startText: "开始",
      endText: "结束",
      customList: [],
      color: "#3c9cff",
      minDate: 0,
      maxDate: 0,
      defaultDate: null,
      maxCount: Number.MAX_SAFE_INTEGER,
      // Infinity
      rowHeight: 56,
      formatter: null,
      showLunar: false,
      showMark: true,
      confirmText: "确定",
      confirmDisabledText: "确定",
      show: false,
      closeOnClickOverlay: false,
      readonly: false,
      showConfirm: true,
      maxRange: Number.MAX_SAFE_INTEGER,
      // Infinity
      rangePrompt: "",
      showRangePrompt: true,
      allowSameDay: false,
      round: 0,
      monthNum: 3
    }
  };
  const CarKeyboard = {
    // 车牌号键盘
    carKeyboard: {
      random: false
    }
  };
  const Cell = {
    // cell组件的props
    cell: {
      customClass: "",
      title: "",
      label: "",
      value: "",
      icon: "",
      disabled: false,
      border: true,
      center: false,
      url: "",
      linkType: "navigateTo",
      clickable: false,
      isLink: false,
      required: false,
      arrowDirection: "",
      iconStyle: {},
      rightIconStyle: {},
      rightIcon: "arrow-right",
      titleStyle: {},
      size: "",
      stop: true,
      name: ""
    }
  };
  const CellGroup = {
    // cell-group组件的props
    cellGroup: {
      title: "",
      border: true,
      customStyle: {}
    }
  };
  const Checkbox = {
    // checkbox组件
    checkbox: {
      name: "",
      shape: "",
      size: "",
      checkbox: false,
      disabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      iconColor: "",
      label: "",
      labelSize: "",
      labelColor: "",
      labelDisabled: ""
    }
  };
  const CheckboxGroup = {
    // checkbox-group组件
    checkboxGroup: {
      name: "",
      value: [],
      shape: "square",
      disabled: false,
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      size: 18,
      placement: "row",
      labelSize: 14,
      labelColor: "#303133",
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      iconPlacement: "left",
      borderBottom: false
    }
  };
  const CircleProgress = {
    // circleProgress 组件
    circleProgress: {
      percentage: 30
    }
  };
  const Code = {
    // code 组件
    code: {
      seconds: 60,
      startText: "获取验证码",
      changeText: "X秒重新获取",
      endText: "重新获取",
      keepRunning: false,
      uniqueKey: ""
    }
  };
  const CodeInput = {
    // codeInput 组件
    codeInput: {
      adjustPosition: true,
      maxlength: 6,
      dot: false,
      mode: "box",
      hairline: false,
      space: 10,
      value: "",
      focus: false,
      bold: false,
      color: "#606266",
      fontSize: 18,
      size: 35,
      disabledKeyboard: false,
      borderColor: "#c9cacc",
      disabledDot: true
    }
  };
  const Col = {
    // col 组件
    col: {
      span: 12,
      offset: 0,
      justify: "start",
      align: "stretch",
      textAlign: "left"
    }
  };
  const Collapse = {
    // collapse 组件
    collapse: {
      value: null,
      accordion: false,
      border: true
    }
  };
  const CollapseItem = {
    // collapseItem 组件
    collapseItem: {
      title: "",
      value: "",
      label: "",
      disabled: false,
      isLink: true,
      clickable: true,
      border: true,
      align: "left",
      name: "",
      icon: "",
      duration: 300,
      showRight: true
    }
  };
  const ColumnNotice = {
    // columnNotice 组件
    columnNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80,
      step: false,
      duration: 1500,
      disableTouch: true
    }
  };
  const CountDown = {
    // u-count-down 计时器组件
    countDown: {
      time: 0,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: false
    }
  };
  const CountTo = {
    // countTo 组件
    countTo: {
      startVal: 0,
      endVal: 0,
      duration: 2e3,
      autoplay: true,
      decimals: 0,
      useEasing: true,
      decimal: ".",
      color: "#606266",
      fontSize: 22,
      bold: false,
      separator: ""
    }
  };
  const DatetimePicker = {
    // datetimePicker 组件
    datetimePicker: {
      show: false,
      popupMode: "bottom",
      showToolbar: true,
      value: "",
      title: "",
      mode: "datetime",
      maxDate: new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1).getTime(),
      minDate: new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1).getTime(),
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      filter: null,
      formatter: null,
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      closeOnClickOverlay: false,
      defaultIndex: []
    }
  };
  const Divider = {
    // divider组件
    divider: {
      dashed: false,
      hairline: true,
      dot: false,
      textPosition: "center",
      text: "",
      textSize: 14,
      textColor: "#909399",
      lineColor: "#dcdfe6"
    }
  };
  const Empty = {
    // empty组件
    empty: {
      icon: "",
      text: "",
      textColor: "#c0c4cc",
      textSize: 14,
      iconColor: "#c0c4cc",
      iconSize: 90,
      mode: "data",
      width: 160,
      height: 160,
      show: true,
      marginTop: 0
    }
  };
  const Form = {
    // form 组件
    form: {
      model: {},
      rules: {},
      errorType: "message",
      borderBottom: true,
      labelPosition: "left",
      labelWidth: 45,
      labelAlign: "left",
      labelStyle: {}
    }
  };
  const GormItem = {
    // formItem 组件
    formItem: {
      label: "",
      prop: "",
      rules: [],
      borderBottom: "",
      labelPosition: "",
      labelWidth: "",
      rightIcon: "",
      leftIcon: "",
      required: false,
      leftIconStyle: ""
    }
  };
  const Gap = {
    // gap组件
    gap: {
      bgColor: "transparent",
      height: 20,
      marginTop: 0,
      marginBottom: 0,
      customStyle: {}
    }
  };
  const Grid = {
    // grid组件
    grid: {
      col: 3,
      border: false,
      align: "left"
    }
  };
  const GridItem = {
    // grid-item组件
    gridItem: {
      name: null,
      bgColor: "transparent"
    }
  };
  const {
    color: color$3
  } = config$1;
  const Icon = {
    // icon组件
    icon: {
      name: "",
      color: color$3["u-content-color"],
      size: "16px",
      bold: false,
      index: "",
      hoverClass: "",
      customPrefix: "uicon",
      label: "",
      labelPos: "right",
      labelSize: "15px",
      labelColor: color$3["u-content-color"],
      space: "3px",
      imgMode: "",
      width: "",
      height: "",
      top: 0,
      stop: false
    }
  };
  const Image = {
    // image组件
    image: {
      src: "",
      mode: "aspectFill",
      width: "300",
      height: "225",
      shape: "square",
      radius: 0,
      lazyLoad: true,
      showMenuByLongpress: true,
      loadingIcon: "photo",
      errorIcon: "error-circle",
      showLoading: true,
      showError: true,
      fade: true,
      webp: false,
      duration: 500,
      bgColor: "#f3f4f6"
    }
  };
  const IndexAnchor = {
    // indexAnchor 组件
    indexAnchor: {
      text: "",
      color: "#606266",
      size: 14,
      bgColor: "#dedede",
      height: 32
    }
  };
  const IndexList = {
    // indexList 组件
    indexList: {
      inactiveColor: "#606266",
      activeColor: "#5677fc",
      indexList: [],
      sticky: true,
      customNavHeight: 0,
      safeBottomFix: false
    }
  };
  const Input = {
    // index 组件
    input: {
      value: "",
      type: "text",
      fixed: false,
      disabled: false,
      disabledColor: "#f5f7fa",
      clearable: false,
      password: false,
      maxlength: 140,
      placeholder: null,
      placeholderClass: "input-placeholder",
      placeholderStyle: "color: #c0c4cc",
      showWordLimit: false,
      confirmType: "done",
      confirmHold: false,
      holdKeyboard: false,
      focus: false,
      autoBlur: false,
      disableDefaultPadding: false,
      cursor: -1,
      cursorSpacing: 30,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      inputAlign: "left",
      fontSize: "15px",
      color: "#303133",
      prefixIcon: "",
      prefixIconStyle: "",
      suffixIcon: "",
      suffixIconStyle: "",
      border: "surround",
      readonly: false,
      shape: "square",
      formatter: null
    }
  };
  const Keyboard = {
    // 键盘组件
    keyboard: {
      mode: "number",
      dotDisabled: false,
      tooltip: true,
      showTips: true,
      tips: "",
      showCancel: true,
      showConfirm: true,
      random: false,
      safeAreaInsetBottom: true,
      closeOnClickOverlay: true,
      show: false,
      overlay: true,
      zIndex: 10075,
      cancelText: "取消",
      confirmText: "确定",
      autoChange: false
    }
  };
  const Line = {
    // line组件
    line: {
      color: "#d6d7d9",
      length: "100%",
      direction: "row",
      hairline: true,
      margin: 0,
      dashed: false
    }
  };
  const LineProgress = {
    // lineProgress 组件
    lineProgress: {
      activeColor: "#19be6b",
      inactiveColor: "#ececec",
      percentage: 0,
      showText: true,
      height: 12
    }
  };
  const {
    color: color$2
  } = config$1;
  const Link = {
    // link超链接组件props参数
    link: {
      color: color$2["u-primary"],
      fontSize: 15,
      underLine: false,
      href: "",
      mpTips: "链接已复制，请在浏览器打开",
      lineColor: "",
      text: ""
    }
  };
  const List = {
    // list 组件
    list: {
      showScrollbar: false,
      lowerThreshold: 50,
      upperThreshold: 0,
      scrollTop: 0,
      offsetAccuracy: 10,
      enableFlex: false,
      pagingEnabled: false,
      scrollable: true,
      scrollIntoView: "",
      scrollWithAnimation: false,
      enableBackToTop: false,
      height: 0,
      width: 0,
      preLoadScreen: 1
    }
  };
  const ListItem = {
    // listItem 组件
    listItem: {
      anchor: ""
    }
  };
  const {
    color: color$1
  } = config$1;
  const LoadingIcon = {
    // loading-icon加载中图标组件
    loadingIcon: {
      show: true,
      color: color$1["u-tips-color"],
      textColor: color$1["u-tips-color"],
      vertical: false,
      mode: "spinner",
      size: 24,
      textSize: 15,
      text: "",
      timingFunction: "ease-in-out",
      duration: 1200,
      inactiveColor: ""
    }
  };
  const LoadingPage = {
    // loading-page组件
    loadingPage: {
      loadingText: "正在加载",
      image: "",
      loadingMode: "circle",
      loading: false,
      bgColor: "#ffffff",
      color: "#C8C8C8",
      fontSize: 19,
      iconSize: 28,
      loadingColor: "#C8C8C8",
      zIndex: 10
    }
  };
  const Loadmore = {
    // loadmore 组件
    loadmore: {
      status: "loadmore",
      bgColor: "transparent",
      icon: true,
      fontSize: 14,
      iconSize: 17,
      color: "#606266",
      loadingIcon: "spinner",
      loadmoreText: "加载更多",
      loadingText: "正在加载...",
      nomoreText: "没有更多了",
      isDot: false,
      iconColor: "#b7b7b7",
      marginTop: 10,
      marginBottom: 10,
      height: "auto",
      line: false,
      lineColor: "#E6E8EB",
      dashed: false
    }
  };
  const Modal = {
    // modal 组件
    modal: {
      show: false,
      title: "",
      content: "",
      confirmText: "确认",
      cancelText: "取消",
      showConfirmButton: true,
      showCancelButton: false,
      confirmColor: "#2979ff",
      cancelColor: "#606266",
      buttonReverse: false,
      zoom: true,
      asyncClose: false,
      closeOnClickOverlay: false,
      negativeTop: 0,
      width: "650rpx",
      confirmButtonShape: "",
      contentTextAlign: "left"
    }
  };
  const color = {
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  const Navbar = {
    // navbar 组件
    navbar: {
      safeAreaInsetTop: true,
      placeholder: false,
      fixed: true,
      border: false,
      leftIcon: "arrow-left",
      leftText: "",
      rightText: "",
      rightIcon: "",
      title: "",
      bgColor: "#ffffff",
      titleWidth: "400rpx",
      height: "44px",
      leftIconSize: 20,
      leftIconColor: color.mainColor,
      autoBack: false,
      titleStyle: ""
    }
  };
  const NoNetwork = {
    // noNetwork
    noNetwork: {
      tips: "哎呀，网络信号丢失",
      zIndex: "",
      image: "data:image/png;base64,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"
    }
  };
  const NoticeBar = {
    // noticeBar
    noticeBar: {
      text: [],
      direction: "row",
      step: false,
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      speed: 80,
      fontSize: 14,
      duration: 2e3,
      disableTouch: true,
      url: "",
      linkType: "navigateTo"
    }
  };
  const Notify = {
    // notify组件
    notify: {
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }
  };
  const NumberBox = {
    // 步进器组件
    numberBox: {
      name: "",
      value: 0,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      step: 1,
      integer: false,
      disabled: false,
      disabledInput: false,
      asyncChange: false,
      inputWidth: 35,
      showMinus: true,
      showPlus: true,
      decimalLength: null,
      longPress: true,
      color: "#323233",
      buttonSize: 30,
      bgColor: "#EBECEE",
      cursorSpacing: 100,
      disableMinus: false,
      disablePlus: false,
      iconStyle: ""
    }
  };
  const NumberKeyboard = {
    // 数字键盘
    numberKeyboard: {
      mode: "number",
      dotDisabled: false,
      random: false
    }
  };
  const Overlay = {
    // overlay组件
    overlay: {
      show: false,
      zIndex: 10070,
      duration: 300,
      opacity: 0.5
    }
  };
  const Parse = {
    // parse
    parse: {
      copyLink: true,
      errorImg: "",
      lazyLoad: false,
      loadingImg: "",
      pauseVideo: true,
      previewImg: true,
      setTitle: true,
      showImgMenu: true
    }
  };
  const Picker = {
    // picker
    picker: {
      show: false,
      popupMode: "bottom",
      showToolbar: true,
      title: "",
      columns: [],
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确定",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      keyName: "text",
      closeOnClickOverlay: false,
      defaultIndex: [],
      immediateChange: true
    }
  };
  const Popup = {
    // popup组件
    popup: {
      show: false,
      overlay: true,
      mode: "bottom",
      duration: 300,
      closeable: false,
      overlayStyle: {},
      closeOnClickOverlay: true,
      zIndex: 10075,
      safeAreaInsetBottom: true,
      safeAreaInsetTop: false,
      closeIconPos: "top-right",
      round: 0,
      zoom: true,
      bgColor: "",
      overlayOpacity: 0.5
    }
  };
  const Radio = {
    // radio组件
    radio: {
      name: "",
      shape: "",
      disabled: "",
      labelDisabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      labelSize: "",
      label: "",
      labelColor: "",
      size: "",
      iconColor: "",
      placement: ""
    }
  };
  const RadioGroup = {
    // radio-group组件
    radioGroup: {
      value: "",
      disabled: false,
      shape: "circle",
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      name: "",
      size: 18,
      placement: "row",
      label: "",
      labelColor: "#303133",
      labelSize: 14,
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      borderBottom: false,
      iconPlacement: "left"
    }
  };
  const Rate = {
    // rate组件
    rate: {
      value: 1,
      count: 5,
      disabled: false,
      size: 18,
      inactiveColor: "#b2b2b2",
      activeColor: "#FA3534",
      gutter: 4,
      minCount: 1,
      allowHalf: false,
      activeIcon: "star-fill",
      inactiveIcon: "star",
      touchable: true
    }
  };
  const ReadMore = {
    // readMore
    readMore: {
      showHeight: 400,
      toggle: false,
      closeText: "展开阅读全文",
      openText: "收起",
      color: "#2979ff",
      fontSize: 14,
      textIndent: "2em",
      name: ""
    }
  };
  const Row = {
    // row
    row: {
      gutter: 0,
      justify: "start",
      align: "center"
    }
  };
  const RowNotice = {
    // rowNotice
    rowNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80
    }
  };
  const ScrollList = {
    // scrollList
    scrollList: {
      indicatorWidth: 50,
      indicatorBarWidth: 20,
      indicator: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#3c9cff",
      indicatorStyle: ""
    }
  };
  const Search = {
    // search
    search: {
      shape: "round",
      bgColor: "#f2f2f2",
      placeholder: "请输入关键字",
      clearabled: true,
      focus: false,
      showAction: true,
      actionStyle: {},
      actionText: "搜索",
      inputAlign: "left",
      inputStyle: {},
      disabled: false,
      borderColor: "transparent",
      searchIconColor: "#909399",
      searchIconSize: 22,
      color: "#606266",
      placeholderColor: "#909399",
      searchIcon: "search",
      margin: "0",
      animation: false,
      value: "",
      maxlength: "-1",
      height: 32,
      label: null
    }
  };
  const Section = {
    // u-section组件
    section: {
      title: "",
      subTitle: "更多",
      right: true,
      fontSize: 15,
      bold: true,
      color: "#303133",
      subColor: "#909399",
      showLine: true,
      lineColor: "",
      arrow: true
    }
  };
  const Skeleton = {
    // skeleton
    skeleton: {
      loading: true,
      animate: true,
      rows: 0,
      rowsWidth: "100%",
      rowsHeight: 18,
      title: true,
      titleWidth: "50%",
      titleHeight: 18,
      avatar: false,
      avatarSize: 32,
      avatarShape: "circle"
    }
  };
  const Slider = {
    // slider组件
    slider: {
      value: 0,
      blockSize: 18,
      min: 0,
      max: 100,
      step: 1,
      activeColor: "#2979ff",
      inactiveColor: "#c0c4cc",
      blockColor: "#ffffff",
      showValue: false,
      disabled: false,
      blockStyle: {},
      useNative: false,
      height: "2px"
    }
  };
  const StatusBar = {
    // statusBar
    statusBar: {
      bgColor: "transparent"
    }
  };
  const Steps = {
    // steps组件
    steps: {
      direction: "row",
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#969799",
      activeIcon: "",
      inactiveIcon: "",
      dot: false
    }
  };
  const StepsItem = {
    // steps-item组件
    stepsItem: {
      title: "",
      desc: "",
      iconSize: 17,
      error: false
    }
  };
  const Sticky = {
    // sticky组件
    sticky: {
      offsetTop: 0,
      customNavHeight: 0,
      disabled: false,
      bgColor: "transparent",
      zIndex: "",
      index: ""
    }
  };
  const Subsection = {
    // subsection组件
    subsection: {
      list: [],
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#303133",
      mode: "button",
      fontSize: 12,
      bold: true,
      bgColor: "#eeeeef",
      keyName: "name"
    }
  };
  const SwipeAction = {
    // swipe-action组件
    swipeAction: {
      autoClose: true
    }
  };
  const SwipeActionItem = {
    // swipeActionItem 组件
    swipeActionItem: {
      show: false,
      name: "",
      disabled: false,
      threshold: 20,
      autoClose: true,
      options: [],
      duration: 300
    }
  };
  const Swiper = {
    // swiper 组件
    swiper: {
      list: [],
      indicator: false,
      indicatorActiveColor: "#FFFFFF",
      indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
      indicatorStyle: "",
      indicatorMode: "line",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 3e3,
      duration: 300,
      circular: false,
      previousMargin: 0,
      nextMargin: 0,
      acceleration: false,
      displayMultipleItems: 1,
      easingFunction: "default",
      keyName: "url",
      imgMode: "aspectFill",
      height: 130,
      bgColor: "#f3f4f6",
      radius: 4,
      loading: false,
      showTitle: false
    }
  };
  const SwipterIndicator = {
    // swiperIndicator 组件
    swiperIndicator: {
      length: 0,
      current: 0,
      indicatorActiveColor: "",
      indicatorInactiveColor: "",
      indicatorMode: "line"
    }
  };
  const Switch = {
    // switch
    switch: {
      loading: false,
      disabled: false,
      size: 25,
      activeColor: "#2979ff",
      inactiveColor: "#ffffff",
      value: false,
      activeValue: true,
      inactiveValue: false,
      asyncChange: false,
      space: 0
    }
  };
  const Tabbar = {
    // tabbar
    tabbar: {
      value: null,
      safeAreaInsetBottom: true,
      border: true,
      zIndex: 1,
      activeColor: "#1989fa",
      inactiveColor: "#7d7e80",
      fixed: true,
      placeholder: true
    }
  };
  const TabbarItem = {
    //
    tabbarItem: {
      name: null,
      icon: "",
      badge: null,
      dot: false,
      text: "",
      badgeStyle: "top: 6px;right:2px;"
    }
  };
  const Tabs = {
    //
    tabs: {
      duration: 300,
      list: [],
      lineColor: "#3c9cff",
      activeStyle: {
        color: "#303133"
      },
      inactiveStyle: {
        color: "#606266"
      },
      lineWidth: 20,
      lineHeight: 3,
      lineBgSize: "cover",
      itemStyle: {
        height: "44px"
      },
      scrollable: true,
      current: 0,
      keyName: "name"
    }
  };
  const Tag = {
    // tag 组件
    tag: {
      type: "primary",
      disabled: false,
      size: "medium",
      shape: "square",
      text: "",
      bgColor: "",
      color: "",
      borderColor: "",
      closeColor: "#C6C7CB",
      name: "",
      plainFill: false,
      plain: false,
      closable: false,
      show: true,
      icon: "",
      iconColor: ""
    }
  };
  const Text = {
    // text 组件
    text: {
      type: "",
      show: true,
      text: "",
      prefixIcon: "",
      suffixIcon: "",
      mode: "",
      href: "",
      format: "",
      call: false,
      openType: "",
      bold: false,
      block: false,
      lines: "",
      color: "#303133",
      size: 15,
      iconStyle: {
        fontSize: "15px"
      },
      decoration: "none",
      margin: 0,
      lineHeight: "",
      align: "left",
      wordWrap: "normal"
    }
  };
  const Textarea = {
    // textarea 组件
    textarea: {
      value: "",
      placeholder: "",
      placeholderClass: "textarea-placeholder",
      placeholderStyle: "color: #c0c4cc",
      height: 70,
      confirmType: "done",
      disabled: false,
      count: false,
      focus: false,
      autoHeight: false,
      fixed: false,
      cursorSpacing: 0,
      cursor: "",
      showConfirmBar: true,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      disableDefaultPadding: false,
      holdKeyboard: false,
      maxlength: 140,
      border: "surround",
      formatter: null
    }
  };
  const Toast = {
    // toast组件
    toast: {
      zIndex: 10090,
      loading: false,
      text: "",
      icon: "",
      type: "",
      loadingMode: "",
      show: "",
      overlay: false,
      position: "center",
      params: {},
      duration: 2e3,
      isTab: false,
      url: "",
      callback: null,
      back: false
    }
  };
  const Toolbar = {
    // toolbar 组件
    toolbar: {
      show: true,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      title: ""
    }
  };
  const Tooltip = {
    // tooltip 组件
    tooltip: {
      text: "",
      copyText: "",
      size: 14,
      color: "#606266",
      bgColor: "transparent",
      direction: "top",
      zIndex: 10071,
      showCopy: true,
      buttons: [],
      overlay: true,
      showToast: true
    }
  };
  const Transition = {
    // transition动画组件的props
    transition: {
      show: false,
      mode: "fade",
      duration: "300",
      timingFunction: "ease-out"
    }
  };
  const Upload = {
    // upload组件
    upload: {
      accept: "image",
      extension: [],
      capture: ["album", "camera"],
      compressed: true,
      camera: "back",
      maxDuration: 60,
      uploadIcon: "camera-fill",
      uploadIconColor: "#D3D4D6",
      useBeforeRead: false,
      previewFullImage: true,
      maxCount: 52,
      disabled: false,
      imageMode: "aspectFill",
      name: "",
      sizeType: ["original", "compressed"],
      multiple: false,
      deletable: true,
      maxSize: Number.MAX_VALUE,
      fileList: [],
      uploadText: "",
      width: 80,
      height: 80,
      previewImage: true
    }
  };
  const props$5 = {
    ...ActionSheet,
    ...Album,
    ...Alert,
    ...Avatar,
    ...AvatarGroup,
    ...Backtop,
    ...Badge,
    ...Button,
    ...Calendar,
    ...CarKeyboard,
    ...Cell,
    ...CellGroup,
    ...Checkbox,
    ...CheckboxGroup,
    ...CircleProgress,
    ...Code,
    ...CodeInput,
    ...Col,
    ...Collapse,
    ...CollapseItem,
    ...ColumnNotice,
    ...CountDown,
    ...CountTo,
    ...DatetimePicker,
    ...Divider,
    ...Empty,
    ...Form,
    ...GormItem,
    ...Gap,
    ...Grid,
    ...GridItem,
    ...Icon,
    ...Image,
    ...IndexAnchor,
    ...IndexList,
    ...Input,
    ...Keyboard,
    ...Line,
    ...LineProgress,
    ...Link,
    ...List,
    ...ListItem,
    ...LoadingIcon,
    ...LoadingPage,
    ...Loadmore,
    ...Modal,
    ...Navbar,
    ...NoNetwork,
    ...NoticeBar,
    ...Notify,
    ...NumberBox,
    ...NumberKeyboard,
    ...Overlay,
    ...Parse,
    ...Picker,
    ...Popup,
    ...Radio,
    ...RadioGroup,
    ...Rate,
    ...ReadMore,
    ...Row,
    ...RowNotice,
    ...ScrollList,
    ...Search,
    ...Section,
    ...Skeleton,
    ...Slider,
    ...StatusBar,
    ...Steps,
    ...StepsItem,
    ...Sticky,
    ...Subsection,
    ...SwipeAction,
    ...SwipeActionItem,
    ...Swiper,
    ...SwipterIndicator,
    ...Switch,
    ...Tabbar,
    ...TabbarItem,
    ...Tabs,
    ...Tag,
    ...Text,
    ...Textarea,
    ...Toast,
    ...Toolbar,
    ...Tooltip,
    ...Transition,
    ...Upload
  };
  const props$4 = defineMixin({
    props: {
      // 图标类名
      name: {
        type: String,
        default: () => props$5.icon.name
      },
      // 图标颜色，可接受主题色
      color: {
        type: String,
        default: () => props$5.icon.color
      },
      // 字体大小，单位px
      size: {
        type: [String, Number],
        default: () => props$5.icon.size
      },
      // 是否显示粗体
      bold: {
        type: Boolean,
        default: () => props$5.icon.bold
      },
      // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
      index: {
        type: [String, Number],
        default: () => props$5.icon.index
      },
      // 触摸图标时的类名
      hoverClass: {
        type: String,
        default: () => props$5.icon.hoverClass
      },
      // 自定义扩展前缀，方便用户扩展自己的图标库
      customPrefix: {
        type: String,
        default: () => props$5.icon.customPrefix
      },
      // 图标右边或者下面的文字
      label: {
        type: [String, Number],
        default: () => props$5.icon.label
      },
      // label的位置，只能右边或者下边
      labelPos: {
        type: String,
        default: () => props$5.icon.labelPos
      },
      // label的大小
      labelSize: {
        type: [String, Number],
        default: () => props$5.icon.labelSize
      },
      // label的颜色
      labelColor: {
        type: String,
        default: () => props$5.icon.labelColor
      },
      // label与图标的距离
      space: {
        type: [String, Number],
        default: () => props$5.icon.space
      },
      // 图片的mode
      imgMode: {
        type: String,
        default: () => props$5.icon.imgMode
      },
      // 用于显示图片小图标时，图片的宽度
      width: {
        type: [String, Number],
        default: () => props$5.icon.width
      },
      // 用于显示图片小图标时，图片的高度
      height: {
        type: [String, Number],
        default: () => props$5.icon.height
      },
      // 用于解决某些情况下，让图标垂直居中的用途
      top: {
        type: [String, Number],
        default: () => props$5.icon.top
      },
      // 是否阻止事件传播
      stop: {
        type: Boolean,
        default: () => props$5.icon.stop
      }
    }
  });
  const mpMixin = defineMixin({});
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1[23456789]\d{9}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (typeof value === "number") {
      if (value.toString().length !== 10 && value.toString().length !== 13) {
        return false;
      }
      return !isNaN(new Date(value).getTime());
    }
    if (typeof value === "string") {
      const numV = Number(value);
      if (!isNaN(numV)) {
        if (numV.toString().length === 10 || numV.toString().length === 13) {
          return !isNaN(new Date(numV).getTime());
        }
      }
      if (value.length < 10 || value.length > 19) {
        return false;
      }
      const dateRegex = /^\d{4}[-\/]\d{2}[-\/]\d{2}( \d{1,2}:\d{2}(:\d{2})?)?$/;
      if (!dateRegex.test(value)) {
        return false;
      }
      const dateValue = new Date(value);
      return !isNaN(dateValue.getTime());
    }
    return false;
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
    );
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  const test = {
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range: range$1,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    regExp,
    string
  };
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at uni_modules/uview-plus/libs/function/digit.js:45", `${num} 超出了精度限制，结果可能不正确`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value = 0) {
    return Math.max(min, Math.min(max, Number(value)));
  }
  function getPx(value, unit = false) {
    if (number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    if (typeof customStyle === "object") {
      customStyle.forEach((val, i) => {
        const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
        string2 += `${key}:${val};`;
      });
    }
    return trim(string2);
  }
  function addUnit$1(value = "auto", unit = "") {
    if (!unit) {
      unit = config$1.unit || "px";
    }
    if (unit == "rpx" && number(String(value))) {
      value = value * 2;
    }
    value = String(value);
    return number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    const o = array(obj) ? [] : {};
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
      }
    }
    return o;
  }
  function deepMerge$1(targetOrigin = {}, source = {}) {
    let target = deepClone(targetOrigin);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (source[prop] == null) {
          target[prop] = source[prop];
        } else if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = deepMerge$1(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function shallowMerge(target, source = {}) {
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (source[prop] == null) {
          target[prop] = source[prop];
        } else if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = shallowMerge(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function error(err) {
    {
      formatAppLog("error", "at uni_modules/uview-plus/libs/function/index.js:278", `uView提示：${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else {
      date2 = new Date(
        typeof dateTime === "string" ? dateTime.replace(/-/g, "/") : dateTime
      );
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      // 年
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date2.getDate().toString().padStart(2, "0"),
      // 日
      "h": date2.getHours().toString().padStart(2, "0"),
      // 时
      "M": date2.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date2.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(/* @__PURE__ */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "刚刚";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}分钟前`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}小时前`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}天前`;
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}个月前`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}年前`;
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value.length; i++) {
              _result.push(`${key}[${i}]=${value[i]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value, unit = true) {
    const valueNum = parseInt(value);
    if (unit) {
      if (/s$/.test(value))
        return value;
      return value > 30 ? `${value}ms` : `${value}s`;
    }
    if (/ms$/.test(value))
      return valueNum;
    if (/s$/.test(value))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value) {
    return `00${value}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem = $parent.call(instance, "u-form-item");
    const form = $parent.call(instance, "u-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (typeof obj !== "object" || null == obj) {
      return "";
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (typeof obj !== "object" || null == obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    const pages2 = getCurrentPages();
    return `/${pages2[pages2.length - 1].route || ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  const index = {
    range,
    getPx,
    sleep,
    os,
    sys,
    random,
    guid,
    $parent,
    addStyle,
    addUnit: addUnit$1,
    deepClone,
    deepMerge: deepMerge$1,
    shallowMerge,
    error,
    randomArray,
    timeFormat,
    timeFrom,
    trim,
    queryParams,
    toast,
    type2icon,
    priceFormat,
    getDuration,
    padZero,
    formValidate,
    getProperty,
    setProperty,
    page,
    pages
    // setConfig
  };
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: "pop-in",
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false
        // 是否需要拦截
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = queryParams(params);
      return url2 += query;
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig2 = {};
      if (typeof options === "string") {
        mergeConfig2.url = this.mixinParam(options, params);
        mergeConfig2.type = "navigateTo";
      } else {
        mergeConfig2 = deepMerge$1(this.config, options);
        mergeConfig2.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig2.url === page())
        return;
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig2.params = params;
      mergeConfig2 = deepMerge$1(this.config, mergeConfig2);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig2, resolve);
        });
        isNext && this.openPage(mergeConfig2);
      } else {
        this.openPage(mergeConfig2);
      }
    }
    // 执行路由跳转
    openPage(config2) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  const mixin = defineMixin({
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    created() {
      this.$u.getRect = this.$uGetRect;
    },
    computed: {
      // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
      // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
      // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
      $u() {
        return deepMerge$1(uni.$u, {
          props: void 0,
          http: void 0,
          mixin: void 0
        });
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `u-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          route({ type: this.linkType, url: url2 });
        }
      },
      navTo(url2 = "", linkType = "navigateTo") {
        route({ type: this.linkType, url: url2 });
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = $parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      // 空操作
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeUnmount() {
      if (this.parent && test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  });
  const _sfc_main$i = {
    name: "u-icon",
    data() {
      return {};
    },
    emits: ["click"],
    mixins: [mpMixin, mixin, props$4],
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix + "-" + this.name);
        if (this.customPrefix == "uicon") {
          classes.push("u-iconfont");
        } else {
          classes.push(this.customPrefix);
        }
        if (this.color && config$1.type.includes(this.color))
          classes.push("u-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: addUnit$1(this.size),
          lineHeight: addUnit$1(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          // 某些特殊情况需要设置一个到顶部的距离，才能更好的垂直居中
          top: addUnit$1(this.top)
        };
        if (this.color && !config$1.type.includes(this.color))
          style.color = this.color;
        return style;
      },
      // 判断传入的name属性，是否图片路径，只要带有"/"均认为是图片形式
      isImg() {
        return this.name.indexOf("/") !== -1;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? addUnit$1(this.width) : addUnit$1(this.size);
        style.height = this.height ? addUnit$1(this.height) : addUnit$1(this.size);
        return style;
      },
      // 通过图标名，查找对应的图标
      icon() {
        if (this.customPrefix !== "uicon")
          return "";
        return icons["uicon-" + this.name] || this.name;
      }
    },
    methods: {
      addStyle,
      addUnit: addUnit$1,
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-icon", ["u-icon--" + _ctx.labelPos]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
      },
      [
        $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
          key: 0,
          class: "u-icon__img",
          src: _ctx.name,
          mode: _ctx.imgMode,
          style: vue.normalizeStyle([$options.imgStyle, $options.addStyle(_ctx.customStyle)])
        }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: vue.normalizeClass(["u-icon__icon", $options.uClasses]),
          style: vue.normalizeStyle([$options.iconStyle, $options.addStyle(_ctx.customStyle)]),
          "hover-class": _ctx.hoverClass
        }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
        vue.createCommentVNode(' 这里进行空字符串判断，如果仅仅是v-if="label"，可能会出现传递0的时候，结果也无法显示 '),
        _ctx.label !== "" ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 2,
            class: "u-icon__label",
            style: vue.normalizeStyle({
              color: _ctx.labelColor,
              fontSize: $options.addUnit(_ctx.labelSize),
              marginLeft: _ctx.labelPos == "right" ? $options.addUnit(_ctx.space) : 0,
              marginTop: _ctx.labelPos == "bottom" ? $options.addUnit(_ctx.space) : 0,
              marginRight: _ctx.labelPos == "left" ? $options.addUnit(_ctx.space) : 0,
              marginBottom: _ctx.labelPos == "top" ? $options.addUnit(_ctx.space) : 0
            })
          },
          vue.toDisplayString(_ctx.label),
          5
          /* TEXT, STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-ac70166d"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/uni_modules/uview-plus/components/u-icon/u-icon.vue"]]);
  const props$3 = defineMixin({
    props: {
      // 是否展示组件
      show: {
        type: Boolean,
        default: () => props$5.transition.show
      },
      // 使用的动画模式
      mode: {
        type: String,
        default: () => props$5.transition.mode
      },
      // 动画的执行时间，单位ms
      duration: {
        type: [String, Number],
        default: () => props$5.transition.duration
      },
      // 使用的动画过渡函数
      timingFunction: {
        type: String,
        default: () => props$5.transition.timingFunction
      }
    }
  });
  const getClassNames = (name) => ({
    enter: `u-${name}-enter u-${name}-enter-active`,
    "enter-to": `u-${name}-enter-to u-${name}-enter-active`,
    leave: `u-${name}-leave u-${name}-leave-active`,
    "leave-to": `u-${name}-leave-to u-${name}-leave-active`
  });
  const transitionMixin = {
    methods: {
      // 组件被点击发出事件
      clickHandler() {
        this.$emit("click");
      },
      // vue版本的组件进场处理
      async vueEnter() {
        const classNames = getClassNames(this.mode);
        this.status = "enter";
        this.$emit("beforeEnter");
        this.inited = true;
        this.display = true;
        this.classes = classNames.enter;
        await vue.nextTick();
        {
          await sleep(20);
          this.$emit("enter");
          this.transitionEnded = false;
          this.$emit("afterEnter");
          this.classes = classNames["enter-to"];
        }
      },
      // 动画离场处理
      async vueLeave() {
        if (!this.display)
          return;
        const classNames = getClassNames(this.mode);
        this.status = "leave";
        this.$emit("beforeLeave");
        this.classes = classNames.leave;
        await vue.nextTick();
        {
          this.transitionEnded = false;
          this.$emit("leave");
          setTimeout(this.onTransitionEnd, this.duration);
          this.classes = classNames["leave-to"];
        }
      },
      // 完成过渡后触发
      onTransitionEnd() {
        if (this.transitionEnded)
          return;
        this.transitionEnded = true;
        this.$emit(this.status === "leave" ? "afterLeave" : "afterEnter");
        if (!this.show && this.display) {
          this.display = false;
          this.inited = false;
        }
      }
    }
  };
  const _sfc_main$h = {
    name: "u-transition",
    data() {
      return {
        inited: false,
        // 是否显示/隐藏组件
        viewStyle: {},
        // 组件内部的样式
        status: "",
        // 记录组件动画的状态
        transitionEnded: false,
        // 组件是否结束的标记
        display: false,
        // 组件是否展示
        classes: ""
        // 应用的类名
      };
    },
    emits: ["click", "beforeEnter", "enter", "afterEnter", "beforeLeave", "leave", "afterLeave"],
    computed: {
      mergeStyle() {
        const { viewStyle, customStyle } = this;
        return {
          transitionDuration: `${this.duration}ms`,
          // display: `${this.display ? '' : 'none'}`,
          transitionTimingFunction: this.timingFunction,
          // 避免自定义样式影响到动画属性，所以写在viewStyle前面
          ...addStyle(customStyle),
          ...viewStyle
        };
      }
    },
    // 将mixin挂在到组件中，实际上为一个vue格式对象。
    mixins: [mpMixin, mixin, transitionMixin, props$3],
    watch: {
      show: {
        handler(newVal) {
          newVal ? this.vueEnter() : this.vueLeave();
        },
        // 表示同时监听初始化时的props的show的意思
        immediate: true
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.inited ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-transition", $data.classes]),
        ref: "u-transition",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
        style: vue.normalizeStyle([$options.mergeStyle]),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.noop && _ctx.noop(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-5cec8177"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/uni_modules/uview-plus/components/u-transition/u-transition.vue"]]);
  const props$2 = defineMixin({
    props: {
      // 图片地址
      src: {
        type: String,
        default: () => props$5.image.src
      },
      // 裁剪模式
      mode: {
        type: String,
        default: () => props$5.image.mode
      },
      // 宽度，单位任意
      width: {
        type: [String, Number],
        default: () => props$5.image.width
      },
      // 高度，单位任意
      height: {
        type: [String, Number],
        default: () => props$5.image.height
      },
      // 图片形状，circle-圆形，square-方形
      shape: {
        type: String,
        default: () => props$5.image.shape
      },
      // 圆角，单位任意
      radius: {
        type: [String, Number],
        default: () => props$5.image.radius
      },
      // 是否懒加载，微信小程序、App、百度小程序、字节跳动小程序
      lazyLoad: {
        type: Boolean,
        default: () => props$5.image.lazyLoad
      },
      // 开启长按图片显示识别微信小程序码菜单
      showMenuByLongpress: {
        type: Boolean,
        default: () => props$5.image.showMenuByLongpress
      },
      // 加载中的图标，或者小图片
      loadingIcon: {
        type: String,
        default: () => props$5.image.loadingIcon
      },
      // 加载失败的图标，或者小图片
      errorIcon: {
        type: String,
        default: () => props$5.image.errorIcon
      },
      // 是否显示加载中的图标或者自定义的slot
      showLoading: {
        type: Boolean,
        default: () => props$5.image.showLoading
      },
      // 是否显示加载错误的图标或者自定义的slot
      showError: {
        type: Boolean,
        default: () => props$5.image.showError
      },
      // 是否需要淡入效果
      fade: {
        type: Boolean,
        default: () => props$5.image.fade
      },
      // 只支持网络资源，只对微信小程序有效
      webp: {
        type: Boolean,
        default: () => props$5.image.webp
      },
      // 过渡时间，单位ms
      duration: {
        type: [String, Number],
        default: () => props$5.image.duration
      },
      // 背景颜色，用于深色页面加载图片时，为了和背景色融合
      bgColor: {
        type: String,
        default: () => props$5.image.bgColor
      }
    }
  });
  const _sfc_main$g = {
    name: "u-image",
    mixins: [mpMixin, mixin, props$2],
    data() {
      return {
        // 图片是否加载错误，如果是，则显示错误占位图
        isError: false,
        // 初始化组件时，默认为加载中状态
        loading: true,
        // 不透明度，为了实现淡入淡出的效果
        opacity: 1,
        // 过渡时间，因为props的值无法修改，故需要一个中间值
        durationTime: this.duration,
        // 图片加载完成时，去掉背景颜色，因为如果是png图片，就会显示灰色的背景
        backgroundStyle: {},
        // 用于fade模式的控制组件显示与否
        show: false
      };
    },
    watch: {
      src: {
        immediate: true,
        handler(n) {
          if (!n) {
            this.isError = true;
          } else {
            this.isError = false;
            this.loading = true;
          }
        }
      }
    },
    computed: {
      wrapStyle() {
        let style = {};
        style.width = addUnit$1(this.width);
        style.height = addUnit$1(this.height);
        style.borderRadius = this.shape == "circle" ? "10000px" : addUnit$1(this.radius);
        style.overflow = this.radius > 0 ? "hidden" : "visible";
        return deepMerge$1(style, addStyle(this.customStyle));
      }
    },
    mounted() {
      this.show = true;
    },
    emits: ["click", "error", "load"],
    methods: {
      addUnit: addUnit$1,
      // 点击图片
      onClick() {
        this.$emit("click");
      },
      // 图片加载失败
      onErrorHandler(err) {
        this.loading = false;
        this.isError = true;
        this.$emit("error", err);
      },
      // 图片加载完成，标记loading结束
      onLoadHandler(event) {
        this.loading = false;
        this.isError = false;
        this.$emit("load", event);
        this.removeBgColor();
      },
      // 移除图片的背景色
      removeBgColor() {
        this.backgroundStyle = {
          backgroundColor: "transparent"
        };
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$2);
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_1$1);
    return vue.openBlock(), vue.createBlock(_component_u_transition, {
      mode: "fade",
      show: $data.show,
      duration: _ctx.fade ? 1e3 : 0
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode(
          "view",
          {
            class: "u-image",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.onClick && $options.onClick(...args)),
            style: vue.normalizeStyle([$options.wrapStyle, $data.backgroundStyle])
          },
          [
            !$data.isError ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              src: _ctx.src,
              mode: _ctx.mode,
              onError: _cache[0] || (_cache[0] = (...args) => $options.onErrorHandler && $options.onErrorHandler(...args)),
              onLoad: _cache[1] || (_cache[1] = (...args) => $options.onLoadHandler && $options.onLoadHandler(...args)),
              "show-menu-by-longpress": _ctx.showMenuByLongpress,
              "lazy-load": _ctx.lazyLoad,
              class: "u-image__image",
              style: vue.normalizeStyle({
                borderRadius: _ctx.shape == "circle" ? "10000px" : $options.addUnit(_ctx.radius),
                width: $options.addUnit(_ctx.width),
                height: $options.addUnit(_ctx.height)
              })
            }, null, 44, ["src", "mode", "show-menu-by-longpress", "lazy-load"])) : vue.createCommentVNode("v-if", true),
            _ctx.showLoading && $data.loading ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: "u-image__loading",
                style: vue.normalizeStyle({
                  borderRadius: _ctx.shape == "circle" ? "50%" : $options.addUnit(_ctx.radius),
                  backgroundColor: this.bgColor,
                  width: $options.addUnit(_ctx.width),
                  height: $options.addUnit(_ctx.height)
                })
              },
              [
                vue.renderSlot(_ctx.$slots, "loading", {}, () => [
                  vue.createVNode(_component_u_icon, {
                    name: _ctx.loadingIcon,
                    width: _ctx.width,
                    height: _ctx.height
                  }, null, 8, ["name", "width", "height"])
                ], true)
              ],
              4
              /* STYLE */
            )) : vue.createCommentVNode("v-if", true),
            _ctx.showError && $data.isError && !$data.loading ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 2,
                class: "u-image__error",
                style: vue.normalizeStyle({
                  borderRadius: _ctx.shape == "circle" ? "50%" : $options.addUnit(_ctx.radius),
                  width: $options.addUnit(_ctx.width),
                  height: $options.addUnit(_ctx.height)
                })
              },
              [
                vue.renderSlot(_ctx.$slots, "error", {}, () => [
                  vue.createVNode(_component_u_icon, {
                    name: _ctx.errorIcon,
                    width: _ctx.width,
                    height: _ctx.height
                  }, null, 8, ["name", "width", "height"])
                ], true)
              ],
              4
              /* STYLE */
            )) : vue.createCommentVNode("v-if", true)
          ],
          4
          /* STYLE */
        )
      ]),
      _: 3
      /* FORWARDED */
    }, 8, ["show", "duration"]);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-abebd402"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/uni_modules/uview-plus/components/u-image/u-image.vue"]]);
  const _sfc_main$f = {
    name: "net-image",
    props: {
      imageUrl: {
        type: String,
        default: ""
      },
      width: {
        type: String,
        default: "100rpx"
      },
      height: {
        type: String,
        default: "100rpx"
      },
      radius: {
        type: String,
        default: "0rpx"
      },
      defaultImage: {
        type: String,
        default: ""
      },
      mode: {
        type: String,
        default: "aspectFit"
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_image = resolveEasycom(vue.resolveDynamicComponent("u-image"), __easycom_0$4);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $props.imageUrl.length == 0 ? (vue.openBlock(), vue.createBlock(_component_u_image, {
        key: 0,
        src: $props.defaultImage,
        width: $props.width,
        height: $props.height,
        radius: $props.radius,
        mode: $props.mode
      }, null, 8, ["src", "width", "height", "radius", "mode"])) : (vue.openBlock(), vue.createBlock(_component_u_image, {
        key: 1,
        src: $props.imageUrl,
        width: $props.width,
        height: $props.height,
        radius: $props.radius,
        mode: $props.mode,
        onClick: _ctx.clickImg
      }, {
        error: vue.withCtx(() => [
          vue.createVNode(_component_u_image, {
            src: $props.defaultImage,
            width: $props.width,
            height: $props.height,
            radius: $props.radius,
            mode: $props.mode
          }, null, 8, ["src", "width", "height", "radius", "mode"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["src", "width", "height", "radius", "mode", "onClick"]))
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "/Users/lishifei/Desktop/shaxian-wx/components/net-image/net-image.vue"]]);
  const _sfc_main$e = {
    name: "bottom-support-info",
    props: {
      titleColor: {
        type: String,
        default: "#666"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "column-c-c" }, [
      vue.createElementVNode(
        "text",
        {
          class: "fw-400 fs24",
          style: vue.normalizeStyle({ color: $props.titleColor })
        },
        "私域拓客",
        4
        /* STYLE */
      ),
      vue.createElementVNode(
        "text",
        {
          class: "fw-400 fs24",
          style: vue.normalizeStyle({ color: $props.subTitleColor })
        },
        "合作电话 18121402800",
        4
        /* STYLE */
      )
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__file", "/Users/lishifei/Desktop/shaxian-wx/components/bottom-support-info/bottom-support-info.vue"]]);
  const _sfc_main$d = {
    name: "safe-bottom-view",
    data() {
      return {
        safeBottom: 0
      };
    },
    mounted() {
      let sys2 = uni.getSystemInfoSync();
      var bottom = 10;
      if (sys2.safeAreaInsets.bottom > 0) {
        bottom = sys2.safeAreaInsets.bottom;
      }
      this.safeBottom = bottom;
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle({ "padding-bottom": $data.safeBottom + "rpx" })
      },
      [
        vue.renderSlot(_ctx.$slots, "default")
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "/Users/lishifei/Desktop/shaxian-wx/components/safe-bottom-view/safe-bottom-view.vue"]]);
  const zStatic = {
    base64Arrow: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAD1BMVEVHcExRUVFMTExRUVFRUVE9CdWsAAAABHRSTlMAjjrY9ZnUjwAAAQFJREFUWMPt2MsNgzAMgGEEE1B1gKJmAIRYoCH7z9RCXrabh33iYktcIv35EEg5ZBh07pvxJU6MFSPOSRnjnBUjUsaciRUjMsb4xIoRCWNiYsUInzE5sWKEyxiYWDbyefqHx1zIeiYTk7mQYziTYecxHvEJjwmIT3hMQELCYSISEg4TkZj0mYTEpM8kJCU9JiMp6TEZyUmbAUhO2gxAQNJiIAKSFgMRmNQZhMCkziAEJTUGIyipMRjBSZkhCE7KDEFIUmTeGCHJxWz0zXaE0GTCG8ZFtEaS347r/1fe11YyHYVfubxayfjoHmc0YYwmmmiiiSaaaKLJ7ckyz5ve+dw3Xw2emdwm9xSbAAAAAElFTkSuQmCC",
    base64ArrowWhite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVHcEz///////////////////+IGTx/AAAABnRSTlMA/dAkXZOhASU/AAABYElEQVRYw+2YwXLCIBCGsdAHWGbyAKZ4zxi9O017rxLf/1UaWFAgA1m8dcpedNSPf/l/Vh0Ya/Wn6hN0JcGvoCqRM4C8VBFiDwBqqNuJKV0rAnCgy3AUqZE57x0iqTL8Br4U3WBf/YWaIlTKfAcELU/h9w72CSVPa3C3OCDvhpHbRp/s2vq4fHhCeiCl2A3m4Qd71DQR257mFBlMcTlbFnFWzNtHxewYEfSiaLS4el8d8nyhmKJd1CF4eOS0keLMAuSxubLBIeIGQW8YHCFFo7EH9+YDcQt9FMZEswTheaNxTHwHT8SZorJjMrEVwo4Zo0U8HSEyZvJMOg4RjnmmRr8nDYeIz3OMkbfE/QhBo+U9RnZJxjGCRh/WKmHEMWLNkfPKsGh/CWJk1JjG0kcuJggTt34VDP8aWAFhp4nybVb5+9qQhjSkIQ1pSEMa8k+Q5U9rV3dF8MpFBK+/7miVq1/HZ2qmo9D+pAAAAABJRU5ErkJggg==",
    base64Flower: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAKlBMVEVHcEzDw8Ovr6+pqamUlJTCwsKenp61tbWxsbGysrLNzc2bm5u5ubmjo6MpovhuAAAACnRSTlMA/P79/sHDhiZS0DxZowAABBBJREFUWMPtl89rE0EUx7ctTXatB3MI1SWnDbUKPUgXqh4ED8Uf7KUVSm3ooVSpSii0Fn/gD4j4o+APiEoVmos9FO2celiqZVgwgaKHPQiCCkv+F99kM7Ozm5kxq1dfD91k9pPve9/3ZjbRNHHok/mKli4eIPNgSuRObuN9SqSEzM20iGnm0yIbqCuV7NSSSIV7uyPM6JMBYdeTOanh/QihJYZsUCSby+VkMj2AvOt0rAeQAwqE3lfKMZVlQCZk1QOCKkkVPadITCfIRNKxfoJI5+0OIFtJx14CMSg1mRSDko7VAfksRQzEbGYqxOJcVTWMCH2I1/IACNW0PWU2M8cmAVHtnH5mM1VRWtwKZjOd5JbF6s1IbaYqaotjNlPHgDAnlAizubTR6ovMYn052g/U5qcmOpi0WL8xTS/3IfSet5m8MEr5ajjF5le6dq/OJpobrdY0t3i9QgefWrxW9/1BLhk0E9m8FeUMhhXal499iD0eQRfDF+ts/tttORRerfp+oV7f4xJj82iUYm1Yzod+ZQEAlS/8mMBwKebVmCVp1f0JLS6zKd17+iwRKTARVg2SHtz3iEbBH+Q+U28zW2Jiza8Tjb1YFoYZMsJyjDqp3M9XBQdSdPLFdxEpvOB37JrHcmR/y9+LgoTlCFGZEa2sc6d4PGlweEa2JSVPoVm+IfGG3ZL037iV9oH+P+Jxc4HGVflNq1M0pivao/EopO4b/ojVCP9GjmiXOeS0DOn1o/iiccT4ORnyvBGF3yUywkQajW4Ti0SGuiy/wVSg/L8w+X/8Q+hvUx8Xd90z4oV5a1i88MbFWHz0WZZ1UrTwBGPX3Rat9AFiXRMRjoMdIdJLEOt2h7jrYOzgOamKZSWSNspOS0X8SAqRYmxRL7sg4eLzYmNehcxh3uoyud/BH2Udux4ywxFTc1xC7Mgf4vMhc5S+kSH3Y7yj+qpwIWSoPTVCOOPVthGx9FbGqrwFw6wSFxJr+17zeKcztt3u+2roAEVgUjDd+AHGuxHy2rZHaa8JMkTHEeyi85ANPO9j9BVuBRD2FY5LDMo/Sz/2hReqGIs/KiFin+CsPsYO/yvM3jL2vE8EbX7/Bf8ejtr2GLN65bioAdgLd8Bis/mD5GmP2qeqyo2ZwQEOtAjRIDH7mBKpUcMoApbZJ5UIxkEwxyMZyMxW/uKFvHCFR3SSmerHyDNQ2dF4JG6zIMpBgLfjSF9x1D6smFcYnGApjmSLICO3ecCDWrQ48geba9DI3STy2i7ax6WIB62fSyIZIiO3GFQqSURp8wCo7GhJBGwuSovJBNjb7kT6FPVnIa9qJ2Ko+l9mefGIdinaMp0yC1URYiwsdfNE45EuA5Cx9EhalfvN5s+UyItm81vaB3p4joniN+SCP7Qc1hblAAAAAElFTkSuQmCC",
    base64FlowerWhite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEX///9HcEz///////////////84chYNAAAABnRSTlP/AGzCOYZj5g1nAAACfklEQVRYw+2YTVPDIBCGtza9Jw25a0bvcax30o73OOr//yvma2F3YWlpPTijXNpAHrK8LLALVPFium2vNIFSbwGKTGQA2GUiHcD29yDNy3sMIdUBQl7r2H8mOEVqAHgPkYZUS6Qc2zYhQqtjyDZEximCZwWZLIBeIgYShs2NzxKpSUehYpMJhURGb+O+w5BpMCAREKPnCDHbIY20SzhM5yxziAXpOiBXydrekT9i5XDEq4NIIHHgyU5mRGqviII4mREJJA4QJzMiILwlRJzpKxJKvCBm8OsBBbLux0tsPl4RKYm5aPu6jw1U4mGxEUR9g8M1PcqBEp/WJliNgYOXueBzS4jZSIcgY5lCtevgDSgyzE+rAfuOTQMq0yzvoGH18qju27Mayzs4fPyMziCx81NJa5RNfW7vPYK9KOfDiVkBxFHG8hAj9txuoBuSWORsFfkpBf7xKFLSeaOefEojh5jz22DJEqMP8fUyaKdQx+RnG+yXMpe8Aars8ueR1pVH/bW3FyyvPRw90upLDHwpgBDtg4aUBNkxRLXMAi03IhcZtr1m+FeI/O/JNyDmmL1djLOauSlNflBpW18RQ2bPqXI22MXXEk75KRHTnkPkYbESbdKP2ZFk0r5sIwffAjy1lx+vx7NLjB6/E7Jfv5ERKhzpN0w8IDE8IGFDv5dhz10s7GFiXRZcUeLCEG5P5nDq9k4PFDcoMpE3GY4OuxuCXhmuyNB6k0RsLIAvqp9NE5r8ZCSS8gxnUp7ODdYhZTqxuiJ9uyJJtPmpqJ7wVj+XVieS903iViHziqAhchLEJAyb7jWU647EpUofQ0ziUuXXXhDddtlllSwjgSQu7r4BRWhQqfDPMVwAAAAASUVORK5CYII=",
    base64Success: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAElBMVEVRUVFHcExTU1NRUVFRUVFRUVFOSlSUAAAABnRSTlP/AI6+VySB3ZENAAACcElEQVRYw+2YyYKCMAyGI8hdpdxdZu7gcpdZ7jL6/s8yYheSNi0aPdqbwOffpGmaFOYPD3gj4bisN7vddv17N/JVgxn5x12IWgIaWTuO/IE3PseQbwjGPo2cgRmHFLJwdm/X643zwiqOKPPJ1nj3sjEP2iiifZWj5bhopSyGaEO2HX5fbQJzwJ+W7x/jw5ZFjsEU0PMph9xE8i5EqprKALW95eJQURkgzw98uJ/JvwGecR7bIjWWsUgVrrIfFZ2HlLy3sKETD1mmRLRMRhGVssRa0xJkdn3SpJBymBkM8+pSSDXMDNyDaToVHd2fgpNt0sjwiUZO19+jGQ+gQEg9Oq+bufmAVGihomNmjQG7UG3020vrlm7lkFnKFGU3kZ0KGAdmKe821pipQ+qEKcrZeTL2g5FsUks4cStjEZWwXg0b0n4GxmEpkWwIs5VBynjgK7xZaz1/0D7OxkVuLpsY5BQNFyLS84VBjjbg0iL2r2EQHBOxBhikuUOkdxODVF1cxHoWtPPsiyXO455Iv34hssCO8EV4ZIYTjS8SR4qYSHRiTiYQ4ZFbHi0iIhhBTi6dTCgSWRcnw4h4yGTuyTAiOGBIWGoZTgSHJQl+LcOJ4OCnW6yX2bMnJ9pidCOXtkTkTrIGpYuOynAiOF14SamMiOCk5Ke+mq8BcOrrvym8d0zKIQnWT+M1WwOQNO4fFiWb18hhERxJPx2fblbPHHyC41VyiAtKBUFBIih7JMWVoIQTFIr3lKPN80WvoLSWFPC653ioTZA0I0FrQ7qU6asaK0H7JmkSJa2ooOGVtNUsc3j9FYHkIkJy3SG6VHnfXKXGP9t4N9Q4Ye98AAAAAElFTkSuQmCC",
    base64SuccessWhite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAGFBMVEVHcEz///////////////////////////8dS1W+AAAAB3RSTlMAiVYk6KvDHLfaegAAAo1JREFUWMPtWEtzmzAQNhCTq910ytXpiyvxTNOr60zrayepx9d02gnX4sTm7xcEiJX2gdnkGJ1A4tOnfWqXyeR1vMRYzrcPD9v5h5MBl3/Ldvx4cxIg/FWC8X0xjLjalM54uhhCfCrRuJURX0pi3EmIqZV7O59vrRZmguStHL9b7S7ftfLwOtiZDw7AHMtmquAQ12b5Wwbnordm8g9zLLO49qc/m2n6aKnhwPOGZ08hAiNHhheiHae1lOUPGZpQkPKa3q0mOUjaRzSRaGUjpy/mmWSwySSpllcEteBKAT52KEnSbblA51pJEPxBQoiH1FP4E3s5+FJv07h6/ylD6ui7B+9fq/ehrFB98ghec9EoVtyjK8pqCHLmCBOwMWSCeWFNN4MbPAk55NhsvoFHSSVR0k5TCTTEzlUGcqV/nVp7n9oIVkmtaqbAEqEgfdgHJPwsEAyZ9r4VAZXFjpEwyaw3+H2v42KYxKhs1XvY/gSSGv+IHyUSuHXCeZhLAgVI3EjgSGo1Fb3xO0tGGU9S2/KAIbtjxpJASG73qox6w5LUq0cEOa+iIONIWIilQSQ0pPa2jgaRQAgQP7c0mITRWGxpMAmEQFN2NAQJNCV0mI6GIIEO47hlQ0ORQLd0nL+hoUjg1m6I1TRr8uYEAriBHLcVFQ5UEMiBe3XkTBEG04WXlGKGxPnMS305XQPA1Ocn2JiuAZwE66fxnKwBnDTuXxZTMq85lwW6kt5ndLqZPefiU1yvmktcUSooChJF2aMprhQlnKJQ5FxRKkcVRa+itNYU8Io2oVkY14w0NMWYlqft91Bj9VHq+ca3b43BxjWJmla0sfKohlfTVpPN+93L/yLQ/IjQ/O5Q/VR5HdL4D7mlxmjwVdELAAAAAElFTkSuQmCC",
    base64Empty: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjA5OjQwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZWQwMWYzNWQtOWRjOC00MDBiLWEyMmQtNjM5OGZiNzVhNGRiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDhlMzQ3ZmEtMDY2My1jYTRiLTgzNTctNTk4YjBkNGIzOTU2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphYmJkZmUyZC0xY2Q2LTJiNDgtYjUyNS05YzlhZjdlNjA4NDMiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MjM6NDArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YTQ5MjM5MDAtNDhiZC03YTQ1LWI4NGItYmVlZTVjOWUxYTM1IiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjIzOjQwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVkMDFmMzVkLTlkYzgtNDAwYi1hMjJkLTYzOThmYjc1YTRkYiIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOTowOTo0MCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBz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",
    base64Error: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAALeGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEzVDE5OjEwOjEwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ3NTExNjAtZDY5MC00ZTkzLWFhNGUtNGMwYTViNGU1ZGFjIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRiNzlkYWMtZTJmYS1iNzQ0LWIxM2ItOWU1N2VjMDhhM2YwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA4MDI4MDItMzUyYS04NTRhLTkxYjctNmRlNmQ1MmViM2QwIiBzdEV2dDp3aGVuPSIyMDIyLTAyLTIyVDIxOjIxOjQ1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQwNjg2NzJkLWY5NDMtOTU0Mi1iMDBiLTVlMDExNmE1NmIzZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxMDoyNjoxNiswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZjk1NTE1OC04MjFiLTA4NDUtYWJmNS05YTE1NGM1ZTY4NjEiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTNUMTE6MDQ6MDQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZGM1Y2IyNWItZDZlNC0yZjQ2LTgyODQtZmUwOTNlY2M2ZTkxIiBzdEV2dDp3aGVuPSIyMDI0LTAxLTEzVDExOjA0OjA0KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE0NzUxMTYwLWQ2OTAtNGU5My1hYTRlLTRjMGE1YjRlNWRhYyIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xM1QxOToxMDoxMCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBz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",
    base64BackToTop: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAElBMVEVRUVH+/v5HcEyZmZlRUVFRUVGm1ByOAAAABnRSTlPMzADMTZAJBBGsAAAEnElEQVR42t2cS27jMAyGf7/2U+QCQeDsbeQCgZDujaC5/1UmkzaJn+JDFGcw3LdfflKibJkkDnxrL7dbg7sNt6+L4O8OYBM+B0ys+QrGkHZG+OEEQ8g6go8Bx1GIGMdpNOQyIG6XdMgnSPtKhLQDGEZFBgYMkhKFtGBb0EIEjDgFRowoBVaMGAWpMedEfxMiZtwpUsgZCqtlkCNUdpVAWigtCCCDFtLwIWeoreZCWiRYYEKGFEjDg+yRZCUH0iLRAgNyToXUNCRZyMqWhGnUN2IPm3wSlwJ7IUspyCBkIQUZhCykIIeQuRTkEDKXAuM9srrtYbrZN7Y98giZSoFd+t1OxmMITG0dcrSFXFchZ1tIvQZpYWxhBbK3hpQrkMEa0iwh5t4a+QvZvDXyF7J5a+Qv5PPW21/I5623v5DPW29/IaO3Xv5Clrw1y1/Ikrdm+Qs5svw83yNnSJ5BQb4F/F7EIEJSnThGBAXxkFQfLOviQUE8JAUPsosHBfGQfDAtHhREQ1JxIV00KIgmrnRI84S0yAd5BAXxxJUck0f6Qnwr9qmr6xF5xLMjcwn/iudIEAdWnyjkEXlQKZiRVzoqRyLbgeUKKR8Q4alY7cSnoxzSf2ggsqehKr6YVpcXpOd7H93f60cKhOd7Re2LteUF4eLqiVS1mr0ge4io6C2+soaFkJ7MuuuQs1yITEp9hwwKISIpzR2iESKSIoT0rLNwuVHQqoSIpAQJpGce60vIUSdEIuUqgPTsJ5QFZK8UIpBS8iG94GFrDjlrhfCl8CG96Llxmle4kEr6vKWBPIVo9kqDQSRk9/3cWoikcCFPAd33v4dIChPyEvLzBA6RlEYWke4JEUnhKXkLeUEKxRHJFfKCQHGucIW8IdZSRkLeEGMpYyEjiK2UsZARxFTKRMgYYillImQMMZQyFTKB2EmZCplAuFLIHT8TMoWwpQwiIVMIUwqpZP5bp5CCvCTiQKr5f5lCQN+tPCBn2ZvVDFJwIDUP0m1BYAfZYRNSsCB7BqTbhoARePIxtZ9tgwWkoJcwCalmv3MBAemtO4R6dah2HaKQqj8Zvp9sQDjvJ21+SPCBHPJDDk6QITekEV7gqCC19CpKAym9IMfckKv4olMBCeIrWwVEfvkshzQekO9r9P1/ALk+IG1eSPCDiCJfyG+FyU+A6ZCa/piZDinpz7LpkCv5gdkAEshP5emQhv7onw6pGeULyZCSUYiRDAmMkpJkCKs4JhFSq8p8hJBSVbAkhARV6ZUQoisik0FqXTmcDHLVFfbJIEFXoiiCNMpiSxGkVJaNiiBBWQArgTTaUl4JpNQWJUsgQVteXQg+AKkLxQWFGKW+5J2+eVp4S168X3CF1CltCKdTJ8lb84YK2bUBO+wZW0Pqv9nk4tKu49N45NJC5dMM5tLW5tOg59Jq6NM06dL+abFXwr/RkuvTXJwae1abtE/Dt0/ruksTvs84AZ/BCC4jHnyGVfiM3VBQFANEXEah+Ax18RlP4zNox2dkkM/wI58xTn8yDCXGYCDV3W5RGSajtXyGhG1jbpbjzpwGt/0MJft8jqC7iUbQ/QZaxdnKqcIftwAAAABJRU5ErkJggg=="
  };
  const _sfc_main$c = {
    name: "z-paging-empty-view",
    data() {
      return {};
    },
    props: {
      // 空数据描述文字
      emptyViewText: {
        type: String,
        default: "没有数据哦~"
      },
      // 空数据图片
      emptyViewImg: {
        type: String,
        default: ""
      },
      // 是否显示空数据图重新加载按钮
      showEmptyViewReload: {
        type: Boolean,
        default: false
      },
      // 空数据点击重新加载文字
      emptyViewReloadText: {
        type: String,
        default: "重新加载"
      },
      // 是否是加载失败
      isLoadFailed: {
        type: Boolean,
        default: false
      },
      // 空数据图样式
      emptyViewStyle: {
        type: Object,
        default: function() {
          return {};
        }
      },
      // 空数据图img样式
      emptyViewImgStyle: {
        type: Object,
        default: function() {
          return {};
        }
      },
      // 空数据图描述文字样式
      emptyViewTitleStyle: {
        type: Object,
        default: function() {
          return {};
        }
      },
      // 空数据图重新加载按钮样式
      emptyViewReloadStyle: {
        type: Object,
        default: function() {
          return {};
        }
      },
      // 空数据图z-index
      emptyViewZIndex: {
        type: Number,
        default: 9
      },
      // 空数据图片是否使用fixed布局并铺满z-paging
      emptyViewFixed: {
        type: Boolean,
        default: true
      },
      // 空数据图中布局的单位，默认为rpx
      unit: {
        type: String,
        default: "rpx"
      }
    },
    computed: {
      emptyImg() {
        return this.isLoadFailed ? zStatic.base64Error : zStatic.base64Empty;
      },
      finalEmptyViewStyle() {
        this.emptyViewStyle["z-index"] = this.emptyViewZIndex;
        return this.emptyViewStyle;
      }
    },
    methods: {
      // 点击了reload按钮
      reloadClick() {
        this.$emit("reload");
      },
      // 点击了空数据view
      emptyViewClick() {
        this.$emit("viewClick");
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass({ "zp-container": true, "zp-container-fixed": $props.emptyViewFixed }),
        style: vue.normalizeStyle([$options.finalEmptyViewStyle]),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.emptyViewClick && $options.emptyViewClick(...args))
      },
      [
        vue.createElementVNode("view", { class: "zp-main" }, [
          !$props.emptyViewImg.length ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            class: vue.normalizeClass({ "zp-main-image-rpx": $props.unit === "rpx", "zp-main-image-px": $props.unit === "px" }),
            style: vue.normalizeStyle([$props.emptyViewImgStyle]),
            src: $options.emptyImg
          }, null, 14, ["src"])) : (vue.openBlock(), vue.createElementBlock("image", {
            key: 1,
            class: vue.normalizeClass({ "zp-main-image-rpx": $props.unit === "rpx", "zp-main-image-px": $props.unit === "px" }),
            mode: "aspectFit",
            style: vue.normalizeStyle([$props.emptyViewImgStyle]),
            src: $props.emptyViewImg
          }, null, 14, ["src"])),
          vue.createElementVNode(
            "text",
            {
              class: vue.normalizeClass(["zp-main-title", { "zp-main-title-rpx": $props.unit === "rpx", "zp-main-title-px": $props.unit === "px" }]),
              style: vue.normalizeStyle([$props.emptyViewTitleStyle])
            },
            vue.toDisplayString($props.emptyViewText),
            7
            /* TEXT, CLASS, STYLE */
          ),
          $props.showEmptyViewReload ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 2,
              class: vue.normalizeClass({ "zp-main-error-btn": true, "zp-main-error-btn-rpx": $props.unit === "rpx", "zp-main-error-btn-px": $props.unit === "px" }),
              style: vue.normalizeStyle([$props.emptyViewReloadStyle]),
              onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.reloadClick && $options.reloadClick(...args), ["stop"]))
            },
            vue.toDisplayString($props.emptyViewReloadText),
            7
            /* TEXT, CLASS, STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-b7999e14"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/uni_modules/z-paging/components/z-paging-empty-view/z-paging-empty-view.vue"]]);
  const c = {
    // 当前版本号
    version: "2.7.11",
    // 延迟操作的通用时间
    delayTime: 100,
    // 请求失败时候全局emit使用的key
    errorUpdateKey: "z-paging-error-emit",
    // 全局emit complete的key
    completeUpdateKey: "z-paging-complete-emit",
    // z-paging缓存的前缀key
    cachePrefixKey: "z-paging-cache",
    // 虚拟列表中列表index的key
    listCellIndexKey: "zp_index",
    // 虚拟列表中列表的唯一key
    listCellIndexUniqueKey: "zp_unique_index"
  };
  const zLocalConfig = {};
  const storageKey = "Z-PAGING-REFRESHER-TIME-STORAGE-KEY";
  let config = null;
  let configLoaded = false;
  const timeoutMap = {};
  function gc(key, defaultValue) {
    return () => {
      _handleDefaultConfig();
      if (!config)
        return defaultValue;
      const value = config[key];
      return value === void 0 ? defaultValue : value;
    };
  }
  function getTouch(e) {
    let touch = null;
    if (e.touches && e.touches.length) {
      touch = e.touches[0];
    } else if (e.changedTouches && e.changedTouches.length) {
      touch = e.changedTouches[0];
    } else if (e.datail && e.datail != {}) {
      touch = e.datail;
    } else {
      return { touchX: 0, touchY: 0 };
    }
    return {
      touchX: touch.clientX,
      touchY: touch.clientY
    };
  }
  function getTouchFromZPaging(target) {
    if (target && target.tagName && target.tagName !== "BODY" && target.tagName !== "UNI-PAGE-BODY") {
      const classList = target.classList;
      if (classList && classList.contains("z-paging-content")) {
        return {
          isFromZp: true,
          isPageScroll: classList.contains("z-paging-content-page"),
          isReachedTop: classList.contains("z-paging-reached-top"),
          isUseChatRecordMode: classList.contains("z-paging-use-chat-record-mode")
        };
      } else {
        return getTouchFromZPaging(target.parentNode);
      }
    } else {
      return { isFromZp: false };
    }
  }
  function getParent(parent) {
    if (!parent)
      return null;
    if (parent.$refs.paging)
      return parent;
    return getParent(parent.$parent);
  }
  function consoleErr(err) {
    formatAppLog("error", "at uni_modules/z-paging/components/z-paging/js/z-paging-utils.js:72", `[z-paging]${err}`);
  }
  function delay(callback, ms = c.delayTime, key) {
    const timeout2 = setTimeout(callback, ms);
    if (!!key) {
      timeoutMap[key] && clearTimeout(timeoutMap[key]);
      timeoutMap[key] = timeout2;
    }
    return timeout2;
  }
  function setRefesrherTime(time, key) {
    const datas = getRefesrherTime() || {};
    datas[key] = time;
    uni.setStorageSync(storageKey, datas);
  }
  function getRefesrherTime() {
    return uni.getStorageSync(storageKey);
  }
  function getRefesrherTimeByKey(key) {
    const datas = getRefesrherTime();
    return datas && datas[key] ? datas[key] : null;
  }
  function getRefesrherFormatTimeByKey(key, textMap) {
    const time = getRefesrherTimeByKey(key);
    const timeText = time ? _timeFormat(time, textMap) : textMap.none;
    return `${textMap.title}${timeText}`;
  }
  function convertToPx(text) {
    const dataType = Object.prototype.toString.call(text);
    if (dataType === "[object Number]")
      return text;
    let isRpx = false;
    if (text.indexOf("rpx") !== -1 || text.indexOf("upx") !== -1) {
      text = text.replace("rpx", "").replace("upx", "");
      isRpx = true;
    } else if (text.indexOf("px") !== -1) {
      text = text.replace("px", "");
    }
    if (!isNaN(text)) {
      if (isRpx)
        return Number(uni.upx2px(text));
      return Number(text);
    }
    return 0;
  }
  function getTime() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
  function getInstanceId() {
    const s = [];
    const hexDigits = "0123456789abcdef";
    for (let i = 0; i < 10; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 16), 1);
    }
    return s.join("") + getTime();
  }
  function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  function isPromise(func2) {
    return Object.prototype.toString.call(func2) === "[object Promise]";
  }
  function addUnit(value, unit) {
    if (Object.prototype.toString.call(value) === "[object String]") {
      let tempValue = value;
      tempValue = tempValue.replace("rpx", "").replace("upx", "").replace("px", "");
      if (value.indexOf("rpx") === -1 && value.indexOf("upx") === -1 && value.indexOf("px") !== -1) {
        tempValue = parseFloat(tempValue) * 2;
      }
      value = tempValue;
    }
    return unit === "rpx" ? value + "rpx" : value / 2 + "px";
  }
  function deepCopy(obj) {
    if (typeof obj !== "object" || obj === null)
      return obj;
    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepCopy(obj[key]);
      }
    }
    return newObj;
  }
  function _handleDefaultConfig() {
    if (configLoaded)
      return;
    if (zLocalConfig && Object.keys(zLocalConfig).length) {
      config = zLocalConfig;
    }
    if (!config && uni.$zp) {
      config = uni.$zp.config;
    }
    config = config ? Object.keys(config).reduce((result, key) => {
      result[_toCamelCase(key)] = config[key];
      return result;
    }, {}) : null;
    configLoaded = true;
  }
  function _timeFormat(time, textMap) {
    const date2 = new Date(time);
    const currentDate = /* @__PURE__ */ new Date();
    const dateDay = new Date(time).setHours(0, 0, 0, 0);
    const currentDateDay = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0);
    const disTime = dateDay - currentDateDay;
    let dayStr = "";
    const timeStr = _dateTimeFormat(date2);
    if (disTime === 0) {
      dayStr = textMap.today;
    } else if (disTime === -864e5) {
      dayStr = textMap.yesterday;
    } else {
      dayStr = _dateDayFormat(date2, date2.getFullYear() !== currentDate.getFullYear());
    }
    return `${dayStr} ${timeStr}`;
  }
  function _dateDayFormat(date2, showYear = true) {
    const year = date2.getFullYear();
    const month = date2.getMonth() + 1;
    const day = date2.getDate();
    return showYear ? `${year}-${_fullZeroToTwo(month)}-${_fullZeroToTwo(day)}` : `${_fullZeroToTwo(month)}-${_fullZeroToTwo(day)}`;
  }
  function _dateTimeFormat(date2) {
    const hour = date2.getHours();
    const minute = date2.getMinutes();
    return `${_fullZeroToTwo(hour)}:${_fullZeroToTwo(minute)}`;
  }
  function _fullZeroToTwo(str) {
    str = str.toString();
    return str.length === 1 ? "0" + str : str;
  }
  function _toCamelCase(value) {
    return value.replace(/-([a-z])/g, (_, group1) => group1.toUpperCase());
  }
  const u = {
    gc,
    setRefesrherTime,
    getRefesrherFormatTimeByKey,
    getTouch,
    getTouchFromZPaging,
    getParent,
    convertToPx,
    getTime,
    getInstanceId,
    consoleErr,
    delay,
    wait,
    isPromise,
    addUnit,
    deepCopy
  };
  const Enum = {
    // 当前加载类型 0.下拉刷新 1.上拉加载更多
    LoadingType: {
      Refresher: 0,
      LoadingMore: 1
    },
    // 下拉刷新状态 0.默认状态 1.松手立即刷新 2.刷新中 3.刷新结束 4.松手进入二楼
    Refresher: {
      Default: 0,
      ReleaseToRefresh: 1,
      Loading: 2,
      Complete: 3,
      GoF2: 4
    },
    // 底部加载更多状态 0.默认状态 1.加载中 2.没有更多数据 3.加载失败
    More: {
      Default: 0,
      Loading: 1,
      NoMore: 2,
      Fail: 3
    },
    // @query触发来源 0.用户主动下拉刷新 1.通过reload触发 2.通过refresh触发 3.通过滚动到底部加载更多或点击底部加载更多触发
    QueryFrom: {
      UserPullDown: 0,
      Reload: 1,
      Refresh: 2,
      LoadingMore: 3
    },
    // 虚拟列表cell高度模式
    CellHeightMode: {
      // 固定高度
      Fixed: "fixed",
      // 动态高度
      Dynamic: "dynamic"
    },
    // 列表缓存模式
    CacheMode: {
      // 默认模式，只会缓存一次
      Default: "default",
      // 总是缓存，每次列表刷新(下拉刷新、调用reload等)都会更新缓存
      Always: "always"
    }
  };
  const _sfc_main$b = {
    name: "z-paging-refresh",
    data() {
      return {
        R: Enum.Refresher,
        isIos: uni.getSystemInfoSync().platform === "ios",
        refresherTimeText: "",
        zTheme: {
          title: { white: "#efefef", black: "#555555" },
          arrow: { white: zStatic.base64ArrowWhite, black: zStatic.base64Arrow },
          flower: { white: zStatic.base64FlowerWhite, black: zStatic.base64Flower },
          success: { white: zStatic.base64SuccessWhite, black: zStatic.base64Success },
          indicator: { white: "#eeeeee", black: "#777777" }
        }
      };
    },
    props: [
      "status",
      "defaultThemeStyle",
      "defaultText",
      "pullingText",
      "refreshingText",
      "completeText",
      "goF2Text",
      "defaultImg",
      "pullingImg",
      "refreshingImg",
      "completeImg",
      "refreshingAnimated",
      "showUpdateTime",
      "updateTimeKey",
      "imgStyle",
      "titleStyle",
      "updateTimeStyle",
      "updateTimeTextMap",
      "unit"
    ],
    computed: {
      ts() {
        return this.defaultThemeStyle;
      },
      // 当前状态数组
      statusTextArr() {
        this.updateTime();
        return [this.defaultText, this.pullingText, this.refreshingText, this.completeText, this.goF2Text];
      },
      // 当前状态文字
      currentTitle() {
        return this.statusTextArr[this.status] || this.defaultText;
      },
      // 左侧图片class
      leftImageClass() {
        const preSizeClass = `zp-r-left-image-pre-size-${this.unit}`;
        if (this.status === this.R.Complete)
          return preSizeClass;
        return `zp-r-left-image ${preSizeClass} ${this.status === this.R.Default ? "zp-r-arrow-down" : "zp-r-arrow-top"}`;
      },
      // 左侧图片style
      leftImageStyle() {
        const showUpdateTime = this.showUpdateTime;
        const size = showUpdateTime ? u.addUnit(36, this.unit) : u.addUnit(34, this.unit);
        return { width: size, height: size, "margin-right": showUpdateTime ? u.addUnit(20, this.unit) : u.addUnit(9, this.unit) };
      },
      // 左侧图片src
      leftImageSrc() {
        const R = this.R;
        const status = this.status;
        if (status === R.Default) {
          if (!!this.defaultImg)
            return this.defaultImg;
          return this.zTheme.arrow[this.ts];
        } else if (status === R.ReleaseToRefresh) {
          if (!!this.pullingImg)
            return this.pullingImg;
          if (!!this.defaultImg)
            return this.defaultImg;
          return this.zTheme.arrow[this.ts];
        } else if (status === R.Loading) {
          if (!!this.refreshingImg)
            return this.refreshingImg;
          return this.zTheme.flower[this.ts];
        } else if (status === R.Complete) {
          if (!!this.completeImg)
            return this.completeImg;
          return this.zTheme.success[this.ts];
        } else if (status === R.GoF2) {
          return this.zTheme.arrow[this.ts];
        }
        return "";
      },
      // 右侧文字style
      rightTextStyle() {
        let stl = {};
        stl["color"] = this.zTheme.title[this.ts];
        stl["font-size"] = u.addUnit(30, this.unit);
        return stl;
      }
    },
    methods: {
      // 添加单位
      addUnit(value, unit) {
        return u.addUnit(value, unit);
      },
      // 更新下拉刷新时间
      updateTime() {
        if (this.showUpdateTime) {
          this.refresherTimeText = u.getRefesrherFormatTimeByKey(this.updateTimeKey, this.updateTimeTextMap);
        }
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { style: { "height": "100%" } }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass($props.showUpdateTime ? "zp-r-container zp-r-container-padding" : "zp-r-container")
        },
        [
          vue.createElementVNode("view", { class: "zp-r-left" }, [
            vue.createCommentVNode(" 非加载中(继续下拉刷新、松手立即刷新状态图片) "),
            $props.status !== $data.R.Loading ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 0,
              class: vue.normalizeClass($options.leftImageClass),
              style: vue.normalizeStyle([$options.leftImageStyle, $props.imgStyle]),
              src: $options.leftImageSrc
            }, null, 14, ["src"])) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createCommentVNode(" 加载状态图片 "),
                vue.createElementVNode("image", {
                  class: vue.normalizeClass({ "zp-line-loading-image": $props.refreshingAnimated, "zp-r-left-image": true, "zp-r-left-image-pre-size-rpx": $props.unit === "rpx", "zp-r-left-image-pre-size-px": $props.unit === "px" }),
                  style: vue.normalizeStyle([$options.leftImageStyle, $props.imgStyle]),
                  src: $options.leftImageSrc
                }, null, 14, ["src"])
              ],
              2112
              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
            )),
            vue.createCommentVNode(" 在nvue中，加载状态loading使用系统loading ")
          ]),
          vue.createCommentVNode(" 右侧文字内容 "),
          vue.createElementVNode("view", { class: "zp-r-right" }, [
            vue.createCommentVNode(" 右侧下拉刷新状态文字 "),
            vue.createElementVNode(
              "text",
              {
                class: "zp-r-right-text",
                style: vue.normalizeStyle([$options.rightTextStyle, $props.titleStyle])
              },
              vue.toDisplayString($options.currentTitle),
              5
              /* TEXT, STYLE */
            ),
            vue.createCommentVNode(" 右侧下拉刷新时间文字 "),
            $props.showUpdateTime && $data.refresherTimeText.length ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: vue.normalizeClass(["zp-r-right-text", { "zp-r-right-time-text-rpx": $props.unit === "rpx", "zp-r-right-time-text-px": $props.unit === "px" }]),
                style: vue.normalizeStyle([{ color: $data.zTheme.title[$options.ts] }, $props.updateTimeStyle])
              },
              vue.toDisplayString($data.refresherTimeText),
              7
              /* TEXT, CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true)
          ])
        ],
        2
        /* CLASS */
      )
    ]);
  }
  const zPagingRefresh = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-00a16504"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/uni_modules/z-paging/components/z-paging/components/z-paging-refresh.vue"]]);
  const _sfc_main$a = {
    name: "z-paging-load-more",
    data() {
      return {
        M: Enum.More,
        zTheme: {
          title: { white: "#efefef", black: "#a4a4a4" },
          line: { white: "#efefef", black: "#eeeeee" },
          circleBorder: { white: "#aaaaaa", black: "#c8c8c8" },
          circleBorderTop: { white: "#ffffff", black: "#444444" },
          flower: { white: zStatic.base64FlowerWhite, black: zStatic.base64Flower },
          indicator: { white: "#eeeeee", black: "#777777" }
        }
      };
    },
    props: ["zConfig"],
    computed: {
      ts() {
        return this.c.defaultThemeStyle;
      },
      // 底部加载更多配置
      c() {
        return this.zConfig || {};
      },
      // 底部加载更多文字
      ownLoadingMoreText() {
        const statusTextArr = [this.c.defaultText, this.c.loadingText, this.c.noMoreText, this.c.failText];
        return statusTextArr[this.finalStatus];
      },
      // 底部加载更多状态
      finalStatus() {
        if (this.c.defaultAsLoading && this.c.status === this.M.Default)
          return this.M.Loading;
        return this.c.status;
      },
      // 加载更多icon类型
      finalLoadingIconType() {
        return this.c.loadingIconType;
      }
    },
    methods: {
      // 点击了加载更多
      doClick() {
        this.$emit("doClick");
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["zp-l-container", { "zp-l-container-rpx": $options.c.unit === "rpx", "zp-l-container-px": $options.c.unit === "px" }]),
        style: vue.normalizeStyle([$options.c.customStyle]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.doClick && $options.doClick(...args))
      },
      [
        !$options.c.hideContent ? (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          { key: 0 },
          [
            vue.createCommentVNode(" 底部加载更多没有更多数据分割线 "),
            $options.c.showNoMoreLine && $options.finalStatus === $data.M.NoMore ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 0,
                class: vue.normalizeClass({ "zp-l-line-rpx": $options.c.unit === "rpx", "zp-l-line-px": $options.c.unit === "px" }),
                style: vue.normalizeStyle([{ backgroundColor: $data.zTheme.line[$options.ts] }, $options.c.noMoreLineCustomStyle])
              },
              null,
              6
              /* CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 底部加载更多loading "),
            $options.finalStatus === $data.M.Loading && !!$options.c.loadingIconCustomImage ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              src: $options.c.loadingIconCustomImage,
              style: vue.normalizeStyle([$options.c.iconCustomStyle]),
              class: vue.normalizeClass({ "zp-l-line-loading-custom-image": true, "zp-l-line-loading-custom-image-animated": $options.c.loadingAnimated, "zp-l-line-loading-custom-image-rpx": $options.c.unit === "rpx", "zp-l-line-loading-custom-image-px": $options.c.unit === "px" })
            }, null, 14, ["src"])) : vue.createCommentVNode("v-if", true),
            $options.finalStatus === $data.M.Loading && $options.finalLoadingIconType === "flower" && !$options.c.loadingIconCustomImage.length ? (vue.openBlock(), vue.createElementBlock("image", {
              key: 2,
              class: vue.normalizeClass({ "zp-line-loading-image": true, "zp-line-loading-image-rpx": $options.c.unit === "rpx", "zp-line-loading-image-px": $options.c.unit === "px" }),
              style: vue.normalizeStyle([$options.c.iconCustomStyle]),
              src: $data.zTheme.flower[$options.ts]
            }, null, 14, ["src"])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 底部加载更多文字 "),
            $options.finalStatus === $data.M.Loading && $options.finalLoadingIconType === "circle" && !$options.c.loadingIconCustomImage.length ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 3,
                class: vue.normalizeClass(["zp-l-circle-loading-view", { "zp-l-circle-loading-view-rpx": $options.c.unit === "rpx", "zp-l-circle-loading-view-px": $options.c.unit === "px" }]),
                style: vue.normalizeStyle([{ borderColor: $data.zTheme.circleBorder[$options.ts], borderTopColor: $data.zTheme.circleBorderTop[$options.ts] }, $options.c.iconCustomStyle])
              },
              null,
              6
              /* CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true),
            !$options.c.isChat || !$options.c.chatDefaultAsLoading && $options.finalStatus === $data.M.Default || $options.finalStatus === $data.M.Fail ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 4,
                class: vue.normalizeClass({ "zp-l-text-rpx": $options.c.unit === "rpx", "zp-l-text-px": $options.c.unit === "px" }),
                style: vue.normalizeStyle([{ color: $data.zTheme.title[$options.ts] }, $options.c.titleCustomStyle])
              },
              vue.toDisplayString($options.ownLoadingMoreText),
              7
              /* TEXT, CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 底部加载更多没有更多数据分割线 "),
            $options.c.showNoMoreLine && $options.finalStatus === $data.M.NoMore ? (vue.openBlock(), vue.createElementBlock(
              "text",
              {
                key: 5,
                class: vue.normalizeClass({ "zp-l-line-rpx": $options.c.unit === "rpx", "zp-l-line-px": $options.c.unit === "px" }),
                style: vue.normalizeStyle([{ backgroundColor: $data.zTheme.line[$options.ts] }, $options.c.noMoreLineCustomStyle])
              },
              null,
              6
              /* CLASS, STYLE */
            )) : vue.createCommentVNode("v-if", true)
          ],
          64
          /* STABLE_FRAGMENT */
        )) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const zPagingLoadMore = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-8cc5c400"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/uni_modules/z-paging/components/z-paging/components/z-paging-load-more.vue"]]);
  const commonLayoutModule = {
    data() {
      return {
        systemInfo: null,
        cssSafeAreaInsetBottom: -1,
        isReadyDestroy: false
      };
    },
    computed: {
      // 顶部可用距离
      windowTop() {
        if (!this.systemInfo)
          return 0;
        return this.systemInfo.windowTop || 0;
      },
      // 底部安全区域高度
      safeAreaBottom() {
        if (!this.systemInfo)
          return 0;
        let safeAreaBottom = 0;
        safeAreaBottom = this.systemInfo.safeAreaInsets.bottom || 0;
        return safeAreaBottom;
      },
      // 是否是比较老的webview，在一些老的webview中，需要进行一些特殊处理
      isOldWebView() {
        try {
          const systemInfos = uni.getSystemInfoSync().system.split(" ");
          const deviceType = systemInfos[0];
          const version2 = parseInt(systemInfos[1]);
          if (deviceType === "iOS" && version2 <= 10 || deviceType === "Android" && version2 <= 6) {
            return true;
          }
        } catch (e) {
          return false;
        }
        return false;
      },
      // 当前组件的$slots，兼容不同平台
      zSlots() {
        return this.$slots;
      }
    },
    beforeDestroy() {
      this.isReadyDestroy = true;
    },
    unmounted() {
      this.isReadyDestroy = true;
    },
    methods: {
      // 更新fixed模式下z-paging的布局
      updateFixedLayout() {
        this.fixed && this.$nextTick(() => {
          this.systemInfo = uni.getSystemInfoSync();
        });
      },
      // 获取节点尺寸
      _getNodeClientRect(select, inDom = true, scrollOffset = false) {
        if (this.isReadyDestroy) {
          return Promise.resolve(false);
        }
        let res = !!inDom ? uni.createSelectorQuery().in(inDom === true ? this : inDom) : uni.createSelectorQuery();
        scrollOffset ? res.select(select).scrollOffset() : res.select(select).boundingClientRect();
        return new Promise((resolve, reject) => {
          res.exec((data) => {
            resolve(data && data != "" && data != void 0 && data.length ? data : false);
          });
        });
      },
      // 获取slot="left"和slot="right"宽度并且更新布局
      _updateLeftAndRightWidth(targetStyle, parentNodePrefix) {
        this.$nextTick(() => {
          let delayTime = 0;
          setTimeout(() => {
            ["left", "right"].map((position) => {
              this._getNodeClientRect(`.${parentNodePrefix}-${position}`).then((res) => {
                this.$set(targetStyle, position, res ? res[0].width + "px" : "0px");
              });
            });
          }, delayTime);
        });
      },
      // 通过获取css设置的底部安全区域占位view高度设置bottom距离（直接通过systemInfo在部分平台上无法获取到底部安全区域）
      _getCssSafeAreaInsetBottom(success) {
        this._getNodeClientRect(".zp-safe-area-inset-bottom").then((res) => {
          this.cssSafeAreaInsetBottom = res ? res[0].height : -1;
          res && success && success();
        });
      }
    }
  };
  const queryKey = "Query";
  const fetchParamsKey = "FetchParams";
  const fetchResultKey = "FetchResult";
  const language2LocalKey = "Language2Local";
  function handleQuery(callback) {
    _addHandleByKey(queryKey, callback);
    return this;
  }
  function _handleQuery(pageNo, pageSize, from, lastItem) {
    const callback = _getHandleByKey(queryKey);
    return callback ? callback(pageNo, pageSize, from, lastItem) : [pageNo, pageSize, from];
  }
  function handleFetchParams(callback) {
    _addHandleByKey(fetchParamsKey, callback);
    return this;
  }
  function _handleFetchParams(parmas, extraParams) {
    const callback = _getHandleByKey(fetchParamsKey);
    return callback ? callback(parmas, extraParams || {}) : { pageNo: parmas.pageNo, pageSize: parmas.pageSize, ...extraParams || {} };
  }
  function handleFetchResult(callback) {
    _addHandleByKey(fetchResultKey, callback);
    return this;
  }
  function _handleFetchResult(result, paging, params) {
    const callback = _getHandleByKey(fetchResultKey);
    callback && callback(result, paging, params);
    return callback ? true : false;
  }
  function handleLanguage2Local(callback) {
    _addHandleByKey(language2LocalKey, callback);
    return this;
  }
  function _handleLanguage2Local(language2, local) {
    const callback = _getHandleByKey(language2LocalKey);
    return callback ? callback(language2, local) : local;
  }
  function _getApp() {
    return getApp();
  }
  function _hasGlobalData() {
    return _getApp() && _getApp().globalData;
  }
  function _addHandleByKey(key, callback) {
    try {
      setTimeout(function() {
        if (_hasGlobalData()) {
          _getApp().globalData[`zp_handle${key}Callback`] = callback;
        }
      }, 1);
    } catch (_) {
    }
  }
  function _getHandleByKey(key) {
    return _hasGlobalData() ? _getApp().globalData[`zp_handle${key}Callback`] : null;
  }
  const interceptor = {
    handleQuery,
    _handleQuery,
    handleFetchParams,
    _handleFetchParams,
    handleFetchResult,
    _handleFetchResult,
    handleLanguage2Local,
    _handleLanguage2Local
  };
  const dataHandleModule = {
    props: {
      // 自定义初始的pageNo，默认为1
      defaultPageNo: {
        type: [Number, String],
        default: u.gc("defaultPageNo", 1),
        observer: function(newVal) {
          this.pageNo = newVal;
        }
      },
      // 自定义pageSize，默认为10
      defaultPageSize: {
        type: [Number, String],
        default: u.gc("defaultPageSize", 10),
        validator: (value) => {
          if (value <= 0)
            u.consoleErr("default-page-size必须大于0！");
          return value > 0;
        }
      },
      // 为保证数据一致，设置当前tab切换时的标识key，并在complete中传递相同key，若二者不一致，则complete将不会生效
      dataKey: {
        type: [Number, String, Object],
        default: u.gc("dataKey", null)
      },
      // 使用缓存，若开启将自动缓存第一页的数据，默认为否。请注意，因考虑到切换tab时不同tab数据不同的情况，默认仅会缓存组件首次加载时第一次请求到的数据，后续的下拉刷新操作不会更新缓存。
      useCache: {
        type: Boolean,
        default: u.gc("useCache", false)
      },
      // 使用缓存时缓存的key，用于区分不同列表的缓存数据，useCache为true时必须设置，否则缓存无效
      cacheKey: {
        type: String,
        default: u.gc("cacheKey", null)
      },
      // 缓存模式，默认仅会缓存组件首次加载时第一次请求到的数据，可设置为always，即代表总是缓存，每次列表刷新(下拉刷新、调用reload等)都会更新缓存
      cacheMode: {
        type: String,
        default: u.gc("cacheMode", Enum.CacheMode.Default)
      },
      // 自动注入的list名，可自动修改父view(包含ref="paging")中对应name的list值
      autowireListName: {
        type: String,
        default: u.gc("autowireListName", "")
      },
      // 自动注入的query名，可自动调用父view(包含ref="paging")中的query方法
      autowireQueryName: {
        type: String,
        default: u.gc("autowireQueryName", "")
      },
      // 获取分页数据Function，功能与@query类似。若设置了fetch则@query将不再触发
      fetch: {
        type: Function,
        default: null
      },
      // fetch的附加参数，fetch配置后有效
      fetchParams: {
        type: Object,
        default: u.gc("fetchParams", null)
      },
      // z-paging mounted后自动调用reload方法(mounted后自动调用接口)，默认为是
      auto: {
        type: Boolean,
        default: u.gc("auto", true)
      },
      // 用户下拉刷新时是否触发reload方法，默认为是
      reloadWhenRefresh: {
        type: Boolean,
        default: u.gc("reloadWhenRefresh", true)
      },
      // reload时自动滚动到顶部，默认为是
      autoScrollToTopWhenReload: {
        type: Boolean,
        default: u.gc("autoScrollToTopWhenReload", true)
      },
      // reload时立即自动清空原list，默认为是，若立即自动清空，则在reload之后、请求回调之前页面是空白的
      autoCleanListWhenReload: {
        type: Boolean,
        default: u.gc("autoCleanListWhenReload", true)
      },
      // 列表刷新时自动显示下拉刷新view，默认为否
      showRefresherWhenReload: {
        type: Boolean,
        default: u.gc("showRefresherWhenReload", false)
      },
      // 列表刷新时自动显示加载更多view，且为加载中状态，默认为否
      showLoadingMoreWhenReload: {
        type: Boolean,
        default: u.gc("showLoadingMoreWhenReload", false)
      },
      // 组件created时立即触发reload(可解决一些情况下先看到页面再看到loading的问题)，auto为true时有效。为否时将在mounted+nextTick后触发reload，默认为否
      createdReload: {
        type: Boolean,
        default: u.gc("createdReload", false)
      },
      // 本地分页时上拉加载更多延迟时间，单位为毫秒，默认200毫秒
      localPagingLoadingTime: {
        type: [Number, String],
        default: u.gc("localPagingLoadingTime", 200)
      },
      // 自动拼接complete中传过来的数组(使用聊天记录模式时无效)
      concat: {
        type: Boolean,
        default: u.gc("concat", true)
      },
      // 请求失败是否触发reject，默认为是
      callNetworkReject: {
        type: Boolean,
        default: u.gc("callNetworkReject", true)
      },
      // 父组件v-model所绑定的list的值
      value: {
        type: Array,
        default: function() {
          return [];
        }
      },
      modelValue: {
        type: Array,
        default: function() {
          return [];
        }
      }
    },
    data() {
      return {
        currentData: [],
        totalData: [],
        realTotalData: [],
        totalLocalPagingList: [],
        dataPromiseResultMap: {
          reload: null,
          complete: null,
          localPaging: null
        },
        isSettingCacheList: false,
        pageNo: 1,
        currentRefreshPageSize: 0,
        isLocalPaging: false,
        isAddedData: false,
        isTotalChangeFromAddData: false,
        privateConcat: true,
        myParentQuery: -1,
        firstPageLoaded: false,
        pagingLoaded: false,
        loaded: false,
        isUserReload: true,
        fromEmptyViewReload: false,
        queryFrom: "",
        listRendering: false,
        isHandlingRefreshToPage: false,
        isFirstPageAndNoMore: false,
        totalDataChangeThrow: true
      };
    },
    computed: {
      pageSize() {
        return this.defaultPageSize;
      },
      finalConcat() {
        return this.concat && this.privateConcat;
      },
      finalUseCache() {
        if (this.useCache && !this.cacheKey) {
          u.consoleErr("use-cache为true时，必须设置cache-key，否则缓存无效！");
        }
        return this.useCache && !!this.cacheKey;
      },
      finalCacheKey() {
        return this.cacheKey ? `${c.cachePrefixKey}-${this.cacheKey}` : null;
      },
      isFirstPage() {
        return this.pageNo === this.defaultPageNo;
      }
    },
    watch: {
      totalData(newVal, oldVal) {
        this._totalDataChange(newVal, oldVal, this.totalDataChangeThrow);
        this.totalDataChangeThrow = true;
      },
      currentData(newVal, oldVal) {
        this._currentDataChange(newVal, oldVal);
      },
      useChatRecordMode(newVal, oldVal) {
        if (newVal) {
          this.nLoadingMoreFixedHeight = false;
        }
      },
      value: {
        handler(newVal) {
          if (newVal !== this.totalData) {
            this.totalDataChangeThrow = false;
            this.totalData = newVal;
          }
        },
        immediate: true
      },
      modelValue: {
        handler(newVal) {
          if (newVal !== this.totalData) {
            this.totalDataChangeThrow = false;
            this.totalData = newVal;
          }
        },
        immediate: true
      }
    },
    methods: {
      // 请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为是否成功(默认为是）
      complete(data, success = true) {
        this.customNoMore = -1;
        return this.addData(data, success);
      },
      //【保证数据一致】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为dataKey，需与:data-key绑定的一致，第三个参数为是否成功(默认为是）
      completeByKey(data, dataKey = null, success = true) {
        if (dataKey !== null && this.dataKey !== null && dataKey !== this.dataKey) {
          this.isFirstPage && this.endRefresh();
          return new Promise((resolve) => resolve());
        }
        this.customNoMore = -1;
        return this.addData(data, success);
      },
      //【通过total判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为total(列表总数)，第三个参数为是否成功(默认为是）
      completeByTotal(data, total, success = true) {
        if (total == "undefined") {
          this.customNoMore = -1;
        } else {
          const dataTypeRes = this._checkDataType(data, success, false);
          data = dataTypeRes.data;
          success = dataTypeRes.success;
          if (total >= 0 && success) {
            return new Promise((resolve, reject) => {
              this.$nextTick(() => {
                let nomore = false;
                const realTotalDataCount = this.pageNo == this.defaultPageNo ? 0 : this.realTotalData.length;
                const dataLength = this.privateConcat ? data.length : 0;
                let exceedCount = realTotalDataCount + dataLength - total;
                if (exceedCount >= 0) {
                  nomore = true;
                  exceedCount = this.defaultPageSize - exceedCount;
                  if (this.privateConcat && exceedCount > 0 && exceedCount < data.length) {
                    data = data.splice(0, exceedCount);
                  }
                }
                this.completeByNoMore(data, nomore, success).then((res) => resolve(res)).catch(() => reject());
              });
            });
          }
        }
        return this.addData(data, success);
      },
      //【自行判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，第一个参数为请求结果数组，第二个参数为是否没有更多数据，第三个参数为是否成功(默认是是）
      completeByNoMore(data, nomore, success = true) {
        if (nomore != "undefined") {
          this.customNoMore = nomore == true ? 1 : 0;
        }
        return this.addData(data, success);
      },
      // 请求结束且请求失败时调用，支持传入请求失败原因
      completeByError(errorMsg) {
        this.customerEmptyViewErrorText = errorMsg;
        return this.complete(false);
      },
      // 与上方complete方法功能一致，新版本中设置服务端回调数组请使用complete方法
      addData(data, success = true) {
        if (!this.fromCompleteEmit) {
          this.disabledCompleteEmit = true;
          this.fromCompleteEmit = false;
        }
        const currentTimeStamp = u.getTime();
        const disTime = currentTimeStamp - this.requestTimeStamp;
        let minDelay = this.minDelay;
        if (this.isFirstPage && this.finalShowRefresherWhenReload) {
          minDelay = Math.max(400, minDelay);
        }
        const addDataDalay = this.requestTimeStamp > 0 && disTime < minDelay ? minDelay - disTime : 0;
        this.$nextTick(() => {
          u.delay(() => {
            this._addData(data, success, false);
          }, this.delay > 0 ? this.delay : addDataDalay);
        });
        return new Promise((resolve, reject) => {
          this.dataPromiseResultMap.complete = { resolve, reject };
        });
      },
      // 从顶部添加数据，不会影响分页的pageNo和pageSize
      addDataFromTop(data, toTop = true, toTopWithAnimate = true) {
        let addFromTop = !this.isChatRecordModeAndNotInversion;
        data = Object.prototype.toString.call(data) !== "[object Array]" ? [data] : addFromTop ? data.reverse() : data;
        this.finalUseVirtualList && this._setCellIndex(data, "top");
        this.totalData = addFromTop ? [...data, ...this.totalData] : [...this.totalData, ...data];
        if (toTop) {
          u.delay(() => this.useChatRecordMode ? this.scrollToBottom(toTopWithAnimate) : this.scrollToTop(toTopWithAnimate));
        }
      },
      // 重新设置列表数据，调用此方法不会影响pageNo和pageSize，也不会触发请求。适用场景：当需要删除列表中某一项时，将删除对应项后的数组通过此方法传递给z-paging。(当出现类似的需要修改列表数组的场景时，请使用此方法，请勿直接修改page中:list.sync绑定的数组)
      resetTotalData(data) {
        this.isTotalChangeFromAddData = true;
        data = Object.prototype.toString.call(data) !== "[object Array]" ? [data] : data;
        this.totalData = data;
      },
      // 设置本地分页数据，请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging作分页处理（若调用了此方法，则上拉加载更多时内部会自动分页，不会触发@query所绑定的事件）
      setLocalPaging(data, success = true) {
        this.isLocalPaging = true;
        this.$nextTick(() => {
          this._addData(data, success, true);
        });
        return new Promise((resolve, reject) => {
          this.dataPromiseResultMap.localPaging = { resolve, reject };
        });
      },
      // 重新加载分页数据，pageNo会恢复为默认值，相当于下拉刷新的效果(animate为true时会展示下拉刷新动画，默认为false)
      reload(animate = this.showRefresherWhenReload) {
        if (animate) {
          this.privateShowRefresherWhenReload = animate;
          this.isUserPullDown = true;
        }
        if (!this.showLoadingMoreWhenReload) {
          this.listRendering = true;
        }
        this.$nextTick(() => {
          this._preReload(animate, false);
        });
        return new Promise((resolve, reject) => {
          this.dataPromiseResultMap.reload = { resolve, reject };
        });
      },
      // 刷新列表数据，pageNo和pageSize不会重置，列表数据会重新从服务端获取。必须保证@query绑定的方法中的pageNo和pageSize和传给服务端的一致
      refresh() {
        return this._handleRefreshWithDisPageNo(this.pageNo - this.defaultPageNo + 1);
      },
      // 刷新列表数据至指定页，例如pageNo=5时则代表刷新列表至第5页，此时pageNo会变为5，列表会展示前5页的数据。必须保证@query绑定的方法中的pageNo和pageSize和传给服务端的一致
      refreshToPage(pageNo) {
        this.isHandlingRefreshToPage = true;
        return this._handleRefreshWithDisPageNo(pageNo + this.defaultPageNo - 1);
      },
      // 手动更新列表缓存数据，将自动截取v-model绑定的list中的前pageSize条覆盖缓存，请确保在list数据更新到预期结果后再调用此方法
      updateCache() {
        if (this.finalUseCache && this.totalData.length) {
          this._saveLocalCache(this.totalData.slice(0, Math.min(this.totalData.length, this.pageSize)));
        }
      },
      // 清空分页数据
      clean() {
        this._reload(true);
        this._addData([], true, false);
      },
      // 清空分页数据
      clear() {
        this.clean();
      },
      // reload之前的一些处理
      _preReload(animate = this.showRefresherWhenReload, isFromMounted = true, retryCount = 0) {
        const showRefresher = this.finalRefresherEnabled && this.useCustomRefresher;
        if (this.customRefresherHeight === -1 && showRefresher) {
          u.delay(() => {
            retryCount++;
            if (retryCount % 10 === 0) {
              this._updateCustomRefresherHeight();
            }
            this._preReload(animate, isFromMounted, retryCount);
          }, c.delayTime / 2);
          return;
        }
        this.isUserReload = true;
        this.loadingType = Enum.LoadingType.Refresher;
        if (animate) {
          this.privateShowRefresherWhenReload = animate;
          if (this.useCustomRefresher) {
            this._doRefresherRefreshAnimate();
          } else {
            this.refresherTriggered = true;
          }
        } else {
          this._refresherEnd(false, false, false, false);
        }
        this._reload(false, isFromMounted);
      },
      // 重新加载分页数据
      _reload(isClean = false, isFromMounted = false, isUserPullDown = false) {
        this.isAddedData = false;
        this.insideOfPaging = -1;
        this.cacheScrollNodeHeight = -1;
        this.pageNo = this.defaultPageNo;
        this._cleanRefresherEndTimeout();
        !this.privateShowRefresherWhenReload && !isClean && this._startLoading(true);
        this.firstPageLoaded = true;
        this.isTotalChangeFromAddData = false;
        if (!this.isSettingCacheList) {
          this.totalData = [];
        }
        if (!isClean) {
          this._emitQuery(this.pageNo, this.defaultPageSize, isUserPullDown ? Enum.QueryFrom.UserPullDown : Enum.QueryFrom.Reload);
          let delay2 = 0;
          u.delay(this._callMyParentQuery, delay2);
          if (!isFromMounted && this.autoScrollToTopWhenReload) {
            this._scrollToTop(false);
          }
        }
      },
      // 处理服务端返回的数组
      _addData(data, success, isLocal) {
        this.isAddedData = true;
        this.fromEmptyViewReload = false;
        this.isTotalChangeFromAddData = true;
        this.refresherTriggered = false;
        this._endSystemLoadingAndRefresh();
        const tempIsUserPullDown = this.isUserPullDown;
        if (this.showRefresherUpdateTime && this.isFirstPage) {
          u.setRefesrherTime(u.getTime(), this.refresherUpdateTimeKey);
          this.$refs.refresh && this.$refs.refresh.updateTime();
        }
        if (!isLocal && tempIsUserPullDown && this.isFirstPage) {
          this.isUserPullDown = false;
        }
        if (!this.isFirstPage) {
          this.listRendering = true;
          this.$nextTick(() => {
            u.delay(() => this.listRendering = false);
          });
        } else {
          this.listRendering = false;
        }
        let dataTypeRes = this._checkDataType(data, success, isLocal);
        data = dataTypeRes.data;
        success = dataTypeRes.success;
        let delayTime = c.delayTime;
        if (this.useChatRecordMode)
          delayTime = 0;
        this.loadingForNow = false;
        u.delay(() => {
          this.pagingLoaded = true;
          this.$nextTick(() => {
            !isLocal && this._refresherEnd(delayTime > 0, true, tempIsUserPullDown);
          });
        });
        if (this.isFirstPage) {
          this.isLoadFailed = !success;
          this.$emit("isLoadFailedChange", this.isLoadFailed);
          if (this.finalUseCache && success && (this.cacheMode === Enum.CacheMode.Always ? true : this.isSettingCacheList)) {
            this._saveLocalCache(data);
          }
        }
        this.isSettingCacheList = false;
        if (success) {
          if (!(this.privateConcat === false && !this.isHandlingRefreshToPage && this.loadingStatus === Enum.More.NoMore)) {
            this.loadingStatus = Enum.More.Default;
          }
          if (isLocal) {
            this.totalLocalPagingList = data;
            const localPageNo = this.defaultPageNo;
            const localPageSize = this.queryFrom !== Enum.QueryFrom.Refresh ? this.defaultPageSize : this.currentRefreshPageSize;
            this._localPagingQueryList(localPageNo, localPageSize, 0, (res) => {
              this.completeByTotal(res, this.totalLocalPagingList.length);
            });
          } else {
            let dataChangeDelayTime = 0;
            u.delay(() => {
              this._currentDataChange(data, this.currentData);
              this._callDataPromise(true, this.totalData);
            }, dataChangeDelayTime);
          }
          if (this.isHandlingRefreshToPage) {
            this.isHandlingRefreshToPage = false;
            this.pageNo = this.defaultPageNo + Math.ceil(data.length / this.pageSize) - 1;
            if (data.length % this.pageSize !== 0) {
              this.customNoMore = 1;
            }
          }
        } else {
          this._currentDataChange(data, this.currentData);
          this._callDataPromise(false);
          this.loadingStatus = Enum.More.Fail;
          this.isHandlingRefreshToPage = false;
          if (this.loadingType === Enum.LoadingType.LoadingMore) {
            this.pageNo--;
          }
        }
      },
      // 所有数据改变时调用
      _totalDataChange(newVal, oldVal, eventThrow = true) {
        if ((!this.isUserReload || !this.autoCleanListWhenReload) && this.firstPageLoaded && !newVal.length && oldVal.length) {
          return;
        }
        this._doCheckScrollViewShouldFullHeight(newVal);
        if (!this.realTotalData.length && !newVal.length) {
          eventThrow = false;
        }
        this.realTotalData = newVal;
        if (eventThrow) {
          this.$emit("input", newVal);
          this.$emit("update:modelValue", newVal);
          this.$emit("update:list", newVal);
          this.$emit("listChange", newVal);
          this._callMyParentList(newVal);
        }
        this.firstPageLoaded = false;
        this.isTotalChangeFromAddData = false;
        this.$nextTick(() => {
          u.delay(() => {
            this._getNodeClientRect(".zp-paging-container-content").then((res) => {
              res && this.$emit("contentHeightChanged", res[0].height);
            });
          }, c.delayTime * (this.isIos ? 1 : 3));
        });
      },
      // 当前数据改变时调用
      _currentDataChange(newVal, oldVal) {
        newVal = [...newVal];
        this.finalUseVirtualList && this._setCellIndex(newVal, "bottom");
        if (this.isFirstPage && this.finalConcat) {
          this.totalData = [];
        }
        if (this.customNoMore !== -1) {
          if (this.customNoMore === 1 || this.customNoMore !== 0 && !newVal.length) {
            this.loadingStatus = Enum.More.NoMore;
          }
        } else {
          if (!newVal.length || newVal.length && newVal.length < this.defaultPageSize) {
            this.loadingStatus = Enum.More.NoMore;
          }
        }
        if (!this.totalData.length) {
          this.totalData = newVal;
        } else {
          if (this.finalConcat) {
            this.oldScrollTop;
            this.totalData = [...this.totalData, ...newVal];
          } else {
            this.totalData = newVal;
          }
        }
        this.privateConcat = true;
      },
      // 根据pageNo处理refresh操作
      _handleRefreshWithDisPageNo(pageNo) {
        if (!this.isHandlingRefreshToPage && !this.realTotalData.length)
          return this.reload();
        if (pageNo >= 1) {
          this.loading = true;
          this.privateConcat = false;
          const totalPageSize = pageNo * this.pageSize;
          this.currentRefreshPageSize = totalPageSize;
          if (this.isLocalPaging && this.isHandlingRefreshToPage) {
            this._localPagingQueryList(this.defaultPageNo, totalPageSize, 0, (res) => {
              this.complete(res);
            });
          } else {
            this._emitQuery(this.defaultPageNo, totalPageSize, Enum.QueryFrom.Refresh);
            this._callMyParentQuery(this.defaultPageNo, totalPageSize);
          }
        }
        return new Promise((resolve, reject) => {
          this.dataPromiseResultMap.reload = { resolve, reject };
        });
      },
      // 本地分页请求
      _localPagingQueryList(pageNo, pageSize, localPagingLoadingTime, callback) {
        pageNo = Math.max(1, pageNo);
        pageSize = Math.max(1, pageSize);
        const totalPagingList = [...this.totalLocalPagingList];
        const pageNoIndex = (pageNo - 1) * pageSize;
        const finalPageNoIndex = Math.min(totalPagingList.length, pageNoIndex + pageSize);
        const resultPagingList = totalPagingList.splice(pageNoIndex, finalPageNoIndex - pageNoIndex);
        u.delay(() => callback(resultPagingList), localPagingLoadingTime);
      },
      // 存储列表缓存数据
      _saveLocalCache(data) {
        uni.setStorageSync(this.finalCacheKey, data);
      },
      // 通过缓存数据填充列表数据
      _setListByLocalCache() {
        this.totalData = uni.getStorageSync(this.finalCacheKey) || [];
        this.isSettingCacheList = true;
      },
      // 修改父view的list
      _callMyParentList(newVal) {
        if (this.autowireListName.length) {
          const myParent = u.getParent(this.$parent);
          if (myParent && myParent[this.autowireListName]) {
            myParent[this.autowireListName] = newVal;
          }
        }
      },
      // 调用父view的query
      _callMyParentQuery(customPageNo = 0, customPageSize = 0) {
        if (this.autowireQueryName) {
          if (this.myParentQuery === -1) {
            const myParent = u.getParent(this.$parent);
            if (myParent && myParent[this.autowireQueryName]) {
              this.myParentQuery = myParent[this.autowireQueryName];
            }
          }
          if (this.myParentQuery !== -1) {
            customPageSize > 0 ? this.myParentQuery(customPageNo, customPageSize) : this.myParentQuery(this.pageNo, this.defaultPageSize);
          }
        }
      },
      // emit query事件
      _emitQuery(pageNo, pageSize, from) {
        this.queryFrom = from;
        this.requestTimeStamp = u.getTime();
        const [lastItem] = this.realTotalData.slice(-1);
        if (this.fetch) {
          const fetchParams = interceptor._handleFetchParams({ pageNo, pageSize, from, lastItem: lastItem || null }, this.fetchParams);
          const fetchResult = this.fetch(fetchParams);
          if (!interceptor._handleFetchResult(fetchResult, this, fetchParams)) {
            u.isPromise(fetchResult) ? fetchResult.then((res) => {
              this.complete(res);
            }).catch((err) => {
              this.complete(false);
            }) : this.complete(fetchResult);
          }
        } else {
          this.$emit("query", ...interceptor._handleQuery(pageNo, pageSize, from, lastItem || null));
        }
      },
      // 触发数据改变promise
      _callDataPromise(success, totalList) {
        for (const key in this.dataPromiseResultMap) {
          const obj = this.dataPromiseResultMap[key];
          if (!obj)
            continue;
          success ? obj.resolve({ totalList, noMore: this.loadingStatus === Enum.More.NoMore }) : this.callNetworkReject && obj.reject(`z-paging-${key}-error`);
        }
      },
      // 检查complete data的类型
      _checkDataType(data, success, isLocal) {
        const dataType = Object.prototype.toString.call(data);
        if (dataType === "[object Boolean]") {
          success = data;
          data = [];
        } else if (dataType !== "[object Array]") {
          data = [];
          if (dataType !== "[object Undefined]" && dataType !== "[object Null]") {
            u.consoleErr(`${isLocal ? "setLocalPaging" : "complete"}参数类型不正确，第一个参数类型必须为Array!`);
          }
        }
        return { data, success };
      }
    }
  };
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index2 = 0;
    const mode = Array.isArray(values) ? "list" : isObject$1(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens.length) {
      const token = tokens[index2];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index2++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index2 = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index2, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "zp.refresher.default": "Pull down to refresh",
    "zp.refresher.pulling": "Release to refresh",
    "zp.refresher.refreshing": "Refreshing...",
    "zp.refresher.complete": "Refresh succeeded",
    "zp.refresher.f2": "Refresh to enter 2f",
    "zp.loadingMore.default": "Click to load more",
    "zp.loadingMore.loading": "Loading...",
    "zp.loadingMore.noMore": "No more data",
    "zp.loadingMore.fail": "Load failed,click to reload",
    "zp.emptyView.title": "No data",
    "zp.emptyView.reload": "Reload",
    "zp.emptyView.error": "Sorry,load failed",
    "zp.refresherUpdateTime.title": "Last update: ",
    "zp.refresherUpdateTime.none": "None",
    "zp.refresherUpdateTime.today": "Today",
    "zp.refresherUpdateTime.yesterday": "Yesterday",
    "zp.systemLoading.title": "Loading..."
  };
  const zhHans = {
    "zp.refresher.default": "继续下拉刷新",
    "zp.refresher.pulling": "松开立即刷新",
    "zp.refresher.refreshing": "正在刷新...",
    "zp.refresher.complete": "刷新成功",
    "zp.refresher.f2": "松手进入二楼",
    "zp.loadingMore.default": "点击加载更多",
    "zp.loadingMore.loading": "正在加载...",
    "zp.loadingMore.noMore": "没有更多了",
    "zp.loadingMore.fail": "加载失败，点击重新加载",
    "zp.emptyView.title": "没有数据哦~",
    "zp.emptyView.reload": "重新加载",
    "zp.emptyView.error": "很抱歉，加载失败",
    "zp.refresherUpdateTime.title": "最后更新：",
    "zp.refresherUpdateTime.none": "无",
    "zp.refresherUpdateTime.today": "今天",
    "zp.refresherUpdateTime.yesterday": "昨天",
    "zp.systemLoading.title": "加载中..."
  };
  const zhHant = {
    "zp.refresher.default": "繼續下拉重繪",
    "zp.refresher.pulling": "鬆開立即重繪",
    "zp.refresher.refreshing": "正在重繪...",
    "zp.refresher.complete": "重繪成功",
    "zp.refresher.f2": "鬆手進入二樓",
    "zp.loadingMore.default": "點擊加載更多",
    "zp.loadingMore.loading": "正在加載...",
    "zp.loadingMore.noMore": "沒有更多了",
    "zp.loadingMore.fail": "加載失敗，點擊重新加載",
    "zp.emptyView.title": "沒有數據哦~",
    "zp.emptyView.reload": "重新加載",
    "zp.emptyView.error": "很抱歉，加載失敗",
    "zp.refresherUpdateTime.title": "最後更新：",
    "zp.refresherUpdateTime.none": "無",
    "zp.refresherUpdateTime.today": "今天",
    "zp.refresherUpdateTime.yesterday": "昨天",
    "zp.systemLoading.title": "加載中..."
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t } = initVueI18n(messages);
  const language = uni.getSystemInfoSync().language;
  const i18nModule = {
    data() {
      return {
        language
      };
    },
    computed: {
      finalLanguage() {
        try {
          const local = uni.getLocale();
          const language2 = this.language;
          return local === "auto" ? interceptor._handleLanguage2Local(language2, this._language2Local(language2)) : local;
        } catch (e) {
          return "zh-Hans";
        }
      },
      // 最终的下拉刷新默认状态的文字
      finalRefresherDefaultText() {
        return this._getI18nText("zp.refresher.default", this.refresherDefaultText);
      },
      // 最终的下拉刷新下拉中的文字
      finalRefresherPullingText() {
        return this._getI18nText("zp.refresher.pulling", this.refresherPullingText);
      },
      // 最终的下拉刷新中文字
      finalRefresherRefreshingText() {
        return this._getI18nText("zp.refresher.refreshing", this.refresherRefreshingText);
      },
      // 最终的下拉刷新完成文字
      finalRefresherCompleteText() {
        return this._getI18nText("zp.refresher.complete", this.refresherCompleteText);
      },
      // 最终的下拉刷新上次更新时间文字
      finalRefresherUpdateTimeTextMap() {
        return {
          title: t("zp.refresherUpdateTime.title"),
          none: t("zp.refresherUpdateTime.none"),
          today: t("zp.refresherUpdateTime.today"),
          yesterday: t("zp.refresherUpdateTime.yesterday")
        };
      },
      // 最终的继续下拉进入二楼文字
      finalRefresherGoF2Text() {
        return this._getI18nText("zp.refresher.f2", this.refresherGoF2Text);
      },
      // 最终的底部加载更多默认状态文字
      finalLoadingMoreDefaultText() {
        return this._getI18nText("zp.loadingMore.default", this.loadingMoreDefaultText);
      },
      // 最终的底部加载更多加载中文字
      finalLoadingMoreLoadingText() {
        return this._getI18nText("zp.loadingMore.loading", this.loadingMoreLoadingText);
      },
      // 最终的底部加载更多没有更多数据文字
      finalLoadingMoreNoMoreText() {
        return this._getI18nText("zp.loadingMore.noMore", this.loadingMoreNoMoreText);
      },
      // 最终的底部加载更多加载失败文字
      finalLoadingMoreFailText() {
        return this._getI18nText("zp.loadingMore.fail", this.loadingMoreFailText);
      },
      // 最终的空数据图title
      finalEmptyViewText() {
        return this.isLoadFailed ? this.finalEmptyViewErrorText : this._getI18nText("zp.emptyView.title", this.emptyViewText);
      },
      // 最终的空数据图reload title
      finalEmptyViewReloadText() {
        return this._getI18nText("zp.emptyView.reload", this.emptyViewReloadText);
      },
      // 最终的空数据图加载失败文字
      finalEmptyViewErrorText() {
        return this.customerEmptyViewErrorText || this._getI18nText("zp.emptyView.error", this.emptyViewErrorText);
      },
      // 最终的系统loading title
      finalSystemLoadingText() {
        return this._getI18nText("zp.systemLoading.title", this.systemLoadingText);
      }
    },
    methods: {
      // 获取当前z-paging的语言
      getLanguage() {
        return this.finalLanguage;
      },
      // 获取国际化转换后的文本
      _getI18nText(key, value) {
        const dataType = Object.prototype.toString.call(value);
        if (dataType === "[object Object]") {
          const nextValue = value[this.finalLanguage];
          if (nextValue)
            return nextValue;
        } else if (dataType === "[object String]") {
          return value;
        }
        return t(key);
      },
      // 系统language转i18n local
      _language2Local(language2) {
        const formatedLanguage = language2.toLowerCase().replace(new RegExp("_", ""), "-");
        if (formatedLanguage.indexOf("zh") !== -1) {
          if (formatedLanguage === "zh" || formatedLanguage === "zh-cn" || formatedLanguage.indexOf("zh-hans") !== -1) {
            return "zh-Hans";
          }
          return "zh-Hant";
        }
        if (formatedLanguage.indexOf("en") !== -1)
          return "en";
        return language2;
      }
    }
  };
  const nvueModule = {
    props: {},
    data() {
      return {
        nRefresherLoading: false,
        nListIsDragging: false,
        nShowBottom: true,
        nFixFreezing: false,
        nShowRefresherReveal: false,
        nLoadingMoreFixedHeight: false,
        nShowRefresherRevealHeight: 0,
        nOldShowRefresherRevealHeight: -1,
        nRefresherWidth: uni.upx2px(750),
        nF2Opacity: 0
      };
    },
    computed: {},
    mounted() {
    },
    methods: {}
  };
  const emptyModule = {
    props: {
      // 是否强制隐藏空数据图，默认为否
      hideEmptyView: {
        type: Boolean,
        default: u.gc("hideEmptyView", false)
      },
      // 空数据图描述文字，默认为“没有数据哦~”
      emptyViewText: {
        type: [String, Object],
        default: u.gc("emptyViewText", null)
      },
      // 是否显示空数据图重新加载按钮(无数据时)，默认为否
      showEmptyViewReload: {
        type: Boolean,
        default: u.gc("showEmptyViewReload", false)
      },
      // 加载失败时是否显示空数据图重新加载按钮，默认为是
      showEmptyViewReloadWhenError: {
        type: Boolean,
        default: u.gc("showEmptyViewReloadWhenError", true)
      },
      // 空数据图点击重新加载文字，默认为“重新加载”
      emptyViewReloadText: {
        type: [String, Object],
        default: u.gc("emptyViewReloadText", null)
      },
      // 空数据图图片，默认使用z-paging内置的图片
      emptyViewImg: {
        type: String,
        default: u.gc("emptyViewImg", "")
      },
      // 空数据图“加载失败”描述文字，默认为“很抱歉，加载失败”
      emptyViewErrorText: {
        type: [String, Object],
        default: u.gc("emptyViewErrorText", null)
      },
      // 空数据图“加载失败”图片，默认使用z-paging内置的图片
      emptyViewErrorImg: {
        type: String,
        default: u.gc("emptyViewErrorImg", "")
      },
      // 空数据图样式
      emptyViewStyle: {
        type: Object,
        default: u.gc("emptyViewStyle", {})
      },
      // 空数据图容器样式
      emptyViewSuperStyle: {
        type: Object,
        default: u.gc("emptyViewSuperStyle", {})
      },
      // 空数据图img样式
      emptyViewImgStyle: {
        type: Object,
        default: u.gc("emptyViewImgStyle", {})
      },
      // 空数据图描述文字样式
      emptyViewTitleStyle: {
        type: Object,
        default: u.gc("emptyViewTitleStyle", {})
      },
      // 空数据图重新加载按钮样式
      emptyViewReloadStyle: {
        type: Object,
        default: u.gc("emptyViewReloadStyle", {})
      },
      // 空数据图片是否铺满z-paging，默认为否，即填充满z-paging内列表(滚动区域)部分。若设置为否，则为填铺满整个z-paging
      emptyViewFixed: {
        type: Boolean,
        default: u.gc("emptyViewFixed", false)
      },
      // 空数据图片是否垂直居中，默认为是，若设置为否即为从空数据容器顶部开始显示。emptyViewFixed为false时有效
      emptyViewCenter: {
        type: Boolean,
        default: u.gc("emptyViewCenter", true)
      },
      // 加载中时是否自动隐藏空数据图，默认为是
      autoHideEmptyViewWhenLoading: {
        type: Boolean,
        default: u.gc("autoHideEmptyViewWhenLoading", true)
      },
      // 用户下拉列表触发下拉刷新加载中时是否自动隐藏空数据图，默认为是
      autoHideEmptyViewWhenPull: {
        type: Boolean,
        default: u.gc("autoHideEmptyViewWhenPull", true)
      },
      // 空数据view的z-index，默认为9
      emptyViewZIndex: {
        type: Number,
        default: u.gc("emptyViewZIndex", 9)
      }
    },
    data() {
      return {
        customerEmptyViewErrorText: ""
      };
    },
    computed: {
      finalEmptyViewImg() {
        return this.isLoadFailed ? this.emptyViewErrorImg : this.emptyViewImg;
      },
      finalShowEmptyViewReload() {
        return this.isLoadFailed ? this.showEmptyViewReloadWhenError : this.showEmptyViewReload;
      },
      // 是否展示空数据图
      showEmpty() {
        if (this.refresherOnly || this.hideEmptyView || this.realTotalData.length)
          return false;
        if (this.autoHideEmptyViewWhenLoading) {
          if (this.isAddedData && !this.firstPageLoaded && !this.loading)
            return true;
        } else {
          return true;
        }
        return !this.autoHideEmptyViewWhenPull && !this.isUserReload;
      }
    },
    methods: {
      // 点击了空数据view重新加载按钮
      _emptyViewReload() {
        let callbacked = false;
        this.$emit("emptyViewReload", (reload) => {
          if (reload === void 0 || reload === true) {
            this.fromEmptyViewReload = true;
            this.reload().catch(() => {
            });
          }
          callbacked = true;
        });
        this.$nextTick(() => {
          if (!callbacked) {
            this.fromEmptyViewReload = true;
            this.reload().catch(() => {
            });
          }
        });
      },
      // 点击了空数据view
      _emptyViewClick() {
        this.$emit("emptyViewClick");
      }
    }
  };
  const refresherModule = {
    props: {
      // 下拉刷新的主题样式，支持black，white，默认black
      refresherThemeStyle: {
        type: String,
        default: u.gc("refresherThemeStyle", "")
      },
      // 自定义下拉刷新中左侧图标的样式
      refresherImgStyle: {
        type: Object,
        default: u.gc("refresherImgStyle", {})
      },
      // 自定义下拉刷新中右侧状态描述文字的样式
      refresherTitleStyle: {
        type: Object,
        default: u.gc("refresherTitleStyle", {})
      },
      // 自定义下拉刷新中右侧最后更新时间文字的样式(show-refresher-update-time为true时有效)
      refresherUpdateTimeStyle: {
        type: Object,
        default: u.gc("refresherUpdateTimeStyle", {})
      },
      // 在微信小程序和QQ小程序中，是否实时监听下拉刷新中进度，默认为否
      watchRefresherTouchmove: {
        type: Boolean,
        default: u.gc("watchRefresherTouchmove", false)
      },
      // 底部加载更多的主题样式，支持black，white，默认black
      loadingMoreThemeStyle: {
        type: String,
        default: u.gc("loadingMoreThemeStyle", "")
      },
      // 是否只使用下拉刷新，设置为true后将关闭mounted自动请求数据、关闭滚动到底部加载更多，强制隐藏空数据图。默认为否
      refresherOnly: {
        type: Boolean,
        default: u.gc("refresherOnly", false)
      },
      // 自定义下拉刷新默认状态下回弹动画时间，单位为毫秒，默认为100毫秒，nvue无效
      refresherDefaultDuration: {
        type: [Number, String],
        default: u.gc("refresherDefaultDuration", 100)
      },
      // 自定义下拉刷新结束以后延迟回弹的时间，单位为毫秒，默认为0
      refresherCompleteDelay: {
        type: [Number, String],
        default: u.gc("refresherCompleteDelay", 0)
      },
      // 自定义下拉刷新结束回弹动画时间，单位为毫秒，默认为300毫秒(refresherEndBounceEnabled为false时，refresherCompleteDuration为设定值的1/3)，nvue无效
      refresherCompleteDuration: {
        type: [Number, String],
        default: u.gc("refresherCompleteDuration", 300)
      },
      // 自定义下拉刷新中是否允许列表滚动，默认为是
      refresherRefreshingScrollable: {
        type: Boolean,
        default: u.gc("refresherRefreshingScrollable", true)
      },
      // 自定义下拉刷新结束状态下是否允许列表滚动，默认为否
      refresherCompleteScrollable: {
        type: Boolean,
        default: u.gc("refresherCompleteScrollable", false)
      },
      // 是否使用自定义的下拉刷新，默认为是，即使用z-paging的下拉刷新。设置为false即代表使用uni scroll-view自带的下拉刷新，h5、App、微信小程序以外的平台不支持uni scroll-view自带的下拉刷新
      useCustomRefresher: {
        type: Boolean,
        default: u.gc("useCustomRefresher", true)
      },
      // 自定义下拉刷新下拉帧率，默认为40，过高可能会出现抖动问题
      refresherFps: {
        type: [Number, String],
        default: u.gc("refresherFps", 40)
      },
      // 自定义下拉刷新允许触发的最大下拉角度，默认为40度，当下拉角度小于设定值时，自定义下拉刷新动画不会被触发
      refresherMaxAngle: {
        type: [Number, String],
        default: u.gc("refresherMaxAngle", 40)
      },
      // 自定义下拉刷新的角度由未达到最大角度变到达到最大角度时，是否继续下拉刷新手势，默认为否
      refresherAngleEnableChangeContinued: {
        type: Boolean,
        default: u.gc("refresherAngleEnableChangeContinued", false)
      },
      // 自定义下拉刷新默认状态下的文字
      refresherDefaultText: {
        type: [String, Object],
        default: u.gc("refresherDefaultText", null)
      },
      // 自定义下拉刷新松手立即刷新状态下的文字
      refresherPullingText: {
        type: [String, Object],
        default: u.gc("refresherPullingText", null)
      },
      // 自定义下拉刷新刷新中状态下的文字
      refresherRefreshingText: {
        type: [String, Object],
        default: u.gc("refresherRefreshingText", null)
      },
      // 自定义下拉刷新刷新结束状态下的文字
      refresherCompleteText: {
        type: [String, Object],
        default: u.gc("refresherCompleteText", null)
      },
      // 自定义继续下拉进入二楼文字
      refresherGoF2Text: {
        type: [String, Object],
        default: u.gc("refresherGoF2Text", null)
      },
      // 自定义下拉刷新默认状态下的图片
      refresherDefaultImg: {
        type: String,
        default: u.gc("refresherDefaultImg", null)
      },
      // 自定义下拉刷新松手立即刷新状态下的图片，默认与refresherDefaultImg一致
      refresherPullingImg: {
        type: String,
        default: u.gc("refresherPullingImg", null)
      },
      // 自定义下拉刷新刷新中状态下的图片
      refresherRefreshingImg: {
        type: String,
        default: u.gc("refresherRefreshingImg", null)
      },
      // 自定义下拉刷新刷新结束状态下的图片
      refresherCompleteImg: {
        type: String,
        default: u.gc("refresherCompleteImg", null)
      },
      // 自定义下拉刷新刷新中状态下是否展示旋转动画
      refresherRefreshingAnimated: {
        type: Boolean,
        default: u.gc("refresherRefreshingAnimated", true)
      },
      // 是否开启自定义下拉刷新刷新结束回弹效果，默认为是
      refresherEndBounceEnabled: {
        type: Boolean,
        default: u.gc("refresherEndBounceEnabled", true)
      },
      // 是否开启自定义下拉刷新，默认为是
      refresherEnabled: {
        type: Boolean,
        default: u.gc("refresherEnabled", true)
      },
      // 设置自定义下拉刷新阈值，默认为80rpx
      refresherThreshold: {
        type: [Number, String],
        default: u.gc("refresherThreshold", "80rpx")
      },
      // 设置系统下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式，默认为black
      refresherDefaultStyle: {
        type: String,
        default: u.gc("refresherDefaultStyle", "black")
      },
      // 设置自定义下拉刷新区域背景
      refresherBackground: {
        type: String,
        default: u.gc("refresherBackground", "transparent")
      },
      // 设置固定的自定义下拉刷新区域背景
      refresherFixedBackground: {
        type: String,
        default: u.gc("refresherFixedBackground", "transparent")
      },
      // 设置固定的自定义下拉刷新区域高度，默认为0
      refresherFixedBacHeight: {
        type: [Number, String],
        default: u.gc("refresherFixedBacHeight", 0)
      },
      // 设置自定义下拉刷新下拉超出阈值后继续下拉位移衰减的比例，范围0-1，值越大代表衰减越多。默认为0.65(nvue无效)
      refresherOutRate: {
        type: Number,
        default: u.gc("refresherOutRate", 0.65)
      },
      // 是否开启下拉进入二楼功能，默认为否
      refresherF2Enabled: {
        type: Boolean,
        default: u.gc("refresherF2Enabled", false)
      },
      // 下拉进入二楼阈值，默认为200rpx
      refresherF2Threshold: {
        type: [Number, String],
        default: u.gc("refresherF2Threshold", "200rpx")
      },
      // 下拉进入二楼动画时间，单位为毫秒，默认为200毫秒
      refresherF2Duration: {
        type: [Number, String],
        default: u.gc("refresherF2Duration", 200)
      },
      // 下拉进入二楼状态松手后是否弹出二楼，默认为是
      showRefresherF2: {
        type: Boolean,
        default: u.gc("showRefresherF2", true)
      },
      // 设置自定义下拉刷新下拉时实际下拉位移与用户下拉距离的比值，默认为0.75，即代表若用户下拉10px，则实际位移为7.5px(nvue无效)
      refresherPullRate: {
        type: Number,
        default: u.gc("refresherPullRate", 0.75)
      },
      // 是否显示最后更新时间，默认为否
      showRefresherUpdateTime: {
        type: Boolean,
        default: u.gc("showRefresherUpdateTime", false)
      },
      // 如果需要区别不同页面的最后更新时间，请为不同页面的z-paging的`refresher-update-time-key`设置不同的字符串
      refresherUpdateTimeKey: {
        type: String,
        default: u.gc("refresherUpdateTimeKey", "default")
      },
      // 下拉刷新时下拉到“松手立即刷新”或“松手进入二楼”状态时是否使手机短振动，默认为否（h5无效）
      refresherVibrate: {
        type: Boolean,
        default: u.gc("refresherVibrate", false)
      },
      // 下拉刷新时是否禁止下拉刷新view跟随用户触摸竖直移动，默认为否。注意此属性只是禁止下拉刷新view移动，其他下拉刷新逻辑依然会正常触发
      refresherNoTransform: {
        type: Boolean,
        default: u.gc("refresherNoTransform", false)
      },
      // 是否开启下拉刷新状态栏占位，适用于隐藏导航栏时，下拉刷新需要避开状态栏高度的情况，默认为否
      useRefresherStatusBarPlaceholder: {
        type: Boolean,
        default: u.gc("useRefresherStatusBarPlaceholder", false)
      }
    },
    data() {
      return {
        R: Enum.Refresher,
        //下拉刷新状态
        refresherStatus: Enum.Refresher.Default,
        refresherTouchstartY: 0,
        lastRefresherTouchmove: null,
        refresherReachMaxAngle: true,
        refresherTransform: "translateY(0px)",
        refresherTransition: "",
        finalRefresherDefaultStyle: "black",
        refresherRevealStackCount: 0,
        refresherCompleteTimeout: null,
        refresherCompleteSubTimeout: null,
        refresherEndTimeout: null,
        isTouchmovingTimeout: null,
        refresherTriggered: false,
        isTouchmoving: false,
        isTouchEnded: false,
        isUserPullDown: false,
        privateRefresherEnabled: -1,
        privateShowRefresherWhenReload: false,
        customRefresherHeight: -1,
        showCustomRefresher: false,
        doRefreshAnimateAfter: false,
        isRefresherInComplete: false,
        showF2: false,
        f2Transform: "",
        pullDownTimeStamp: 0,
        moveDis: 0,
        oldMoveDis: 0,
        currentDis: 0,
        oldCurrentMoveDis: 0,
        oldRefresherTouchmoveY: 0,
        oldTouchDirection: "",
        oldEmitedTouchDirection: "",
        oldPullingDistance: -1,
        refresherThresholdUpdateTag: 0
      };
    },
    watch: {
      refresherDefaultStyle: {
        handler(newVal) {
          if (newVal.length) {
            this.finalRefresherDefaultStyle = newVal;
          }
        },
        immediate: true
      },
      refresherStatus(newVal) {
        newVal === Enum.Refresher.Loading && this._cleanRefresherEndTimeout();
        this.refresherVibrate && (newVal === Enum.Refresher.ReleaseToRefresh || newVal === Enum.Refresher.GoF2) && this._doVibrateShort();
        this.$emit("refresherStatusChange", newVal);
        this.$emit("update:refresherStatus", newVal);
      },
      // 监听当前下拉刷新启用/禁用状态
      refresherEnabled(newVal) {
        !newVal && this.endRefresh();
      }
    },
    computed: {
      pullDownDisTimeStamp() {
        return 1e3 / this.refresherFps;
      },
      refresherThresholdUnitConverted() {
        return u.addUnit(this.refresherThreshold, this.unit);
      },
      finalRefresherEnabled() {
        if (this.useChatRecordMode)
          return false;
        if (this.privateRefresherEnabled === -1)
          return this.refresherEnabled;
        return this.privateRefresherEnabled === 1;
      },
      finalRefresherThreshold() {
        let refresherThreshold = this.refresherThresholdUnitConverted;
        let idDefault = false;
        if (refresherThreshold === u.addUnit(80, this.unit)) {
          idDefault = true;
          if (this.showRefresherUpdateTime) {
            refresherThreshold = u.addUnit(120, this.unit);
          }
        }
        if (idDefault && this.customRefresherHeight > 0)
          return this.customRefresherHeight + this.finalRefresherThresholdPlaceholder;
        return u.convertToPx(refresherThreshold) + this.finalRefresherThresholdPlaceholder;
      },
      finalRefresherF2Threshold() {
        return u.convertToPx(u.addUnit(this.refresherF2Threshold, this.unit));
      },
      finalRefresherThresholdPlaceholder() {
        return this.useRefresherStatusBarPlaceholder ? this.statusBarHeight : 0;
      },
      finalRefresherFixedBacHeight() {
        return u.convertToPx(this.refresherFixedBacHeight);
      },
      finalRefresherThemeStyle() {
        return this.refresherThemeStyle.length ? this.refresherThemeStyle : this.defaultThemeStyle;
      },
      finalRefresherOutRate() {
        let rate = this.refresherOutRate;
        rate = Math.max(0, rate);
        rate = Math.min(1, rate);
        return rate;
      },
      finalRefresherPullRate() {
        let rate = this.refresherPullRate;
        rate = Math.max(0, rate);
        return rate;
      },
      finalRefresherTransform() {
        if (this.refresherNoTransform || this.refresherTransform === "translateY(0px)")
          return "none";
        return this.refresherTransform;
      },
      finalShowRefresherWhenReload() {
        return this.showRefresherWhenReload || this.privateShowRefresherWhenReload;
      },
      finalRefresherTriggered() {
        if (!(this.finalRefresherEnabled && !this.useCustomRefresher))
          return false;
        return this.refresherTriggered;
      },
      showRefresher() {
        const showRefresher = this.finalRefresherEnabled && this.useCustomRefresher;
        this.active && this.customRefresherHeight === -1 && showRefresher && this.updateCustomRefresherHeight();
        return showRefresher;
      },
      hasTouchmove() {
        return this.watchRefresherTouchmove;
      }
    },
    methods: {
      // 终止下拉刷新状态
      endRefresh() {
        this.totalData = this.realTotalData;
        this._refresherEnd();
        this._endSystemLoadingAndRefresh();
        this._handleScrollViewBounce({ bounce: true });
        this.$nextTick(() => {
          this.refresherTriggered = false;
        });
      },
      // 手动更新自定义下拉刷新view高度
      updateCustomRefresherHeight() {
        u.delay(() => this.$nextTick(this._updateCustomRefresherHeight));
      },
      // 关闭二楼
      closeF2() {
        this._handleCloseF2();
      },
      // 自定义下拉刷新被触发
      _onRefresh(fromScrollView = false, isUserPullDown = true) {
        if (fromScrollView && !(this.finalRefresherEnabled && !this.useCustomRefresher))
          return;
        this.$emit("onRefresh");
        this.$emit("Refresh");
        if (this.loading || this.isRefresherInComplete)
          return;
        this.loadingType = Enum.LoadingType.Refresher;
        if (this.nShowRefresherReveal)
          return;
        this.isUserPullDown = isUserPullDown;
        this.isUserReload = !isUserPullDown;
        this._startLoading(true);
        this.refresherTriggered = true;
        if (this.reloadWhenRefresh && isUserPullDown) {
          this.useChatRecordMode ? this._onLoadingMore("click") : this._reload(false, false, isUserPullDown);
        }
      },
      // 自定义下拉刷新被复位
      _onRestore() {
        this.refresherTriggered = "restore";
        this.$emit("onRestore");
        this.$emit("Restore");
      },
      // 进一步处理touch开始结果
      _handleRefresherTouchstart(touch) {
        if (!this.loading && this.isTouchEnded) {
          this.isTouchmoving = false;
        }
        this.loadingType = Enum.LoadingType.Refresher;
        this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
        this.isTouchEnded = false;
        this.refresherTransition = "";
        this.refresherTouchstartY = touch.touchY;
        this.$emit("refresherTouchstart", this.refresherTouchstartY);
        this.lastRefresherTouchmove = touch;
        this._cleanRefresherCompleteTimeout();
        this._cleanRefresherEndTimeout();
      },
      // 非appvue或微信小程序或QQ小程序或h5平台，使用js控制下拉刷新
      // 进一步处理touch中结果
      _handleRefresherTouchmove(moveDis, touch) {
        this.refresherReachMaxAngle = true;
        this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
        this.isTouchmoving = true;
        this.isTouchEnded = false;
        if (moveDis >= this.finalRefresherThreshold) {
          this.refresherStatus = this.refresherF2Enabled && moveDis >= this.finalRefresherF2Threshold ? Enum.Refresher.GoF2 : Enum.Refresher.ReleaseToRefresh;
        } else {
          this.refresherStatus = Enum.Refresher.Default;
        }
        this.moveDis = moveDis;
      },
      // 进一步处理touch结束结果
      _handleRefresherTouchend(moveDis) {
        this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
        this.refresherReachMaxAngle = true;
        this.isTouchEnded = true;
        const refresherThreshold = this.finalRefresherThreshold;
        if (moveDis >= refresherThreshold && (this.refresherStatus === Enum.Refresher.ReleaseToRefresh || this.refresherStatus === Enum.Refresher.GoF2)) {
          if (this.refresherStatus === Enum.Refresher.GoF2) {
            this._handleGoF2();
            this._refresherEnd();
          } else {
            u.delay(() => {
              this._emitTouchmove({ pullingDistance: refresherThreshold, dy: this.moveDis - refresherThreshold });
            }, 0.1);
            this.moveDis = refresherThreshold;
            this.refresherStatus = Enum.Refresher.Loading;
            this._doRefresherLoad();
          }
        } else {
          this._refresherEnd();
          this.isTouchmovingTimeout = u.delay(() => {
            this.isTouchmoving = false;
          }, this.refresherDefaultDuration);
        }
        this.scrollEnable = true;
        this.$emit("refresherTouchend", moveDis);
      },
      // 处理列表触摸开始事件
      _handleListTouchstart() {
        if (this.useChatRecordMode && this.autoHideKeyboardWhenChat) {
          uni.hideKeyboard();
          this.$emit("hidedKeyboard");
        }
      },
      // 处理scroll-view bounce是否生效
      _handleScrollViewBounce({ bounce }) {
        if (!this.usePageScroll && !this.scrollToTopBounceEnabled) {
          if (this.wxsScrollTop <= 5) {
            this.refresherTransition = "";
            this.scrollEnable = bounce;
          } else if (bounce) {
            this.scrollEnable = bounce;
          }
        }
      },
      // wxs正在下拉状态改变处理
      _handleWxsPullingDownStatusChange(onPullingDown) {
        this.wxsOnPullingDown = onPullingDown;
        if (onPullingDown && !this.useChatRecordMode) {
          this.renderPropScrollTop = 0;
        }
      },
      // wxs正在下拉处理
      _handleWxsPullingDown({ moveDis, diffDis }) {
        this._emitTouchmove({ pullingDistance: moveDis, dy: diffDis });
      },
      // wxs触摸方向改变
      _handleTouchDirectionChange({ direction }) {
        this.$emit("touchDirectionChange", direction);
      },
      // wxs通知更新其props
      _handlePropUpdate() {
        this.wxsPropType = u.getTime().toString();
      },
      // 下拉刷新结束
      _refresherEnd(shouldEndLoadingDelay = true, fromAddData = false, isUserPullDown = false, setLoading = true) {
        if (this.loadingType === Enum.LoadingType.Refresher) {
          const refresherCompleteDelay = fromAddData && (isUserPullDown || this.showRefresherWhenReload) ? this.refresherCompleteDelay : 0;
          const refresherStatus = refresherCompleteDelay > 0 ? Enum.Refresher.Complete : Enum.Refresher.Default;
          if (this.finalShowRefresherWhenReload) {
            const stackCount = this.refresherRevealStackCount;
            this.refresherRevealStackCount--;
            if (stackCount > 1)
              return;
          }
          this._cleanRefresherEndTimeout();
          this.refresherEndTimeout = u.delay(() => {
            this.refresherStatus = refresherStatus;
          }, this.refresherStatus !== Enum.Refresher.Default && refresherStatus === Enum.Refresher.Default ? this.refresherCompleteDuration : 0);
          if (refresherCompleteDelay > 0) {
            this.isRefresherInComplete = true;
          }
          this._cleanRefresherCompleteTimeout();
          this.refresherCompleteTimeout = u.delay(() => {
            let animateDuration = 1;
            const animateType = this.refresherEndBounceEnabled && fromAddData ? "cubic-bezier(0.19,1.64,0.42,0.72)" : "linear";
            if (fromAddData) {
              animateDuration = this.refresherEndBounceEnabled ? this.refresherCompleteDuration / 1e3 : this.refresherCompleteDuration / 3e3;
            }
            this.refresherTransition = `transform ${fromAddData ? animateDuration : this.refresherDefaultDuration / 1e3}s ${animateType}`;
            this.wxsPropType = this.refresherTransition + "end" + u.getTime();
            this.moveDis = 0;
            if (refresherStatus === Enum.Refresher.Complete) {
              if (this.refresherCompleteSubTimeout) {
                clearTimeout(this.refresherCompleteSubTimeout);
                this.refresherCompleteSubTimeout = null;
              }
              this.refresherCompleteSubTimeout = u.delay(() => {
                this.$nextTick(() => {
                  this.refresherStatus = Enum.Refresher.Default;
                  this.isRefresherInComplete = false;
                });
              }, animateDuration * 800);
            }
            this._emitTouchmove({ pullingDistance: 0, dy: this.moveDis });
          }, refresherCompleteDelay);
        }
        if (setLoading) {
          u.delay(() => this.loading = false, shouldEndLoadingDelay ? 10 : 0);
          isUserPullDown && this._onRestore();
        }
      },
      // 处理进入二楼
      _handleGoF2() {
        if (this.showF2 || !this.refresherF2Enabled)
          return;
        this.$emit("refresherF2Change", "go");
        if (!this.showRefresherF2)
          return;
        this.f2Transform = `translateY(${-this.superContentHeight}px)`;
        this.showF2 = true;
        u.delay(() => {
          this.f2Transform = "translateY(0px)";
        }, 100, "f2ShowDelay");
      },
      // 处理退出二楼
      _handleCloseF2() {
        if (!this.showF2 || !this.refresherF2Enabled)
          return;
        this.$emit("refresherF2Change", "close");
        if (!this.showRefresherF2)
          return;
        this.f2Transform = `translateY(${-this.superContentHeight}px)`;
        u.delay(() => {
          this.showF2 = false;
          this.nF2Opacity = 0;
        }, this.refresherF2Duration, "f2CloseDelay");
      },
      // 模拟用户手动触发下拉刷新
      _doRefresherRefreshAnimate() {
        this._cleanRefresherCompleteTimeout();
        const doRefreshAnimateAfter = !this.doRefreshAnimateAfter && this.finalShowRefresherWhenReload && this.customRefresherHeight === -1 && this.refresherThreshold === u.addUnit(80, this.unit);
        if (doRefreshAnimateAfter) {
          this.doRefreshAnimateAfter = true;
          return;
        }
        this.refresherRevealStackCount++;
        this.wxsPropType = "begin" + u.getTime();
        this.moveDis = this.finalRefresherThreshold;
        this.refresherStatus = Enum.Refresher.Loading;
        this.isTouchmoving = true;
        this.isTouchmovingTimeout && clearTimeout(this.isTouchmovingTimeout);
        this._doRefresherLoad(false);
      },
      // 触发下拉刷新
      _doRefresherLoad(isUserPullDown = true) {
        this._onRefresh(false, isUserPullDown);
        this.loading = true;
      },
      // 更新自定义下拉刷新view高度
      _updateCustomRefresherHeight() {
        this._getNodeClientRect(".zp-custom-refresher-slot-view").then((res) => {
          this.customRefresherHeight = res ? res[0].height : 0;
          this.showCustomRefresher = this.customRefresherHeight > 0;
          if (this.doRefreshAnimateAfter) {
            this.doRefreshAnimateAfter = false;
            this._doRefresherRefreshAnimate();
          }
        });
      },
      // emit pullingDown事件
      _emitTouchmove(e) {
        e.viewHeight = this.finalRefresherThreshold;
        e.rate = e.viewHeight > 0 ? e.pullingDistance / e.viewHeight : 0;
        this.hasTouchmove && this.oldPullingDistance !== e.pullingDistance && this.$emit("refresherTouchmove", e);
        this.oldPullingDistance = e.pullingDistance;
      },
      // 清除refresherCompleteTimeout
      _cleanRefresherCompleteTimeout() {
        this.refresherCompleteTimeout = this._cleanTimeout(this.refresherCompleteTimeout);
      },
      // 清除refresherEndTimeout
      _cleanRefresherEndTimeout() {
        this.refresherEndTimeout = this._cleanTimeout(this.refresherEndTimeout);
      }
    }
  };
  const loadMoreModule = {
    props: {
      // 自定义底部加载更多样式
      loadingMoreCustomStyle: {
        type: Object,
        default: u.gc("loadingMoreCustomStyle", {})
      },
      // 自定义底部加载更多文字样式
      loadingMoreTitleCustomStyle: {
        type: Object,
        default: u.gc("loadingMoreTitleCustomStyle", {})
      },
      // 自定义底部加载更多加载中动画样式
      loadingMoreLoadingIconCustomStyle: {
        type: Object,
        default: u.gc("loadingMoreLoadingIconCustomStyle", {})
      },
      // 自定义底部加载更多加载中动画图标类型，可选flower或circle，默认为flower
      loadingMoreLoadingIconType: {
        type: String,
        default: u.gc("loadingMoreLoadingIconType", "flower")
      },
      // 自定义底部加载更多加载中动画图标图片
      loadingMoreLoadingIconCustomImage: {
        type: String,
        default: u.gc("loadingMoreLoadingIconCustomImage", "")
      },
      // 底部加载更多加载中view是否展示旋转动画，默认为是
      loadingMoreLoadingAnimated: {
        type: Boolean,
        default: u.gc("loadingMoreLoadingAnimated", true)
      },
      // 是否启用加载更多数据(含滑动到底部加载更多数据和点击加载更多数据)，默认为是
      loadingMoreEnabled: {
        type: Boolean,
        default: u.gc("loadingMoreEnabled", true)
      },
      // 是否启用滑动到底部加载更多数据，默认为是
      toBottomLoadingMoreEnabled: {
        type: Boolean,
        default: u.gc("toBottomLoadingMoreEnabled", true)
      },
      // 滑动到底部状态为默认状态时，以加载中的状态展示，默认为否。若设置为是，可避免滚动到底部看到默认状态然后立刻变为加载中状态的问题，但分页数量未超过一屏时，不会显示【点击加载更多】
      loadingMoreDefaultAsLoading: {
        type: Boolean,
        default: u.gc("loadingMoreDefaultAsLoading", false)
      },
      // 滑动到底部"默认"文字，默认为【点击加载更多】
      loadingMoreDefaultText: {
        type: [String, Object],
        default: u.gc("loadingMoreDefaultText", null)
      },
      // 滑动到底部"加载中"文字，默认为【正在加载...】
      loadingMoreLoadingText: {
        type: [String, Object],
        default: u.gc("loadingMoreLoadingText", null)
      },
      // 滑动到底部"没有更多"文字，默认为【没有更多了】
      loadingMoreNoMoreText: {
        type: [String, Object],
        default: u.gc("loadingMoreNoMoreText", null)
      },
      // 滑动到底部"加载失败"文字，默认为【加载失败，点击重新加载】
      loadingMoreFailText: {
        type: [String, Object],
        default: u.gc("loadingMoreFailText", null)
      },
      // 当没有更多数据且分页内容未超出z-paging时是否隐藏没有更多数据的view，默认为否
      hideNoMoreInside: {
        type: Boolean,
        default: u.gc("hideNoMoreInside", false)
      },
      // 当没有更多数据且分页数组长度少于这个值时，隐藏没有更多数据的view，默认为0，代表不限制。
      hideNoMoreByLimit: {
        type: Number,
        default: u.gc("hideNoMoreByLimit", 0)
      },
      // 是否显示默认的加载更多text，默认为是
      showDefaultLoadingMoreText: {
        type: Boolean,
        default: u.gc("showDefaultLoadingMoreText", true)
      },
      // 是否显示没有更多数据的view
      showLoadingMoreNoMoreView: {
        type: Boolean,
        default: u.gc("showLoadingMoreNoMoreView", true)
      },
      // 是否显示没有更多数据的分割线，默认为是
      showLoadingMoreNoMoreLine: {
        type: Boolean,
        default: u.gc("showLoadingMoreNoMoreLine", true)
      },
      // 自定义底部没有更多数据的分割线样式
      loadingMoreNoMoreLineCustomStyle: {
        type: Object,
        default: u.gc("loadingMoreNoMoreLineCustomStyle", {})
      },
      // 当分页未满一屏时，是否自动加载更多，默认为否(nvue无效)
      insideMore: {
        type: Boolean,
        default: u.gc("insideMore", false)
      },
      // 距底部/右边多远时（单位px），触发 scrolltolower 事件，默认为100rpx
      lowerThreshold: {
        type: [Number, String],
        default: u.gc("lowerThreshold", "100rpx")
      }
    },
    data() {
      return {
        M: Enum.More,
        // 底部加载更多状态
        loadingStatus: Enum.More.Default,
        // 在渲染之后的底部加载更多状态
        loadingStatusAfterRender: Enum.More.Default,
        // 底部加载更多时间戳
        loadingMoreTimeStamp: 0,
        // 底部加载更多slot
        loadingMoreDefaultSlot: null,
        // 是否展示底部加载更多
        showLoadingMore: false,
        // 是否是开发者自定义的加载更多，-1代表交由z-paging自行判断；1代表没有更多了；0代表还有更多数据
        customNoMore: -1
      };
    },
    computed: {
      // 底部加载更多配置
      zLoadMoreConfig() {
        return {
          status: this.loadingStatusAfterRender,
          defaultAsLoading: this.loadingMoreDefaultAsLoading || this.useChatRecordMode && this.chatLoadingMoreDefaultAsLoading,
          defaultThemeStyle: this.finalLoadingMoreThemeStyle,
          customStyle: this.loadingMoreCustomStyle,
          titleCustomStyle: this.loadingMoreTitleCustomStyle,
          iconCustomStyle: this.loadingMoreLoadingIconCustomStyle,
          loadingIconType: this.loadingMoreLoadingIconType,
          loadingIconCustomImage: this.loadingMoreLoadingIconCustomImage,
          loadingAnimated: this.loadingMoreLoadingAnimated,
          showNoMoreLine: this.showLoadingMoreNoMoreLine,
          noMoreLineCustomStyle: this.loadingMoreNoMoreLineCustomStyle,
          defaultText: this.finalLoadingMoreDefaultText,
          loadingText: this.finalLoadingMoreLoadingText,
          noMoreText: this.finalLoadingMoreNoMoreText,
          failText: this.finalLoadingMoreFailText,
          hideContent: !this.loadingMoreDefaultAsLoading && this.listRendering,
          unit: this.unit,
          isChat: this.useChatRecordMode,
          chatDefaultAsLoading: this.chatLoadingMoreDefaultAsLoading
        };
      },
      // 最终的底部加载更多主题
      finalLoadingMoreThemeStyle() {
        return this.loadingMoreThemeStyle.length ? this.loadingMoreThemeStyle : this.defaultThemeStyle;
      },
      // 最终的底部加载更多触发阈值
      finalLowerThreshold() {
        return u.convertToPx(this.lowerThreshold);
      },
      // 是否显示默认状态下的底部加载更多
      showLoadingMoreDefault() {
        return this._showLoadingMore("Default");
      },
      // 是否显示加载中状态下的底部加载更多
      showLoadingMoreLoading() {
        return this._showLoadingMore("Loading");
      },
      // 是否显示没有更多了状态下的底部加载更多
      showLoadingMoreNoMore() {
        return this._showLoadingMore("NoMore");
      },
      // 是否显示加载失败状态下的底部加载更多
      showLoadingMoreFail() {
        return this._showLoadingMore("Fail");
      },
      // 是否显示自定义状态下的底部加载更多
      showLoadingMoreCustom() {
        return this._showLoadingMore("Custom");
      }
    },
    methods: {
      // 页面滚动到底部时通知z-paging进行进一步处理
      pageReachBottom() {
        !this.useChatRecordMode && this._onLoadingMore("toBottom");
      },
      // 手动触发上拉加载更多(非必须，可依据具体需求使用)
      doLoadMore(type) {
        this._onLoadingMore(type);
      },
      // 通过@scroll事件检测是否滚动到了底部(顺带检测下是否滚动到了顶部)
      _checkScrolledToBottom(scrollDiff, checked = false) {
        if (this.cacheScrollNodeHeight === -1) {
          this._getNodeClientRect(".zp-scroll-view").then((res) => {
            if (res) {
              const scrollNodeHeight = res[0].height;
              this.cacheScrollNodeHeight = scrollNodeHeight;
              if (scrollDiff - scrollNodeHeight <= this.finalLowerThreshold) {
                this._onLoadingMore("toBottom");
              }
            }
          });
        } else {
          if (scrollDiff - this.cacheScrollNodeHeight <= this.finalLowerThreshold) {
            this._onLoadingMore("toBottom");
          } else if (scrollDiff - this.cacheScrollNodeHeight <= 500 && !checked) {
            u.delay(() => {
              this._getNodeClientRect(".zp-scroll-view", true, true).then((res) => {
                if (res) {
                  this.oldScrollTop = res[0].scrollTop;
                  const newScrollDiff = res[0].scrollHeight - this.oldScrollTop;
                  this._checkScrolledToBottom(newScrollDiff, true);
                }
              });
            }, 150, "checkScrolledToBottomDelay");
          }
          if (this.oldScrollTop <= 150 && this.oldScrollTop !== 0) {
            u.delay(() => {
              if (this.oldScrollTop !== 0) {
                this._getNodeClientRect(".zp-scroll-view", true, true).then((res) => {
                  if (res && res[0].scrollTop === 0 && this.oldScrollTop !== 0) {
                    this._onScrollToUpper();
                  }
                });
              }
            }, 150, "checkScrolledToTopDelay");
          }
        }
      },
      // 触发加载更多时调用,from:toBottom-滑动到底部触发；1、click-点击加载更多触发
      _onLoadingMore(from = "click") {
        if (this.isIos && from === "toBottom" && !this.scrollToBottomBounceEnabled && this.scrollEnable) {
          this.scrollEnable = false;
          this.$nextTick(() => {
            this.scrollEnable = true;
          });
        }
        this.$emit("scrolltolower", from);
        if (this.refresherOnly || !this.loadingMoreEnabled || !(this.loadingStatus === Enum.More.Default || this.loadingStatus === Enum.More.Fail) || this.loading || this.showEmpty)
          return;
        this._doLoadingMore();
      },
      // 处理开始加载更多
      _doLoadingMore() {
        if (this.pageNo >= this.defaultPageNo && this.loadingStatus !== Enum.More.NoMore) {
          this.pageNo++;
          this._startLoading(false);
          if (this.isLocalPaging) {
            this._localPagingQueryList(this.pageNo, this.defaultPageSize, this.localPagingLoadingTime, (res) => {
              this.completeByTotal(res, this.totalLocalPagingList.length);
              this.queryFrom = Enum.QueryFrom.LoadingMore;
            });
          } else {
            this._emitQuery(this.pageNo, this.defaultPageSize, Enum.QueryFrom.LoadingMore);
            this._callMyParentQuery();
          }
          this.loadingType = Enum.LoadingType.LoadingMore;
        }
      },
      // (预处理)判断当没有更多数据且分页内容未超出z-paging时是否显示没有更多数据的view
      _preCheckShowNoMoreInside(newVal, scrollViewNode, pagingContainerNode) {
        if (this.loadingStatus === Enum.More.NoMore && this.hideNoMoreByLimit > 0 && newVal.length) {
          this.showLoadingMore = newVal.length > this.hideNoMoreByLimit;
        } else if (this.loadingStatus === Enum.More.NoMore && this.hideNoMoreInside && newVal.length || this.insideMore && this.insideOfPaging !== false && newVal.length) {
          this.$nextTick(() => {
            this._checkShowNoMoreInside(newVal, scrollViewNode, pagingContainerNode);
          });
          if (this.insideMore && this.insideOfPaging !== false && newVal.length) {
            this.showLoadingMore = newVal.length;
          }
        } else {
          this.showLoadingMore = newVal.length;
        }
      },
      // 判断当没有更多数据且分页内容未超出z-paging时是否显示没有更多数据的view
      async _checkShowNoMoreInside(totalData, oldScrollViewNode, oldPagingContainerNode) {
        try {
          const scrollViewNode = oldScrollViewNode || await this._getNodeClientRect(".zp-scroll-view");
          if (this.usePageScroll) {
            if (scrollViewNode) {
              const scrollViewTotalH = scrollViewNode[0].top + scrollViewNode[0].height;
              this.insideOfPaging = scrollViewTotalH < this.windowHeight;
              if (this.hideNoMoreInside) {
                this.showLoadingMore = !this.insideOfPaging;
              }
              this._updateInsideOfPaging();
            }
          } else {
            const pagingContainerNode = oldPagingContainerNode || await this._getNodeClientRect(".zp-paging-container-content");
            const pagingContainerH = pagingContainerNode ? pagingContainerNode[0].height : 0;
            const scrollViewH = scrollViewNode ? scrollViewNode[0].height : 0;
            this.insideOfPaging = pagingContainerH < scrollViewH;
            if (this.hideNoMoreInside) {
              this.showLoadingMore = !this.insideOfPaging;
            }
            this._updateInsideOfPaging();
          }
        } catch (e) {
          this.insideOfPaging = !totalData.length;
          if (this.hideNoMoreInside) {
            this.showLoadingMore = !this.insideOfPaging;
          }
          this._updateInsideOfPaging();
        }
      },
      // 是否要展示上拉加载更多view
      _showLoadingMore(type) {
        if (!this.showLoadingMoreWhenReload && (!(this.loadingStatus === Enum.More.Default ? this.nShowBottom : true) || !this.realTotalData.length))
          return false;
        if ((!this.showLoadingMoreWhenReload || this.isUserPullDown || this.loadingStatus !== Enum.More.Loading) && !this.showLoadingMore || !this.loadingMoreEnabled && (!this.showLoadingMoreWhenReload || this.isUserPullDown || this.loadingStatus !== Enum.More.Loading) || this.refresherOnly) {
          return false;
        }
        if (this.useChatRecordMode && type !== "Loading")
          return false;
        if (!this.zSlots)
          return false;
        if (type === "Custom") {
          return this.showDefaultLoadingMoreText && !(this.loadingStatus === Enum.More.NoMore && !this.showLoadingMoreNoMoreView);
        }
        const res = this.loadingStatus === Enum.More[type] && this.zSlots[`loadingMore${type}`] && (type === "NoMore" ? this.showLoadingMoreNoMoreView : true);
        return res;
      }
    }
  };
  const loadingModule = {
    props: {
      // 第一次加载后自动隐藏loading slot，默认为是
      autoHideLoadingAfterFirstLoaded: {
        type: Boolean,
        default: u.gc("autoHideLoadingAfterFirstLoaded", true)
      },
      // loading slot是否铺满屏幕并固定，默认为否
      loadingFullFixed: {
        type: Boolean,
        default: u.gc("loadingFullFixed", false)
      },
      // 是否自动显示系统Loading：即uni.showLoading，若开启则将在刷新列表时(调用reload、refresh时)显示，下拉刷新和滚动到底部加载更多不会显示，默认为false。
      autoShowSystemLoading: {
        type: Boolean,
        default: u.gc("autoShowSystemLoading", false)
      },
      // 显示系统Loading时是否显示透明蒙层，防止触摸穿透，默认为是(H5、App、微信小程序、百度小程序有效)
      systemLoadingMask: {
        type: Boolean,
        default: u.gc("systemLoadingMask", true)
      },
      // 显示系统Loading时显示的文字，默认为"加载中"
      systemLoadingText: {
        type: [String, Object],
        default: u.gc("systemLoadingText", null)
      }
    },
    data() {
      return {
        loading: false,
        loadingForNow: false
      };
    },
    watch: {
      // loading状态
      loadingStatus(newVal) {
        this.$emit("loadingStatusChange", newVal);
        this.$nextTick(() => {
          this.loadingStatusAfterRender = newVal;
        });
        if (this.useChatRecordMode) {
          if (this.isFirstPage && (newVal === Enum.More.NoMore || newVal === Enum.More.Fail)) {
            this.isFirstPageAndNoMore = true;
            return;
          }
        }
        this.isFirstPageAndNoMore = false;
      },
      loading(newVal) {
        if (newVal) {
          this.loadingForNow = newVal;
        }
      }
    },
    computed: {
      // 是否显示loading
      showLoading() {
        if (this.firstPageLoaded || !this.loading || !this.loadingForNow)
          return false;
        if (this.finalShowSystemLoading) {
          uni.showLoading({
            title: this.finalSystemLoadingText,
            mask: this.systemLoadingMask
          });
        }
        return this.autoHideLoadingAfterFirstLoaded ? this.fromEmptyViewReload ? true : !this.pagingLoaded : this.loadingType === Enum.LoadingType.Refresher;
      },
      // 最终的是否显示系统loading
      finalShowSystemLoading() {
        return this.autoShowSystemLoading && this.loadingType === Enum.LoadingType.Refresher;
      }
    },
    methods: {
      // 处理开始加载更多状态
      _startLoading(isReload = false) {
        if (this.showLoadingMoreWhenReload && !this.isUserPullDown || !isReload) {
          this.loadingStatus = Enum.More.Loading;
        }
        this.loading = true;
      },
      // 停止系统loading和refresh
      _endSystemLoadingAndRefresh() {
        this.finalShowSystemLoading && uni.hideLoading();
        !this.useCustomRefresher && uni.stopPullDownRefresh();
      }
    }
  };
  const chatRecordModerModule = {
    props: {
      // 使用聊天记录模式，默认为否
      useChatRecordMode: {
        type: Boolean,
        default: u.gc("useChatRecordMode", false)
      },
      // 使用聊天记录模式时滚动到顶部后，列表垂直移动偏移距离。默认0rpx。单位px（暂时无效）
      chatRecordMoreOffset: {
        type: [Number, String],
        default: u.gc("chatRecordMoreOffset", "0rpx")
      },
      // 使用聊天记录模式时是否自动隐藏键盘：在用户触摸列表时候自动隐藏键盘，默认为是
      autoHideKeyboardWhenChat: {
        type: Boolean,
        default: u.gc("autoHideKeyboardWhenChat", true)
      },
      // 使用聊天记录模式中键盘弹出时是否自动调整slot="bottom"高度，默认为是
      autoAdjustPositionWhenChat: {
        type: Boolean,
        default: u.gc("autoAdjustPositionWhenChat", true)
      },
      // 使用聊天记录模式中键盘弹出时占位高度偏移距离。默认0rpx。单位px
      chatAdjustPositionOffset: {
        type: [Number, String],
        default: u.gc("chatAdjustPositionOffset", "0rpx")
      },
      // 使用聊天记录模式中键盘弹出时是否自动滚动到底部，默认为否
      autoToBottomWhenChat: {
        type: Boolean,
        default: u.gc("autoToBottomWhenChat", false)
      },
      // 使用聊天记录模式中reload时是否显示chatLoading，默认为否
      showChatLoadingWhenReload: {
        type: Boolean,
        default: u.gc("showChatLoadingWhenReload", false)
      },
      // 在聊天记录模式中滑动到顶部状态为默认状态时，以加载中的状态展示，默认为是。若设置为否，则默认会显示【点击加载更多】，然后才会显示loading
      chatLoadingMoreDefaultAsLoading: {
        type: Boolean,
        default: u.gc("chatLoadingMoreDefaultAsLoading", true)
      }
    },
    data() {
      return {
        // 键盘高度
        keyboardHeight: 0,
        // 键盘高度是否未改变，此时占位高度变化不需要动画效果
        isKeyboardHeightChanged: false
      };
    },
    computed: {
      finalChatRecordMoreOffset() {
        return u.convertToPx(this.chatRecordMoreOffset);
      },
      finalChatAdjustPositionOffset() {
        return u.convertToPx(this.chatAdjustPositionOffset);
      },
      // 聊天记录模式旋转180度style
      chatRecordRotateStyle() {
        let cellStyle;
        cellStyle = this.useChatRecordMode ? { transform: "scaleY(-1)" } : {};
        this.$emit("update:cellStyle", cellStyle);
        this.$emit("cellStyleChange", cellStyle);
        this.$nextTick(() => {
          if (this.isFirstPage && this.isChatRecordModeAndNotInversion) {
            this.$nextTick(() => {
              this._scrollToBottom(false);
              u.delay(() => {
                this._scrollToBottom(false);
                u.delay(() => {
                  this._scrollToBottom(false);
                }, 50);
              }, 50);
            });
          }
        });
        return cellStyle;
      },
      // 是否是聊天记录列表并且有配置transform
      isChatRecordModeHasTransform() {
        return this.useChatRecordMode && this.chatRecordRotateStyle && this.chatRecordRotateStyle.transform;
      },
      // 是否是聊天记录列表并且列表未倒置
      isChatRecordModeAndNotInversion() {
        return this.isChatRecordModeHasTransform && this.chatRecordRotateStyle.transform === "scaleY(1)";
      },
      // 是否是聊天记录列表并且列表倒置
      isChatRecordModeAndInversion() {
        return this.isChatRecordModeHasTransform && this.chatRecordRotateStyle.transform === "scaleY(-1)";
      },
      // 最终的聊天记录模式中底部安全区域的高度，如果开启了底部安全区域并且键盘未弹出，则添加底部区域高度
      chatRecordModeSafeAreaBottom() {
        return this.safeAreaInsetBottom && !this.keyboardHeight ? this.safeAreaBottom : 0;
      }
    },
    mounted() {
      if (this.useChatRecordMode) {
        uni.onKeyboardHeightChange(this._handleKeyboardHeightChange);
      }
    },
    methods: {
      // 添加聊天记录
      addChatRecordData(data, toBottom = true, toBottomWithAnimate = true) {
        if (!this.useChatRecordMode)
          return;
        this.isTotalChangeFromAddData = true;
        this.addDataFromTop(data, toBottom, toBottomWithAnimate);
      },
      // 手动触发滚动到顶部加载更多，聊天记录模式时有效
      doChatRecordLoadMore() {
        this.useChatRecordMode && this._onLoadingMore("click");
      },
      // 处理键盘高度变化
      _handleKeyboardHeightChange(res) {
        this.$emit("keyboardHeightChange", res);
        if (this.autoAdjustPositionWhenChat) {
          this.isKeyboardHeightChanged = true;
          this.keyboardHeight = res.height > 0 ? res.height + this.finalChatAdjustPositionOffset : res.height;
        }
        if (this.autoToBottomWhenChat && this.keyboardHeight > 0) {
          u.delay(() => {
            this.scrollToBottom(false);
            u.delay(() => {
              this.scrollToBottom(false);
            });
          });
        }
      }
    }
  };
  const scrollerModule = {
    props: {
      // 使用页面滚动，默认为否，当设置为是时则使用页面的滚动而非此组件内部的scroll-view的滚动，使用页面滚动时z-paging无需设置确定的高度且对于长列表展示性能更高，但配置会略微繁琐
      usePageScroll: {
        type: Boolean,
        default: u.gc("usePageScroll", false)
      },
      // 是否可以滚动，使用内置scroll-view和nvue时有效，默认为是
      scrollable: {
        type: Boolean,
        default: u.gc("scrollable", true)
      },
      // 控制是否出现滚动条，默认为是
      showScrollbar: {
        type: Boolean,
        default: u.gc("showScrollbar", true)
      },
      // 是否允许横向滚动，默认为否
      scrollX: {
        type: Boolean,
        default: u.gc("scrollX", false)
      },
      // iOS设备上滚动到顶部时是否允许回弹效果，默认为否。关闭回弹效果后可使滚动到顶部与下拉刷新更连贯，但是有吸顶view时滚动到顶部时可能出现抖动。
      scrollToTopBounceEnabled: {
        type: Boolean,
        default: u.gc("scrollToTopBounceEnabled", false)
      },
      // iOS设备上滚动到底部时是否允许回弹效果，默认为是。
      scrollToBottomBounceEnabled: {
        type: Boolean,
        default: u.gc("scrollToBottomBounceEnabled", true)
      },
      // 在设置滚动条位置时使用动画过渡，默认为否
      scrollWithAnimation: {
        type: Boolean,
        default: u.gc("scrollWithAnimation", false)
      },
      // 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
      scrollIntoView: {
        type: String,
        default: u.gc("scrollIntoView", "")
      }
    },
    data() {
      return {
        scrollTop: 0,
        oldScrollTop: 0,
        scrollViewStyle: {},
        scrollViewContainerStyle: {},
        scrollViewInStyle: {},
        pageScrollTop: -1,
        scrollEnable: true,
        privateScrollWithAnimation: -1,
        cacheScrollNodeHeight: -1,
        superContentHeight: 0
      };
    },
    watch: {
      oldScrollTop(newVal) {
        !this.usePageScroll && this._scrollTopChange(newVal, false);
      },
      pageScrollTop(newVal) {
        this.usePageScroll && this._scrollTopChange(newVal, true);
      },
      usePageScroll: {
        handler(newVal) {
          this.loaded && this.autoHeight && this._setAutoHeight(!newVal);
        },
        immediate: true
      },
      finalScrollTop(newVal) {
        this.renderPropScrollTop = newVal < 6 ? 0 : 10;
      }
    },
    computed: {
      finalScrollWithAnimation() {
        if (this.privateScrollWithAnimation !== -1) {
          return this.privateScrollWithAnimation === 1;
        }
        return this.scrollWithAnimation;
      },
      finalScrollViewStyle() {
        if (this.superContentZIndex != 1) {
          this.scrollViewStyle["z-index"] = this.superContentZIndex;
          this.scrollViewStyle["position"] = "relative";
        }
        return this.scrollViewStyle;
      },
      finalScrollTop() {
        return this.usePageScroll ? this.pageScrollTop : this.oldScrollTop;
      },
      // 当前是否是旧版webview
      finalIsOldWebView() {
        return this.isOldWebView && !this.usePageScroll;
      },
      // 当前scroll-view/list-view是否允许滚动
      finalScrollable() {
        return this.scrollable && !this.usePageScroll && this.scrollEnable && (this.refresherCompleteScrollable ? true : this.refresherStatus !== Enum.Refresher.Complete) && (this.refresherRefreshingScrollable ? true : this.refresherStatus !== Enum.Refresher.Loading);
      }
    },
    methods: {
      // 滚动到顶部，animate为是否展示滚动动画，默认为是
      scrollToTop(animate, checkReverse = true) {
        if (this.useChatRecordMode && checkReverse && !this.isChatRecordModeAndNotInversion) {
          this.scrollToBottom(animate, false);
          return;
        }
        this.$nextTick(() => {
          this._scrollToTop(animate, false);
        });
      },
      // 滚动到底部，animate为是否展示滚动动画，默认为是
      scrollToBottom(animate, checkReverse = true) {
        if (this.useChatRecordMode && checkReverse && !this.isChatRecordModeAndNotInversion) {
          this.scrollToTop(animate, false);
          return;
        }
        this.$nextTick(() => {
          this._scrollToBottom(animate);
        });
      },
      // 滚动到指定view(vue中有效)。sel为需要滚动的view的id值，不包含"#"；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollIntoViewById(sel, offset, animate) {
        this._scrollIntoView(sel, offset, animate);
      },
      // 滚动到指定view(vue中有效)。nodeTop为需要滚动的view的top值(通过uni.createSelectorQuery()获取)；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollIntoViewByNodeTop(nodeTop, offset, animate) {
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this._scrollIntoViewByNodeTop(nodeTop, offset, animate);
        });
      },
      // 滚动到指定位置(vue中有效)。y为与顶部的距离，单位为px；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollToY(y, offset, animate) {
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this._scrollToY(y, offset, animate);
        });
      },
      // 滚动到指定view(nvue中和虚拟列表中有效)。index为需要滚动的view的index(第几个，从0开始)；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollIntoViewByIndex(index2, offset, animate) {
        if (index2 >= this.realTotalData.length) {
          u.consoleErr("当前滚动的index超出已渲染列表长度，请先通过refreshToPage加载到对应index页并等待渲染成功后再调用此方法！");
          return;
        }
        this.$nextTick(() => {
          if (this.finalUseVirtualList) {
            const isCellFixed = this.cellHeightMode === Enum.CellHeightMode.Fixed;
            u.delay(() => {
              if (this.finalUseVirtualList) {
                const scrollTop = isCellFixed ? this.virtualCellHeight * index2 : this.virtualHeightCacheList[index2].lastTotalHeight;
                this.scrollToY(scrollTop, offset, animate);
              }
            }, isCellFixed ? 0 : 100);
          }
        });
      },
      // 滚动到指定view(nvue中有效)。view为需要滚动的view(通过`this.$refs.xxx`获取)，不包含"#"；offset为偏移量，单位为px；animate为是否展示滚动动画，默认为否
      scrollIntoViewByView(view, offset, animate) {
        this._scrollIntoView(view, offset, animate);
      },
      // 当使用页面滚动并且自定义下拉刷新时，请在页面的onPageScroll中调用此方法，告知z-paging当前的pageScrollTop，否则会导致在任意位置都可以下拉刷新
      updatePageScrollTop(value) {
        this.pageScrollTop = value;
      },
      // 当使用页面滚动并且设置了slot="top"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="top"的view高度动态改变时，在其高度需要更新时调用此方法
      updatePageScrollTopHeight() {
        this._updatePageScrollTopOrBottomHeight("top");
      },
      // 当使用页面滚动并且设置了slot="bottom"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="bottom"的view高度动态改变时，在其高度需要更新时调用此方法
      updatePageScrollBottomHeight() {
        this._updatePageScrollTopOrBottomHeight("bottom");
      },
      // 更新slot="left"和slot="right"宽度，当slot="left"或slot="right"宽度动态改变时调用
      updateLeftAndRightWidth() {
        if (!this.finalIsOldWebView)
          return;
        this.$nextTick(() => this._updateLeftAndRightWidth(this.scrollViewContainerStyle, "zp-page"));
      },
      // 更新z-paging内置scroll-view的scrollTop
      updateScrollViewScrollTop(scrollTop, animate = true) {
        this._updatePrivateScrollWithAnimation(animate);
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this.scrollTop = scrollTop;
          this.oldScrollTop = this.scrollTop;
        });
      },
      // 当滚动到顶部时
      _onScrollToUpper() {
        this.$emit("scrolltoupper");
        this.$emit("scrollTopChange", 0);
        this.$nextTick(() => {
          this.oldScrollTop = 0;
        });
      },
      // 当滚动到底部时
      _onScrollToLower(e) {
        (!e.detail || !e.detail.direction || e.detail.direction === "bottom") && this._onLoadingMore(this.useChatRecordMode ? "click" : "toBottom");
      },
      // 滚动到顶部
      _scrollToTop(animate = true, isPrivate = true) {
        if (this.usePageScroll) {
          this.$nextTick(() => {
            uni.pageScrollTo({
              scrollTop: 0,
              duration: animate ? 100 : 0
            });
          });
          return;
        }
        this._updatePrivateScrollWithAnimation(animate);
        this.scrollTop = this.oldScrollTop;
        this.$nextTick(() => {
          this.scrollTop = 0;
          this.oldScrollTop = this.scrollTop;
        });
      },
      // 滚动到底部
      async _scrollToBottom(animate = true) {
        if (this.usePageScroll) {
          this.$nextTick(() => {
            uni.pageScrollTo({
              scrollTop: Number.MAX_VALUE,
              duration: animate ? 100 : 0
            });
          });
          return;
        }
        try {
          this._updatePrivateScrollWithAnimation(animate);
          const pagingContainerNode = await this._getNodeClientRect(".zp-paging-container");
          const scrollViewNode = await this._getNodeClientRect(".zp-scroll-view");
          const pagingContainerH = pagingContainerNode ? pagingContainerNode[0].height : 0;
          const scrollViewH = scrollViewNode ? scrollViewNode[0].height : 0;
          if (pagingContainerH > scrollViewH) {
            this.scrollTop = this.oldScrollTop;
            this.$nextTick(() => {
              this.scrollTop = pagingContainerH - scrollViewH + this.virtualPlaceholderTopHeight;
              this.oldScrollTop = this.scrollTop;
            });
          }
        } catch (e) {
        }
      },
      // 滚动到指定view
      _scrollIntoView(sel, offset = 0, animate = false, finishCallback) {
        try {
          this.scrollTop = this.oldScrollTop;
          this.$nextTick(() => {
            this._getNodeClientRect("#" + sel.replace("#", ""), this.$parent).then((node) => {
              if (node) {
                let nodeTop = node[0].top;
                this._scrollIntoViewByNodeTop(nodeTop, offset, animate);
                finishCallback && finishCallback();
              }
            });
          });
        } catch (e) {
        }
      },
      // 通过nodeTop滚动到指定view
      _scrollIntoViewByNodeTop(nodeTop, offset = 0, animate = false) {
        if (this.isChatRecordModeAndInversion) {
          this._getNodeClientRect(".zp-scroll-view").then((sNode) => {
            if (sNode) {
              this._scrollToY(sNode[0].height - nodeTop, offset, animate, true);
            }
          });
        } else {
          this._scrollToY(nodeTop, offset, animate, true);
        }
      },
      // 滚动到指定位置
      _scrollToY(y, offset = 0, animate = false, addScrollTop = false) {
        this._updatePrivateScrollWithAnimation(animate);
        u.delay(() => {
          if (this.usePageScroll) {
            if (addScrollTop && this.pageScrollTop !== -1) {
              y += this.pageScrollTop;
            }
            const scrollTop = y - offset;
            uni.pageScrollTo({
              scrollTop,
              duration: animate ? 100 : 0
            });
          } else {
            if (addScrollTop) {
              y += this.oldScrollTop;
            }
            this.scrollTop = y - offset;
          }
        }, 10);
      },
      // scroll-view滚动中
      _scroll(e) {
        this.$emit("scroll", e);
        const scrollTop = e.detail.scrollTop;
        this.finalUseVirtualList && this._updateVirtualScroll(scrollTop, this.oldScrollTop - scrollTop);
        this.oldScrollTop = scrollTop;
        const scrollDiff = e.detail.scrollHeight - this.oldScrollTop;
        !this.isIos && this._checkScrolledToBottom(scrollDiff);
      },
      // 更新内置的scroll-view是否启用滚动动画
      _updatePrivateScrollWithAnimation(animate) {
        this.privateScrollWithAnimation = animate ? 1 : 0;
        u.delay(() => this.$nextTick(() => {
          this.privateScrollWithAnimation = -1;
        }), 100, "updateScrollWithAnimationDelay");
      },
      // 检测scrollView是否要铺满屏幕
      _doCheckScrollViewShouldFullHeight(totalData) {
        if (this.autoFullHeight && this.usePageScroll && this.isTotalChangeFromAddData) {
          this.$nextTick(() => {
            this._checkScrollViewShouldFullHeight((scrollViewNode, pagingContainerNode) => {
              this._preCheckShowNoMoreInside(totalData, scrollViewNode, pagingContainerNode);
            });
          });
        } else {
          this._preCheckShowNoMoreInside(totalData);
        }
      },
      // 检测z-paging是否要全屏覆盖(当使用页面滚动并且不满全屏时，默认z-paging需要铺满全屏，避免数据过少时内部的empty-view无法正确展示)
      async _checkScrollViewShouldFullHeight(callback) {
        try {
          const scrollViewNode = await this._getNodeClientRect(".zp-scroll-view");
          const pagingContainerNode = await this._getNodeClientRect(".zp-paging-container-content");
          if (!scrollViewNode || !pagingContainerNode)
            return;
          const scrollViewHeight = pagingContainerNode[0].height;
          const scrollViewTop = scrollViewNode[0].top;
          if (this.isAddedData && scrollViewHeight + scrollViewTop <= this.windowHeight) {
            this._setAutoHeight(true, scrollViewNode);
            callback(scrollViewNode, pagingContainerNode);
          } else {
            this._setAutoHeight(false);
            callback(null, null);
          }
        } catch (e) {
          callback(null, null);
        }
      },
      // 更新缓存中z-paging整个内容容器高度
      async _updateCachedSuperContentHeight() {
        const superContentNode = await this._getNodeClientRect(".z-paging-content");
        if (superContentNode) {
          this.superContentHeight = superContentNode[0].height;
        }
      },
      // scrollTop改变时触发
      _scrollTopChange(newVal, isPageScrollTop) {
        this.$emit("scrollTopChange", newVal);
        this.$emit("update:scrollTop", newVal);
        this._checkShouldShowBackToTop(newVal);
        const scrollTop = newVal > 5 ? 6 : 0;
        if (isPageScrollTop && this.wxsPageScrollTop !== scrollTop) {
          this.wxsPageScrollTop = scrollTop;
        } else if (!isPageScrollTop && this.wxsScrollTop !== scrollTop) {
          this.wxsScrollTop = scrollTop;
          if (scrollTop > 6) {
            this.scrollEnable = true;
          }
        }
      },
      // 更新使用页面滚动时slot="top"或"bottom"插入view的高度
      _updatePageScrollTopOrBottomHeight(type) {
        if (!this.usePageScroll)
          return;
        this._doCheckScrollViewShouldFullHeight(this.realTotalData);
        const node = `.zp-page-${type}`;
        const marginText = `margin${type.slice(0, 1).toUpperCase() + type.slice(1)}`;
        let safeAreaInsetBottomAdd = this.safeAreaInsetBottom;
        this.$nextTick(() => {
          let delayTime = 0;
          u.delay(() => {
            this._getNodeClientRect(node).then((res) => {
              if (res) {
                let pageScrollNodeHeight = res[0].height;
                if (type === "bottom") {
                  if (safeAreaInsetBottomAdd) {
                    pageScrollNodeHeight += this.safeAreaBottom;
                  }
                } else {
                  this.cacheTopHeight = pageScrollNodeHeight;
                }
                this.$set(this.scrollViewStyle, marginText, `${pageScrollNodeHeight}px`);
              } else if (safeAreaInsetBottomAdd) {
                this.$set(this.scrollViewStyle, marginText, `${this.safeAreaBottom}px`);
              }
            });
          }, delayTime);
        });
      }
    }
  };
  const backToTopModule = {
    props: {
      // 自动显示点击返回顶部按钮，默认为否
      autoShowBackToTop: {
        type: Boolean,
        default: u.gc("autoShowBackToTop", false)
      },
      // 点击返回顶部按钮显示/隐藏的阈值(滚动距离)，单位为px，默认为400rpx
      backToTopThreshold: {
        type: [Number, String],
        default: u.gc("backToTopThreshold", "400rpx")
      },
      // 点击返回顶部按钮的自定义图片地址，默认使用z-paging内置的图片
      backToTopImg: {
        type: String,
        default: u.gc("backToTopImg", "")
      },
      // 点击返回顶部按钮返回到顶部时是否展示过渡动画，默认为是
      backToTopWithAnimate: {
        type: Boolean,
        default: u.gc("backToTopWithAnimate", true)
      },
      // 点击返回顶部按钮与底部的距离，注意添加单位px或rpx，默认为160rpx
      backToTopBottom: {
        type: [Number, String],
        default: u.gc("backToTopBottom", "160rpx")
      },
      // 点击返回顶部按钮的自定义样式
      backToTopStyle: {
        type: Object,
        default: u.gc("backToTopStyle", {})
      },
      // iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向，默认为是
      enableBackToTop: {
        type: Boolean,
        default: u.gc("enableBackToTop", true)
      }
    },
    data() {
      return {
        // 点击返回顶部的class
        backToTopClass: "zp-back-to-top zp-back-to-top-hide",
        // 上次点击返回顶部的时间
        lastBackToTopShowTime: 0,
        // 点击返回顶部显示的class是否在展示中，使得按钮展示/隐藏过度效果更自然
        showBackToTopClass: false
      };
    },
    computed: {
      backToTopThresholdUnitConverted() {
        return u.addUnit(this.backToTopThreshold, this.unit);
      },
      backToTopBottomUnitConverted() {
        return u.addUnit(this.backToTopBottom, this.unit);
      },
      finalEnableBackToTop() {
        return this.usePageScroll ? false : this.enableBackToTop;
      },
      finalBackToTopThreshold() {
        return u.convertToPx(this.backToTopThresholdUnitConverted);
      },
      finalBackToTopStyle() {
        const backToTopStyle = this.backToTopStyle;
        if (!backToTopStyle.bottom) {
          backToTopStyle.bottom = this.windowBottom + u.convertToPx(this.backToTopBottomUnitConverted) + "px";
        }
        if (!backToTopStyle.position) {
          backToTopStyle.position = this.usePageScroll ? "fixed" : "absolute";
        }
        return backToTopStyle;
      },
      finalBackToTopClass() {
        return `${this.backToTopClass} zp-back-to-top-${this.unit}`;
      }
    },
    methods: {
      // 点击了返回顶部
      _backToTopClick() {
        let callbacked = false;
        this.$emit("backToTopClick", (toTop) => {
          (toTop === void 0 || toTop === true) && this._handleToTop();
          callbacked = true;
        });
        this.$nextTick(() => {
          !callbacked && this._handleToTop();
        });
      },
      // 处理滚动到顶部
      _handleToTop() {
        !this.backToTopWithAnimate && this._checkShouldShowBackToTop(0);
        this.scrollToTop(this.backToTopWithAnimate);
      },
      // 判断是否要显示返回顶部按钮
      _checkShouldShowBackToTop(scrollTop) {
        if (!this.autoShowBackToTop) {
          this.showBackToTopClass = false;
          return;
        }
        if (scrollTop > this.finalBackToTopThreshold) {
          if (!this.showBackToTopClass) {
            this.showBackToTopClass = true;
            this.lastBackToTopShowTime = (/* @__PURE__ */ new Date()).getTime();
            u.delay(() => {
              this.backToTopClass = "zp-back-to-top zp-back-to-top-show";
            }, 300);
          }
        } else {
          if (this.showBackToTopClass) {
            this.backToTopClass = "zp-back-to-top zp-back-to-top-hide";
            u.delay(() => {
              this.showBackToTopClass = false;
            }, (/* @__PURE__ */ new Date()).getTime() - this.lastBackToTopShowTime < 500 ? 0 : 300);
          }
        }
      }
    }
  };
  const virtualListModule = {
    props: {
      // 是否使用虚拟列表，默认为否
      useVirtualList: {
        type: Boolean,
        default: u.gc("useVirtualList", false)
      },
      // 在使用虚拟列表时，是否使用兼容模式，默认为否
      useCompatibilityMode: {
        type: Boolean,
        default: u.gc("useCompatibilityMode", false)
      },
      // 使用兼容模式时传递的附加数据
      extraData: {
        type: Object,
        default: u.gc("extraData", {})
      },
      // 是否在z-paging内部循环渲染列表(内置列表)，默认为否。若use-virtual-list为true，则此项恒为true
      useInnerList: {
        type: Boolean,
        default: u.gc("useInnerList", false)
      },
      // 强制关闭inner-list，默认为false，如果为true将强制关闭innerList，适用于开启了虚拟列表后需要强制关闭inner-list的情况
      forceCloseInnerList: {
        type: Boolean,
        default: u.gc("forceCloseInnerList", false)
      },
      // 内置列表cell的key名称，仅nvue有效，在nvue中开启use-inner-list时必须填此项
      cellKeyName: {
        type: String,
        default: u.gc("cellKeyName", "")
      },
      // innerList样式
      innerListStyle: {
        type: Object,
        default: u.gc("innerListStyle", {})
      },
      // innerCell样式
      innerCellStyle: {
        type: Object,
        default: u.gc("innerCellStyle", {})
      },
      // 预加载的列表可视范围(列表高度)页数，默认为12，即预加载当前页及上下各12页的cell。此数值越大，则虚拟列表中加载的dom越多，内存消耗越大(会维持在一个稳定值)，但增加预加载页面数量可缓解快速滚动短暂白屏问题
      preloadPage: {
        type: [Number, String],
        default: u.gc("preloadPage", 12),
        validator: (value) => {
          if (value <= 0)
            u.consoleErr("preload-page必须大于0！");
          return value > 0;
        }
      },
      // 虚拟列表cell高度模式，默认为fixed，也就是每个cell高度完全相同，将以第一个cell高度为准进行计算。可选值【dynamic】，即代表高度是动态非固定的，【dynamic】性能低于【fixed】。
      cellHeightMode: {
        type: String,
        default: u.gc("cellHeightMode", Enum.CellHeightMode.Fixed)
      },
      // 固定的cell高度，cellHeightMode=fixed才有效，若设置了值，则不计算第一个cell高度而使用设置的cell高度
      fixedCellHeight: {
        type: [Number, String],
        default: u.gc("fixedCellHeight", 0)
      },
      // 虚拟列表列数，默认为1。常用于每行有多列的情况，例如每行有2列数据，需要将此值设置为2
      virtualListCol: {
        type: [Number, String],
        default: u.gc("virtualListCol", 1)
      },
      // 虚拟列表scroll取样帧率，默认为80，过低容易出现白屏问题，过高容易出现卡顿问题
      virtualScrollFps: {
        type: [Number, String],
        default: u.gc("virtualScrollFps", 80)
      }
    },
    data() {
      return {
        virtualListKey: u.getInstanceId(),
        virtualPageHeight: 0,
        virtualCellHeight: 0,
        virtualScrollTimeStamp: 0,
        virtualList: [],
        virtualPlaceholderTopHeight: 0,
        virtualPlaceholderBottomHeight: 0,
        virtualTopRangeIndex: 0,
        virtualBottomRangeIndex: 0,
        lastVirtualTopRangeIndex: 0,
        lastVirtualBottomRangeIndex: 0,
        virtualItemInsertedCount: 0,
        virtualHeightCacheList: [],
        getCellHeightRetryCount: {
          fixed: 0,
          dynamic: 0
        },
        pagingOrgTop: -1,
        updateVirtualListFromDataChange: false
      };
    },
    watch: {
      // 监听总数据的改变，刷新虚拟列表布局
      realTotalData() {
        this.updateVirtualListRender();
      },
      // 监听虚拟列表渲染数组的改变并emit
      virtualList(newVal) {
        this.$emit("update:virtualList", newVal);
        this.$emit("virtualListChange", newVal);
      }
    },
    computed: {
      virtualCellIndexKey() {
        return c.listCellIndexKey;
      },
      finalUseVirtualList() {
        if (this.useVirtualList && this.usePageScroll) {
          u.consoleErr("使用页面滚动时，开启虚拟列表无效！");
        }
        return this.useVirtualList && !this.usePageScroll;
      },
      finalUseInnerList() {
        return this.useInnerList || this.finalUseVirtualList && !this.forceCloseInnerList;
      },
      finalCellKeyName() {
        return this.cellKeyName;
      },
      finalVirtualPageHeight() {
        return this.virtualPageHeight > 0 ? this.virtualPageHeight : this.windowHeight;
      },
      finalFixedCellHeight() {
        return u.convertToPx(this.fixedCellHeight);
      },
      virtualRangePageHeight() {
        return this.finalVirtualPageHeight * this.preloadPage;
      },
      virtualScrollDisTimeStamp() {
        return 1e3 / this.virtualScrollFps;
      }
    },
    methods: {
      // 在使用动态高度虚拟列表时，若在列表数组中需要插入某个item，需要调用此方法；item:需要插入的item，index:插入的cell位置，若index为2，则插入的item在原list的index=1之后，index从0开始
      doInsertVirtualListItem(item, index2) {
        if (this.cellHeightMode !== Enum.CellHeightMode.Dynamic)
          return;
        this.virtualItemInsertedCount++;
        if (!item || Object.prototype.toString.call(item) !== "[object Object]") {
          item = { item };
        }
        const cellIndexKey = this.virtualCellIndexKey;
        item[cellIndexKey] = `custom-${this.virtualItemInsertedCount}`;
        item[c.listCellIndexUniqueKey] = `${this.virtualListKey}-${item[cellIndexKey]}`;
        this.$nextTick(async () => {
          let retryCount = 0;
          while (retryCount <= 10) {
            await u.wait(c.delayTime);
            const cellNode = await this._getNodeClientRect(`#zp-id-${item[cellIndexKey]}`, this.finalUseInnerList);
            if (!cellNode) {
              retryCount++;
              continue;
            }
            const currentHeight = cellNode ? cellNode[0].height : 0;
            const lastHeightCache = this.virtualHeightCacheList[index2 - 1];
            const lastTotalHeight = lastHeightCache ? lastHeightCache.totalHeight : 0;
            this.virtualHeightCacheList.splice(index2, 0, {
              height: currentHeight,
              lastTotalHeight,
              totalHeight: lastTotalHeight + currentHeight
            });
            for (let i = index2 + 1; i < this.virtualHeightCacheList.length; i++) {
              const thisNode = this.virtualHeightCacheList[i];
              thisNode.lastTotalHeight += currentHeight;
              thisNode.totalHeight += currentHeight;
            }
            this._updateVirtualScroll(this.oldScrollTop);
            break;
          }
        });
      },
      // 在使用动态高度虚拟列表时，手动更新指定cell的缓存高度(当cell高度在初始化之后再次改变时调用)；index:需要更新的cell在列表中的位置，从0开始
      didUpdateVirtualListCell(index2) {
        if (this.cellHeightMode !== Enum.CellHeightMode.Dynamic)
          return;
        const currentNode = this.virtualHeightCacheList[index2];
        this.$nextTick(() => {
          this._getNodeClientRect(`#zp-id-${index2}`, this.finalUseInnerList).then((cellNode) => {
            const cellNodeHeight = cellNode ? cellNode[0].height : 0;
            const heightDis = cellNodeHeight - currentNode.height;
            currentNode.height = cellNodeHeight;
            currentNode.totalHeight = currentNode.lastTotalHeight + cellNodeHeight;
            for (let i = index2 + 1; i < this.virtualHeightCacheList.length; i++) {
              const thisNode = this.virtualHeightCacheList[i];
              thisNode.totalHeight += heightDis;
              thisNode.lastTotalHeight += heightDis;
            }
          });
        });
      },
      // 在使用动态高度虚拟列表时，若删除了列表数组中的某个item，需要调用此方法以更新高度缓存数组；index:删除的cell在列表中的位置，从0开始
      didDeleteVirtualListCell(index2) {
        if (this.cellHeightMode !== Enum.CellHeightMode.Dynamic)
          return;
        const currentNode = this.virtualHeightCacheList[index2];
        for (let i = index2 + 1; i < this.virtualHeightCacheList.length; i++) {
          const thisNode = this.virtualHeightCacheList[i];
          thisNode.totalHeight -= currentNode.height;
          thisNode.lastTotalHeight -= currentNode.height;
        }
        this.virtualHeightCacheList.splice(index2, 1);
      },
      // 手动触发虚拟列表渲染更新，可用于解决例如修改了虚拟列表数组中元素，但展示未更新的情况
      updateVirtualListRender() {
        if (this.finalUseVirtualList) {
          this.updateVirtualListFromDataChange = true;
          this.$nextTick(() => {
            this.getCellHeightRetryCount.fixed = 0;
            if (this.realTotalData.length) {
              this.cellHeightMode === Enum.CellHeightMode.Fixed && this.isFirstPage && this._updateFixedCellHeight();
            } else {
              this._resetDynamicListState(!this.isUserPullDown);
            }
            this._updateVirtualScroll(this.oldScrollTop);
          });
        }
      },
      // 初始化虚拟列表
      _virtualListInit() {
        this.$nextTick(() => {
          u.delay(() => {
            this._getNodeClientRect(".zp-scroll-view").then((node) => {
              if (node) {
                this.pagingOrgTop = node[0].top;
                this.virtualPageHeight = node[0].height;
              }
            });
          });
        });
      },
      // cellHeightMode为fixed时获取第一个cell高度
      _updateFixedCellHeight() {
        if (!this.finalFixedCellHeight) {
          this.$nextTick(() => {
            u.delay(() => {
              this._getNodeClientRect(`#zp-id-${0}`, this.finalUseInnerList).then((cellNode) => {
                if (!cellNode) {
                  if (this.getCellHeightRetryCount.fixed > 10)
                    return;
                  this.getCellHeightRetryCount.fixed++;
                  this._updateFixedCellHeight();
                } else {
                  this.virtualCellHeight = cellNode[0].height;
                  this._updateVirtualScroll(this.oldScrollTop);
                }
              });
            }, c.delayTime, "updateFixedCellHeightDelay");
          });
        } else {
          this.virtualCellHeight = this.finalFixedCellHeight;
        }
      },
      // cellHeightMode为dynamic时获取每个cell高度
      _updateDynamicCellHeight(list, dataFrom = "bottom") {
        const dataFromTop = dataFrom === "top";
        const heightCacheList = this.virtualHeightCacheList;
        const currentCacheList = dataFromTop ? [] : heightCacheList;
        let listTotalHeight = 0;
        this.$nextTick(() => {
          u.delay(async () => {
            for (let i = 0; i < list.length; i++) {
              const cellNode = await this._getNodeClientRect(`#zp-id-${list[i][this.virtualCellIndexKey]}`, this.finalUseInnerList);
              const currentHeight = cellNode ? cellNode[0].height : 0;
              if (!cellNode) {
                if (this.getCellHeightRetryCount.dynamic <= 10) {
                  heightCacheList.splice(heightCacheList.length - i, i);
                  this.getCellHeightRetryCount.dynamic++;
                  this._updateDynamicCellHeight(list, dataFrom);
                }
                return;
              }
              const lastHeightCache = currentCacheList.length ? currentCacheList.slice(-1)[0] : null;
              const lastTotalHeight = lastHeightCache ? lastHeightCache.totalHeight : 0;
              currentCacheList.push({
                height: currentHeight,
                lastTotalHeight,
                totalHeight: lastTotalHeight + currentHeight
              });
              if (dataFromTop) {
                listTotalHeight += currentHeight;
              }
            }
            if (dataFromTop && list.length) {
              for (let i = 0; i < heightCacheList.length; i++) {
                const heightCacheItem = heightCacheList[i];
                heightCacheItem.lastTotalHeight += listTotalHeight;
                heightCacheItem.totalHeight += listTotalHeight;
              }
              this.virtualHeightCacheList = currentCacheList.concat(heightCacheList);
            }
            this._updateVirtualScroll(this.oldScrollTop);
          }, c.delayTime, "updateDynamicCellHeightDelay");
        });
      },
      // 设置cellItem的index
      _setCellIndex(list, dataFrom = "bottom") {
        let currentItemIndex = 0;
        const cellIndexKey = this.virtualCellIndexKey;
        [Enum.QueryFrom.Refresh, Enum.QueryFrom.Reload].indexOf(this.queryFrom) >= 0 && this._resetDynamicListState();
        if (this.totalData.length) {
          if (dataFrom === "bottom") {
            currentItemIndex = this.realTotalData.length;
            const lastItem = this.realTotalData.length ? this.realTotalData.slice(-1)[0] : null;
            if (lastItem && lastItem[cellIndexKey] !== void 0) {
              currentItemIndex = lastItem[cellIndexKey] + 1;
            }
          } else if (dataFrom === "top") {
            const firstItem = this.realTotalData.length ? this.realTotalData[0] : null;
            if (firstItem && firstItem[cellIndexKey] !== void 0) {
              currentItemIndex = firstItem[cellIndexKey] - list.length;
            }
          }
        } else {
          this._resetDynamicListState();
        }
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          if (!item || Object.prototype.toString.call(item) !== "[object Object]") {
            item = { item };
          }
          if (item[c.listCellIndexUniqueKey]) {
            item = u.deepCopy(item);
          }
          item[cellIndexKey] = currentItemIndex + i;
          item[c.listCellIndexUniqueKey] = `${this.virtualListKey}-${item[cellIndexKey]}`;
          list[i] = item;
        }
        this.getCellHeightRetryCount.dynamic = 0;
        this.cellHeightMode === Enum.CellHeightMode.Dynamic && this._updateDynamicCellHeight(list, dataFrom);
      },
      // 更新scroll滚动（虚拟列表滚动时触发）
      _updateVirtualScroll(scrollTop, scrollDiff = 0) {
        const currentTimeStamp = u.getTime();
        scrollTop === 0 && this._resetTopRange();
        if (scrollTop !== 0 && this.virtualScrollTimeStamp && currentTimeStamp - this.virtualScrollTimeStamp <= this.virtualScrollDisTimeStamp) {
          return;
        }
        this.virtualScrollTimeStamp = currentTimeStamp;
        let scrollIndex = 0;
        const cellHeightMode = this.cellHeightMode;
        if (cellHeightMode === Enum.CellHeightMode.Fixed) {
          scrollIndex = parseInt(scrollTop / this.virtualCellHeight) || 0;
          this._updateFixedTopRangeIndex(scrollIndex);
          this._updateFixedBottomRangeIndex(scrollIndex);
        } else if (cellHeightMode === Enum.CellHeightMode.Dynamic) {
          const scrollDirection = scrollDiff > 0 ? "top" : "bottom";
          const rangePageHeight = this.virtualRangePageHeight;
          const topRangePageOffset = scrollTop - rangePageHeight;
          const bottomRangePageOffset = scrollTop + this.finalVirtualPageHeight + rangePageHeight;
          let virtualBottomRangeIndex = 0;
          let virtualPlaceholderBottomHeight = 0;
          let reachedLimitBottom = false;
          const heightCacheList = this.virtualHeightCacheList;
          const lastHeightCache = !!heightCacheList ? heightCacheList.slice(-1)[0] : null;
          let startTopRangeIndex = this.virtualTopRangeIndex;
          if (scrollDirection === "bottom") {
            for (let i = startTopRangeIndex; i < heightCacheList.length; i++) {
              const heightCacheItem = heightCacheList[i];
              if (heightCacheItem && heightCacheItem.totalHeight > topRangePageOffset) {
                this.virtualTopRangeIndex = i;
                this.virtualPlaceholderTopHeight = heightCacheItem.lastTotalHeight;
                break;
              }
            }
          } else {
            let topRangeMatched = false;
            for (let i = startTopRangeIndex; i >= 0; i--) {
              const heightCacheItem = heightCacheList[i];
              if (heightCacheItem && heightCacheItem.totalHeight < topRangePageOffset) {
                this.virtualTopRangeIndex = i;
                this.virtualPlaceholderTopHeight = heightCacheItem.lastTotalHeight;
                topRangeMatched = true;
                break;
              }
            }
            !topRangeMatched && this._resetTopRange();
          }
          for (let i = this.virtualTopRangeIndex; i < heightCacheList.length; i++) {
            const heightCacheItem = heightCacheList[i];
            if (heightCacheItem && heightCacheItem.totalHeight > bottomRangePageOffset) {
              virtualBottomRangeIndex = i;
              virtualPlaceholderBottomHeight = lastHeightCache.totalHeight - heightCacheItem.totalHeight;
              reachedLimitBottom = true;
              break;
            }
          }
          if (!reachedLimitBottom || this.virtualBottomRangeIndex === 0) {
            this.virtualBottomRangeIndex = this.realTotalData.length ? this.realTotalData.length - 1 : this.pageSize;
            this.virtualPlaceholderBottomHeight = 0;
          } else {
            this.virtualBottomRangeIndex = virtualBottomRangeIndex;
            this.virtualPlaceholderBottomHeight = virtualPlaceholderBottomHeight;
          }
          this._updateVirtualList();
        }
      },
      // 更新fixedCell模式下topRangeIndex&placeholderTopHeight
      _updateFixedTopRangeIndex(scrollIndex) {
        let virtualTopRangeIndex = this.virtualCellHeight === 0 ? 0 : scrollIndex - (parseInt(this.finalVirtualPageHeight / this.virtualCellHeight) || 1) * this.preloadPage;
        virtualTopRangeIndex *= this.virtualListCol;
        virtualTopRangeIndex = Math.max(0, virtualTopRangeIndex);
        this.virtualTopRangeIndex = virtualTopRangeIndex;
        this.virtualPlaceholderTopHeight = virtualTopRangeIndex / this.virtualListCol * this.virtualCellHeight;
      },
      // 更新fixedCell模式下bottomRangeIndex&placeholderBottomHeight
      _updateFixedBottomRangeIndex(scrollIndex) {
        let virtualBottomRangeIndex = this.virtualCellHeight === 0 ? this.pageSize : scrollIndex + (parseInt(this.finalVirtualPageHeight / this.virtualCellHeight) || 1) * (this.preloadPage + 1);
        virtualBottomRangeIndex *= this.virtualListCol;
        virtualBottomRangeIndex = Math.min(this.realTotalData.length, virtualBottomRangeIndex);
        this.virtualBottomRangeIndex = virtualBottomRangeIndex;
        this.virtualPlaceholderBottomHeight = (this.realTotalData.length - virtualBottomRangeIndex) * this.virtualCellHeight / this.virtualListCol;
        this._updateVirtualList();
      },
      // 更新virtualList
      _updateVirtualList() {
        const shouldUpdateList = this.updateVirtualListFromDataChange || (this.lastVirtualTopRangeIndex !== this.virtualTopRangeIndex || this.lastVirtualBottomRangeIndex !== this.virtualBottomRangeIndex);
        if (shouldUpdateList) {
          this.updateVirtualListFromDataChange = false;
          this.lastVirtualTopRangeIndex = this.virtualTopRangeIndex;
          this.lastVirtualBottomRangeIndex = this.virtualBottomRangeIndex;
          this.virtualList = this.realTotalData.slice(this.virtualTopRangeIndex, this.virtualBottomRangeIndex + 1);
        }
      },
      // 重置动态cell模式下的高度缓存数据、虚拟列表和滚动状态
      _resetDynamicListState(resetVirtualList = false) {
        this.virtualHeightCacheList = [];
        if (resetVirtualList) {
          this.virtualList = [];
        }
        this.virtualTopRangeIndex = 0;
        this.virtualPlaceholderTopHeight = 0;
      },
      // 重置topRangeIndex和placeholderTopHeight
      _resetTopRange() {
        this.virtualTopRangeIndex = 0;
        this.virtualPlaceholderTopHeight = 0;
        this._updateVirtualList();
      },
      // 检测虚拟列表当前滚动位置，如发现滚动位置不正确则重新计算虚拟列表相关参数(为解决在App中可能出现的长时间进入后台后打开App白屏的问题)
      _checkVirtualListScroll() {
        if (this.finalUseVirtualList) {
          this.$nextTick(() => {
            this._getNodeClientRect(".zp-paging-touch-view").then((node) => {
              const currentTop = node ? node[0].top : 0;
              if (!node || currentTop === this.pagingOrgTop && this.virtualPlaceholderTopHeight !== 0) {
                this._updateVirtualScroll(0);
              }
            });
          });
        }
      },
      // 处理使用内置列表时点击了cell事件
      _innerCellClick(item, index2) {
        this.$emit("innerCellClick", item, index2);
      }
    }
  };
  const systemInfo = uni.getSystemInfoSync();
  const _sfc_main$9 = {
    name: "z-paging",
    components: {
      zPagingRefresh,
      zPagingLoadMore,
      zPagingEmptyView: __easycom_0$2
    },
    mixins: [
      commonLayoutModule,
      dataHandleModule,
      i18nModule,
      nvueModule,
      emptyModule,
      refresherModule,
      loadMoreModule,
      loadingModule,
      chatRecordModerModule,
      scrollerModule,
      backToTopModule,
      virtualListModule
    ],
    data() {
      return {
        // --------------静态资源---------------
        base64Arrow: zStatic.base64Arrow,
        base64Flower: zStatic.base64Flower,
        base64BackToTop: zStatic.base64BackToTop,
        // -------------全局数据相关--------------
        // 当前加载类型
        loadingType: Enum.LoadingType.Refresher,
        requestTimeStamp: 0,
        wxsPropType: "",
        renderPropScrollTop: -1,
        checkScrolledToBottomTimeOut: null,
        cacheTopHeight: -1,
        statusBarHeight: systemInfo.statusBarHeight,
        // --------------状态&判断---------------
        insideOfPaging: -1,
        isLoadFailed: false,
        isIos: systemInfo.platform === "ios",
        disabledBounce: false,
        fromCompleteEmit: false,
        disabledCompleteEmit: false,
        pageLaunched: false,
        active: false,
        // ---------------wxs相关---------------
        wxsIsScrollTopInTopRange: true,
        wxsScrollTop: 0,
        wxsPageScrollTop: 0,
        wxsOnPullingDown: false
      };
    },
    props: {
      // 调用complete后延迟处理的时间，单位为毫秒，默认0毫秒，优先级高于minDelay
      delay: {
        type: [Number, String],
        default: u.gc("delay", 0)
      },
      // 触发@query后最小延迟处理的时间，单位为毫秒，默认0毫秒，优先级低于delay（假设设置为300毫秒，若分页请求时间小于300毫秒，则在调用complete后延迟[300毫秒-请求时长]；若请求时长大于300毫秒，则不延迟），当show-refresher-when-reload为true或reload(true)时，其最小值为400
      minDelay: {
        type: [Number, String],
        default: u.gc("minDelay", 0)
      },
      // 设置z-paging的style，部分平台(如微信小程序)无法直接修改组件的style，可使用此属性代替
      pagingStyle: {
        type: Object,
        default: u.gc("pagingStyle", {})
      },
      // z-paging的高度，优先级低于pagingStyle中设置的height；传字符串，如100px、100rpx、100%
      height: {
        type: String,
        default: u.gc("height", "")
      },
      // z-paging的宽度，优先级低于pagingStyle中设置的width；传字符串，如100px、100rpx、100%
      width: {
        type: String,
        default: u.gc("width", "")
      },
      // z-paging的最大宽度，优先级低于pagingStyle中设置的max-width；传字符串，如100px、100rpx、100%。默认为空，也就是铺满窗口宽度，若设置了特定值则会自动添加margin: 0 auto
      maxWidth: {
        type: String,
        default: u.gc("maxWidth", "")
      },
      // z-paging的背景色，优先级低于pagingStyle中设置的background。传字符串，如"#ffffff"
      bgColor: {
        type: String,
        default: u.gc("bgColor", "")
      },
      // 设置z-paging的容器(插槽的父view)的style
      pagingContentStyle: {
        type: Object,
        default: u.gc("pagingContentStyle", {})
      },
      // z-paging是否自动高度，若自动高度则会自动铺满屏幕
      autoHeight: {
        type: Boolean,
        default: u.gc("autoHeight", false)
      },
      // z-paging是否自动高度时，附加的高度，注意添加单位px或rpx，若需要减少高度，则传负数
      autoHeightAddition: {
        type: [Number, String],
        default: u.gc("autoHeightAddition", "0px")
      },
      // loading(下拉刷新、上拉加载更多)的主题样式，支持black，white，默认black
      defaultThemeStyle: {
        type: String,
        default: u.gc("defaultThemeStyle", "black")
      },
      // z-paging是否使用fixed布局，若使用fixed布局，则z-paging的父view无需固定高度，z-paging高度默认为100%，默认为是(当使用内置scroll-view滚动时有效)
      fixed: {
        type: Boolean,
        default: u.gc("fixed", true)
      },
      // 是否开启底部安全区域适配
      safeAreaInsetBottom: {
        type: Boolean,
        default: u.gc("safeAreaInsetBottom", false)
      },
      // 开启底部安全区域适配后，是否使用placeholder形式实现，默认为否。为否时滚动区域会自动避开底部安全区域，也就是所有滚动内容都不会挡住底部安全区域，若设置为是，则滚动时滚动内容会挡住底部安全区域，但是当滚动到底部时才会避开底部安全区域
      useSafeAreaPlaceholder: {
        type: Boolean,
        default: u.gc("useSafeAreaPlaceholder", false)
      },
      // z-paging bottom的背景色，默认透明，传字符串，如"#ffffff"
      bottomBgColor: {
        type: String,
        default: u.gc("bottomBgColor", "")
      },
      // slot="top"的view的z-index，默认为99，仅使用页面滚动时有效
      topZIndex: {
        type: Number,
        default: u.gc("topZIndex", 99)
      },
      // z-paging内容容器父view的z-index，默认为1
      superContentZIndex: {
        type: Number,
        default: u.gc("superContentZIndex", 1)
      },
      // z-paging内容容器部分的z-index，默认为1
      contentZIndex: {
        type: Number,
        default: u.gc("contentZIndex", 1)
      },
      // z-paging二楼的z-index，默认为100
      f2ZIndex: {
        type: Number,
        default: u.gc("f2ZIndex", 100)
      },
      // 使用页面滚动时，是否在不满屏时自动填充满屏幕，默认为是
      autoFullHeight: {
        type: Boolean,
        default: u.gc("autoFullHeight", true)
      },
      // 是否监听列表触摸方向改变，默认为否
      watchTouchDirectionChange: {
        type: Boolean,
        default: u.gc("watchTouchDirectionChange", false)
      },
      // z-paging中布局的单位，默认为rpx
      unit: {
        type: String,
        default: u.gc("unit", "rpx")
      }
    },
    created() {
      if (this.createdReload && !this.refresherOnly && this.auto) {
        this._startLoading();
        this.$nextTick(this._preReload);
      }
    },
    mounted() {
      this.active = true;
      this.wxsPropType = u.getTime().toString();
      this.renderJsIgnore;
      if (!this.createdReload && !this.refresherOnly && this.auto) {
        u.delay(() => this.$nextTick(this._preReload), 0);
      }
      this.finalUseCache && this._setListByLocalCache();
      this.$nextTick(() => {
        this.systemInfo = uni.getSystemInfoSync();
        !this.usePageScroll && this.autoHeight && this._setAutoHeight();
        this.loaded = true;
        u.delay(() => {
          this.updateFixedLayout();
          this._updateCachedSuperContentHeight();
        });
      });
      this.updatePageScrollTopHeight();
      this.updatePageScrollBottomHeight();
      this.updateLeftAndRightWidth();
      if (this.finalRefresherEnabled && this.useCustomRefresher) {
        this.$nextTick(() => {
          this.isTouchmoving = true;
        });
      }
      this._onEmit();
      this.finalUseVirtualList && this._virtualListInit();
    },
    destroyed() {
      this._handleUnmounted();
    },
    unmounted() {
      this._handleUnmounted();
    },
    watch: {
      defaultThemeStyle: {
        handler(newVal) {
          if (newVal.length) {
            this.finalRefresherDefaultStyle = newVal;
          }
        },
        immediate: true
      },
      autoHeight(newVal) {
        this.loaded && !this.usePageScroll && this._setAutoHeight(newVal);
      },
      autoHeightAddition(newVal) {
        this.loaded && !this.usePageScroll && this.autoHeight && this._setAutoHeight(newVal);
      }
    },
    computed: {
      // 当前z-paging的内置样式
      finalPagingStyle() {
        const pagingStyle = { ...this.pagingStyle };
        if (!this.systemInfo)
          return pagingStyle;
        const { windowTop, windowBottom } = this;
        if (!this.usePageScroll && this.fixed) {
          if (windowTop && !pagingStyle.top) {
            pagingStyle.top = windowTop + "px";
          }
          if (windowBottom && !pagingStyle.bottom) {
            pagingStyle.bottom = windowBottom + "px";
          }
        }
        if (this.bgColor.length && !pagingStyle["background"]) {
          pagingStyle["background"] = this.bgColor;
        }
        if (this.height.length && !pagingStyle["height"]) {
          pagingStyle["height"] = this.height;
        }
        if (this.width.length && !pagingStyle["width"]) {
          pagingStyle["width"] = this.width;
        }
        if (this.maxWidth.length && !pagingStyle["max-width"]) {
          pagingStyle["max-width"] = this.maxWidth;
          pagingStyle["margin"] = "0 auto";
        }
        return pagingStyle;
      },
      // 当前z-paging内容的样式
      finalPagingContentStyle() {
        if (this.contentZIndex != 1) {
          this.pagingContentStyle["z-index"] = this.contentZIndex;
          this.pagingContentStyle["position"] = "relative";
        }
        return this.pagingContentStyle;
      },
      renderJsIgnore() {
        if (this.usePageScroll && this.useChatRecordMode || !this.refresherEnabled && this.scrollable || !this.useCustomRefresher) {
          this.$nextTick(() => {
            this.renderPropScrollTop = 10;
          });
        }
        return 0;
      },
      windowHeight() {
        if (!this.systemInfo)
          return 0;
        return this.systemInfo.windowHeight || 0;
      },
      windowBottom() {
        if (!this.systemInfo)
          return 0;
        let windowBottom = this.systemInfo.windowBottom || 0;
        if (this.safeAreaInsetBottom && !this.useSafeAreaPlaceholder && !this.useChatRecordMode) {
          windowBottom += this.safeAreaBottom;
        }
        return windowBottom;
      },
      isIosAndH5() {
        return false;
      }
    },
    methods: {
      // 当前版本号
      getVersion() {
        return `z-paging v${c.version}`;
      },
      // 设置nvue List的specialEffects
      setSpecialEffects(args) {
        this.setListSpecialEffects(args);
      },
      // 与setSpecialEffects等效，兼容旧版本
      setListSpecialEffects(args) {
        this.nFixFreezing = args && Object.keys(args).length;
        if (this.isIos) {
          this.privateRefresherEnabled = 0;
        }
        !this.usePageScroll && this.$refs["zp-n-list"].setSpecialEffects(args);
      },
      // 当app长时间进入后台后进入前台，因系统内存管理导致app重新加载时，进行一些适配处理
      _handlePageLaunch() {
        if (this.pageLaunched) {
          this.refresherThresholdUpdateTag = 1;
          this.$nextTick(() => {
            this.refresherThresholdUpdateTag = 0;
          });
          this._checkVirtualListScroll();
        }
        this.pageLaunched = true;
      },
      // 使手机发生较短时间的振动（15ms）
      _doVibrateShort() {
        if (this.isIos) {
          const UISelectionFeedbackGenerator = plus.ios.importClass("UISelectionFeedbackGenerator");
          const feedbackGenerator = new UISelectionFeedbackGenerator();
          feedbackGenerator.init();
          setTimeout(() => {
            feedbackGenerator.selectionChanged();
          }, 0);
        } else {
          plus.device.vibrate(15);
        }
      },
      // 设置z-paging高度
      async _setAutoHeight(shouldFullHeight = true, scrollViewNode = null) {
        let heightKey = "min-height";
        heightKey = "min-height";
        try {
          if (shouldFullHeight) {
            let finalScrollViewNode = scrollViewNode || await this._getNodeClientRect(".zp-scroll-view");
            let finalScrollBottomNode = await this._getNodeClientRect(".zp-page-bottom");
            if (finalScrollViewNode) {
              const scrollViewTop = finalScrollViewNode[0].top;
              let scrollViewHeight = this.windowHeight - scrollViewTop;
              scrollViewHeight -= finalScrollBottomNode ? finalScrollBottomNode[0].height : 0;
              const additionHeight = u.convertToPx(this.autoHeightAddition);
              const finalHeight = scrollViewHeight + additionHeight - (this.insideMore ? 1 : 0) + "px !important";
              this.$set(this.scrollViewStyle, heightKey, finalHeight);
              this.$set(this.scrollViewInStyle, heightKey, finalHeight);
            }
          } else {
            this.$delete(this.scrollViewStyle, heightKey);
            this.$delete(this.scrollViewInStyle, heightKey);
          }
        } catch (e) {
        }
      },
      // 组件销毁后续处理
      _handleUnmounted() {
        this.active = false;
        this._offEmit();
        this.useChatRecordMode && uni.offKeyboardHeightChange(this._handleKeyboardHeightChange);
      },
      // 触发更新是否超出页面状态
      _updateInsideOfPaging() {
        this.insideMore && this.insideOfPaging === true && setTimeout(this.doLoadMore, 200);
      },
      // 清除timeout
      _cleanTimeout(timeout2) {
        if (timeout2) {
          clearTimeout(timeout2);
          timeout2 = null;
        }
        return timeout2;
      },
      // 添加全局emit监听
      _onEmit() {
        uni.$on(c.errorUpdateKey, (errorMsg) => {
          if (this.loading) {
            if (!!errorMsg) {
              this.customerEmptyViewErrorText = errorMsg;
            }
            this.complete(false).catch(() => {
            });
          }
        });
        uni.$on(c.completeUpdateKey, (data) => {
          setTimeout(() => {
            if (this.loading) {
              if (!this.disabledCompleteEmit) {
                const type = data.type || "normal";
                const list = data.list || data;
                const rule = data.rule;
                this.fromCompleteEmit = true;
                switch (type) {
                  case "normal":
                    this.complete(list);
                    break;
                  case "total":
                    this.completeByTotal(list, rule);
                    break;
                  case "nomore":
                    this.completeByNoMore(list, rule);
                    break;
                  case "key":
                    this.completeByKey(list, rule);
                    break;
                }
              } else {
                this.disabledCompleteEmit = false;
              }
            }
          }, 1);
        });
      },
      // 销毁全局emit和listener监听
      _offEmit() {
        uni.$off(c.errorUpdateKey);
        uni.$off(c.completeUpdateKey);
      }
    }
  };
  const block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("pagingWxs");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["pagingWxs"] = "bca0bb86";
  };
  const block1 = (Comp) => {
    (Comp.$renderjs || (Comp.$renderjs = [])).push("pagingRenderjs");
    (Comp.$renderjsModules || (Comp.$renderjsModules = {}))["pagingRenderjs"] = "a5d206f8";
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_z_paging_refresh = vue.resolveComponent("z-paging-refresh");
    const _component_z_paging_load_more = vue.resolveComponent("z-paging-load-more");
    const _component_z_paging_empty_view = resolveEasycom(vue.resolveDynamicComponent("z-paging-empty-view"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass({ "z-paging-content": true, "z-paging-content-full": !_ctx.usePageScroll, "z-paging-content-fixed": !_ctx.usePageScroll && _ctx.fixed, "z-paging-content-page": _ctx.usePageScroll, "z-paging-reached-top": _ctx.renderPropScrollTop < 1, "z-paging-use-chat-record-mode": _ctx.useChatRecordMode }),
        style: vue.normalizeStyle([_ctx.finalPagingStyle])
      },
      [
        vue.createCommentVNode(" 二楼view "),
        _ctx.showF2 && _ctx.showRefresherF2 ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers(() => {
            }, ["stop", "prevent"])),
            class: "zp-f2-content",
            style: vue.normalizeStyle([{ "transform": _ctx.f2Transform, "transition": `transform .2s linear`, "height": _ctx.superContentHeight + "px", "z-index": _ctx.f2ZIndex }])
          },
          [
            vue.renderSlot(_ctx.$slots, "f2", {}, void 0, true)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" 顶部固定的slot "),
        !_ctx.usePageScroll && _ctx.zSlots.top ? vue.renderSlot(_ctx.$slots, "top", { key: 1 }, void 0, true) : _ctx.usePageScroll && _ctx.zSlots.top ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 2,
            class: "zp-page-top",
            onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers(() => {
            }, ["stop", "prevent"])),
            style: vue.normalizeStyle([{ "top": `${_ctx.windowTop}px`, "z-index": _ctx.topZIndex }])
          },
          [
            vue.renderSlot(_ctx.$slots, "top", {}, void 0, true)
          ],
          36
          /* STYLE, NEED_HYDRATION */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass({ "zp-view-super": true, "zp-scroll-view-super": !_ctx.usePageScroll }),
            style: vue.normalizeStyle([_ctx.finalScrollViewStyle])
          },
          [
            _ctx.zSlots.left ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: vue.normalizeClass({ "zp-page-left": true, "zp-absoulte": _ctx.finalIsOldWebView })
              },
              [
                vue.renderSlot(_ctx.$slots, "left", {}, void 0, true)
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass({ "zp-scroll-view-container": true, "zp-absoulte": _ctx.finalIsOldWebView }),
                style: vue.normalizeStyle([_ctx.scrollViewContainerStyle])
              },
              [
                vue.createElementVNode("scroll-view", {
                  ref: "zp-scroll-view",
                  class: vue.normalizeClass({ "zp-scroll-view": true, "zp-scroll-view-absolute": !_ctx.usePageScroll, "zp-scroll-view-hide-scrollbar": !_ctx.showScrollbar }),
                  style: vue.normalizeStyle([_ctx.chatRecordRotateStyle]),
                  "scroll-top": _ctx.scrollTop,
                  "scroll-x": _ctx.scrollX,
                  "scroll-y": _ctx.finalScrollable,
                  "enable-back-to-top": _ctx.finalEnableBackToTop,
                  "show-scrollbar": _ctx.showScrollbar,
                  "scroll-with-animation": _ctx.finalScrollWithAnimation,
                  "scroll-into-view": _ctx.scrollIntoView,
                  "lower-threshold": _ctx.finalLowerThreshold,
                  "upper-threshold": 5,
                  "refresher-enabled": _ctx.finalRefresherEnabled && !_ctx.useCustomRefresher,
                  "refresher-threshold": _ctx.finalRefresherThreshold,
                  "refresher-default-style": _ctx.finalRefresherDefaultStyle,
                  "refresher-background": _ctx.refresherBackground,
                  "refresher-triggered": _ctx.finalRefresherTriggered,
                  onScroll: _cache[12] || (_cache[12] = (...args) => _ctx._scroll && _ctx._scroll(...args)),
                  onScrolltolower: _cache[13] || (_cache[13] = (...args) => _ctx._onScrollToLower && _ctx._onScrollToLower(...args)),
                  onScrolltoupper: _cache[14] || (_cache[14] = (...args) => _ctx._onScrollToUpper && _ctx._onScrollToUpper(...args)),
                  onRefresherrestore: _cache[15] || (_cache[15] = (...args) => _ctx._onRestore && _ctx._onRestore(...args)),
                  onRefresherrefresh: _cache[16] || (_cache[16] = ($event) => _ctx._onRefresh(true))
                }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: "zp-paging-touch-view",
                      onTouchstart: _cache[4] || (_cache[4] = (...args) => _ctx.pagingWxs.touchstart && _ctx.pagingWxs.touchstart(...args)),
                      onTouchmove: _cache[5] || (_cache[5] = (...args) => _ctx.pagingWxs.touchmove && _ctx.pagingWxs.touchmove(...args)),
                      onTouchend: _cache[6] || (_cache[6] = (...args) => _ctx.pagingWxs.touchend && _ctx.pagingWxs.touchend(...args)),
                      onTouchcancel: _cache[7] || (_cache[7] = (...args) => _ctx.pagingWxs.touchend && _ctx.pagingWxs.touchend(...args)),
                      onMousedown: _cache[8] || (_cache[8] = (...args) => _ctx.pagingWxs.mousedown && _ctx.pagingWxs.mousedown(...args)),
                      onMousemove: _cache[9] || (_cache[9] = (...args) => _ctx.pagingWxs.mousemove && _ctx.pagingWxs.mousemove(...args)),
                      onMouseup: _cache[10] || (_cache[10] = (...args) => _ctx.pagingWxs.mouseup && _ctx.pagingWxs.mouseup(...args)),
                      onMouseleave: _cache[11] || (_cache[11] = (...args) => _ctx.pagingWxs.mouseleave && _ctx.pagingWxs.mouseleave(...args))
                    },
                    [
                      _ctx.finalRefresherFixedBacHeight > 0 ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 0,
                          class: "zp-fixed-bac-view",
                          style: vue.normalizeStyle([{ "background": _ctx.refresherFixedBackground, "height": `${_ctx.finalRefresherFixedBacHeight}px` }])
                        },
                        null,
                        4
                        /* STYLE */
                      )) : vue.createCommentVNode("v-if", true),
                      vue.createElementVNode("view", {
                        class: "zp-paging-main",
                        style: vue.normalizeStyle([_ctx.scrollViewInStyle, { "transform": _ctx.finalRefresherTransform, "transition": _ctx.refresherTransition }]),
                        "change:prop": _ctx.pagingWxs.propObserver,
                        prop: vue.wp(_ctx.wxsPropType),
                        "data-refresherThreshold": _ctx.finalRefresherThreshold,
                        "data-refresherF2Enabled": _ctx.refresherF2Enabled,
                        "data-refresherF2Threshold": _ctx.finalRefresherF2Threshold,
                        "data-isIos": _ctx.isIos,
                        "data-loading": _ctx.loading || _ctx.isRefresherInComplete,
                        "data-useChatRecordMode": _ctx.useChatRecordMode,
                        "data-refresherEnabled": _ctx.refresherEnabled,
                        "data-useCustomRefresher": _ctx.useCustomRefresher,
                        "data-pageScrollTop": _ctx.wxsPageScrollTop,
                        "data-scrollTop": _ctx.wxsScrollTop,
                        "data-refresherMaxAngle": _ctx.refresherMaxAngle,
                        "data-refresherNoTransform": _ctx.refresherNoTransform,
                        "data-refresherAecc": _ctx.refresherAngleEnableChangeContinued,
                        "data-usePageScroll": _ctx.usePageScroll,
                        "data-watchTouchDirectionChange": _ctx.watchTouchDirectionChange,
                        "data-oldIsTouchmoving": _ctx.isTouchmoving,
                        "data-refresherOutRate": _ctx.finalRefresherOutRate,
                        "data-refresherPullRate": _ctx.finalRefresherPullRate,
                        "data-hasTouchmove": _ctx.hasTouchmove,
                        "change:renderPropIsIosAndH5": _ctx.pagingRenderjs.renderPropIsIosAndH5Change,
                        renderPropIsIosAndH5: vue.wp(_ctx.isIosAndH5)
                      }, [
                        _ctx.showRefresher ? (vue.openBlock(), vue.createElementBlock(
                          "view",
                          {
                            key: 0,
                            class: "zp-custom-refresher-view",
                            style: vue.normalizeStyle([{ "margin-top": `-${_ctx.finalRefresherThreshold + _ctx.refresherThresholdUpdateTag}px`, "background": _ctx.refresherBackground, "opacity": _ctx.isTouchmoving ? 1 : 0 }])
                          },
                          [
                            vue.createElementVNode(
                              "view",
                              {
                                class: "zp-custom-refresher-container",
                                style: vue.normalizeStyle([{ "height": `${_ctx.finalRefresherThreshold}px`, "background": _ctx.refresherBackground }])
                              },
                              [
                                _ctx.useRefresherStatusBarPlaceholder ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 0,
                                    class: "zp-custom-refresher-status-bar-placeholder",
                                    style: vue.normalizeStyle([{ "height": `${_ctx.statusBarHeight}px` }])
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createCommentVNode(" 下拉刷新view "),
                                vue.createElementVNode("view", { class: "zp-custom-refresher-slot-view" }, [
                                  !(_ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete) && !(_ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2) ? vue.renderSlot(_ctx.$slots, "refresher", {
                                    key: 0,
                                    refresherStatus: _ctx.refresherStatus
                                  }, void 0, true) : vue.createCommentVNode("v-if", true)
                                ]),
                                _ctx.zSlots.refresherComplete && _ctx.refresherStatus === _ctx.R.Complete ? vue.renderSlot(_ctx.$slots, "refresherComplete", { key: 1 }, void 0, true) : _ctx.zSlots.refresherF2 && _ctx.refresherStatus === _ctx.R.GoF2 ? vue.renderSlot(_ctx.$slots, "refresherF2", { key: 2 }, void 0, true) : !_ctx.showCustomRefresher ? (vue.openBlock(), vue.createBlock(_component_z_paging_refresh, {
                                  key: 3,
                                  ref: "refresh",
                                  class: "zp-custom-refresher-refresh",
                                  style: vue.normalizeStyle([{ "height": `${_ctx.finalRefresherThreshold - _ctx.finalRefresherThresholdPlaceholder}px` }]),
                                  status: _ctx.refresherStatus,
                                  defaultThemeStyle: _ctx.finalRefresherThemeStyle,
                                  defaultText: _ctx.finalRefresherDefaultText,
                                  pullingText: _ctx.finalRefresherPullingText,
                                  refreshingText: _ctx.finalRefresherRefreshingText,
                                  completeText: _ctx.finalRefresherCompleteText,
                                  goF2Text: _ctx.finalRefresherGoF2Text,
                                  defaultImg: _ctx.refresherDefaultImg,
                                  pullingImg: _ctx.refresherPullingImg,
                                  refreshingImg: _ctx.refresherRefreshingImg,
                                  completeImg: _ctx.refresherCompleteImg,
                                  refreshingAnimated: _ctx.refresherRefreshingAnimated,
                                  showUpdateTime: _ctx.showRefresherUpdateTime,
                                  updateTimeKey: _ctx.refresherUpdateTimeKey,
                                  updateTimeTextMap: _ctx.finalRefresherUpdateTimeTextMap,
                                  imgStyle: _ctx.refresherImgStyle,
                                  titleStyle: _ctx.refresherTitleStyle,
                                  updateTimeStyle: _ctx.refresherUpdateTimeStyle,
                                  unit: _ctx.unit
                                }, null, 8, ["style", "status", "defaultThemeStyle", "defaultText", "pullingText", "refreshingText", "completeText", "goF2Text", "defaultImg", "pullingImg", "refreshingImg", "completeImg", "refreshingAnimated", "showUpdateTime", "updateTimeKey", "updateTimeTextMap", "imgStyle", "titleStyle", "updateTimeStyle", "unit"])) : vue.createCommentVNode("v-if", true)
                              ],
                              4
                              /* STYLE */
                            )
                          ],
                          4
                          /* STYLE */
                        )) : vue.createCommentVNode("v-if", true),
                        vue.createElementVNode(
                          "view",
                          {
                            class: "zp-paging-container",
                            style: vue.normalizeStyle([{ justifyContent: _ctx.useChatRecordMode ? "flex-end" : "flex-start" }])
                          },
                          [
                            vue.createCommentVNode(" 全屏Loading "),
                            _ctx.showLoading && _ctx.zSlots.loading && !_ctx.loadingFullFixed ? vue.renderSlot(_ctx.$slots, "loading", { key: 0 }, void 0, true) : vue.createCommentVNode("v-if", true),
                            vue.createCommentVNode(" 主体内容 "),
                            vue.createElementVNode(
                              "view",
                              {
                                class: "zp-paging-container-content",
                                style: vue.normalizeStyle([{ transform: _ctx.virtualPlaceholderTopHeight > 0 ? `translateY(${_ctx.virtualPlaceholderTopHeight}px)` : "none" }, _ctx.finalPagingContentStyle])
                              },
                              [
                                vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
                                vue.createCommentVNode(" 内置列表&虚拟列表 "),
                                _ctx.finalUseInnerList ? (vue.openBlock(), vue.createElementBlock(
                                  vue.Fragment,
                                  { key: 0 },
                                  [
                                    vue.renderSlot(_ctx.$slots, "header", {}, void 0, true),
                                    vue.createElementVNode(
                                      "view",
                                      {
                                        class: "zp-list-container",
                                        style: vue.normalizeStyle([_ctx.innerListStyle])
                                      },
                                      [
                                        _ctx.finalUseVirtualList ? (vue.openBlock(true), vue.createElementBlock(
                                          vue.Fragment,
                                          { key: 0 },
                                          vue.renderList(_ctx.virtualList, (item, index2) => {
                                            return vue.openBlock(), vue.createElementBlock("view", {
                                              class: "zp-list-cell",
                                              style: vue.normalizeStyle([_ctx.innerCellStyle]),
                                              id: `zp-id-${item[_ctx.virtualCellIndexKey]}`,
                                              key: item["zp_unique_index"],
                                              onClick: ($event) => _ctx._innerCellClick(item, _ctx.virtualTopRangeIndex + index2)
                                            }, [
                                              _ctx.useCompatibilityMode ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, "使用兼容模式请在组件源码z-paging.vue第99行中注释这一行，并打开下面一行注释")) : (vue.openBlock(), vue.createElementBlock(
                                                vue.Fragment,
                                                { key: 1 },
                                                [
                                                  vue.createCommentVNode(' <zp-public-virtual-cell v-if="useCompatibilityMode" :extraData="extraData" :item="item" :index="virtualTopRangeIndex+index" /> '),
                                                  vue.renderSlot(_ctx.$slots, "cell", {
                                                    item,
                                                    index: _ctx.virtualTopRangeIndex + index2
                                                  }, void 0, true)
                                                ],
                                                2112
                                                /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                                              ))
                                            ], 12, ["id", "onClick"]);
                                          }),
                                          128
                                          /* KEYED_FRAGMENT */
                                        )) : (vue.openBlock(true), vue.createElementBlock(
                                          vue.Fragment,
                                          { key: 1 },
                                          vue.renderList(_ctx.realTotalData, (item, index2) => {
                                            return vue.openBlock(), vue.createElementBlock("view", {
                                              class: "zp-list-cell",
                                              key: index2,
                                              onClick: ($event) => _ctx._innerCellClick(item, index2)
                                            }, [
                                              vue.renderSlot(_ctx.$slots, "cell", {
                                                item,
                                                index: index2
                                              }, void 0, true)
                                            ], 8, ["onClick"]);
                                          }),
                                          128
                                          /* KEYED_FRAGMENT */
                                        ))
                                      ],
                                      4
                                      /* STYLE */
                                    ),
                                    vue.renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                                  ],
                                  64
                                  /* STABLE_FRAGMENT */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createCommentVNode(" 聊天记录模式加载更多loading "),
                                _ctx.useChatRecordMode && _ctx.realTotalData.length >= _ctx.defaultPageSize && (_ctx.loadingStatus !== _ctx.M.NoMore || _ctx.zSlots.chatNoMore) && (_ctx.realTotalData.length || _ctx.showChatLoadingWhenReload && _ctx.showLoading) && !_ctx.isFirstPageAndNoMore ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 1,
                                    style: vue.normalizeStyle([_ctx.chatRecordRotateStyle])
                                  },
                                  [
                                    _ctx.loadingStatus === _ctx.M.NoMore && _ctx.zSlots.chatNoMore ? vue.renderSlot(_ctx.$slots, "chatNoMore", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock(
                                      vue.Fragment,
                                      { key: 1 },
                                      [
                                        _ctx.zSlots.chatLoading ? vue.renderSlot(_ctx.$slots, "chatLoading", {
                                          key: 0,
                                          loadingMoreStatus: _ctx.loadingStatus
                                        }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_z_paging_load_more, {
                                          key: 1,
                                          onDoClick: _cache[2] || (_cache[2] = ($event) => _ctx._onLoadingMore("click")),
                                          zConfig: _ctx.zLoadMoreConfig
                                        }, null, 8, ["zConfig"]))
                                      ],
                                      64
                                      /* STABLE_FRAGMENT */
                                    ))
                                  ],
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createCommentVNode(" 虚拟列表底部占位view "),
                                _ctx.useVirtualList ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 2,
                                    class: "zp-virtual-placeholder",
                                    style: vue.normalizeStyle([{ height: _ctx.virtualPlaceholderBottomHeight + "px" }])
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createCommentVNode(" 上拉加载更多view "),
                                _ctx.showLoadingMoreDefault ? vue.renderSlot(_ctx.$slots, "loadingMoreDefault", { key: 3 }, void 0, true) : _ctx.showLoadingMoreLoading ? vue.renderSlot(_ctx.$slots, "loadingMoreLoading", { key: 4 }, void 0, true) : _ctx.showLoadingMoreNoMore ? vue.renderSlot(_ctx.$slots, "loadingMoreNoMore", { key: 5 }, void 0, true) : _ctx.showLoadingMoreFail ? vue.renderSlot(_ctx.$slots, "loadingMoreFail", { key: 6 }, void 0, true) : _ctx.showLoadingMoreCustom ? (vue.openBlock(), vue.createBlock(_component_z_paging_load_more, {
                                  key: 7,
                                  onDoClick: _cache[3] || (_cache[3] = ($event) => _ctx._onLoadingMore("click")),
                                  zConfig: _ctx.zLoadMoreConfig
                                }, null, 8, ["zConfig"])) : vue.createCommentVNode("v-if", true),
                                _ctx.safeAreaInsetBottom && _ctx.useSafeAreaPlaceholder && !_ctx.useChatRecordMode ? (vue.openBlock(), vue.createElementBlock(
                                  "view",
                                  {
                                    key: 8,
                                    class: "zp-safe-area-placeholder",
                                    style: vue.normalizeStyle([{ height: _ctx.safeAreaBottom + "px" }])
                                  },
                                  null,
                                  4
                                  /* STYLE */
                                )) : vue.createCommentVNode("v-if", true)
                              ],
                              4
                              /* STYLE */
                            ),
                            vue.createCommentVNode(" 空数据图 "),
                            _ctx.showEmpty ? (vue.openBlock(), vue.createElementBlock(
                              "view",
                              {
                                key: 1,
                                class: vue.normalizeClass({ "zp-empty-view": true, "zp-empty-view-center": _ctx.emptyViewCenter }),
                                style: vue.normalizeStyle([_ctx.emptyViewSuperStyle, _ctx.chatRecordRotateStyle])
                              },
                              [
                                _ctx.zSlots.empty ? vue.renderSlot(_ctx.$slots, "empty", {
                                  key: 0,
                                  isLoadFailed: _ctx.isLoadFailed
                                }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_z_paging_empty_view, {
                                  key: 1,
                                  emptyViewImg: _ctx.finalEmptyViewImg,
                                  emptyViewText: _ctx.finalEmptyViewText,
                                  showEmptyViewReload: _ctx.finalShowEmptyViewReload,
                                  emptyViewReloadText: _ctx.finalEmptyViewReloadText,
                                  isLoadFailed: _ctx.isLoadFailed,
                                  emptyViewStyle: _ctx.emptyViewStyle,
                                  emptyViewTitleStyle: _ctx.emptyViewTitleStyle,
                                  emptyViewImgStyle: _ctx.emptyViewImgStyle,
                                  emptyViewReloadStyle: _ctx.emptyViewReloadStyle,
                                  emptyViewZIndex: _ctx.emptyViewZIndex,
                                  emptyViewFixed: _ctx.emptyViewFixed,
                                  unit: _ctx.unit,
                                  onReload: _ctx._emptyViewReload,
                                  onViewClick: _ctx._emptyViewClick
                                }, null, 8, ["emptyViewImg", "emptyViewText", "showEmptyViewReload", "emptyViewReloadText", "isLoadFailed", "emptyViewStyle", "emptyViewTitleStyle", "emptyViewImgStyle", "emptyViewReloadStyle", "emptyViewZIndex", "emptyViewFixed", "unit", "onReload", "onViewClick"]))
                              ],
                              6
                              /* CLASS, STYLE */
                            )) : vue.createCommentVNode("v-if", true)
                          ],
                          4
                          /* STYLE */
                        )
                      ], 12, ["change:prop", "prop", "data-refresherThreshold", "data-refresherF2Enabled", "data-refresherF2Threshold", "data-isIos", "data-loading", "data-useChatRecordMode", "data-refresherEnabled", "data-useCustomRefresher", "data-pageScrollTop", "data-scrollTop", "data-refresherMaxAngle", "data-refresherNoTransform", "data-refresherAecc", "data-usePageScroll", "data-watchTouchDirectionChange", "data-oldIsTouchmoving", "data-refresherOutRate", "data-refresherPullRate", "data-hasTouchmove", "change:renderPropIsIosAndH5", "renderPropIsIosAndH5"])
                    ],
                    32
                    /* NEED_HYDRATION */
                  )
                ], 46, ["scroll-top", "scroll-x", "scroll-y", "enable-back-to-top", "show-scrollbar", "scroll-with-animation", "scroll-into-view", "lower-threshold", "refresher-enabled", "refresher-threshold", "refresher-default-style", "refresher-background", "refresher-triggered"])
              ],
              6
              /* CLASS, STYLE */
            ),
            _ctx.zSlots.right ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: vue.normalizeClass({ "zp-page-right": true, "zp-absoulte zp-right": _ctx.finalIsOldWebView })
              },
              [
                vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ],
          6
          /* CLASS, STYLE */
        ),
        vue.createCommentVNode(" 底部固定的slot "),
        vue.createElementVNode(
          "view",
          {
            class: "zp-page-bottom-container",
            style: vue.normalizeStyle({ "background": _ctx.bottomBgColor })
          },
          [
            !_ctx.usePageScroll && _ctx.zSlots.bottom ? vue.renderSlot(_ctx.$slots, "bottom", { key: 0 }, void 0, true) : _ctx.usePageScroll && _ctx.zSlots.bottom ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: "zp-page-bottom",
                onTouchmove: _cache[17] || (_cache[17] = vue.withModifiers(() => {
                }, ["stop", "prevent"])),
                style: vue.normalizeStyle([{ "bottom": `${_ctx.windowBottom}px` }])
              },
              [
                vue.renderSlot(_ctx.$slots, "bottom", {}, void 0, true)
              ],
              36
              /* STYLE, NEED_HYDRATION */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 聊天记录模式底部占位 "),
            _ctx.useChatRecordMode && _ctx.autoAdjustPositionWhenChat ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 2 },
              [
                vue.createElementVNode(
                  "view",
                  {
                    style: vue.normalizeStyle([{ height: _ctx.chatRecordModeSafeAreaBottom + "px" }])
                  },
                  null,
                  4
                  /* STYLE */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    class: "zp-page-bottom-keyboard-placeholder-animate",
                    style: vue.normalizeStyle([{ height: _ctx.keyboardHeight + "px" }])
                  },
                  null,
                  4
                  /* STYLE */
                )
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ],
          4
          /* STYLE */
        ),
        vue.createCommentVNode(" 点击返回顶部view "),
        _ctx.showBackToTopClass ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 3,
            class: vue.normalizeClass(_ctx.finalBackToTopClass),
            style: vue.normalizeStyle([_ctx.finalBackToTopStyle]),
            onClick: _cache[18] || (_cache[18] = vue.withModifiers((...args) => _ctx._backToTopClick && _ctx._backToTopClick(...args), ["stop"]))
          },
          [
            _ctx.zSlots.backToTop ? vue.renderSlot(_ctx.$slots, "backToTop", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("image", {
              key: 1,
              class: "zp-back-to-top-img",
              src: _ctx.backToTopImg.length ? _ctx.backToTopImg : _ctx.base64BackToTop
            }, null, 8, ["src"]))
          ],
          6
          /* CLASS, STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" 全屏Loading(铺满z-paging并固定) "),
        _ctx.showLoading && _ctx.zSlots.loading && _ctx.loadingFullFixed ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 4,
          class: "zp-loading-fixed"
        }, [
          vue.renderSlot(_ctx.$slots, "loading", {}, void 0, true)
        ])) : vue.createCommentVNode("v-if", true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  if (typeof block0 === "function")
    block0(_sfc_main$9);
  if (typeof block1 === "function")
    block1(_sfc_main$9);
  const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-1aa372d7"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/uni_modules/z-paging/components/z-paging/z-paging.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {
        dataList: []
      };
    },
    methods: {
      refreshData() {
        this.$refs.paging.complete([1, 2, 3, 4, 5]);
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$2);
    const _component_net_image = resolveEasycom(vue.resolveDynamicComponent("net-image"), __easycom_0$3);
    const _component_bottom_support_info = resolveEasycom(vue.resolveDynamicComponent("bottom-support-info"), __easycom_1);
    const _component_safe_bottom_view = resolveEasycom(vue.resolveDynamicComponent("safe-bottom-view"), __easycom_4);
    const _component_z_paging = resolveEasycom(vue.resolveDynamicComponent("z-paging"), __easycom_5);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_z_paging, {
        ref: "paging",
        modelValue: $data.dataList,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.dataList = $event),
        onQuery: $options.refreshData
      }, {
        top: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "column-c-c p-b-30" }, [
            vue.createElementVNode("text", { class: "m-t-40 m-b-20 fw-bold font-family color-1d1d1d fs48" }, "沙县小吃"),
            vue.createVNode(_component_u_icon, {
              name: "map",
              color: "#1d1d1d",
              size: "24rpx",
              label: "松江区茸梅路10号楼101室",
              "label-color": "#1d1d1d",
              "label-size": "24rpx"
            })
          ])
        ]),
        bottom: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "p-t-20" }, [
            vue.createVNode(_component_safe_bottom_view, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_bottom_support_info)
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.dataList, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: "row m-b-20 p-lr-20",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$u.route("/pages/forward/forward"))
              }, [
                vue.createVNode(_component_net_image, {
                  width: "300rpx",
                  height: "300rpx"
                }),
                vue.createElementVNode("view", {
                  class: "column m-l-20 flex1 p-b-10 p-t-10",
                  style: { "justify-content": "space-between" }
                }, [
                  vue.createElementVNode("view", { class: "column" }, [
                    vue.createElementVNode("text", { class: "fs32 fw-400 color-1d1d1d" }, "矿泉水"),
                    vue.createElementVNode("text", { class: "m-t-30 color-666 fw-400" }, [
                      vue.createTextVNode("仅需"),
                      vue.createElementVNode("span", { class: "fw-bold" }, "2"),
                      vue.createTextVNode("人助力，即可领取")
                    ])
                  ]),
                  vue.createElementVNode("view", { class: "item-btn" }, [
                    vue.createVNode(_component_u_icon, {
                      name: "arrow-right-double",
                      size: "28rpx",
                      color: "white",
                      label: "马上摇人",
                      "label-color": "white",
                      "label-size": "28rpx",
                      labelPos: "left"
                    })
                  ])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onQuery"])
    ]);
  }
  const PagesActivityActivity = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-da48f91d"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/pages/activity/activity.vue"]]);
  const props$1 = defineMixin({
    props: {
      bgColor: {
        type: String,
        default: () => props$5.statusBar.bgColor
      }
    }
  });
  const _sfc_main$7 = {
    name: "u-status-bar",
    mixins: [mpMixin, mixin, props$1],
    data() {
      return {};
    },
    computed: {
      style() {
        const style = {};
        style.height = addUnit$1(sys().statusBarHeight, "px");
        style.backgroundColor = this.bgColor;
        return deepMerge$1(style, addStyle(this.customStyle));
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle([$options.style]),
        class: "u-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-eb8e0cdd"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/uni_modules/uview-plus/components/u-status-bar/u-status-bar.vue"]]);
  const props = defineMixin({
    props: {
      // 是否开启顶部安全区适配
      safeAreaInsetTop: {
        type: Boolean,
        default: () => props$5.navbar.safeAreaInsetTop
      },
      // 固定在顶部时，是否生成一个等高元素，以防止塌陷
      placeholder: {
        type: Boolean,
        default: () => props$5.navbar.placeholder
      },
      // 是否固定在顶部
      fixed: {
        type: Boolean,
        default: () => props$5.navbar.fixed
      },
      // 是否显示下边框
      border: {
        type: Boolean,
        default: () => props$5.navbar.border
      },
      // 左边的图标
      leftIcon: {
        type: String,
        default: () => props$5.navbar.leftIcon
      },
      // 左边的提示文字
      leftText: {
        type: String,
        default: () => props$5.navbar.leftText
      },
      // 左右的提示文字
      rightText: {
        type: String,
        default: () => props$5.navbar.rightText
      },
      // 右边的图标
      rightIcon: {
        type: String,
        default: () => props$5.navbar.rightIcon
      },
      // 标题
      title: {
        type: [String, Number],
        default: () => props$5.navbar.title
      },
      // 背景颜色
      bgColor: {
        type: String,
        default: () => props$5.navbar.bgColor
      },
      // 标题的宽度
      titleWidth: {
        type: [String, Number],
        default: () => props$5.navbar.titleWidth
      },
      // 导航栏高度
      height: {
        type: [String, Number],
        default: () => props$5.navbar.height
      },
      // 左侧返回图标的大小
      leftIconSize: {
        type: [String, Number],
        default: () => props$5.navbar.leftIconSize
      },
      // 左侧返回图标的颜色
      leftIconColor: {
        type: String,
        default: () => props$5.navbar.leftIconColor
      },
      // 点击左侧区域(返回图标)，是否自动返回上一页
      autoBack: {
        type: Boolean,
        default: () => props$5.navbar.autoBack
      },
      // 标题的样式，对象或字符串
      titleStyle: {
        type: [String, Object],
        default: () => props$5.navbar.titleStyle
      }
    }
  });
  const _sfc_main$6 = {
    name: "u-navbar",
    mixins: [mpMixin, mixin, props],
    data() {
      return {};
    },
    emits: ["leftClick", "rightClick"],
    methods: {
      addStyle,
      addUnit: addUnit$1,
      sys,
      getPx,
      // 点击左侧区域
      leftClick() {
        this.$emit("leftClick");
        if (this.autoBack) {
          uni.navigateBack();
        }
      },
      // 点击右侧区域
      rightClick() {
        this.$emit("rightClick");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_status_bar = resolveEasycom(vue.resolveDynamicComponent("u-status-bar"), __easycom_0$1);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["u-navbar", [_ctx.customClass]])
      },
      [
        _ctx.fixed && _ctx.placeholder ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: "u-navbar__placeholder",
            style: vue.normalizeStyle({
              height: $options.addUnit($options.getPx(_ctx.height) + $options.sys().statusBarHeight, "px")
            })
          },
          null,
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass([_ctx.fixed && "u-navbar--fixed"])
          },
          [
            _ctx.safeAreaInsetTop ? (vue.openBlock(), vue.createBlock(_component_u_status_bar, {
              key: 0,
              bgColor: _ctx.bgColor
            }, null, 8, ["bgColor"])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["u-navbar__content", [_ctx.border && "u-border-bottom"]]),
                style: vue.normalizeStyle({
                  height: $options.addUnit(_ctx.height),
                  backgroundColor: _ctx.bgColor
                })
              },
              [
                vue.createElementVNode("view", {
                  class: "u-navbar__content__left",
                  "hover-class": "u-navbar__content__left--hover",
                  "hover-start-time": "150",
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.leftClick && $options.leftClick(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "left", {}, () => [
                    _ctx.leftIcon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                      key: 0,
                      name: _ctx.leftIcon,
                      size: _ctx.leftIconSize,
                      color: _ctx.leftIconColor
                    }, null, 8, ["name", "size", "color"])) : vue.createCommentVNode("v-if", true),
                    _ctx.leftText ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 1,
                        style: vue.normalizeStyle({
                          color: _ctx.leftIconColor
                        }),
                        class: "u-navbar__content__left__text"
                      },
                      vue.toDisplayString(_ctx.leftText),
                      5
                      /* TEXT, STYLE */
                    )) : vue.createCommentVNode("v-if", true)
                  ], true)
                ]),
                vue.renderSlot(_ctx.$slots, "center", {}, () => [
                  vue.createElementVNode(
                    "text",
                    {
                      class: "u-line-1 u-navbar__content__title",
                      style: vue.normalizeStyle([{
                        width: $options.addUnit(_ctx.titleWidth)
                      }, $options.addStyle(_ctx.titleStyle)])
                    },
                    vue.toDisplayString(_ctx.title),
                    5
                    /* TEXT, STYLE */
                  )
                ], true),
                _ctx.$slots.right || _ctx.rightIcon || _ctx.rightText ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "u-navbar__content__right",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.rightClick && $options.rightClick(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "right", {}, () => [
                    _ctx.rightIcon ? (vue.openBlock(), vue.createBlock(_component_u_icon, {
                      key: 0,
                      name: _ctx.rightIcon,
                      size: "20"
                    }, null, 8, ["name"])) : vue.createCommentVNode("v-if", true),
                    _ctx.rightText ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 1,
                        class: "u-navbar__content__right__text"
                      },
                      vue.toDisplayString(_ctx.rightText),
                      1
                      /* TEXT */
                    )) : vue.createCommentVNode("v-if", true)
                  ], true)
                ])) : vue.createCommentVNode("v-if", true)
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        )
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-f631659b"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/uni_modules/uview-plus/components/u-navbar/u-navbar.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        dataList: []
      };
    },
    methods: {
      refreshData() {
        this.$refs.paging.complete([{
          name: "白吃白喝",
          title: "更多福利等你参与",
          path: "/pages/activity/activity"
        }, {
          name: "霸王餐",
          title: "500元进群"
        }, {
          name: "小仓库",
          title: "我攒的家当都在这里",
          path: "/pages/mine/mine"
        }]);
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_navbar = resolveEasycom(vue.resolveDynamicComponent("u-navbar"), __easycom_0);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$2);
    const _component_net_image = resolveEasycom(vue.resolveDynamicComponent("net-image"), __easycom_0$3);
    const _component_bottom_support_info = resolveEasycom(vue.resolveDynamicComponent("bottom-support-info"), __easycom_1);
    const _component_safe_bottom_view = resolveEasycom(vue.resolveDynamicComponent("safe-bottom-view"), __easycom_4);
    const _component_z_paging = resolveEasycom(vue.resolveDynamicComponent("z-paging"), __easycom_5);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_z_paging, {
        ref: "paging",
        modelValue: $data.dataList,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.dataList = $event),
        onQuery: $options.refreshData
      }, {
        top: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "column p-b-30" }, [
            vue.createVNode(_component_u_navbar, {
              placeholder: "",
              title: "首页",
              "left-icon": ""
            }),
            vue.createElementVNode("view", { class: "row-c-c m-t-40" }, [
              vue.createElementVNode("text", { class: "fw-bold font-family color-1d1d1d p-lr-40 fs48" }, "沙县小吃"),
              vue.createElementVNode("view", { style: { "position": "absolute", "right": "20rpx" } }, [
                vue.createVNode(_component_u_icon, {
                  name: "reload",
                  size: "24rpx",
                  color: "#1d1d1d",
                  label: "切换",
                  "label-color": "#1d1d1d",
                  "label-size": "24rpx"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "row-c-c m-t-20" }, [
              vue.createVNode(_component_u_icon, {
                name: "map",
                color: "#1d1d1d",
                size: "24rpx",
                label: "松江区茸梅路10号楼101室",
                "label-color": "#1d1d1d",
                "label-size": "24rpx"
              })
            ])
          ])
        ]),
        bottom: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "p-t-20" }, [
            vue.createVNode(_component_safe_bottom_view, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_bottom_support_info)
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.dataList, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: "row-c-c m-b-20",
                style: { "position": "relative" },
                onClick: ($event) => _ctx.$u.route(item.path)
              }, [
                vue.createVNode(_component_net_image, {
                  width: "705rpx",
                  height: "355rpx"
                }),
                vue.createElementVNode("view", { class: "item-bg p-lr-40" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "fw-bold font-family color-1d1d1d fs40" },
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    { class: "fw-400 m-t-20 font-family color-1d1d1d fs28" },
                    vue.toDisplayString(item.title),
                    1
                    /* TEXT */
                  )
                ])
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onQuery"])
    ]);
  }
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-07e72d3c"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/pages/home/home.vue"]]);
  const _sfc_main$4 = {
    data() {
      return {
        dataList: [1, 2, 3, 4, 5]
      };
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_net_image = resolveEasycom(vue.resolveDynamicComponent("net-image"), __easycom_0$3);
    const _component_bottom_support_info = resolveEasycom(vue.resolveDynamicComponent("bottom-support-info"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "column" }, [
      vue.createElementVNode("view", { class: "top-bg" }, [
        vue.createElementVNode("text", null, "好友助力领好礼")
      ]),
      vue.createElementVNode("view", { class: "content-bg p-tb-30 p-lr-30" }, [
        vue.createVNode(_component_net_image, {
          height: "300rpx",
          width: "100%"
        }),
        vue.createElementVNode("view", { class: "column-c-c m-t-30" }, [
          vue.createElementVNode("text", {
            class: "fs32 color-white row-c-c",
            style: { "background-color": "#FF6C4E", "height": "60rpx", "border-radius": "30rpx", "padding": "0 60rpx" }
          }, " 可乐一瓶 "),
          vue.createElementVNode("text", { class: "fs28 color-999 m-t-20 fw-400" }, " 还差1人即可获得 ")
        ]),
        vue.createElementVNode("view", {
          class: "row m-t-40",
          style: { "flex-wrap": "wrap" }
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.dataList, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index2,
                class: "column-c-c m-b-30 m-r-20"
              }, [
                vue.createVNode(_component_net_image, {
                  width: "90rpx",
                  height: "90rpx",
                  radius: "45rpx"
                }),
                vue.createElementVNode("text", { class: "zhuli-bg row-c-c" }, "已助力")
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createElementVNode("view", { class: "invite-btn" }, "邀请好友助力"),
      vue.createElementVNode("view", { class: "m-t-40 p-b-30" }, [
        vue.createVNode(_component_bottom_support_info)
      ])
    ]);
  }
  const PagesForwardForward = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-167fdda7"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/pages/forward/forward.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_net_image = resolveEasycom(vue.resolveDynamicComponent("net-image"), __easycom_0$3);
    const _component_bottom_support_info = resolveEasycom(vue.resolveDynamicComponent("bottom-support-info"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "column" }, [
      vue.createElementVNode("view", { class: "top-bg" }, [
        vue.createElementVNode("text", null, "好友助力领好礼")
      ]),
      vue.createElementVNode("view", {
        class: "content-bg p-tb-30 p-lr-30",
        style: { "padding-bottom": "100rpx" }
      }, [
        vue.createVNode(_component_net_image, {
          height: "300rpx",
          width: "100%"
        }),
        vue.createElementVNode("view", { class: "column-c-c m-t-30" }, [
          vue.createElementVNode("text", {
            class: "fs32 color-white row-c-c m-b-30",
            style: { "background-color": "#FF6C4E", "height": "60rpx", "border-radius": "30rpx", "padding": "0 60rpx" }
          }, " 可乐一瓶 "),
          vue.createVNode(_component_net_image, {
            height: "385rpx",
            width: "385rpx"
          }),
          vue.createElementVNode("view", { class: "m-t-20 fs28 color-1d1d1d" }, "识别图中二维码，助力即可")
        ])
      ]),
      vue.createElementVNode("view", { class: "m-t-40 p-b-30" }, [
        vue.createVNode(_component_bottom_support_info)
      ])
    ]);
  }
  const PagesFriendHelpFriendHelp = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-506b22b1"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/pages/friendHelp/friendHelp.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        dataList: [1, 2, 3, 4]
      };
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_net_image = resolveEasycom(vue.resolveDynamicComponent("net-image"), __easycom_0$3);
    const _component_u_icon = resolveEasycom(vue.resolveDynamicComponent("u-icon"), __easycom_1$2);
    const _component_bottom_support_info = resolveEasycom(vue.resolveDynamicComponent("bottom-support-info"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "column" }, [
      vue.createElementVNode("view", { class: "top-bg" }),
      vue.createElementVNode("view", { class: "content-bg p-lr-30 column-c-c" }, [
        vue.createVNode(_component_net_image, {
          style: { "width": "92rpx", "height": "92rpx" },
          radius: "46rpx"
        }),
        vue.createElementVNode("text", { class: "m-t-30 color-1d1d1d fs28 font-family fw-400" }, "我是一只鱼")
      ]),
      vue.createElementVNode("view", { class: "row-c m-t-30" }, [
        vue.createElementVNode("text", { class: "m-lr-20 fs28 color-1d1d1d fw-400 font-family" }, "我的仓库")
      ]),
      vue.createElementVNode("view", { class: "column m-t-20 m-lr-20" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.dataList, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              key: index2,
              class: "color-bg-white b-r-8 row-c H100 p-lr-20",
              style: { "margin-bottom": "2rpx" },
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$u.route("/pages/redemption/redemption"))
            }, [
              vue.createVNode(_component_net_image, {
                width: "60rpx",
                height: "60rpx",
                radius: "30rpx"
              }),
              vue.createElementVNode("text", { class: "fs28 m-lr-20 fw-400 color-1d1d1d flex1" }, "鸡翅"),
              vue.createElementVNode("text", { class: "fs28 fw-400 color-1d1d1d m-r-20" }, "2"),
              vue.createVNode(_component_u_icon, {
                name: "arrow-right",
                color: "#999",
                size: "24rpx"
              })
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "m-t-40 p-b-30" }, [
        vue.createVNode(_component_bottom_support_info)
      ])
    ]);
  }
  const PagesMineMine = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-7c2ebfa5"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/pages/mine/mine.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_net_image = resolveEasycom(vue.resolveDynamicComponent("net-image"), __easycom_0$3);
    const _component_bottom_support_info = resolveEasycom(vue.resolveDynamicComponent("bottom-support-info"), __easycom_1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "view-bg" }, [
      vue.createElementVNode("view", { class: "content-bg" }, [
        vue.createElementVNode("view", { class: "row-c-c" }, [
          vue.createVNode(_component_net_image, {
            width: "60rpx",
            height: "60rpx",
            radius: "30rpx"
          }),
          vue.createElementVNode("text", { class: "fs28 m-l-10 fw-400 color-1d1d1d" }, "鸡翅")
        ]),
        vue.createElementVNode("view", {
          class: "column-c-c",
          style: { "margin": "100rpx" }
        }, [
          vue.createVNode(_component_net_image, {
            width: "400rpx",
            height: "400rpx"
          }),
          vue.createElementVNode("text", { class: "fs28 m-l-10 fw-400 color-1d1d1d m-t-40" }, "券号 00112233445566")
        ]),
        vue.createElementVNode("text", { class: "fs28 fw-bold color-1d1d1d" }, "核销说明"),
        vue.createElementVNode("text", { class: "fs28 fw-400 color-1d1d1d m-t-20" }, "1.门店提供的奖品必须按照要求给客户核销兑现，如果不兑现，投诉电话18121402800；"),
        vue.createElementVNode("text", { class: "fs28 fw-400 color-1d1d1d m-t-10" }, "2.本公司仅提供软件服务，客户和商家在使用过程中产生的问题，本公司不承担任何责任。")
      ]),
      vue.createElementVNode("view", { class: "m-t-40 p-b-30" }, [
        vue.createVNode(_component_bottom_support_info, {
          subTitleColor: "white",
          titleColor: "white"
        })
      ])
    ]);
  }
  const PagesRedemptionRedemption = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-2912a016"], ["__file", "/Users/lishifei/Desktop/shaxian-wx/pages/redemption/redemption.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/activity/activity", PagesActivityActivity);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/forward/forward", PagesForwardForward);
  __definePage("pages/friendHelp/friendHelp", PagesFriendHelpFriendHelp);
  __definePage("pages/mine/mine", PagesMineMine);
  __definePage("pages/redemption/redemption", PagesRedemptionRedemption);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/lishifei/Desktop/shaxian-wx/App.vue"]]);
  const { toString } = Object.prototype;
  function isArray(val) {
    return toString.call(val) === "[object Array]";
  }
  function isObject(val) {
    return val !== null && typeof val === "object";
  }
  function isDate(val) {
    return toString.call(val) === "[object Date]";
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (let i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  function deepMerge() {
    const result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge({}, val);
      } else {
        result[key] = val;
      }
    }
    for (let i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url2, params) {
    if (!params) {
      return url2;
    }
    let serializedParams;
    if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      const parts = [];
      forEach(params, (val, key) => {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (isArray(val)) {
          key = `${key}[]`;
        } else {
          val = [val];
        }
        forEach(val, (v) => {
          if (isDate(v)) {
            v = v.toISOString();
          } else if (isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(`${encode(key)}=${encode(v)}`);
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      const hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  function isAbsoluteURL(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}` : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  function settle(resolve, reject, response) {
    const { validateStatus } = response.config;
    const status = response.statusCode;
    if (status && (!validateStatus || validateStatus(status))) {
      resolve(response);
    } else {
      reject(response);
    }
  }
  const mergeKeys$1 = (keys, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      }
    });
    return config3;
  };
  const adapter = (config2) => new Promise((resolve, reject) => {
    const fullPath = buildURL(buildFullPath(config2.baseURL, config2.url), config2.params);
    const _config = {
      url: fullPath,
      header: config2.header,
      complete: (response) => {
        config2.fullPath = fullPath;
        response.config = config2;
        try {
          if (typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e) {
        }
        settle(resolve, reject, response);
      }
    };
    let requestTask;
    if (config2.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      const otherConfig = {
        filePath: config2.filePath,
        name: config2.name
      };
      const optionalKeys = [
        "files",
        "timeout",
        "formData"
      ];
      requestTask = uni.uploadFile({ ..._config, ...otherConfig, ...mergeKeys$1(optionalKeys, config2) });
    } else if (config2.method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        _config.timeout = config2.timeout;
      }
      requestTask = uni.downloadFile(_config);
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      requestTask = uni.request({ ..._config, ...mergeKeys$1(optionalKeys, config2) });
    }
    if (config2.getTask) {
      config2.getTask(requestTask, config2);
    }
  });
  const dispatchRequest = (config2) => adapter(config2);
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach((h) => {
      if (h !== null) {
        fn(h);
      }
    });
  };
  const mergeKeys = (keys, globalsConfig, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      } else if (!isUndefined(globalsConfig[prop])) {
        config3[prop] = globalsConfig[prop];
      }
    });
    return config3;
  };
  const mergeConfig = (globalsConfig, config2 = {}) => {
    const method = config2.method || globalsConfig.method || "GET";
    let config3 = {
      baseURL: globalsConfig.baseURL || "",
      method,
      url: config2.url || "",
      params: config2.params || {},
      custom: { ...globalsConfig.custom || {}, ...config2.custom || {} },
      header: deepMerge(globalsConfig.header || {}, config2.header || {})
    };
    const defaultToConfig2Keys = ["getTask", "validateStatus"];
    config3 = { ...config3, ...mergeKeys(defaultToConfig2Keys, globalsConfig, config2) };
    if (method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        config3.timeout = config2.timeout;
      } else if (!isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else if (method === "UPLOAD") {
      delete config3.header["content-type"];
      delete config3.header["Content-Type"];
      const uploadKeys = [
        "files",
        "filePath",
        "name",
        "timeout",
        "formData"
      ];
      uploadKeys.forEach((prop) => {
        if (!isUndefined(config2[prop])) {
          config3[prop] = config2[prop];
        }
      });
      if (isUndefined(config3.timeout) && !isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else {
      const defaultsKeys = [
        "data",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      config3 = { ...config3, ...mergeKeys(defaultsKeys, globalsConfig, config2) };
    }
    return config3;
  };
  const defaults = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    responseType: "text",
    custom: {},
    timeout: 6e4,
    sslVerify: true,
    firstIpv4: false,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  var clone = function() {
    function _instanceof(obj, type) {
      return type != null && obj instanceof type;
    }
    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_) {
      nativeMap = function() {
      };
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_) {
      nativeSet = function() {
      };
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_) {
      nativePromise = function() {
      };
    }
    function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === "object") {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != "undefined";
      if (typeof circular == "undefined")
        circular = true;
      if (typeof depth == "undefined")
        depth = Infinity;
      function _clone(parent2, depth2) {
        if (parent2 === null)
          return null;
        if (depth2 === 0)
          return parent2;
        var child;
        var proto;
        if (typeof parent2 != "object") {
          return parent2;
        }
        if (_instanceof(parent2, nativeMap)) {
          child = new nativeMap();
        } else if (_instanceof(parent2, nativeSet)) {
          child = new nativeSet();
        } else if (_instanceof(parent2, nativePromise)) {
          child = new nativePromise(function(resolve, reject) {
            parent2.then(function(value) {
              resolve(_clone(value, depth2 - 1));
            }, function(err) {
              reject(_clone(err, depth2 - 1));
            });
          });
        } else if (clone2.__isArray(parent2)) {
          child = [];
        } else if (clone2.__isRegExp(parent2)) {
          child = new RegExp(parent2.source, __getRegExpFlags(parent2));
          if (parent2.lastIndex)
            child.lastIndex = parent2.lastIndex;
        } else if (clone2.__isDate(parent2)) {
          child = new Date(parent2.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent2)) {
          if (Buffer.from) {
            child = Buffer.from(parent2);
          } else {
            child = new Buffer(parent2.length);
            parent2.copy(child);
          }
          return child;
        } else if (_instanceof(parent2, Error)) {
          child = Object.create(parent2);
        } else {
          if (typeof prototype == "undefined") {
            proto = Object.getPrototypeOf(parent2);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }
        if (circular) {
          var index2 = allParents.indexOf(parent2);
          if (index2 != -1) {
            return allChildren[index2];
          }
          allParents.push(parent2);
          allChildren.push(child);
        }
        if (_instanceof(parent2, nativeMap)) {
          parent2.forEach(function(value, key) {
            var keyChild = _clone(key, depth2 - 1);
            var valueChild = _clone(value, depth2 - 1);
            child.set(keyChild, valueChild);
          });
        }
        if (_instanceof(parent2, nativeSet)) {
          parent2.forEach(function(value) {
            var entryChild = _clone(value, depth2 - 1);
            child.add(entryChild);
          });
        }
        for (var i in parent2) {
          var attrs = Object.getOwnPropertyDescriptor(parent2, i);
          if (attrs) {
            child[i] = _clone(parent2[i], depth2 - 1);
          }
          try {
            var objProperty = Object.getOwnPropertyDescriptor(parent2, i);
            if (objProperty.set === "undefined") {
              continue;
            }
            child[i] = _clone(parent2[i], depth2 - 1);
          } catch (e) {
            if (e instanceof TypeError) {
              continue;
            } else if (e instanceof ReferenceError) {
              continue;
            }
          }
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent2);
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent2[symbol], depth2 - 1);
            Object.defineProperty(child, symbol, descriptor);
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent2);
          for (var i = 0; i < allPropertyNames.length; i++) {
            var propertyName = allPropertyNames[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
            Object.defineProperty(child, propertyName, descriptor);
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
      if (parent === null)
        return null;
      var c2 = function() {
      };
      c2.prototype = parent;
      return new c2();
    };
    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o) {
      return typeof o === "object" && __objToStr(o) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o) {
      return typeof o === "object" && __objToStr(o) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o) {
      return typeof o === "object" && __objToStr(o) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
      var flags = "";
      if (re.global)
        flags += "g";
      if (re.ignoreCase)
        flags += "i";
      if (re.multiline)
        flags += "m";
      return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
  }();
  class Request {
    /**
    * @param {Object} arg - 全局配置
    * @param {String} arg.baseURL - 全局根路径
    * @param {Object} arg.header - 全局header
    * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
    * @param {String} arg.dataType = [json] - 全局默认的dataType
    * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
    * @param {Object} arg.custom - 全局默认的自定义参数
    * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
    * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
    * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
    * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
    * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
    */
    constructor(arg = {}) {
      if (!isPlainObject(arg)) {
        arg = {};
        formatAppLog("warn", "at uni_modules/uview-plus/libs/luch-request/core/Request.js:39", "设置全局参数必须接收一个Object");
      }
      this.config = clone({ ...defaults, ...arg });
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    /**
    * @Function
    * @param {Request~setConfigCallback} f - 设置全局默认配置
    */
    setConfig(f) {
      this.config = f(this.config);
    }
    middleware(config2) {
      config2 = mergeConfig(this.config, config2);
      const chain = [dispatchRequest, void 0];
      let promise2 = Promise.resolve(config2);
      this.interceptors.request.forEach((interceptor2) => {
        chain.unshift(interceptor2.fulfilled, interceptor2.rejected);
      });
      this.interceptors.response.forEach((interceptor2) => {
        chain.push(interceptor2.fulfilled, interceptor2.rejected);
      });
      while (chain.length) {
        promise2 = promise2.then(chain.shift(), chain.shift());
      }
      return promise2;
    }
    /**
    * @Function
    * @param {Object} config - 请求配置项
    * @prop {String} options.url - 请求路径
    * @prop {Object} options.data - 请求参数
    * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
    * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
    * @prop {Object} [options.header = config.header] - 请求header
    * @prop {Object} [options.method = config.method] - 请求方法
    * @returns {Promise<unknown>}
    */
    request(config2 = {}) {
      return this.middleware(config2);
    }
    get(url2, options = {}) {
      return this.middleware({
        url: url2,
        method: "GET",
        ...options
      });
    }
    post(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "POST",
        ...options
      });
    }
    put(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "PUT",
        ...options
      });
    }
    delete(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "DELETE",
        ...options
      });
    }
    options(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "OPTIONS",
        ...options
      });
    }
    upload(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "UPLOAD";
      return this.middleware(config2);
    }
    download(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "DOWNLOAD";
      return this.middleware(config2);
    }
  }
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`);
      if (i === 0)
        hex = rgbToHex(startColor);
      if (i === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha) {
    color2 = rgbToHex(color2);
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = String(color2).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      return `rgba(${sColorChange.join(",")},${alpha})`;
    }
    return sColor;
  }
  const colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  let timeout = null;
  function debounce(func2, wait2 = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait2);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait2);
    }
  }
  let flag;
  function throttle(func2, wait2 = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait2);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait2);
    }
  }
  const zIndex = {
    toast: 10090,
    noNetwork: 10080,
    // popup包含popup，actionsheet，keyboard，picker的值
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965
  };
  let platform = "none";
  platform = "vue3";
  platform = "plus";
  const platform$1 = platform;
  const http = new Request();
  let themeType = ["primary", "success", "error", "warning", "info"];
  function setConfig(configs) {
    index.shallowMerge(config$1, configs.config || {});
    index.shallowMerge(props$5, configs.props || {});
    index.shallowMerge(color, configs.color || {});
    index.shallowMerge(zIndex, configs.zIndex || {});
  }
  index.setConfig = setConfig;
  const $u = {
    route,
    date: index.timeFormat,
    // 另名date
    colorGradient: colorGradient$1.colorGradient,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    colorToRgba: colorGradient$1.colorToRgba,
    test,
    type: themeType,
    http,
    config: config$1,
    // uview-plus配置信息相关，比如版本号
    zIndex,
    debounce,
    throttle,
    mixin,
    mpMixin,
    props: props$5,
    ...index,
    color,
    platform: platform$1
  };
  const install = (Vue2) => {
    uni.$u = $u;
    Vue2.config.globalProperties.$u = $u;
    Vue2.mixin(mixin);
  };
  const uviewPlus = {
    install
  };
  uni.$zp = {
    config: {
      "default-page-size": 20,
      "auto-clean-list-when-reload": false,
      "hide-no-more-by-limit": 10
    }
  };
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(uviewPlus);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
