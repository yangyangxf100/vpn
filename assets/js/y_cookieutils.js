 // 添加Cookie
     function addCookie(objName, objValue, objHours) {
       var str = objName + "=" + escape(objValue);
       // 为0时不设定过期时间,浏览器关闭时Cookie自动消失
       if(objHours > 0) {
          var date = new Date();       
          var ms = objHours*3600*1000;
          date.setTime(date.getTime() + ms);
          str += "; expires=" + date.toGMTString();
       }
       document.cookie = str;
       alert("添加Cookie成功");
     }
     
     // 读取所有保存的Cookie字符串
     function allCookie() {
       var str = document.cookie;
       if(str == "") {
          str = "没有保存任何Cookie";
       }
       alert(str);
     }
     
     // 获取指定名称的Cookie的值
     function getCookie(objName) {
       var arrStr = document.cookie.split("; ");
       for(var i=0; i<arrStr.length; i++) {
           var temp = arrStr[i].split("=");
           if(temp[0] == objName) return unescape(temp[1]);
       } 
     }

     // 为了删除指定名称的cookie,可以将其过期时间设定为一个过去的时间
     function delCookie(objName) {
       var date = new Date();
       date.setTime(date.getTime() - 10000);
       document.cookie = objName + "=a; expires=" + date.toGMTString();
     }

     function $(m,n) {
       return document.forms[m].elements[n].value;
     }

     function add_() {
       var cookie_name = $("myform","cookie_name");
       var cookie_value = $("myform","cookie_value");
       var cookie_expireHours = $("myform","cookie_expiresHours");
       addCookie(cookie_name,cookie_value,cookie_expireHours);
     }
     
     function get_() {
       var cookie_name = $("myform","cookie_name");
       var cookie_value = getCookie(cookie_name);
       alert(cookie_value);
     }
     
     function del_() {
       var cookie_name = $("myform","cookie_name");
       delCookie(cookie_name);
       alert("删除成功");
     }