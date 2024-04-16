---
sidebar_label: 'JS API'
sidebar_position: 2
description: JS API
slug: /js_api
---
# JS API

Communication between MetaPerson Creator and your HTML page or application is performed via a messaging mechanism. JavaScript messages with special events are both posted to and received from the MetaPerson Creator.
Once MetaPerson Creator page is loaded, it sends a `metaperson_creator_loaded` event. After that, you can send JS messages to MetaPerson Creator, e.g. configuration parameters.

As an example, you can look at the [web integration sample](web_integration).

## MetaPerson Creator Versions
There are two versions of MetaPerson Creator: **Desktop** and **Mobile**. It is recommended to use the former on desktop platforms and the latter on mobile platforms.

Use the following URLs to integrate these versions into your site or application:

**Desktop**: https://metaperson.avatarsdk.com/iframe.html

**Mobile**: https://mobile.metaperson.avatarsdk.com/generator

## Configuration Messages

These messages can be sent only once right after MetaPerson Creator was loaded.

* [**Authentication parameters**](#authentication-parameters) - in this message, you should specify your developer credentials. This ensures that your website or application is authorized to access the creator. 
If you provide incorrect CLIENT_ID or CLIENT_SECRET, export functionality will be unavailable. So please check these values. Go to [developer credentials](getting_started#developer-credentials) to get more info.

* [**Export Parameters**](#export-parameters) - in this message, you can configure export parameters for your avatar. You can specify the format of the exported file (such as GLB, GLTF, or FBX), the level of detail for the exported mesh, the resolution of textures and the format.

* [**UI Parameters**](#ui-parameters) - in this message, you can configure some parts of the UI of MetaPerson Creator. E.g. hide some buttons or rename text for them.

### Authentication Parameters

Here's an example of how you can authenticate your account in MetaPerson Creator. You need [developer credentials](getting_started#developer-credentials) from your account.

```js
let authenticationMessage = {
    "eventName": "authenticate",
    "clientId": CLIENT_ID,
    "clientSecret": CLIENT_SECRET
};
evt.source.postMessage(authenticationMessage, "*");
```

Message parameters:

* **eventName** - should be set to `authenticate`. The event name tells MetaPerson Creator which request you're making.
* **clientId** - CLIENT_ID of your developer account.
* **clientSecret** - CLIENT_SECRET of your developer account.

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
    "useZip" : true
};
evt.source.postMessage(exportParametersMessage, "*");
```

Message parameters:

* **eventName** - should be set to `set_export_parameters`. This tells MetaPerson Creator which request you're making.
* **format** - this parameter specifies the format of the exported file. Supported formats are `gltf`, `glb`, and `fbx`.
* **lod** - this parameter specifies the level of detail (LOD) for the exported file. The higher the LOD, the more detailed the exported file will be. Supported LODs are: `1` and `2`.
* **textureProfile** - this parameter specifies the texture profile for the exported file. This determines the quality of the textures used in the exported file. Supported texture profiles are:
  * `4K.png`, `2K.png`, `1K.png`
  * `4K.jpg`, `2K.jpg`, `1K.jpg`
  * `4K.webp`, `2K.webp`, `1K.webp`
* **useZip** - by default, MetaPerson Creator returns a link to a ZIP archive with an exported model. You can set it to `false`, to get a direct link to a GLB of FBX file.

### UI Parameters

This message allows you to make some customizations in UI of MetaPerson Creator. Some parameters differ between Mobile and Desktop versions, so we split this description correspondingly. 

#### MetaPerson Creator Desktop

```js
let uiParametersMessage = {
    // Common parameters for Mobile and Desktop versions
    "eventName": "set_ui_parameters",
    "isExportButtonVisible" : true,
    "isLoginButtonVisible": true,
    "outfitsBlackList" : ["ARPI", "SEVAN"],
    // Desktop version specific parameters
    "closeExportDialogWhenExportCompleted" : false,
    "isLanguageSelectionVisible" : true,
    "language" : ""
};
evt.source.postMessage(uiParametersMessage, "*");
```

Message parameters:

* **eventName** - should be set to `set_ui_parameters`. This tells MetaPerson Creator which request you're making.
* **isExportButtonVisible** - this parameter specifies if the Export button is visible. Default value: `true`.
* **isLoginButtonVisible** - this parameter specifies if the Login button is visible. Default value: `true`.
* **outfitsBlackList** - a list of outfits that are not available and not shown in the MetaPerson Creator. The complete list of outfits with their names can be found in [REST API documentation](https://api.avatarsdk.com/#id5). By default, all outfits are available. 
* **closeExportDialogWhenExportCompleted** - this parameter specifies if the export dialog is shown after an avatar is exported. Default value: `false`.
* **isLanguageSelectionVisible** - this parameter specifies if the control to select a UI language is visible. Default value: `true`.
* **language** - this parameter specifies a UI language. Supported values: `EN`, `漢語`. English is set by default if the parameter is empty or isn't set.

#### MetaPerson Creator Mobile

```js
let uiParametersMessage = {
    "eventName": "set_ui_parameters",
    "isExportButtonVisible": true,
    "isLoginButtonVisible": false,
    "outfitsBlackList" : ["ARPI", "SEVAN"],
    // Mobile version specific parameters
    "isScreenshotButtonVisible": true,
    "isNoPhotoVisible": true,
    "exportButtonText": "Export",**age** - this parameters
    "theme": "dark", 
    "gender": "female",
};
evt.source.postMessage(uiParametersMessage, "*");
```

The parameters of this code are:

* **eventName** - should be set to `set_ui_parameters`. This tells MetaPerson Creator which request you're making.
* **isExportButtonVisible** - this parameter specifies if the Export button is visible. Default value: `true`.
* **isLoginButtonVisible** - this parameter specifies if the Login button is visible. Default value: `true`.
* **outfitsBlackList** - a list of outfits that are not available and not shown in the MetaPerson Creator. The complete list of outfits with their names can be found in [REST API documentation](https://api.avatarsdk.com/#id5). By default, all outfits are available. 
* **isScreenshotButtonVisible** - this parameter specifies if the Screenshot button is visible. Default value: `true`.
* **isNoPhotoVisible** - this parameter specifies if the sample avatars are available. Default value: `true`.
* **exportButtonText** - it allows changing the text of the Export button. 
* **theme** - it allows choosing the visual theme for the UI (available options: `dark`, `light`).
* **gender** - if the application or website already has the information about the required gender, we can skip this question in the UI of the Mobile version. In this case, it shows the second screen with choosing input photo and you can't get back to the first screen with the home button. Available options are `male`, `female`, or can be empty.

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
    "image": "image_encoded_to_base64_string"
};
evt.source.postMessage(generateAvatarMessage, "*"); 
```

Message parameters:

* **eventName** - should be set to `generate_avatar`. This tells MetaPerson Creator which request you're making.
* **gender** - this parameter specifies the gender of the computed avatar. Possible values are `male` and `female`.
* **age** - this parameter specifies the age of the avatar. Possible values are `adult`, `teen15` and `teen12`. Default value is `adult`. This parameter is available only for the **Desktop version**. 
* **image** - an image in JPEG or PNG format encoded into a base64 string. 

The 'gender' parameter can be empty in the Desktop version. In this case, the MetaPerson Creator displays a dialog and prompts the user to manually select an avatar gender. 

Once the avatar is generated, MetaPerson Creator sends the [`model_generated`](#model-generated) event.

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

* **eventName** - should be set to `export_avatar`. This tells MetaPerson Creator which request you're making.

You need to be sure that the avatar is ready for export and displayed on the scene before sending this message.

Once the export is completed, MetaPerson Creator sends a link to this model in the [`model_exported`](#model-exported) event.

### Make Screenshot

The `make_screenshot` event makes a screenshot of the avatar. Use this event when you need to get a preview of the avatar. The screenshot captures an avatar head and an upper part of a bust. 

```js
let makeScreenshotEvent = {
    "eventName": "make_screenshot",
    "width" : 640,
    "height" : 480
};
iframe.contentWindow.postMessage(makeScreenshotEvent, "*");
```

Message parameters:

* **eventName** - should be set to `make_screenshot`. This tells MetaPerson Creator which request you're making.
* **width** - width of the screenshot image. Default value is `640`.
* **height** - height of the screenshot image. Default value is `480`.

This message is available only for the **Desktop version**.

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

* **eventName** - should be set to "show_avatar". This tells MetaPerson Creator which request you're making.
* **avatarCode** - a code of the avatar you need to open.

The avatar code can be retrieved from the [`model_generated`](#model-generated) and [`model_exported`](#model-exported) events.

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

There are following events

* [**metaperson_creator_loaded**](#metaperson-creator-loaded) - MetaPerson Creator sends this message when the page is loaded.

* [**authentication_status**](#authentication-status) - MetaPerson Creator sends this message once the authentication is done with its status.

* [**model_generated**](#model-generated) - MetaPerson Creator sends this message when a new avatar is generated. 

* [**model_exported**](#model-exported) - MetaPerson Creator sends this message when the avatar is exported. This event allows you to get the link to the resulting avatar. This link can then be used to download or integrate the avatar into your website or application.

* [**model_screenshot**](#model-screenshot) - MetaPerson Creator sends this message as a response to the [`make screenshot`](#make-screenshot) message.

* **action_availability_changed** - The MetaPerson Creator sends this message to tell whether the "Export Avatar" and the "Generate Avatar" actions are available at the current moment.

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
* `data.photoFileName` - a name of the photo file from which this avatar was generated.
* `data.photoUrl` - a link to the source photo. The link is valid till the next avatar is generated. 

This event is available only for the **Desktop version**.

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

This event is available only for the **Desktop version**.

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
* `data.actionName` - a name of the action whose availability was changed. Possible values: `avatar_generation`, `avatar_export`, `avatar_screenshot`. The latter is available only for the **Desktop version**.
* `data.isAvailable` - indicates if the action is available.