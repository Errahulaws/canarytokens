import{d as l,a as r,c as i,i as d,j as _,h as p,a1 as u,q as f}from"./index-CPOagljl.js";const m={class:"flex justify-center"},h=l({__name:"TokenDisplay",props:{tokenData:{}},setup(s){const a=s;async function c(){var e,o;const n={fmt:"zip",auth:(e=a.tokenData)==null?void 0:e.auth,token:(o=a.tokenData)==null?void 0:o.token};try{const t=await u(n);window.location.href=t.request.responseURL}catch(t){console.log(t,"File download failed")}finally{console.log("Download ready")}}return(n,e)=>{const o=f;return r(),i("div",m,[d(o,{class:"mt-16",onClick:c},{default:_(()=>[p("Download your ZIP file")]),_:1})])}}});export{h as _};
