---
sidebar_label: 'Import in UE Editor'
description: How to import an `.fbx` avatar generated with Metaperson Creator.
sidebar_position: 3
---

# Import in UE Editor

The main goal of the UE MetaPerson plugin is to help developers create, customize and import MetaPerson avatars at runtime. At the same time, with a couple of clicks you can import to the Editor `.fbx` avatars you created with web version of the [MetaPerson Creator](https://metaperson.avatarsdk.com/). To import `.fbx`:

1. Export the archive with avatar you downloaded from the MetaPerson Creator.
2. Open the Plugin window:

![WebBrowser plugin](img/ue_window_import.png)

3. Click on the corresponding button:

![Import Button](img/button_import.png)

4. Provide path to the `.fbx` file

![FBX file](img/fbx-file.png)

After that the import process begins

![FBX import](img/fbx-import-progress.png)

5. To see your avatar in action, load and run the `/AvatarSDKMetaperson2/ThirdPerson/Maps/LoadAvatarMap`. You will see the imported avatar on the scene.

![FBX import result](img/avatar_loaded.png)

You can still seamleslly change the avatar skeletal mesh with new one imported from .glb file at runtime.

All of the assets imported from `.fbx` are available at `/All/Game/MetapersonAvatars` folder.
