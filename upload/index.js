/**
 * 主页
 * Created by cheng on 2017/7/25.
 */

/**
 * 方法描述：单击一级菜单（页面上部的菜单），初始化子菜单（即页面左部菜单）
 */

function clickFirstMenu(element) {
    //判断当前单击的节点是否是[选中模式]，如果是[选中模式],不再触发单击事件
    if ($(element).attr("class") != "on") {
        //将同级节点的[选中模式]清空
        $("#mainMenuUl").children().attr("class", "");
        //将当前节点置为[选中模式]
        $(element).attr("class", "on");
        //加载二级菜单内容
        $("#menuDiv").html("<h3 onclick='clickSecondMenu(this，)'><a>广告管理</a></h3>");
    }
}

function clickMenu(element,id) {
    // 将同级节点的[选中样式]清空
    $("#menuDiv").children().attr("class","");

    // 将当前单击的节点置为[选中样式]
    $(element).attr("class","on");
    if(id=="subMenuDiv1"){

        $('#subMenuDiv2').attr("style","display:none");
        $('#subMenuDiv3').attr("style","display:none");
        // 加载子菜单内容
        $('#subMenuDiv1').attr("style","display:block");
    }
    if(id=="subMenuDiv2"){

        $('#subMenuDiv1').attr("style","display:none");
        $('#subMenuDiv3').attr("style","display:none");
        // 加载子菜单内容
        $('#subMenuDiv2').attr("style","display:block");
    }
    if(id=="subMenuDiv3"){

        $('#subMenuDiv2').attr("style","display:none");
        $('#subMenuDiv1').attr("style","display:none");
        // 加载子菜单内容
        $('#subMenuDiv3').attr("style","display:block");
    }

}
/**
 * 方法描述：单击二级菜单（页面左部菜单），初始化主页面
 */
function clickSecondMenu(element, path) {
    //将其他有[选中模式]的节点清空
    $("#menuDiv").children().children().attr("class", "");
    //将当前单击的节点置为[选中模式]
    $(element).children().attr("class", "on");
    //将当前页面跳转到指定的地址
    $("#mainPage").attr("src", "/adList");
}


/**
 * 当前登录用户可以访问的菜单Map
 */
var menuMap = {};

$(function () {
    //菜单初始化
    common.ajax({
        url: $("#basePath").val() + "/session/menus",
        success: function (data) {
            if (data && data.length > 0) {
                $.each(data, function (i, value) {
                    if (!menuMap[value.parentId]) {
                        menuMap[value.parentId] = new Array();
                    }
                    menuMap[value.parentId].push(value);
                });
                initMenu();
            }
        }
    });
});

/**
 * 初始化根  菜单
 */
function initMenu() {
    var menuList = menuMap[0];
    $("#menuDiv").html("");
    $(menuList).each(function (value) {
        $("menuDiv").append()
    })
    $.each(menuList, function (i, value) {
        $("#menuDiv").append("<li onclick='clickMenu(this," + value.id
            + ")'><a><span>" + value.name + "</span></a></li>");
    });
}

/**
 * 根据父菜单id初始化子菜单
 */
function initSubMenu(parentId) {
    var menuList = menuMap[parentId];
    $("#subMenuDiv").html("");
    $.each(menuList, function (i, value) {
        $("#subMenuDiv").append("<h3 onclick=\"clickSubMenu(this,'" + value.url
            + "')\"><a>" + value.name + "</a></h3>");
    });
}


/**
 * 方法描述：单击菜单（页面上部的菜单），初始化子菜单（即页面左部菜单）
 */
