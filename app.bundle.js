!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[n].concat(o).concat([r]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];null!=s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var i,r,o={},s=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var i=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}}(),l=null,d=0,c=[],u=n(6);function h(e,t){for(var n=0;n<e.length;n++){var i=e[n],r=o[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(x(i.parts[s],t))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(x(i.parts[s],t));o[i.id]={id:i.id,refs:1,parts:a}}}}function p(e,t){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[s]?i[s].parts.push(a):n.push(i[s]={id:s,parts:[a]})}return n}function f(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=c[c.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),c.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=a(e.insertAt.before,n);n.insertBefore(t,r)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=c.indexOf(e);t>=0&&c.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return n.nc}();i&&(e.attrs.nonce=i)}return b(t,e.attrs),f(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function x(e,t){var n,i,r,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var s=d++;n=l||(l=v(t)),i=y.bind(null,n,s,!1),r=y.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),f(e,t),t}(t),i=function(e,t,n){var i=n.css,r=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(i=u(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),r=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),i=function(e,t){var n=t.css,i=t.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){m(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return h(n,t),function(e){for(var i=[],r=0;r<n.length;r++){var s=n[r];(a=o[s.id]).refs--,i.push(a)}e&&h(p(e,t),t);for(r=0;r<i.length;r++){var a;if(0===(a=i[r]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete o[a.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function y(e,t,n,i){var r=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=w(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t,n){var i=n(5);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){var i=n(7);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){var i=n(18);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    line-height: 1;\r\n}\r\n\r\nol, ul {\r\n    list-style: none;\r\n}\r\n\r\nblockquote, q {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,n){t=e.exports=n(0)(!1);var i=n(8),r=i(n(9)),o=i(n(10)+"?#iefix&v=4.7.0"),s=i(n(11)),a=i(n(12)),l=i(n(13)),d=i(n(14)+"#fontawesomeregular"),c=i(n(15)),u=i(n(16)),h=i(n(17));t.push([e.i,"@font-face {\r\n  font-family: 'FontAwesome';\r\n  src: url("+r+");\r\n  src: url("+o+") format('embedded-opentype'), url("+s+") format('woff2'), url("+a+") format('woff'), url("+l+") format('truetype'), url("+d+") format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: url("+c+") format('woff2');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url("+u+") format('woff2');\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Roboto';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: url("+h+") format('woff2');\r\n}\r\n",""])},function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t,n){e.exports=n.p+"./assets/fonts/fontawesome-webfont.eot"},function(e,t,n){e.exports=n.p+"./assets/fonts/fontawesome-webfont.eot"},function(e,t,n){e.exports=n.p+"./assets/fonts/fontawesome-webfont.woff2"},function(e,t,n){e.exports=n.p+"./assets/fonts/fontawesome-webfont.woff"},function(e,t,n){e.exports=n.p+"./assets/fonts/fontawesome-webfont.ttf"},function(e,t,n){e.exports=n.p+"./assets/fonts/fontawesome-webfont.svg"},function(e,t,n){e.exports=n.p+"./assets/fonts/Roboto-Italic.woff2"},function(e,t,n){e.exports=n.p+"./assets/fonts/Roboto-Regular.woff2"},function(e,t,n){e.exports=n.p+"./assets/fonts/Roboto-Bold.woff2"},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"body {\n  font-size: 16px;\n  font-family: Roboto, Arial, sans-serif;\n  background-color: rgba(17, 17, 17, 0.1);\n  height: 100vh;\n}\n",""])},function(e,t,n){var i=n(20);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,'/*\n*Font Awesome\n*/\n\n.fa-user::before,\n.fa-calendar::before,\n.fa-eye::before {\n  font-family: FontAwesome, sans-serif;\n  font-size: 25px;\n  color: #808080;\n  width: 1.28571429em;\n  text-align: center;\n  position: absolute;\n  left: -25px;\n  font-weight: normal;\n  top: -5px;\n}\n\n.fa-user::before {\n  content: "\\f007";\n}\n\n.fa-calendar::before {\n  content: "\\f073";\n}\n\n.fa-eye::before {\n  content: "\\f06e";\n}\n\n/*\n* Video Items\n*/\n\n.video-items-container {\n  overflow: hidden;\n}\n\n.video-items {\n  margin: 30px auto;\n  display: flex;\n  --shown-amount: 4;\n  --current-index: 0;\n  --total-amount: 0;\n  --video-item-width: 322px;\n  --video-item-margin: calc((100vw - var(--shown-amount) * var(--video-item-width)) / var(--shown-amount) / 2);\n  --offset: 0px;\n  width: calc(var(--total-amount) * (var(--video-item-width) + var(--video-item-margin) * 2));\n  transform: translate(calc(-1 * (var(--current-index) * (var(--video-item-width) + 2 * var(--video-item-margin)) + var(--offset))));\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n._grabbed {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n._animate {\n  transition: transform 0.5s ease-out;\n}\n\n.video-item {\n  width: var(--video-item-width);\n  border: 1px solid #CCCCCC;\n  box-shadow: inset 0 1px 2px #EEEEEE;\n  padding: 5px 0;\n  border-radius: 2px;\n  margin: 0 var(--video-item-margin);\n  box-sizing: border-box;\n  word-wrap: break-word;\n  background-color: #FFFFFF;\n}\n\n.video-item:hover {\n  border-color: #1C62B9;\n}\n\n.video-title {\n  box-sizing: border-box;\n  background-size: cover;\n  font-weight: bold;\n  text-align: center;\n  padding-top: 50px;\n  height: 180px;\n  font-size: 18px;\n}\n\n.video-title a {\n  padding: 10px;\n  display: block;\n  background-color: #006633CC;\n  color: #FFFFFF;\n}\n\n.video-details {\n  padding: 30px 7px;\n  height: 240px;\n}\n\n.video-details-item {\n  max-width: 65%;\n  margin: 20px auto;\n  text-align: center;\n  font-weight: bold;\n  position: relative;\n}\n\n.video-description {\n  padding: 20px 0;\n  font-style: italic;\n}\n\n@media (max-width: 1300px) {\n  .video-items {\n    --shown-amount: 3;\n  }\n}\n\n@media (max-width: 980px) {\n  .video-items {\n    --shown-amount: 2;\n  }\n}\n\n@media (max-width: 650px) {\n  .video-items {\n    --shown-amount: 1;\n  }\n}\n\n@media (max-width: 330px) {\n  .video-items {\n    --video-item-width: 95vw;\n  }\n}\n\n/*\n* Slider\n*/\n\n.slider {\n  display: flex;\n  justify-content: center;\n}\n\n.slider-item {\n  width: 20px;\n  height: 20px;\n  margin: 0 10px;\n  border-radius: 50%;\n  border: 1px solid #CCCCCC;\n  box-sizing: border-box;\n  background-color: #CCCCCC;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 10px;\n  font-weight: bold;\n  line-height: 18px;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n}\n\n.slider-item__popup {\n  visibility: hidden;\n  width: 100%;\n  background-color: #909090;\n  color: #FFFFFF;\n  text-align: center;\n  border-radius: 6px;\n  padding: 4px 0;\n  position: absolute;\n  bottom: 125%;\n  left: 50%;\n  margin-left: -9px;\n}\n\n.slider-item__popup::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid transparent;\n  border-top-color: #909090;\n}\n\n.show .slider-item__popup {\n  visibility: visible;\n}\n\n._current {\n  background-color: #FF0000;\n  border-color: #FF0000;\n}\n\n.slider-item:hover {\n  border-color: #FF0000;\n}\n\n._hidden {\n  display: none;\n}\n\n.no-results-container {\n  font-size: 24px;\n  text-align: center;\n}\n',""])},function(e,t,n){var i=n(22);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,r);i.locals&&(e.exports=i.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,'.search-box-container {\n  text-align: center;\n}\n\n.search-box {\n  font-size: 16px;\n  line-height: 24px;\n  width: 60%;\n  border: 1px solid #CCCCCC;\n  box-shadow: inset 0 1px 2px #EEEEEE;\n  padding: 2px 50px;\n  border-radius: 2px;\n  color: #111111;\n  margin: 13px 0;\n  box-sizing: border-box;\n}\n\n.search-box:focus {\n  border-color: #1C62B9;\n}\n\n.search-box-icon::before {\n  content: "\\f002";\n  padding: 0 15px;\n  position: absolute;\n  display: inline-block;\n  font-family: FontAwesome, sans-serif;\n  line-height: 20px;\n  bottom: 0;\n}\n\n.search-box-icon {\n  position: relative;\n}\n',""])},function(e,t,n){"use strict";n.r(t);class i{constructor(e){this.apiConfig=Object.assign({apiUrl:"https://www.googleapis.com/youtube/v3"},e)}async getVideos(e,t){const n=await this.requestVideos(e,t),r=await this.requestStatistics(n.map(e=>e.id.videoId));return i.formVideosWithDescription(n,r)}hasMore(){return!!this.nextPageToken}async requestVideos(e,t=15){e&&(this.query=e);const n=await fetch(`${this.apiConfig.apiUrl}/search?key=${this.apiConfig.apiKey}&type=video&part=snippet${this.nextPageToken?`&pageToken=${this.nextPageToken}`:""}&maxResults=${t}&q=${this.query}`),i=await n.json();return this.nextPageToken=i.nextPageToken,i.items}async requestStatistics(e){if(!e||0===e.length)return[];const t=await fetch(`${this.apiConfig.apiUrl}/videos?key=${this.apiConfig.apiKey}&id=${e.join()}&part=snippet,statistics`);return(await t.json()).items}static formVideosWithDescription(e,t){return e.map(e=>{const n=t.find(t=>t.id===e.id.videoId);return{id:e.id.videoId,title:e.snippet.title,preview:e.snippet.thumbnails.medium.url,description:e.snippet.description,author:e.snippet.channelTitle,uploadDate:new Date(e.snippet.publishedAt),viewCount:n?n.statistics.viewCount:0}})}}n(2),n(3),n(4),n(19);const r=e=>new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().split("T")[0];class o{constructor(){this.showNextHandler=null}render(e){this.sliderContainerEl||this.renderSliderContainer(),this.searchResultsContainerEl&&document.body.removeChild(this.searchResultsContainerEl),e.length>0?this.renderSearchResultsContainer(e):this.renderNoSearchResultsContainer()}renderNoSearchResultsContainer(){this.searchResultsContainerEl=document.createElement("div"),this.searchResultsContainerEl.classList.add("no-results-container"),this.searchResultsContainerEl.innerHTML="<h3>No results found</h3>",document.body.insertBefore(this.searchResultsContainerEl,this.sliderContainerEl),this.sliderContainerEl.classList.add("_hidden")}renderSearchResultsContainer(e){this.totalAmount=0,this.currentIndex=0,this.searchResultsContainerEl=document.createElement("div"),this.searchResultsContainerEl.classList.add("video-items-container"),this.videoItemsEl=document.createElement("ul"),this.videoItemsEl.classList.add("video-items"),this.videoItemsEl.addEventListener("transitionend",e=>e.target.classList.remove("_animate")),this.videoItemsEl.addEventListener("mousedown",this.lock.bind(this)),this.videoItemsEl.addEventListener("touchstart",this.lock.bind(this)),this.videoItemsEl.addEventListener("mousemove",this.grab.bind(this)),this.videoItemsEl.addEventListener("touchmove",this.grab.bind(this)),this.videoItemsEl.addEventListener("mouseup",e=>this.move.call(this,e)),this.videoItemsEl.addEventListener("touchend",e=>this.move.call(this,e)),this.searchResultsContainerEl.appendChild(this.videoItemsEl),document.body.insertBefore(this.searchResultsContainerEl,this.sliderContainerEl),this.addVideos(e),this.sliderContainerEl.classList.remove("_hidden"),this.handleSliderItems()}getShownAmount(){return+window.getComputedStyle(this.videoItemsEl).getPropertyValue("--shown-amount")}renderSliderContainer(){this.sliderContainerEl=document.createElement("div"),this.sliderContainerEl.classList.add("slider-container"),this.sliderContainerEl.innerHTML='<ul class="slider">\n        <li class="slider-item _start _hidden">\n            <span class="slider-item__popup">1</span>\n        </li>\n        <li class="slider-item _prev _hidden">\n            <span class="slider-item__popup"></span>\n        </li>\n        <li class="slider-item _current _active"></li>\n        <li class="slider-item _next">\n            <span class="slider-item__popup"></span>\n        </li>\n    </ul>',document.body.appendChild(this.sliderContainerEl),this.nextSliderItemEl=this.sliderContainerEl.querySelector("._next"),this.prevSliderItemEl=this.sliderContainerEl.querySelector("._prev"),this.startSliderItemEl=this.sliderContainerEl.querySelector("._start"),this.currentSliderItemEl=this.sliderContainerEl.querySelector("._current"),this.nextSliderItemEl.addEventListener("click",()=>this.showNextHandler()),this.prevSliderItemEl.addEventListener("click",this.showNext.bind(this,!1)),this.startSliderItemEl.addEventListener("click",this.goToStart.bind(this)),[this.nextSliderItemEl,this.prevSliderItemEl,this.startSliderItemEl].forEach(e=>{e.addEventListener("mousedown",()=>e.classList.add("show")),e.addEventListener("mouseleave",()=>e.classList.remove("show")),e.addEventListener("mouseup",()=>e.classList.remove("show"))})}goToStart(){this.currentIndex=0,this.swipeElements()}showNext(e,t){e&&t&&this.addVideos(t);const n=this.getShownAmount();e?this.currentIndex+=n:this.currentIndex=n>this.currentIndex?0:this.currentIndex-n,this.swipeElements()}static unify(e){return e.changedTouches?e.changedTouches[0]:e}lock(e){"a"!==e.target.tagName.toLowerCase()&&(this.x0=o.unify(e).clientX,this.videoItemsEl.classList.add("_grabbed"))}async move(e){if(void 0===this.x0)return;const t=Math.sign(o.unify(e).clientX-this.x0);t<0?await this.showNextHandler():t>0&&this.showNext(!1),this.videoItemsEl.style.setProperty("--offset","0px"),this.x0=void 0,this.videoItemsEl.classList.remove("_grabbed")}grab(e){if(void 0===this.x0)return;e.preventDefault();const t=parseInt(window.getComputedStyle(this.videoItemsEl).getPropertyValue("--offset"),10);this.videoItemsEl.style.setProperty("--offset",e.changedTouches?`${this.x0-e.changedTouches[0].clientX}px`:`${t-e.movementX}px`)}swipeElements(){this.videoItemsEl.classList.add("_animate"),this.videoItemsEl.style.setProperty("--current-index",this.currentIndex),this.handleSliderItems()}handleSliderItems(){const e=this.getShownAmount();0===this.currentIndex?(this.startSliderItemEl.classList.add("_hidden"),this.prevSliderItemEl.classList.add("_hidden"),this.nextSliderItemEl.classList.remove("_hidden")):this.currentIndex/e>1?(this.startSliderItemEl.classList.remove("_hidden"),this.prevSliderItemEl.classList.remove("_hidden"),this.nextSliderItemEl.classList.remove("_hidden")):this.currentIndex/e<=1&&(this.startSliderItemEl.classList.remove("_hidden"),this.prevSliderItemEl.classList.add("_hidden"),this.nextSliderItemEl.classList.remove("_hidden")),this.totalAmount<this.currentIndex+e&&this.nextSliderItemEl.classList.add("_hidden");const t=Math.ceil(this.currentIndex/e)+1;this.currentSliderItemEl.innerText=t,this.prevSliderItemEl.querySelector(".slider-item__popup").innerText=t-1,this.nextSliderItemEl.querySelector(".slider-item__popup").innerText=t+1}hasEnoughVideos(){return this.currentIndex+2*this.getShownAmount()-1<this.totalAmount}addVideos(e){e.forEach(e=>{const t=document.createElement("li");t.classList.add("video-item"),t.innerHTML=`\n      <div class="video-box" style="background: url('${e.preview}') no-repeat;">\n        <div class="video-title">\n          <a href="https://www.youtube.com/watch?v=${e.id}" target="_blank">${e.title}</a>\n        </div>\n        <div class="video-details">\n          <p class="video-details-item fa-user">${e.author}</p>\n          <p class="video-details-item fa-calendar">${r(e.uploadDate)}</p>\n          <p class="video-details-item fa-eye">${e.viewCount}</p>\n          <p class="video-description">${e.description}</p>\n        </div>\n      </div>`,this.videoItemsEl.appendChild(t)}),this.totalAmount+=+e.length,this.videoItemsEl.style.setProperty("--total-amount",this.totalAmount)}}var s=o;n(21);var a=class{constructor(){this.searchQueryHandler=null}render(){const e=document.createElement("div");e.classList.add("search-box-container");const t=document.createElement("label");t.setAttribute("for","search-box"),t.classList.add("search-box-icon");const n=document.createElement("input");n.id="search-box",n.setAttribute("type","text"),n.setAttribute("placeholder","Input your query"),n.classList.add("search-box"),n.addEventListener("change",this.searchQueryHandler),e.appendChild(t),e.appendChild(n),document.body.appendChild(e)}};(new class{constructor(){this.apiConfig={apiKey:"AIzaSyA8CXSEl48673TYjQMExyteyEn7TyjUzWc"}}start(){this.searchView=new a,this.searchView.searchQueryHandler=this.searchQueryHandler.bind(this),this.searchView.render()}async searchQueryHandler(e){this.youtubeModel||(this.youtubeModel=new i(this.apiConfig)),this.contentView||(this.contentView=new s);const t=await this.youtubeModel.getVideos(e.target.value);this.contentView.showNextHandler=this.showNextHandler.bind(this),this.contentView.render(t)}async showNextHandler(){let e;!this.contentView.hasEnoughVideos()&&this.youtubeModel.hasMore()&&(e=await this.youtubeModel.getVideos()),this.contentView.showNext(!0,e)}}).start()}]);