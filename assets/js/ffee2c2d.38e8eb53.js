"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[454],{1102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(4848),o=n(8453),s=n(5871);const i={sidebar_label:"Integration",sidebar_position:3,description:"Working with MetaPerson Creator."},a="Working with MetaPerson Creator",c={id:"business-integration/index",title:"Working with MetaPerson Creator",description:"Working with MetaPerson Creator.",source:"@site/docs/business-integration/index.mdx",sourceDirName:"business-integration",slug:"/business-integration/",permalink:"/business-integration/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Integration",sidebar_position:3,description:"Working with MetaPerson Creator."},sidebar:"tutorialSidebar",previous:{title:"MetaPerson Creator",permalink:"/"},next:{title:"Getting started",permalink:"/getting_started"}},l={},u=[];function d(e){const t={a:"a",h1:"h1",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"working-with-metaperson-creator",children:"Working with MetaPerson Creator"}),"\n",(0,r.jsx)(t.p,{children:"MetaPerson Creator is not just a fun tool for personal use. It's also a valuable asset for businesses looking to enhance their online presence. With our easy-to-use API, you can integrate MetaPerson Creator directly into your website or application, giving your clients the ability to create their custom avatars and use them in your product."}),"\n",(0,r.jsx)(t.p,{children:"Integrating MetaPerson Creator is easy and straightforward, and our team is always available to provide support and guidance throughout the process. So why not take advantage of this innovative technology and give your business a competitive edge? Try MetaPerson Creator today and see the difference it can make for your brand!"}),"\n",(0,r.jsxs)(t.p,{children:["Please see the video tutorial on our official ",(0,r.jsx)(t.a,{href:"https://www.youtube.com/user/itSeez3D",children:"youtube channel"}),":"]}),"\n",(0,r.jsx)("div",{class:"iframe-container",children:(0,r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/TXwKq4U15S8"})}),"\n","\n",(0,r.jsx)(s.A,{})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5871:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),o=n(4164),s=n(1754),i=n(8774),a=n(4586);const c=["zero","one","two","few","many","other"];function l(e){return c.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function h(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}var m=n(6654),p=n(1312),f=n(1107);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(4848);function b(e){let{href:t,children:n}=e;return(0,x.jsx)(i.A,{href:t,className:(0,o.A)("card padding--lg",g.cardContainer),children:n})}function w(e){let{href:t,icon:n,title:r,description:s}=e;return(0,x.jsxs)(b,{href:t,children:[(0,x.jsxs)(f.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),s&&(0,x.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function y(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=h();return t=>e(t,(0,p.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(w,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function j(e){let{item:t}=e;const n=(0,m.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,x.jsx)(w,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(j,{item:t});case"category":return(0,x.jsx)(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function C(e){let{className:t}=e;const n=(0,s.$S)();return(0,x.jsx)(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(C,{...e});const r=(0,s.d1)(t);return(0,x.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(v,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);