import{d as i,r as m,a as p,c as l,i as t,f as s,I as f,p as u}from"./index-CvZxS35p.js";import{_ as g}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-oZ8eWQUs.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-u7MR2MRA.js";import"./BaseCopyButton-BIiEzCsw.js";const x=i({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(n){const a=m(n.tokenData.token_url);return(o,e)=>{const r=u;return p(),l(f,null,[t(g,{"token-url":a.value},null,8,["token-url"]),e[1]||(e[1]=s("p",{class:"mt-16 text-sm"}," Remember, it gets triggered whenever someone requests the URL. ",-1)),t(r,{class:"mt-24",variant:"info",message:"If the URL is requested as an image (e.g. <img src=''>) then a 1x1 image is served. If the URL is surfed in a browser then a blank page is served with fingerprinting Javascript.","text-link":"More tips?",onClick:e[0]||(e[0]=()=>o.$emit("howToUse"))}),e[2]||(e[2]=s("p",{class:"mt-24 text-sm"},null,-1))],64)}}});export{x as default};
