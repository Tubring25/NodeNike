/**
 * forbid browsers refreshing
 */
const tools = {
  forbidBrowsersRefreshing() {
    document.onkeydown = function() {
      var evt = window.event;
      var code = evt.keyCode || evt.which;
      //屏蔽F1---F12
      if (code > 111 && code < 124) {
        if (evt.preventDefault) {
          evt.preventDefault();
        } else {
          evt.keyCode = 0;
          evt.returnValue = false;
        }
      }
    };
    //禁止鼠标右键菜单
    document.oncontextmenu = function() {
      return false;
    };
    //阻止后退的所有动作，包括 键盘、鼠标手势等产生的后退动作。
    history.pushState(null, null, window.location.href);
    window.addEventListener("popstate", function() {
      history.pushState(null, null, window.location.href);
    });
  }
}

export default tools