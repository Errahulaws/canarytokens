import{_ as t}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-B9MIaTTM.js";import{d as r,r as o,a,c,b as p}from"./index-DhIzIdaJ.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-BIPwYJTE.js";import"./BaseCopyButton-B5SkmyTf.js";const m={key:0},g=r({__name:"ManageToken",props:{tokenBackendResponse:{}},setup(n){const s=o(n.tokenBackendResponse.canarydrop.generated_hostname),e=o(`\${jndi:ldap://x\${hostName}.L4J.${s.value}/a}`);return(d,l)=>e.value?(a(),p(t,{key:1,"token-usage":e.value},null,8,["token-usage"])):(a(),c("div",m,"Error loading"))}});export{g as default};