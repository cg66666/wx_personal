/*
 * @Description: file content
 * @Author: 朱晨光
 * @Date: 2024-08-09 15:48:32
 * @LastEditors: 朱晨光
 * @LastEditTime: 2024-08-09 15:50:10
 */
// pages/search/search.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '',
    showClearBtn: false,
  },
  // 清空输入框
  clearInputVal() {
    this.setData({
      inputVal: '',
      showClearBtn: false,
    });
  },
  // 输入框改变
  inputHandler(e) {
    // 获取输入框的值
    var { value } = e.detail;
    console.log(value); // 在控制台输出当前输入框的值
    // 可以在这里对value进行进一步的处理或数据绑定
    let showClearBtn = false;
    if (value) {
      showClearBtn = true;
    } else {
      showClearBtn = false;
    }
    this.setData({
      inputVal: value,
      showClearBtn,
    });
  },
});
