//left side accordion
$(function() {
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
        classExpand: 'dcjq-current-parent'
    });
});


var Script = function () {

    //  menu auto scrolling

    jQuery(".leftside-navigation .sub-menu > a").click(function () {
        var o = ($(this).offset());
        diff = 80 - o.top;
        if(diff>0)
            $(".leftside-navigation").scrollTo("-="+Math.abs(diff),500);
        else
            $(".leftside-navigation").scrollTo("+="+Math.abs(diff),500);
    });

    // toggle bar
//
//    $(function() {
//        var wd;
//        wd = $(window).width();
//        function responsiveView() {
//            var newd = $(window).width();
//            if(newd==wd){
//                return true;
//            }else{
//                wd = newd;
//            }
//            var wSize = $(window).width();
//            if (wSize < 768) {
//                $('#sidebar').addClass('hide-left-bar');
//
//            }
//            else{
//                $('#sidebar').removeClass('hide-left-bar');
//
//            }
//
//        }
//
//
//
//        $(window).on('resize', responsiveView);
//
//
//    });

    $('.sidebar-toggle-box .fa-bars').click(function (e) {
//        $('.sidebar-menu').slimscroll({
//            height: '100%',
//            wheelStep: 1,
//            railVisible: true,
////      alwaysVisible: true,
//            color: '#1FB5AD',
//            size: '3px',
//            railColor: '#333',
//            railOpacity: 0.5,
//            opacity : .8,
//            borderRadius: '0px',
//            railBorderRadius: '0px',
//            allowPageScroll: false
//        });

        $(".leftside-navigation").niceScroll({
            cursorcolor:"#1FB5AD",
            cursorborder:"0px solid #fff",
            cursorborderradius:"0px",
            cursorwidth:"3px"
        });

        $('#sidebar').toggleClass('hide-left-bar');
        if($('#sidebar').hasClass('hide-left-bar')){
            $(".leftside-navigation").getNiceScroll().hide();
        }
        $(".leftside-navigation").getNiceScroll().show();
        $('#main-content').toggleClass('merge-left');
        e.stopPropagation();
        if( $('#container').hasClass('open-right-panel')){
            $('#container').removeClass('open-right-panel')
        }
        if( $('.right-sidebar').hasClass('open-right-bar')){
            $('.right-sidebar').removeClass('open-right-bar')
        }

        if( $('.header').hasClass('merge-header')){
            $('.header').removeClass('merge-header')
        }


    });
    $('.toggle-right-box .fa-bars').click(function (e) {
        $('#container').toggleClass('open-right-panel');
        $('.right-sidebar').toggleClass('open-right-bar');
        $('.header').toggleClass('merge-header');

        e.stopPropagation();
    });

    $('.header,#main-content,#sidebar').click(function () {
       if( $('#container').hasClass('open-right-panel')){
           $('#container').removeClass('open-right-panel')
       }
        if( $('.right-sidebar').hasClass('open-right-bar')){
            $('.right-sidebar').removeClass('open-right-bar')
        }

        if( $('.header').hasClass('merge-header')){
            $('.header').removeClass('merge-header')
        }


    });



    /*Slim Scroll*/
    $(function () {
        $('.event-list').slimscroll({
            height: '305px',
            wheelStep: 20
        });
        $('.conversation-list').slimscroll({
            height: '360px',
            wheelStep: 35
        });
        $('.to-do-list').slimscroll({
            height: '300px',
            wheelStep: 35
        });
        $(".leftside-navigation").niceScroll({
            cursorcolor:"#1FB5AD",
            cursorborder:"0px solid #fff",
            cursorborderradius:"0px",
            cursorwidth:"3px"
        });

        $(".leftside-navigation").getNiceScroll().resize();
        if($('#sidebar').hasClass('hide-left-bar')){
            $(".leftside-navigation").getNiceScroll().hide();
        }
        $(".leftside-navigation").getNiceScroll().show();
//        $('.sidebar-menu').slimscroll({
//            height: '100%',
//            wheelStep: 1,
//            railVisible: true,
////      alwaysVisible: true,
//            color: '#1FB5AD',
//            size: '3px',
//            railColor: '#333',
//            railOpacity: 0.5,
//            opacity : .8,
//            borderRadius: '0px',
//            railBorderRadius: '0px',
//            allowPageScroll: false
//        });

        $(".right-stat-bar").niceScroll({
            cursorcolor:"#1FB5AD",
            cursorborder:"0px solid #fff",
            cursorborderradius:"0px",
            cursorwidth:"3px"
        });
//        $('.right-side-accordion').slimscroll({
//            height: '94%',
//            wheelStep: 1,
//            railVisible: true,
////      alwaysVisible: true,
//            color: '#1FB5AD',
//            size: '3px',
//            railColor: '#333',
//            railOpacity: 0.5,
//            opacity : .8,
//            borderRadius: '0px',
//            railBorderRadius: '0px'
//        });



    });



    // custom scroll bar
//    $("#sidebar").niceScroll({styler:"fb",cursorcolor:"#1FB5AD", cursorwidth: '3', cursorborderradius: '10px', background: '#404040', spacebarenabled:false, cursorborder: ''});
//    $(".right-sidebar").niceScroll({styler:"fb",cursorcolor:"#1FB5AD", cursorwidth: '3', cursorborderradius: '10px', background: '#404040', spacebarenabled:false, cursorborder: ''});


   // widget tools

    jQuery('.panel .tools .fa-chevron-down').click(function () {
        var el = jQuery(this).parents(".panel").children(".panel-body");
        if (jQuery(this).hasClass("fa-chevron-down")) {
            jQuery(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(200);
        } else {
            jQuery(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(200);
        }
    });

    jQuery('.panel .tools .fa-times').click(function () {
        jQuery(this).parents(".panel").parent().remove();
    });

   // tool tips

    $('.tooltips').tooltip();

    // popovers

    $('.popovers').popover();

}();



/*tab切换 by wuyf 20170914*/
$(function(){
    $('.tab-list').on('click','.tab-item',function(event){
        $('.tab-list .tab-item').removeClass('active');
        $('.tab-content').hide();
        $(event.target).addClass('active');
        var id = $(event.target).attr('data-id');
        $('#'+id).show();
    });

    //form表单checkbox选中事件
    $('.checkboxWrap input:checkbox').on('ifChecked ifUnchecked', function(event){
        var checkStr = event.type.replace('if', '').toLowerCase()
        if(checkStr == 'checked'){
            $(this).attr("checked",true);
        }else{
            $(this).attr("checked",false);
        }
    });

    //统计区间搜索切换
    $('.search-line').on("click","a",function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        if($(this).hasClass("user-defined")){
            $(this).next().css('display','inline-block');
        }
    });

    //字符太长截断
    var cutLine = $('.cut-line').text();
    if(cutLine && cutLine.length >= 13){
        $('.cut-line').attr("title",cutLine).text(cutLine.substring(0,13)+"...");
    }
});
/*封装消息提示框*/
function alertFun(paramsObj){
    var title = paramsObj.title || '提示信息';
    var content = paramsObj.content || '';
    $('#alertModal').find('.modal-title').text(title);
    $('#alertModal').find('.modal-body').text(content);
    $('#alertModal').modal({
        backdrop:false
    });
    $('#alertModal .okBtn,#alertModal .close').unbind("click").click(function(event) {
        paramsObj.callBackFun && paramsObj.callBackFun()
    });
}
/*封装消息提示框*/
function  confirmFun(paramsObj){
    var title = paramsObj.title || '提示信息';
    var content = paramsObj.content || '';
    $('#confirmModal').find('.modal-title').text(title);
    $('#confirmModal').find('.modal-body').text(content);
    $('#confirmModal').modal({
        backdrop:false
    });
    $('#confirmModal .okBtn').unbind("click").click(function(event) {
        paramsObj.callBackFun && paramsObj.callBackFun()
    });
}

//清空表单
function clearFrom(id){
    var objId = document.getElementById(id);
    objId.reset();
    if (objId == undefined) {
        return;
    }
    for (var i = 0; i < objId.elements.length; i++) {
        if (objId.elements[i].type == "text") {
            objId.elements[i].value = "";
        }
        else if (objId.elements[i].type == "password") {
            objId.elements[i].value = "";
        }
        else if (objId.elements[i].type == "email") {
            objId.elements[i].value = "";
        }
        else if (objId.elements[i].type == "radio") {

            $('#'+id).find('.icheck').find("input[type='radio']").eq(0).iCheck('check');
        }
        else if (objId.elements[i].type == "checkbox") {
            $(objId.elements[i]).iCheck('uncheck');
        }
        else if (objId.elements[i].type == "select-one") {
            objId.elements[i].options[0].selected = true;
        }
        else if (objId.elements[i].type == "select-multiple") {
            for (var j = 0; j < objId.elements[i].options.length; j++) {
                objId.elements[i].options[j].selected = false;
            }
        }
        else if (objId.elements[i].type == "textarea") {
            objId.elements[i].value = "";
        }
        //else if (objId.elements[i].type == "file") {
        // //objId.elements[i].select();
        // //document.selection.clear();
        // // for IE, Opera, Safari, Chrome
        // var file = objId.elements[i];
        // if (file.outerHTML) {
        // file.outerHTML = file.outerHTML;
        // } else {
        // file.value = ""; // FF(包括3.5)
        // }
        //}
    }
}

