!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("whatInput",[],t):"object"==typeof exports?exports.whatInput=t():e.whatInput=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";e.exports=function(){var e="initial",t=null,n=document.documentElement,o=["input","select","textarea"],i=[],r=[16,17,18,91,93],u=[9],d={keydown:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"},s=[],a=!1,c=!1,p={x:null,y:null},f={2:"touch",3:"touch",4:"mouse"},v=!1;try{var m=Object.defineProperty({},"passive",{get:function(){v=!0}});window.addEventListener("test",null,m)}catch(e){}var w=function(){window.PointerEvent?(n.addEventListener("pointerdown",l),n.addEventListener("pointermove",y)):window.MSPointerEvent?(n.addEventListener("MSPointerDown",l),n.addEventListener("MSPointerMove",y)):(n.addEventListener("mousedown",l),n.addEventListener("mousemove",y),"ontouchstart"in window&&(n.addEventListener("touchstart",x),n.addEventListener("touchend",x))),n.addEventListener(b(),y,!!v&&{passive:!0}),n.addEventListener("keydown",l)},l=function(n){if(!a){var i=n.which,s=d[n.type];if("pointer"===s&&(s=L(n)),e!==s||t!==s){var c=document.activeElement,p=!1;(c&&c.nodeName&&-1===o.indexOf(c.nodeName.toLowerCase())||-1!==u.indexOf(i))&&(p=!0),("touch"===s||"mouse"===s||"keyboard"===s&&i&&p&&-1===r.indexOf(i))&&(e=t=s,h())}}},h=function(){n.setAttribute("data-whatinput",e),n.setAttribute("data-whatintent",e),-1===s.indexOf(e)&&(s.push(e),n.className+=" whatinput-types-"+e),E("input")},y=function(e){if(p.x!==e.screenX||p.y!==e.screenY?(c=!1,p.x=e.screenX,p.y=e.screenY):c=!0,!a&&!c){var o=d[e.type];"pointer"===o&&(o=L(e)),t!==o&&(t=o,n.setAttribute("data-whatintent",t),E("intent"))}},x=function(e){"touchstart"===e.type?(a=!1,l(e)):a=!0},E=function(e){for(var n=0,o=i.length;n<o;n++)i[n].type===e&&i[n].function.call(void 0,t)},L=function(e){return"number"==typeof e.pointerType?f[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},b=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"};return"addEventListener"in window&&Array.prototype.indexOf&&(d[b()]="mouse",w(),h()),{ask:function(n){return"loose"===n?t:e},types:function(){return s},ignoreKeys:function(e){r=e},onChange:function(e,t){i.push({function:e,type:t})}}}()}])});