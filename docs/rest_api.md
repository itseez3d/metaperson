---
sidebar_label: 'REST API'
sidebar_position: 4
description: MetaPerson REST API
---

# REST API

MetaPerson Creator provides ready to use customer-facing solution with low-code
integration into your application. However there might be conditions, where you
have to go with a completely different approach. Like you have strict
requirements on the application UI, or you have a platform not yet supported. In
this case you will need to use the REST API for MetaPerson avatars. With the REST API
you can do anything MetaPerson Creator does with your exact requirements and
even a little bit more. It may require more effort on the development, however.

Currently, MetaPerson Creator utilizes MetaPerson 2.0 avatars pipeline. See the
relevant REST API documentation section [here](https://api.avatarsdk.com/#metaperson-2-0). It provides:

- `generated` and `metaperson` haircuts set: link https://api.avatarsdk.com/#haircuts
- complete `metaperson` and split to top/bottom/shoes outfits sets:
  https://api.avatarsdk.com/#id5
- `metaperson` set of glasses: https://api.avatarsdk.com/#id8
- facial expressions and facial/body modification sets of blendshapes:
  https://api.avatarsdk.com/#blendshapes
- various export parameters to retrieve fine-tuned final avatar model:
  https://api.avatarsdk.com/#id34
- a set of PBR textures available for export and as a static resources (for a
  client-side avatar model load time optimization): https://api.avatarsdk.com/#id38

You can find a step-by-step tutorial on how to create a MetaPerson 2.0 avatar
from a photo and download the avatar's mesh, haircut, and outfit in glb format
using the curl command-line utility on the following [page](https://api.avatarsdk.com/samples/curl_metaperson_20/).


Please note, that REST API for MetaPerson avatars is available only on the
Enterprise plan. Contact us at [support@avatarsdk.com](mailto:support@avatarsdk.com) if you have any questions.
