import{_ as t}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-5uow1O5n.js";import{d as r,r as o,a,c,b as p}from"./index-Ba78S-Tl.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-0CGpcB1X.js";import"./BaseCopyButton-w0G9G5-e.js";const m={key:0},g=r({__name:"ManageToken",props:{tokenBackendResponse:{}},setup(n){const s=o(n.tokenBackendResponse.canarydrop.generated_hostname),e=o(`\${jndi:ldap://x\${hostName}.L4J.${s.value}/a}`);return(d,l)=>e.value?(a(),p(t,{key:1,"token-usage":e.value},null,8,["token-usage"])):(a(),c("div",m,"Error loading"))}});export{g as default};