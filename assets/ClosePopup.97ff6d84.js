import{r as T,B as ge,o as R,C as E,D as Q,E as Oe,G as O,h as S,g as P,H as K,i as me,I as A,J as ie,c as p,w as k,K as Ke,L as pt,M as Z,a as Ie,S as bt,d as Ne,k as V,l as G,n as w,f as H,m as J,N as yt,y as ee,F as ce,q as de,v as _e,t as Te,z as ze,O as pe,P as Be,Q as $e,R as wt,U as He,V as xt,W as St,X as qt,Y as be,Z as kt,_ as Ct,$ as _t,a0 as Tt,a1 as zt}from"./index.76f61720.js";import{h as Bt,a as N,b as Ue,v as $t,g as X,c as Ht}from"./vm.440b95f8.js";import{s as Ge,g as Ze,a as Et,b as Pt,c as Y}from"./scroll.fcbb5052.js";import{Q as Ee}from"./QImg.c6621114.js";import{Q as W,c as Lt,n as Xe,g as At}from"./QBtn.b892082e.js";import{Q as he}from"./QIcon.524aa249.js";import{Q as te}from"./QIntersection.ad234df5.js";import{Q as Qt}from"./QSeparator.d666fcbf.js";import{c as Ye}from"./config.49e097b6.js";import{u as Je,a as et}from"./use-dark.792f1a66.js";import{c as Vt}from"./selection.87d2f439.js";import{r as Pe,a as Wt,b as Mt,u as Ft}from"./use-id.3a8fcc61.js";import{a as Dt}from"./use-quasar.f02eb226.js";function Rt(){const e=T(!ge.value);return e.value===!1&&R(()=>{e.value=!0}),{isHydrated:e}}const tt=typeof ResizeObserver!="undefined",Le=tt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ne=E({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let n=null,t,o={width:-1,height:-1};function a(c){c===!0||e.debounce===0||e.debounce==="0"?i():n===null&&(n=setTimeout(i,e.debounce))}function i(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:c,offsetHeight:s}=t;(c!==o.width||s!==o.height)&&(o={width:c,height:s},l("resize",o))}}const{proxy:f}=P();if(f.trigger=a,tt===!0){let c;const s=v=>{t=f.$el.parentNode,t?(c=new ResizeObserver(a),c.observe(t),i()):v!==!0&&O(()=>{s(!0)})};return R(()=>{s()}),Q(()=>{n!==null&&clearTimeout(n),c!==void 0&&(c.disconnect!==void 0?c.disconnect():t&&c.unobserve(t))}),Oe}else{let v=function(){n!==null&&(clearTimeout(n),n=null),s!==void 0&&(s.removeEventListener!==void 0&&s.removeEventListener("resize",a,K.passive),s=void 0)},b=function(){v(),t&&t.contentDocument&&(s=t.contentDocument.defaultView,s.addEventListener("resize",a,K.passive),i())};const{isHydrated:c}=Rt();let s;return R(()=>{O(()=>{t=f.$el,t&&b()})}),Q(v),()=>{if(c.value===!0)return S("object",{class:"q--avoid-card-border",style:Le.style,tabindex:-1,type:"text/html",data:Le.url,"aria-hidden":"true",onLoad:b})}}}}),uo=E({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=P(),o=me(ie,A);if(o===A)return console.error("QHeader needs to be child of QLayout"),A;const a=T(parseInt(e.heightHint,10)),i=T(!0),f=p(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||t.platform.is.ios&&o.isContainer.value===!0),c=p(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return i.value===!0?a.value:0;const u=a.value-o.scroll.value.position;return u>0?u:0}),s=p(()=>e.modelValue!==!0||f.value===!0&&i.value!==!0),v=p(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),b=p(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=p(()=>{const u=o.rows.value.top,m={};return u[0]==="l"&&o.left.space===!0&&(m[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),u[2]==="r"&&o.right.space===!0&&(m[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),m});function r(u,m){o.update("header",u,m)}function g(u,m){u.value!==m&&(u.value=m)}function C({height:u}){g(a,u),r("size",u)}function _(u){v.value===!0&&g(i,!0),n("focusin",u)}k(()=>e.modelValue,u=>{r("space",u),g(i,!0),o.animate()}),k(c,u=>{r("offset",u)}),k(()=>e.reveal,u=>{u===!1&&g(i,e.modelValue)}),k(i,u=>{o.animate(),n("reveal",u)}),k(o.scroll,u=>{e.reveal===!0&&g(i,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const B={};return o.instances.header=B,e.modelValue===!0&&r("size",a.value),r("space",e.modelValue),r("offset",c.value),Q(()=>{o.instances.header===B&&(o.instances.header=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const u=Bt(l.default,[]);return e.elevated===!0&&u.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(S(ne,{debounce:0,onResize:C})),S("header",{class:b.value,style:x.value,onFocusin:_},u)}}}),co=E({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:n}}=P(),t=me(ie,A);if(t===A)return console.error("QPageContainer needs to be child of QLayout"),A;Ke(pt,!0);const o=p(()=>{const a={};return t.header.space===!0&&(a.paddingTop=`${t.header.size}px`),t.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(a.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),a});return()=>S("div",{class:"q-page-container",style:o.value},N(l.default))}}),fo=E({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=P(),o=me(ie,A);if(o===A)return console.error("QFooter needs to be child of QLayout"),A;const a=T(parseInt(e.heightHint,10)),i=T(!0),f=T(ge.value===!0||o.isContainer.value===!0?0:window.innerHeight),c=p(()=>e.reveal===!0||o.view.value.indexOf("F")!==-1||t.platform.is.ios&&o.isContainer.value===!0),s=p(()=>o.isContainer.value===!0?o.containerHeight.value:f.value),v=p(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return i.value===!0?a.value:0;const h=o.scroll.value.position+s.value+a.value-o.height.value;return h>0?h:0}),b=p(()=>e.modelValue!==!0||c.value===!0&&i.value!==!0),x=p(()=>e.modelValue===!0&&b.value===!0&&e.reveal===!0),r=p(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(b.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),g=p(()=>{const h=o.rows.value.bottom,q={};return h[0]==="l"&&o.left.space===!0&&(q[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),h[2]==="r"&&o.right.space===!0&&(q[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),q});function C(h,q){o.update("footer",h,q)}function _(h,q){h.value!==q&&(h.value=q)}function B({height:h}){_(a,h),C("size",h)}function u(){if(e.reveal!==!0)return;const{direction:h,position:q,inflectionPoint:z}=o.scroll.value;_(i,h==="up"||q-z<100||o.height.value-s.value-q-a.value<300)}function m(h){x.value===!0&&_(i,!0),n("focusin",h)}k(()=>e.modelValue,h=>{C("space",h),_(i,!0),o.animate()}),k(v,h=>{C("offset",h)}),k(()=>e.reveal,h=>{h===!1&&_(i,e.modelValue)}),k(i,h=>{o.animate(),n("reveal",h)}),k([a,o.scroll,o.height],u),k(()=>t.screen.height,h=>{o.isContainer.value!==!0&&_(f,h)});const d={};return o.instances.footer=d,e.modelValue===!0&&C("size",a.value),C("space",e.modelValue),C("offset",v.value),Q(()=>{o.instances.footer===d&&(o.instances.footer=void 0,C("size",0),C("offset",0),C("space",!1))}),()=>{const h=Ue(l.default,[S(ne,{debounce:0,onResize:B})]);return e.elevated===!0&&h.push(S("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),S("footer",{class:r.value,style:g.value,onFocusin:m},h)}}});const{passive:Ae}=K,jt=["both","horizontal","vertical"];var Ot=E({name:"QScrollObserver",props:{axis:{type:String,validator:e=>jt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Ge},emits:["scroll"],setup(e,{emit:l}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,a;k(()=>e.scrollTarget,()=>{c(),f()});function i(){t!==null&&t();const b=Math.max(0,Et(o)),x=Pt(o),r={top:b-n.position.top,left:x-n.position.left};if(e.axis==="vertical"&&r.top===0||e.axis==="horizontal"&&r.left===0)return;const g=Math.abs(r.top)>=Math.abs(r.left)?r.top<0?"up":"down":r.left<0?"left":"right";n.position={top:b,left:x},n.directionChanged=n.direction!==g,n.delta=r,n.directionChanged===!0&&(n.direction=g,n.inflectionPoint=n.position),l("scroll",{...n})}function f(){o=Ze(a,e.scrollTarget),o.addEventListener("scroll",s,Ae),s(!0)}function c(){o!==void 0&&(o.removeEventListener("scroll",s,Ae),o=void 0)}function s(b){if(b===!0||e.debounce===0||e.debounce==="0")i();else if(t===null){const[x,r]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];t=()=>{r(x),t=null}}}const{proxy:v}=P();return k(()=>v.$q.lang.rtl,i),R(()=>{a=v.$el.parentNode,f()}),Q(()=>{t!==null&&t(),c()}),Object.assign(v,{trigger:s,getPosition:()=>n}),Oe}}),ho=E({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=P(),o=T(null),a=T(t.screen.height),i=T(e.container===!0?0:t.screen.width),f=T({position:0,direction:"down",inflectionPoint:0}),c=T(0),s=T(ge.value===!0?0:Y()),v=p(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=p(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),x=p(()=>s.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),r=p(()=>s.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function g(d){if(e.container===!0||document.qScrollPrevented!==!0){const h={position:d.position.top,direction:d.direction,directionChanged:d.directionChanged,inflectionPoint:d.inflectionPoint.top,delta:d.delta.top};f.value=h,e.onScroll!==void 0&&n("scroll",h)}}function C(d){const{height:h,width:q}=d;let z=!1;a.value!==h&&(z=!0,a.value=h,e.onScrollHeight!==void 0&&n("scrollHeight",h),B()),i.value!==q&&(z=!0,i.value=q),z===!0&&e.onResize!==void 0&&n("resize",d)}function _({height:d}){c.value!==d&&(c.value=d,B())}function B(){if(e.container===!0){const d=a.value>c.value?Y():0;s.value!==d&&(s.value=d)}}let u=null;const m={instances:{},view:p(()=>e.view),isContainer:p(()=>e.container),rootRef:o,height:a,containerHeight:c,scrollbarWidth:s,totalWidth:p(()=>i.value+s.value),rows:p(()=>{const d=e.view.toLowerCase().split(" ");return{top:d[0].split(""),middle:d[1].split(""),bottom:d[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:f,animate(){u!==null?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{u=null,document.body.classList.remove("q-body--layout-animate")},155)},update(d,h,q){m[d][h]=q}};if(Ke(ie,m),Y()>0){let q=function(){d=null,h.classList.remove("hide-scrollbar")},z=function(){if(d===null){if(h.scrollHeight>t.screen.height)return;h.classList.add("hide-scrollbar")}else clearTimeout(d);d=setTimeout(q,300)},$=function(L){d!==null&&L==="remove"&&(clearTimeout(d),q()),window[`${L}EventListener`]("resize",z)},d=null;const h=document.body;k(()=>e.container!==!0?"add":"remove",$),e.container!==!0&&$("add"),Ie(()=>{$("remove")})}return()=>{const d=Ue(l.default,[S(Ot,{onScroll:g}),S(ne,{onResize:C})]),h=S("div",{class:v.value,style:b.value,ref:e.container===!0?void 0:o,tabindex:-1},d);return e.container===!0?S("div",{class:"q-layout-container overflow-hidden",ref:o},[S(ne,{onResize:_}),S("div",{class:"absolute-full",style:x.value},[S("div",{class:"scroll",style:r.value},[h])])]):h}}});function Kt(){return bt.lt.md}const It={class:"contact-bg-overlay column justify-center text-center q-px-xl"},Nt={class:"row q-col-gutter-md q-mt-lg justify-center"},Ut={class:"col-auto"},Gt={class:"col-auto"},Zt={class:"col-auto"},Xt=Ne({__name:"ContactSection",setup(e){function l(){return Kt()?"1000px":"500px"}return(n,t)=>(V(),G("div",null,[w("div",{class:"contact-bg",style:yt(`height: ${l()}`)},[w("div",It,[t[2]||(t[2]=w("div",{class:"text-primary text-uppercase text-bold q-my-lg"},"Kontakt",-1)),H(te,{once:"",transition:"slide-down",class:"title-font text-h3 text-white"},{default:J(()=>t[0]||(t[0]=[ee(" Wir freuen uns auf Ihre Kontaktaufnahme!\xA0 ")])),_:1}),H(te,{once:"",transition:"slide-down",class:"q-mt-lg"},{default:J(()=>t[1]||(t[1]=[ee(" Sollten Sie Fragen zu Ihrem Aufenthalt, unseren Angeboten oder den M\xF6glichkeiten f\xFCr Tagungen und Events haben, z\xF6gern Sie bitte nicht, uns zu kontaktieren. Unser freundliches Team steht Ihnen gerne zur Verf\xFCgung.\xA0 ")])),_:1}),w("div",Nt,[w("div",Ut,[H(W,{square:"",color:"primary",unelevated:"",label:"Zimmer buchen","icon-right":"arrow_right_alt",to:"/zimmer-page"})]),w("div",Gt,[H(W,{square:"",color:"white",unelevated:"",outline:"",label:"Anrufen",to:"/kontakt-page"})]),w("div",Zt,[H(W,{square:"",color:"white",outline:"",unelevated:"",label:"Nachriht senden","icon-right":"arrow_right_alt",to:"/kontakt-page"})])])])],4)]))}}),Yt=[{title:"Zimmer",header:"/pics/headers/zimmer-page.jpg",route:"/zimmer-page",heading:"Wohlf\xFChlen und Entspannen inmitten der Schweizer Alpen ",routeText:"Zimmer",children:Ye.map(e=>({title:e.title,route:`/zimmer-single/${e.id}`}))},{title:"Kulinarik",header:"/pics/headers/kulinarik-page.jpg",route:"/kulinarik-page",heading:"Kulinarik",routeText:"Kulinarik",children:[{title:"Restaurant",route:"/restaurant-page",header:"/pics/headers/restaurant-page.jpg",heading:"Unser Restaurant",routeText:"Kulinarik / Restaurant"},{title:"Bar & Lounge",route:"/bar-lounge-page",header:"/pics/headers/lounge-page.jpg",heading:"Bar & Lounge",routeText:"Kulinarik / Bar & Lounge"},{title:"Stubli",route:"/stubli-page",header:"/pics/headers/stubli-page.jpg",heading:"Unser St\xFCbli",routeText:"Kulinarik / St\xFCbli"},{title:"Terrasse",route:"/terasse-page",header:"/pics/headers/terasse-page.jpg",heading:"Unser Terasse",routeText:"Kulinarik / Terasse"}]},{title:"Wellness",header:"/pics/headers/wellness-page.jpg",route:"/wellness-page",heading:"Wellnes & Spa",routeText:"Wellness",children:[{title:"Sauna",route:"/sauna-page",header:"/pics/headers/sauna-page.png",heading:"Sauna",routeText:"Wellness & Spa / Sauna"},{title:"Whirlpool",route:"/whirlpool-page",header:"/pics/headers/whirlpool-page.jpg",heading:"Whirlpool",routeText:"Wellness & Spa / Whirlpool"},{title:"Private Spa",route:"/private-spa-page",header:"/pics/headers/spa-page.jpg",heading:"Private Spa",routeText:"Wellness & Spa / Private Spa"}]},{title:"Seminarraum",route:"/seminarraum-page",header:"/pics/headers/seminnauraum-page.jpg",heading:"Der Seminarraum im Caschu Alp",routeText:"Seminarraum"},{title:"Events",route:"/events-page",header:"/pics/headers/seminnauraum-page.jpg",heading:"Events",routeText:"Events"},{title:"Stoos",route:"/stoos-page",header:"/pics/headers/stoose-page.jpg",heading:"Stoos",routeText:"Stoos"},{title:"Auszeihnungen",route:"/ausgezeichnet-page",header:"/pics/headers/auszeihnungen-page.jpg",heading:"Auszeihnungen",routeText:"Auszeihnungen"}],Jt={class:"row q-col-gutter-md text-black q-pa-xl"},en={class:"col-12 col-md"},tn={class:"row q-col-gutter-md"},nn={class:"col-12 col-md-3"},on={class:"q-py-lg q-gutter-y-md"},ln={class:"row q-col-gutter-sm items-center"},an={class:"col-auto"},rn={class:"row q-col-gutter-sm items-center"},sn={class:"col-auto"},un={class:"col-12 col-md-2"},cn={class:"q-py-lg q-gutter-y-md"},dn={class:"col-12 col-md-2"},fn={class:"q-py-lg q-gutter-y-md"},hn={class:"q-px-xl"},vn={class:"row justify-between justify-center text-black items-center"},gn={class:"col-auto"},vo=Ne({__name:"LayoutFooter",setup(e){const l=[{icon:"fab fa-facebook",link:"https://www.facebook.com"},{icon:"fab fa-instagram",link:"https://www.instagram.com"},{icon:"fab fa-twitter",link:"https://www.twitter.com"},{icon:"fab fa-youtube",link:"https://www.youtube.com"}];function n(a){window.open(a,"_blank")}const t=Yt.map(a=>({label:a.title,link:a.route})),o=Ye.map(a=>({label:a.title,link:`/zimmer-single/${a.id}`}));return(a,i)=>(V(),G("div",null,[w("div",null,[H(Xt)]),i[7]||(i[7]=w("div",{style:{height:"100px"},class:"bg-primary"},null,-1)),w("div",Jt,[w("div",en,[w("div",null,[H(Ee,{width:"200px",src:"/layout/logo-gold.png"})]),i[0]||(i[0]=w("div",{class:"q-py-lg"}," Ein romantisches Hotel auf dem Stoos ob Schwyz\xA0 ",-1)),w("div",tn,[(V(),G(ce,null,de(l,f=>w("div",{class:"col-auto",key:f.link},[H(W,{flat:"",round:"",icon:f.icon,color:"primary",onClick:c=>n(f.link)},null,8,["icon","onClick"])])),64))])]),w("div",nn,[i[3]||(i[3]=w("div",{class:"text-uppercase text-subtitle2 text-bold"},"BUCHEN",-1)),w("div",on,[w("div",ln,[w("div",an,[H(he,{color:"primary",name:"o_mail",size:"20px"})]),i[1]||(i[1]=w("div",{class:"col-auto"},"info@caschu-alp.ch\xA0",-1))]),w("div",rn,[w("div",sn,[H(he,{color:"primary",name:"o_phone",size:"20px"})]),i[2]||(i[2]=w("div",{class:"col-auto"},"044 216 80 00\xA0",-1))])])]),w("div",un,[i[4]||(i[4]=w("div",{class:"text-uppercase text-subtitle2 text-bold"},"links",-1)),w("div",cn,[(V(!0),G(ce,null,de(_e(t),(f,c)=>(V(),Te(te,{once:"",transition:"slide-down",key:c,class:"col-auto cursor-pointer",onClick:s=>n(f.link)},{default:J(()=>[ee(ze(f.label)+"\xA0 ",1)]),_:2},1032,["onClick"]))),128))])]),w("div",dn,[i[5]||(i[5]=w("div",{class:"text-uppercase text-subtitle2 text-bold"},"zimmer",-1)),w("div",fn,[(V(!0),G(ce,null,de(_e(o),(f,c)=>(V(),Te(te,{once:"",transition:"slide-down",key:c,class:"col-auto cursor-pointer",onClick:s=>n(f.link)},{default:J(()=>[ee(ze(f.label)+"\xA0 ",1)]),_:2},1032,["onClick"]))),128))])])]),w("div",hn,[H(Qt,{spaced:""}),w("div",vn,[i[6]||(i[6]=w("div",{class:"col-auto"},"\xA9 2023 MC . All rights reserved",-1)),w("div",gn,[H(Ee,{width:"200px",src:"/layout/logo-stripe.png"})])])])]))}}),mn=["ul","ol"];var go=E({name:"QList",props:{...Je,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const n=P(),t=et(e,n.proxy.$q),o=p(()=>mn.includes(e.tag)?null:"list"),a=p(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(t.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>S(e.tag,{class:a.value,role:o.value},N(l.default))}}),pn=E({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:l}){const n=p(()=>{const t=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(o=>e[o]===!0).map(o=>`q-btn-group--${o}`).join(" ");return`q-btn-group row no-wrap${t.length!==0?" "+t:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>S("div",{class:n.value},N(l.default))}});const bn={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},yn={...bn,contextMenu:Boolean};function wn({showing:e,avoidEmit:l,configureAnchorEl:n}){const{props:t,proxy:o,emit:a}=P(),i=T(null);let f=null;function c(r){return i.value===null?!1:r===void 0||r.touches===void 0||r.touches.length<=1}const s={};n===void 0&&(Object.assign(s,{hide(r){o.hide(r)},toggle(r){o.toggle(r),r.qAnchorHandled=!0},toggleKey(r){pe(r,13)===!0&&s.toggle(r)},contextClick(r){o.hide(r),Be(r),O(()=>{o.show(r),r.qAnchorHandled=!0})},prevent:Be,mobileTouch(r){if(s.mobileCleanup(r),c(r)!==!0)return;o.hide(r),i.value.classList.add("non-selectable");const g=r.target;$e(s,"anchor",[[g,"touchmove","mobileCleanup","passive"],[g,"touchend","mobileCleanup","passive"],[g,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,o.show(r),r.qAnchorHandled=!0},300)},mobileCleanup(r){i.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&r!==void 0&&Vt()}}),n=function(r=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let g;r===!0?o.$q.platform.is.mobile===!0?g=[[i.value,"touchstart","mobileTouch","passive"]]:g=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:g=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],$e(s,"anchor",g)});function v(){wt(s,"anchor")}function b(r){for(i.value=r;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function x(){if(t.target===!1||t.target===""||o.$el.parentNode===null)i.value=null;else if(t.target===!0)b(o.$el.parentNode);else{let r=t.target;if(typeof t.target=="string")try{r=document.querySelector(t.target)}catch{r=void 0}r!=null?(i.value=r.$el||r,n()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return k(()=>t.contextMenu,r=>{i.value!==null&&(v(),n(r))}),k(()=>t.target,()=>{i.value!==null&&v(),x()}),k(()=>t.noParentEvent,r=>{i.value!==null&&(r===!0?v():n())}),R(()=>{x(),l!==!0&&t.modelValue===!0&&i.value===null&&a("update:modelValue",!1)}),Q(()=>{f!==null&&clearTimeout(f),v()}),{anchorEl:i,canShow:c,anchorEvents:s}}function xn(e,l){const n=T(null);let t;function o(f,c){const s=`${c!==void 0?"add":"remove"}EventListener`,v=c!==void 0?c:t;f!==window&&f[s]("scroll",v,K.passive),window[s]("scroll",v,K.passive),t=c}function a(){n.value!==null&&(o(n.value),n.value=null)}const i=k(()=>e.noParentEvent,()=>{n.value!==null&&(a(),l())});return Q(i),{localScrollTarget:n,unconfigureScrollTarget:a,changeScrollEvent:o}}const Sn={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},qn=["beforeShow","show","beforeHide","hide"];function kn({showing:e,canShow:l,hideOnRouteChange:n,handleShow:t,handleHide:o,processOnMount:a}){const i=P(),{props:f,emit:c,proxy:s}=i;let v;function b(u){e.value===!0?g(u):x(u)}function x(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||l!==void 0&&l(u)!==!0)return;const m=f["onUpdate:modelValue"]!==void 0;m===!0&&(c("update:modelValue",!0),v=u,O(()=>{v===u&&(v=void 0)})),(f.modelValue===null||m===!1)&&r(u)}function r(u){e.value!==!0&&(e.value=!0,c("beforeShow",u),t!==void 0?t(u):c("show",u))}function g(u){if(f.disable===!0)return;const m=f["onUpdate:modelValue"]!==void 0;m===!0&&(c("update:modelValue",!1),v=u,O(()=>{v===u&&(v=void 0)})),(f.modelValue===null||m===!1)&&C(u)}function C(u){e.value!==!1&&(e.value=!1,c("beforeHide",u),o!==void 0?o(u):c("hide",u))}function _(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&c("update:modelValue",!1):u===!0!==e.value&&(u===!0?r:C)(v)}k(()=>f.modelValue,_),n!==void 0&&$t(i)===!0&&k(()=>s.$route.fullPath,()=>{n.value===!0&&e.value===!0&&g()}),a===!0&&R(()=>{_(f.modelValue)});const B={show:x,hide:g,toggle:b};return Object.assign(s,B),B}let Cn=1,_n=document.body;function Tn(e,l){const n=document.createElement("div");if(n.id=l!==void 0?`q-portal--${l}--${Cn++}`:e,He.globalNodes!==void 0){const t=He.globalNodes.class;t!==void 0&&(n.className=t)}return _n.appendChild(n),n}function zn(e){e.remove()}const j=[];function Bn(e){return j.find(l=>l.contentEl!==null&&l.contentEl.contains(e))}function nt(e,l){do{if(e.$options.name==="QMenu"){if(e.hide(l),e.$props.separateClosePopup===!0)return X(e)}else if(e.__qPortal===!0){const n=X(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(l),n):e}e=X(e)}while(e!=null)}function $n(e,l,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=nt(e,l);continue}e.hide(l)}e=X(e)}}const Hn=E({name:"QPortal",setup(e,{slots:l}){return()=>l.default()}});function En(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Pn(e,l,n,t){const o=T(!1),a=T(!1);let i=null;const f={},c=t==="dialog"&&En(e);function s(b){if(b===!0){Pe(f),a.value=!0;return}a.value=!1,o.value===!1&&(c===!1&&i===null&&(i=Tn(!1,t)),o.value=!0,j.push(e.proxy),Wt(f))}function v(b){if(a.value=!1,b!==!0)return;Pe(f),o.value=!1;const x=j.indexOf(e.proxy);x!==-1&&j.splice(x,1),i!==null&&(zn(i),i=null)}return Ie(()=>{v(!0)}),e.proxy.__qPortal=!0,xt(e.proxy,"contentEl",()=>l.value),{showPortal:s,hidePortal:v,portalIsActive:o,portalIsAccessible:a,renderPortal:()=>c===!0?n():o.value===!0?[S(St,{to:i},S(Hn,n))]:void 0}}const ot={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ln(e,l=()=>{},n=()=>{}){return{transitionProps:p(()=>{const t=`q-transition--${e.transitionShow||l()}`,o=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${t}-enter-from`,enterActiveClass:`${t}-enter-active`,enterToClass:`${t}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:p(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function An(){let e;const l=P();function n(){e=void 0}return qt(n),Q(n),{removeTick:n,registerTick(t){e=t,O(()=>{e===t&&(Ht(l)===!1&&e(),e=void 0)})}}}const M=[];let I;function Qn(e){I=e.keyCode===27}function Vn(){I===!0&&(I=!1)}function Wn(e){I===!0&&(I=!1,pe(e,27)===!0&&M[M.length-1](e))}function lt(e){window[e]("keydown",Qn),window[e]("blur",Vn),window[e]("keyup",Wn),I=!1}function Mn(e){be.is.desktop===!0&&(M.push(e),M.length===1&&lt("addEventListener"))}function Qe(e){const l=M.indexOf(e);l!==-1&&(M.splice(l,1),M.length===0&&lt("removeEventListener"))}const F=[];function it(e){F[F.length-1](e)}function Fn(e){be.is.desktop===!0&&(F.push(e),F.length===1&&document.body.addEventListener("focusin",it))}function Dn(e){const l=F.indexOf(e);l!==-1&&(F.splice(l,1),F.length===0&&document.body.removeEventListener("focusin",it))}const{notPassiveCapture:oe}=K,D=[];function le(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let n=j.length-1;for(;n>=0;){const t=j[n].$;if(t.type.name==="QTooltip"){n--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;n--}for(let t=D.length-1;t>=0;t--){const o=D[t];if((o.anchorEl.value===null||o.anchorEl.value.contains(l)===!1)&&(l===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(l)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Rn(e){D.push(e),D.length===1&&(document.addEventListener("mousedown",le,oe),document.addEventListener("touchstart",le,oe))}function Ve(e){const l=D.findIndex(n=>n===e);l!==-1&&(D.splice(l,1),D.length===0&&(document.removeEventListener("mousedown",le,oe),document.removeEventListener("touchstart",le,oe)))}let We,Me;function Fe(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function jn(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ve={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ve[`${e}#ltr`]=e,ve[`${e}#rtl`]=e});function De(e,l){const n=e.split(" ");return{vertical:n[0],horizontal:ve[`${n[1]}#${l===!0?"rtl":"ltr"}`]}}function On(e,l){let{top:n,left:t,right:o,bottom:a,width:i,height:f}=e.getBoundingClientRect();return l!==void 0&&(n-=l[1],t-=l[0],a+=l[1],o+=l[0],i+=l[0],f+=l[1]),{top:n,bottom:a,height:f,left:t,right:o,width:i,middle:t+(o-t)/2,center:n+(a-n)/2}}function Kn(e,l,n){let{top:t,left:o}=e.getBoundingClientRect();return t+=l.top,o+=l.left,n!==void 0&&(t+=n[1],o+=n[0]),{top:t,bottom:t+1,height:1,left:o,right:o+1,width:1,middle:o,center:t}}function In(e,l){return{top:0,center:l/2,bottom:l,left:0,middle:e/2,right:e}}function Re(e,l,n,t){return{top:e[n.vertical]-l[t.vertical],left:e[n.horizontal]-l[t.horizontal]}}function at(e,l=0){if(e.targetEl===null||e.anchorEl===null||l>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{at(e,l+1)},10);return}const{targetEl:n,offset:t,anchorEl:o,anchorOrigin:a,selfOrigin:i,absoluteOffset:f,fit:c,cover:s,maxHeight:v,maxWidth:b}=e;if(be.is.ios===!0&&window.visualViewport!==void 0){const q=document.body.style,{offsetLeft:z,offsetTop:$}=window.visualViewport;z!==We&&(q.setProperty("--q-pe-left",z+"px"),We=z),$!==Me&&(q.setProperty("--q-pe-top",$+"px"),Me=$)}const{scrollLeft:x,scrollTop:r}=n,g=f===void 0?On(o,s===!0?[0,0]:t):Kn(o,f,t);Object.assign(n.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:b,maxHeight:v,visibility:"visible"});const{offsetWidth:C,offsetHeight:_}=n,{elWidth:B,elHeight:u}=c===!0||s===!0?{elWidth:Math.max(g.width,C),elHeight:s===!0?Math.max(g.height,_):_}:{elWidth:C,elHeight:_};let m={maxWidth:b,maxHeight:v};(c===!0||s===!0)&&(m.minWidth=g.width+"px",s===!0&&(m.minHeight=g.height+"px")),Object.assign(n.style,m);const d=In(B,u);let h=Re(g,d,a,i);if(f===void 0||t===void 0)fe(h,g,d,a,i);else{const{top:q,left:z}=h;fe(h,g,d,a,i);let $=!1;if(h.top!==q){$=!0;const L=2*t[1];g.center=g.top-=L,g.bottom-=L+2}if(h.left!==z){$=!0;const L=2*t[0];g.middle=g.left-=L,g.right-=L+2}$===!0&&(h=Re(g,d,a,i),fe(h,g,d,a,i))}m={top:h.top+"px",left:h.left+"px"},h.maxHeight!==void 0&&(m.maxHeight=h.maxHeight+"px",g.height>h.maxHeight&&(m.minHeight=m.maxHeight)),h.maxWidth!==void 0&&(m.maxWidth=h.maxWidth+"px",g.width>h.maxWidth&&(m.minWidth=m.maxWidth)),Object.assign(n.style,m),n.scrollTop!==r&&(n.scrollTop=r),n.scrollLeft!==x&&(n.scrollLeft=x)}function fe(e,l,n,t,o){const a=n.bottom,i=n.right,f=Y(),c=window.innerHeight-f,s=document.body.clientWidth;if(e.top<0||e.top+a>c)if(o.vertical==="center")e.top=l[t.vertical]>c/2?Math.max(0,c-a):0,e.maxHeight=Math.min(a,c);else if(l[t.vertical]>c/2){const v=Math.min(c,t.vertical==="center"?l.center:t.vertical===o.vertical?l.bottom:l.top);e.maxHeight=Math.min(a,v),e.top=Math.max(0,v-a)}else e.top=Math.max(0,t.vertical==="center"?l.center:t.vertical===o.vertical?l.top:l.bottom),e.maxHeight=Math.min(a,c-e.top);if(e.left<0||e.left+i>s)if(e.maxWidth=Math.min(i,s),o.horizontal==="middle")e.left=l[t.horizontal]>s/2?Math.max(0,s-i):0;else if(l[t.horizontal]>s/2){const v=Math.min(s,t.horizontal==="middle"?l.middle:t.horizontal===o.horizontal?l.right:l.left);e.maxWidth=Math.min(i,v),e.left=Math.max(0,v-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?l.middle:t.horizontal===o.horizontal?l.left:l.right),e.maxWidth=Math.min(i,s-e.left)}var Nn=E({name:"QMenu",inheritAttrs:!1,props:{...yn,...Sn,...Je,...ot,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Fe},self:{type:String,validator:Fe},offset:{type:Array,validator:jn},scrollTarget:Ge,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...qn,"click","escapeKey"],setup(e,{slots:l,emit:n,attrs:t}){let o=null,a,i,f;const c=P(),{proxy:s}=c,{$q:v}=s,b=T(null),x=T(!1),r=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),g=et(e,v),{registerTick:C,removeTick:_}=An(),{registerTimeout:B}=Dt(),{transitionProps:u,transitionStyle:m}=Ln(e),{localScrollTarget:d,changeScrollEvent:h,unconfigureScrollTarget:q}=xn(e,ke),{anchorEl:z,canShow:$}=wn({showing:x}),{hide:L}=kn({showing:x,canShow:$,handleShow:dt,handleHide:ft,hideOnRouteChange:r,processOnMount:!0}),{showPortal:ye,hidePortal:we,renderPortal:rt}=Pn(c,b,vt,"menu"),ae={anchorEl:z,innerRef:b,onClickOutside(y){if(e.persistent!==!0&&x.value===!0)return L(y),(y.type==="touchstart"||y.target.classList.contains("q-dialog__backdrop"))&&_t(y),!0}},xe=p(()=>De(e.anchor||(e.cover===!0?"center middle":"bottom start"),v.lang.rtl)),st=p(()=>e.cover===!0?xe.value:De(e.self||"top start",v.lang.rtl)),ut=p(()=>(e.square===!0?" q-menu--square":"")+(g.value===!0?" q-menu--dark q-dark":"")),ct=p(()=>e.autoClose===!0?{onClick:ht}:{}),Se=p(()=>x.value===!0&&e.persistent!==!0);k(Se,y=>{y===!0?(Mn(se),Rn(ae)):(Qe(se),Ve(ae))});function re(){Mt(()=>{let y=b.value;y&&y.contains(document.activeElement)!==!0&&(y=y.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||y.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||y.querySelector("[autofocus], [data-autofocus]")||y,y.focus({preventScroll:!0}))})}function dt(y){if(o=e.noRefocus===!1?document.activeElement:null,Fn(Ce),ye(),ke(),a=void 0,y!==void 0&&(e.touchPosition||e.contextMenu)){const ue=kt(y);if(ue.left!==void 0){const{top:gt,left:mt}=z.value.getBoundingClientRect();a={left:ue.left-mt,top:ue.top-gt}}}i===void 0&&(i=k(()=>v.screen.width+"|"+v.screen.height+"|"+e.self+"|"+e.anchor+"|"+v.lang.rtl,U)),e.noFocus!==!0&&document.activeElement.blur(),C(()=>{U(),e.noFocus!==!0&&re()}),B(()=>{v.platform.is.ios===!0&&(f=e.autoClose,b.value.click()),U(),ye(!0),n("show",y)},e.transitionDuration)}function ft(y){_(),we(),qe(!0),o!==null&&(y===void 0||y.qClickOutside!==!0)&&(((y&&y.type.indexOf("key")===0?o.closest('[tabindex]:not([tabindex^="-"])'):void 0)||o).focus(),o=null),B(()=>{we(!0),n("hide",y)},e.transitionDuration)}function qe(y){a=void 0,i!==void 0&&(i(),i=void 0),(y===!0||x.value===!0)&&(Dn(Ce),q(),Ve(ae),Qe(se)),y!==!0&&(o=null)}function ke(){(z.value!==null||e.scrollTarget!==void 0)&&(d.value=Ze(z.value,e.scrollTarget),h(d.value,U))}function ht(y){f!==!0?(nt(s,y),n("click",y)):f=!1}function Ce(y){Se.value===!0&&e.noFocus!==!0&&Lt(b.value,y.target)!==!0&&re()}function se(y){n("escapeKey"),L(y)}function U(){at({targetEl:b.value,offset:e.offset,anchorEl:z.value,anchorOrigin:xe.value,selfOrigin:st.value,absoluteOffset:a,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function vt(){return S(Ct,u.value,()=>x.value===!0?S("div",{role:"menu",...t,ref:b,tabindex:-1,class:["q-menu q-position-engine scroll"+ut.value,t.class],style:[t.style,m.value],...ct.value},N(l.default)):null)}return Q(qe),Object.assign(s,{focus:re,updatePosition:U}),rt}});const Un=Object.keys(Xe);function Gn(e){return Un.reduce((l,n)=>{const t=e[n];return t!==void 0&&(l[n]=t),l},{})}var mo=E({name:"QBtnDropdown",props:{...Xe,...ot,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:l,emit:n}){const{proxy:t}=P(),o=T(e.modelValue),a=T(null),i=Ft(),f=p(()=>{const d={"aria-expanded":o.value===!0?"true":"false","aria-haspopup":"true","aria-controls":i.value,"aria-label":e.toggleAriaLabel||t.$q.lang.label[o.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(d["aria-disabled"]="true"),d}),c=p(()=>"q-btn-dropdown__arrow"+(o.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),s=p(()=>At(e)),v=p(()=>Gn(e));k(()=>e.modelValue,d=>{a.value!==null&&a.value[d?"show":"hide"]()}),k(()=>e.split,m);function b(d){o.value=!0,n("beforeShow",d)}function x(d){n("show",d),n("update:modelValue",!0)}function r(d){o.value=!1,n("beforeHide",d)}function g(d){n("hide",d),n("update:modelValue",!1)}function C(d){n("click",d)}function _(d){Tt(d),m(),n("click",d)}function B(d){a.value!==null&&a.value.toggle(d)}function u(d){a.value!==null&&a.value.show(d)}function m(d){a.value!==null&&a.value.hide(d)}return Object.assign(t,{show:u,hide:m,toggle:B}),R(()=>{e.modelValue===!0&&u()}),()=>{const d=[S(he,{class:c.value,name:e.dropdownIcon||t.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&d.push(S(Nn,{ref:a,id:i.value,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:b,onShow:x,onBeforeHide:r,onHide:g},l.default)),e.split===!1?S(W,{class:"q-btn-dropdown q-btn-dropdown--simple",...v.value,...f.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:C},{default:()=>N(l.label,[]).concat(d),loading:l.loading}):S(pn,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...s.value,glossy:e.glossy,stretch:e.stretch},()=>[S(W,{class:"q-btn-dropdown--current",...v.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:_},{default:l.label,loading:l.loading}),S(W,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...f.value,...s.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>d)])}}}),po=E({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const n=p(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>S("div",{class:n.value,role:"toolbar"},N(l.default))}});function je(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const l=parseInt(e,10);return isNaN(l)?0:l}var bo=zt({name:"close-popup",beforeMount(e,{value:l}){const n={depth:je(l),handler(t){n.depth!==0&&setTimeout(()=>{const o=Bn(e);o!==void 0&&$n(o,t,n.depth)})},handlerKey(t){pe(t,13)===!0&&n.handler(t)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:l,oldValue:n}){l!==n&&(e.__qclosepopup.depth=je(l))},beforeUnmount(e){const l=e.__qclosepopup;e.removeEventListener("click",l.handler),e.removeEventListener("keyup",l.handlerKey),delete e.__qclosepopup}});export{bo as C,po as Q,vo as _,go as a,mo as b,ho as c,uo as d,co as e,fo as f,Yt as m};
