---
sidebar_label: 'Desktop'
sidebar_position: 1
description: Desktop Version
---
# Desktop Version

### 1.24.1 (2025-06-18)

https://metaperson.avatarsdk.com/1.24.1/iframe.html

**Release notes**:

  * Bug fixes

### 1.24.0 (2025-06-10)

https://metaperson.avatarsdk.com/1.24.0/iframe.html

**Release notes**:

  * JS API changes:
    * Added `mode` parameter to the [`make_screenshot`](/js_api#make-screenshot) message.
  * New haircuts:
    * Haircut4_3 
    * Haircut8_2 
    * Haircut8_3
    * Haircut9_2
    * Haircut9_3
  * New poses:
    * Pose_A
    * Pose_Idle
  * New export parameters: 
    * textures format
    * textures resolution
    * animations and poses

### 1.23.2 (2025-05-05)

https://metaperson.avatarsdk.com/1.23.2/iframe.html

**Release notes**:

  * JS API changes:
    * Added `accessToken` parameter to the [`authenticate`](/js_api#authentication-parameters) message.

### 1.23.1 (2025-04-22)

https://metaperson.avatarsdk.com/1.23.1/iframe.html

**Release notes**:

  * Additional controls for cartoonish stylization
  * Free export for users with active Avatar SDK subscription
  * Fixed bugs:
    * Eyes shape sliders have empty labels after pressing Reset button.

### 1.23.0 (2025-04-15)

https://metaperson.avatarsdk.com/1.23.0/iframe.html

**Release notes**:

  * Added cartoonish stylization
  * Added expressions images generation
  * New haircuts:
    * Haircut_Afro_Fade
    * Haircut4_2
  * New outfits:
    * shoes_Murghuz
    * shoes_Gndasar
    * pants_Dzoraget_2

### 1.22.0 (2025-03-03)

https://metaperson.avatarsdk.com/1.22.0/iframe.html

**Release notes**:

  * Added export options (LOD, format)

### 1.21.0 (2025-02-26)

https://metaperson.avatarsdk.com/1.21.0/iframe.html

**Release notes**:

  * New outfits:
    * hijab_Gosh
  * New masks:
    * mask_Kezelboghaz
    * mask_Spitakasar
  * New hands accessories
    * bracelet_01
    * bracelet_02
    * bracelet_03
    * bracelet_04
    * gloves_Azhdahak
    * gloves_Kaputjugh
    * watches_01
  * Added assets pricing.
  * Parametric eyes are now enabled by default.
  * Predicted haircut is used instead of the Generated in case of long hair.

### 1.20.1 (2025-02-1)

https://metaperson.avatarsdk.com/1.20.1/iframe.html

**Release notes**:

  * Fixed an issue with uppercase letters in emails.
  * Disabled post-processing on Apple M3 devices.

### 1.20.0 (2025-02-03)

https://metaperson.avatarsdk.com/1.20.0/iframe.html

**Release notes**:

  * Upgraded to `metaperson_2.1` pipeline.
  * Introduced in-app purchases.

### 1.19.3 (2024-12-09)

https://metaperson.avatarsdk.com/1.19.3/iframe.html

**Release notes**:

  * Disabled skin, lips and eyebrows recoloring when `color` button is hidden.
  * Preserved computaton parameters (gender, age) after a failed avatar generation attempt.

### 1.19.2 (2024-12-04)

https://metaperson.avatarsdk.com/1.19.2/iframe.html

**Release notes**:

  * JS API: added `isScreenshotButtonVisible` parameter to the [`set_ui_parameters`](/js_api#ui-parameters) message.

### 1.19.1 (2024-12-03)

https://metaperson.avatarsdk.com/1.19.1/iframe.html

**Release notes**:

  * Fixed bug: unable to export a model when the animations panel is active

### 1.19.0 (2024-12-02)

https://metaperson.avatarsdk.com/1.19.0/iframe.html

**Release notes**:

  * New outfits:
    * pants_Dzoraget
    * sherwani_Dzoraget
  * New haircuts: 
    * Haircut23
    * Haircut24
  * JS API changes:
    * Added `facial_animations` as possible value for `skipViewerControls` parameter to the [`set_ui_parameters`](/js_api#ui-parameters) message.
    * Added `computationParametersPanelVisible` parameter to the [`set_ui_parameters`](/js_api#ui-parameters) message.
  * Added new blendshapes to tune head and facial features
  * Added facial animations
  * Show error when a face isn't found on the provided image

### 1.18.5 (2024-11-18)

https://metaperson.avatarsdk.com/1.18.5/iframe.html

**Release notes**:

  * Fixed bug: authentication status event is sent too early

### 1.18.4 (2024-10-28)

https://metaperson.avatarsdk.com/1.18.4/iframe.html

**Release notes**:

  * Bugfixes

### 1.18.3 (2024-10-28)

https://metaperson.avatarsdk.com/1.18.3/iframe.html

**Release notes**:

  * JS API changes:
    * Added `ageSelectionAvailable`, `pipelineSelectionAvailable`, `defaultPipeline` parameters to the [`set_ui_parameters`](/js_api#ui-parameters) message.

### 1.18.2 (2024-09-30)

https://metaperson.avatarsdk.com/1.18.2/iframe.html

**Release notes**:

  * JS API changes:
    * Added `enableLipsync` parameter to the [`set_ui_parameters`](/js_api#ui-parameters) message.

### 1.18.1 (2024-09-27)

https://metaperson.avatarsdk.com/1.18.1/iframe.html

**Release notes**:

  * Fixed bug: misalignment of eyes customization controls
  * Fixed bug: invalid preview image is shown
  * Updated previews for sample avatars
  * Removed some animations for skirt_Lessing

### 1.18.0 (2024-09-26)

https://metaperson.avatarsdk.com/1.18.0/iframe.html

**Release notes**:

  * Added LipSync
  * Added recolorable eyes type
  * Added "Create My T-Shirt" button
  * Added earrings:
    * earrings_01
    * earrings_02
    * earrings_03
    * earrings_04
  * Added necklaces:
    * chain_lite
    * chain_tight
    * pendant_01
    * pendant_02
    * pendant_03
    * pendant_04
    * pendant_05
  * JS API changes:
    * Added `exportTemplateJson` parameter to the [`set_export_parameters`](/js_api#export-parameters) message.

### 1.17.0 (2024-08-21)

https://metaperson.avatarsdk.com/1.17.0/iframe.html

**Release notes**:

  * Added mirrored haircuts
  * Added new haircuts: 
    * Haircut22
  * Added new outfits:
    * Parz
    * sandals_Parz
    * skirt_Lessing
    * top_Lessing
    * kurta_Tandzut
    * shoes_Tandzut
    * dhoti_Tandzut
    * baseball_cap_Vachagan
  * UI changes
    * Added tutorial buttons to the export dialog

### 1.16.2 (2024-07-22)

https://metaperson.avatarsdk.com/1.16.2/iframe.html

**Release notes**:

  * Bug fixes:
    * Default UI controls are visible before a custom UI configuration is provided via the `set_ui_parameters` message

### 1.16.1 (2024-07-19)

https://metaperson.avatarsdk.com/1.16.1/iframe.html

**Release notes**:

  * JS API changes:
    * Added parameters to configure the [loading screen image](/js_api#loading-screen-image)
    * Added `metaPersonLabelText` parameter to the [`set_ui_parameters`](/js_api#ui-parameters) message
    * Added `isTakeSelfieButtonVisible` parameter to the [`set_ui_parameters`](/js_api#ui-parameters) message
    * Added `isBrowsePhotoButtonVisible` parameter to the [`set_ui_parameters`](/js_api#ui-parameters) message
    * Added `showSampleAvatars` parameter to the [`set_ui_parameters`](/js_api#ui-parameters) message

### 1.16.0 (2024-07-16)

https://metaperson.avatarsdk.com/1.16.0/iframe.html

**Release notes**:

 * Added new haircuts: 
    * Haircut21
 * Added new outfits:
    * saree_Aramazd
    * Urasar
    * top_Khustup
    * leggins_Khustup
  * JS API changes:
    * Added `skipViewerControls` parameter to the [`set_ui_parameters`](/js_api#ui-parameters) message.
    * Added `blends` parameter to the [`generate_avatar`](/js_api#generate-avatar) message
    * Added `imageBytes` parameter to the [`model_screenshot`](/js_api#model-screenshot) event.
    * Added `photoBytes` parameter to the [`model_generated`](/js_api#model-generated) event.

### 1.15.1 (2024-07-01)

https://metaperson.avatarsdk.com/1.15.1/iframe.html

**Release notes**:

 * JS API changes:
    * Added `showLatestCreatedAvatar` parameter to the [`set_ui_parameters`](/js_api#ui-parameters) message.

### 1.15.0 (2024-06-13)

https://metaperson.avatarsdk.com/1.15.0/iframe.html

**Release notes**:

 * Added new haircuts: 
    * Haircut19
    * Haircut20
 * Added new outfits:
    * Kandura_Artanish
    * Kandura_Lalvar
    * Ghutra
 * Added third-gender selection
 * Updated icons for UI elements
 * Added lighting selection
 * Generate child avatars with decreased *Shoulders*, *Chest*, and *Hips* body proportions
 
### 1.14.2 (2024-06-10)

https://metaperson.avatarsdk.com/1.14.2/iframe.html

**Release notes**:

 * Changed the timing of when the [`metaperson_creator_loaded`](/js_api#metaperson-creator-loaded) event is sent (again)
 
### 1.14.1 (2024-06-06)

https://metaperson.avatarsdk.com/1.14.1/iframe.html

**Release notes**:

 * Changed the timing of when the [`metaperson_creator_loaded`](/js_api#metaperson-creator-loaded) event is sent
 
### 1.14.0 (2024-04-11)

https://metaperson.avatarsdk.com/1.14.0/iframe.html

**Release notes**:

 * Added new outfits:
    * jacket_Ergates
    * pants_Ergates
 * Added new haircuts:
    * Haircut18
    * Haircut17
 * JS API changes:
    * Added language specification to the [`set_ui_parameters`](/js_api#ui-parameters)
    * Added [`model_screenshot`](/js_api#model-screenshot) event
    * Added [`model_generated`](/js_api#model-generated) event
    * Added [`authentication_status`](/js_api#authentication-status) event
    * `unity_loaded` event replaced by the `metaperson_creator_loaded`
 * Added new female poses
 
### 1.13.0 (2024-03-14)

https://metaperson.avatarsdk.com/1.13.0/iframe.html

**Release notes**:

 * Added new outfits:
    * t-shirt_Vardenis
    * jacket_Oroklini
    * top_Urasar
 * Added new haircuts:
    * Haircut16
    * Haircut15
 * JS API changes:
   * Added `outfitsBlackList` to the [`set_ui_parameters`](/js_api#ui-parameters) message
   * Added `age` parameter to the [`generate_avatar`](/js_api#generate-avatar) message
   * Added `metaPersonCreator.isLoaded` property
 * T-shirt texture generation from two photos
 
### 1.12.0 (2024-02-12)

https://metaperson.avatarsdk.com/1.12.0/iframe.html

**Release notes**:

 * Added new haircuts:
    * Haircut14
 * Allowed to add logo for some outfits
 
### 1.11.2 (2024-01-08)

https://metaperson.avatarsdk.com/1.11.2/iframe.html

**Release notes**:

 * JS API changes:
   * Added the [`generate_avatar`](/js_api#generate-avatar) message
 * Fixed an issue: unable to select a file in VR browser
 
### 1.11.1 (2023-12-21)

https://metaperson.avatarsdk.com/1.11.1/iframe.html

**Release notes**:

 * Updated previews for pants_Arteni and sneakers_ARPI
 * Bugfixes
 
### 1.11.0 (2023-12-12)

https://metaperson.avatarsdk.com/1.11.0/iframe.html

**Release notes**:
 
 * Added new outfits:
   * Akna
   * jacket_Arteni
   * jacket_Tavush
 * Added a button to make screenshots
 * Added animations
 
### 1.10.0 (2023-11-02)

https://metaperson.avatarsdk.com/1.10.0/iframe.html

**Release notes**:

 * Use *visemes_15* instead of *visemes_14* blendshapes sets
 * JS API changes:
   * Added the [`show_avatar`](/js_api#show-avatar) message
   * Added `isLoginButtonVisible` parameter to the [`set_ui_parameters`](/js_api#ui-parameters) message 