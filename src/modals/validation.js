function validation() {
  this.isEmpty = function (value, spanID, mess) {
    if (value === "") {
      getEle(spanID).style.display = "block";
      getEle(spanID).innerHTML = mess;
      return false;
    }
    getEle("notiInput").style.display = "none";
    return true;
  }
  this.isExist = function (value, spanID, mess, arr) {
    var exist = false;
    for (var i = 0; i < arr.length; i++) {
      var task = arr[i];
      if (task.taskName.toLowerCase() === value.toLowerCase()) {
        exist = true;
        break;
      }
    }
    if (exist) {
      getEle(spanID).style.display = "block";
      getEle(spanID).innerHTML = mess;
      return false;
    }
    getEle("notiInput").style.display = "none";
    return true;
  };
}
