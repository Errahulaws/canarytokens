import{d as c,a as r,c as i,i as d,j as p,h as _,$ as u,q as f}from"./index-IF7AUdlb.js";const m={class:"flex justify-center"},k=c({__name:"TokenDisplay",props:{tokenData:{}},setup(s){const n=s;async function l(){var o,e;const a={fmt:"zip",auth:(o=n.tokenData)==null?void 0:o.auth,token:(e=n.tokenData)==null?void 0:e.token};try{const t=await u(a);window.location.href=t.request.responseURL}catch(t){console.log(t,"File download failed")}finally{console.log("Download ready")}}return(a,o)=>{const e=f;return r(),i("div",m,[d(e,{class:"mt-16",onClick:l},{default:p(()=>o[0]||(o[0]=[_("Download your ZIP file")])),_:1})])}}});export{k as _};
