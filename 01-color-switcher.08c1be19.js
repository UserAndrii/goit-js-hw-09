let t=null;const e={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};e.start.addEventListener("click",(function(){t=setInterval((()=>{e.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.start.disabled=!0,e.stop.disabled=!1})),e.stop.addEventListener("click",(function(){clearInterval(t),e.start.disabled=!1,e.stop.disabled=!0})),e.stop.disabled=!0;
//# sourceMappingURL=01-color-switcher.08c1be19.js.map