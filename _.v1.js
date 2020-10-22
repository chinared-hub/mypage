// baidu Statistics
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?28777ee2349607b7c36b2cc4c5376265";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

// https://segmentfault.com/a/1190000016574288
document.ready = function (callback) {
  ///兼容FF,Google
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function () {
      document.removeEventListener('DOMContentLoaded', arguments.callee, false);
      callback();
    }, false)
  }
  //兼容IE
  else if (document.attachEvent) {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState == "complete") {
        document.detachEvent("onreadystatechange", arguments.callee);
        callback();
      }
    })
  } else if (document.lastChild == document.body) {
    callback();
  }
}

document.ready(function () {
  var viewMode = localStorage.getItem("viewMode")
  var defaultMode = 'light'
  var cls = ''
  if (!viewMode) {
    cls = `ki-${defaultMode}`
    localStorage.setItem("viewMode", defaultMode)
  } else {
    cls = `ki-${viewMode}`
    localStorage.setItem("viewMode", viewMode)
  }
  document.getElementsByTagName('body')[0].className = cls
});