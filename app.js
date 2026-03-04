/*
 * @Description: app页
 * @Author: cg
 * @Date: 2024-07-16 23:22:48
 * @LastEditors: cg
 * @LastEditTime: 2025-06-18 11:20:30
 */
// app.js
App({
  promiseResult: null,
  onLaunch() {
    const that = this;
    this.promiseResult = (function () {
      return new Promise(function (resolve) {
        // 获取设备信息（platform）
        const deviceRes = wx.getDeviceInfo();
        const isAndroid = deviceRes.platform === 'android';
        const isDevtools = deviceRes.platform === 'devtools';
        // 获取窗口信息（windowWidth, safeArea）
        const windowInfo = wx.getWindowInfo();
        const { windowWidth, safeArea } = windowInfo;
        // 获取胶囊按钮位置信息
        const rect = wx.getMenuButtonBoundingClientRect();

        // 计算相关值
        const rectRight = windowWidth - rect.right;
        const contentMarginRight = windowWidth - rect.left;
        const marginTop = safeArea?.top || wx.getSystemInfoSync()?.statusBarHeight || 0;
        const rectWidth = rect.width;
        // 更新 globalData
        that.globalData = {
          contentMarginRight,
          rectRight,
          windowWidth,
          marginTop,
          rectWidth,
          isAndroid,
          isDevtools,
          normalContentHeight: `calc(100vh - 55px - env(safe-area-inset-bottom))`,
        };
        resolve();
      });
    })();
  },
  globalData: {
    avatarUrl: '',
    userName: '',
    // 胶囊右侧距离
    rectRight: 0,
    clsDef: '0',
    // 显示区域距离右侧
    contentMarginRight: 0,
    // 页面总宽度
    windowWidth: 0,
    // 胶囊宽度
    rectWidth: 0,
    // 距离头部高度
    marginTop: 0,
    // 设备信息
    isAndroid: false,
    isDevtools: false,
    normalContentHeight: 0,
  },
  // 购物车数据管理
  cart: {
    items: [],
    // 获取购物车列表
    getItems() {
      return this.items;
    },
    // 获取购物车商品数量
    getCount() {
      return this.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    // 获取购物车总价
    getTotalPrice() {
      return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    // 添加商品到购物车
    addItem(product) {
      const existItem = this.items.find((item) => item.id === product.id);
      if (existItem) {
        existItem.quantity += 1;
      } else {
        this.items.push({ ...product, quantity: 1, selected: true });
      }
    },
    // 删除商品
    removeItem(productId) {
      const index = this.items.findIndex((item) => item.id === productId);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },
    // 更新商品数量
    updateQuantity(productId, quantity) {
      const item = this.items.find((item) => item.id === productId);
      if (item) {
        if (quantity <= 0) {
          this.removeItem(productId);
        } else {
          item.quantity = quantity;
        }
      }
    },
    // 切换商品选中状态
    toggleSelect(productId) {
      const item = this.items.find((item) => item.id === productId);
      if (item) {
        item.selected = !item.selected;
      }
    },
    // 全选/取消全选
    toggleSelectAll(selected) {
      this.items.forEach((item) => {
        item.selected = selected;
      });
    },
    // 获取选中商品
    getSelectedItems() {
      return this.items.filter((item) => item.selected);
    },
    // 清空购物车
    clearCart() {
      this.items = [];
    },
  },
});
