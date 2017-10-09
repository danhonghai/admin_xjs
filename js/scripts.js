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

    // notification pie chart
    $(function() {
        $('.notification-pie-chart').easyPieChart({
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            },
            barColor: "#39b6ac",
            lineWidth: 3,
            size:50,
            trackColor: "#efefef",
            scaleColor:"#cccccc"

        });

    });


    /*$(function() {

        var datatPie = [30,50];
        // DONUT
        $.plot($(".target-sell"), datatPie,
            {
                series: {
                    pie: {
                        innerRadius: 0.6,
                        show: true,
                        label: {
                            show: false

                        },
                        stroke: {
                            width:.01,
                            color: '#fff'

                        }
                    }




                },

                legend: {
                    show: true
                },
                grid: {
                    hoverable: true,
                    clickable: true
                },

                colors: ["#ff6d60", "#cbcdd9"]
            });
    });*/

    $(function() {
        $('.pc-epie-chart').easyPieChart({
            onStep: function(from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            },
            barColor: "#5bc6f0",
            lineWidth: 3,
            size:50,
            trackColor: "#32323a",
            scaleColor:"#cccccc"

        });

    });



    $(function() {
        $(".d-pending").sparkline([3,1], {
            type: 'pie',
            width: '40',
            height: '40',
            sliceColors: ['#e1e1e1','#8175c9']
        });
    });



// SPARKLINE
    $(function () {
        var sparkLine = function () {
            $(".sparkline").each(function(){
                var $data = $(this).data();
                ($data.type == 'pie') && $data.sliceColors && ($data.sliceColors = eval($data.sliceColors));
                ($data.type == 'bar') && $data.stackedBarColor && ($data.stackedBarColor = eval($data.stackedBarColor));

                $data.valueSpots = {'0:': $data.spotColor};
                $(this).sparkline( $data.data || "html", $data);


                if($(this).data("compositeData")){
                    $spdata = $(this).data("compositeConfig");
                    $spdata.composite = true;
                    $spdata.minSpotColor = false;
                    $spdata.maxSpotColor = false;
                    $spdata.valueSpots = {'0:': $spdata.spotColor};
                    $(this).sparkline($(this).data("compositeData"), $spdata);
                };
            });
        };

        var sparkResize;
        $(window).resize(function (e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(function () {
                sparkLine(true)
            }, 500);
        });
        sparkLine(false);
    });

    /*==Collapsible==*/
    $(function() {
        $('.widget-head').click(function(e)
        {
            var widgetElem = $(this).children('.widget-collapse').children('i');

            $(this)
                .next('.widget-container')
                .slideToggle('slow');
            if ($(widgetElem).hasClass('ico-minus')) {
                $(widgetElem).removeClass('ico-minus');
                $(widgetElem).addClass('ico-plus');
            }
            else
            {
                $(widgetElem).removeClass('ico-plus');
                $(widgetElem).addClass('ico-minus');
            }
            e.preventDefault();
        });

    });

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
    $('#alertModal .okBtn,#alertModal .close').click(function(event) {
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
    $('#confirmModal .okBtn').click(function(event) {
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

