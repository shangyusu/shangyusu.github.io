---
title: "Dynamic Time-Aware Attention to Speaker Roles and Contexts for Spoken Language Understanding"
date: "2017-09-02T22:40:32.169Z"
layout: post
draft: false
path: "/posts/asru2017/"
category: "NLU"
conference: "ASRU 2017"
tags:
  - "Dialogue"
  - "NLU"
  - "Attention"
description: "Po-Chun Chen*, Ta-Chung Chi*, Shang-Yu Su*, and Yun-Nung Chen (co-first author)"
---
Full paper:
<a href="https://arxiv.org/abs/1710.00165" target="_blank">arXiv</a>,
<a href="https://ieeexplore.ieee.org/document/8268985/" target="_blank">IEEE</a>

Code: 
<a href="https://github.com/MiuLab/Time-SLU" target="_blank">GitHub</a>

Cite the paper:
```
@inproceedings{chen2017dynamic,
  title={Dynamic Time-Aware Attention to Speaker Roles and Contexts for Spoken Language Understanding},
  author={Chen, Po-Chun and Chi, Ta-Chung and Su, Shang-Yu and Chen, Yun-Nung},
  booktitle={Proceedings of ASRU},
  year={2017}
}
```

Spoken language understanding (SLU) is an essential component in conversational systems.
Most SLU components treat each utterance independently, and then the following components aggregate the multi-turn information in the separate phases.

In order to avoid error propagation and effectively utilize contexts, prior works leveraged history for contextual SLU.
However, the previous models only paid attention to the content in history utterances without considering their temporal information and speaker roles.

In dialogues, the most recent utterances should be more important than the least recent ones.
Furthermore, users usually pay attention to 1) self history for reasoning and 2) others’ utterances for listening, the speaker of the utterances may provides informative cues to help understanding.

Therefore, this paper proposes an attention-based network that additionally leverages temporal information and speaker role for better SLU, where the attention to contexts and speaker roles can be automatically learned in an end-to-end manner.
The experiments on the benchmark Dialogue State Tracking Challenge 4 (DSTC4) dataset show that the time-aware dynamic role attention networks significantly improve the understanding performance (The released code: https://github.com/MiuLab/Time-SLU).
