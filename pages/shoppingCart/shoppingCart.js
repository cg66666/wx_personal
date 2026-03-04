/*
 * @Description: 购物车页面
 * @Author: cg
 * @Date: 2024-07-16 23:22:48
 * @LastEditors: cg
 * @LastEditTime: 2025-06-18 11:20:30
 */
const app = getApp();

// Mock数据 - 用于空购物车时展示推荐商品
const mockProducts = [
  {
    id: '1',
    img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
    title: '华莱士·全鸡汉堡 劲脆鲜虾堡',
    subTitle: '4.2分 | 月售600+',
    price: 6.71,
    originPrice: 13,
  },
  {
    id: '2',
    img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
    title: '蜜雪冰城 满杯百香果',
    subTitle: '4.5分 | 月售1200+',
    price: 8,
    originPrice: 15,
  },
  {
    id: '3',
    img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
    title: '瑞幸咖啡 生椰拿铁',
    subTitle: '4.8分 | 月售2000+',
    price: 9.9,
    originPrice: 29,
  },
  {
    id: '4',
    img: 'http://www.cgcg666.cn:8888/wxfood1.jpg',
    title: '麦当劳 麦辣鸡腿堡',
    subTitle: '4.6分 | 月售800+',
    price: 12,
    originPrice: 22,
  },
];

Page({
  data: {
    cartItems: [],
    recommendList: mockProducts,
    isAllSelected: false,
    totalPrice: 0,
    selectedCount: 0,
  },

  onLoad() {
    this.setData({
      normalContentHeight: app.globalData.normalContentHeight,
    });
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3,
        inIndexPage: false,
      });
    }
    this.refreshCart();
  },

  // 刷新购物车数据
  refreshCart() {
    const cartItems = app.cart.getItems();
    const selectedItems = cartItems.filter((item) => item.selected);
    const totalPrice = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const selectedCount = selectedItems.reduce((sum, item) => sum + item.quantity, 0);
    const isAllSelected = cartItems.length > 0 && cartItems.every((item) => item.selected);

    this.setData({
      cartItems: [...cartItems],
      totalPrice: totalPrice.toFixed(2),
      selectedCount,
      isAllSelected,
    });
  },

  // 增加商品数量
  increaseQuantity(e) {
    const { id } = e.currentTarget.dataset;
    const item = this.data.cartItems.find((i) => i.id === id);
    if (item) {
      app.cart.updateQuantity(id, item.quantity + 1);
      this.refreshCart();
    }
  },

  // 减少商品数量
  decreaseQuantity(e) {
    const { id } = e.currentTarget.dataset;
    const item = this.data.cartItems.find((i) => i.id === id);
    if (item && item.quantity > 1) {
      app.cart.updateQuantity(id, item.quantity - 1);
      this.refreshCart();
    } else if (item && item.quantity === 1) {
      wx.showModal({
        title: '提示',
        content: '确定删除该商品吗？',
        success: (res) => {
          if (res.confirm) {
            app.cart.removeItem(id);
            this.refreshCart();
          }
        },
      });
    }
  },

  // 切换商品选中状态
  toggleItemSelect(e) {
    const { id } = e.currentTarget.dataset;
    app.cart.toggleSelect(id);
    this.refreshCart();
  },

  // 全选/取消全选
  toggleSelectAll() {
    const newSelected = !this.data.isAllSelected;
    app.cart.toggleSelectAll(newSelected);
    this.refreshCart();
  },

  // 删除商品
  deleteItem(e) {
    const { id } = e.currentTarget.dataset;
    wx.showModal({
      title: '提示',
      content: '确定删除该商品吗？',
      success: (res) => {
        if (res.confirm) {
          app.cart.removeItem(id);
          this.refreshCart();
        }
      },
    });
  },

  // 去结算
  goCheckout() {
    const selectedItems = app.cart.getSelectedItems();
    if (selectedItems.length === 0) {
      wx.showToast({
        title: '请选择商品',
        icon: 'none',
      });
      return;
    }
    wx.showToast({
      title: '结算功能开发中',
      icon: 'none',
    });
  },

  // 添加推荐商品到购物车
  addToCart(e) {
    const { item } = e.currentTarget.dataset;
    app.cart.addItem(item);
    this.refreshCart();
    wx.showToast({
      title: '已加入购物车',
      icon: 'success',
    });
  },
});
