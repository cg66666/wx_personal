/*
 * @Description: file content
 * @Author: 朱晨光
 * @Date: 2024-08-09 15:48:32
 * @LastEditors: 朱晨光
 * @LastEditTime: 2024-08-09 15:50:10
 */
// pages/search/search.js
import { debounce } from '../../utils/index';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    showClearBtn: false,
    searchValList: [],
    defaultValue: '英嘉国际影城',
    showSearchTips: false,
    searchTipsList: [
      '汉堡王',
      '华莱士汉堡',
      '汉堡外卖',
      '塔斯汀汉堡',
      '外卖 汉堡王',
      '肯德基汉堡',
      '汉堡王(北京路店)',
      '外卖 华莱士全鸡汉堡(北京城市店)',
      '外卖 牛约堡-手作牛肉汉堡(大学店)',
      '汉堡王(大厦店)',
      '麦当劳(花园店)',
    ],
    recommendList: [
      '岩小石韩式炸鸡',
      '英嘉国际影城',
      '芈重山老火锅',
      '39元自主骨头火锅',
      '二三九品手工水饺自助',
      '星怡会',
      '文昌桥螺狮粉',
      '农小锅',
      '一屋之煮麻辣烫',
    ],
  },
  // 清空输入框
  clearInputVal() {
    this.setData({
      inputVal: '',
      showClearBtn: false,
      showSearchTips: false,
    });
  },
  // 输入框改变
  inputHandler(e) {
    // 获取输入框的值
    var { value } = e.detail;
    if (!value) this.clearInputVal();
    else {
      this.setData({
        inputVal: value,
        showClearBtn: !!value,
      });
      this.searchTips();
    }
  },
  // 搜索
  toSearch(val) {
    let { inputVal } = this.data;
    // 特殊情况，用于搜索框进行搜索的场景
    if (typeof val === 'string') {
      inputVal = val;
    }
    const { defaultValue } = this.data;
    const searchValList = wx.getStorageSync('searchValList') || [];
    if (!inputVal.trim()) inputVal = defaultValue;
    const index = searchValList.indexOf(inputVal);
    if (index >= 0) {
      searchValList.splice(index, 1);
    }
    searchValList.unshift(inputVal);
    if (searchValList.length > 10) {
      searchValList.length = 10;
    }
    wx.navigateTo({
      url: `/pages/detail/detail?searchVal=${inputVal}`,
    });
    this.setData({
      searchValList,
    });
    wx.setStorageSync('searchValList', searchValList);
  },
  // 清空历史记录
  clearHistoryList() {
    wx.setStorageSync('searchValList', []);
    this.setData({
      searchValList: [],
    });
  },
  // 搜索提示内容展示
  searchTips: debounce(function () {
    const { inputVal } = this.data;
    if (!inputVal) return;
    this.setData({
      showSearchTips: true,
    });
  }, 500),
  // 前往详情页
  toDetail(e) {
    const { insearch, val } = e.currentTarget.dataset;
    // console.log('dataset', e.currentTarget.dataset, e.currentTarget.dataset.inSearch);
    this.setData({
      inputVal: insearch ? val : '',
      showClearBtn: insearch,
    });
    this.toSearch(val);
    if (insearch) {
      this.searchTips();
    }
    // } else {
    //   wx.navigateTo({
    //     url: `/pages/detail/detail?searchVal=${val}`,
    //   });
    // }
  },
  // 回显历史搜索记录
  onLoad() {
    const searchValList = wx.getStorageSync('searchValList') || [];
    this.setData({
      searchValList,
    });
  },
});
