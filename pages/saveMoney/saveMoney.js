/*
 * @Description: file content
 * @Author: cg
 * @Date: 2024-07-16 23:22:48
 * @LastEditors: cg
 * @LastEditTime: 2024-07-17 00:40:49
 */
const app = getApp();
Page({
  data: {
    selected: 1,
    titleList: [
      {
        name: '9块9下午茶',
        id: 1,
        list: [
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
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '九纹龙 欢迎收藏打卡',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '东北大冷面',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '【甄选】现切牛心单人餐',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '碳烤大鸡腿2串',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
        ],
      },
      {
        name: '20元美食',
        id: 2,
        list: [
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '欢迎打卡收藏',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '【周一至周四】午市主食套餐',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '【北丐】招牌手打柠檬茶',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
        ],
      },
      {
        name: '宵夜档',
        id: 3,
        list: [
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '【东北】大冻梨',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '打卡好礼：冷吃牛肉',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '回馈粉丝盲盒串1串',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '欢迎打卡收藏+评价',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '欢迎打卡收藏+评价',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '欢迎打卡收藏+评价',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '欢迎打卡收藏+评价',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '欢迎打卡收藏+评价',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '收藏打卡',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '欢迎收藏打卡本店',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '牛肉小串',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
        ],
      },
      {
        name: '特价果切',
        id: 4,
        list: [
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '爆汁鲜肉饼',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '斋手撕鸡',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '中国鸡排汉堡（2个）',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
          {
            img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
            title: '四季春茶（热/冰）',
            subTitle: '4.2分 | 月售600+',
            discountPrice: '999',
            originPrice: '1299',
            priceDesc: '30天惊爆价',
          },
        ],
      },
      {
        name: '零食饮料',
        id: 5,
        list: [
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
      },
      {
        name: '推荐',
        id: 6,
        list: [
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
      },
    ],
  },
  toDetail(e) {
    wx.navigateTo({
      url: `/pages/detail/detail?searchVal=${e.currentTarget.dataset.val}`,
    });
  },
  selectedId(event) {
    const { id } = event.currentTarget.dataset; // 获取传递的参数
    // console.log('id', id);
    this.setData({
      selected: id,
      topNum: 0,
    });
  },
  onLoad() {
    this.setData({
      normalContentHeight: app.globalData.normalContentHeight,
    });
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2,
        inIndexPage: false,
      });
    }
  },
  onUnload() {},
});
