!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).Podtable=t()}(this,function(){function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return function(e,n){void 0===n&&(n={});var r,i,o=Object.assign({},{keepCell:[],priority:[],method:null},n),l=function(e){return"string"==typeof e||e instanceof String?document.querySelector(e):e}(e);!function(e){if(!(e instanceof HTMLTableElement)||null==e||null==e.tHead)throw new Error("Invalid HTMLTableElement");if(e.tHead.rows.length<=0||e.tHead.rows[0].cells.length<0)throw new Error("Invalid tHead HTMLTableRowElement");if(e.tBodies.length<=0||e.tBodies.length>1)throw new Error("Table should have only one TBODY");u(e),h()}(l);var a=i.clientWidth,s=[],d=[],c=this;function u(e){r=e.tBodies[0].rows.length<=0?e.tHead.rows[0]:e.tBodies[0].rows[0]}function h(){(i=document.createElement("div")).setAttribute("id","podtable-container"),l.parentNode.insertBefore(i,l),i.appendChild(l)}function f(e){var t=document.createElement("tr"),n=document.createElement("td"),r=document.createElement("div");n.colSpan=d.length,r.classList.add("child-grid-row"),t.classList.add("child");for(var i=0;i<e.length;i++)r.append(e[i]);return n.append(r),t.append(n),t}function v(e){var t=document.createElement("div");t.classList.add("child-grid-col");var n=document.createElement("div"),r=document.createElement("div");return n.innerHTML=l.tHead.rows[0].cells[e.cellIndex].innerHTML,r.innerHTML=e.innerHTML,t.append(n),t.append(r),t}function m(e){if(!(s.length<=0)){var t=e.currentTarget.parentElement;if(t.classList.contains("has-child"))t.classList.remove("has-child"),t.nextElementSibling.remove();else{t.classList.add("has-child");for(var n=[],r=0;r<t.cells.length;r++)t.cells[r].classList.contains("hidden")&&n.push(v(t.cells[r]));t.parentNode.insertBefore(f(n),t.nextSibling)}}}function g(){s.length>0?l.classList.add("show-toggle"):(document.querySelectorAll(".has-child").forEach(function(e){e.classList.remove("has-child")}),l.classList.remove("show-toggle"),l.tHead.rows[0].cells[l.tHead.rows[0].cells.length-1].classList.remove("expanded"))}function p(){var e=document.querySelectorAll("tr.child");if(e.length>0){for(var n,r=[],i=t(e);!(n=i()).done;)r.push(n.value.previousElementSibling);for(var o=0;o<r.length;o++){for(var l,a=[],d=t(r[o].cells);!(l=d()).done;){var c=l.value;c.classList.contains("hidden")&&a.push(v(c))}r[o].nextElementSibling.remove(),s.length>0&&r[o].after(f(a)),g()}}}function L(e,n){void 0===n&&(n=l),s.push(e);for(var r,i=t(n.rows);!(r=i()).done;){var o=r.value;o.classList.contains("child")||o.cells[e].classList.add("hidden")}T(e)}function y(){for(var e=0;e<s.length;e++)for(var n,r=t(l.rows);!(n=r()).done;){var i=n.value;i.classList.contains("child")||i.cells[s[e]].classList.remove("hidden")}s=[]}function b(){y();for(var e=0;e<d.length;e++)r.clientWidth>i.clientWidth&&(s.includes(d[e])||o.keepCell.includes(d[e])||(L(d[e]),p()));g()}function w(){b(),s.length<=0&&(T(-1),p())}function E(){s=[];for(var e=d.length,t=0;t<e;t++)r.clientWidth>i.clientWidth&&(s.includes(d[t])||o.keepCell.includes(d[t])||L(d[t]));g()}function T(e){c.current=e,o.method&&S()}function S(){if(o.method)try{o.method(c)}catch(e){console.error(e)}}if(function(){for(var e=[],t=0;t<r.cells.length;t++)e.push(t);if(d=Array.isArray(o.priority)&&o.priority.length>0?Array.from(new Set(o.priority.concat(e.reverse()))):e.reverse(),!Array.isArray(o.keepCell))throw TypeError("keepCell is not an array");o.keepCell.push(0,e.length-1)}(),function(e){e.tHead.rows[0].lastElementChild.classList.add("main-toggle");for(var n,r=t(e.tBodies[0].rows);!(n=r()).done;)n.value.lastElementChild.classList.add("toggle")}(l),function(){if(E(),function(){for(var e=document.querySelectorAll(".toggle"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){m(e)});document.querySelector(".main-toggle").addEventListener("click",function(e){!function(e){if(!(s.length<=0)){var t=document.querySelectorAll(".toggle"),n=e.currentTarget;if(n.classList.contains("expanded")){for(var r=0;r<t.length;r++)t[r].parentElement.classList.contains("has-child")&&t[r].click();n.classList.remove("expanded")}else{for(var i=0;i<t.length;i++)t[i].parentElement.classList.contains("has-child")||t[i].click();n.classList.add("expanded")}}}(e)})}(),!function(){var e=!1;try{new ResizeObserver(function(e){e[0].target.clientWidth!==a&&(b(),s.length<=0&&(T(-1),p())),a=e[0].target.clientWidth}).observe(i),e=!0}catch(t){e=!1}return e}())try{(function(e,t){var n={},r=document.createElement("object");function i(){this.contentDocument.defaultView.addEventListener("resize",t)}return n.start=function(){r.classList.add("pt-object"),r.type="text/html",r.data="about:blank",r.onload=i,e.appendChild(r)},n.stop=function(){r.contentDocument.defaultView.removeEventListener("resize",t),e.removeChild(r)},n})(i,w).start()}catch(e){window.addEventListener("resize",function(){return w()})}}(),function(e){var n=e.tBodies[0];new MutationObserver(function(n){for(var r,i=t(n);!(r=i()).done;){var o=r.value;"childList"===o.type&&1==o.addedNodes.length?"TR"!=o.addedNodes[0].tagName.toUpperCase()||o.addedNodes[0].classList.contains("child")||((l=o.addedNodes[0]).lastElementChild.classList.add("toggle"),l.lastElementChild.addEventListener("click",function(e){return m(e)}),S()):"childList"===o.type&&1==o.removedNodes.length&&"TR"==o.removedNodes[0].tagName.toUpperCase()&&!o.removedNodes[0].classList.contains("child")&&o.removedNodes[0].classList.contains("has-child")&&o.nextSibling.remove()}var l;u(e),y(),E()}).observe(n,{childList:!0})}(l),o.method)return c}});
//# sourceMappingURL=podtable.js.map
