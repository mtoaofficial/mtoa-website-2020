var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.findInternal=function(a,d,b){a instanceof String&&(a=String(a));for(var c=a.length,e=0;e<c;e++){var f=a[e];if(d.call(b,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,d,b){a!=Array.prototype&&a!=Object.prototype&&(a[d]=b.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(a,d,b,c){if(d){b=$jscomp.global;a=a.split(".");for(c=0;c<a.length-1;c++){var e=a[c];e in b||(b[e]={});b=b[e]}a=a[a.length-1];c=b[a];d=d(c);d!=c&&null!=d&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:d})}};$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,b){return $jscomp.findInternal(this,a,b).v}},"es6","es3");
function updateId(a){0!==$(a).find(".nav-tabs").length&&$(a).find('section[id^="tabs"], section.tabs, section[id^="extTabs"]').each(function(){var a=$(this).attr("id"),b=$(this).find(".nav-tabs .nav-item"),c=$(this).find(".tab-pane");c.removeClass("active").eq(0).addClass("active");b.find("a").removeClass("active").removeAttr("aria-expanded").eq(0).addClass("active");c.each(function(){$(this).attr("id",a+"_tab"+$(this).index())});b.each(function(){$(this).find("a").attr("href","#"+a+"_tab"+$(this).index())})})}
var isBuilder=$("html").hasClass("is-builder");if(isBuilder)$(document).on("add.cards",function(a){updateId(a.target)});else"undefined"===typeof window.initTabsPlugin&&(window.initTabsPlugin=!0,console.log("init tabs by plugin"),updateId(document.body));
