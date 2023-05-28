function loadMySelf() {
    myself = document.getElementById("myself");
    if (document.cookie == "" || document.cookie == 0 || !Boolean(document.cookie)) {
        myself.innerHTML = "<a href=\"./login\">请先登录</a>";
    } else {
        myself.innerHTML = "<a href=\"./my\">我的</a>";
    }
}
