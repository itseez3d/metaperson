"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[65],{7055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(4848),o=n(8453),s=n(5871);const i={sidebar_label:"Unreal Engine",sidebar_position:5,description:"Integrating MetaPerson Creator into your UE project."},a="Working with MetaPerson Creator",c={id:"business-integration/ue/index",title:"Working with MetaPerson Creator",description:"Integrating MetaPerson Creator into your UE project.",source:"@site/docs/business-integration/ue/index.mdx",sourceDirName:"business-integration/ue",slug:"/business-integration/ue/",permalink:"/business-integration/ue/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Unreal Engine",sidebar_position:5,description:"Integrating MetaPerson Creator into your UE project."},sidebar:"tutorialSidebar",previous:{title:"Multiplayer Photon Sample",permalink:"/business-integration/unity/additional_samples/photon_sample"},next:{title:"Overview",permalink:"/business-integration/ue/overview"}},l={},u=[];function d(e){const t={a:"a",h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"working-with-metaperson-creator",children:"Working with MetaPerson Creator"}),"\n",(0,r.jsx)(t.p,{children:"Integrating MetaPerson Creator into your UE project is pretty straightforward and follows the same pattern as integrations on other platforms. We've prepared a sample project that can help you to get started. The project demonstrates how to display the MetaPerson Creator in your application, handle results, download, display on the scene, and animate the MetaPerson avatar."}),"\n",(0,r.jsxs)(t.p,{children:["Download the ",(0,r.jsx)(t.a,{href:"https://github.com/avatarsdk/metaperson-ue-sample",children:"sample project"})," from our ",(0,r.jsx)(t.a,{href:"https://github.com/avatarsdk",children:"GitHub"})," or use it's ",(0,r.jsx)(t.a,{href:"marketplace_plugin",children:"marketplace version"}),". To get started with the sample, read the relevant part of the ",(0,r.jsx)(t.a,{href:"overview#running-the-sample",children:"documentation"})," and watch the video tutorial on our official ",(0,r.jsx)(t.a,{href:"https://www.youtube.com/user/itSeez3D",children:"YouTube channel"}),":"]}),"\n",(0,r.jsx)("div",{class:"iframe-container",children:(0,r.jsx)("iframe",{width:"560",height:"315",allow:"fullscreen",src:"https://www.youtube.com/embed/LslWA6CcWMs"})}),"\n","\n",(0,r.jsx)(s.A,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),o=n(4164),s=n(1754),i=n(8774),a=n(4586);const c=["zero","one","two","few","many","other"];function l(e){return c.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function h(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}var p=n(6654),m=n(1312),f=n(1107);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(4848);function w(e){let{href:t,children:n}=e;return(0,x.jsx)(i.A,{href:t,className:(0,o.A)("card padding--lg",g.cardContainer),children:n})}function j(e){let{href:t,icon:n,title:r,description:s}=e;return(0,x.jsxs)(w,{href:t,children:[(0,x.jsxs)(f.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),s&&(0,x.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function b(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=h();return t=>e(t,(0,m.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function y(e){let{item:t}=e;const n=(0,p.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,x.jsx)(j,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(y,{item:t});case"category":return(0,x.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function C(e){let{className:t}=e;const n=(0,s.$S)();return(0,x.jsx)(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(C,{...e});const r=(0,s.d1)(t);return(0,x.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(v,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);