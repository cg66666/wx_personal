const app = getApp();
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    extClass: {
      type: String,
      value: '',
    },
    title: {
      type: String,
      value: '',
    },
    background: {
      type: String,
      value: '',
    },
    loading: {
      type: Boolean,
      value: false,
    },
    show: {
      // 显示隐藏导航，隐藏的时候navigation-bar的高度占位还在
      type: Boolean,
      value: true,
      observer: '_showChange',
    },
    // 用于判断是否未插槽
    isSlot: {
      type: Boolean,
    },
    // 用于判断是否显示返回按钮
    showBack: {
      type: Boolean,
    },
    // 返回的地址，不传默认返回上一级路由
    // backUrl: {
    //   type: String
    // }
  },
  /**
   * 组件的初始数据
   */
  data: {
    displayStyle: '',
  },
  lifetimes: {
    attached() {
      // console.log('看下此时的app222', app);
      this.setData({
        ios: !app.globalData.isAndroid,
        titleMarginLeft: `margin-left: ${app.globalData.contentMarginRight}px;`,
        innerPaddingRight: `padding-right: ${app.globalData.contentMarginRight}px`,
        safeAreaTop:
          app.globalData.isDevtools || app.globalData.isAndroid
            ? `height: calc(var(--height) + ${app.globalData.marginTop}px); padding-top: ${app.globalData.marginTop}px`
            : ``,
        // titleStyle: `margin-top: ${app.globalData.marginTop}px; margin:0 ${app.globalData.contentMarginRight}px; line-height`
      });

      // const rect = wx.getMenuButtonBoundingClientRect();
      // wx.getSystemInfo({
      //   success: (res) => {
      //     const isAndroid = res.platform === 'android';
      //     const isDevtools = res.platform === 'devtools';
      //     this.setData({
      //       ios: !isAndroid,
      //       titleMarginLeft: `margin-left: ${res.windowWidth - rect.left}px`,
      //       innerPaddingRight: `padding-right: ${res.windowWidth - rect.left}px`,
      //       safeAreaTop: isDevtools || isAndroid ?
      //         `height: calc(var(--height) + ${res.safeArea.top}px); padding-top: ${res.safeArea.top}px` : ``,
      //     });
      //   },
      // });
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _showChange(show) {
      const { animated } = this.data;
      let displayStyle = '';
      if (animated) {
        displayStyle = `opacity: ${show ? '1' : '0'};transition:opacity 0.5s;`;
      } else {
        displayStyle = `display: ${show ? '' : 'none'}`;
      }
      this.setData({
        displayStyle,
      });
    },
    backPage() {
      // console.log(111, this.properties);
      // const {
      //   backUrl
      // } = this.properties
      // if (backUrl) {
      //   wx.redirectTo({
      //     url: backUrl,
      //   })
      // } else {
      //   wx.navigateBack({
      //     delta: 1,
      //   });
      // }
      wx.navigateBack({
        delta: 1,
      });
    },
  },
});
