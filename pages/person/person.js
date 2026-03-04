/*
 * @Description: file content
 * @Author: cg
 * @Date: 2024-07-16 23:22:48
 * @LastEditors: cg
 * @LastEditTime: 2024-07-17 00:40:49
 */
import { formatTime } from '../../utils/index';
const app = getApp();

Page({
  data: {
    clsDef: '',
    userName: '',
    avatarUrl: '',
    set1: false,
    set2: false,
    set3: false,
    set4: false,
    set5: false,
  },
  toService(e) {
    console.log('触发跳转搜索页事件！', e.detail);
    wx.navigateTo({
      url: '/pages/service/service',
    });
  },
  getUserInfo() {
    wx.showLoading({
      title: '登陆中',
    });
    const that = this;
    setTimeout(() => {
      app.globalData.userName = '微信用户';
      that.setData({
        userName: '微信用户',
      });
      wx.hideLoading();
    }, 700);
    // wx.getUserProfile({
    //   desc: '用于完善会员资料', // 必填，声明获取用户信息的用途
    //   success(res) {
    //     console.log('用户信息:', res.userInfo);
    //     that.setData({
    //       userName: res.userInfo.nickName,
    //       avatarUrl: res.userInfo.avatarUrl
    //     })
    //     app.globalData.userName = res.userInfo.nickName
    //     app.globalData.avatarUrl = res.userInfo.avatarUrl
    //     wx.hideLoading()
    //   },
    //   fail(err) {
    //     console.error('获取用户信息失败:', err);
    //     wx.hideLoading()
    //   }
    // });
  },
  set1() {
    if (this.data.set1) {
      wx.showToast({
        title: '已设置!', // 提示内容
        icon: 'none', // 图标类型：'success' | 'loading' | 'none'
        duration: 2000, // 持续时间（毫秒）
      });
    } else {
      wx.showLoading({
        title: '设置中...',
      });
      setTimeout(() => {
        this.setData({
          set1: true,
        });
        wx.hideLoading();
        wx.showToast({
          title: '设置成功!', // 提示内容
          icon: 'success', // 图标类型：'success' | 'loading' | 'none'
          duration: 2000, // 持续时间（毫秒）
        });
      }, 700);
    }
  },
  set2() {
    if (this.data.set2) {
      wx.showToast({
        title: '已设置!', // 提示内容
        icon: 'none', // 图标类型：'success' | 'loading' | 'none'
        duration: 2000, // 持续时间（毫秒）
      });
    } else {
      wx.showLoading({
        title: '设置中...',
      });
      setTimeout(() => {
        this.setData({
          set2: true,
        });
        wx.hideLoading();
        wx.showToast({
          title: '设置成功!', // 提示内容
          icon: 'success', // 图标类型：'success' | 'loading' | 'none'
          duration: 2000, // 持续时间（毫秒）
        });
      }, 700);
    }
  },
  set3() {
    if (this.data.set3) {
      wx.showToast({
        title: '已完善!', // 提示内容
        icon: 'none', // 图标类型：'success' | 'loading' | 'none'
        duration: 2000, // 持续时间（毫秒）
      });
    } else {
      wx.showLoading({
        title: '完善中...',
      });
      setTimeout(() => {
        this.setData({
          set3: true,
        });
        wx.hideLoading();
        wx.showToast({
          title: '完善成功!', // 提示内容
          icon: 'success', // 图标类型：'success' | 'loading' | 'none'
          duration: 2000, // 持续时间（毫秒）
        });
      }, 700);
    }
  },
  set4() {
    if (this.data.set4) {
      wx.showToast({
        title: '已收藏!', // 提示内容
        icon: 'none', // 图标类型：'success' | 'loading' | 'none'
        duration: 2000, // 持续时间（毫秒）
      });
    } else {
      wx.showLoading({
        title: '收藏中...',
      });
      setTimeout(() => {
        this.setData({
          set4: true,
        });
        wx.hideLoading();
        wx.showToast({
          title: '收藏成功!', // 提示内容
          icon: 'success', // 图标类型：'success' | 'loading' | 'none'
          duration: 2000, // 持续时间（毫秒）
        });
      }, 700);
    }
  },
  set5() {
    if (this.data.set5) {
      wx.showToast({
        title: '已关注!', // 提示内容
        icon: 'none', // 图标类型：'success' | 'loading' | 'none'
        duration: 2000, // 持续时间（毫秒）
      });
    } else {
      wx.showLoading({
        title: '关注中...',
      });
      setTimeout(() => {
        this.setData({
          set5: true,
        });
        wx.hideLoading();
        wx.showToast({
          title: '关注成功!', // 提示内容
          icon: 'success', // 图标类型：'success' | 'loading' | 'none'
          duration: 2000, // 持续时间（毫秒）
        });
      }, 700);
    }
  },
  redBag() {
    wx.showToast({
      title: '红包为空!', // 提示内容
      icon: 'none', // 图标类型：'success' | 'loading' | 'none'
      duration: 2000, // 持续时间（毫秒）
    });
  },
  onLoad() {
    this.setData({
      clsDef: app.globalData.clsDef,
      ggsf: Date.now(),
      userName: app.globalData.userName,
    });
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 4,
        inIndexPage: false,
      });
    }
  },
  onUnload() {},
});
