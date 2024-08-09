// components/lazy-image/lazy-image.js
Component({
  properties: {
    src: String,
  },
  data: {
    showImage: false,
    observer: null,
  },
  ready: function () {
    // 在组件准备完毕后，设置 imageSrc 为图片的 URL
    this.setData({
      imageSrc: this.properties.src,
    });
  },
  attached: function () {
    // 在组件附加到页面节点树时，监听组件的可视状态
    this.observer = wx.createIntersectionObserver(this, {
      observeAll: true,
    });
    this.observer.relativeToViewport({
      bottom: -100,
    });
    this.observer.observe('.image', (res) => {
      console.log('res', res);
      if (res.intersectionRatio > 0) {
        this.setData({
          showImage: true,
        });
      }
    });
  },
  detached: function () {
    // 在组件从页面节点树移除时，取消监听组件的可视状态
    this.observer.disconnect();
  },
});
