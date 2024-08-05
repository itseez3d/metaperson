"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[391],{3655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(4848),n=r(8453);const s={sidebar_label:"MetaPerson Creator integration",description:"MetaPerson Creator integration technical details.",sidebar_position:4},o="MetaPerson Creator integration",i={id:"business-integration/ue/metaperson_creator_integration",title:"MetaPerson Creator integration",description:"MetaPerson Creator integration technical details.",source:"@site/docs/business-integration/ue/metaperson_creator_integration.md",sourceDirName:"business-integration/ue",slug:"/business-integration/ue/metaperson_creator_integration",permalink:"/business-integration/ue/metaperson_creator_integration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"MetaPerson Creator integration",description:"MetaPerson Creator integration technical details.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Animation retargeting",permalink:"/business-integration/ue/animation_retargeting"},next:{title:"Android",permalink:"/business-integration/android"}},d={},c=[];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"metaperson-creator-integration",children:"MetaPerson Creator integration"}),"\n",(0,a.jsx)(t.p,{children:"MetaPerson Creator is a revolutionary 3D avatar builder that allows you to create your own lifelike avatar using just a selfie. Because the MetaPerson Creator supports iframe integration, connecting the MetaPerson Creator to an Unreal Engine project can be done using a standard web browser plugin."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"WebBrowser plugin",src:r(7761).A+"",width:"1383",height:"113"})}),"\n",(0,a.jsxs)(t.p,{children:["We created a small class ",(0,a.jsx)(t.code,{children:"UAvatarSDKWebBrowser"})," that inherits from ",(0,a.jsx)(t.code,{children:"UWebBrowser"})," and handles interactions of UE projects with the MetaPerson Creator. We use JavaScript code to subscribe to events and forward them to UE."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"function onWindowMessage(evt) {\r\n    if (evt.type === 'message') {\r\n        if (evt.data?.source === 'metaperson_creator') {\r\n            let data = evt.data;\r\n            let evtName = data?.eventName;\r\n            if (evtName === 'unity_loaded') {\r\n                onUnityLoaded(evt, data);\r\n            } else if (evtName === 'model_exported') {\r\n                window.ue.avatarsdk_proxy.avatarexportcallback(event.data.url);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction onUnityLoaded(evt, data) {\r\n    let authenticationMessage = {\r\n        'eventName': 'authenticate',\r\n        'clientId': CLIENT_ID,\r\n        'clientSecret': CLIENT_SECRET,\r\n        'exportTemplateCode': '',\r\n    };\r\n    evt.source.postMessage(authenticationMessage, '*');\r\n    let exportParametersMessage = {\r\n        'eventName': 'set_export_parameters',\r\n        'format': 'glb',\r\n        'lod': 1,\r\n        'textureProfile': '2K.png'\r\n    };\r\n    evt.source.postMessage(exportParametersMessage, '*');\r\n\r\n}\r\nwindow.addEventListener('message', onWindowMessage);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We use the ",(0,a.jsx)(t.code,{children:"UAvatarSDKBrowserCallbackProxy"})," class to handle the events from JavaScript and forward them to the ",(0,a.jsx)(t.code,{children:"UAvatarSDKWebBrowser"})," class."]}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"https://docs.metaperson.avatarsdk.com/web_integration.html",children:"documentation"})," for website integration.\r\nIn the demo project, you can see how it works by looking at the ",(0,a.jsx)(t.em,{children:"/Game/ThirdPerson/Blueprints/BP_HUD"})," blueprint."]}),"\n",(0,a.jsx)(t.p,{children:"At first, we need to create the widget and add it to the viewport."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Create widget",src:r(4263).A+"",width:"1262",height:"425"})}),"\n",(0,a.jsxs)(t.p,{children:["We need to subscribe to 2 events that are raised by ",(0,a.jsx)(t.code,{children:"UAvatarSDKWebBrowser"}),". The first one is ",(0,a.jsx)(t.code,{children:"OnBrowserError"})," which gets raised if something goes wrong, for example, if you forget to ",(0,a.jsx)(t.a,{href:"overview#running-the-sample",children:"provide your Client ID and Client Secret"}),". The second one is ",(0,a.jsx)(t.code,{children:"OnAvatarExported"})," and it is raised when you've finished editing your avatar and it is ready to be downloaded from the cloud. At this point, you can also set the ",(0,a.jsx)(t.code,{children:"ReadParametersFromSettings"})," parameter to false, if you'd like to provide Client ID and Client Secret in the blueprint instead of taking it from the plugin settings."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Events of browser",src:r(2644).A+"",width:"1202",height:"524"})}),"\n",(0,a.jsxs)(t.p,{children:["The handler for this event must have a string as a parameter to get the URL. This URL will be used to download the avatar to your local drive. The ",(0,a.jsx)(t.code,{children:"UAvatarSDKComponent"})," class is responsible for downloading the avatar (",(0,a.jsx)(t.code,{children:"DownloadAvatar"})," method) and loading the skeletal mesh to the skeletal mesh component (",(0,a.jsx)(t.code,{children:"LoadAvatar"})," method). ",(0,a.jsx)(t.code,{children:"UAvatarSDKComponent"})," is added to our sample character: ",(0,a.jsx)(t.code,{children:"AMetaperson2Character"})," (",(0,a.jsx)(t.em,{children:"\\Source\\Metaperson2\\Metaperson2Character.h"}),")."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Actor component",src:r(7138).A+"",width:"1190",height:"420"})}),"\n",(0,a.jsx)(t.p,{children:"This component has three important events that we need to subscribe to. Their names are self-explanatory:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Actor component events",src:r(5321).A+"",width:"1120",height:"183"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"UAvatarSDKComponent"}),"'s ",(0,a.jsx)(t.code,{children:"DownloadAvatar"})," saves the avatar in the application directory. For example on Windows path to the avatar model can look like this: ",(0,a.jsx)(t.em,{children:"C:\\Users\\USERNAME\\AppData\\Local\\Avatar SDK Metaperson 2\\avatars\\b1b666a0-8a55-4d1a-acc3-540ae971c858\\model.glb"}),", where ",(0,a.jsx)(t.em,{children:"b1b666a0-8a55-4d1a-acc3-540ae971c858"})," is a unique ID of avatar. The ",(0,a.jsx)(t.code,{children:"LoadAvatar"})," method creates a skeletal mesh from glb file, sets transform, materials, and plugs it into the Character's skeletal mesh component. We use the ",(0,a.jsx)(t.a,{href:"https://github.com/rdeioris/glTFRuntime",children:"glTFRuntime plugin"})," to load a mesh from glb at runtime."]}),"\n",(0,a.jsx)(t.p,{children:"When the LoadAvatar method completes its work, the OnAvatarLoaded event is fired. Your avatar is ready."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Avatar is ready",src:r(1775).A+"",width:"1352",height:"456"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},7138:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/actorcomponent01-17bfb55a1cbb19960035f09b5db3a0c3.png"},5321:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/actorcomponent02-cec68744f55f79bca5263fac1d105eea.png"},1775:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/avatarisready-824c890903e0cb6c279c61bbc3ff02f6.png"},2644:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/browserevents-6bef5894db59c064b2167d7a963363ea.png"},4263:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/createwidget-aa1f2b7822e6180b14bfe04d62807c1a.png"},7761:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/webbrowser-52f85ef73f515b6404c22fedb6d78b8c.png"},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var a=r(6540);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);