function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l);var i=l("eWCmQ");function r(e,t){const n=Math.random()>.3;return new Promise(((o,l)=>n?o({position:e,newDelay:t}):l({position:e,newDelay:t})))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();let{delay:n}=t.target.elements;const{step:o}=t.target.elements,{amount:l}=t.target.elements;let s={delay:+n.value,step:+o.value,amount:+l.value};console.log(s);let a=0;for(let t=1;t<=s.amount;t+=1){a=t;const n=s.delay;let o=s.delay+=s.step;console.log("the delay is",o),r(a,n).then((({position:t,newDelay:n})=>{setTimeout((()=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)}),n)})).catch((({position:t,newDelay:n})=>{setTimeout((()=>{e(i).Notify.warning(`❌ Rejected promise ${t} in ${n}ms`)}),n)}))}}));
//# sourceMappingURL=03-promises.65d9f091.js.map
