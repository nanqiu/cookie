modulex.add("cookie",[],function(e,n,t){var o;o=function(e){function n(e){return decodeURIComponent(e.replace(/\+/g," "))}function t(e){return"string"==typeof e&&""!==e}var o=document,r=864e5,i=encodeURIComponent;return e={version:"1.0.1",get:function(e){var r,i;return t(e)&&(i=String(o.cookie).match(new RegExp("(?:^| )"+e+"(?:(?:=([^;]*))|;|$)")))&&(r=i[1]?n(i[1]):""),r},set:function(e,n,c,u,a,f,m){var s,g=c;m?String(n):s=String(i(n)),"number"==typeof g&&(g=new Date,g.setTime(g.getTime()+c*r)),g instanceof Date&&(s+="; expires="+g.toUTCString()),t(u)&&(s+="; domain="+u),t(a)&&(s+="; path="+a),f&&(s+="; secure"),o.cookie=e+"="+s},remove:function(e,n,t,o){this.set(e,"",-1,n,t,o)}}}(),t.exports=o});