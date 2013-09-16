/*! kibana - v3.0.0m3pre - 2013-09-15
 * Copyright (c) 2013 Rashid Khan; Licensed Apache License */

var saveAs=saveAs||navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(a){var b=a.document,c=function(){return a.URL||a.webkitURL||a},d=a.URL||a.webkitURL||a,e=b.createElementNS("http://www.w3.org/1999/xhtml","a"),f=!a.externalHost&&"download"in e,g=function(c){var d=b.createEvent("MouseEvents");d.initMouseEvent("click",!0,!1,a,0,0,0,0,0,!1,!1,!1,!1,0,null),c.dispatchEvent(d)},h=a.webkitRequestFileSystem,i=a.requestFileSystem||h||a.mozRequestFileSystem,j=function(b){(a.setImmediate||a.setTimeout)(function(){throw b},0)},k="application/octet-stream",l=0,m=[],n=function(){for(var a=m.length;a--;){var b=m[a];"string"==typeof b?d.revokeObjectURL(b):b.remove()}m.length=0},o=function(a,b,c){b=[].concat(b);for(var d=b.length;d--;){var e=a["on"+b[d]];if("function"==typeof e)try{e.call(a,c||a)}catch(f){j(f)}}},p=function(b,d){var j,n,p,q=this,r=b.type,s=!1,t=function(){var a=c().createObjectURL(b);return m.push(a),a},u=function(){o(q,"writestart progress write writeend".split(" "))},v=function(){(s||!j)&&(j=t(b)),n?n.location.href=j:window.open(j,"_blank"),q.readyState=q.DONE,u()},w=function(a){return function(){return q.readyState!==q.DONE?a.apply(this,arguments):void 0}},x={create:!0,exclusive:!1};return q.readyState=q.INIT,d||(d="download"),f?(j=t(b),e.href=j,e.download=d,g(e),q.readyState=q.DONE,u(),void 0):(a.chrome&&r&&r!==k&&(p=b.slice||b.webkitSlice,b=p.call(b,0,b.size,k),s=!0),h&&"download"!==d&&(d+=".download"),(r===k||h)&&(n=a),i?(l+=b.size,i(a.TEMPORARY,l,w(function(a){a.root.getDirectory("saved",x,w(function(a){var c=function(){a.getFile(d,x,w(function(a){a.createWriter(w(function(c){c.onwriteend=function(b){n.location.href=a.toURL(),m.push(a),q.readyState=q.DONE,o(q,"writeend",b)},c.onerror=function(){var a=c.error;a.code!==a.ABORT_ERR&&v()},"writestart progress write abort".split(" ").forEach(function(a){c["on"+a]=q["on"+a]}),c.write(b),q.abort=function(){c.abort(),q.readyState=q.DONE},q.readyState=q.WRITING}),v)}),v)};a.getFile(d,{create:!1},w(function(a){a.remove(),c()}),w(function(a){a.code===a.NOT_FOUND_ERR?c():v()}))}),v)}),v),void 0):(v(),void 0))},q=p.prototype,r=function(a,b){return new p(a,b)};return q.abort=function(){var a=this;a.readyState=a.DONE,o(a,"abort")},q.readyState=q.INIT=0,q.WRITING=1,q.DONE=2,q.error=q.onwritestart=q.onprogress=q.onwrite=q.onabort=q.onerror=q.onwriteend=null,a.addEventListener("unload",n,!1),r}(self);