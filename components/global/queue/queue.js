// components/global/queue/queue.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    hours: '00',
    minutes: '00',
    seconds: '00',
    typeList: [2, 4, 6, 8, 10, 12],
    selected: null,
    num: '?',
    ID: '?',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setNum(e) {
      this.setData({
        selected: e.currentTarget.dataset.val,
      });
    },
    goQueue() {
      const { selected, num } = this.data;
      if (selected == null) {
        wx.showToast({
          title: '请先选择您所需的座位',
          icon: 'none',
          duration: 2000,
        });
      } else if (num !== '?') {
        wx.showToast({
          title: '您已排队，请耐心等候，如需修改座位请找前台',
          icon: 'none',
          duration: 2000,
        });
      } else {
        this.setData({
          num: '12',
          ID: '0021',
        });
      }
    },
  },
  lifetimes: {
    attached() {
      // console.log(Date.now());
      // console.log(app.globalData.clsDef);
      // console.log(app.globalData.clsDef > Date.now());
      this.setData({
        // + ${app.globalData.marginTop}px)
        pageMarginTop:
          app.globalData.isDevtools || app.globalData.isAndroid ? `padding-top: ${app.globalData.marginTop}px ;` : ``,
        headHeight: `height: ${app.globalData.marginTop}px`,
        ios: !app.globalData.isAndroid,
        ggsf: Date.now(),
        clsDef: app.globalData.clsDef,
      });
      setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        this.setData({
          hours,
          minutes,
          seconds,
        });
      }, 250);
    },
  },
});
