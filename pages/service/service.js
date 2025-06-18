// pages/service/service.js
const app = getApp();
Page({
  data: {
    outlineHeight: 'height: 100vh',
    showEmoji: false,
    showAdd: false,
    scrollId: '',
    inputVal: '',
    showSendBtn: false,
    emojiList: [
      '😀',
      '😄',
      '😁',
      '😆',
      '😅',
      '🤣',
      '😂',
      '🙂',
      '🙃',
      '🫠',
      '😉',
      '😊',
      '😦',
      '😫',
      '😩',
      '🥹',
      '🥺',
      '😓',
      '😞',
      '😳',
      '😲',
      '😣',
      '😖',
      '😯',
      '😮',
      '😱',
      '😭',
      '🙁',
    ],
    chatHistory: [
      {
        type: 'right',
        message: '这是客户内容……',
      },
      {
        type: 'left',
        message: '这是客服内容……',
      },
    ],
  },
  // 分两次setData，第二次能更有效进行滚动底部
  toShowEmoji() {
    this.setData({
      showEmoji: !this.data.showEmoji,
      showAdd: false,
    });
    wx.nextTick(() => {
      this.setData({
        scrollId: 'bottomContent',
      });
    });
  },
  toShowAdd() {
    this.setData({
      showAdd: !this.data.showAdd,
      showEmoji: false,
    });
    wx.nextTick(() => {
      this.setData({
        scrollId: 'bottomContent',
      });
    });
  },
  // 输入框改变
  inputHandler(e) {
    const { value } = e.detail;
    this.setData({
      inputVal: value,
      showSendBtn: !!value,
    });
  },
  // 动态修改页面高度
  inputFocus(e) {
    this.setData({
      outlineHeight: `height: calc(100vh - ${e.detail.height}px)`,
      showAdd: false,
      showEmoji: false,
    });
  },
  inputBlur() {
    this.setData({
      outlineHeight: `height: 100vh`,
    });
  },
  // 添加表情
  addEmoji(e) {
    this.setData({
      inputVal: this.data.inputVal + e.currentTarget.dataset.val,
      showEmoji: false,
      showSendBtn: true,
    });
  },
  // 发送
  async sendMessage() {
    const { chatHistory, inputVal } = this.data;
    chatHistory.push({
      type: 'right',
      message: inputVal,
    });
    this.setData({
      chatHistory,
      inputVal: '',
      showSendBtn: false,
    });
    wx.nextTick(() => {
      this.setData({
        scrollId: 'bottomContent',
      });
    });

    await this.addLeft(
      '您好，“CGCG神会员”用户可以享受优惠购买"神券省钱包"、签到领神券、免费膨胀神券等特权。"神券省钱包"提供不同红包张数的规格供选择购买，买后立即到账，有效期为31天。',
    );
    await this.addLeft('点击下方【神会员】按钮，体验全新升级的会员体系。');
    await this.addLeft('您好，CGCG神会员是不会自动续费的，到期后您可以根据需求再次购买，还请您放心~');
    await this.addLeft('温馨提示：点击下方【神会员券详情)按钮，查看您当前的仍有未使用0张神券哦。');
  },
  // 模拟延时回复功能
  async addLeft(val) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const { chatHistory } = this.data;
        chatHistory.push({
          type: 'left',
          message: val,
        });
        this.setData({
          chatHistory,
        });
        wx.nextTick(() => {
          this.setData({
            scrollId: 'bottomContent',
          });
        });
        resolve();
      }, 900);
    });
  },
  back() {
    wx.navigateBack({
      delta: 1,
    });
  },
  onLoad() {
    this.setData({
      clsDef: app.globalData.clsDef,
      ggsf: Date.now(),
    });
  },
});
