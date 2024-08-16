/*
 * @Description: file content
 * @Author: 朱晨光
 * @Date: 2024-07-16 23:22:48
 * @LastEditors: 朱晨光
 * @LastEditTime: 2024-07-17 00:40:49
 */
import { formatTime } from '../../utils/index';
const app = getApp();

Page({
  data: {},
  toService(e) {
    console.log('触发跳转搜索页事件！', e.detail);
    wx.navigateTo({
      url: '/pages/service/service',
    });
  },
  onLoad() {},
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3,
        inIndexPage: false,
      });
    }
  },
  onUnload() {},
});
