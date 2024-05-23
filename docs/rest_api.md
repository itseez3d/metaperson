---
sidebar_label: 'REST API'
sidebar_position: 4
description: MetaPerson REST API
---

# REST API

MetaPerson Creator provides ready-to-use customer-facing solutions with low-code integration into your application. However, there might be conditions where you have to go with a completely different approach. For example, you have strict requirements on the application UI or a platform that is not yet supported. In this case, you must use the REST API for MetaPerson avatars. With the REST API, you can do anything MetaPerson Creator does with your exact requirements and even more. However, it may require more effort in the development.

Currently, MetaPerson Creator utilizes the MetaPerson avatars pipeline. See the relevant REST API documentation section&nbsp;[here](https://api.avatarsdk.com/#metaperson-2-0). It provides:

- `generated` and `metaperson` haircuts set: https://api.avatarsdk.com/#haircuts
- complete `metaperson` and split to top/bottom/shoes outfit sets: https://api.avatarsdk.com/#id5
- `metaperson` set of glasses: https://api.avatarsdk.com/#id8
- facial expressions and facial/body modification sets of blendshapes: https://api.avatarsdk.com/#blendshapes
- various export parameters to retrieve the fine-tuned final avatar model: https://api.avatarsdk.com/#id34
- a set of PBR textures available for export as static resources (for a client-side avatar model load time optimization): https://api.avatarsdk.com/#id38

You can find a step-by-step tutorial on creating a MetaPerson avatar from a photo and download the avatar’s mesh, haircut, and outfit in glb format using the curl command-line utility on the following&nbsp;[page](https://api.avatarsdk.com/samples/curl_metaperson_20/).


Please note that REST API for MetaPerson avatars is available only on the&nbsp;[Enterprise plan](https://avatarsdk.com/pricing-cloud/). Contact us at&nbsp;[support@avatarsdk.com](mailto:support@avatarsdk.com) if you have any questions.
