import{N as y,v as u,G as i,O as b,o as r,p as d,j as t,a as v,q as h,d as g,B as V,P as k}from"./index-6a9948d3.js";const I={class:"flex items-stretch justify-start relative"},x={class:"inline-flex"},R=["accept"],B={key:0,class:"px-4 py-2 bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded-r"},S={class:"text-ellipsis line-clamp-1"},z={__name:"FormFilePicker",props:{modelValue:{type:[Object,File,Array],default:null},label:{type:String,default:null},icon:{type:String,default:y},accept:{type:String,default:null},color:{type:String,default:"info"},isRoundIcon:Boolean},emits:["update:modelValue"],setup(e,{emit:f}){const o=e,n=u(null),a=u(o.modelValue),s=i(()=>!o.isRoundIcon&&a.value),m=i(()=>o.modelValue);b(m,l=>{a.value=l,l||(n.value.input.value=null)});const p=l=>{const c=l.target.files||l.dataTransfer.files;a.value=c[0],f("update:modelValue",a.value)};return(l,c)=>(r(),d("div",I,[t("label",x,[v(g,{as:"a",class:h({"w-12 h-12":e.isRoundIcon,"rounded-r-none":s.value}),"icon-size":e.isRoundIcon?24:void 0,label:e.isRoundIcon?null:e.label,icon:e.icon,color:e.color,"rounded-full":e.isRoundIcon},null,8,["class","icon-size","label","icon","color","rounded-full"]),t("input",{ref_key:"root",ref:n,type:"file",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:e.accept,onInput:p},null,40,R)]),s.value?(r(),d("div",B,[t("span",S,V(a.value.name),1)])):k("",!0)]))}};export{z as _};
