import{c as r}from"./vm.440b95f8.js";import{X as a,D as s,g as i,i as m,a3 as l}from"./index.76f61720.js";function T(){let e=null;const n=i();function t(){e!==null&&(clearTimeout(e),e=null)}return a(t),s(t),{removeTimeout:t,registerTimeout(u,o){t(),r(n)===!1&&(e=setTimeout(()=>{e=null,u()},o))}}}function v(){return m(l)}export{T as a,v as u};