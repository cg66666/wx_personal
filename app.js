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
});
