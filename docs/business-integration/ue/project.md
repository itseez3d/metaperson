---
sidebar_label: 'Sample project overview'
description: Basic information needed to run the sample project.
sidebar_position: 1
---

# MetaPerson 2.0 UE sample

This project demonstrates how to create and use MetaPerson avatars with Epic animations. 

## Running the sample

You will need an account on the Avatar SDK website to export MetaPerson avatars. If you don't have an account yet, you can create it [here](https://accounts.avatarsdk.com/). After that you can take a [free trial](https://avatarsdk.com/pricing-cloud/) of the Pro plan. It gives you acces to all of the needed features.

To run the demo scene you will need developer credentials that can be created/found at your [developer page](https://accounts.avatarsdk.com/developer/). Developer credentials are a pair of values (Client ID and Client Secret). 

![Client ID and Client Secret](img/credentials01.png)

See the [additional documentation](https://docs.metaperson.avatarsdk.com/getting_started.html#developer-credentials) on the developer-credentials. 

Go to the Edit->Project Settings->Plugins->Avatar SDK Metaperson 2 section in UE Editor and set these parameters in corresponding fields:

![Credentials](img/credentials.png)

## Sample overview

The sample is based on Epic's Third Person [template](https://docs.unrealengine.com/5.0/en-US/third-person-template-in-unreal-engine/) and demonstrates how to integrate Metaperson Creator to your project. Playing the level opens MetaPerson Creator in the HUD. After that all of the avatar creation/customization features are available to user. 

![MetaPerson Creator](img/editor01.png)

When the user finishes the avatar creation process, he can press the Export button. **If you’ve incorrectly added your credentials, or if your account doesn’t have a Pro plan or higher, the Export button may be inactive.**  

![Exporting glb](img/export.png)

When the export process is complete, the MetaPerson Creator will close and the download will begin. 

![Downloading glb](img/downloading.png)

The archive with the avatar will be saved to the local disk and unzipped. After that skeletal mesh of the avatar will be loaded from the glb file. Avatar will be placed in the level instead of the third person character.

![Avatar on the scene](img/downloaded.png)

### Technical details

For detailed information about the MetaPerson Creator integration, see the [relevant part](metaperson_creator_integration) of the documentation.

### Animations

We use UE5 [IK Rig Retargeting](https://docs.unrealengine.com/5.0/en-US/ik-rig-animation-retargeting-in-unreal-engine/) to retarget animations (and animation blueprints) from Mannequin to MetaPerson 2 skeleton. 
The animation retargeting process is described in the [corresponding chapter](animation_retargeting).

## Unreal Engine Sample F.A.Q.

### Which platforms are supported by the sample?

Currently the sample is Windows-only (as a development and target platforms). We hope to expand the number of supported platforms in future releases.

### Which version of UE are supported?

Versions 5.1, 5.2, 5.3 of the Unreal Engine are supported.

### The "export " button is not accessible in the MetaPerson Creator. What should I do?

Please, double-check that you entered the correct Client ID and Client Secret. See the [Running the sample](#running-the-sample) for more details.

## Support

Any questions about the UE integration or the avatar generation, general feedback, ideas, feature requests:  [support@avatarsdk.com](mailto:support@avatarsdk.com)
For commercial inquiries or licensing questions use [business_support@itseez3d.com](mailto:business_support@itseez3d.com) or [support@avatarsdk.com](mailto:support@avatarsdk.com)