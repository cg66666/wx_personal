const demo = [
  {
    pagePath: '/pages/index/index',
    iconPath: 'icon-shouye',
    // selectedIconPath: "/image/icon_component_HL.png",
    text: '首页',
  },
  {
    pagePath: '/pages/index2/index',
    iconPath: 'icon-fenlei1',
    selectedIconPath: 'icon-fenlei',
    text: '分类',
  },
  {
    pagePath: '/pages/index3/index',
    iconPath: 'icon-hongbao',
    selectedIconPath: 'icon-hongbao1',
    text: '省钱',
  },
  {
    pagePath: '/pages/person/person',
    iconPath: 'icon-wode2',
    selectedIconPath: 'icon-wode1',
    text: '我的',
  },
];
Component({
  data: {
    selected: 0,
    color: '#7A7E83',
    selectedColor: '#3cc51f',
    list: demo,
    inIndexPage: false,
    isScroll: false,
    toPageTop: null,
  },
  observers: {
    inIndexPage(val) {
      if (val) {
        const midArray = [...demo];
        midArray.shift();
        this.setData({
          list: midArray,
        });
      } else {
        this.setData({
          list: demo,
        });
      }
    },
  },
  // created() {
  //   console.log('created', this.data.toPageTop);
  // },
  // attached() {
  //   console.log('toPageTop', this.data.toPageTop);
  // },
  // ready() {
  //   console.log('ready', this.data.toPageTop);
  // },
  // moved() {
  //   console.log('moved', this.data.toPageTop);
  // },
  // detached() {
  //   console.log('detached', this.data.toPageTop);
  // },
  // error() {
  //   console.log('error', this.data.toPageTop);
  // },
  methods: {
    toPageTop() {
      if (this.data.toPageTop) {
        this.data.toPageTop();
      }
    },
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      // console.log('url', url);
      wx.switchTab({
        url,
      });
      this.setData({
        selected: data.index,
      });
    },
  },
});
