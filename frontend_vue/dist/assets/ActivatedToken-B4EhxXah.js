import{_ as r}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-Q8Q8V5Ro.js";import{_ as m}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-QCsOBcCN.js";import{d as c,r as i,a as p,c as l,i as o,f as u,h as k,I as _}from"./index-wLQBcC24.js";const f={class:"mt-24 text-sm text-center"},x=c({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(a){const e=a,n=i({token:e.tokenData.token||"",auth:e.tokenData.auth_token||""});return(s,t)=>(p(),l(_,null,[o(r,{"token-data":n.value},null,8,["token-data"]),u("p",f,[k(" You'll get an alert when someone tries to use your Kubeconfig. "),o(m,{onHowToUse:t[0]||(t[0]=d=>s.$emit("howToUse"))})])],64))}});export{x as default};
