/*
 * @Description: app页
 * @Author: 朱晨光
 * @Date: 2024-07-16 23:22:48
 * @LastEditors: 朱晨光
 * @LastEditTime: 2024-07-17 00:40:38
 */
// app.js
App({
  onLaunch() {
    const rect = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: (res) => {
        // console.log('rect', rect);
        // console.log('res', res);
        const isAndroid = res.platform === 'android';
        const isDevtools = res.platform === 'devtools';
        const rectRight = res.windowWidth - rect.right;
        const contentMarginRight = res.windowWidth - rect.left;
        const { windowWidth } = res;
        const marginTop = res.safeArea.top;
        const rectWidth = rect.left;
        // const rectHeight = rect.height;
        this.globalData = {
          contentMarginRight,
          rectRight,
          windowWidth,
          marginTop,
          rectWidth,
          isAndroid,
          isDevtools,
          // rectHeight,
        };
      },
    });
    // this.getTabBar()
  },
  globalData: {
    // 胶囊右侧距离
    rectRight: 0,
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
  },
});
