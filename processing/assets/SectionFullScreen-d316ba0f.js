import{G as n,Q as t,a9 as l,aa as i,ab as o,o as c,p as u,r as d,q as p}from"./index-f88a0187.js";const m={__name:"SectionFullScreen",props:{bg:{type:String,required:!0,validator:e=>["purplePink","pinkRed"].includes(e)}},setup(e){const r=e,a=n(()=>{if(t().isEnabled)return l;switch(r.bg){case"purplePink":return o;case"pinkRed":return i}return""});return(s,g)=>(c(),u("div",{class:p(["flex min-h-screen items-center justify-center",a.value])},[d(s.$slots,"default",{cardClass:"w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl"})],2))}};export{m as _};
