!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON");function a(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r&&n({position:e,delay:t}),o({position:e,delay:t})}),t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(t){t.preventDefault();var n=Number(t.target.elements.delay.value),o=Number(t.target.elements.step.value),r=Number(t.target.elements.amount.value);(function(t,n,o){for(var r=t,u=1;u<=o;u+=1)a(u,r).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),{timeout:4e3})})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),{timeout:4e3})})),r+=n})(n,o,r),t.target.reset()}))}();
//# sourceMappingURL=03-promises.4ba46531.js.map
