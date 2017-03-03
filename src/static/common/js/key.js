// ==UserScript==
// @name 			首页键盘按键
// @description	
// @version 		0.0.1
// @author		admin@iwenli.org <admin@iwenli.org> http://iwenli.org/
// @developer		iwenli
// @createTime		
// @editTime		
// @run-at		Visual Studio Code
// @homepage		http://iwenli.org
// ==/UserScript==

//=======START=======

var index = 0,
    timer = null,
    flag = Math.random() > 0.5 ? true : false,
    allKey = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77, 188, 32];
$(window).keydown(function (event) {
    var code = (event.keyCode ? event.keyCode : event.which);
    add(code);
});

$(window).keyup(function (event) {
    var code = (event.keyCode ? event.keyCode : event.which);
    remove(code);
});

function add(code) { 
    $("li[data-code='" + code + "']").addClass("active")
    var key = $("li[data-code='" + code + "']").data("key");
    var code = $("li[data-code='" + code + "']").data("code");
    //console.log("KEYON:" + key + "/" + code + "@" + event.timeStamp);
    // $(this).off(event);
}

function remove(code) {
    $("li[data-code='" + code + "']").removeClass("active")
    var key = $("li[data-code='" + code + "']").data("key");
    var code = $("li[data-code='" + code + "']").data("code");
    //console.log("KEYOFF:" + key + "/" + code + "@" + event.timeStamp);
}

function random(flag) {
    if (flag) {
        return Math.ceil(Math.random() * allKey.length) - 1;
    }
    else {
        return index++ % (allKey.length);
    }
}

function autoKeyDown() {
    $("li").removeClass("active");//解决窗口最小化setInterval函数休眠导致setTimeout执行出错效果 
    code = allKey[random(flag)];
    add(code);
    setTimeout(function () {
        remove(code);
    }, 280);
} 