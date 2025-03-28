//禁止F12键盘事件
document.onkeydown = function () {
  if (window.event && window.event.keyCode == 123) {
    event.keyCode = 0;
    event.returnValue = false;
  }
};
//禁止右键单击事件
document.oncontextmenu = function () {
  event.returnValue = false;
};
// 禁止打开控制台

window.console.log = function () {
  return false;
};
window.console.info = function () {
  return false;
};
window.console.debug = function () {
  return false;
};
window.console.warn = function () {
  return false;
};
window.console.error = function () {
  return false;
};
window.console.time = function () {
  return false;
};
window.console.timeEnd = function () {
  return false;
};
window.console.trace = function () {
  return false;
};
window.console.dir = function () {
  return false;
};
window.console.dirxml = function () {
  return false;
};
window.console.group = function () {
  return false;
};
window.console.groupEnd = function () {
  return false;
};
