import{c as se,S as ce,r as s,g as ve,T as de,a as i,aB as he,w as fe,U as me,V as be,o as Se,h as c,q as ze,N as w,aC as B,aD as M,_ as I,L as N,a8 as pe,s as F,t as U,u as S,v,Q as _e,F as J,M as ge,O as ye,aE as qe,P as Pe,J as we}from"./index-BA2WbrAd.js";import{Q as H,a as Me}from"./QScrollObserver-BZMWZn3e.js";import{T as k}from"./TouchPan-BTz0YLpl.js";import{c as P,Q as j,a as Te}from"./QItem-DqCSo7du.js";import{S as Ce}from"./GetMap-eJm4tlm0.js";import{C as De}from"./ClosePopup-CuUEWXBu.js";const x=["vertical","horizontal"],T={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},R={prevent:!0,mouse:!0,mouseAllDir:!0},E=a=>a>=250?50:Math.ceil(a/5),Ee=se({name:"QScrollArea",props:{...ce,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(a,{slots:u,emit:z}){const n=s(!1),d=s(!1),p=s(!1),r={vertical:s(0),horizontal:s(0)},e={vertical:{ref:s(null),position:s(0),size:s(0)},horizontal:{ref:s(null),position:s(0),size:s(0)}},{proxy:h}=ve(),W=de(a,h.$q);let _=null,C;const f=s(null),X=i(()=>"q-scrollarea"+(W.value===!0?" q-scrollarea--dark":""));e.vertical.percentage=i(()=>{const t=e.vertical.size.value-r.vertical.value;if(t<=0)return 0;const l=P(e.vertical.position.value/t,0,1);return Math.round(l*1e4)/1e4}),e.vertical.thumbHidden=i(()=>(a.visible===null?p.value:a.visible)!==!0&&n.value===!1&&d.value===!1||e.vertical.size.value<=r.vertical.value+1),e.vertical.thumbStart=i(()=>e.vertical.percentage.value*(r.vertical.value-e.vertical.thumbSize.value)),e.vertical.thumbSize=i(()=>Math.round(P(r.vertical.value*r.vertical.value/e.vertical.size.value,E(r.vertical.value),r.vertical.value))),e.vertical.style=i(()=>({...a.thumbStyle,...a.verticalThumbStyle,top:`${e.vertical.thumbStart.value}px`,height:`${e.vertical.thumbSize.value}px`})),e.vertical.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.vertical.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(e.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),e.horizontal.percentage=i(()=>{const t=e.horizontal.size.value-r.horizontal.value;if(t<=0)return 0;const l=P(Math.abs(e.horizontal.position.value)/t,0,1);return Math.round(l*1e4)/1e4}),e.horizontal.thumbHidden=i(()=>(a.visible===null?p.value:a.visible)!==!0&&n.value===!1&&d.value===!1||e.horizontal.size.value<=r.horizontal.value+1),e.horizontal.thumbStart=i(()=>e.horizontal.percentage.value*(r.horizontal.value-e.horizontal.thumbSize.value)),e.horizontal.thumbSize=i(()=>Math.round(P(r.horizontal.value*r.horizontal.value/e.horizontal.size.value,E(r.horizontal.value),r.horizontal.value))),e.horizontal.style=i(()=>({...a.thumbStyle,...a.horizontalThumbStyle,[h.$q.lang.rtl===!0?"right":"left"]:`${e.horizontal.thumbStart.value}px`,width:`${e.horizontal.thumbSize.value}px`})),e.horizontal.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),e.horizontal.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(e.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const Y=i(()=>e.vertical.thumbHidden.value===!0&&e.horizontal.thumbHidden.value===!0?a.contentStyle:a.contentActiveStyle),G=[[k,t=>{V(t,"vertical")},void 0,{vertical:!0,...R}]],K=[[k,t=>{V(t,"horizontal")},void 0,{horizontal:!0,...R}]];function D(){const t={};return x.forEach(l=>{const o=e[l];t[l+"Position"]=o.position.value,t[l+"Percentage"]=o.percentage.value,t[l+"Size"]=o.size.value,t[l+"ContainerSize"]=r[l].value}),t}const Q=he(()=>{const t=D();t.ref=h,z("scroll",t)},0);function $(t,l,o){if(x.includes(t)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(t==="vertical"?B:M)(f.value,l,o)}function Z({height:t,width:l}){let o=!1;r.vertical.value!==t&&(r.vertical.value=t,o=!0),r.horizontal.value!==l&&(r.horizontal.value=l,o=!0),o===!0&&g()}function ee({position:t}){let l=!1;e.vertical.position.value!==t.top&&(e.vertical.position.value=t.top,l=!0),e.horizontal.position.value!==t.left&&(e.horizontal.position.value=t.left,l=!0),l===!0&&g()}function te({height:t,width:l}){e.horizontal.size.value!==l&&(e.horizontal.size.value=l,g()),e.vertical.size.value!==t&&(e.vertical.size.value=t,g())}function V(t,l){const o=e[l];if(t.isFirst===!0){if(o.thumbHidden.value===!0)return;C=o.position.value,d.value=!0}else if(d.value!==!0)return;t.isFinal===!0&&(d.value=!1);const b=T[l],q=r[l].value,ie=(o.size.value-q)/(q-o.thumbSize.value),ne=t.distance[b.dist],ue=C+(t.direction===b.dir?1:-1)*ne*ie;A(ue,l)}function O(t,l){const o=e[l];if(o.thumbHidden.value!==!0){const b=t[T[l].offset];if(b<o.thumbStart.value||b>o.thumbStart.value+o.thumbSize.value){const q=b-o.thumbSize.value/2;A(q/r[l].value*o.size.value,l)}o.ref.value!==null&&o.ref.value.dispatchEvent(new MouseEvent(t.type,t))}}function le(t){O(t,"vertical")}function ae(t){O(t,"horizontal")}function g(){n.value=!0,_!==null&&clearTimeout(_),_=setTimeout(()=>{_=null,n.value=!1},a.delay),a.onScroll!==void 0&&Q()}function A(t,l){f.value[T[l].scroll]=t}let m=null;function re(){m!==null&&clearTimeout(m),m=setTimeout(()=>{m=null,p.value=!0},h.$q.platform.is.ios?50:0)}function oe(){m!==null&&(clearTimeout(m),m=null),p.value=!1}let y=null;return fe(()=>h.$q.lang.rtl,t=>{f.value!==null&&M(f.value,Math.abs(e.horizontal.position.value)*(t===!0?-1:1))}),me(()=>{y={top:e.vertical.position.value,left:e.horizontal.position.value}}),be(()=>{if(y===null)return;const t=f.value;t!==null&&(M(t,y.left),B(t,y.top))}),Se(Q.cancel),Object.assign(h,{getScrollTarget:()=>f.value,getScroll:D,getScrollPosition:()=>({top:e.vertical.position.value,left:e.horizontal.position.value}),getScrollPercentage:()=>({top:e.vertical.percentage.value,left:e.horizontal.percentage.value}),setScrollPosition:$,setScrollPercentage(t,l,o){$(t,l*(e[t].size.value-r[t].value)*(t==="horizontal"&&h.$q.lang.rtl===!0?-1:1),o)}}),()=>c("div",{class:X.value,onMouseenter:re,onMouseleave:oe},[c("div",{ref:f,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:a.tabindex!==void 0?a.tabindex:void 0},[c("div",{class:"q-scrollarea__content absolute",style:Y.value},ze(u.default,[c(H,{debounce:0,onResize:te})])),c(Me,{axis:"both",onScroll:ee})]),c(H,{debounce:0,onResize:Z}),c("div",{class:e.vertical.barClass.value,style:[a.barStyle,a.verticalBarStyle],"aria-hidden":"true",onMousedown:le}),c("div",{class:e.horizontal.barClass.value,style:[a.barStyle,a.horizontalBarStyle],"aria-hidden":"true",onMousedown:ae}),w(c("div",{ref:e.vertical.ref,class:e.vertical.thumbClass.value,style:e.vertical.style.value,"aria-hidden":"true"}),G),w(c("div",{ref:e.horizontal.ref,class:e.horizontal.thumbClass.value,style:e.horizontal.style.value,"aria-hidden":"true"}),K)])}}),Qe={__name:"ShrinkDrawerBtn",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(a,{expose:u}){u();const n={miniState:N(a,"modelValue")};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}};function $e(a,u,z,n,d,p){return w((F(),U(Te,{clickable:""},{default:S(()=>[v(j,{avatar:"",class:"text-purple q-gutter-md"},{default:S(()=>[v(_e,{name:"mdi-minus"})]),_:1}),v(j,null,{default:S(()=>[v(J,{color:"red",icon:"mdi-minus",label:"缩小侧栏",onClick:u[0]||(u[0]=r=>n.miniState=!0)})]),_:1})]),_:1})),[[pe]])}const Le=I(Qe,[["render",$e],["__file","ShrinkDrawerBtn.vue"]]),Ie=async a=>{let u=new L.supermap.StopQueryParameters({keyWord:a,returnPosition:!0});return(await new L.supermap.TrafficTransferAnalystService(Ce).queryStop(u)).result},Ve={__name:"SelectDialog",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(a,{expose:u}){u();const n={secondDialog:N(a,"modelValue")};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},Oe=we("div",{class:"text-h6"},"请选择一个起点",-1);function Ae(a,u,z,n,d,p){return F(),U(Pe,{modelValue:n.secondDialog,"onUpdate:modelValue":u[0]||(u[0]=r=>n.secondDialog=r),persistent:"","transition-show":"scale","transition-hide":"scale"},{default:S(()=>[v(ge,{class:"bg-teal text-white",style:{width:"300px"}},{default:S(()=>[v(ye,null,{default:S(()=>[Oe]),_:1}),v(qe,{align:"right",class:"bg-white text-teal"},{default:S(()=>[w(v(J,{color:"secondary",label:"确定"},null,512),[[De]])]),_:1})]),_:1})]),_:1},8,["modelValue"])}const Ne=I(Ve,[["render",Ae],["__file","SelectDialog.vue"]]);export{Ee as Q,Ne as S,Le as a,Ie as g};