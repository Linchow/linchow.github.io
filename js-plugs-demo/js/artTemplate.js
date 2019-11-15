define(['template'], function(template) {
    return {
        init: function() {
            // 数据
            var data = {
                name: '张三',
                age: '18',
                like: ['看书', '写字', '画画']
            }
            // 添加辅助方法
            template.helper('format',function(format){  
                var date = new Date();
                var o = {   
                    "M+" : date.getMonth()+1,                 //月份   
                    "d+" : date.getDate(),                    //日   
                    "h+" : date.getHours(),                   //小时   
                    "m+" : date.getMinutes(),                 //分   
                    "s+" : date.getSeconds(),                 //秒   
                    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
                    "S"  : date.getMilliseconds()             //毫秒   
                };   
                if(/(y+)/.test(format))   
                    format = format.replace(RegExp.$1,(date.getFullYear()+"").substr(4 - RegExp.$1.length));   
                for(var k in o)   
                    if(new RegExp("("+ k +")").test(format))   
                format = format.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
                return format;   
            })
            // 字符串
            var template_str = "<p>Hello，大家好！我叫{{name}}，今年{{age}}岁，喜欢{{each like as item i}}{{item}}{{i == like.length - 1 ? '！' : '、'}}{{/each}}<br>{{format('yyyy-MM-dd hh:mm:ss')}}</p>";
            // 外部文件(ajax取值)
            $.get('./module/1.html', function(template){
                // 3. 以外部文件为模板(因为异步，必须先取到模板，再编译)
                templateCompile(template,data,'.js-template-box');
            })
            /**
             * 字符串模板编译函数
             * templateData: 模板
             * compileData: 数据
             * box: 容器(可选)
             */
            function templateCompile(templateData,compileData,box) {
                var render = template.compile(templateData);
                var html = render(compileData);
                if(box){
                    $(box).html(html);
                }else{
                    return html;
                }
            }
            // 1. 以script标签为模板
            $('.js-template-box').html(template('module',data));
            // 2. 以字符串为模板
            templateCompile(template_str,data,'.js-template-box');
        }
    }
});