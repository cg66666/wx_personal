/*
 * @Description: file content
 * @Author: 朱晨光
 * @Date: 2024-07-16 23:22:48
 * @LastEditors: 朱晨光
 * @LastEditTime: 2024-07-17 00:41:11
 */
const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`;
};

module.exports = {
  formatTime,
};
