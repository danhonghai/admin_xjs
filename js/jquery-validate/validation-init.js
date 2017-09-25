var Script = function () {

    $.validator.setDefaults({
        debug:true,
        submitHandler: function() { alert("submitted!"); }
    });
   
    jQuery.extend(jQuery.validator.messages, {  
        required: "必填字段",  
        remote: "请修正该字段",  
        email: "请输入正确格式的电子邮件",  
        url: "请输入合法的网址",  
        date: "请输入合法的日期",  
        dateISO: "请输入合法的日期 (ISO).",  
        number: "请输入合法的数字",  
        digits: "只能输入整数",  
        creditcard: "请输入合法的信用卡号",  
        equalTo: "请再次输入相同的值",  
        accept: "请输入拥有合法后缀名的字符串",  
        maxlength: jQuery.validator.format("请输入一个长度最多是 {0} 的字符串"),  
        minlength: jQuery.validator.format("请输入一个长度最少是 {0} 的字符串"),  
        rangelength: jQuery.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),  
        range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),  
        max: jQuery.validator.format("请输入一个最大为 {0} 的值"),  
        min: jQuery.validator.format("请输入一个最小为 {0} 的值")  
    }); 

    // 手机号码验证   
    jQuery.validator.addMethod("phoneValid", function(value, element) {   
        var tel = /^0?1[3|4|5|8][0-9]\d{8}$/;
        return this.optional(element) || (tel.test(value));
    }, "你输入的手机格式不正确");

    // 密码验证   
    jQuery.validator.addMethod("pwdValid", function(value, element) {   
        var pwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
        return this.optional(element) || (pwd.test(value));
    }, "密码为6到16为数字字母组合");

    // 汉字、字母、数字   
    jQuery.validator.addMethod("textValid", function(value, element) {   
        var text = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/;
        return this.optional(element) || (text.test(value));
    }, "请输入汉字或字母或数字");

     //字母、数字   
    jQuery.validator.addMethod("lettersNumValid", function(value, element) {   
        var letters = /^[a-zA-Z0-9]+$/;
        return this.optional(element) || (letters.test(value));
    }, "请输入字母或数字");
    
    //保留两位小数
    jQuery.validator.addMethod("lrunlv", function(value, element) {         
        return this.optional(element) || /^\d+(\.\d{1,2})?$/.test(value);         
    }, "小数位不能超过两位");   

}();