function clickMenu(element,id) {
    // 将同级节点的[选中样式]清空
    $("#menuDiv").children().attr("class","");

    // 将当前单击的节点置为[选中样式]
    $(element).attr("class","on");
    if(id=="subMenuDiv1"){

        $('#subMenuDiv2').attr("style","display:none");
        $('#subMenuDiv3').attr("style","display:none");
        // 加载子菜单内容
        $('#subMenuDiv1').attr("style","display:block");
    }
    if(id=="subMenuDiv2"){

        $('#subMenuDiv1').attr("style","display:none");
        $('#subMenuDiv3').attr("style","display:none");
        // 加载子菜单内容
        $('#subMenuDiv2').attr("style","display:block");
    }
    if(id=="subMenuDiv3"){

        $('#subMenuDiv2').attr("style","display:none");
        $('#subMenuDiv1').attr("style","display:none");
        // 加载子菜单内容
        $('#subMenuDiv3').attr("style","display:block");
    }

}
/**
<!--
    function clickMenu(element, id) {
    //将同级节点的[选中样式]清空
    $("#menuDiv").children().attr("class", "");
    //将当前单击的节点重置为[选中样式]
    $(element).attr("class", "on");
    //加载子菜单内容
    initSubMenu(id);
}
-->
 */
/**
 * 方法描述：单击子菜单（页面左部菜单），初始化主页面
 */
//点击
/*

*/
//权限
function clickSubMenuAuth(element) {
    //将其他有[选中模式]的节点的样式清空
    $("#subMenuDiv1").find(".on").attr("class", "");
    //将当前单击的节点置为[选中模式]
    $(element).children().attr("class", "on");
    //按指定地址加载主页面(iframe)
    $("#mainPage").attr("src", $("#basePath").val() + "/auth");
}
//广告
function clickSubMenuAd(element) {
    //将其他有[选中模式]的节点的样式清空
    $("#subMenuDiv2").find(".on").attr("class", "");
    //将当前单击的节点置为[选中模式]
    $(element).children().attr("class", "on");
    //按指定地址加载主页面(iframe)
    $("#mainPage").attr("src", $("#basePath").val() + "/ad");
}
//商店
function clickSubMenuShop(element) {
    //将其他有[选中模式]的节点的样式清空
    $("#subMenuDiv2").find(".on").attr("class", "");
    //将当前单击的节点置为[选中模式]
    $(element).children().attr("class", "on");
    //按指定地址加载主页面(iframe)
    $("#mainPage").attr("src", $("#basePath").val() + "/businesses");
}
//评论
function clickSubMenuComm(element) {
    //将其他有[选中模式]的节点的样式清空
    $("#subMenuDiv2").find(".on").attr("class", "");
    //将当前单击的节点置为[选中模式]s
    $(element).children().attr("class", "on");
    //按指定地址加载主页面(iframe)
    $("#mainPage").attr("src", $("#basePath").val() + "/comments");
}
//订单
function clickSubMenuOrd(element) {
    //将其他有[选中模式]的节点的样式清空
    $("#subMenuDiv2").find(".on").attr("class", "");
    //将当前单击的节点置为[选中模式]
    $(element).children().attr("class", "on");
    //按指定地址加载主页面(iframe)
    $("#mainPage").attr("src", $("#basePath").val() + "/orders");
}
//订单统计
function clickSubMenuOrder(element) {
    //将其他有[选中模式]的节点的样式清空
    $("#subMenuDiv3").find(".on").attr("class", "");
    //将当前单击的节点置为[选中模式]
    $(element).children().attr("class", "on");
    //按指定地址加载主页面(iframe)
    $("#mainPage").attr("src", $("#basePath").val() + "/orderReport");
}
/**
 * 打开密码修改弹出层
 */
function openAddDiv() {
    $("#mengban").css("visibility", "visible");
    $(".wishlistBox").show();
    $(".wishlistBox").find(".persongRightTit").html("&nbsp;&nbsp;修改密码");
    $("#submitval").show();
}

/**
 * 关闭密码修改弹出层
 */
function closeDiv() {
    $("#mengban").css("visibility", "hidden");
    $("#oldpassword").val("");
    $("#newPassword").val("");
    $("#newpasswordagain").val("");
    $(".wishlistBox").hide();

}

function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var str = "0";
    if (hours < 10) {
        hours = str + hours;
    }
    if (minutes < 10) {
        minutes = str + minutes;
    }
    if (seconds < 10) {
        seconds = str + seconds;
    }
    var myDate = date.getFullYear() + "年" + ( date.getMonth() + 1 ) + "月" + date.getDate() + "日 "
        + hours + ":" + minutes + ":" + seconds;
    $("#showTime").html(myDate);
    setTimeout(getTime, 1000);
}