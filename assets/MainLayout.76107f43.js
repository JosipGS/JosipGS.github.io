import{m as w,b as $,a as z,Q as H,C as j,c as D,d as M,e as N,_ as V,f as F}from"./ClosePopup.97ff6d84.js";import{Q as P}from"./QImg.c6621114.js";import{Q}from"./QBtn.b892082e.js";import{Q as S,a as T,b as A}from"./QItem.3e4cf648.js";import{Q as c}from"./QIntersection.ad234df5.js";import{Q as E}from"./QParallax.7cc9247d.js";import{u as R}from"./use-quasar.f02eb226.js";import{d as L,u as Z,c as G,k as s,t as p,m as e,n,f as t,l as d,p as b,q as x,v as f,F as k,x as J,y as l,z as h,a6 as q,A as K}from"./index.76f61720.js";import"./vm.440b95f8.js";import"./scroll.fcbb5052.js";import"./QIcon.524aa249.js";import"./QSeparator.d666fcbf.js";import"./use-dark.792f1a66.js";import"./config.49e097b6.js";import"./selection.87d2f439.js";import"./use-id.3a8fcc61.js";const O={class:q("column justify-between fit")},U={class:"row justify-around items-center full-width"},W={key:0,class:"col-auto"},X={class:"col-auto"},Y={class:"row q-col-gutter-md"},I={key:0,class:"q-gutter-y-lg"},tt={class:"q-py-xl text-white row justify-center"},et={class:"col-md-8"},C="/pics/headers/main.jpg",ot=L({__name:"LayoutHeader",setup(B){const i=Z(),g=R(),{screen:m}=g,y=G(()=>m.lt.md);function _(){var r;const a=w.find(o=>o.route===i.path);return{bg:(r=a==null?void 0:a.header)!=null?r:C,heading:a==null?void 0:a.heading,route:a==null?void 0:a.routeText}}function v(){return _().bg===C}return(a,r)=>(s(),p(E,{src:_().bg,height:v()?650:430},{default:e(()=>[n("div",O,[t(H,{class:"q-pa-lg col-auto"},{default:e(()=>[n("div",U,[y.value?b("",!0):(s(),d("div",W,[n("div",{class:"cursor-pointer",onClick:r[0]||(r[0]=o=>a.$router.push("/"))},[t(P,{width:"100px",src:"/layout/logo-white.svg"})])])),n("div",X,[n("div",Y,[(s(!0),d(k,null,x(f(w),o=>(s(),d("div",{key:o.title,class:"col-auto"},[o.children?(s(),p($,{key:1,flat:"",to:o.route,split:"","no-caps":"",label:o.title,color:o.route===f(i).path||o.children.some(u=>u.route===f(i).path)?"primary":"white"},{default:e(()=>[t(z,null,{default:e(()=>[(s(!0),d(k,null,x(o.children,u=>J((s(),p(S,{key:u.route,clickable:"",to:u.route},{default:e(()=>[t(T,null,{default:e(()=>[t(A,null,{default:e(()=>[l(h(u.title),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"])),[[j]])),128))]),_:2},1024)]),_:2},1032,["to","label","color"])):(s(),p(Q,{key:0,rounded:"","no-caps":"",flat:"",label:o.title,to:o.route,color:o.route===f(i).path?"primary":"white"},null,8,["label","to","color"]))]))),128))])])])]),_:1}),v()?(s(),d("div",I,[t(c,{once:"",transition:"slide-down",class:"text-center",style:{"font-size":"16px"}},{default:e(()=>r[1]||(r[1]=[l(" Caschu Alp Boutique Design Hotel ")])),_:1}),t(c,{once:"",transition:"slide-down",class:q(`${y.value?"main-title-mobile":"main-title"} text-center title-font-generic`)},{default:e(()=>r[2]||(r[2]=[l(" Ein romantisches"),n("br",null,null,-1),l(" Hotel in der Schweiz. ")])),_:1},8,["class"]),t(c,{once:"",transition:"slide-down",class:"text-center"},{default:e(()=>[t(Q,{to:"/zimmer-page",label:"Zimmer buchen",square:"",color:"primary"})]),_:1})])):b("",!0),n("div",tt,[n("div",et,[t(c,{once:"",transition:"slide-down",class:"title-font-generic"},{default:e(()=>[l(h(_().heading),1)]),_:1}),t(c,{once:"",transition:"slide-down",class:"text-h6"},{default:e(()=>[l(h(_().route),1)]),_:1})])])])]),_:1},8,["src","height"]))}}),vt=L({name:"MainLayout",__name:"MainLayout",setup(B){return(i,g)=>{const m=K("router-view");return s(),p(D,{view:"lhh Lpr lff"},{default:e(()=>[t(M,null,{default:e(()=>[t(ot)]),_:1}),t(N,null,{default:e(()=>[t(m)]),_:1}),t(F,{class:"bg-transparent"},{default:e(()=>[t(V)]),_:1})]),_:1})}}});export{vt as default};