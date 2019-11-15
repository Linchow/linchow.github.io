
requirejs.config({
    paths:{
        jquery: ['lib/jquery.min'],
        layer:['lib/layer'],
        template:['lib/template'],
    },
    urlArgs: "version=" +  (new Date()).getTime()
})

require(['jquery'],function(){
  
    init();

    var timer = null, top;
    // 滚动监听
    $(document).scroll(function(){
        top = $(document).scrollTop();
        clearTimeout(timer);
        $('.js-side-bar').css({right: '-55px'});
        if(top < 500){
            return;
        }
        timer = setTimeout(function(){
            if(top == $(document).scrollTop()){
                $('.js-side-bar').css({right: '10px'});
            }
        }, 500);
    })
    // 返回首页
    $('.js-home').click(function(){
        location.href = '../';
    })
    // 返回顶部
    $('.js-top').click(function(){
        $('body,html').animate({scrollTop: 0},500);
    })

    function init(){
        var routeId = $('.js-route-flag'); // 唯一标示

        if(routeId.hasClass("js-artTemplate")){
            require(["../js/artTemplate"],function(demo){
                demo.init();
            })
        }
        if(routeId.hasClass("js-layer")){
            require(["../js/layer"],function(demo){
                demo.init();
            })
        }
        if(routeId.hasClass("js-datepicker")){
            require(["../js/datepicker"],function(demo){
                demo.init();
            })
        }
        if(routeId.hasClass("js-demo4")){
            require(["../js/demo4"],function(demo){
                demo.init();
            })
        }
        if(routeId.hasClass("js-demo5")){
            require(["../js/demo5"],function(demo){
                demo.init();
            })
        }
        if(routeId.hasClass("js-demo6")){
            require(["../js/demo6"],function(demo){
                demo.init();
            })
        }
        if(routeId.hasClass("js-demo7")){
            require(["../js/demo7"],function(demo){
                demo.init();
            })
        }
    }
})