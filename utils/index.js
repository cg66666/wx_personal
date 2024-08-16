/*
 * @Description: file content
 * @Author: 朱晨光
 * @Date: 2024-07-16 23:22:48
 * @LastEditors: 朱晨光
 * @LastEditTime: 2024-07-17 00:41:11
 */

// 格式化时间
export const formatTime = (time) => {
  const Day = String(Math.floor(time / 60 / 60 / 1000 / 24)).padStart(2, '0');
  const Hour = String(Math.floor((time % (1000 * 60 * 60 * 24)) / 60 / 60 / 1000)).padStart(2, '0');
  const Minute = String(Math.floor((time % (1000 * 60 * 60)) / 60 / 1000)).padStart(2, '0');
  const Second = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');

  return {
    Day,
    Hour,
    Minute,
    Second,
  };
};

/**
 * @name 节流函数
 * @param fn 需要进行防抖处理的函数
 * @param delay 延迟时间
 * @returns
 */
export function debounce(fn, delay) {
  let timer;
  return function (...args) {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
/**
 * @name 防抖函数
 * @param fn 需要进行防抖处理的函数
 * @param delay 延迟时间
 * @returns
 */
export function throttle(fn, delay) {
  let timer;
  return function (...args) {
    if (timer !== null) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}
