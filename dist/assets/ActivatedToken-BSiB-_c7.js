import{d as r,r as c,a as i,c as l,i as t,I as m,f as a,p as d}from"./index-CxPzEQtw.js";import{_}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-CHRKO6P4.js";const h=a("h3",{class:"mb-16 text-lg font-semibold leading-10 text-center text-grey-800"}," How do you want to deploy it? ",-1),u=a("p",{class:"mt-16 text-sm"}," When someone clones your site, they'll load the token, which will check whether the referrer domain is expected. If not, it fires the token and you get an alert. ",-1),x=r({__name:"ActivatedToken",props:{tokenData:{}},setup(o){const e=o,n=c({token:e.tokenData.token||"",auth:e.tokenData.auth_token||"",client_id:e.tokenData.client_id||"",css:e.tokenData.css||""});return(k,p)=>{const s=d;return i(),l(m,null,[h,t(_,{"token-data":n.value},null,8,["token-data"]),u,t(s,{class:"mt-24",variant:"info",message:"Upload it as a custom branding stylesheet for your Azure Entra ID login portal (requires a P1 or P2 subscription)","text-link":"How?",href:"https://learn.microsoft.com/en-us/entra/fundamentals/how-to-customize-branding",target:"_blank"})],64)}}});export{x as default};
