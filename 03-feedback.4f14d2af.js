function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var r,i,o,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function x(e){return l=e,u=setTimeout(S,t),c?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function S(){var e=v();if(j(e))return T(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,o-(e-l)):n}(e))}function T(e){return u=void 0,g&&r?y(e):(r=i=void 0,a)}function h(){var e=v(),n=j(e);if(r=arguments,i=this,f=e,n){if(void 0===u)return x(f);if(s)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=i=u=void 0},h.flush=function(){return void 0===u?a:T(v())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};const y={},x={form:document.querySelector(".feedback-form"),email:document.querySelector("input"),textarea:document.querySelector("textarea")};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(x.textarea.value=e.message,x.email.value=e.email,y.email=e.email,y.message=e.message)}(),x.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===x.email.value||""===x.textarea.value)return alert("All fields must be filled!");e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(y)})),x.form.addEventListener("input",e(t)((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500));
//# sourceMappingURL=03-feedback.4f14d2af.js.map
