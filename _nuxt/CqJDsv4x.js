import{d as r,a3 as p,$ as i,t as o,v as s,a4 as u,x as t,y as m,P as c,a5 as v,a6 as h}from"./CzGANIvT.js";/* empty css        */const V={class:"v-input"},_={key:0,class:"v-input-label"},b=["placeholder"],k=r({__name:"VInput",props:p({label:{},placeholder:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(n){const l=i(n,"modelValue");return(e,a)=>(o(),s("div",V,[u(e.$slots,"prepend"),t("div",null,[e.label?(o(),s("label",_,m(e.label),1)):c("",!0),v(t("input",{class:"v-input-content","onUpdate:modelValue":a[0]||(a[0]=d=>l.value=d),placeholder:e.placeholder},null,8,b),[[h,l.value]])])]))}});export{k as _};