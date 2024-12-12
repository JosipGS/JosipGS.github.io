import{v as ee,a1 as te,O as I,Q as ne,R as ae,a0 as X,Z as re,c as o,g as Y,C as ue,r as Q,D as le,h as C,_ as ie,x as oe,$ as T,P as se,H as ce}from"./index.76f61720.js";import{Q as N}from"./QIcon.524aa249.js";import{v as de,u as fe,d as ve,b as ge,Q as me}from"./vm.440b95f8.js";function Me(e){if(e===window)return{top:0,left:0};const{top:t,left:a}=e.getBoundingClientRect();return{top:t,left:a}}function je(e){return e===window?window.innerHeight:e.getBoundingClientRect().height}function be(e,t){const a=e.style;for(const n in t)a[n]=t[n]}function Ke(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=ee(e);if(t)return t.$el||t}function De(e,t){if(e==null||e.contains(t)===!0)return!0;for(let a=e.nextElementSibling;a!==null;a=a.nextElementSibling)if(a.contains(t))return!0;return!1}function he(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function H(e,t,a,n){a.modifiers.stop===!0&&X(e);const l=a.modifiers.color;let m=a.modifiers.center;m=m===!0||n===!0;const f=document.createElement("span"),d=document.createElement("span"),w=re(e),{left:h,top:v,width:x,height:u}=t.getBoundingClientRect(),y=Math.sqrt(x*x+u*u),g=y/2,k=`${(x-y)/2}px`,i=m?k:`${w.left-h-g}px`,b=`${(u-y)/2}px`,P=m?b:`${w.top-v-g}px`;d.className="q-ripple__inner",be(d,{height:`${y}px`,width:`${y}px`,transform:`translate3d(${i},${P},0) scale3d(.2,.2,1)`,opacity:0}),f.className=`q-ripple${l?" text-"+l:""}`,f.setAttribute("dir","ltr"),f.appendChild(d),t.appendChild(f);const S=()=>{f.remove(),clearTimeout(B)};a.abort.push(S);let B=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${k},${b},0) scale3d(1,1,1)`,d.style.opacity=.2,B=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,B=setTimeout(()=>{f.remove(),a.abort.splice(a.abort.indexOf(S),1)},275)},250)},50)}function z(e,{modifiers:t,value:a,arg:n}){const l=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||n,keyCodes:[].concat(l.keyCodes||13)}}var ye=te({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(l){n.enabled===!0&&l.qSkipRipple!==!0&&l.type===(n.modifiers.early===!0?"pointerdown":"click")&&H(l,e,n,l.qKeyEvent===!0)},keystart:he(l=>{n.enabled===!0&&l.qSkipRipple!==!0&&I(l,n.modifiers.keyCodes)===!0&&l.type===`key${n.modifiers.early===!0?"down":"up"}`&&H(l,e,n,!0)},300)};z(n,t),e.__qripple=n,ne(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&z(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),ae(t,"main"),delete e._qripple)}});const Z={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ke=Object.keys(Z),pe={align:{type:String,validator:e=>ke.includes(e)}};function qe(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${Z[t]}`})}function V(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function W(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function xe(e,t){for(const a in t){const n=t[a],l=e[a];if(typeof n=="string"){if(n!==l)return!1}else if(Array.isArray(l)===!1||l.length!==n.length||n.some((m,f)=>m!==l[f]))return!1}return!0}function F(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Ce(e,t){return Array.isArray(e)===!0?F(e,t):Array.isArray(t)===!0?F(t,e):e===t}function Le(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Ce(e[a],t[a])===!1)return!1;return!0}const G={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},Ie={...G,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Ee({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=Y(),{props:n,proxy:l,emit:m}=a,f=de(a),d=o(()=>n.disable!==!0&&n.href!==void 0),w=t===!0?o(()=>f===!0&&n.disable!==!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>f===!0&&d.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=o(()=>w.value===!0?P(n.to):null),v=o(()=>h.value!==null),x=o(()=>d.value===!0||v.value===!0),u=o(()=>n.type==="a"||x.value===!0?"a":n.tag||e||"div"),y=o(()=>d.value===!0?{href:n.href,target:n.target}:v.value===!0?{href:h.value.href,target:n.target}:{}),g=o(()=>{if(v.value===!1)return-1;const{matched:s}=h.value,{length:p}=s,L=s[p-1];if(L===void 0)return-1;const $=l.$route.matched;if($.length===0)return-1;const R=$.findIndex(W.bind(null,L));if(R!==-1)return R;const K=V(s[p-2]);return p>1&&V(L)===K&&$[$.length-1].path!==K?$.findIndex(W.bind(null,s[p-2])):R}),k=o(()=>v.value===!0&&g.value!==-1&&xe(l.$route.params,h.value.params)),i=o(()=>k.value===!0&&g.value===l.$route.matched.length-1&&Le(l.$route.params,h.value.params)),b=o(()=>v.value===!0?i.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function P(s){try{return l.$router.resolve(s)}catch{}return null}function S(s,{returnRouterError:p,to:L=n.to,replace:$=n.replace}={}){if(n.disable===!0)return s.preventDefault(),Promise.resolve(!1);if(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey||s.button!==void 0&&s.button!==0||n.target==="_blank")return Promise.resolve(!1);s.preventDefault();const R=l.$router[$===!0?"replace":"push"](L);return p===!0?R:R.then(()=>{}).catch(()=>{})}function B(s){if(v.value===!0){const p=L=>S(s,L);m("click",s,p),s.defaultPrevented!==!0&&p()}else m("click",s)}return{hasRouterLink:v,hasHrefLink:d,hasLink:x,linkTag:u,resolvedLink:h,linkIsActive:k,linkIsExactActive:i,linkClass:b,linkAttrs:y,getLink:P,navigateToRouterLink:S,navigateOnClick:B}}const U={none:0,xs:4,sm:8,md:16,lg:24,xl:32},$e={xs:8,sm:10,md:14,lg:20,xl:24},we=["button","submit","reset"],Re=/[^\s]\/[^\s]/,Se=["flat","outline","push","unelevated"];function J(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}function Qe(e){const t=J(e);return t!==void 0?{[t]:!0}:{}}const Be={...fe,...G,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Se.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...pe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Pe={...Be,round:Boolean};function Te(e){const t=ve(e,$e),a=qe(e),{hasRouterLink:n,hasLink:l,linkTag:m,linkAttrs:f,navigateOnClick:d}=Ee({fallbackTag:"button"}),w=o(()=>{const i=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},i,{padding:e.padding.split(/\s+/).map(b=>b in U?U[b]+"px":b).join(" "),minWidth:"0",minHeight:"0"}):i}),h=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=o(()=>e.disable!==!0&&e.loading!==!0),x=o(()=>v.value===!0?e.tabindex||0:-1),u=o(()=>J(e,"standard")),y=o(()=>{const i={tabindex:x.value};return l.value===!0?Object.assign(i,f.value):we.includes(e.type)===!0&&(i.type=e.type),m.value==="a"?(e.disable===!0?i["aria-disabled"]="true":i.href===void 0&&(i.role="button"),n.value!==!0&&Re.test(e.type)===!0&&(i.type=e.type)):e.disable===!0&&(i.disabled="",i["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(i,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),i}),g=o(()=>{let i;e.color!==void 0?e.flat===!0||e.outline===!0?i=`text-${e.textColor||e.color}`:i=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(i=`text-${e.textColor}`);const b=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${b}`+(i!==void 0?" "+i:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=o(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:g,style:w,innerClasses:k,attributes:y,hasLink:l,linkTag:m,navigateOnClick:d,isActionable:v}}const{passiveCapture:q}=ce;let _=null,A=null,O=null;var Ne=ue({name:"QBtn",props:{...Pe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=Y(),{classes:l,style:m,innerClasses:f,attributes:d,hasLink:w,linkTag:h,navigateOnClick:v,isActionable:x}=Te(e),u=Q(null),y=Q(null);let g=null,k,i=null;const b=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),P=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:w.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),S=o(()=>({center:e.round})),B=o(()=>{const r=Math.max(0,Math.min(100,e.percentage));return r>0?{transition:"transform 0.6s",transform:`translateX(${r-100}%)`}:{}}),s=o(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(x.value===!0){const r={onClick:L,onKeydown:$,onMousedown:K};if(n.$q.platform.has.touch===!0){const c=e.onTouchstart!==void 0?"":"Passive";r[`onTouchstart${c}`]=R}return r}return{onClick:T}}),p=o(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:m.value,...d.value,...s.value}));function L(r){if(u.value!==null){if(r!==void 0){if(r.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&u.value.contains(c)===!1&&c.contains(u.value)===!1){u.value.focus();const D=()=>{document.removeEventListener("keydown",T,!0),document.removeEventListener("keyup",D,q),u.value!==null&&u.value.removeEventListener("blur",D,q)};document.addEventListener("keydown",T,!0),document.addEventListener("keyup",D,q),u.value.addEventListener("blur",D,q)}}v(r)}}function $(r){u.value!==null&&(a("keydown",r),I(r,[13,32])===!0&&A!==u.value&&(A!==null&&M(),r.defaultPrevented!==!0&&(u.value.focus(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",E,!0),u.value.addEventListener("blur",E,q)),T(r)))}function R(r){u.value!==null&&(a("touchstart",r),r.defaultPrevented!==!0&&(_!==u.value&&(_!==null&&M(),_=u.value,g=r.target,g.addEventListener("touchcancel",E,q),g.addEventListener("touchend",E,q)),k=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,k=!1},200)))}function K(r){u.value!==null&&(r.qSkipRipple=k===!0,a("mousedown",r),r.defaultPrevented!==!0&&O!==u.value&&(O!==null&&M(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",E,q)))}function E(r){if(u.value!==null&&!(r!==void 0&&r.type==="blur"&&document.activeElement===u.value)){if(r!==void 0&&r.type==="keyup"){if(A===u.value&&I(r,[13,32])===!0){const c=new MouseEvent("click",r);c.qKeyEvent=!0,r.defaultPrevented===!0&&se(c),r.cancelBubble===!0&&X(c),u.value.dispatchEvent(c),T(r),r.qKeyEvent=!0}a("keyup",r)}M()}}function M(r){const c=y.value;r!==!0&&(_===u.value||O===u.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),_===u.value&&(g!==null&&(g.removeEventListener("touchcancel",E,q),g.removeEventListener("touchend",E,q)),_=g=null),O===u.value&&(document.removeEventListener("mouseup",E,q),O=null),A===u.value&&(document.removeEventListener("keyup",E,!0),u.value!==null&&u.value.removeEventListener("blur",E,q),A=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(r){T(r),r.qSkipRipple=!0}return le(()=>{M(!0)}),Object.assign(n,{click:r=>{x.value===!0&&L(r)}}),()=>{let r=[];e.icon!==void 0&&r.push(C(N,{name:e.icon,left:e.stack!==!0&&b.value===!0,role:"img"})),b.value===!0&&r.push(C("span",{class:"block"},[e.label])),r=ge(t.default,r),e.iconRight!==void 0&&e.round===!1&&r.push(C(N,{name:e.iconRight,right:e.stack!==!0&&b.value===!0,role:"img"}));const c=[C("span",{class:"q-focus-helper",ref:y})];return e.loading===!0&&e.percentage!==void 0&&c.push(C("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[C("span",{class:"q-btn__progress-indicator fit block",style:B.value})])),c.push(C("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+f.value},r)),e.loading!==null&&c.push(C(ie,{name:"q-transition--fade"},()=>e.loading===!0?[C("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[C(me)])]:null)),oe(C(h.value,p.value,c),[[ye,P.value,void 0,S.value]])}}});export{Ne as Q,Ke as a,be as b,De as c,Ee as d,pe as e,qe as f,Qe as g,je as h,Be as n,Me as o,Ie as u};
