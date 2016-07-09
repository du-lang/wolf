$(function(){
        var sidebar=$('#sidebar');//选中sidebar侧边栏
        var mask=$("#mask");//选中mask
        var sidebar_trigger=$('#sidebar_trigger');
    /*只要sidebar_trigger被点击了，就执行一个事件*/
    sidebar_trigger.on('mouseover',function(){
        mask.fadeIn();
        sidebar.animate({'right':0});
    })

    sidebar.on('click',function(){
        mask.fadeOut();
        sidebar.animate({'right':-sidebar.width()});
    })



    /*添加返回顶部的事件*/
    var backButton=$(".back-to-top");
    backButton.on('click', function () {
        $('html,body').animate({/*选中整个页面，使用animate动画在800毫秒中之内向上滚动*/
            scrollTop:0/*设置向上滚动的位置，0表示滚动到最顶端*/
        },800);/*800表示整个滚动时间为800毫秒*/
    });


    $(window).on('scroll',function(){
        if($(window).scrollTop()>$(window).height()){
            backButton.fadeIn();
        }else{
            backButton.fadeOut();
        }

    });
    $(window).trigger('scroll');/*让程序自己刷新页面，保证在一开始的时候，返回顶部按钮是消失的*/


    $("#play-music1").click(function(){
        $("#div-music").animate({left:'300px'});
    })

    $("#music-btn1").click(function(){
        $("#div-music").animate({left:'-850px'});
    })

    $("#play-music2").click(function(){
        $("#div-music2").animate({left:'300px'});
    })

    $("#music-btn2").click(function(){
        $("#div-music2").animate({left:'-850px'});
    })


    $("#play-music3").click(function(){
        $("#div-music3").animate({left:'300px'});
    })

    $("#music-btn3").click(function(){
        $("#div-music3").animate({left:'-850px'});
    })

})