import{d as i,r as m,a as c,c as p,i as a,I as k,f as l,p as u}from"./index-wLQBcC24.js";import{_}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-BWBjh694.js";import"./BaseSwitch-Dqy_E5IL.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-iLWCuIzP.js";const d=l("p",null,"There are two ways you can use this token:",-1),y=i({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){const e=o,n=m({hostname:e.tokenData.hostname||"",token:e.tokenData.token||"",auth:e.tokenData.auth_token||"",encoded:!0});return(s,t)=>{const r=u;return c(),p(k,null,[d,a(_,{"token-data":n.value},null,8,["token-data"]),a(r,{class:"mt-24",variant:"info",message:"When the MySQL statements are run, your Canarytoken will be triggered.","text-link":"More tips?",onClick:t[0]||(t[0]=()=>s.$emit("howToUse"))})],64)}}});export{y as default};
