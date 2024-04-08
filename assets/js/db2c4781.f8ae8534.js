"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[714],{167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>F,default:()=>$,frontMatter:()=>P,metadata:()=>N,toc:()=>_});var r=n(4848),o=n(8453),s=n(6540),i=n(4164),a=n(1754),c=n(8774),l=n(4586);const u=["zero","one","two","few","many","other"];function d(e){return u.filter((t=>e.includes(t)))}const h={locale:"en",pluralForms:d(["one","other"]),select:e=>1===e?"one":"other"};function m(){const{i18n:{currentLocale:e}}=(0,l.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:d(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),h}}),[e])}function p(){const e=m();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}var f=n(6654),g=n(1312),x=n(1107);const b={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function y(e){let{href:t,children:n}=e;return(0,r.jsx)(c.A,{href:t,className:(0,i.A)("card padding--lg",b.cardContainer),children:n})}function w(e){let{href:t,icon:n,title:o,description:s}=e;return(0,r.jsxs)(y,{href:t,children:[(0,r.jsxs)(x.A,{as:"h2",className:(0,i.A)("text--truncate",b.cardTitle),title:o,children:[n," ",o]}),s&&(0,r.jsx)("p",{className:(0,i.A)("text--truncate",b.cardDescription),title:s,children:s})]})}function j(e){let{item:t}=e;const n=(0,a.Nr)(t),o=function(){const{selectMessage:e}=p();return t=>e(t,(0,g.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(w,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??o(t.items.length)}):null}function k(e){let{item:t}=e;const n=(0,f.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.cC)(t.docId??void 0);return(0,r.jsx)(w,{href:t.href,icon:n,title:t.label,description:t.description??o?.description})}function C(e){let{item:t}=e;switch(t.type){case"link":return(0,r.jsx)(k,{item:t});case"category":return(0,r.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,a.$S)();return(0,r.jsx)(M,{items:n.items,className:t})}function M(e){const{items:t,className:n}=e;if(!t)return(0,r.jsx)(v,{...e});const o=(0,a.d1)(t);return(0,r.jsx)("section",{className:(0,i.A)("row",n),children:o.map(((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(C,{item:e})},t)))})}const P={sidebar_label:"Business integration",sidebar_position:4,description:"Working with MetaPerson Creator."},F="Working with MetaPerson Creator",N={id:"business-integration/index",title:"Working with MetaPerson Creator",description:"Working with MetaPerson Creator.",source:"@site/docs/business-integration/index.md",sourceDirName:"business-integration",slug:"/business-integration/",permalink:"/business-integration/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Business integration",sidebar_position:4,description:"Working with MetaPerson Creator."},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/faq"},next:{title:"Getting started",permalink:"/getting_started"}},A={},_=[];function W(e){const t={h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"working-with-metaperson-creator",children:"Working with MetaPerson Creator"}),"\n",(0,r.jsx)(t.p,{children:"MetaPerson Creator is not just a fun tool for personal use. It's also a valuable asset for businesses looking to enhance their online presence. With our easy-to-use API, you can integrate MetaPerson Creator directly into your website or application, giving your clients the ability to create their custom avatars and use them in your product."}),"\n",(0,r.jsx)(t.p,{children:"Integrating MetaPerson Creator is easy and straightforward, and our team is always available to provide support and guidance throughout the process. So why not take advantage of this innovative technology and give your business a competitive edge? Try MetaPerson Creator today and see the difference it can make for your brand!"}),"\n","\n",(0,r.jsx)(M,{})]})}function $(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(W,{...e})}):W(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);