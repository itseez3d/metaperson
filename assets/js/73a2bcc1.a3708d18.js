"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[421],{8142:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(4848),i=t(8453);const s={sidebar_label:"Avatar SDK Leap",description:"Leap Realistic Facial Animation"},r="Leap Realistic Facial Animation",o={id:"leap",title:"Leap Realistic Facial Animation",description:"Leap Realistic Facial Animation",source:"@site/docs/leap.md",sourceDirName:".",slug:"/leap",permalink:"/leap",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Avatar SDK Leap",description:"Leap Realistic Facial Animation"},sidebar:"tutorialSidebar",next:{title:"MetaPerson Creator",permalink:"/"}},c={},l=[{value:"Leap iOS application for dataset capture",id:"leap-ios-application-for-dataset-capture",level:2},{value:"Leap UE plugin",id:"leap-ue-plugin",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Minimal technical requirements",id:"minimal-technical-requirements",level:3},{value:"Sample project",id:"sample-project",level:3},{value:"Rendering Video",id:"rendering-video",level:3},{value:"Leap Unity plugin",id:"leap-unity-plugin",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Getting Started",id:"getting-started",level:3},{value:"Customization Sample",id:"customization-sample",level:3},{value:"Dependencies",id:"dependencies",level:4},{value:"Steps To Run",id:"steps-to-run",level:4},{value:"How It Works",id:"how-it-works",level:3},{value:"Compute Avatar and Animation",id:"compute-avatar-and-animation",level:4},{value:"Play Animation",id:"play-animation",level:4},{value:"Avatar Customization",id:"avatar-customization",level:4},{value:"Leap Demo Application For Windows",id:"leap-demo-application-for-windows",level:2},{value:"Support",id:"support",level:2}];function d(e){const a={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"leap-realistic-facial-animation",children:"Leap Realistic Facial Animation"}),"\n",(0,n.jsx)(a.p,{children:"We are thrilled to announce the beta version of the Avatar SDK Leap. Leap is facial motion capture software that transforms a video of a person speaking on camera into a 3D animation of the person's avatar. By leveraging neural networks to predict the shape and texture of the avatar, Leap delivers an unprecedented level of visual quality that transcends the uncanny valley. Currently, users will need an iPhone with the Leap mobile app to record a video, but support for videos captured with standard cameras will be added shortly."}),"\n",(0,n.jsx)("div",{class:"iframe-container",children:(0,n.jsx)("iframe",{width:"560",height:"315",allow:"fullscreen",src:"https://www.youtube.com/embed/VY4kIyohjcc?si=PKIum24G0Hr9vnxx"})}),"\n",(0,n.jsx)(a.p,{children:"\xa0"}),"\n",(0,n.jsx)(a.p,{children:"Leap has two essential components that combine to bring innovative animation technology to life. The first component is a mobile app that captures detailed and expressive facial animation. This app allows users to record and process facial movements efficiently. The second component includes game engine plugins that take this rich facial animation data and seamlessly convert it into an animation format suitable for the target platform."}),"\n",(0,n.jsx)(a.h2,{id:"leap-ios-application-for-dataset-capture",children:"Leap iOS application for dataset capture"}),"\n",(0,n.jsx)(a.p,{children:"The Leap iOS app captures user facial animation data. The quality of this data greatly affects the animation, so please pay close attention to the tips we provide:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"For the best results, position yourself so your face and upper shoulders are clearly visible"}),"\n",(0,n.jsx)(a.li,{children:"Please keep your head at a slight angle - no more than 15 degrees is perfect"}),"\n",(0,n.jsx)(a.li,{children:"Try to keep still. Steady hands mean sharper shots. Let's keep things smooth!"}),"\n",(0,n.jsx)(a.li,{children:"Make sure your face is evenly lit. Balanced lighting helps capture all the details clearly!"}),"\n",(0,n.jsx)(a.li,{children:"Please keep your forehead clear of any hair. This helps capture your face more accurately."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"Click on the Start button and prepare yourself for capturing animation."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(6924).A+"",width:"311",height:"673"})}),"\n",(0,n.jsx)(a.p,{children:"Click on the Record button to start capturing data."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(2489).A+"",width:"311",height:"673"})}),"\n",(0,n.jsx)(a.p,{children:"When you are ready, stop recording and export the archive with your data."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(5668).A+"",width:"311",height:"673"})}),"\n",(0,n.jsx)(a.p,{children:"We'll use this archive in the next step to make facial animations."}),"\n",(0,n.jsx)(a.h2,{id:"leap-ue-plugin",children:"Leap UE plugin"}),"\n",(0,n.jsx)(a.p,{children:"Avatar SDK Leap UE plugin simplifies the integration of revolutionary Leap Facial Capture technology with your Unreal Engine projects. After capturing your data with the Leap application for iPhone, export the collected data to your computer disk. Using this data, the Avatar SDK Leap UE plugin creates a realistic facial animation sequence for your 3D avatar in a few clicks. The plugin will create all the required assets in a few minutes, including skeletal mesh, textures, materials, and animations."}),"\n",(0,n.jsx)(a.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"OS: Windows"}),"\n",(0,n.jsx)(a.li,{children:"Unreal Engine version: 5.3 or 5.4"}),"\n",(0,n.jsx)(a.li,{children:"You will need an iPhone with Leap application installed to capture the facial animation data."}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"minimal-technical-requirements",children:"Minimal technical requirements"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"RAM: 16 GB"}),"\n",(0,n.jsx)(a.li,{children:"GPU: GeForce RTX 3050"}),"\n",(0,n.jsx)(a.li,{children:"CPU: Intel i7 7th gen"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"sample-project",children:"Sample project"}),"\n",(0,n.jsx)(a.p,{children:"The Leap plugin comes with a sample UE project to help you start with facial animation creation. Open the project by double-clicking on the LeapDemo. project file."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(6233).A+"",width:"886",height:"302"})}),"\n",(0,n.jsx)(a.p,{children:"Another option - in the Unreal Engine Project browser, click on the Browse button in the Recent Projects partition and provide a path to the LeapDemo:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(2507).A+"",width:"1478",height:"1011"})}),"\n",(0,n.jsxs)(a.p,{children:["When you open the project, the Leap sample level will be loaded. You can explore the sample animation provided with the project at ",(0,n.jsx)(a.code,{children:"/Content/AvatarSdkLeap/Victor"}),"."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(3075).A+"",width:"1470",height:"779"})}),"\n",(0,n.jsxs)(a.p,{children:["To import your animation, click the ",(0,n.jsx)(a.code,{children:"Window->Avatar SDK Leap"})," menu to open the plugin window."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(4851).A+"",width:"625",height:"896"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(9173).A+"",width:"848",height:"604"})}),"\n",(0,n.jsxs)(a.p,{children:["Choose the name for your ",(0,n.jsx)(a.a,{href:"https://dev.epicgames.com/documentation/en-us/unreal-engine/sequences-shots-and-takes-in-unreal-engine#levelsequences",children:"level sequence"}),", and choose a type of avatar to be generated. Click the ",(0,n.jsx)(a.code,{children:"Use materials for Ray tracing"})," if you intend to use path tracing to render your level sequence. For your first try, we recommend leaving it in its default state."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(7070).A+"",width:"848",height:"604"})}),"\n",(0,n.jsxs)(a.p,{children:["Click on the ",(0,n.jsx)(a.code,{children:"Import Leap Animation"})," button and provide a path with the archive you got after capturing data with your iPhone Leap application. After that, the MetaPerson window will open, and the avatar generation process will begin."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(4139).A+"",width:"1915",height:"1115"})}),"\n",(0,n.jsx)(a.p,{children:"When the avatar is ready, you can customize it extensively. You can choose from various outfits, from casual to formal, ensuring your avatar matches your style perfectly. Additionally, explore numerous haircut styles to give your avatar a distinct look that reflects your personality. We plan to add almost all assets currently available in the MetaPerson Creator later, so stay tuned."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(1383).A+"",width:"1924",height:"1114"})}),"\n",(0,n.jsx)(a.p,{children:"Once you are ready with customization, click on the export button. After you click, wait for the export process to finish. This process might take a little time."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(301).A+"",width:"1916",height:"1108"})}),"\n",(0,n.jsx)(a.p,{children:"Once the export process has been successfully completed, it will take a few more seconds to download the avatar animation file and import it to Unreal Engine."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(1100).A+"",width:"1912",height:"659"})}),"\n",(0,n.jsxs)(a.p,{children:["Now the Level Sequence asset with the animation is ready, and you may open it by clicking on the corresponding button. Click the ",(0,n.jsx)(a.code,{children:"Open Directory"})," button to explore all the assets imported into your project."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(4759).A+"",width:"836",height:"596"})}),"\n",(0,n.jsxs)(a.p,{children:["The imported animation files may be found in the ",(0,n.jsx)(a.code,{children:"/Content/AvatarSdkLeap"})," directory:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(8890).A+"",width:"679",height:"328"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(5481).A+"",width:"1481",height:"463"})}),"\n",(0,n.jsx)(a.p,{children:"The created level sequence contains tracks for the camera, texture, and body skeletal mesh. You can edit the created tracks and assets according to your requirements."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(9388).A+"",width:"1600",height:"451"})}),"\n",(0,n.jsxs)(a.p,{children:["A corresponding Level Sequence Actor will be placed on the current opened level. This Level Sequence Actor may be used to create cinematic content for games and traditional animation in Unreal Engine. The Actor is placed at the location that can be configured in the plugin settings ",(0,n.jsx)(a.code,{children:"Edit->Project Settings->Avatar SDK Leap"}),":"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(309).A+"",width:"1600",height:"432"})}),"\n",(0,n.jsx)(a.h3,{id:"rendering-video",children:"Rendering Video"}),"\n",(0,n.jsx)(a.p,{children:"To render the image frame sequence from your Level Sequence, click on the corresponding button in the Sequencer:"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(9447).A+"",width:"1076",height:"572"})}),"\n",(0,n.jsxs)(a.p,{children:["Choose among the predefined Rendering Settings, or create your own. We recommend to use the ",(0,n.jsx)(a.code,{children:"RA_No_PT_Config_FAST"})," to get the fastest result:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(9564).A+"",width:"1020",height:"533"})}),"\n",(0,n.jsxs)(a.p,{children:["The config ",(0,n.jsx)(a.code,{children:"RA_No_PT_Config_MID"})," should give better results and does not use path tracing.\nThe config ",(0,n.jsx)(a.code,{children:"RA_PT_Config"})," is made for path tracing rendering. These configurations represent a trade-off between quality and rendering time.\nClick on the ",(0,n.jsx)(a.code,{children:"Render Local"})," button to start the rendering:"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(9763).A+"",width:"1153",height:"415"})}),"\n",(0,n.jsxs)(a.p,{children:["By default, the Level Sequence will be rendered as a sequence of PNG images that can be found in the ",(0,n.jsx)(a.code,{children:"\\Saved\\MovieRenders"})," subdirectory of the project directory. Use video editing software to create video from the set of images. A good option is to use FFmpeg. In such case, the command may look like this:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:'ffmpeg -r 60  -i "Saved\\MovieRenders\\LevelSequence_RealisticAnim_0.%04d.png" -c:v libx265 -crf 2 -vf format=yuv420p10le -tag:v hvc1  "I:\\renders\\video0.mp4" -y\n'})}),"\n",(0,n.jsx)(a.h2,{id:"leap-unity-plugin",children:"Leap Unity plugin"}),"\n",(0,n.jsx)(a.p,{children:"With just a few clicks, the Avatar SDK Leap Unity plugin creates a realistic facial animation sequence for your 3D avatar. It requires you to copy captured data from the Leap application to your computer, where the plugin processes it."}),"\n",(0,n.jsx)(a.h3,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"OS: Windows 10 64-bit"}),"\n",(0,n.jsx)(a.li,{children:"Unity 2022.3.17f1 or above"}),"\n",(0,n.jsx)(a.li,{children:"Intel or AMD processor with AVX extension set (recommended i7-7700HQ or higher)"}),"\n",(0,n.jsx)(a.li,{children:"6 GB of RAM available"}),"\n"]}),"\n",(0,n.jsx)(a.h3,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"Download and extract the archive containing the Avatar SDK Leap Unity project."}),"\n",(0,n.jsx)(a.li,{children:"Open the project in Unity 2022.3.17f1 or later."}),"\n",(0,n.jsxs)(a.li,{children:["Open the ",(0,n.jsx)(a.code,{children:"Assets/AvatarSDK/Leap/Samples/1-GettingStartedSample.unity"})," scene."]}),"\n",(0,n.jsx)(a.li,{children:"Press the Play button in the Unity Editor to run the scene."}),"\n",(0,n.jsxs)(a.li,{children:["Use the Select Archive button to choose the archive containing captured data from the iPhone Leap application.",(0,n.jsx)(a.br,{}),"\n","There is an archive with the sample avatar in ",(0,n.jsx)(a.code,{children:"Assets/StreamingAssets/itseez3d/avatar_sdk_leap/sample_avatar"})," directory. You can use it if you don't have the Leap application."]}),"\n",(0,n.jsx)(a.li,{children:"Select the avatar's gender and press the Generate to compute the 3D avatar model and its animation."}),"\n",(0,n.jsx)(a.li,{children:"After computation, press the Play button to preview the animation."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(4902).A+"",width:"1495",height:"948"})}),"\n",(0,n.jsx)(a.h3,{id:"customization-sample",children:"Customization Sample"}),"\n",(0,n.jsxs)(a.p,{children:["This sample demonstrates how to customize a generated avatar by modifying its haircut and outfit using the ",(0,n.jsx)(a.a,{href:"https://metaperson.avatarsdk.com/",children:"MetaPerson Creator"}),".\nThe MetaPerson Creator page is displayed within a web view component in the Unity scene.\nThe process involves generating a local avatar, selecting haircuts and outfits via MetaPerson Creator, and downloading the customized avatar back to display on the scene."]}),"\n",(0,n.jsx)(a.h4,{id:"dependencies",children:"Dependencies"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.strong,{children:"Web View Component"})}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["To show the ",(0,n.jsx)(a.a,{href:"https://metaperson.avatarsdk.com/",children:"MetaPerson Creator"})," page in the Unity scene, a web view component is required.\nThis sample uses the ",(0,n.jsx)(a.a,{href:"https://store.vuplex.com/webview/windows-mac",children:"Vuplex Web View"}),". ",(0,n.jsx)(a.a,{href:"mailto:support@itseez3d.com",children:"Contact us"})," for a 20% discount on this plugin."]}),"\n",(0,n.jsxs)(a.ol,{start:"2",children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.strong,{children:"File Browsing Support"})}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["To open a file selection dialog in a standalone Windows application, the sample uses the ",(0,n.jsx)(a.a,{href:"https://assetstore.unity.com/packages/tools/utilities/open-file-dialog-for-windows-282619",children:"Open File Dialog for Windows"})," plugin.\nIf using this plugin, add the ",(0,n.jsx)(a.code,{children:"USE_FILE_DIALOG"})," script compilation definition to your project."]}),"\n",(0,n.jsx)(a.h4,{id:"steps-to-run",children:"Steps To Run"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["Open the ",(0,n.jsx)(a.code,{children:"Assets/AvatarSDK/Leap/Samples/2-CustomizationSample.unity"})," scene."]}),"\n",(0,n.jsx)(a.li,{children:"Press the Play button in the Unity Editor to run the scene."}),"\n",(0,n.jsx)(a.li,{children:"Select an archive containing captured data from the iPhone Leap application or generate a sample avatar."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(2479).A+"",width:"840",height:"480"})}),"\n",(0,n.jsxs)(a.ol,{start:"4",children:["\n",(0,n.jsxs)(a.li,{children:["While the animation is being processed, open the ",(0,n.jsx)(a.a,{href:"https://metaperson.avatarsdk.com/",children:"MetaPerson Creator"}),' to customize the avatar.\nYou can skip this step to use the default outfit and the "Generated" haircut.']}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(3918).A+"",width:"840",height:"480"})}),"\n",(0,n.jsxs)(a.ol,{start:"5",children:["\n",(0,n.jsx)(a.li,{children:'After completing the avatar customization, press the "Go ahead" button to download the updated model and display it in the scene.'}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(757).A+"",width:"840",height:"480"})}),"\n",(0,n.jsxs)(a.ol,{start:"6",children:["\n",(0,n.jsx)(a.li,{children:"Once the model is loaded, press the Play button to run the animation."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(2812).A+"",width:"840",height:"480"})}),"\n",(0,n.jsx)(a.h3,{id:"how-it-works",children:"How It Works"}),"\n",(0,n.jsx)(a.h4,{id:"compute-avatar-and-animation",children:"Compute Avatar and Animation"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"LeapProcess"})," class handles avatar and animation computation. Call its ",(0,n.jsx)(a.code,{children:"GenerateAvatar"})," method, passing the path to the archive with captured data and the avatar's gender.\nComputations are asynchronous. Upon completion, retrieve the ",(0,n.jsx)(a.code,{children:"AvatarCode"})," for the generated model."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:'LeapProcess leapProcess = new LeapProcess();\nbool isGenerated = await leapProcess.GenerateAvatar("path_to_an_archive_with_captured_data", AvatarGender.Male);\nif (isGenerated)\n{\n  string avatarCode = leapProcess.AvatarCode;\n}\nelse\n  Debug.LogError("Failed to generate avatar");\n'})}),"\n",(0,n.jsx)(a.h4,{id:"play-animation",children:"Play Animation"}),"\n",(0,n.jsxs)(a.p,{children:["To show the avatar and to play the animation, you should add the ",(0,n.jsx)(a.code,{children:"Leap Animator"})," component to the scene and specify the ",(0,n.jsx)(a.a,{href:"https://github.com/avatarsdk/metaperson-loader-unity",children:(0,n.jsx)(a.code,{children:"Meta Person Loader"})})," component."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(3499).A+"",width:"796",height:"341"})}),"\n",(0,n.jsxs)(a.p,{children:["Load the model using the ",(0,n.jsx)(a.code,{children:"LoadModel"})," method, passing the avatar code, and then call ",(0,n.jsx)(a.code,{children:"PlayAnimation"})," to start playback."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:'string avatarCode = leapProcess.AvatarCode;\nbool isLoaded = await leapAnimator.LoadModel(avatarCode);\nif (isLoaded)\n  leapAnimator.PlayAnimation();\nelse\n  Debug.LogError("Failed to load avatar model");\n'})}),"\n",(0,n.jsx)(a.h4,{id:"avatar-customization",children:"Avatar Customization"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.a,{href:"https://metaperson.avatarsdk.com/",children:"MetaPerson Creator"})," is used to customize the avatar.\nFor detailed steps on integrating MetaPerson Creator into a Unity desktop application, refer to the ",(0,n.jsx)(a.a,{href:"business-integration/unity/windows_and_macos",children:"MetaPerson Creator Integration Guide"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["To generate an avatar, send a ",(0,n.jsx)(a.code,{children:"generate_leap_avatar"})," event message to MetaPerson Creator using the ",(0,n.jsx)(a.a,{href:"js_api",children:"JS API"}),". This message must include:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Avatar gender"}),": Specify the desired gender."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Base64-encoded ZIP archive"}),": A ZIP archive containing the following files:","\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.code,{children:"photo.jpg"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.code,{children:"data.bin"})}),"\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.code,{children:"faceGeometry1.obj"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"These files can be extracted from the archive created by the iPhone Leap application."}),"\n",(0,n.jsx)(a.p,{children:"Here\u2019s an example message structure:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"let generateAvatarMessage = \n{\n  'eventName': 'generate_leap_avatar',\n  'gender' : genderStr,\n  'zipArchiveBase64' : zipArchiveBase64Str\n};\nwindow.postMessage(generateAvatarMessage, '*');\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Use the ",(0,n.jsx)(a.code,{children:"LeapUtils.PrepareArchiveForCloudComputations"})," method to prepare an archive to send to MetaPerson Creator."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:'byte[] archiveBytes = LeapUtils.PrepareArchiveForCloudComputations("local_leap_avatar_code");\nstring base64Archive = Convert.ToBase64String(archiveBytes);\n'})}),"\n",(0,n.jsxs)(a.p,{children:["Once MetaPerson Creator receives the ",(0,n.jsx)(a.code,{children:"generate_leap_avatar"})," message, it computes the avatar and allows you to customize it."]}),"\n",(0,n.jsxs)(a.p,{children:["Use the ",(0,n.jsx)(a.a,{href:"js_api#export-avatar",children:"Export Avatar JS API"})," message to export and download the customized avatar."]}),"\n",(0,n.jsx)(a.p,{children:"The animation generated by the Avatar SDK Leap Unity plugin can then be applied to the customized avatar."}),"\n",(0,n.jsx)(a.h2,{id:"leap-demo-application-for-windows",children:"Leap Demo Application For Windows"}),"\n",(0,n.jsxs)(a.p,{children:["We provide a Leap Demo Application that allows you to quickly generate an avatar and explore how this technology works.\nThe application is based on the ",(0,n.jsx)(a.a,{href:"#customization-sample",children:"Unity Customization Sample"})," but does not require a Unity installation."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(3875).A+"",width:"1920",height:"1039"})}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsx)(a.li,{children:"Download and extract the archive containing the Avatar SDK Leap Demo application."}),"\n",(0,n.jsx)(a.li,{children:"Run the Avatar SDK Leap.exe executable."}),"\n",(0,n.jsx)(a.li,{children:"You can select an archive containing captured data from the iPhone Leap application or generate a sample avatar."}),"\n",(0,n.jsx)(a.li,{children:"While the animation is being processed, press the Customize button to choose outfits and haircuts for the avatar. You can skip this step."}),"\n",(0,n.jsx)(a.li,{children:"After computation, press the Play button to preview the animation."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"support",children:"Support"}),"\n",(0,n.jsxs)(a.p,{children:["Please feel free to ask any questions about the Avatar SDK Leap at ",(0,n.jsx)(a.a,{href:"mailto:support@avatarsdk.com",children:"support@avatarsdk.com"})]})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},5481:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_assets-731573f31c735defa76b98f0b7cf3052.png"},1383:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_customization-3372a66e9de965f0836a05bd8829673a.png"},3875:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_demo_app-eaee901d7235e8e4d83b58f21d0de251.JPG"},8890:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_dest-c02b204965c2cc200f58a647f9d3d67f.png"},6233:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_dir-d95fcf0d6a9be62f8ceaca5e78180e32.png"},1100:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_downloading-df1c277835f942b88d48b1d251ca6bca.png"},5668:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_export-363837287c5f12fe2e33a85b7ca48e0e.png"},301:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_export_btn-6c5a5ec11684eedf85d6b85ead6ee9e5.png"},4139:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_generate-0c3cd8feddafb9a8b5b77f2f945d3b59.png"},2507:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_launch-83b1cc673916b73ce693f0b9ea412d25.png"},4851:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_menu-53746b213c26db54bc7a75e9867b4efd.png"},2489:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_record-65d49a9bfca02d9fa24072489d6add1b.png"},9763:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_render_start-9bb997aafd4b05a562238187ee8c9db6.png"},9564:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_rendering-005019fc3d65c9c1b87cb6ae204cd565.png"},9388:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_seq1-49f86a96a90de4d7b495ba5ff693adbc.png"},9447:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_seq2-775cac7bf041eb2359dab400e833537c.png"},309:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_settings-d6e600d916623823dcb9cc81556485e2.png"},6924:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_start-fe8a94797bc1e1cf430f33c32329be2b.png"},3499:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_unity_animator_component-7b6a8396e5e335751c2a2291c9b25378.jpg"},2479:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_unity_archive_selection-f82128edcb16c7ca373784bc5ad5ae78.JPG"},3918:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_unity_customize_step-7889cc8ccdbb5401cb1ec4d03d69211a.JPG"},757:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_unity_export_step-ad92148bd50b3dcf45e74fa4596fb5c0.JPG"},2812:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_unity_play_animation_step-75f64982f71634ec7fbf75662462ea7e.JPG"},4902:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_unity_sample-d9d83391e794211882cbe88f36bdab79.jpg"},3075:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_victor-644fb362d033cf98b5ff81b506a29f9c.png"},9173:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_window1-972e83c0c7260f90e175806791bdf226.png"},7070:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_window2-f4fadfe8e6e75fbdd49a534e74f6c1f3.png"},4759:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/leap_window3-b2554426323261a45476d1c5a56b0b09.png"},8453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>o});var n=t(6540);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);