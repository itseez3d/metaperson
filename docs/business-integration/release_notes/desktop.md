---
sidebar_label: 'Desktop'
sidebar_position: 1
description: Desktop Version
---
# Desktop Version

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