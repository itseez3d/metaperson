"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[505],{2658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(4848),a=n(8453);const s={sidebar_label:"Web",sidebar_position:3,description:"Web",slug:"/web_integration"},o="Web integration",i={id:"business-integration/web_integration/index",title:"Web integration",description:"Web",source:"@site/docs/business-integration/web_integration/index.mdx",sourceDirName:"business-integration/web_integration",slug:"/web_integration",permalink:"/web_integration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Web",sidebar_position:3,description:"Web",slug:"/web_integration"},sidebar:"tutorialSidebar",previous:{title:"JS API",permalink:"/js_api"},next:{title:"Babylon.js",permalink:"/business-integration/web_integration/babylonjs"}},d={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Sample Page",id:"sample-page",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"web-integration",children:"Web integration"}),"\n",(0,r.jsxs)(t.p,{children:["MetaPerson Creator can be integrated into your page via an HTML ",(0,r.jsx)(t.code,{children:"<iframe>"}),". ",(0,r.jsx)(t.a,{href:"js_api",children:"JS API"})," messages are used to send events to and receive them from MetaPerson Creator."]}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(t.p,{children:"1. Create an empty HTML page."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>MetaPerson Creator Web Sample</title>\r\n     <style>\r\n      * {\r\n        margin: 0;\r\n        padding: 0;\r\n      }\r\n    </style>\r\n  </head>\r\n  \r\n  <body>\r\n  </body>\r\n  \r\n  <script>\r\n  <\/script>\r\n\r\n</html>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["2. Add an ",(0,r.jsx)(t.code,{children:"<iframe>"})," element to the ",(0,r.jsx)(t.code,{children:"<body>"})," section. Specify ",(0,r.jsx)(t.code,{children:"src"})," parameter depending on the ",(0,r.jsx)(t.a,{href:"js_api#metaperson-creator-versions",children:"MetaPerson Creator version"})," you are going to use."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<body>\r\n  <div style="display: flex; height: 100vh; width: 100vw;">\r\n    <iframe id="editor_iframe" src="https://metaperson.avatarsdk.com/iframe.html" allow="fullscreen" frameborder="0" style="width: 100%; height: 100%;"></iframe>\r\n  </div>\r\n</body>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["3. Add the following JavaScript methods to the ",(0,r.jsx)(t.code,{children:"<script>"})," section."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'document.addEventListener(\'DOMContentLoaded\', function onDocumentReady() {\r\n  window.addEventListener("message", onWindowMessage);\r\n});\r\n\r\nfunction onWindowMessage(evt) {\r\n  if (evt.type === "message") {\r\n    if (evt.data?.source === "metaperson_creator"){\r\n      let data = evt.data;\r\n      let evtName = data?.eventName;\r\n      switch (evtName) {\r\n      }\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Firstly, this code subscribes to the ",(0,r.jsx)(t.code,{children:"DOMContentLoaded"})," event. When the document is loaded, it subscribes to the ",(0,r.jsx)(t.code,{children:"message"})," events. ",(0,r.jsx)(t.code,{children:"onWindowMessage"})," method handles all received messages and finds those that are from the MetaPerson Creator.\r\nMessages from MetaPerson Creator have ",(0,r.jsx)(t.code,{children:"evt.data.source"})," parameter that is set to ",(0,r.jsx)(t.code,{children:'"metaperson_creator"'}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["4. Add a handle for the ",(0,r.jsx)(t.code,{children:"metaperson_creator_loaded"})," event. Replace ",(0,r.jsx)(t.code,{children:"CLIENT_ID"})," and ",(0,r.jsx)(t.code,{children:"CLIENT_SECRET"})," with ",(0,r.jsx)(t.a,{href:"getting_started#developer-credentials",children:"credentials from your account"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'switch (evtName) {\r\n  case "metaperson_creator_loaded":\r\n    let authenticationMessage = {\r\n      "eventName": "authenticate",\r\n      "clientId": CLIENT_ID,\r\n      "clientSecret": CLIENT_SECRET\r\n    };\r\n    evt.source.postMessage(authenticationMessage, "*");\r\n  break;\r\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["MetaPerson Creator sends the ",(0,r.jsx)(t.code,{children:"metaperson_creator_loaded"})," event when it is loaded and ready to use. After that, you need to authenticate your account in MetaPerson Creator by sending the ",(0,r.jsx)(t.code,{children:"authenticate"})," message with your credentials."]}),"\n",(0,r.jsx)(t.p,{children:"It's important to ensure that you've correctly added your developer credentials to MetaPerson Creator to ensure that you have access to all of the creator's features, including the Export button. If you've incorrectly added your credentials, or if your account doesn't have a Pro plan or higher, the Export button may be inactive."}),"\n",(0,r.jsx)(t.p,{children:"Here you can also send additional messages with configuration settings such as export and UI parameters and add handlers to other events from MetaPerson Creator."}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"js_api",children:"JS API"})," documentation to get more information about various parameters and events."]}),"\n",(0,r.jsx)(t.h2,{id:"sample-page",children:"Sample Page"}),"\n",(0,r.jsxs)(t.p,{children:["A more comprehensive web sample that covers most ",(0,r.jsx)(t.a,{href:"js_api",children:"JS API"})," methods is available at this link below. You can look at the source of this page to get more implementation details."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://metaperson.avatarsdk.com/business.html",children:"https://metaperson.avatarsdk.com/business.html"})}),"\n",(0,r.jsxs)(t.p,{children:["Following this link, you need to enter your ",(0,r.jsx)(t.a,{href:"getting_started#developer-credentials",children:"credentials"})," and choose the version of Meta Person Creator (Desktop or Mobile) you are going to use."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(4602).A+"",width:"710",height:"251"})}),"\n",(0,r.jsxs)(t.p,{children:["If you experience any issues or have questions, please don't hesitate to contact our ",(0,r.jsx)(t.a,{href:"mailto:support@avatarsdk.com",children:"support team"})," for assistance."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4602:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/web_sample_start_page-67a66f86a05e88213d427fbf486a4f23.jpg"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);