import{d as A,r as x,C as _,z as w,a as i,c,f as e,i as o,w as m,e as h,h as d,j as C,I as y,a7 as v,a1 as b,q as k}from"./index-CPOagljl.js";const D={key:0,class:"flex flex-col gap-16 md:flex-row"},U=["href"],B=e("span",{class:"font-semibold text-grey-500"},"Automatic flow",-1),R=e("span",{class:"text-sm text-grey-400"},"You give us access to manage your Entra setup",-1),T=e("span",{class:"font-semibold text-grey-500"},"Manual flow",-1),S=e("span",{class:"text-sm text-grey-400"},"You insert the token manually yourself",-1),L={key:1,class:"relative text-center"},N=e("h3",{class:"font-semibold text-center text-md text-grey-800"}," Manual Flow ",-1),F={class:"flex flex-col gap-[16px] text-center my-16"},I={class:"py-16 bg-white rounded-lg"},P=e("p",{class:"mb-8 text-sm"},"Download the necessary CSS:",-1),M={class:"py-16 bg-white rounded-lg"},V=e("p",{class:"mb-8 text-sm"}," Navigate to your Entra ID login customisation page. ",-1),z=v('<li class="py-16 bg-white rounded-lg"><p class="p-16 text-sm"> Choose <span class="font-bold">Layout</span>, scroll down to <span class="font-bold">Custom CSS</span>, click <span class="font-bold">Browse</span> and choose the downloaded CSS from the first step. </p></li>',1),Y=A({__name:"TokenDisplay",props:{tokenData:{}},setup(g){const a=g,l=x(!1),p=_(()=>{var t;const r=encodeURIComponent(btoa(`${(t=a.tokenData)==null?void 0:t.css}`)),s=`${window.location.origin}/azure_css_landing`;return`https://login.microsoftonline.com/common/adminconsent?client_id=${a.tokenData.client_id}&state=${r}&redirect_uri=${s}`});function u(){l.value=!l.value}async function f(){var s,t;const r={fmt:"cssclonedsite",auth:(s=a.tokenData)==null?void 0:s.auth,token:(t=a.tokenData)==null?void 0:t.token};try{const n=await b(r);window.location.href=n.request.responseURL}catch(n){console.log(n,"File download failed")}finally{console.log("Download ready")}}return(r,s)=>{const t=w("font-awesome-icon"),n=k;return i(),c(y,null,[l.value?h("",!0):(i(),c("div",D,[e("a",{class:"relative border flex-1 group flex flex-col px-24 py-24 bg-white rounded-xl top-[0px] shadow-solid-shadow-grey border-grey-200 items-center duration-100 ease-in-out hover:border-green hover:shadow-solid-shadow-green-500-md hover:top-[-0.2em]",href:p.value,target:"_blank"},[o(t,{icon:"robot","aria-hidden":"true",class:"h-[2rem] text-green-200 mb-[16px]"}),B,R],8,U),e("button",{class:"relative border flex-1 group flex flex-col px-24 py-24 bg-white rounded-xl top-[0px] shadow-solid-shadow-grey border-grey-200 items-center duration-100 ease-in-out hover:border-green hover:shadow-solid-shadow-green-500-md hover:top-[-0.2em]",onClick:m(u,["stop"])},[o(t,{icon:"hands","aria-hidden":"true",class:"h-[2rem] text-green-200 mb-[16px]"}),T,S])])),l.value?(i(),c("div",L,[e("div",null,[N,e("button",{class:"text-sm font-semibold text-center md:absolute text-grey-300 hover:text-green-500 top-4 md:left-[0px]",onClick:m(u,["stop"])},[o(t,{icon:"arrow-left","aria-hidden":"true"}),d(" Not sure? Go Back ")]),e("ul",F,[e("li",I,[P,o(n,{variant:"secondary",onClick:f},{default:C(()=>[d("Download CSS")]),_:1})]),o(t,{class:"text-sm font-semibold text-green-500",icon:"arrow-down","aria-hidden":"true"}),e("li",M,[V,o(n,{variant:"secondary",class:"inline-block",target:"_blank",href:"https://entra.microsoft.com/#view/Microsoft_AAD_UsersAndTenants/CompanyBrandingWizard.ReactView/isDefault~/true/companyBrandingToEdit~/%7B%22id%22%3A%220%22%2C%22backgroundColor%22%3A%22%2340c223%22%2C%22backgroundImageRelativeUrl%22%3Anull%2C%22bannerLogoRelativeUrl%22%3Anull%2C%22cdnList%22%3A%5B%22aadcdn.msftauthimages.net%22%2C%22aadcdn.msauthimages.net%22%5D%2C%22customAccountResetCredentialsUrl%22%3Anull%2C%22customCannotAccessYourAccountText%22%3Anull%2C%22customCannotAccessYourAccountUrl%22%3Anull%2C%22customForgotMyPasswordText%22%3Anull%2C%22customPrivacyAndCookiesText%22%3Anull%2C%22customPrivacyAndCookiesUrl%22%3Anull%2C%22customResetItNowText%22%3Anull%2C%22customTermsOfUseText%22%3Anull%2C%22customTermsOfUseUrl%22%3Anull%2C%22faviconRelativeUrl%22%3Anull%2C%22customCSSRelativeUrl%22%3Anull%2C%22headerBackgroundColor%22%3Anull%2C%22signInPageText%22%3A%22%22%2C%22squareLogoRelativeUrl%22%3Anull%2C%22squareLogoDarkRelativeUrl%22%3Anull%2C%22usernameHintText%22%3A%22%22%2C%22headerLogoRelativeUrl%22%3Anull%2C%22loginPageTextVisibilitySettings%22%3A%7B%22hideCannotAccessYourAccount%22%3Anull%2C%22hideAccountResetCredentials%22%3Afalse%2C%22hideTermsOfUse%22%3Afalse%2C%22hidePrivacyAndCookies%22%3Afalse%2C%22hideForgotMyPassword%22%3Anull%2C%22hideResetItNow%22%3Anull%7D%2C%22contentCustomization%22%3A%7B%22adminConsentRelativeUrl%22%3Anull%2C%22attributeCollectionRelativeUrl%22%3Anull%2C%22registrationCampaignRelativeUrl%22%3Anull%2C%22conditionalAccessRelativeUrl%22%3Anull%2C%22adminConsent%22%3A%5B%5D%2C%22attributeCollection%22%3A%5B%5D%2C%22registrationCampaign%22%3A%5B%5D%2C%22conditionalAccess%22%3A%5B%5D%7D%2C%22loginPageLayoutConfiguration%22%3A%7B%22layoutTemplateType%22%3A%22default%22%2C%22isHeaderShown%22%3Afalse%2C%22isFooterShown%22%3Atrue%7D%7D/configuredLocales~/%5B%22en-US%22%5D"},{default:C(()=>[d("Go to your page")]),_:1})]),o(t,{class:"text-sm font-semibold text-green-500",icon:"arrow-down","aria-hidden":"true"}),z])])])):h("",!0)],64)}}});export{Y as _};
