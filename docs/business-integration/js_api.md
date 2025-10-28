---
sidebar_label: 'JS API'
sidebar_position: 2
description: JS API
slug: /js_api
---
# JS API

Communication between MetaPerson Creator and your HTML page or application is performed via a messaging mechanism. JavaScript messages with special events are both posted to and received from the MetaPerson Creator.
Once MetaPerson Creator page is loaded, it sends a `metaperson_creator_loaded` event. After that, you can send JS messages to MetaPerson Creator, e.g. configuration parameters.

As an example, you can look at the [Web integration sample](web_integration).

## MetaPerson Creator Versions
There are two versions of MetaPerson Creator: **Desktop** and **Mobile**. It is recommended to use the former on desktop platforms and the latter on mobile platforms.

Use the following URLs to integrate these versions into your site or application:

**Desktop**: https://metaperson.avatarsdk.com/iframe.html

**Mobile**: https://mobile.metaperson.avatarsdk.com/generator

## Configuration Messages

These messages can be sent only once right after MetaPerson Creator was loaded.

* [**Authentication parameters**](#authentication-parameters) - in this message, you should specify your developer credentials. This ensures that your website or application is authorized to access the creator. 
If you provide an incorrect CLIENT_ID or CLIENT_SECRET, export functionality will be unavailable. So please check these values. Go to [developer credentials](getting_started#developer-credentials) to get more info.

* [**Export Parameters**](#export-parameters) - in this message, you can configure export parameters for your avatar. You can specify the format of the exported file (such as GLB, GLTF, or FBX), the level of detail for the exported mesh, the resolution of textures, and the format.

* [**UI Parameters**](#ui-parameters) - in this message, you can configure some parts of the UI of MetaPerson Creator. E.g. hide some buttons or rename text for them.

### Authentication Parameters

Here's an example of how you can authenticate your account in MetaPerson Creator. You need [developer credentials](getting_started#developer-credentials) from your account.

```js
let authenticationMessage = {
    "eventName": "authenticate",
    "clientId": CLIENT_ID,
    "clientSecret": CLIENT_SECRET,
    "accessToken": ACCESS_TOKEN
};
evt.source.postMessage(authenticationMessage, "*");
```

Message parameters:

* `eventName` - should be set to `authenticate`. The event name tells MetaPerson Creator which request you're making.
* `clientId` - CLIENT_ID of your developer account.
* `clientSecret` - CLIENT_SECRET of your developer account.
* `accessToken` - for enhanced security, you can provide an `accessToken` instead of exposing `clientId` and `clientSecret` in client-side code. The token should be obtained via [REST API](https://api.avatarsdk.com/samples/curl_metaperson_20/#authorization). 
Below is the CURL sample for getting the token.

```js
CLIENT_ID="xFXeBr4shmgHUiymYwW7sDOO9BbwtL3eJkCE3OKu"
CLIENT_SECRET="hpAYUxCLfKHEkIvRgXTZzGyMvgDj7Tdg4gBhu5nmXjtW0ODMj0HUCt3tmKMBtm94qzcNsVhK6xXj2PKEop7BxBi1W9XMvyx3p9tJVP6mGY19THuS6mNSnJiQI1vQ0QE6"


curl -X POST --user "$CLIENT_ID:$CLIENT_SECRET" \
     "https://api.avatarsdk.com/o/token/" \
     -F "grant_type=client_credentials"

{
  "access_token": "PAvD64lbikgVA0GzxgKV2ZhLnPbZ8P",
  "token_type": "Bearer",
  "expires_in": 36000,
  "scope": "read write"
}

TOKEN="PAvD64lbikgVA0GzxgKV2ZhLnPbZ8P"
```

MetaPerson Creator sends the result of the authentication in the [`authentication_status`](#authentication-status) event.

### Export Parameters

A message with export parameters allows you to customize the output of your avatar by specifying things like the file format, resolution, and other options. 

Here's an example of how you can specify the export parameters:

```js
let exportParametersMessage = {
    "eventName": "set_export_parameters",
    "format" : "gltf",
    "lod" : 1,
    "textureProfile" : "1K.jpg",
    "useZip" : true,
    "headOnly" : "false",
    "removeNeckLayers" : 0
    "exportTemplateJson": "{\"outfits_shoes\":{\"apply_visibility_masks\" : false}}"
};
evt.source.postMessage(exportParametersMessage, "*");
```

Message parameters:

* `eventName` - should be set to `set_export_parameters`. This tells MetaPerson Creator which request you're making.
* `format` - this parameter specifies the format of the exported file. Supported formats are `gltf`, `glb`, and `fbx`.
* `lod` - this parameter specifies the level of detail (LOD) for the exported file. The higher the LOD, the more detailed the exported file will be. Supported LODs are: `1` and `2`.
* `textureProfile` - this parameter specifies the texture profile for the exported file. This determines the quality of the textures used in the exported file. Supported texture profiles are:
  * `4K.png`, `2K.png`, `1K.png`
  * `4K.jpg`, `2K.jpg`, `1K.jpg`
  * `4K.webp`, `2K.webp`, `1K.webp`
* `useZip` - by default, MetaPerson Creator returns a link to a ZIP archive with an exported model. You can set it to `false`, to get a direct link to a GLB of FBX file.
* `headOnly` - exports only the head portion of a 3D model.
* `removeNeckLayers` - controls how many polygon layers of the neck to remove/cut from the model. Supported values: 
  * `0-12` for LOD1, 
  * `0-8` for LOD2.
* `removeTransparentCornea` - if `true`, removes the Cornea mesh when transparent.
* `animationName` - name of the animation to export.
* `animationAsBindPose` - if `true`, uses the first animation frame as the bind pose (instead of T-Pose).
* `exportModelInfo` - if `true`, the exported archive includes a *model.json* file containing the avatar's color data: skin, hair, eyes, eyebrows and lips.
* `exportTemplateJson` - JSON with common parameters that are applied to all exported avatars. See more details about [export template](#export-template). 

**Available Animations**

* Male
  * Animations: `Male_Animation_Walk`, `Male_Animation_Idle`.
  * Poses: `Male_Pose_01` to `Male_Pose_08`, `Male_Pose_A`, `Male_Pose_Idle`.
* Female
  * Animations: `Female_Animation_WalkRelaxed`, `Female_Animation_Idle`.
  * Poses: `Female_Pose_01` to `Female_Pose_05`, `Female_Pose_A`, `Female_Pose_Idle`.
* Facial Animations: `ArKitDemo_001` to `ArKitDemo_005`.
 
**Notes**
 * Mobile Limitations: The following parameters are **not supported** in the Mobile version: `headOnly`, `removeNeckLayers`, `removeTransparentCornea`, `animationName`, `animationAsBindPose`.

### UI Parameters

This message allows you to make some customizations in the UI of MetaPerson Creator. Some parameters differ between Mobile and Desktop versions, so we split this description correspondingly. 

#### MetaPerson Creator Desktop

```js
let uiParametersMessage = {
    // Common parameters for Mobile and Desktop versions
    "eventName": "set_ui_parameters",
    "isExportButtonVisible" : true,
    "isLoginButtonVisible": true,
    "outfitsBlackList" : ["ARPI", "SEVAN"],
    "skipViewerControls" : ['color', 'animations'],
    
    // Desktop version specific parameters
    "isScreenshotButtonVisible": true,
    "closeExportDialogWhenExportCompleted" : false,
    "isLanguageSelectionVisible" : true,
    "language" : "",
    "showLatestCreatedAvatar" : true,
    "metaPersonLabelText" : "MetaPerson Avatars",
    "isTakeSelfieButtonVisible" : true,
    "isBrowsePhotoButtonVisible" : true,
    "showSampleAvatars" : true,
    "ageSelectionAvailable" : true,
    "pipelineSelectionAvailable" : true,
    "defaultPipeline" : "male",
    "computationParametersPanelVisible" : true,
    "enableLipsync": false,
    "isGifButtonVisible" : false,
    "isPngButtonVisible" : false
};
evt.source.postMessage(uiParametersMessage, "*");
```

Message parameters:

* `eventName` - should be set to `set_ui_parameters`. This tells MetaPerson Creator which request you're making.
* `isExportButtonVisible` - this parameter specifies if the Export button is visible. Default value: `true`.
* `isLoginButtonVisible` - this parameter specifies if the Login button is visible. Default value: `true`.
* `outfitsBlackList` - a list of outfits that are not available and not shown in the MetaPerson Creator. The complete list of outfits with their names can be found in [REST API documentation](https://api.avatarsdk.com/#id5). By default, all outfits are available. 
* `skipViewerControls` - a list of controls that are hidden during customization of the avatar. Available values: `'style', 'outfits', 'hairstyles', 'head_accessories', 'jewelry', 'hands_accessories', 'body', 'head', 'eyes', 'color', 'animations', 'facial_animations', 'lighting'`.
* `isScreenshotButtonVisible` - this parameter specifies if the Screenshot button is visible. Default value: `true`.
* `closeExportDialogWhenExportCompleted` - this parameter specifies if the export dialog is shown after an avatar is exported. Default value: `false`.
* `isLanguageSelectionVisible` - this parameter specifies if the control to select a UI language is visible. Default value: `true`.
* `language` - this parameter specifies a UI language. Supported values: `EN`, `漢語`. English is set by default if the parameter is empty or isn't set.
* `showLatestCreatedAvatar` - this parameter specifies if the latest created avatar can be opened from the home screen. Default value: `true`.
* `metaPersonLabelText` - a text of the label on the main screen. Default value is "MetaPerson Avatars".
* `isTakeSelfieButtonVisible` - specifies if the "Take a selfie" button is visible.
* `isBrowsePhotoButtonVisible` - specifies if the "Browse for photo" button is visible.
* `showSampleAvatars` - specifies if sample avatars are available.
* `ageSelectionAvailable` - specifies whether UI controls for age selection are available. If this parameter is set to false, avatars are generated as 16+ by default.
* `pipelineSelectionAvailable` - specifies whether UI controls for selecting the avatar's gender are available. If this parameter is set to false, male avatars are generated by default unless otherwise specified by the `defaultPipeline` parameter.
* `defaultPipeline` - specifies the default avatar pipeline to be generated (`male` or `female`) if the pipeline selection is disabled in the UI.
* `computationParametersPanelVisible` - specifies if a right panel with computation parameters (pipeline and age selection) is visible.
* `enableLipsync` - enables LipSync. Default value: `false`.
* `isGifButtonVisible` - specifies if the button to generate GIF is visible. Default value: `false`.
* `isPngButtonVisible` - specifies if the button to generate PNG images is visible. Default value: `false`.


#### MetaPerson Creator Mobile

```js
let uiParametersMessage = {
    "eventName": "set_ui_parameters",
    "isExportButtonVisible": true,
    "isLoginButtonVisible": false,
    "isHomeButtonVisible": true,
    "outfitsBlackList" : ["ARPI", "SEVAN"],
    "skipViewerControls" : ['age', 'animations'],
    
    // Mobile version specific parameters
    "isScreenshotButtonVisible": true,
    "isNoPhotoVisible": true,
    "exportButtonText": "Export",
    "age": "teen12",
    "theme": "dark", 
    "gender": "female",
};
evt.source.postMessage(uiParametersMessage, "*");
```

The parameters of this code are:

* `eventName` - should be set to `set_ui_parameters`. This tells MetaPerson Creator which request you're making.
* `isExportButtonVisible` - this parameter specifies if the Export button is visible. Default value: `true`.
* `isLoginButtonVisible` - this parameter specifies if the Login button is visible. Default value: `true`.
* `isHomeButtonVisible` - this parameter specifies if the Home button is visible. Default value: `true`.
* `outfitsBlackList` - a list of outfits that are not available and not shown in the MetaPerson Creator. The complete list of outfits with their names can be found in [REST API documentation](https://api.avatarsdk.com/#id5). By default, all outfits are available. 
* `skipViewerControls` - a list of controls that are hidden during customization of the avatar. Available values: `'outfits','hairstyles','glasses','age','body','head','color','animations','lighting'`.
* `isScreenshotButtonVisible` - this parameter specifies if the Screenshot button is visible. Default value: `true`.
* `isNoPhotoVisible` - this parameter specifies if the sample avatars are available. Default value: `true`.
* `exportButtonText` - it allows changing the text of the Export button. 
* `age` - this parameter specifies the age for all generated avatars. If it is set, the age selection prompt isn't shown. Possible values are `adult`, `teen15`, and `teen12`.
* `theme` - it allows choosing the visual theme for the UI (available options: `dark`, `light`).
* `gender` - if the application or website already has the information about the required gender, we can skip this question in the UI of the Mobile version. In this case, it shows the second screen with choosing input photo and you can't get back to the first screen with the home button. Available options are `male` and `female`, or can be empty.

## Action Messages

These messages specify events that tell the MetaPerson Creator to perform some specific actions.

* [**Generate Avatar**](#generate-avatar) - this message allows you to start avatar generation from API by passing an image encoded to base64 string.

* [**Export Avatar**](#export-avatar) - this message allows you to export an avatar from API. It can be required if you hide the button for export from the UI and want to control export functionality not from the iframe, but from an external website or application.

* [**Make Screenshot**](#make-screenshot) - this message allows you to make a screenshot of the avatar. The screenshot captures an avatar head and an upper part of a bust. 

* [**Show Avatar**](#show-avatar) - this message allows you to open an already-created avatar and customize it.

### Generate Avatar

The `generate_avatar` event initiates avatar generation.

```js
let generateAvatarMessage = {
    "eventName": "generate_avatar",
    "gender": "male",
    "age": "adult",
    "blends": [ { "name": "Body", "value": 0.5 }, { "name": "LowerHeadWidth", "value": 0.25 } ],
    "image": "image_encoded_to_base64_string"
};
evt.source.postMessage(generateAvatarMessage, "*"); 
```

Message parameters:

* `eventName` - should be set to `generate_avatar`. This tells MetaPerson Creator which request you're making.
* `gender` - this parameter specifies the gender of the computed avatar. Possible values are `male` and `female`.
* `age` - this parameter specifies the age of the avatar. Possible values are `adult`, `teen15`, and `teen12`. The default value is `adult`.
* `blends` - this parameters allows to configure initial proportions of the avatar's body, head, eyes and nose. See more details below about possible values.
* `image` - an image in JPEG or PNG format encoded into a base64 string. 

The `gender` parameter can be empty in the Desktop version. In this case, the MetaPerson Creator displays a dialog and prompts the user to manually select an avatar gender. 

Once the avatar is generated, MetaPerson Creator sends the [`model_generated`](#model-generated) event.

#### `blends` Parameter

The `blends` parameter is exclusive to the **Desktop** version. It is an array containing elements with `name` and `value` fields, each representing a blendshape's name and its corresponding value.

**Body Proportions:**

- **Blendshape Names:** `Body`, `Neck`, `Shoulders`, `Chest`, `Forearms`, `Waist`, `Hips`, `Legs`
- **Value Range:** **[-1, 1]** (0 indicates default size)

**Head Proportions:**

- **Blendshape Names:** `HeadHeight`, `UpperHeadVolume`, `UpperHeadWidth`, `LowerHeadWidth`, `JawLine`
- **Value Range:** **[0, 1]** (1 indicates default size)

**Eyes Proportions:**

- **Blendshape Names:** `EyesSize` (range **[-1, 1]**), `Monolid`, `Squint` (range **[0, 1]**)
- **Value Range:** **[-1, 1]** for `EyesSize`; **[0, 1]** for `Monolid` and `Squint` (0 indicates default size)

**Nose Proportions:**

- **Blendshape Names:** `NoseWidth`, `NoseSharp` (range **[0, 1]**), `NoseLength`, `NosePosition`, `NoseTipUpDown`, `NoseTipLeftRight`, `NoseWingsUpDown`, `NoseWingsInOut` (range **[-1, 1]**)
- **Value Range:** **[0, 1]** for `NoseWidth` and `NoseSharp`; **[-1, 1]** for the others (0 indicates default size)

**Lips Proportion:**

- **Blendshape Name:** `LipsSize`
- **Value Range:** **[-1, 1]** (0 indicates default size)

### Export Avatar

The `export_avatar` event initiates an avatar export. Use this event when you need to implement your own "Export" button outside the iframe with MetaPerson Creator.

```js
function onExportClicked() {
    let iframe = document.getElementById("editor_iframe");
    let exportAvatarMessage = {
        "eventName": "export_avatar"
    };
    iframe.contentWindow.postMessage(exportAvatarMessage, "*");
}
```

Message parameters:

* `eventName` - should be set to `export_avatar`. This tells MetaPerson Creator which request you're making.
* In the Desktop version you can specify the parameters for this particular export. Parameters are the same as in the [`set_export_parameters`](#export-parameters) message.

You need to be sure that the avatar is ready for export and displayed on the scene before sending this message.

Once the export is completed, MetaPerson Creator sends a link to this model in the [`model_exported`](#model-exported) event.

### Make Screenshot

The `make_screenshot` event makes a screenshot of the avatar. Use this event when you need to get a preview of the avatar. The screenshot captures an avatar head and an upper part of a bust. 

```js
let makeScreenshotEvent = {
    "eventName": "make_screenshot",
    "width" : 640,
    "height" : 480,
    "mode": "head"
};
iframe.contentWindow.postMessage(makeScreenshotEvent, "*");
```

Message parameters:

* `eventName` - should be set to `make_screenshot`. This tells MetaPerson Creator which request you're making.
* `width` - width of the screenshot image. The default value is `640`.
* `height` - height of the screenshot image. The default value is `480`.
* `mode` - specifies whether the camera captures a headshot or a full-body screenshot. Possible values: `head`, `body`.

Once the screenshot is done, MetaPerson Creator sends a link to the image in the [`model_screenshot`](#model-screenshot) event.

### Show Avatar

It's possible to open a previously generated avatar for further customization. You'll need an "avatar code" to show the avatar in MetaPerson Creator.

```js
let showAvatarMessage = {
    "eventName": "show_avatar",
    "avatarCode": AVATAR_CODE_TO_SHOW
};
evt.source.postMessage(showAvatarMessage, "*");
```

Message parameters:

* `eventName` - should be set to "show_avatar". This tells MetaPerson Creator which request you're making.
* `avatarCode` - a code of the avatar you need to open.

The avatar code can be retrieved from the [`model_generated`](#model-generated) and [`model_exported`](#model-exported) events.

<div class="iframe-container">
  <iframe width="560" height="315" allow="fullscreen" src="https://www.youtube.com/embed/iZMRdDbwB-w">
  </iframe>
</div>

## Events Sent By MetaPerson Creator

MetaPerson creator notifies about some events by sending corresponding messages. You need to add an event listener for `message` events to receive these messages.

Each event sent by MetaPerson Creator has a `data` structure that contains different parameters. The `data.source` parameter is common for all events and has a `metaperson_creator` value. It helps to identify messages from MetaPerson Creator.

```js
document.addEventListener('DOMContentLoaded', function onDocumentReady() {
    window.addEventListener("message", onWindowMessage);
});

function onWindowMessage(evt) {
    if (evt.type === "message") {
        if (evt.data?.source === "metaperson_creator"){
            let data = evt.data;
            let evtName = data?.eventName;
            
            switch (evtName) {
                // handle received events here
            }
        }
    }
}
```

There are the following events

* [`metaperson_creator_loaded`](#metaperson-creator-loaded) - MetaPerson Creator sends this message when the page is loaded.

* [`authentication_status`](#authentication-status) - MetaPerson Creator sends this message once the authentication is done with its status.

* [`model_generated`](#model-generated) - MetaPerson Creator sends this message when a new avatar is generated. 

* [`model_exported`](#model-exported) - MetaPerson Creator sends this message when the avatar is exported. This event allows you to get the link to the resulting avatar. This link can then be used to download or integrate the avatar into your website or application.

* [`model_screenshot`](#model-screenshot) - MetaPerson Creator sends this message as a response to the [`make screenshot`](#make-screenshot) message.

* [`action_availability_changed`](#action-availability) - The MetaPerson Creator sends this message to tell whether the [`export_avatar`](#export-avatar) and the [`generate_avatar`](#generate-avatar) actions are available at the current moment.

### MetaPerson Creator Loaded

The `metaperson_creator_loaded` event is sent once the MetaPerson Creator page is loaded. It is the first sent message and indicates that the MetaPerson Creator is initialized and you can send [configuration messages](#configuration-messages).

Event data:

* `data.source` - is set to `metaperson_creator`.
* `data.eventName` - is set to `metaperson_creator_loaded`.

Also, if you missed this message and need to check if the MetaPerson page is loaded, you can use the following JS object:
```js
iframe.contentWindow.metaPersonCreator.isLoaded
```

### Authentication Status

The `authentication_status` event is a response to the [`authenticate`](#authentication-parameters) message. It contains an authentication result.

Event data:

* `data.source` - is set to `metaperson_creator`.
* `data.eventName` - is set to `authentication_status`.
* `data.isAuthenticated` - indicates if the authentication was successful. Possible values: `true` or `false`.
* `data.errorMessage` - contains a description of the error in case of failed authentication. 

Also, you can use the following JS object to check the authentication status:
```js
iframe.contentWindow.metaPersonCreator.isAuthenticated
```

This event is available only for the **Desktop version**.

### Model Generated

The `model_generated` event is sent when a new avatar is generated.

Event data:

* `data.source` - is set to `metaperson_creator`.
* `data.eventName` - is set to `model_generated`.
* `data.avatarCode` - a code of the generated avatar.
* `data.gender` - a gender of the generated avatar. Possible values: `male` and `female`.
* `data.photoFileName` - the name of the photo file from which this avatar was generated.
* `data.photoUrl` - a link to the source photo. The link is valid till the next avatar is generated.
* `data.photoBytes` - an array of the source photo bytes in JPEG format. This parameter is exclusive to the **Desktop** version.

### Model Exported

The `model_exported` event is sent once the avatar is exported. This event returns an "avatar code" that can be used to reopen this avatar for further modifications.

Event data:

* `data.source` - is set to `metaperson_creator`.
* `data.eventName` - is set to `model_exported`.
* `data.url` - a link to the exported file.
* `data.avatarCode` - a code of the avatar.
* `data.gender` - an avatar gender

### Model Screenshot

The `model_screenshot` event is a response to the [`make screenshot`](#make-screenshot) message. It contains an avatar screenshot.

Event data:

* `data.source` - is set to `metaperson_creator`.
* `data.eventName` - is set to `model_screenshot`.
* `data.screenshotUrl` - a link to the screenshot image. The link is valid till the next screenshot is done.
* `data.imageBytes` - an array of the screenshot image bytes in PNG format. This parameter is exclusive to the **Desktop** version.

### Action Availability
MetaPerson Creator sends this message to indicate if a specific [action](#action-messages) becomes available or unavailable.

For example, the [`export_avatar`](#export-avatar) event can be sent only when the avatar is opened and all assets (outfits, haircuts, glasses) are loaded. So, if you design your own "Export" or "Generate Avatar" buttons, you can enable and disable them according to the parameters of the `action_availability_changed` event.

Here's an example code snippet that demonstrates how to receive and handle this event:

```js
function onWindowMessage(evt) {
    if (evt.type === "message") {
        if (evt.data?.source === "metaperson_creator"){
            let data = evt.data;
            let evtName = data?.eventName;
            if (evtName === "action_availability_changed"){
                if (data.actionName == "avatar_generation") {
                    browseImage.disabled = !data.isAvailable;
                } else if (data.actionName == "avatar_export") {
                    exportButton.disabled = !data.isAvailable;
                } else if (data.actionName == "avatar_screenshot") {
                    screenshotButton.disabled = !data.isAvailable;
                }
            }
        }
    }
}
```

Event data:

* `data.source` - is set to `metaperson_creator`.
* `data.eventName` - is set to `action_availability_changed`.
* `data.actionName` - a name of the action whose availability was changed. Possible values: `avatar_generation`, `avatar_export`, `avatar_screenshot`.
* `data.isAvailable` - indicates if the action is available.


## Additional Settings

### Loading Screen Image

In the **Desktop** version, you can customize the loading screen image.

![Loading Screen Image](./img/loading_screen_image.png)

To do this, you can pass additional arguments with the URL:

* `logoUrl`- the URL of the image to be displayed.
* `logoWidth` - the width of the image area. The default value is 512px.
* `logoHeight` - the height of the image area. The default value is 120px.

If you have an image located at `https://example.com/logo.png`, you would format the URL as follows:
`https://metaperson.avatarsdk.com/iframe.html?logoUrl=https://example.com/logo.png&logoWidth=300&logoHeight=300`

### Export Template

The export template is available exclusively for the **Desktop** version.

It is a JSON file that contains additional export parameters. You can specify the export template using the [`set_export_parameters`](#export-parameters) method.

There are several configuration slots where you can define parameters: **avatar**, **haircuts**, **outfits**, **outfits_top**, **outfits_bottom**, **outfits_shoes**, **hats**, **glasses**, **earrings**, and **necklaces**. Each of these slots may have its own parameters.

* `apply_visibility_masks` – A boolean parameter applicable for the **outfits**, **outfits_top**, **outfits_bottom**, and **outfits_shoes** sections. This determines whether the visibility mask is applied to remove polygons from the body mesh underneath the outfit mesh.

```json
{
  "outfits_shoes": 
  {
    "apply_visibility_masks" : false
  }
}
```

* `textures list` – It is possible to specify textures and profiles for each slot that should be included in the exported avatar. The example below shows all available textures. Note that not all slots include every listed texture.

```json
{
  "avatar": 
  {
    "textures" :
    {
      "profile" : "2K.jpg",
      "list": 
      [
        "Color",
        "Normal",
        "Roughness",
        "UnityMetallicSmoothness",
        "GltfMetallicRoughness"
      ]
    }
  },
  "outfits": 
  {
    "textures" :
    {
      "profile" : "1K.jpg",
      "list": 
      [
        "Color",
        "Normal",
        "Roughness",
        "UnityMetallicSmoothness",
        "GltfMetallicRoughness",
        "RecoloringMask"
      ]
    }
  },
  "haircuts": 
  {
    "textures" :
    {
      "profile" : "4K.png",
      "list": 
      [
        "AO",
        "Alpha",
        "Color",
        "Depth",
        "GltfMetallicRoughness",
        "Normal",
        "Root",
        "Roughness",
        "ScalpShade",
        "ScalpShadeAOAlpha",
        "ScalpShadeAlpha",
        "Shade",
        "UniqueID",
        "UnityMetallicSmoothness"
      ]
    }
  }
}
```