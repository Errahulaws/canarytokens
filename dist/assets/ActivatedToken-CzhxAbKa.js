import{d as l,r as m,a as d,c as f,i as o,f as n,h as p,I as w,p as k}from"./index-CvZxS35p.js";import{_ as u}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-CjDkaFJ5.js";import{_ as c}from"./ButtonActivateTokenTips.vue_vue_type_script_setup_true_lang-CjrAWO0P.js";const h={class:"mt-16 text-sm"},b=l({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(a){const t=a,i=m({token:t.tokenData.token||"",auth:t.tokenData.auth_token||""});return(r,e)=>{const s=k;return d(),f(w,null,[o(u,{"token-data":i.value},null,8,["token-data"]),n("p",h,[e[1]||(e[1]=p(" Unzip this file in a folder, and get notified when someone browses the folder in Windows Explorer. It will even trigger if someone is browsing the folder via a network share! ")),o(c,{onHowToUse:e[0]||(e[0]=_=>r.$emit("howToUse"))})]),o(s,{class:"mt-32",variant:"warning",message:`This token only works on Windows 10 systems and lower. It does
      not work on Windows 11 or higher. This is because a recent group policy update to
      some versions of Windows defaults to disabling functionality that this token
      relies on to fire.`}),o(s,{class:"mt-24",variant:"info",message:"The alert will include the network domain and username of the browsing user, if present."}),e[2]||(e[2]=n("p",{class:"mt-24 text-sm"},null,-1))],64)}}});export{b as default};
