function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(t,n){void 0===n&&(n={});var r=document.querySelector(t),i=document.querySelector(t+" tbody tr"),l=document.createElement("div");l.setAttribute("id","podtable-container"),r.parentNode.insertBefore(l,r),l.appendChild(r);var o=[],d=[],c={},a={},s=[0],u=window.innerWidth,h=this;function f(e){var t=document.createElement("tr"),n=document.createElement("td"),r=document.createElement("div");n.colSpan=d.length,r.classList.add("child-grid-row"),t.classList.add("child");for(var i=0;i<e.length;i++)r.append(e[i]);return n.append(r),t.append(n),t}function m(e){var t=document.createElement("div");t.classList.add("child-grid-col");var n=document.createElement("div"),r=document.createElement("div");return n.innerHTML=e.dataset.gridColname,r.innerHTML=e.innerHTML,t.append(n),t.append(r),t}function v(e){var t=e.target.parentElement;if(t.classList.contains("has-child"))t.classList.remove("has-child"),t.nextElementSibling.remove();else{t.classList.add("has-child");var n=[];for(var r in t.children)void 0!==t.children[r].classList&&t.children[r].classList.contains("hidden")&&n.push(m(t.children[r]));t.after(f(n))}}function g(){o.length>0?r.classList.add("show-toggle"):(document.querySelectorAll(".has-child").forEach(function(e){e.classList.remove("has-child")}),r.classList.remove("show-toggle"),document.querySelector(".main-toggle").classList.remove("expanded"))}function p(){var e=document.querySelectorAll(".child");if(e.length>0){for(var t=[],n=0;n<e.length;n++)t.push(e[n].previousElementSibling);for(var r=0;r<t.length;r++){var i=[];for(var l in t[r].children)void 0!==t[r].children[l].classList&&t[r].children[l].classList.contains("hidden")&&i.push(m(t[r].children[l]));t[r].nextElementSibling.remove(),o.length>0&&t[r].after(f(i)),g()}}}function y(e,t){a["breakOffset"+e]=t-l.clientWidth-1,c["bp"+e]=i.clientWidth,o.push(e),document.querySelectorAll('[data-cell-index="'+e+'"]').forEach(function(e){e.classList.add("hidden")}),b(!1,e)}function L(e){document.querySelectorAll('[data-cell-index="'+e+'"]').forEach(function(e){e.classList.remove("hidden")}),delete c["bp"+e],delete a["breakOffset"+e],o.pop(),b(!0,e)}function b(e,t){if(n.event){if(!Array.isArray(n.forCell)||n.forCell.length<0)throw TypeError("forCell must be of type array and not empty");h.isCurrentShown=e,h.current=t,n.forCell.includes(t)&&n.method(h)}}if(h.isCurrentShown=!1,function(e){if(e.hasOwnProperty("keepCell")){if(!Array.isArray(e.keepCell))throw TypeError("keep cell must be of type array");s=[].concat(s,e.keepCell)}}(n),function(e){document.querySelector(e+" thead tr > th:last-child").classList.add("main-toggle"),document.querySelectorAll(e+" tbody tr:not(tr.child) > td:last-child").forEach(function(e){e.classList.add("toggle")})}(t),function(e){for(var t=document.querySelectorAll(e+" tr"),n=0;n<i.children.length;n++)d.push(n);for(var r=0;r<t.length;r++)for(var l=t[r].children,o=0;o<l.length;o++)l[o].setAttribute("data-cell-index",l[o].cellIndex);s.push(d.length-1),d.reverse()}(t),function(){o=[];for(var e=window.innerWidth,t=d.length,n=0;n<t;n++)i.clientWidth>l.clientWidth&&(o.includes(d[n])||s.includes(d[n])||y(d[n],e)),u=e;g()}(),function(){for(var e=document.querySelectorAll(".toggle"),t=0;t<e.length;t++)e[t].addEventListener("click",function(e){v(e)});document.querySelector(".main-toggle").addEventListener("click",function(e){!function(e){var t=document.querySelectorAll(".toggle"),n=e.currentTarget;if(n.classList.contains("expanded")){for(var r=0;r<t.length;r++)t[r].parentElement.classList.contains("has-child")&&t[r].click();n.classList.remove("expanded")}else{for(var i=0;i<t.length;i++)t[i].parentElement.classList.contains("has-child")||t[i].click();n.classList.add("expanded")}}(e)})}(),window.addEventListener("resize",function(){return function(){var e=window.innerWidth;if(e<u){for(var t=0;t<d.length;t++)i.clientWidth>l.clientWidth&&(o.includes(d[t])||s.includes(d[t])||(y(d[t],e),p()));g()}else if(e>u&&o.length>0){for(var n=o.length,r=0;r<n;r++){var h=o.slice(-1)[0];e-a["breakOffset"+h]>c["bp"+h]&&(L(h),p())}g()}u=e}()}),function(t){var n=document.querySelector(t+" tbody");function l(e){e.lastElementChild.classList.add("toggle"),e.lastElementChild.addEventListener("click",function(e){return v(e)});for(var t=0;t<e.children.length;t++)e.children[t].setAttribute("data-cell-index",e.children[t].cellIndex)}new MutationObserver(function(t,n){for(var d,c=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))){r&&(t=r);var i=0;return function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(t);!(d=c()).done;){var a=d.value;"childList"===a.type&&1===a.addedNodes.length?"TR"!=a.addedNodes[0].tagName||a.addedNodes[0].classList.contains("child")||l(a.addedNodes[0]):"childList"===a.type&&1===a.removedNodes.length&&"TR"==a.removedNodes[0].tagName&&!a.removedNodes[0].classList.contains("child")&&a.removedNodes[0].classList.contains("has-child")&&a.nextSibling.remove()}!function(){for(var e=0;e<o.length;e++)document.querySelectorAll('[data-cell-index="'+o[e]+'"]').forEach(function(e){e.classList.add("hidden")})}(),i=document.querySelector(r.id+" tbody tr")}).observe(n,{childList:!0})}(t),n.event)return h}export{t as Podtable};
//# sourceMappingURL=podtable.esm.js.map