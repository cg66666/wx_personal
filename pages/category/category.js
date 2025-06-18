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
    normalContentHeight: 0,
    selectedItem: {
      name: '外卖外送',
      sort: 1,
      innerList: [
        {
          icon_name: 'icon-fangshai',
          name: '全部',
        },
        {
          icon_name: 'icon-leiyutianqi2',
          name: '外卖美食',
        },
        {
          icon_name: 'icon-art',
          name: '甜点饮品',
        },
        {
          icon_name: 'icon-Album',
          name: '夜宵',
        },
        {
          icon_name: 'icon-a-AutoFlash',
          name: '超市便利',
        },
        {
          icon_name: 'icon-Brush',
          name: '品质百货',
        },
        {
          icon_name: 'icon-camera',
          name: '买药',
        },
        {
          icon_name: 'icon-a-Closeupshot',
          name: '小吃馆',
        },
        {
          icon_name: 'icon-a-exposure2',
          name: 'CG专送',
        },
        {
          icon_name: 'icon-filters',
          name: '小象超市',
        },
        {
          icon_name: 'icon-Photos',
          name: '早餐',
        },
        {
          icon_name: 'icon-turbid',
          name: '正餐优选',
        },
        {
          icon_name: 'icon-Scene',
          name: '家常菜',
        },
        {
          icon_name: 'icon-Soft',
          name: '快食简餐',
        },
      ],
    },
    list: [
      {
        name: '外卖外送',
        sort: 1,
        innerList: [
          {
            icon_name: 'icon-fangshai',
            name: '全部',
          },
          {
            icon_name: 'icon-leiyutianqi2',
            name: '外卖美食',
          },
          {
            icon_name: 'icon-art',
            name: '甜点饮品',
          },
          {
            icon_name: 'icon-Album',
            name: '夜宵',
          },
          {
            icon_name: 'icon-a-AutoFlash',
            name: '超市便利',
          },
          {
            icon_name: 'icon-Brush',
            name: '品质百货',
          },
          {
            icon_name: 'icon-camera',
            name: '买药',
          },
          {
            icon_name: 'icon-a-Closeupshot',
            name: '小吃馆',
          },
          {
            icon_name: 'icon-a-exposure2',
            name: 'CG专送',
          },
          {
            icon_name: 'icon-filters',
            name: '小象超市',
          },
          {
            icon_name: 'icon-Photos',
            name: '早餐',
          },
          {
            icon_name: 'icon-turbid',
            name: '正餐优选',
          },
          {
            icon_name: 'icon-Scene',
            name: '家常菜',
          },
          {
            icon_name: 'icon-Soft',
            name: '快食简餐',
          },
        ],
      },
      {
        name: 'CG优选',
        sort: 2,
        innerList: [
          {
            icon_name: 'icon-a-SportShot',
            name: '全部',
          },
          {
            icon_name: 'icon-fangshai',
            name: '新鲜蔬菜',
          },
          {
            icon_name: 'icon-leiyutianqi2',
            name: '时令水果',
          },
          {
            icon_name: 'icon-art',
            name: '肉禽蛋品',
          },
          {
            icon_name: 'icon-Album',
            name: '酒水饮料',
          },
          {
            icon_name: 'icon-a-AutoFlash',
            name: '休闲零食',
          },
          {
            icon_name: 'icon-Brush',
            name: '粮油调味',
          },
          {
            icon_name: 'icon-camera',
            name: '速食冻品',
          },
          {
            icon_name: 'icon-a-Closeupshot',
            name: '纸品清洁',
          },
          {
            icon_name: 'icon-a-exposure2',
            name: '日用百货',
          },
          {
            icon_name: 'icon-filters',
            name: '火锅季',
          },
        ],
      },
      {
        name: '美食餐饮',
        sort: 3,
        innerList: [
          {
            icon_name: 'icon-Photos',
            name: '全部',
          },
          {
            icon_name: 'icon-turbid',
            name: '火锅',
          },
          {
            icon_name: 'icon-Scene',
            name: '自助餐',
          },
          {
            icon_name: 'icon-Soft',
            name: '面包甜点',
          },
          {
            icon_name: 'icon-a-SportShot',
            name: '小吃快餐',
          },
          {
            icon_name: 'icon-fangshai',
            name: '烧烤烤串',
          },
          {
            icon_name: 'icon-leiyutianqi2',
            name: '川湘菜',
          },
          {
            icon_name: 'icon-art',
            name: '西餐',
          },
          {
            icon_name: 'icon-Album',
            name: '日韩料理',
          },
          {
            icon_name: 'icon-a-AutoFlash',
            name: '海鲜',
          },
          {
            icon_name: 'icon-Brush',
            name: '江浙菜',
          },
          {
            icon_name: 'icon-camera',
            name: '粤菜',
          },
        ],
      },
      {
        name: '休闲娱乐',
        sort: 4,
        innerList: [
          {
            icon_name: 'icon-a-Closeupshot',
            name: '全部',
          },
          {
            icon_name: 'icon-a-exposure2',
            name: '猫眼电影',
          },
          {
            icon_name: 'icon-filters',
            name: '按摩足疗',
          },
          {
            icon_name: 'icon-Photos',
            name: '洗浴汗蒸',
          },
          {
            icon_name: 'icon-turbid',
            name: 'KTV',
          },
          {
            icon_name: 'icon-fangshai',
            name: '酒吧',
          },
          {
            icon_name: 'icon-leiyutianqi2',
            name: '健身运动',
          },
          {
            icon_name: 'icon-art',
            name: '新奇体验',
          },
          {
            icon_name: 'icon-Album',
            name: '密室逃脱',
          },
          {
            icon_name: 'icon-a-AutoFlash',
            name: '轰趴馆',
          },
          {
            icon_name: 'icon-Brush',
            name: '私人影院',
          },
          {
            icon_name: 'icon-camera',
            name: '采摘农家乐',
          },
          {
            icon_name: 'icon-a-Closeupshot',
            name: '游泳',
          },
          {
            icon_name: 'icon-a-exposure2',
            name: '网吧电竞',
          },
          {
            icon_name: 'icon-filters',
            name: '桌面游戏',
          },
        ],
      },
      {
        name: '酒店旅游',
        sort: 5,
        innerList: [
          {
            icon_name: 'icon-Photos',
            name: '全部',
          },
          {
            icon_name: 'icon-turbid',
            name: '酒店/住宿',
          },
          {
            icon_name: 'icon-Scene',
            name: '周边游旅游',
          },
          {
            icon_name: 'icon-Soft',
            name: '民宿公寓',
          },
          {
            icon_name: 'icon-a-SportShot',
            name: '景点门票',
          },
          {
            icon_name: 'icon-fangshai',
            name: '旅行攻略',
          },
        ],
      },
      {
        name: '交通出行',
        sort: 6,
        innerList: [
          {
            icon_name: 'icon-leiyutianqi2',
            name: '全部',
          },
          {
            icon_name: 'icon-art',
            name: '骑车',
          },
          {
            icon_name: 'icon-Album',
            name: '打车',
          },
          {
            icon_name: 'icon-a-AutoFlash',
            name: '火车票',
          },
          {
            icon_name: 'icon-Brush',
            name: '机票',
          },
          {
            icon_name: 'icon-camera',
            name: '汽车票',
          },
        ],
      },
      {
        name: '丽人医美',
        sort: 7,
        innerList: [
          {
            icon_name: 'icon-a-Closeupshot',
            name: '全部',
          },
          {
            icon_name: 'icon-a-exposure2',
            name: '美发',
          },
          {
            icon_name: 'icon-filters',
            name: '美甲美睫',
          },
          {
            icon_name: 'icon-Photos',
            name: '美容美体',
          },
          {
            icon_name: 'icon-turbid',
            name: '医学美容',
          },
          {
            icon_name: 'icon-Scene',
            name: '化妆品',
          },
          {
            icon_name: 'icon-Soft',
            name: '韩式定妆',
          },
          {
            icon_name: 'icon-a-SportShot',
            name: '瑜伽舞蹈',
          },
          {
            icon_name: 'icon-fangshai',
            name: '纤体瘦身',
          },
          {
            icon_name: 'icon-leiyutianqi2',
            name: '祛痘',
          },
        ],
      },
      {
        name: '生活服务',
        sort: 8,
        innerList: [
          {
            icon_name: 'icon-art',
            name: '充电宝',
          },
          {
            icon_name: 'icon-Album',
            name: '养车用车',
          },
          {
            icon_name: 'icon-a-AutoFlash',
            name: '宠物',
          },
          {
            icon_name: 'icon-Brush',
            name: '结婚摄影',
          },
          {
            icon_name: 'icon-camera',
            name: '学习培训',
          },
          {
            icon_name: 'icon-a-Closeupshot',
            name: '亲子乐园',
          },
          {
            icon_name: 'icon-a-exposure2',
            name: '家庭服务',
          },
        ],
      },
      {
        name: '金融服务',
        sort: 9,
        innerList: [
          {
            icon_name: 'icon-filters',
            name: '全部',
          },
          {
            icon_name: 'icon-Photos',
            name: '借钱',
          },
          {
            icon_name: 'icon-turbid',
            name: '账单',
          },
          {
            icon_name: 'icon-fangshai',
            name: '银行卡',
          },
          {
            icon_name: 'icon-leiyutianqi2',
            name: '笔笔返',
          },
          {
            icon_name: 'icon-art',
            name: '实名',
          },
        ],
      },
      {
        name: '福利中心',
        sort: 10,
        innerList: [
          {
            icon_name: 'icon-Album',
            name: '免费领鸡蛋',
          },
          {
            icon_name: 'icon-a-AutoFlash',
            name: '答题领红包',
          },
          {
            icon_name: 'icon-Brush',
            name: '贪吃龙',
          },
          {
            icon_name: 'icon-camera',
            name: 'CG小镇',
          },
          {
            icon_name: 'icon-a-Closeupshot',
            name: '看小说赚钱',
          },
          {
            icon_name: 'icon-a-exposure2',
            name: '全民种红包',
          },
          {
            icon_name: 'icon-filters',
            name: '小美餐厅',
          },
        ],
      },
    ],
    topList: [],
    bottomList: [
      {
        name: 'CG优选',
        sort: 2,
        innerList: [
          {
            icon_name: 'icon-a-SportShot',
            name: '全部',
          },
          {
            icon_name: 'icon-fangshai',
            name: '新鲜蔬菜',
          },
          {
            icon_name: 'icon-leiyutianqi2',
            name: '时令水果',
          },
          {
            icon_name: 'icon-art',
            name: '肉禽蛋品',
          },
          {
            icon_name: 'icon-Album',
            name: '酒水饮料',
          },
          {
            icon_name: 'icon-a-AutoFlash',
            name: '休闲零食',
          },
          {
            icon_name: 'icon-Brush',
            name: '粮油调味',
          },
          {
            icon_name: 'icon-camera',
            name: '速食冻品',
          },
          {
            icon_name: 'icon-a-Closeupshot',
            name: '纸品清洁',
          },
          {
            icon_name: 'icon-a-exposure2',
            name: '日用百货',
          },
          {
            icon_name: 'icon-filters',
            name: '火锅季',
          },
        ],
      },
      {
        name: '美食餐饮',
        sort: 3,
        innerList: [
          {
            icon_name: 'icon-Photos',
            name: '全部',
          },
          {
            icon_name: 'icon-turbid',
            name: '火锅',
          },
          {
            icon_name: 'icon-Scene',
            name: '自助餐',
          },
          {
            icon_name: 'icon-Soft',
            name: '面包甜点',
          },
          {
            icon_name: 'icon-a-SportShot',
            name: '小吃快餐',
          },
          {
            icon_name: 'icon-fangshai',
            name: '烧烤烤串',
          },
          {
            icon_name: 'icon-leiyutianqi2',
            name: '川湘菜',
          },
          {
            icon_name: 'icon-art',
            name: '西餐',
          },
          {
            icon_name: 'icon-Album',
            name: '日韩料理',
          },
          {
            icon_name: 'icon-a-AutoFlash',
            name: '海鲜',
          },
          {
            icon_name: 'icon-Brush',
            name: '江浙菜',
          },
          {
            icon_name: 'icon-camera',
            name: '粤菜',
          },
        ],
      },
      {
        name: '休闲娱乐',
        sort: 4,
        innerList: [
          {
            icon_name: 'icon-a-Closeupshot',
            name: '全部',
          },
          {
            icon_name: 'icon-a-exposure2',
            name: '猫眼电影',
          },
          {
            icon_name: 'icon-filters',
            name: '按摩足疗',
          },
          {
            icon_name: 'icon-Photos',
            name: '洗浴汗蒸',
          },
          {
            icon_name: 'icon-turbid',
            name: 'KTV',
          },
          {
            icon_name: 'icon-fangshai',
            name: '酒吧',
          },
          {
            icon_name: 'icon-leiyutianqi2',
            name: '健身运动',
          },
          {
            icon_name: 'icon-art',
            name: '新奇体验',
          },
          {
            icon_name: 'icon-Album',
            name: '密室逃脱',
          },
          {
            icon_name: 'icon-a-AutoFlash',
            name: '轰趴馆',
          },
          {
            icon_name: 'icon-Brush',
            name: '私人影院',
          },
          {
            icon_name: 'icon-camera',
            name: '采摘农家乐',
          },
          {
            icon_name: 'icon-a-Closeupshot',
            name: '游泳',
          },
          {
            icon_name: 'icon-a-exposure2',
            name: '网吧电竞',
          },
          {
            icon_name: 'icon-filters',
            name: '桌面游戏',
          },
        ],
      },
      {
        name: '酒店旅游',
        sort: 5,
        innerList: [
          {
            icon_name: 'icon-Photos',
            name: '全部',
          },
          {
            icon_name: 'icon-turbid',
            name: '酒店/住宿',
          },
          {
            icon_name: 'icon-Scene',
            name: '周边游旅游',
          },
          {
            icon_name: 'icon-Soft',
            name: '民宿公寓',
          },
          {
            icon_name: 'icon-a-SportShot',
            name: '景点门票',
          },
          {
            icon_name: 'icon-fangshai',
            name: '旅行攻略',
          },
        ],
      },
      {
        name: '交通出行',
        sort: 6,
        innerList: [
          {
            icon_name: 'icon-leiyutianqi2',
            name: '全部',
          },
          {
            icon_name: 'icon-art',
            name: '骑车',
          },
          {
            icon_name: 'icon-Album',
            name: '打车',
          },
          {
            icon_name: 'icon-a-AutoFlash',
            name: '火车票',
          },
          {
            icon_name: 'icon-Brush',
            name: '机票',
          },
          {
            icon_name: 'icon-camera',
            name: '汽车票',
          },
        ],
      },
      {
        name: '丽人医美',
        sort: 7,
        innerList: [
          {
            icon_name: 'icon-a-Closeupshot',
            name: '全部',
          },
          {
            icon_name: 'icon-a-exposure2',
            name: '美发',
          },
          {
            icon_name: 'icon-filters',
            name: '美甲美睫',
          },
          {
            icon_name: 'icon-Photos',
            name: '美容美体',
          },
          {
            icon_name: 'icon-turbid',
            name: '医学美容',
          },
          {
            icon_name: 'icon-Scene',
            name: '化妆品',
          },
          {
            icon_name: 'icon-Soft',
            name: '韩式定妆',
          },
          {
            icon_name: 'icon-a-SportShot',
            name: '瑜伽舞蹈',
          },
          {
            icon_name: 'icon-fangshai',
            name: '纤体瘦身',
          },
          {
            icon_name: 'icon-leiyutianqi2',
            name: '祛痘',
          },
        ],
      },
      {
        name: '生活服务',
        sort: 8,
        innerList: [
          {
            icon_name: 'icon-art',
            name: '充电宝',
          },
          {
            icon_name: 'icon-Album',
            name: '养车用车',
          },
          {
            icon_name: 'icon-a-AutoFlash',
            name: '宠物',
          },
          {
            icon_name: 'icon-Brush',
            name: '结婚摄影',
          },
          {
            icon_name: 'icon-camera',
            name: '学习培训',
          },
          {
            icon_name: 'icon-a-Closeupshot',
            name: '亲子乐园',
          },
          {
            icon_name: 'icon-a-exposure2',
            name: '家庭服务',
          },
        ],
      },
      {
        name: '金融服务',
        sort: 9,
        innerList: [
          {
            icon_name: 'icon-filters',
            name: '全部',
          },
          {
            icon_name: 'icon-Photos',
            name: '借钱',
          },
          {
            icon_name: 'icon-turbid',
            name: '账单',
          },
          {
            icon_name: 'icon-fangshai',
            name: '银行卡',
          },
          {
            icon_name: 'icon-leiyutianqi2',
            name: '笔笔返',
          },
          {
            icon_name: 'icon-art',
            name: '实名',
          },
        ],
      },
      {
        name: '福利中心',
        sort: 10,
        innerList: [
          {
            icon_name: 'icon-Album',
            name: '免费领鸡蛋',
          },
          {
            icon_name: 'icon-a-AutoFlash',
            name: '答题领红包',
          },
          {
            icon_name: 'icon-Brush',
            name: '贪吃龙',
          },
          {
            icon_name: 'icon-camera',
            name: 'CG小镇',
          },
          {
            icon_name: 'icon-a-Closeupshot',
            name: '看小说赚钱',
          },
          {
            icon_name: 'icon-a-exposure2',
            name: '全民种红包',
          },
          {
            icon_name: 'icon-filters',
            name: '小美餐厅',
          },
        ],
      },
    ],
  },
  // 前往搜索页
  navigateToSearchPage() {
    wx.navigateTo({
      url: '/pages/search/search',
    });
  },
  // 选择分类
  setCategory(event) {
    const { sort } = event.currentTarget.dataset; // 获取传递的参数
    this.setData({
      topList: this.data.list.slice(0, sort - 1),
      bottomList: this.data.list.slice(sort),
      selectedItem: this.data.list.find((item) => item.sort == sort),
    });
  },
  // 前往详情页
  toDetail(e) {
    wx.navigateTo({
      url: `/pages/detail/detail?searchVal=${e.currentTarget.dataset.val}`,
    });
  },
  onLoad() {
    // 获取 globalData 并更新到页面 data
    this.setData({
      normalContentHeight: app.globalData.normalContentHeight,
    });
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
        inIndexPage: false,
      });
    }
  },
  onUnload() {},
});
