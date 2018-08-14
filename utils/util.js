const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}


const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const formatTime2 = (fmt, time) => {
  var o = {
    "M+": time.getMonth() + 1, //月份 
    "d+": time.getDate(), //日 
    "h+": time.getHours(), //小时 
    "m+": time.getMinutes(), //分 
    "s+": time.getSeconds(), //秒 
    "q+": Math.floor((time.getMonth() + 3) / 3), //季度 
    "S": time.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}

module.exports = {
  formatTime: formatTime,
  formatTime2: formatTime2
}
