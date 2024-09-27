"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[505],{2658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(4848),s=n(8453);const r={sidebar_label:"Web",sidebar_position:3,description:"Web",slug:"/web_integration"},o="Web integration",i={id:"business-integration/web_integration/index",title:"Web integration",description:"Web",source:"@site/docs/business-integration/web_integration/index.mdx",sourceDirName:"business-integration/web_integration",slug:"/web_integration",permalink:"/web_integration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Web",sidebar_position:3,description:"Web",slug:"/web_integration"},sidebar:"tutorialSidebar",previous:{title:"JS API",permalink:"/js_api"},next:{title:"Babylon.js",permalink:"/business-integration/web_integration/babylonjs"}},d={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Sample Page",id:"sample-page",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"web-integration",children:"Web integration"}),"\n",(0,a.jsxs)(t.p,{children:["MetaPerson Creator can be integrated into your page via an HTML ",(0,a.jsx)(t.code,{children:"<iframe>"}),". ",(0,a.jsx)(t.a,{href:"js_api",children:"JS API"})," messages are used to send events to and receive them from MetaPerson Creator."]}),"\n",(0,a.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsx)(t.p,{children:"1. Create an empty HTML page."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>MetaPerson Creator Web Sample</title>\n     <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n    </style>\n  </head>\n  \n  <body>\n  </body>\n  \n  <script>\n  <\/script>\n\n</html>\n'})}),"\n",(0,a.jsxs)(t.p,{children:["2. Add an ",(0,a.jsx)(t.code,{children:"<iframe>"})," element to the ",(0,a.jsx)(t.code,{children:"<body>"})," section. Specify ",(0,a.jsx)(t.code,{children:"src"})," parameter depending on the ",(0,a.jsx)(t.a,{href:"js_api#metaperson-creator-versions",children:"MetaPerson Creator version"})," you are going to use."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<body>\n  <div style="display: flex; height: 100vh; width: 100vw;">\n    <iframe id="editor_iframe" src="https://metaperson.avatarsdk.com/iframe.html" allow="fullscreen" frameborder="0" style="width: 100%; height: 100%;"></iframe>\n  </div>\n</body>\n'})}),"\n",(0,a.jsxs)(t.p,{children:["3. Add the following JavaScript methods to the ",(0,a.jsx)(t.code,{children:"<script>"})," section."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'document.addEventListener(\'DOMContentLoaded\', function onDocumentReady() {\n  window.addEventListener("message", onWindowMessage);\n});\n\nfunction onWindowMessage(evt) {\n  if (evt.type === "message") {\n    if (evt.data?.source === "metaperson_creator"){\n      let data = evt.data;\n      let evtName = data?.eventName;\n      switch (evtName) {\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Firstly, this code subscribes to the ",(0,a.jsx)(t.code,{children:"DOMContentLoaded"})," event. When the document is loaded, it subscribes to the ",(0,a.jsx)(t.code,{children:"message"})," events. ",(0,a.jsx)(t.code,{children:"onWindowMessage"})," method handles all received messages and finds those that are from the MetaPerson Creator.\nMessages from MetaPerson Creator have ",(0,a.jsx)(t.code,{children:"evt.data.source"})," parameter that is set to ",(0,a.jsx)(t.code,{children:'"metaperson_creator"'}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["4. Add a handle for the ",(0,a.jsx)(t.code,{children:"metaperson_creator_loaded"})," event. Replace ",(0,a.jsx)(t.code,{children:"CLIENT_ID"})," and ",(0,a.jsx)(t.code,{children:"CLIENT_SECRET"})," with ",(0,a.jsx)(t.a,{href:"getting_started#developer-credentials",children:"credentials from your account"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'switch (evtName) {\n  case "metaperson_creator_loaded":\n    let authenticationMessage = {\n      "eventName": "authenticate",\n      "clientId": CLIENT_ID,\n      "clientSecret": CLIENT_SECRET\n    };\n    evt.source.postMessage(authenticationMessage, "*");\n  break;\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["MetaPerson Creator sends the ",(0,a.jsx)(t.code,{children:"metaperson_creator_loaded"})," event when it is loaded and ready to use. After that, you need to authenticate your account in MetaPerson Creator by sending the ",(0,a.jsx)(t.code,{children:"authenticate"})," message with your credentials."]}),"\n",(0,a.jsx)(t.p,{children:"It's important to ensure that you've correctly added your developer credentials to MetaPerson Creator to ensure that you have access to all of the creator's features, including the Export button. If you've incorrectly added your credentials, or if your account doesn't have a Pro plan or higher, the Export button may be inactive."}),"\n",(0,a.jsx)(t.p,{children:"Here you can also send additional messages with configuration settings such as export and UI parameters and add handlers to other events from MetaPerson Creator."}),"\n",(0,a.jsxs)(t.p,{children:["See ",(0,a.jsx)(t.a,{href:"js_api",children:"JS API"})," documentation to get more information about various parameters and events."]}),"\n",(0,a.jsx)(t.h2,{id:"sample-page",children:"Sample Page"}),"\n",(0,a.jsxs)(t.p,{children:["A more comprehensive web sample that covers most ",(0,a.jsx)(t.a,{href:"js_api",children:"JS API"})," methods is available at this link below. You can look at the source of this page to get more implementation details."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://metaperson.avatarsdk.com/business.html",children:"https://metaperson.avatarsdk.com/business.html"})}),"\n",(0,a.jsxs)(t.p,{children:["Following this link, you need to enter your ",(0,a.jsx)(t.a,{href:"getting_started#developer-credentials",children:"credentials"})," and choose the version of Meta Person Creator (Desktop or Mobile) you are going to use."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(6521).A+"",width:"710",height:"251"})}),"\n",(0,a.jsxs)(t.p,{children:["If you experience any issues or have questions, please don't hesitate to contact our ",(0,a.jsx)(t.a,{href:"mailto:support@avatarsdk.com",children:"support team"})," for assistance."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},6521:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/web_sample_start_page-67a66f86a05e88213d427fbf486a4f23.jpg"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const s={},r=a.createContext(s);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);