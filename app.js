/*
 * @Description: file content
 * @Author: 朱晨光
 * @Date: 2024-07-16 23:22:48
 * @LastEditors: 朱晨光
 * @LastEditTime: 2024-07-17 00:40:38
 */
// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: () => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    });
  },
  globalData: {
    userInfo: null,
  },
});
