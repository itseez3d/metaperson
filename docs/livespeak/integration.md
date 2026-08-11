---
sidebar_label: 'Integration'
description: "Integrate LiveSpeak into a web page via iframe — create the iframe, subscribe to events and add real-time voice and lip-sync to your MetaPerson 3D avatars."
---

# LiveSpeak Integration

This page describes how to integrate **LiveSpeak** into a web page using an `<iframe>`. It explains iframe creation, subscribing to events from **LiveSpeak**, the events **LiveSpeak** emits, and commands the host can send to **LiveSpeak**.

## 1. Creating the iframe

The **LiveSpeak** is available under the URL:

**`https://metaperson.avatarsdk.com/livespeak/index.html`**

It should be is embedded using an **iframe** that must allow scripts and audio playback.

The `index.html` page accepts the following query parameters:

| Parameter | Description |
| --- | --- |
| `mode` | Selects the playback/animation mode:<br/>`tts_azure1` — Azure TTS + visemes<br/>`tts_azure2` — Azure TTS + ArKit blendshapes<br/>`tts_azure3` — Azure TTS + local lipsync<br/>`tts_elevenlabs` — ElevenLabs TTS + local lipsync<br/>`raw_stream` — expects raw PCM data as an array to animate the model, played back once [`audio_end`](#47-starting-playback-audio_end) is received |
| `lang` | Sets the voice language. Works the same as [`set_language`](#42-setting-language-set_language) command. |
| `custom_model` | A flag-like parameter (no value needed) that tells the iframe to expect a custom model through the [`load_model`](#48-loading-a-custom-model-load_model) command and to hide the default sample model. |
| `framing` | Camera framing preset: `bust` (default) or `body`. See [camera framing](#49-setting-camera-framing-set_camera). |
| `camera_offset_x`<br/>`camera_offset_y`<br/>`camera_offset_z` | Camera position in metres, relative to the avatar's head. Overrides the preset value. |
| `camera_pitch`<br/>`camera_yaw`<br/>`camera_roll` | Camera rotation in degrees, relative to a head-on shot. Overrides the preset value. |
| `camera_fov` | Vertical field of view in degrees. Overrides the preset value. |
| `background` | Background colour: `default` or a hex colour such as `1a2b3c`. Works the same as the [`set_background`](#410-setting-background-set_background) command. |

```js
iframe.src = 'https://metaperson.avatarsdk.com/livespeak/index.html'
           + '?mode=tts_azure1&lang=en_f&framing=body&background=1a2b3c';
```

```js
const iframe = document.createElement('iframe');
iframe.id = 'livespeak-iframe';
iframe.src = 'https://metaperson.avatarsdk.com/livespeak/index.html?mode=tts_azure1&lang=English';
iframe.title = 'LiveSpeak';
iframe.sandbox = 'allow-scripts allow-same-origin allow-forms';
iframe.allow = 'autoplay;';
iframe.style.width = '100%';
iframe.style.height = '600px';

document.getElementById('container').appendChild(iframe);
```

## 2. Subscribing to LiveSpeak events

Communication between the host page and **LiveSpeak** happens via `window.postMessage`. Subscribe to messages on the parent window and filter by `event.data.source === 'livespeak'`.

```js
window.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || data.source !== 'livespeak') return;

  switch (data.eventName) {
    case 'livespeak_loaded':
      console.log("LiveSpeak is ready");
      break;
    case 'message_processing_error':
      console.error("Error processing", data.failedEventName, data.reason);
      break;
    case 'avatar_state_changed':
      console.log(data.avatarState);
      break;
  }
});
```

## 3. LiveSpeak events

This section documents the messages that **LiveSpeak** sends to the host page.

### 3.1 `livespeak_loaded` event

The `livespeak_loaded` event is sent when the **LiveSpeak** iframe has finished initialization and is ready to receive commands.

> Best practice: wait for `livespeak_loaded` before sending [`authenticate`](#41-authenticating-authenticate).

```js
{
  source: 'livespeak',
  eventName: 'livespeak_loaded'
}
```

### 3.2 `avatar_state_changed` event

This event indicates the current state of the avatar. Typical payload:

```js
{
  source: 'livespeak',
  eventName: 'avatar_state_changed',
  avatarState: 'Ready'
}
```

| State | Description |
| --- | --- |
| **WaitingForAuthentication** | LiveSpeak is waiting for the host page to send the `authenticate` event. |
| **Authenticating** | LiveSpeak is verifying the provided authentication credentials. |
| **ModelAwaiting** | Waiting for a custom model via [`load_model`](#48-loading-a-custom-model-load_model) command. |
| **ModelLoading** | Custom model is being loaded. |
| **Initializing** | Avatar is starting up and preparing the LiveSpeak session. |
| **Thinking** | Chatbot or internal logic is processing a prompt. |
| **Speaking** | Avatar is currently playing TTS audio. |
| **WaitingForTouch** | LiveSpeak is waiting for a user gesture to start audio playback. |
| **Ready** | Avatar is idle and ready to receive commands. |
> On iPhone, audio cannot always start automatically. In some cases, a user gesture such as a screen tap is required. If audio cannot be started automatically, the state changes to **WaitingForTouch**.

### 3.3 `message_processing_error` event

LiveSpeak sends this event when it receives a command that cannot be processed. This helps the host page diagnose issues with malformed commands, missing required parameters, or internal errors.

```js
{
  source: 'livespeak',
  eventName: 'message_processing_error',
  failedEventName: 'load_model',
  reason: 'Unable to load the model.'
}
```

The payload contains:

- **`failedEventName`** – The `eventName` of the command that caused the error.
- **`reason`** – A human-readable string describing the error.

> Always listen for `message_processing_error` to catch problems early.

### 3.4 `camera_changed` event

LiveSpeak sends this event whenever the camera framing is applied — once at startup, and again after every [`set_camera`](#49-setting-camera-framing-set_camera) command. It reports the framing that is actually in effect, after presets and clamping have been resolved.

```js
{
  source: 'livespeak',
  eventName: 'camera_changed',
  offsetX: 0,
  offsetY: 0.081,
  offsetZ: 1.5,
  pitch: 0,
  yaw: 0,
  roll: 0,
  fov: 26.99
}
```

Use it to discover the values behind a preset before adjusting them, rather than guessing. The values map one to one onto the [`set_camera`](#49-setting-camera-framing-set_camera) fields.

### 3.5 `chatbot_response` event

LiveSpeak sends this event when the chatbot has generated an answer to a [`prompt`](#44-sending-a-prompt-prompt) command, immediately before the avatar begins pronouncing it.

```js
{
  source: 'livespeak',
  eventName: 'chatbot_response',
  text: 'The Eiffel Tower is 330 metres tall, including its antennas.'
}
```

The payload contains:

- **`text`** – The chatbot's generated response, the same text the avatar speaks.

Handle this event if you want to display the conversation in your own interface — LiveSpeak does not render the response on top of the avatar.

> The event is sent only for chatbot answers produced by [`prompt`](#44-sending-a-prompt-prompt). It is not sent for [`speak`](#45-speaking-exact-text-speak), where the host page already knows the text.

## 4. Commands for LiveSpeak

The host page sends commands to **LiveSpeak** via `iframe.contentWindow.postMessage`. Below are the common commands.

### 4.1 Authenticating (`authenticate`)

Use this message to authenticate in LiveSpeak with your [developer credentials](https://accounts.avatarsdk.com/developer/).

```js
const authMsg = {
  eventName: 'authenticate',
  clientId: clientId,
  clientSecret: clientSecret
};
iframe.contentWindow.postMessage(authMsg, '*');
```

Message parameters:

* `eventName` - must be set to `authenticate`.
* `clientId` - CLIENT_ID of your developer account.
* `clientSecret` - CLIENT_SECRET of your developer account.
* `accessToken` - for enhanced security, you can provide an `accessToken` instead of exposing `clientId` and `clientSecret` in client-side code.

> You can authenticate using either `clientId/clientSecret` or `accessToken`.

Below is an example of a cURL request to obtain an access token:

```js
CLIENT_ID="xFXeBr4shmgHUiymYwW7sDOO9BbwtL3eJkCE3OKu"
CLIENT_SECRET="hpAYUxCLfKHEkIvRgXTZzGyMvgDj7Tdg4gBhu5nmXjtW0ODMj0HUCt3tmKMBtm94qzcNsVhK6xXj2PKEop7BxBi1W9XMvyx3p9tJVP6mGY19THuS6mNSnJiQI1vQ0QE6"


curl -X POST "https://metaperson-api.avatarsdk.com/o/token/" \
     --user "${CLIENT_ID}:${CLIENT_SECRET}" \
     -F "grant_type=client_credentials"
```

Example response:

```json
{
  "access_token": "PAvD64lbikgVA0GzxgKV2ZhLnPbZ8P",
  "token_type": "Bearer",
  "expires_in": 36000,
  "scope": "read write"
}
```

### 4.2 Setting language (`set_language`)

Use [`set_language`](#42-setting-language-set_language) to define the language used for speech synthesis and chatbot responses.

```js
iframe.contentWindow.postMessage({
  eventName: 'set_language',
  language: 'en_m' // English Male
}, '*');
```

**Available languages for Azure TTS:** `English (en_m, en_f)`, `Chinese (zh_m, zh_f)`, `Spanish (es_m, es_f)`, `French (fr_m, fr_f)`, `German (de_m, de_f)`, `Portuguese (pt_m, pt_f)`, `Italian (it_m, it_f)`, `Japanese (ja_m, ja_f)`, `Korean (ko_m, ko_f)`, `Arabic (ar_m, ar_f)`.

**Available languages for ElevenLabs TTS:** `English Female (en_f)`, `English Male (en_m)`.

### 4.3 Setting voice name (`set_azure_voice_name`)

Specify a concrete TTS voice using [`set_azure_voice_name`](#43-setting-voice-name-set_azure_voice_name). [Azure Speech — Language & Voices](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=tts)

> Applies only to Azure TTS.

```js
iframe.contentWindow.postMessage({
  eventName: 'set_azure_voice_name',
  voiceName: 'en-US-AriaNeural'
}, '*');
```

### 4.4 Sending a prompt (`prompt`)

Use [`prompt`](#44-sending-a-prompt-prompt) to send text to the chatbot backend. The avatar will automatically pronounce the chatbot’s response, and the response text is reported through the [`chatbot_response`](#35-chatbot_response-event) event.

```js
iframe.contentWindow.postMessage({
  eventName: 'prompt',
  prompt: 'Tell me a fun fact about space.'
}, '*');
```

### 4.5 Speaking exact text (`speak`)

Use [`speak`](#45-speaking-exact-text-speak) when you want the avatar to pronounce exact text without chatbot processing.

```js
iframe.contentWindow.postMessage({
  eventName: 'speak',
  text: 'Welcome to our application.'
}, '*');
```

### 4.6 Sending raw PCM audio (`pcm`)

Stream raw audio data to LiveSpeak using the [`pcm`](#46-sending-raw-pcm-audio-pcm) command. The buffer must contain single-channel **32-bit float** PCM samples at **16000 Hz**.

```js
const payload = {
  eventName: 'pcm',
  buffer: chunk.buffer
};
iframe.contentWindow.postMessage(payload, '*', [chunk.buffer]);
```

> This command is intended for `mode: 'raw_stream'`, where LiveSpeak expects raw PCM data to animate the model.

You can send the audio in as many `pcm` chunks as you like. LiveSpeak **accumulates** them and does not start playback until it receives the [`audio_end`](#47-starting-playback-audio_end) command.

### 4.7 Starting playback (`audio_end`)

Send [`audio_end`](#47-starting-playback-audio_end) to signal that the whole audio has been transmitted. LiveSpeak processes the remaining queued `pcm` chunks and starts playing the buffered audio with lip-sync animation.

```js
iframe.contentWindow.postMessage({
  eventName: 'audio_end'
}, '*');
```

A typical sequence for `mode: 'raw_stream'` looks like this:

```js
// 1. push the audio, chunk by chunk
for (const chunk of chunks) {
  iframe.contentWindow.postMessage(
    { eventName: 'pcm', buffer: chunk.buffer }, '*', [chunk.buffer]);
}

// 2. tell LiveSpeak the audio is complete — playback starts here
iframe.contentWindow.postMessage({ eventName: 'audio_end' }, '*');
```

While playing, the avatar reports its progress through the [`avatar_state_changed`](#32-avatar_state_changed-event) event: **Thinking** while the buffered audio is being prepared, then **Speaking**, and **Ready** again once the playback is over.

> Both `pcm` and `audio_end` are only accepted in `raw_stream` mode and only when the avatar is in the **Ready** state. Otherwise LiveSpeak replies with a [`message_processing_error`](#33-message_processing_error-event) event (`reason: "Raw streaming isn't configured"` or `Invalid avatar state: <state>`).

### 4.8 Loading a custom model (`load_model`)

The [`load_model`](#48-loading-a-custom-model-load_model) command provides a URL pointing to a MetaPerson avatar in **GLB format**. This command is **only effective** when the iframe was created with the `custom_model` query parameter (flag). It should be sent immediately after receiving the `avatar_state_changed` event with `avatarState: "ModelAwaiting"`.

```js
// Recommended: wait for ModelAwaiting state before sending load_model
window.addEventListener('message', (event) => {
  const data = event.data;
  if (!data || data.source !== 'livespeak') return;

  if (data.eventName === 'avatar_state_changed' && data.avatarState === 'ModelAwaiting') {
    const modelUrl = 'https://metaperson.avatarsdk.com/avatars/9b51b708-387c-440c-9f25-a310fef8c01e/model.glb';
    iframe.contentWindow.postMessage({
      eventName: 'load_model',
      modelUrl: modelUrl
    }, '*');
  }
});
```

> **📦 Exporting a compatible GLB model from MetaPerson Creator:**  
> You can export a GLB model from [MetaPerson Creator](https://metaperson.avatarsdk.com/). In the export parameters, **make sure “Visemes blendshapes” are enabled** — these are required for accurate lip-sync and facial animation inside LiveSpeak.

> If the provided URL is invalid, the model cannot be downloaded, or the GLB lacks required blendshapes, LiveSpeak will automatically fall back to the default built-in model.

The structure of the `load_model` message:

```js
{
  eventName: "load_model",
  modelUrl: 'https://your-server.com/path/to/avatar.glb'
}
```

The URL must be publicly accessible or served with appropriate CORS headers, as the iframe will fetch the binary GLB file directly.

### 4.9 Setting camera framing (`set_camera`)

Use [`set_camera`](#49-setting-camera-framing-set_camera) to change how the avatar is framed. The same values are also accepted as [query parameters](#1-creating-the-iframe) so the framing is correct on the very first frame, with no visible re-framing.

```js
iframe.contentWindow.postMessage({
  eventName: 'set_camera',
  framing: 'body'
}, '*');
```

Message parameters — all optional, and all passed as **strings**:

| Parameter | Unit | Description |
| --- | --- | --- |
| `framing` | — | Preset to start from: `bust` (head and shoulders, the default) or `body` (waist-up). |
| `offsetX` | metres | Sideways offset from the head. `0` keeps the avatar centred. |
| `offsetY` | metres | Vertical offset from the head. Negative moves the camera down. |
| `offsetZ` | metres | Distance in front of the head. Larger values move the camera away. |
| `pitch` | degrees | Tilt. **Positive looks down**, negative looks up. |
| `yaw` | degrees | Rotation off the head-on axis. |
| `roll` | degrees | Dutch angle. |
| `fov` | degrees | Vertical field of view. Smaller values zoom in. |

The camera position is expressed **relative to the avatar's head**, so a framing you define once keeps working when the avatar is replaced through [`load_model`](#48-loading-a-custom-model-load_model). Rotation is relative to a head-on shot, so all-zero angles look straight at the avatar.

Values are resolved in two steps: the named preset provides the starting point, then any parameter you supply overrides that component.

```js
// the body preset, but pulled slightly further back
iframe.contentWindow.postMessage({
  eventName: 'set_camera',
  framing: 'body',
  offsetZ: '5.4'
}, '*');
```

If `framing` is omitted, the currently applied framing is the starting point, so a single value can be nudged without restating the rest:

```js
iframe.contentWindow.postMessage({
  eventName: 'set_camera',
  fov: '22'
}, '*');
```

Values are clamped to a usable range — `offsetZ` to at least `0.55` m so the avatar cannot fall inside the camera's near clip plane, `offsetX` and `offsetY` to ±5 m, and `fov` between `1` and `120`. LiveSpeak reports the resolved framing back through the [`camera_changed`](#34-camera_changed-event) event, and replies with [`message_processing_error`](#33-message_processing_error-event) if a value is not a valid number or the preset name is unknown.

> The vertical field of view is fixed, so the avatar keeps a constant proportion of the viewport height. Resizing the page changes how much is visible to the sides, not the size of the avatar. In a narrow portrait layout such as 9:16, the `bust` preset frames tightly — increase `fov` or `offsetZ` for more margin.

### 4.10 Setting background (`set_background`)

Use [`set_background`](#410-setting-background-set_background) to set the colour behind the avatar.

```js
iframe.contentWindow.postMessage({
  eventName: 'set_background',
  background: '1a2b3c'
}, '*');
```

Message parameters:

* `eventName` - must be set to `set_background`.
* `background` - a hex colour, with or without a leading `#` (`1a2b3c`, `#1a2b3c`), or `default` to restore the built-in background.

The colour is applied after LiveSpeak's post-processing, so the rendered background matches the value you provide exactly. This lets you match the avatar's background to your page.

> Transparent backgrounds are not supported. To place the avatar over your own artwork, set `background` to the colour of your backdrop. Passing `transparent` returns a [`message_processing_error`](#33-message_processing_error-event).