---
sidebar_label: 'Integration'
description: LiveSpeak Integration
---

# LiveSpeak Integration

This page describes how to integrate **LiveSpeak** into a web page using an `<iframe>`. It explains iframe creation, subscribing to events from **LiveSpeak**, the events **LiveSpeak** emits, and commands the host can send to **LiveSpeak**.

## 1. Creating the iframe

**LiveSpeak** is embedded using an iframe. The iframe must allow scripts and audio playback.

The `iframe.html` page accepts the following query parameters:

| Parameter | Description |
| --- | --- |
| `mode` | Selects the playback/animation mode:<br/>`tts_azure1` — Azure TTS + visemes<br/>`tts_azure2` — Azure TTS + ArKit blendshapes<br/>`tts_azure3` — Azure TTS + local lipsync<br/>`tts_elevenlabs` — ElevenLabs TTS + local lipsync<br/>`raw_stream` — expects raw PCM data as an array to animate the model |
| `lang` | Sets the voice language. Works the same as [`set_language`](#41-setting-language-set_language) command. |
| `custom_model` | A flag-like parameter (no value needed) that tells the iframe to expect a custom model through the [`load_model`](#46-loading-a-custom-model-load_model) command and to hide the default sample model. |

```js
const iframe = document.createElement('iframe');
iframe.id = 'livespeak-iframe';
iframe.src = 'https://metaperson.avatarsdk.com/livespeak/iframe.html?mode=tts_azure1&lang=English';
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

> Best practice: wait for `livespeak_loaded` before sending [`set_language`](#41-setting-language-set_language), [`set_voice_name`](#42-setting-voice-name-set_voice_name), [`prompt`](#43-sending-a-prompt-prompt), [`speak`](#44-speaking-exact-text-speak), or [`pcm`](#45-sending-raw-pcm-audio-pcm).

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
| **Ready** | Avatar is idle and ready to receive commands. |
| **Initializing** | Avatar is starting up and preparing the LiveSpeak session. |
| **Thinking** | Chatbot or internal logic is processing a prompt. |
| **Speaking** | Avatar is currently playing TTS audio. |
| **ModelAwaiting** | Waiting for a custom model via [`load_model`](#46-loading-a-custom-model-load_model) command. |
| **ModelLoading** | Custom model is being loaded. |

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

## 4. Commands for LiveSpeak

The host page sends commands to **LiveSpeak** via `iframe.contentWindow.postMessage`. Below are the common commands.

### 4.1 Setting language (`set_language`)

Use [`set_language`](#41-setting-language-set_language) to define the language used for speech synthesis and chatbot responses.

```js
iframe.contentWindow.postMessage({
  eventName: 'set_language',
  language: 'en_m' // English Male
}, '*');
```

**Available languages for Azure TTS:** `English (en_m, en_f)`, `Chinese (zh_m, zh_f)`, `Spanish (es_m, es_f)`, `French (fr_m, fr_f)`, `German (de_m, de_f)`, `Portuguese (pt_m, pt_f)`, `Italian (it_m, it_f)`, `Japanese (ja_m, ja_f)`, `Korean (ko_m, ko_f)`, `Arabic (ar_m, ar_f)`.

**Available languages for ElevenLabs TTS:** `English Female (en_f)`, `English Male (en_m)`.

### 4.2 Setting voice name (`set_voice_name`)

Specify a concrete TTS voice using [`set_voice_name`](#42-setting-voice-name-set_voice_name). [Azure Speech — Language & Voices](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=tts)

> Applies only to Azure TTS.

```js
iframe.contentWindow.postMessage({
  eventName: 'set_voice_name',
  voiceName: 'en-US-AriaNeural'
}, '*');
```

### 4.3 Sending a prompt (`prompt`)

Use [`prompt`](#43-sending-a-prompt-prompt) to send text to the chatbot backend. The avatar will automatically pronounce the chatbot’s response.

```js
iframe.contentWindow.postMessage({
  eventName: 'prompt',
  prompt: 'Tell me a fun fact about space.'
}, '*');
```

### 4.4 Speaking exact text (`speak`)

Use [`speak`](#44-speaking-exact-text-speak) when you want the avatar to pronounce exact text without chatbot processing.

```js
iframe.contentWindow.postMessage({
  eventName: 'speak',
  text: 'Welcome to our application.'
}, '*');
```

### 4.5 Sending raw PCM audio (`pcm`)

Stream raw audio data to LiveSpeak using the [`pcm`](#45-sending-raw-pcm-audio-pcm) command (single-channel PCM, **16000 Hz**).

```js
const payload = {
  eventName: 'pcm',
  buffer: chunk.buffer
};
iframe.contentWindow.postMessage(payload, '*', [chunk.buffer]);
```

> This command is intended for `mode: 'raw_stream'`, where LiveSpeak expects raw PCM data to animate the model.

### 4.6 Loading a custom model (`load_model`)

The [`load_model`](#46-loading-a-custom-model-load_model) command provides a URL pointing to a MetaPerson avatar in **GLB format**. This command is **only effective** when the iframe was created with the `custom_model` query parameter (flag). It should be sent immediately after receiving the `avatar_state_changed` event with `avatarState: "ModelAwaiting"`.

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