//检测登录状态（初始化的时候检查）
mui.plusReady(function () {
    var login=databasepage.getItem("DKBD_USER")
	if(login==null){
		databasepage.openWin2("login.html",'login',{preload: true})
	}
});
