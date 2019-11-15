define(['layer'], function(layer) {
    return {
        init: function() {
            /**
             * 打开弹窗
             * obj: jq Dom
             */
            function openLayer(obj){
                if($(obj).hasClass('layui-layer-wrap')){
                    // 判断弹窗是否已经打开
                    return $(obj).parent().parent().attr('times');
                }
                return layer.open({
                    type: 1,  // 弹出页面
                    title: false, // 不显示标题栏
                    closeBtn: 0, // 不显示关闭按钮
                    shadeClose: true, // 点击遮罩关闭弹窗
                    fixed: true,  // 定位fixed
                    offset: 'auto', // 垂直水平居中 默认
                    maxWidth: 1200,  // 最大宽度1200 高度自适应时生效
                    resize: false,  // 禁止拉伸
                    content: $(obj), // 内容绑定类名
                })
            }
            $('.js-openLayer').click(function(){
                myLayer = openLayer('.js-content');
            })
            $('.js-layer-close').click(function(){
                layer.close(myLayer);
            })
        }
    }
});