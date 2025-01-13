"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5339],{6375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(4848),i=n(8453);const r={sidebar_label:"GitHub Sample",description:"MetaPerson UE Sample",sidebar_position:2},s="GitHub Sample",o={id:"business-integration/ue/github_sample",title:"GitHub Sample",description:"MetaPerson UE Sample",source:"@site/docs/business-integration/ue/github_sample.md",sourceDirName:"business-integration/ue",slug:"/business-integration/ue/github_sample",permalink:"/business-integration/ue/github_sample",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"GitHub Sample",description:"MetaPerson UE Sample",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/business-integration/ue/overview"},next:{title:"Import in UE Editor",permalink:"/business-integration/ue/import_editor"}},l={},d=[{value:"Technical details",id:"technical-details",level:3},{value:"Animations",id:"animations",level:3},{value:"FAQ.",id:"faq",level:2},{value:"Which platforms are supported by the sample?",id:"which-platforms-are-supported-by-the-sample",level:3},{value:"Which version of UE is supported?",id:"which-version-of-ue-is-supported",level:3},{value:"The &quot;export&quot; button is not accessible in the MetaPerson Creator. What should I do?",id:"the-export-button-is-not-accessible-in-the-metaperson-creator-what-should-i-do",level:3},{value:"I created MetaPerson avatar at https://metaperson.avatarsdk.com/. How to import the downloaded .fbx file to Unreal Engine?",id:"i-created-metaperson-avatar-at-httpsmetapersonavatarsdkcom-how-to-import-the-downloaded-fbx-file-to-unreal-engine",level:3},{value:"Support",id:"support",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"github-sample",children:"GitHub Sample"}),"\n",(0,a.jsxs)(t.p,{children:["The sample is based on Epic's Third Person ",(0,a.jsx)(t.a,{href:"https://docs.unrealengine.com/5.0/en-US/third-person-template-in-unreal-engine/",children:"template"})," and demonstrates how to integrate MetaPerson Creator into your project. Playing the level opens MetaPerson Creator in the HUD. After that, all of the avatar creation/customization features are available to the user."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"MetaPerson Creator",src:n(2629).A+"",width:"1410",height:"847"})}),"\n",(0,a.jsxs)(t.p,{children:["When the user finishes the avatar creation process, he can press the Export button. ",(0,a.jsx)(t.strong,{children:"If you\u2019ve incorrectly added your credentials, or if your account doesn\u2019t have a Pro plan or higher, the Export button may be inactive."})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Exporting glb",src:n(8733).A+"",width:"1370",height:"611"})}),"\n",(0,a.jsx)(t.p,{children:"When the export process is complete, the MetaPerson Creator will close and the download will begin."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Downloading glb",src:n(1543).A+"",width:"1368",height:"613"})}),"\n",(0,a.jsx)(t.p,{children:"The archive with the avatar will be saved to the local disk and unzipped. After that skeletal mesh of the avatar will be loaded from the glb file. Avatar will be placed in the level instead of the third-person character."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Avatar on the scene",src:n(940).A+"",width:"1371",height:"621"})}),"\n",(0,a.jsx)(t.h3,{id:"technical-details",children:"Technical details"}),"\n",(0,a.jsxs)(t.p,{children:["For detailed information about the MetaPerson Creator integration, see the ",(0,a.jsx)(t.a,{href:"metaperson_creator_integration",children:"relevant part"})," of the documentation."]}),"\n",(0,a.jsx)(t.h3,{id:"animations",children:"Animations"}),"\n",(0,a.jsxs)(t.p,{children:["We use UE5 ",(0,a.jsx)(t.a,{href:"https://docs.unrealengine.com/5.0/en-US/ik-rig-animation-retargeting-in-unreal-engine/",children:"IK Rig Retargeting"})," to retarget animations (and animation blueprints) from Mannequin to MetaPerson skeleton.\r\nThe animation retargeting process is described in the ",(0,a.jsx)(t.a,{href:"animation_retargeting",children:"corresponding chapter"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"faq",children:"FAQ."}),"\n",(0,a.jsx)(t.h3,{id:"which-platforms-are-supported-by-the-sample",children:"Which platforms are supported by the sample?"}),"\n",(0,a.jsx)(t.p,{children:"Currently, the sample is Windows-only (as a development and target platform). We hope to expand the number of supported platforms in future releases."}),"\n",(0,a.jsx)(t.h3,{id:"which-version-of-ue-is-supported",children:"Which version of UE is supported?"}),"\n",(0,a.jsx)(t.p,{children:"Versions 5.3, 5.4 and 5.5 of the Unreal Engine are supported."}),"\n",(0,a.jsx)(t.h3,{id:"the-export-button-is-not-accessible-in-the-metaperson-creator-what-should-i-do",children:'The "export" button is not accessible in the MetaPerson Creator. What should I do?'}),"\n",(0,a.jsxs)(t.p,{children:["Please, double-check that you entered the correct Client ID and Client Secret. Please check the ",(0,a.jsx)(t.a,{href:"../../getting_started#developer-credentials",children:"additional documentation"})," on the developer credentials."]}),"\n",(0,a.jsxs)(t.h3,{id:"i-created-metaperson-avatar-at-httpsmetapersonavatarsdkcom-how-to-import-the-downloaded-fbx-file-to-unreal-engine",children:["I created MetaPerson avatar at ",(0,a.jsx)(t.a,{href:"https://metaperson.avatarsdk.com/",children:"https://metaperson.avatarsdk.com/"}),". How to import the downloaded .fbx file to Unreal Engine?"]}),"\n",(0,a.jsxs)(t.p,{children:["Please, see the corresponding ",(0,a.jsx)(t.a,{href:"import_editor",children:"section"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"support",children:"Support"}),"\n",(0,a.jsxs)(t.p,{children:["You can address any questions about the UE integration or the avatar generation, general feedback, ideas, or feature requests to  ",(0,a.jsx)(t.a,{href:"mailto:support@avatarsdk.com",children:"support@avatarsdk.com"}),".\r\nFor commercial inquiries or licensing questions please use ",(0,a.jsx)(t.a,{href:"mailto:business_support@itseez3d.com",children:"business_support@itseez3d.com"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},940:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/downloaded-39d0ced8ccf0df65d767cf1c09cc2fb9.png"},1543:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/downloading-2c4bc661330b0632f05b62f89082ba29.png"},2629:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/editor01-068f707eec5feda119d41f5195d00729.png"},8733:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/export-2bb260c2bb0a1c445c20e555db6f9547.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(6540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);