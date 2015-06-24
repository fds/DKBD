databasepage = {
    DB_Name: 'bkbd_local_db',
    DB_VERSION: '1.0',
    SELECT_CATEGORY:'select_category',//已选择的类键名
    ALL_CATEGORY: 'ALL_CATEGORY',//全部类别键名
    timeout: 10000, //ajax请求的超时时间
    hosturl: 'http://app.randao.com/',
    shares: null,
    //登录
    loginurl: function () {
        return this.hosturl + 'user/token';
    },
    //刷新token
    refresh_token: function () {
        var that = this;
        var DKBD_USER = that.getItem("DKBD_USER");
        var url = that.hosturl + 'user/refreshToken?refreshToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id;
        this.getData(url, function (data) {
            if (data.data != null) {
                that.setItem("DKBD_USER", data.data);
            }
        })
    },
    //注册
    registerurl: function () {
        return this.hosturl + 'user/regsiter';
    },
    //获取审核帖子
    geturl: function () {
        return this.hosturl + 'article/get?pageSize=20';
    },
    //获取待审核帖子
    getnoverifyurl_token: function () {
        var DKBD_USER = this.getItem("DKBD_USER");
        return this.hosturl + 'article/getnoverify?accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id;
    },
    //鲜花鸡蛋
    setcounturl_token: function () {
        var DKBD_USER = this.getItem("DKBD_USER");
        return this.hosturl + 'article/setcount?accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id;
    },
    //收藏帖子
    setcollectarticleurl_token: function () {
        var DKBD_USER = this.getItem("DKBD_USER");
        return this.hosturl + 'article/collectarticle?accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id
    },
    //获取我收藏的帖子
    getcollectarticleurl_token: function () {
        var DKBD_USER = this.getItem("DKBD_USER");
        return this.hosturl + 'article/getcollectarticle?userKeyId=' + DKBD_USER.user_key_id + '&pageSize=20&accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id;
    },
    //帖子详细
    getdetailurl: function () {
        return this.hosturl + 'article/GetDetail';
    },
    //评论列表（详细直接展示）
    getcommentlisturl: function () {
        return this.hosturl + 'article/GetCommentList?pageSize=20';
    },
    //发布评论
    publishcommenturl_token: function () {
        var DKBD_USER = databasepage.getItem("DKBD_USER");
        return this.hosturl + 'article/publishcomment?accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id;
    },
    //发布帖子（文字，图片，视频都一样）
    publishurl_token: function () {
        var DKBD_USER = this.getItem("DKBD_USER");
        return this.hosturl + 'article/publish?accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id
    },
    //获取用户信息
    getuserurl_token: function () {
        var DKBD_USER = this.getItem("DKBD_USER");
        return this.hosturl + 'user/get?accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id
    },
    //获取当前登录用户信息
    getcurrurl_token: function () {
        var DKBD_USER = this.getItem("DKBD_USER");
        return this.hosturl + 'user/getcurr?accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id
    },
    //关注其他作者
    addattentionurl_token: function () {
        var DKBD_USER = this.getItem("DKBD_USER");
        return this.hosturl + 'article/addattention?accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id
    },
    //获取关注的作者列表
    getattentionurl_token: function () {
        var DKBD_USER = this.getItem("DKBD_USER");
        return this.hosturl + 'article/getattention?accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id
    },
    //获取我的帖子
    getmyurl_token: function () {
        var DKBD_USER = this.getItem("DKBD_USER");
        return this.hosturl + 'article/getmy?accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id
    },
    //上传图片（暂时不启用，上传图片改为base64）
    uploadFaceImg_token: function () {
        var DKBD_USER = this.getItem("DKBD_USER");
        return this.hosturl + 'user/uploadfaceimg?accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id
    },
    //获取分类
    getCategorys:function(){
        return this.hosturl + 'article/getcategorys';
    },
    //获取用户收藏帖子数
    getCollectArticleCount_token:function(){
    	var DKBD_USER = this.getItem("DKBD_USER");
    	return this.hosturl +'article/getcollectarticlecount?accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id;
    },
    //删除用户收藏
    delCollect_token: function () {
        var DKBD_USER = this.getItem("DKBD_USER");
        return this.hosturl +'article/deletecollect?accessToken=' + DKBD_USER.access_token + '&clientID=' + DKBD_USER.client_id;
    },
    getTransferTime: function () {
        var that = this;
        if (that._getTransferTime) return that._getTransferTime;
        if (that.isAndroid()) that._getTransferTime = 100
        else that._getTransferTime = 300;
        return that._getTransferTime
    },
    is2GOr3G: function () {
        if (!plus.networkinfo) {
            //alert("基座版本不对");
            return true;
        }
        var netinfo = plus.networkinfo,
			type = netinfo.getCurrentType();
        return type == netinfo.CONNECTION_CELL2G || type == netinfo.CONNECTION_CELL3G || type == netinfo.CONNECTION_CELL4G;
    },
    is2G: function () {
        if (!plus.networkinfo) {
            //alert("基座版本不对");
            return true;
        }
        var type = plus.networkinfo.getCurrentType();
        return type == plus.networkinfo.CONNECTION_CELL2G;
    },
    hasNetwork: function () {
        if (!plus.networkinfo) {
            //alert("基座版本不对");
            return true;
        };

        var netinfo = plus.networkinfo,
			type = netinfo.getCurrentType();
        return type == netinfo.CONNECTION_ETHERNET || type == netinfo.CONNECTION_WIFI || type == netinfo.CONNECTION_CELL2G || type == netinfo.CONNECTION_CELL3G || type == netinfo.CONNECTION_CELL4G;
    },
    customerFontSize: {
        "大": "1.5em",
        "中": "1.3em",
        "小": "1.15em"
    },
    getFontSize: function () {
        var fontsize = this.getItem(this.cacheKey.fontSize) || { text: "中", value: "1.3em" };
        return fontsize;
    },
    setFontSize: function (value) {
        this.setItem(this.cacheKey.fontSize, value);
    },
    //缓存在线数据
    loadArticleNetWork: function (list, categoryid) {
        var that = this;
        that.db.transaction(function (tx) {
        	//每个分类缓存一页20条数据
			tx.executeSql('delete from article_list where categoryid = ?', [categoryid], function (td, cresult) {
	            var len = list.length;
	            for (var index = 0; index < len; index++) {
	                that._saveNewToDb(td, list[index],categoryid,index,function (result) { });
	            }
	        });
        });
    },
    _saveNewToDb: function (transition, data,categoryid,sortindex, onSuccess) {
//			          alert("categoryid:"+categoryid)
        transition.executeSql('select count(article_id) as num from article_list where article_id = ?', [data.article_id], function (tr, result) {
//                      alert(result.rows.item(0).num)
            if (result.rows.item(0).num != 0) {//已存在记录，更新
                transition.executeSql('update article_list set article_content=?,flower_count=?,egg_count=?,collect_count=?,warn_count=?,comment_count=?,categoryid=? where article_id = ?', 
                [data.article_content, data.flower_count, data.egg_count, data.collect_count, 0, data.comment_count, categoryid,data.article_id], function (tr, result) {
                    onSuccess(result);
                },
		        function (tx, error) {
//		            		            alert('更新失败:' + error.message);
		        });
            } else {
                transition.executeSql('INSERT into article_list values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [data.article_id, data.category_id, data.face_img, data.author, data.article_content, data.flower_count, data.egg_count, data.collect_count, 0, data.comment_count, data.post_time, data.update_time, categoryid, sortindex],
                function (tx, result) {
//                  onSuccess(result);
                },
		        function (tx, error) {
//		            		            alert('插入失败:' + error.message);
		        });
            }
        });
    },
     _delToDb: function (transition, categoryid, onSuccess) {
        transition.executeSql('delete from article_list where categoryid = ?', [categoryid], function (tr, cresult) {
			onSuccess(tr, result);
        });
    },
    //更新article_content
    _updateNewToDb: function (data, onSuccess) {
        this.db.transaction(function (tx) {
            tx.executeSql('select count(id) as num from article_list where article_id = ?', [data.article_id], function (tr, result) {
                if (result.rows.item(0).num != 0) {
                    tx.executeSql('update article_list set article_content=? where article_id = ?', [data.article_content, data.article_id], function (tr, result) {
                        onSuccess(result);
                    });
                }
                else onSuccess(result)
            });
        });
    },
    /**
	从本地数据库加载数据
	*/
    loadCategoryByPageDB: function (category_id, pagenum, onSuccess, onError) {
        this.db.readTransaction(function (tr) {
            var pagestart = 20 * (pagenum - 1),
				pageEnd = pagestart + 20,
				sql;
            sql = "select * from article_list where categoryid = " + category_id + " order by sortindex desc";
            tr.executeSql(sql, [], function (tx, rs) {
                var list = [],
					rows = rs.rows,
					len = rows.length;
                if (len == 0) {
                    onSuccess();
                    return;
                }
                for (var i = 0; i < len; i++) {
                    var item = rows.item(i);
                    list.push({
                        article_id: item.article_id,
                        category_id: item.category_id,
                        face_img: item.face_img,
                        author: item.author,
                        article_content: item.article_content,
                        flower_count: item.flower_count,
                        egg_count: item.egg_count,
                        collect_count: item.collect_count,
                        warn_count: item.warn_count,
                        comment_count: item.comment_count,
                    });
                }
                onSuccess(list);
            }, function (tx, error) {
                //	            alert('查询失败:' + error.message);
            });
        });
    },
    //单个对象
    loadSingleByPageDB: function (article_id, category_id, onSuccess) {
        this.db.readTransaction(function (tr) {
            sql = "select * from article_list where article_id = " + article_id + " and category_id = " + category_id;
            tr.executeSql(sql, [], function (tx, rs) {
                var list = [],
					rows = rs.rows,
					len = rows.length;
                if (len == 0) {
                    onSuccess();
                    return;
                }
                for (var i = 0; i < len; i++) {
                    var item = rows.item(0);
                    list.push({
                        article_id: item.article_id,
                        category_id: item.category_id,
                        face_img: item.face_img,
                        author: item.author,
                        article_content: item.article_content,
                        flower_count: item.flower_count,
                        egg_count: item.egg_count,
                        collect_count: item.collect_count,
                        warn_count: item.warn_count,
                        comment_count: item.comment_count,
                    });
                }
                onSuccess(list);
            }, function (tx, error) {
                //	            alert('查询失败:' + error.message);
            });
        });
    },
    init: function (callback) {
        var that = this;
        that.db = openDatabase(that.DB_Name + '_' + that.DB_VERSION, '', 'bkbd offline database', 6 * 1024 * 1024);
        that.db.transaction(function (tx) {
            tx.executeSql('create table if not exists article_list (article_id num PRIMARY KEY,category_id num,face_img text,author text,article_content text, flower_count num, egg_count num, collect_count num, warn_count num, comment_count num,post_time datetime,update_time datetime,categoryid num,sortindex num)', []);
            //tx.executeSql('create table if not exists comment_list (comment_id num PRIMARY KEY,article_id num, flower_count num, post_time datetime , egg_count num, warn_count num, nick_name text, face_img text, comment_content text)', []);
            //tx.executeSql('create table if not exists fav_article_list (collect_id num PRIMARY KEY,article_id num,category_id num, title text, author text , collect_time datetime)', []);
        });
        if (callback) callback();
    },
    insertArticle: function (data, onSuccess) {
        this.db.transaction(function (tx) {
            tx.executeSql('select count(article_id) as num from article_list where article_id = ?', [data.article_id], function (tr, result) {
                if (result.rows.item(0).num == 0) {
                    tx.executeSql('INSERT into article_list values(?,?,?,?,?,?,?,?,?,?,?,?)', [data.article_id, data.category_id, data.face_img, data.author, data.article_content, data.flower_count, data.egg_count, data.collect_count, data.warn_count, data.comment_count, data.post_time, data.update_time], function (tx, result) {
                        if (onSuccess) onSuccess(result)
                    });
                }
                else onSuccess(result)
            });
        });
    },
    insertComment: function (data, onSuccess) {
        this.db.transaction(function (tx) {
            tx.executeSql('select count(comment_id) as num from comment_list where comment_id = ?', [data.comment_id], function (tr, result) {
                if (result.rows.item(0).num == 0) {
                    tx.executeSql('INSERT into comment_list values(?,?,?,?,?,?,?,?,?)', [data.comment_id, data.article_id, data.flower_count, data.post_time, data.egg_count, data.warn_count, data.nick_name, data.face_img, data.comment_content], function (tx, result) {
                        if (onSuccess) onSuccess(result)
                    });
                }
                else onSuccess(result)
            });
        });
    },
    insertFav: function (data, onSuccess) {
        this.db.transaction(function (tx) {
            tx.executeSql('select count(collect_id) as num from fav_article_list where collect_id = ?', [data.collect_id], function (tr, result) {
                if (result.rows.item(0).num == 0) {
                    tx.executeSql('INSERT into fav_article_list values(?,?,?,?,?,?)', [data.collect_id, data.article_id, data.category_id, data.title, data.author, data.collect_time], function (tx, result) {
                        if (onSuccess) onSuccess(result)
                    });
                }
                else onSuccess(result)
            });
        });
    },
    dorpTable: function (tb_name, onSuccess) {
        this.db.transaction(function (tx) {
            tx.executeSql('drop table '+tb_name, [], function (tr, result) {
                onSuccess(result)
            });
        });
    },
    on: function (type, el, bubble) {
        try {
            el.addEventListener(type, this, !!bubble);
        }
        catch (e) {
            csdn.showErr(e, 'on')
        }
    },
    off: function (type, el, bubble) {
        try {
            el.removeEventListener(type, this, !!bubble);
        }
        catch (e) {
            csdn.showErr(e, 'off')
        }
    },
    isIOS: function () {
        return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i);
    },
    isAndroid: function (t) {
        return navigator.userAgent.match(/Android/i);
    },
    androidBack: function (callback) {
        if (this.isAndroid()) {
            plus.key.addEventListener('backbutton', callback);
        }
    },
    androidMenu: function (callback) {
        if (this.isAndroid()) {
            plus.key.addEventListener('menubutton', callback);
        }
    },
    /// <summary>
    ///保存文件
    /// {path:文件路径, data:要保存的文件内容, success:成功回调, error：失败回调}
    /// </summary>
    saveFile: function (options) {
        var that = this;
        that.fileSystemAPI.root.getFile(options.path, {
            create: true
        }, function (fileEntry) {
            //保存到临时目录
            fileEntry.createWriter(function (fileWirte) {
                fileWirte.write(JSON.stringify(options.data));
                //这个时候不存文件
                if (options.success)
                    options.success();
            }, null);
        }, function (err) {
            //alert("err:" + err.code)
            if (options.error)
                options.error(err);
        });
    },
    saveArticle: function (data, articleid) {
        var that = this, path = "all_list/" + (articleid || data.id) + ".json";
        if (that.fileSystemAPI)
            that.saveFile({
                path: path,
                data: data
            });
        else
            plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function (fs) {
                that.fileSystemAPI = fs;
                that.saveFile({
                    path: path,
                    data: data
                });
            });
    },
    /// <summary>
    ///保存文件
    /// {srcImg:源文件路径, dstImg:要保存的文件路径, success:成功回调, error：失败回调}
    /// </summary>
    downLoadFile: function (options) {
        var that = this;
        if (!that.fileSystemAPI)
            plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function (fs) {
                that.fileSystemAPI = fs;
                that._downLoadFile(options);
            });
        else
            that._downLoadFile(options);
    },
    _downLoadFile: function (options) {
        var that = this, path = options.folderPath + options.dstFile, index = path.indexOf('?');
        if (index > 0)
            path = path.substring(0, index);
        that.fileSystemAPI.root.getFile(path, {
            create: false
        }, function (fileEntry) {
            if (options.success)
                options.success(options, true, fileEntry);
        }, function (err) {
            if (options.onNotFund) {
                options.onNotFund(options);
                return;
            }
            plus.downloader.createDownload(options.srcFile, {
                filename: options.downloadFolerPath,
                timeout: 120
            }, function (d, status) {
                if (status == 200) {
                    d.abort();
                    if (options.success)
                        options.success(options, false, d);
                } else {
                    if (options.error)
                        options.error(options, status, d);
                }
            }).start();
        });
    },
    back: function () {
        var currentPage = plus.webview.currentWebview();
        currentPage.close('slide-out-right', this.getTransferTime());
    },
    updateDB: function () {
        db.transaction(function (tx) {
            tx.executeSql('update article_list set Androidimg = img, readflag = 0', []);
        });
    },
    //设置本地缓存
    setItem: function (key, value) {
        plus.storage.setItem(key, JSON.stringify(value));
    },
    //获取本地缓存
    getItem: function (key, noConverted) {
        try {
            var d = plus.storage.getItem(key);
            if (!d || noConverted) return d;
            return JSON.parse(d);
        }
        catch (ex) {
            alert(key + ':' + ex.message);

        }
        //return JSON.parse(that.getItem(key))
    },
    //移除本地缓存
    remove: function (key) {
        plus.storage.removeItem(key);
    },
    //弹出提示
    alert: function (message, delay, position) {
        position = position || 'bottom';
        delay = delay || 2;
        if (this.isAndroid()) {
            plus.nativeUI.toast(message, { duration: delay, verticalAlign: position });
            return;
        }
        var that = this,
			doc = document
        dalert = doc.getElementById('_dialog_alert');
        if (!dalert) {
            dalert = doc.createElement('div');
            dalert.className = 'notification';
            dalert.id = '_dialog_alert';
            dalert.innerHTML = "<div class='window confirm growl show'><strong class='text bold' id='_dialog_message'></strong><small></small></div>";
            doc.body.appendChild(dalert);
        }
        delay = delay * 1000;
        if (that._csdn_timer) {
            clearTimeout(that._csdn_timer);
            //$('#_dialog_alert').remove();
        }
        doc.getElementById("_dialog_message").innerHTML = message;
        if (position == 'bottom') {
            dalert.style.top = 'auto'
        } else if (position == 'top') {
            dalert.style.top = '10px'
        } else {//center
            dalert.style.top = '50%'
        }
        dalert.style.display = "block";
        dalert = null;
        that._csdn_timer = setTimeout(function () {
            //$('#_dialog_alert').hide();
            doc.getElementById('_dialog_alert').style.display = 'none';
        }, delay);
    },
    //关闭等待
    closeSplash: function () {
        if (this.hasClosesplash) return;
        this.hasClosesplash = true;
        plus.navigator.closeSplashscreen();
    },
    //打开窗口
    openWin: function (vname, c, extras) {
        extras = extras || { preate: true }
        var d = plus.webview.getWebviewById(vname);
        if (d == null) {
            d = plus.webview.create(c, vname, { zindex: 9999, popGesture: 'hide' }, extras);
        }
        d.show("slide-in-right", 300);
    },
    //打开窗口
    openWin2: function (url, id, extras) {
        mui.openWindow({
            url: url,
            id: id,
            extras: extras
        });
    },
    //ajax方法
    getData: function (url, callback, type, postdata) {
    	var that = this;
        type = type || 'GET';
        postdata = postdata || '';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = eval("(" + xhr.responseText + ")");
                callback(data);
            }
            else if(xhr.readyState == 4 && xhr.status == 0){ 
            	that.alert('网络不给力哦');
//				var refresh=mui('#pullrefresh');
//				alert(refresh)
//				if(refresh!=null&&refresh!=undefined){
//					alert(1)
//					refresh.down.contentnomore='网络异常';
//					refresh.up.contentnomore='网络异常';
//					refresh.pullRefresh().endPullupToRefresh(true);
//
//				}
     		}
        };
        xhr.timeout = 10000;
        xhr.ontimeout = function () {
//          mui('#pullrefresh').pullRefresh().refresh(true);
            that.alert('网络不给力哦');
        };
        xhr.open(type, url);
        xhr.send(postdata);
    },
    //检测登录状态
    checkLogin: function (call, pageurl) {
        var that = this;
        pageurl = pageurl || 'login.html';
        var login = that.getItem("DKBD_USER")
        if (login == null) {
            that.openWin2(pageurl, 'login', { preload: true })
            return;
        }
        else {
            call();
        }
    },
    /**
     * 更新分享服务
     */
    updateSerivces: function () {
        var that = this;
        plus.share.getServices(function (s) {
            that.shares = {};
            for (var i in s) {
                var t = s[i];
                that.shares[t.id] = t;
            }
        }, function (e) {
            that.alert("获取分享服务列表失败：" + e.message);
        });
    },
    /**
   * 分享操作
   * @param {String} id
   */
    shareAction: function (id,ex,sharetxt) {
        var s = null;
        var that = this;
        if(!id||!(s=that.shares[id])){
            that.alert("无效的分享服务！");
            return;
        }
        if ( s.authenticated ) {
//          that.alert("---已授权---");
            that.shareMessage(s, ex, sharetxt);
        } else {
//          that.alert("---未授权---");
            s.authorize( function(){
                that.shareMessage(s,ex,sharetxt);
            },function(e){
                that.alert("认证授权失败：" + e.code + " - " + e.message);
            });
        }
    },
    /**
   * 发送分享消息
   * @param {plus.share.ShareService} s
   */
    shareMessage: function (s, ex,shareid,sharetxt) {
        var that = this;
        var msg = { content: sharetxt||'蹲坑宝典分享', extra: { scene: ex } };
		var shareid=shareid.split('_');
        msg.href = 'http://m.randao.com/rd_'+shareid[1]+'/'+shareid[0]+'.html';
        msg.thumbs = ["_www/images/ipad/72_72.png"];
        msg.pictures = ["_www/images/ipad/72_72.png"];

        s.send(msg, function () {
            that.alert("分享到\"" + s.description + "\"成功！ ");
        }, function (e) {
            //that.alert("分享到\"" + s.description + "\"失败: " + e.code + " - " + e.message);
        });
    },
    /**
     * 解除所有分享服务的授权
     */
    cancelAuth: function () {
        var that = this;
        try {
            for (var i in that.shares) {
                var s = that.shares[i];
                if (s.authenticated) {
                    that.alert("取消\"" + s.description + "\"");
                }
                s.forbid();
            }
            // 取消授权后需要更新服务列表
            that.updateSerivces();
            that.alert("操作成功！");
        }
        catch (e) { that.alert(e); }
    },
    /*
    *获取类别
    */
    getCategoryList: function () {
        var checkInterval = 604800000, //同步类别间隔,单位为ms,7天为7*24*60*60*1000=604800000, 如果每次启动需要检查设置值为0
         defult = [//默认类别
{category_id: 388, category_name: "糗图" }, { category_id: 389, category_name: "段子" }, { category_id: 1, category_name: "笑话" }, { category_id: 326, category_name: "微点" }, { category_id: 3, category_name: "漫画" }, { category_id: 4, category_name: "励志" }, { category_id: 5, category_name: "歌词" }, { category_id: 6, category_name: "散文" }, { category_id: 7, category_name: "作文" }, { category_id: 8, category_name: "范文" }, {category_id: 9, category_name: "日志" }, { category_id: 10, category_name: "星座" }, { category_id: 14, category_name: "谜语" }, { category_id: 15, category_name: "非主" }, { category_id: 16, category_name: "YY" }, { category_id: 17, category_name: "面试" }, { category_id: 18, category_name: "情话" }, { category_id: 19, category_name: "美食" }, { category_id: 20, category_name: "故事" }, { category_id: 21, category_name: "诗歌" }, { category_id: 22, category_name: "杂文" }, { category_id: 336, category_name: "女人" }
         ],
         refleshIntervalKey = "refleshInterval";

        var that = this;
        var cls = that.getItem(that.ALL_CATEGORY);
        //不存在缓存，取默认的
        if (cls==null) {
            cls = defult;
        }

        //可以继续往下走，考虑到兼容类别同步问题
        // 判断是否更新
        var lastcheck = that.getItem(refleshIntervalKey);
        if (lastcheck) {
            var dc = parseInt(lastcheck);
            var dn = (new Date()).getTime();
            if (dn - dc >= checkInterval) {	// 未超过上次同步类别数据检测间隔，不需要进行同步检查
                 //异步更新类别缓存（千万不要删除数据，只增加）
	            var ajaxData = that.getData(that.getCategorys(), function (data) {
	                if (data.code == 0) {
	                    that.setItem(refleshIntervalKey, (new Date()).getTime().toString());//设置此次更新时间
	                    that.setItem(that.ALL_CATEGORY, data.data);//同步最新的类别
	                }
	            });
            }
        }
        else {
            //首次同步一下
            //异步更新类别缓存（千万不要删除数据，只增加）
            var ajaxData = that.getData(that.getCategorys(), function (data) {
                if (data.code == 0) {
                    that.setItem(refleshIntervalKey, (new Date()).getTime().toString());//设置此次更新时间
                    that.setItem(that.ALL_CATEGORY, data.data);//同步最新的类别
                }
            });
        }
        return cls;
    },

}