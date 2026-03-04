/*
 * @Description: 详情页
 * @Author: cg
 * @Date: 2024-07-16 23:22:48
 * @LastEditors: cg
 * @LastEditTime: 2025-06-18 11:20:30
 */
// pages/detail.js
const app = getApp();

// Mock商品数据
const mockProduct = {
  id: 'detail_1',
  img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
  title: '华莱士·全鸡汉堡 劲脆鲜虾堡',
  subTitle: '4.2分 | 月售600+',
  price: 6.71,
  originPrice: 13,
};

Page({
  data: {
    searchVal: '',
    backUrl: '',
    product: mockProduct,
    cartCount: 0,
  },

  onLoad(options) {
    if (!options.searchVal) return;
    this.setData({
      searchVal: options.searchVal,
      normalContentHeight: app.globalData.normalContentHeight,
      product: { ...mockProduct, title: options.searchVal, id: `detail_${Date.now()}` },
    });
  },

  onShow() {
    this.updateCartCount();
  },

  // 更新购物车数量
  updateCartCount() {
    const count = app.cart.getCount();
    this.setData({ cartCount: count });
  },

  // 添加到购物车
  addToCart() {
    const { product } = this.data;
    app.cart.addItem(product);
    this.updateCartCount();
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
    });
  },

  // 立即购买
  buyNow() {
    const { product } = this.data;
    app.cart.addItem(product);
    wx.switchTab({
      url: '/pages/shoppingCart/shoppingCart',
    });
  },

  // 前往购物车
  goToCart() {
    wx.switchTab({
      url: '/pages/shoppingCart/shoppingCart',
    });
  },
});
