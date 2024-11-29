---
sidebar_label: 'DeepMotion'
description: Using DeepMotion Animate 3D and SayMotion with MetaPerson
---

# DeepMotion

[DeepMotion](https://www.deepmotion.com/) offers a comprehensive suite of advanced tools specifically designed for creating intricate skeletal animations. These advanced tools can animate MetaPerson avatars with high precision and realism, offering users an unmatched digital animation experience.

<div class="iframe-container">
<iframe width="560" height="315" allow="fullscreen"
src="https://www.youtube.com/embed/AV6cLtuZra4?si=RMnHzYgjKES1Awe2">
</iframe></div>

&nbsp;

<div class="iframe-container">
<iframe width="560" height="315" allow="fullscreen"
src="https://www.youtube.com/embed/ujMxgmFz-pM?si=mJqt8fa_OKHSB5Ha">
</iframe></div>

&nbsp;

## Animate 3D

[Animate 3D](https://www.deepmotion.com/animate-3d) is an innovative and powerful tool that transforms regular videos into captivating and immersive 3D animations. These animations are not only visually appealing but also feature realistic and smooth movements that bring your content to life in an engaging and dynamic way.

### Uploading 3D avatar

To generate a MetaPerson-compatible animation with Animate 3D, you will need to provide a sample avatar model in the "3D Models" section. Click the Upload button, select the FBX model, and then click the Create Animation button to continue.

![](./img/dm_upload.png)

#### Unity and Unreal Engine

For Unity, you may use the generic FBX model exported from the MetaPerson Creator; for Unreal Engine, you will need to export the FBX model from the [MetaPerson UE Plugin](https://github.com/avatarsdk/metaperson-ue-sample).

![](./img/dm_ue0.png)

![](./img/dm_ue1.png)

### Animation parameters

Provide your video file in the corresponding section:

![](./img/dm_vid.png)

and adjust the suggested animation settings.

![](./img/dm_set.png)

Create the animation and download the FBX file.

## SayMotion

[SayMotion](https://www.deepmotion.com/saymotion) uses Generative AI and DeepMotion's motion data to turn text into 3D animations. It removes the need for special equipment, expertise, or stock animations, making 3D animation available to everyone. 

### Uploading 3D avatar

You must upload the MetaPerson avatar like we did for Animate 3D. Click on the corresponding button and provide the FBX file. See the [platform-specific information](#unity-and-unreal-engine).

![](./img/sm_upl.png)

### Animation parameters

Choose the uploaded avatar and adjust the suggested animation settings.

![](./img/sm_set.png)

To proceed, provide your animation prompt. For more detailed guidance, refer to the [official DeepMotion guide](https://www.deepmotion.com/article/saymotion-text-prompt-guide), which offers comprehensive instructions on generating effective prompts for your animations. 

![](./img/sm_pro.png)

Generate the animation and download the FBX file.

## Importing animations

Import the FBX file that does not include T-Pose:

![](./img/dm_imp.png)

For Unreal Engine, use the following import settings:

![](./img/dm_ueimp.png)

When importing to your Unity project, it is crucial to set the animation type to "Humanoid" in the rig parameters:

![](./img/dm_unity_hum.png)

Then, set the following parameters in the "Animation" tab:

![](./img/dm_un_ap.png)

Create the Animation Controller and drag the imported animation to the graph. Set the Foot IK option to "true".

![](./img/dm_ac.png)

Set the Animation Controller to the corresponding property of the Animator, attached to the avatar's model on the scene:

![](./img/dm_unity_mod.png)

Now everything is ready and your MetaPerson avatars are fully animated and eagerly awaiting for you to come and see them in action!

## Additional information

We strongly encourage you to take the time to watch the comprehensive videos about using the DeepMotion technology in conjunction with the MetaPerson on both [Unity](https://youtu.be/AV6cLtuZra4?feature=shared) and [Unreal Engine](https://youtu.be/ujMxgmFz-pM?feature=shared). These tutorials are more detailed and provide a wealth of information that can be very helpful. If you still have any questions or need further assistance, please do not hesitate to contact us at support@avatarsdk.com.