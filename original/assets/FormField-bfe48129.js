import{G as r,o as s,p as o,a6 as h,a7 as y,j as n,B as c,q as p,a8 as g,P as m,r as f}from"./index-f88a0187.js";const v=["type","name","value"],k=n("span",{class:"check"},null,-1),S={class:"pl-2"},F={__name:"FormCheckRadio",props:{name:{type:String,required:!0},type:{type:String,default:"checkbox",validator:e=>["checkbox","radio","switch"].includes(e)},label:{type:String,default:null},modelValue:{type:[Array,String,Number,Boolean],default:null},inputValue:{type:[String,Number,Boolean],required:!0}},emits:["update:modelValue"],setup(e,{emit:u}){const a=e,t=r({get:()=>a.modelValue,set:i=>{u("update:modelValue",i)}}),l=r(()=>a.type==="radio"?"radio":"checkbox");return(i,d)=>(s(),o("label",{class:p(e.type)},[h(n("input",{"onUpdate:modelValue":d[0]||(d[0]=b=>t.value=b),type:l.value,name:e.name,value:e.inputValue},null,8,v),[[y,t.value]]),k,n("span",S,c(e.label),1)],2))}},V={class:"mb-6 last:mb-0"},x=["for"],B={key:1,class:"text-xs text-gray-500 dark:text-slate-400 mt-1"},$={__name:"FormField",props:{label:{type:String,default:null},labelFor:{type:String,default:null},help:{type:String,default:null}},setup(e){const u=g(),a=r(()=>{const t=[],l=u.default().length;return l>1&&t.push("grid grid-cols-1 gap-3"),l===2&&t.push("md:grid-cols-2"),t});return(t,l)=>(s(),o("div",V,[e.label?(s(),o("label",{key:0,for:e.labelFor,class:"block font-bold mb-2"},c(e.label),9,x)):m("",!0),n("div",{class:p(a.value)},[f(t.$slots,"default")],2),e.help?(s(),o("div",B,c(e.help),1)):m("",!0)]))}};export{$ as _,F as a};
