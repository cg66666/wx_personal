/*
 * @Description: file content
 * @Author: cg
 * @Date: 2024-07-16 23:22:48
 * @LastEditors: cg
 * @LastEditTime: 2024-08-09 15:48:44
 */
import { formatTime } from '../../utils/index';
const app = getApp();
const addLeftList = [
  {
    img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
    title: '散天宇 鸭汤醋椒鱼',
    subTitle: '4.2分 | 月售600+',
    discountPrice: '999',
    originPrice: '1299',
    priceDesc: '30天惊爆价',
  },
  {
    img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
    title: '杏花楼 香葱生焗鲜鲍鱼',
    subTitle: '4.2分 | 月售600+',
    discountPrice: '999',
    originPrice: '1299',
    priceDesc: '30天惊爆价',
  },
  {
    img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
    title: '多克酒店 一品天香广州文昌鸡',
    subTitle: '4.2分 | 月售600+',
    discountPrice: '999',
    originPrice: '1299',
    priceDesc: '30天惊爆价',
  },
  {
    img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
    title: '北亚地 老上海黄鱼面',
    subTitle: '4.2分 | 月售600+',
    discountPrice: '999',
    originPrice: '1299',
    priceDesc: '30天惊爆价',
  },
];
const addRightList = [
  {
    img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
    title: '散天宇 鸭汤醋椒鱼',
    subTitle: '4.2分 | 月售600+',
    discountPrice: '999',
    originPrice: '1299',
    priceDesc: '30天惊爆价',
  },
  {
    img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
    title: '比亚楼 香葱生焗鲜鲍鱼',
    subTitle: '4.2分 | 月售600+',
    discountPrice: '999',
    originPrice: '1299',
    priceDesc: '30天惊爆价',
  },
  {
    img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
    title: '卧室酒家 一品天香广州文昌鸡',
    subTitle: '4.2分 | 月售600+',
    discountPrice: '999',
    originPrice: '1299',
    priceDesc: '30天惊爆价',
  },
  {
    img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
    title: '开了去 老上海黄鱼面',
    subTitle: '4.2分 | 月售600+',
    discountPrice: '999',
    originPrice: '1299',
    priceDesc: '30天惊爆价',
  },
];
Page({
  data: {
    normalContentHeight: 0,
    topNum: 0,
    titleLeft: 0,
    headSwiperList: ['firstView', 'secondView', 'thirdShowView', 'forthView', 'fifthView'],
    menuList: [
      [
        {
          icon_name: 'icon-fangshai',
          label: '外卖',
        },
        {
          icon_name: 'icon-leiyutianqi2',
          label: '美食',
        },
        {
          icon_name: 'icon-art',
          label: '酒店/民宿',
        },
        {
          icon_name: 'icon-Album',
          label: '休闲娱乐',
        },
        {
          icon_name: 'icon-a-AutoFlash',
          label: '电影/演出',
        },
        {
          icon_name: 'icon-Brush',
          label: '打车',
        },
        {
          icon_name: 'icon-camera',
          label: '小象超市',
        },
        {
          icon_name: 'icon-a-Closeupshot',
          label: '骑车',
        },
        {
          icon_name: 'icon-Album',
          label: '看病买药',
        },
        {
          icon_name: 'icon-filters',
          label: '超市便利',
        },
        {
          icon_name: 'icon-Photos',
          label: '特价团',
        },
        {
          icon_name: 'icon-a-SportShot',
          label: '景点/门票',
        },
        {
          icon_name: 'icon-Scene',
          label: '免费领鸡蛋',
        },
        {
          icon_name: 'icon-Soft',
          label: '拼好饭',
        },
        {
          icon_name: 'icon-a-SportShot',
          label: '年轻人省钱',
        },
      ],
      [
        {
          icon_name: 'icon-fangshai',
          label: '蔬菜水果',
        },
        {
          icon_name: 'icon-leiyutianqi2',
          label: '跑腿',
        },
        {
          icon_name: 'icon-art',
          label: 'KTV',
        },
        {
          icon_name: 'icon-Album',
          label: '买酒',
        },
        {
          icon_name: 'icon-a-AutoFlash',
          label: '汽车票',
        },
        {
          icon_name: 'icon-Brush',
          label: '宠物',
        },
        {
          icon_name: 'icon-camera',
          label: '养车/用车',
        },
        {
          icon_name: 'icon-a-Closeupshot',
          label: '丽人/美发',
        },
        {
          icon_name: 'icon-Album',
          label: '火车机票',
        },
        {
          icon_name: 'icon-filters',
          label: '生活服务',
        },
        {
          icon_name: 'icon-Photos',
          label: '品质百货',
        },
        {
          icon_name: 'icon-a-SportShot',
          label: '医疗/口腔',
        },
        {
          icon_name: 'icon-Scene',
          label: '游泳/健身',
        },
        {
          icon_name: 'icon-Soft',
          label: '学习培训',
        },
        {
          icon_name: 'icon-a-SportShot',
          label: '周边游',
        },
      ],
      [
        {
          icon_name: 'icon-fangshai',
          label: '充电宝',
        },
        {
          icon_name: 'icon-leiyutianqi2',
          label: '结婚/摄影',
        },
        {
          icon_name: 'icon-art',
          label: '亲子/乐园',
        },
        {
          icon_name: 'icon-Album',
          label: '母婴服务',
        },
        {
          icon_name: 'icon-a-AutoFlash',
          label: '娱乐大厅',
        },
        {
          icon_name: 'icon-Brush',
          label: '全民种红包',
        },
        {
          icon_name: 'icon-camera',
          label: '家庭装修',
        },
        {
          icon_name: 'icon-a-Closeupshot',
          label: '看小说赚钱',
        },
        {
          icon_name: 'icon-Album',
          label: '民宿/公寓',
        },
        {
          icon_name: 'icon-filters',
          label: '医美',
        },
        {
          icon_name: 'icon-Photos',
          label: '借钱',
        },
        {
          icon_name: 'icon-a-SportShot',
          label: '全部分类',
        },
      ],
    ],
    headSwiperTimer: null,
    timeCountDownTimer: null,
    timeCountDownObj: {
      Day: '00',
      Hour: '00',
      Minute: '00',
      Second: '00',
    },
    isLoading: false,
    leftList: [
      {
        img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
        title: '散天宇 鸭汤醋椒鱼',
        subTitle: '4.2分 | 月售600+',
        discountPrice: '999',
        originPrice: '1299',
        priceDesc: '30天惊爆价',
      },
      {
        img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
        title: '杏花楼 香葱生焗鲜鲍鱼',
        subTitle: '4.2分 | 月售600+',
        discountPrice: '999',
        originPrice: '1299',
        priceDesc: '30天惊爆价',
      },
      {
        img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
        title: '多克酒店 一品天香广州文昌鸡',
        subTitle: '4.2分 | 月售600+',
        discountPrice: '999',
        originPrice: '1299',
        priceDesc: '30天惊爆价',
      },
      {
        img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
        title: '北亚地 老上海黄鱼面',
        subTitle: '4.2分 | 月售600+',
        discountPrice: '999',
        originPrice: '1299',
        priceDesc: '30天惊爆价',
      },
    ],
    rightList: [
      {
        img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
        title: '肯少观 叫化童鸡',
        subTitle: '4.2分 | 月售600+',
        discountPrice: '999',
        originPrice: '1299',
        priceDesc: '30天惊爆价',
      },
      {
        img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
        title: 'islk面 村蒙古奶酪饼',
        subTitle: '4.2分 | 月售600+',
        discountPrice: '999',
        originPrice: '1299',
        priceDesc: '30天惊爆价',
      },
      {
        img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
        title: '北亚地 清炒野生河虾仁',
        subTitle: '4.2分 | 月售600+',
        discountPrice: '999',
        originPrice: '1299',
        priceDesc: '30天惊爆价',
      },
      {
        img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
        title: '框奇亚 超级至尊披萨',
        subTitle: '4.2分 | 月售600+',
        discountPrice: '999',
        originPrice: '1299',
        priceDesc: '30天惊爆价',
      },
    ],
    isScroll: false,
  },
  // 前往搜索页
  navigateToSearchPage() {
    wx.navigateTo({
      url: '/pages/search/search',
    });
  },
  // 接近触底监听
  bindscrolltolower() {
    if (this.data.isLoading) return;
    this.setData({
      isLoading: true,
    });
    setTimeout(() => {
      this.setData({
        isLoading: false,
        leftList: [...this.data.leftList, ...addLeftList],
        rightList: [...this.data.rightList, ...addRightList],
      });
    }, 600);
  },
  // 滚动行为
  onScroll: function (e) {
    if (e.detail.scrollTop > 200) {
      this.setData({
        isScroll: true,
      });
      this.getTabBar().setData({
        isScroll: true,
      });
    } else {
      this.setData({
        isScroll: false,
      });
      this.getTabBar().setData({
        isScroll: false,
      });
    }
  },
  // 滚回头部
  scrollToTop: function () {
    if (!this.data.isScroll) return;
    this.setData({
      topNum: 0,
    });
  },
  // 前往详情页
  toDetail(e) {
    wx.navigateTo({
      url: `/pages/detail/detail?searchVal=${e.currentTarget.dataset.val}`,
    });
  },
  onLoad() {
    this.setData({
      titleLeft: app.globalData.rectRight,
      normalContentHeight: app.globalData.normalContentHeight,
    });
    // 头部轮播图事件
    this.headSwiperTimer = setInterval(() => {
      const headSwiperList = [...this.data.headSwiperList];
      var midClassName = headSwiperList.shift();
      headSwiperList.push(midClassName);
      this.setData({
        headSwiperList,
      });
    }, 5000);

    // 倒计时
    const endTime = new Date().getTime() + 21216923;
    this.timeCountDownTimer = setInterval(() => {
      const diffTime = endTime - new Date().getTime();
      if (diffTime > 0) {
        const dataObj = formatTime(diffTime);
        this.setData({
          timeCountDownObj: {
            Day: dataObj.Day,
            Hour: dataObj.Hour,
            Minute: dataObj.Minute,
            Second: dataObj.Second,
          },
        });
      } else {
        clearInterval(this.timeCountDownTimer);
      }
    }, 250);
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
        inIndexPage: true,
        toPageTop: this.scrollToTop,
      });
    }
  },
  onHide() {},
  onUnload() {
    clearInterval(this.headSwiperTimer);
    clearInterval(this.timeCountDownTimer);
  },
});
