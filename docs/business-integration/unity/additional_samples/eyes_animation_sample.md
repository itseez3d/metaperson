---
sidebar_label: 'Eyes Animation Sample'
description: MetaPerson Creator eyes animation sample
sidebar_position: 3
---

# MetaPerson Eyes Animation Sample

This sample demonstrates how to animate eye movements, such as looking up, down, left, and right.

![Eyes Movements](img/eyes_movements.jpg "Eyes Movements")

The source code of the sample is available on **GitHub**: [MetaPerson Eyes Animation Sample](https://github.com/avatarsdk/metaperson-loader-unity/blob/main/Documentation~/MetaPersonCreatorEyesAnimationSample.md)

## How To Move Eyes

To move the eyes, follow these steps:

1. Set the corresponding blendshape values for the **AvatarHead** and **AvatarEyelashes** meshes.
2. Rotate the **LeftEye** and **RightEye** bones.
   - The rotation angle should be interpolated between zero and the maximum angle value.
   - This angle depends on the blendshape weight.

Blendshapes names and maximum angles values can be found below.

### Look Up Extreme Position

1. **AvatarHead** and **AvatarEyelashes** blendshapes:
  * `eyeLookUpLeft` = MAX_BLEND_VALUE
  * `eyeLookUpRight` = MAX_BLEND_VALUE
  * `eyeLookDownLeft` = 0
  * `eyeLookDownRight` = 0
  
2. Rotate **LeftEye** and **RightEye** along the local X axis by -23 degrees.

### Look Down Extreme Position

1\. **AvatarHead** and **AvatarEyelashes** blendshapes:
  * `eyeLookUpLeft` = 0
  * `eyeLookUpRight` = 0
  * `eyeLookDownLeft` = MAX_BLEND_VALUE
  * `eyeLookDownRight` = MAX_BLEND_VALUE
  
2\. Rotate **LeftEye** and **RightEye** along the local X axis by 23 degrees.

### Look Left Extreme Position

1\. **AvatarHead** and **AvatarEyelashes** blendshapes:
  * `eyeLookOutLeft` = MAX_BLEND_VALUE
  * `eyeLookOutRight` = 0
  * `eyeLookInLeft` = 0
  * `eyeLookInRight` = MAX_BLEND_VALUE
  
2\. Rotate **LeftEye** along the local Y axis by -45 degrees.

3\. Rotate **RightEye** along the local Y axis by -25 degrees.

### Look Right Extreme Position

1\. **AvatarHead** and **AvatarEyelashes** blendshapes:
  * eyeLookOutLeft = 0
  * eyeLookOutRight = MAX_BLEND_VALUE
  * eyeLookInLeft = MAX_BLEND_VALUE
  * eyeLookInRight = 0
  
2\. Rotate **LeftEye** along the local Y axis by 25 degress.

3\. Rotate **RightEye** along the local Y axis by 45 degress.