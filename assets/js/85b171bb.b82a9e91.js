"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[753],{2574:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(4848),r=a(8453);const i={sidebar_label:"Unreal Engine Marketplace Plugin",description:"Marketplace version of the project.",sidebar_position:3},o="Unreal Engine Marketplace Plugin",s={id:"business-integration/ue/marketplace_plugin",title:"Unreal Engine Marketplace Plugin",description:"Marketplace version of the project.",source:"@site/docs/business-integration/ue/marketplace_plugin.md",sourceDirName:"business-integration/ue",slug:"/business-integration/ue/marketplace_plugin",permalink:"/business-integration/ue/marketplace_plugin",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Unreal Engine Marketplace Plugin",description:"Marketplace version of the project.",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"GitHub Sample",permalink:"/business-integration/ue/github_sample"},next:{title:"Animation retargeting",permalink:"/business-integration/ue/animation_retargeting"}},l={},c=[{value:"&quot;Third Person&quot; Map",id:"third-person-map",level:2},{value:"&quot;Load Avatar&quot; Map",id:"load-avatar-map",level:2},{value:"Technical details",id:"technical-details",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"unreal-engine-marketplace-plugin",children:"Unreal Engine Marketplace Plugin"}),"\n",(0,n.jsxs)(t.p,{children:["You can use our ",(0,n.jsx)(t.a,{href:"https://www.unrealengine.com/marketplace/en-US/product/avatar-sdk-metaperson-plugin",children:"free official Marketplace Plugin"}),' to bring the functionality of MetaPerson avatars to your Unreal Engine project. It contains tools to implement the same functionality as in our Sample project. With this plugin, you can create recognizable and customizable avatars. You can also load an avatar at runtime and use it as a character in your project. Plugin contains two demo scenes: the first one with the help of the MetaPerson Creator shows how to create the MetaPerson avatar, and customize and export it to the "Third Person" scene. The second demonstrates how to load an avatar at runtime from a local drive to a "Third Person" scene.']}),"\n",(0,n.jsx)(t.h2,{id:"third-person-map",children:'"Third Person" Map'}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.em,{children:"Third Person"})," Map is based on the original Epic's ",(0,n.jsx)(t.a,{href:"https://docs.unrealengine.com/5.0/en-US/third-person-template-in-unreal-engine/",children:"template"}),". You may find it in the ",(0,n.jsx)(t.em,{children:"/AvatarSDKMetaperson2/ThirdPerson/Maps/"})," folder of the plugin. In this map, you can create and customize the avatar with the help of the ",(0,n.jsx)(t.a,{href:"https://avatarsdk.com/metaperson-creator/",children:"Metaperson Creator"}),". After that, you can export it to the scene. You will need an account on the Avatar SDK website to export MetaPerson avatars. If you don't have an account yet, you can create it ",(0,n.jsx)(t.a,{href:"https://accounts.avatarsdk.com/",children:"here"}),". Then you can take a ",(0,n.jsx)(t.a,{href:"https://avatarsdk.com/pricing-cloud/",children:"free trial"})," of the Pro plan. It gives you access to all of the needed features."]}),"\n",(0,n.jsxs)(t.p,{children:["To run the demo scene you will need developer credentials that can be found on your ",(0,n.jsx)(t.a,{href:"https://accounts.avatarsdk.com/developer/",children:"developer page"}),". Developer credentials are a pair of values (Client ID and Client Secret)."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Client ID and Client Secret",src:a(1801).A+"",width:"1498",height:"762"})}),"\n",(0,n.jsxs)(t.p,{children:["See the ",(0,n.jsx)(t.a,{href:"../../getting_started#developer-credentials",children:"additional documentation"})," on the developer credentials."]}),"\n",(0,n.jsx)(t.p,{children:"Go to the Edit->Project Settings->Plugins->Avatar SDK MetaPerson section in UE Editor and set these parameters in corresponding fields:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Credentials",src:a(7400).A+"",width:"1786",height:"476"})}),"\n",(0,n.jsxs)(t.p,{children:["Playing the level opens MetaPerson Creator in the HUD. After that, all of the avatar creation/customization features are available to the user. When the user finishes the avatar creation process, he can press the Export button. ",(0,n.jsx)(t.strong,{children:"If you\u2019ve incorrectly added your credentials, or if your account doesn\u2019t have a Pro plan or higher, the Export button may be inactive."})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Exporting glb",src:a(8946).A+"",width:"1370",height:"611"})}),"\n",(0,n.jsx)(t.p,{children:"When the export process is complete, the MetaPerson Creator will close and the download will begin. The archive with the avatar will be saved to the local disk and unzipped. After that skeletal mesh of the avatar will be loaded from the glb file. Avatar will be placed in the level instead of the third-person character."}),"\n",(0,n.jsxs)(t.p,{children:["See more information about ",(0,n.jsx)(t.a,{href:"animation_retargeting",children:"animation retargeting"})," and  ",(0,n.jsx)(t.a,{href:"metaperson_creator_integration",children:"MetaPerson Creator integration"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"load-avatar-map",children:'"Load Avatar" Map'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"Load Avatar"})," Map has similar functionality to the ",(0,n.jsx)(t.em,{children:"Third Person Map"}),", but instead of creating an avatar using MetaPerson Creator, you need to specify the path to an existing glb model. If the path you provided leads to the MetaPerson avatar, the avatar will be loaded and displayed on the scene instead of the default one. This functionality does not require you to provide credentials."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Load Avatar Map",src:a(9770).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(t.h2,{id:"technical-details",children:"Technical details"}),"\n",(0,n.jsxs)(t.p,{children:["See this ",(0,n.jsx)(t.a,{href:"metaperson_creator_integration",children:"page"})," of the documentation for technical details."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},9770:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/avatar-load-483c6b554ea698ee0c62284393a0aabb.png"},7400:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/credentials-2fbd1168977696c3a8a6aefc1f837923.png"},1801:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/credentials01-f48d52542db3221cd5ebf93a52bcd61a.png"},8946:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/export-2bb260c2bb0a1c445c20e555db6f9547.png"},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var n=a(6540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);